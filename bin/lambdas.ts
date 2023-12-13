// Trying to keep this roughly ordered based on the volume / criticality of the functions
export const lambdaDefinitions = [
  // ===================
  // High usage
  // ===================
  {
    id: "CreateFullReviewStack-PopulateGameSummaryFunction-1CKMNQ86EWASV",
    name: "trigger-create-full-review",
  },
  {
    id: "MatchStatsStack-ProcessMatchStatsFunction2-8qoxF7NzjWs5",
    name: "api-retrieve-user-match-stats-2",
  },
  {
    id: "UserBgsPostMatchStatsStac-ProcessSaveBgsPostMatchS-1PD9UEYMIOSQ8",
    name: "process-save-bgs-post-match-stats",
  },
  {
    id: "RetrieveUserBgsBestStatsS-RetrieveUserBgsBestStats-tkbV418sS3Lg",
    name: "api-retrieve-user-bgs-best-stats-2",
  },
  {
    id: "DuelsLeaderboardStack-RetrieveDuelsLeaderboardFunc-gVud1Wo2IE8j",
    name: "api-retrieve-duels-leaderboard-2",
  },
  {
    id: "RetrieveUsersDuelsRunsSta-RetrieveUserDuelsRunFunc-7CGn1JSO1Mmx",
    name: "api-retrieve-user-duels-runs-2",
  },
  {
    id: "UserAchievementsStack-RetrieveAchievementsFunction-tlzvG2EWGUci",
    name: "api-retrieve-achievements-2",
  },
  {
    id: "UserArenaRewardsStack-RetrieveArenaRewardsFunction-yu1culDYtDZb",
    name: "api-retrieve-arena-rewards-2",
  },
  {
    id: "UserPacksStack-ProcessSavePacksFunction-1CBREIG8IM3RF",
    name: "process-save-packs",
  },
  {
    id: "AssignArchetypeStack-ProcessAssignArchetypeFunctio-1hR8pDYlT7SF",
    name: "process-assign-archetype",
  },
  {
    id: "ArenaMatchStatsStack-ArenaMatchStatsProcessFunctio-BeRSvEwimZhR",
    name: "process-arena-match-stats",
  },
  {
    id: "OwLegacySubStack-GetSubFromLegacyOwSub-vqH0APqzhFMx",
    name: "api-ow-legacy-get-status",
  },
  {
    id: "OwLegacySubStack-UnsubscribeUserFromLegacyOwSub-2u1IIVeVc5CH",
    name: "api-ow-legacy-unsub",
  },
  {
    id: "OwLegacySubStack-GetTebexSubDetails-v0VuBSTs7bmW",
    name: "api-get-tebex-sub-details",
  },
  // ===================
  // Crons
  // ===================
  {
    id: "ConstructedStatsStack-AggregateHourlyConstructedDe-G3dWAh8a6mbt",
    name: "cron-aggregate-hourly-constructed-deck-stats",
  },
  {
    id: "ConstructedStatsStack-BuildHourlyConstructedDeckSt-W2nqr4VnQMBZ",
    name: "cron-build-hourly-constructed-deck-stats",
  },
  {
    id: "BuildBattlegroundsHeroSta-AggregateHourlyHeroStats-q2fATpfKb5vX",
    name: "cron-aggregate-hourly-bgs-hero-stats",
  },
  {
    id: "BuildBattlegroundsHeroStatsS-BuildHourlyHeroStats2-DTnWtoHAP07E",
    name: "cron-build-hourly-bgs-hero-stats",
  },
  {
    id: "ConstructedStatsStack-AggregateDailyConstructedDec-6CGw2KZGrArv",
    name: "cron-aggregate-daily-constructed-deck-stats",
  },
  {
    id: "ConstructedStatsStack-BuildDailyConstructedDeckSta-qExPWzoLx5TX",
    name: "cron-build-daily-constructed-deck-stats",
  },
  {
    id: "BuildBattlegroundsHeroSta-BuildBgsHeroStatsFunctio-1SZDUSKPTX915",
    name: "cron-build-bgs-hero-stats",
  },
  {
    id: "CronExportStatsStack-ExportHsDecks-SQQQwX0TL7eF",
    name: "cron-export-stats-hsdecks",
  },
  {
    id: "PublishBgsPerfectGameStac-BuildBgsPerfectGamesFunc-FGdcis7zkK8W",
    name: "cron-build-bgs-perfect-games",
  },
  {
    id: "TriggerBuildDuelsStatsStac-BuildDuelsStatsFunction-C99P6IG8LRFL",
    name: "cron-build-duels-stats",
  },
  {
    id: "LotteryStack-PickLotterWinnersFunction-tOirJ6hxlXOL",
    name: "cron-pick-lottery-winners",
  },
  {
    id: "ArenaStatsStack-AggregateDailyArenaClassStats-BXUPpt2tjwRt",
    name: "cron-aggregate-daily-arena-class-stats",
  },
  {
    id: "ArenaStatsStack-BuildDailyArenaClassStats-yE4YEqM7RVal",
    name: "cron-build-daily-arena-class-stats",
  },
  // ===================
  // The rest
  // ===================
  {
    id: "ConstructedStatsStack-RetrieveConstructedDeckDetai-FTPQYhwnZT1v",
    name: "api-get-constructed-meta-deck",
  },
  {
    id: "RetrieveUsersDuelsRunsSta-RetrieveUserDuelsRunFunc-QEE0W6SAZ3M",
    name: "api-retrieve-user-match-stats",
  },
  {
    id: "TwitchPresenceStack-StartSaveTwitchPresenceFunctio-lcpZzlXVCHOj",
    name: "api-start-save-twitch-presence-2",
  },
  {
    id: "TwitchPresenceStack-RetrieveTwitchPresenceFunction-asbSWYenLgW0",
    name: "api-retrieve-twitch-presence-2",
  },
  {
    id: "UserBgsPostMatchStatsStac-RetrieveBgsPostMatchStat-A84Wj7WJ7NqZ",
    name: "api-retrieve-bgs-post-match-stats-2",
  },
  {
    id: "UserArenaRewardsStack-StartSaveArenaRewardsFunctio-iSDQqoK8wzIs",
    name: "api-start-save-arena-rewards-2",
  },
  {
    id: "UserBgsPostMatchStatsStac-StartSaveBgsPostMatchSta-s4bDntWeqkXH",
    name: "api-start-save-bgs-post-match-stats-2",
  },
  {
    id: "AuthStack-AuthFunction-Q68CiWS0cRqs",
    name: "auth-website",
  },
  {
    id: "IdFromBgsSimulationSample-GetIdFromBgsSimulationSa-XdHoinVSW1lU",
    name: "api-bgs-get-id-from-sample-2",
  },
  {
    id: "MRLambdaStack-AggregatorFunction-1MAQYAZ77F682",
    name: "mr-lambda-aggregator",
  },
  {
    id: "MRLambdaStack-DriverFunction-1HMIH97JIJS2A",
    name: "mr-lambda-driver",
  },
  {
    id: "MRLambdaStack-MapperFunction-1NU11S9BLCB9B",
    name: "mr-lambda-mapper",
  },
  {
    id: "MRLambdaStack-MapperWatcherFunction-1RQPAF6SW7ZEC",
    name: "mr-lambda-mapper-watcher",
  },
  {
    id: "MRLambdaStack-ReducerFunction-1RUWC6SIUC6DN",
    name: "mr-lambda-reducer",
  },
  {
    id: "RetrieveBgsSimulationSamp-RetrieveBgsSimulationSam-NB5kBWGr0f0I",
    name: "api-bgs-retrieve-simulation-sample-2",
  },
  {
    id: "RetrieveDuelsSingleRunSta-RetrieveDuelsSingleRunFu-ixek2vFX6Dlu",
    name: "api-retrieve-duels-single-run-2",
  },
  {
    id: "RetrieveGlobalStatsStack-ProcessGlobalStatsFunctio-13LLAFGKONTIZ",
    name: "api-retrieve-user-global-stats",
  },
  {
    id: "RetrieveGlobalStatsStack-RetrieveGlobalStatsFuncti-XoTxr4I7PIwH",
    name: "api-retrieve-overview-global-stats-2",
  },
  {
    id: "RetrieveReviewStack-RetrieveReviewFunction2-JWlhajdkQTjc",
    name: "api-retrieve-review-2",
  },
  {
    id: "SimulateBgsBattleStack-SimulateBgsBattleFunctionLi-BhXWqLooZGey",
    name: "api-simulate-battlegrounds-battle-2",
  },
  {
    id: "SyncDataStack-ProcessSyncStatsFunction-sEKcsqtW3rys",
    name: "process-sync-stats",
  },
  {
    id: "UserMappingStack2-StartSaveMappingFunction-1XPZIJ8YG29RH",
    name: "api-start-save-mapping",
  },
  {
    id: "UserMappingStack2-StartSaveMappingFunction2-N8wDp6ws7NqN",
    name: "api-start-save-mapping-2",
  },
  {
    id: "UserProfileStack-RetrieveOwnProfileFunction-OPzqESAYjDju",
    name: "api-retrieve-own-profile",
  },
  {
    id: "UserProfileStack-RetrieveOtherProfileFunction-aNvcb2vibmPU",
    name: "api-retrieve-other-profile",
  },
  {
    id: "UserProfileStack-UpdateProfileFunction-oDgojeMfjskx",
    name: "api-update-profile",
  },
  {
    id: "UserProfileStack-ShareProfileFunction-IedKMblyFEBn",
    name: "api-share-profile",
  },
  {
    id: "UserProfileStack-UnshareProfileFunction-d1TVXzlunAht",
    name: "api-unshare-profile",
  },
  {
    id: "UserProfileStack-RetrieveProfileFunction-FLZZpdmlf10v",
    name: "api-retrieve-profile",
  },
  {
    id: "AuthStack-GenerateFirestoneTokenFunction-w2TohjJDEwgm",
    name: "api-generate-firestone-token",
  },
  {
    id: "LotteryStack-UpdateLotteryFunction-gZOvlcn8cWE6",
    name: "api-lottery-update",
  },
];
