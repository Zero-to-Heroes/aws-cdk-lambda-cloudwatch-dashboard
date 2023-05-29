#!/usr/bin/env node
import * as cdk from "@aws-cdk/core";
import { CdkLambdaDashboardStack } from "../lib/cdk-lambda-dashboard-stack";

const app = new cdk.App();

const lambdaDashboardStack = new CdkLambdaDashboardStack(
  app,
  "LambdaDashboardStack",
  {
    dashboardName: "LambdaDashboard",
  }
);

// const transactionsApi = new TransactionsAPI(
//   lambdaDashboardStack,
//   "TransactionsApi"
// );
// lambdaDashboardStack.addLambda("BeginTransaction", "BeginTransaction");
// lambdaDashboardStack.addLambda("UpdateTransaction", "UpdateTransaction");
// lambdaDashboardStack.addLambda("GetTransaction", "GetTransaction");

lambdaDashboardStack.addLambda(
  "CreateFullReviewStack-PopulateGameSummaryFunction-1CKMNQ86EWASV",
  "trigger-create-full-review"
);
lambdaDashboardStack.addLambda(
  "RetrieveUsersDuelsRunsSta-RetrieveUserDuelsRunFunc-QEE0W6SAZ3M",
  "api-retrieve-user-match-stats"
);
lambdaDashboardStack.addLambda(
  "MatchStatsStack-ProcessMatchStatsFunction2-8qoxF7NzjWs5",
  "api-retrieve-user-match-stats-2"
);
lambdaDashboardStack.addLambda(
  "RetrieveUserBgsBestStatsS-RetrieveUserBgsBestStats-F21W8EPJLG9P",
  "api-retrieve-user-bgs-best-stats"
);
lambdaDashboardStack.addLambda(
  "RetrieveUserBgsBestStatsS-RetrieveUserBgsBestStats-tkbV418sS3Lg",
  "api-retrieve-user-bgs-best-stats-2"
);
lambdaDashboardStack.addLambda(
  "TwitchPresenceStack-StartSaveTwitchPresenceFunctio-hq7XqPkpeOB0",
  "api-start-save-twitch-presence"
);
lambdaDashboardStack.addLambda(
  "TwitchPresenceStack-StartSaveTwitchPresenceFunctio-lcpZzlXVCHOj",
  "api-start-save-twitch-presence-2"
);
lambdaDashboardStack.addLambda(
  "TwitchPresenceStack-ProcessSaveTwitchPresenceFunct-CTG1cCc2BcWb",
  "process-save-twitch-presence"
);
lambdaDashboardStack.addLambda(
  "TwitchPresenceStack-RetrieveTwitchPresenceFunction-asbSWYenLgW0",
  "api-retrieve-twitch-presence-2"
);
lambdaDashboardStack.addLambda(
  "UserAchievementsStack-RetrieveAchievementsFunction-4WKJNDR8R6D2",
  "api-retrieve-achievements"
);
lambdaDashboardStack.addLambda(
  "UserAchievementsStack-RetrieveAchievementsFunction-tlzvG2EWGUci",
  "api-retrieve-achievements-2"
);
lambdaDashboardStack.addLambda(
  "UserBgsPostMatchStatsStac-ProcessSaveBgsPostMatchS-1PD9UEYMIOSQ8",
  "process-save-bgs-post-match-stats"
);
lambdaDashboardStack.addLambda(
  "UserBgsPostMatchStatsStac-RetrieveBgsPostMatchStat-A84Wj7WJ7NqZ",
  "api-retrieve-bgs-post-match-stats-2"
);

lambdaDashboardStack.addLambda(
  "AuthStack-AuthFunction-Q68CiWS0cRqs",
  "auth-website"
);
lambdaDashboardStack.addLambda(
  "BuildBattlegroundsHeroSta-BuildBgsHeroStatsFunctio-1SZDUSKPTX915",
  "cron-build-bgs-hero-stats"
);
lambdaDashboardStack.addLambda(
  "CronExportStatsStack-ExportHsDecks-SQQQwX0TL7eF",
  "cron-export-stats-hsdecks"
);
lambdaDashboardStack.addLambda(
  "DuelsLeaderboardStack-RetrieveDuelsLeaderboardFunc-gVud1Wo2IE8j",
  "api-retrieve-duels-leaderboard-2"
);
lambdaDashboardStack.addLambda(
  "FeedbackStack-ProcessFeedbackFunction-13539NTZ0TH39",
  "api-feedback"
);
lambdaDashboardStack.addLambda(
  "IdFromBgsSimulationSample-GetIdFromBgsSimulationSa-10AGMMKZ66GWW",
  "api-save-bgs-simulation-sample"
);
lambdaDashboardStack.addLambda(
  "IdFromBgsSimulationSample-GetIdFromBgsSimulationSa-XdHoinVSW1lU",
  "api-bgs-get-id-from-sample-2"
);
lambdaDashboardStack.addLambda(
  "MRLambdaStack-AggregatorFunction-1MAQYAZ77F682",
  "mr-lambda-aggregator"
);
lambdaDashboardStack.addLambda(
  "MRLambdaStack-DriverFunction-1HMIH97JIJS2A",
  "mr-lambda-driver"
);
lambdaDashboardStack.addLambda(
  "MRLambdaStack-MapperFunction-1NU11S9BLCB9B",
  "mr-lambda-mapper"
);
lambdaDashboardStack.addLambda(
  "MRLambdaStack-MapperWatcherFunction-1RQPAF6SW7ZEC",
  "mr-lambda-mapper-watcher"
);
lambdaDashboardStack.addLambda(
  "MRLambdaStack-ReducerFunction-1RUWC6SIUC6DN",
  "mr-lambda-reducer"
);
lambdaDashboardStack.addLambda(
  "PublishBgsPerfectGameStac-BuildBgsPerfectGamesFunc-FGdcis7zkK8W",
  "cron-build-bgs-perfect-games"
);
lambdaDashboardStack.addLambda(
  "RetrieveBgsSimulationSamp-RetrieveBgsSimulationSam-NB5kBWGr0f0I",
  "api-bgs-retrieve-simulation-sample-2"
);
lambdaDashboardStack.addLambda(
  "RetrieveDuelsSingleRunSta-RetrieveDuelsSingleRunFu-ixek2vFX6Dlu",
  "api-retrieve-duels-single-run-2"
);
lambdaDashboardStack.addLambda(
  "RetrieveGlobalStatsStack-ProcessGlobalStatsFunctio-13LLAFGKONTIZ",
  "api-retrieve-user-global-stats"
);
lambdaDashboardStack.addLambda(
  "RetrieveGlobalStatsStack-RetrieveGlobalStatsFuncti-XoTxr4I7PIwH",
  "api-retrieve-overview-global-stats-2"
);
lambdaDashboardStack.addLambda(
  "RetrieveReviewStack-RetrieveReviewFunction2-JWlhajdkQTjc",
  "api-retrieve-review-2"
);
lambdaDashboardStack.addLambda(
  "RetrieveUsersDuelsRunsSta-RetrieveUserDuelsRunFunc-7CGn1JSO1Mmx",
  "api-retrieve-user-duels-runs-2"
);
lambdaDashboardStack.addLambda(
  "SimulateBgsBattleStack-SimulateBgsBattleFunctionLi-BhXWqLooZGey",
  "api-simulate-battlegrounds-battle-2"
);
lambdaDashboardStack.addLambda(
  "SyncDataStack-ProcessSyncStatsFunction-sEKcsqtW3rys",
  "process-sync-stats"
);
lambdaDashboardStack.addLambda(
  "TriggerBuildDuelsStatsStac-BuildDuelsStatsFunction-C99P6IG8LRFL",
  "cron-build-duels-stats"
);
lambdaDashboardStack.addLambda(
  "TriggerBuildMercenariesSt-BuildMercenariesStatsFun-lJdHCPY81s31",
  "cron-build-mercenaries-stats"
);
lambdaDashboardStack.addLambda(
  "TwitterStack-BuildTwitterFunction-00rWH4qXQgww",
  "cron-build-twitter"
);
lambdaDashboardStack.addLambda(
  "UserAchievementsStack-StartSaveAchievementsFunctio-1Q0LH8YML57AP",
  "api-start-save-achievements"
);
lambdaDashboardStack.addLambda(
  "UserArenaRewardsStack-RetrieveArenaRewardsFunction-yu1culDYtDZb",
  "api-retrieve-arena-rewards-2"
);
lambdaDashboardStack.addLambda(
  "UserArenaRewardsStack-StartSaveArenaRewardsFunctio-QaYyx36W2LKg",
  "api-start-save-arena-rewards"
);
lambdaDashboardStack.addLambda(
  "UserArenaRewardsStack-StartSaveArenaRewardsFunctio-iSDQqoK8wzIs",
  "api-start-save-arena-rewards-2"
);
lambdaDashboardStack.addLambda(
  "UserBgsPostMatchStatsStac-RetrieveBgsPostMatchStat-MC9A0ZZB1CBQ",
  "api-retrieve-bgs-post-match-stats"
);
lambdaDashboardStack.addLambda(
  "UserBgsPostMatchStatsStac-StartSaveBgsPostMatchSta-U1NFYLWK3E0N",
  "api-start-save-bgs-post-match-stats"
);
lambdaDashboardStack.addLambda(
  "UserBgsPostMatchStatsStac-StartSaveBgsPostMatchSta-s4bDntWeqkXH",
  "api-start-save-bgs-post-match-stats-2"
);
lambdaDashboardStack.addLambda(
  "UserMappingStack2-StartSaveMappingFunction-1XPZIJ8YG29RH",
  "api-start-save-mapping"
);
lambdaDashboardStack.addLambda(
  "UserMappingStack2-StartSaveMappingFunction2-N8wDp6ws7NqN",
  "api-start-save-mapping-2"
);
lambdaDashboardStack.addLambda(
  "UserPacksStack-ProcessSavePacksFunction-1CBREIG8IM3RF",
  "process-save-packs"
);
lambdaDashboardStack.addLambda(
  "UserProfileStack-RetrieveOwnProfileFunction-OPzqESAYjDju",
  "api-retrieve-own-profile"
);
lambdaDashboardStack.addLambda(
  "UserProfileStack-UpdateProfileFunction-oDgojeMfjskx",
  "api-update-profile"
);
lambdaDashboardStack.addLambda(
  "UserProfileStack-RetrieveProfileFunction-FLZZpdmlf10v",
  "api-retrieve-profile"
);
lambdaDashboardStack.addLambda(
  "UserPrefsStack-RetrievePrefsFunction2-vsyqbBbNwpa5",
  "api-retrieve-prefs-2"
);
lambdaDashboardStack.addLambda(
  "UserPrefsStack-StartSavePrefsFunction2-BAihDOyl63Qj",
  "api-start-save-prefs-2"
);
