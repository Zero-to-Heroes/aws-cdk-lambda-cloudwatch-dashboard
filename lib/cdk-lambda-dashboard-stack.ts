import {
  Dashboard,
  GraphWidget,
  IWidget,
  MathExpression,
  Metric,
} from "@aws-cdk/aws-cloudwatch";
import * as cdk from "@aws-cdk/core";

export interface LambdaDashboardsStackProps extends cdk.StackProps {
  dashboardName: string;
}

const GRAPH_WIDTH = 4;
// const GRAPH_HEIGHT = 7;
const SLOW_PERIOD = 60;

export class CdkLambdaDashboardStack extends cdk.Stack {
  protected readonly lambdaDashboard: Dashboard;

  protected readonly invocations = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Invocations",
    statistic: "sum",
  });

  protected readonly averageDuration = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Duration",
    statistic: "average",
    color: "#ff7f0e",
    period: cdk.Duration.minutes(SLOW_PERIOD),
  });

  protected readonly maxDuration = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Duration",
    statistic: "maximum",
    color: "#2ca02c",
    period: cdk.Duration.minutes(SLOW_PERIOD),
  });

  protected readonly errors = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Errors",
    statistic: "sum",
    color: "#d13212",
  });

  //   protected readonly availability = new Metric({
  //     namespace: "AWS/Lambda",
  //     metricName: "Success rate (%)",
  //     label: "Success rate (%)",
  //     statistic: "sum",
  //     color: "#2ca02c",
  //   });

  protected readonly availability = (functionName: string) =>
    new MathExpression({
      label: "Success rate (%)",
      color: "#2ca02c",
      expression: "100 - 100 * errors / MAX([errors, invocations])",
      usingMetrics: {
        errors: this.errors.with({
          dimensions: { FunctionName: functionName },
        }),
        invocations: this.invocations.with({
          dimensions: { FunctionName: functionName },
        }),
      },
    });

  // TODO/ Maybe look https://aws.amazon.com/blogs/mt/visualizing-amazon-cloudwatch-costs-part-2-where-does-the-data-come-from/
  // protected readonly cost = (functionName: string) =>
  //   new MathExpression({
  //     label: "Cost ($)",
  //     color: "#2ca02c",
  //     expression: "100 - 100 * errors / MAX([errors, invocations])",
  //     usingMetrics: {
  //       errors: this.errors.with({
  //         dimensions: { FunctionName: functionName },
  //       }),
  //       invocations: this.invocations.with({
  //         dimensions: { FunctionName: functionName },
  //       }),
  //     },
  //   });

  protected readonly throttles = new Metric({
    namespace: "AWS/Lambda",
    metricName: "Throttles",
    statistic: "sum",
  });

  protected readonly provisionedConcurrencySpillovers = new Metric({
    namespace: "AWS/Lambda",
    metricName: "ProvisionedConcurrencySpilloverInvocations",
    statistic: "sum",
  });

  protected readonly concurrentExecutions = new Metric({
    namespace: "AWS/Lambda",
    metricName: "ConcurrentExecutions",
    statistic: "maximum",
    period: cdk.Duration.minutes(SLOW_PERIOD),
  });

  protected readonly provisionedConcurrentExecutions = new Metric({
    namespace: "AWS/Lambda",
    metricName: "ProvisionedConcurrentExecutions",
    statistic: "sum",
  });

  protected readonly provisionedConcurrencyUtilization = new Metric({
    namespace: "AWS/Lambda",
    metricName: "ProvisionedConcurrencyUtilization",
    statistic: "sum",
  });

  protected readonly memoryUsagePercent = new Metric({
    namespace: "LambdaInsights",
    metricName: "memory_utilization",
    statistic: "maximum",
  });
  protected readonly memoryUsagePValue = new Metric({
    namespace: "LambdaInsights",
    metricName: "used_memory_max",
    statistic: "maximum",
  });

  constructor(scope: cdk.App, id: string, props: LambdaDashboardsStackProps) {
    super(scope, id, props);

    this.lambdaDashboard = new Dashboard(this, props.dashboardName, {
      dashboardName: props.dashboardName,
    });
  }

  // adds one row to dashboard for each lambda function
  public addLambda(functionName: string, displayName: string) {
    const dimensions = {
      FunctionName: functionName,
    };

    this.lambdaDashboard.addWidgets(
      new GraphWidget({
        title: displayName + " Invocations",
        left: [
          this.invocations.with({
            dimensions: dimensions,
          }),
        ],
        width: GRAPH_WIDTH,
        // height: GRAPH_HEIGHT,
      }),

      new GraphWidget({
        title: displayName + " Errors",
        left: [
          this.errors.with({
            dimensions: dimensions,
          }),
        ],
        right: [this.availability(functionName)],
        width: GRAPH_WIDTH,
        // height: GRAPH_HEIGHT,
      }),

      new GraphWidget({
        title: displayName + " Durations",
        left: [this.averageDuration.with({ dimensions: dimensions })],
        right: [this.maxDuration.with({ dimensions: dimensions })],
        width: GRAPH_WIDTH,
        // height: GRAPH_HEIGHT,
      }),

      new GraphWidget({
        title: displayName + " Max Concurrent Executions",
        left: [
          this.concurrentExecutions.with({
            dimensions: dimensions,
          }),
        ],
        width: GRAPH_WIDTH,
        // height: GRAPH_HEIGHT,
      }),

      new GraphWidget({
        title: displayName + " Max Memory",
        left: [
          this.memoryUsagePercent.with({
            dimensions: {
              function_name: functionName,
            },
          }),
        ],
        right: [
          this.memoryUsagePValue.with({
            dimensions: {
              function_name: functionName,
            },
          }),
        ],
        width: GRAPH_WIDTH,
        // height: GRAPH_HEIGHT,
      })

      // new GraphWidget({
      //   title: displayName + " Throttles",
      //   left: [
      //     this.throttles.with({
      //       dimensions: dimensions,
      //     }),
      //   ],
      // })

      // new GraphWidget({
      //   title: displayName + " Provisioned Concurrency Utilization",
      //   left: [
      //     this.provisionedConcurrencyUtilization.with({
      //       dimensions: dimensions,
      //     }),
      //   ],
      // })
    );
  }

  public addWidget(widget: IWidget) {
    this.lambdaDashboard.addWidgets(widget);
  }
}
