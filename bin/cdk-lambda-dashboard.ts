#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { globalDashboard } from './dashboards/global-dashboard';
import { lightDashboard } from './dashboards/light-board';

const app = new cdk.App();
globalDashboard(app);
lightDashboard(app);
