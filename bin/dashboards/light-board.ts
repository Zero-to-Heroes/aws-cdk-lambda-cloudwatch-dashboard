#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkLambdaDashboardStack } from '../../lib/cdk-lambda-dashboard-stack';
import { lambdaDefinitions } from '../lambdas';

export const lightDashboard = (app: cdk.App) => {
	const lambdaDashboardStack = new CdkLambdaDashboardStack(app, 'LightDashboardStack', {
		dashboardName: 'LightDashboard',
	});

	// Iterate over the lambdaDefinitions array to add Lambda widgets
	lambdaDefinitions.forEach(({ id, name }) => {
		lambdaDashboardStack.addLambdaLight(id, name);
	});
};
