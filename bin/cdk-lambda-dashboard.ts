#!/usr/bin/env node
import { GraphWidget, Metric } from "@aws-cdk/aws-cloudwatch";
import * as cdk from "@aws-cdk/core";
import { CdkLambdaDashboardStack } from "../lib/cdk-lambda-dashboard-stack";
import { lambdaDefinitions } from "./lambdas";

const app = new cdk.App();
const lambdaDashboardStack = new CdkLambdaDashboardStack(
  app,
  "LambdaDashboardStack",
  {
    dashboardName: "LambdaDashboard",
  }
);

// Create a graph widget to display incoming bytes for each Lambda function
const logsWidget = new GraphWidget({
  width: 24, // Width of the widget
  title: "Incoming Bytes for Lambda Functions", // Widget title
  left: [], // Metrics to display on the left Y-axis
  right: [], // Metrics to display on the right Y-axis
  height: 12,
});

// Add incoming bytes metrics for each Lambda function to the graph widget
lambdaDefinitions.forEach(({ id, name }, index) => {
  const metricName = "IncomingBytes"; // Replace with the correct metric name
  const metric = new Metric({
    label: name,
    namespace: "AWS/Logs", // Lambda metric namespace
    metricName,
    dimensions: {
      LogGroupName: `/aws/lambda/${id}`,
    },
    statistic: "Sum", // You can change the statistic based on your preference
  });

  // Add the metric to the graph widget
  logsWidget.addLeftMetric(metric);
});

lambdaDashboardStack.addWidget(logsWidget);

// Iterate over the lambdaDefinitions array to add Lambda widgets
lambdaDefinitions.forEach(({ id, name }) => {
  lambdaDashboardStack.addLambda(id, name);
});
