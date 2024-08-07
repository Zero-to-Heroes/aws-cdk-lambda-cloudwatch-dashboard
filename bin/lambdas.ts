// Trying to keep this roughly ordered based on the volume / criticality of the functions
export const lambdaDefinitions = [
  // ===================
  // High usage
  // ===================
  {
    id: "CreateFullReviewStack-PopulateGameSummaryFunction-1CKMNQ86EWASV",
    name: "trigger-create-full-review",
  },
  // ===================
  // Crons
  // ===================
  {
    id: "ConstructedStatsStack-FinalStats-0SB3G7u8MjJ0",
    name: "cron-constructed-final-stat",
  },
  {
    id: "ConstructedStatsStack-FinalStatsByClass-m8tytnan6Rm2",
    name: "cron-constructed-final-stats-by-class",
  },
  {
    id: "ConstructedStatsStack-BuildDailyAggregateDeckStats-v1LTE9sunYuL",
    name: "cron-build-daily-aggregate-deck-stats",
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
    id: "BuildBattlegroundsHeroSta-AggregateHourlyHeroStats-2dSGiUydOT2g",
    name: "cron-aggregate-hourly-bgs-hero-stats-duos",
  },
  {
    id: "BuildBattlegroundsHeroSta-BuildHourlyHeroStatsDuos-EV0XIMcKYK6Q",
    name: "cron-build-hourly-bgs-hero-stats-duos",
  },

  {
    id: "CronExportStatsStack-ExportHsDecks-SQQQwX0TL7eF",
    name: "cron-export-stats-hsdecks",
  },
  {
    id: "PublishBgsPerfectGameStac-BuildBgsPerfectGamesFunc-FGdcis7zkK8W",
    name: "cron-build-bgs-perfect-games",
  },
  // {
  //   id: "TriggerBuildDuelsStatsStac-BuildDuelsStatsFunction-C99P6IG8LRFL",
  //   name: "cron-build-duels-stats",
  // },
  {
    id: "LotteryStack-PickLotterWinnersFunction-tOirJ6hxlXOL",
    name: "cron-pick-lottery-winners",
  },
  {
    id: "ArenaStatsStack-FinalStats-6Lv4TUiLl6sl",
    name: "cron-arena-final-stats",
  },
  {
    id: "ArenaStatsStack-BuildDailyAggregateStats-DCloqNEtgSre",
    name: "cron-build-daily-arena-aggregate-stats",
  },
  {
    id: "ArenaStatsStack-BuildHourlyArenaClassStats-ratbVgmKuz8H",
    name: "cron-build-hourly-arena-class-stats",
  },
  {
    id: "ArenaDraftPickStack-FinalStats-apdyJIE7yhus",
    name: "cron-arena-draft-final-stats",
  },
  {
    id: "ArenaDraftPickStack-BuildDailyAggregateStats-MEHHHrdftPCZ",
    name: "cron-build-daily-arena-draft-stats-aggregate",
  },
  {
    id: "ArenaDraftPickStack-BuildHourlyArenaDraftStats-jSmKACb3XvZ9",
    name: "cron-build-hourly-arena-draft-stats",
  },
  {
    id: "ArenaHighWinRunsStack-BuildHourlyArenaHighWinRuns-7XsR2edTjNc8",
    name: "cron-build-hourly-arena-high-win-runs",
  },
  {
    id: "ArenaHighWinRunsStack-BuildDailyAggregateStats-DAUugNJWr7ee",
    name: "cron-build-hourly-arena-high-win-runs",
  },
  {
    id: "ArenaHighWinRunsStack-FinalStats-Jb9oI0btcw9D",
    name: "cron-arena-high-win-runs-final-stats",
  },
  {
    id: "OfficialLeaderboardsStack-UpdateBattlegroundsLeade-RVLvnG1YUOKt",
    name: "cron-update-battlegrounds-leaderboard",
  },
  {
    id: "CommunitiesStack-ProcessRecentGames-HBClyVqXTr29",
    name: "cron-communities-process-recent-games",
  },
  {
    id: "ConstructedStatsStack-RetrieveConstructedDeckDetai-FTPQYhwnZT1v",
    name: "api-get-constructed-meta-deck",
  },
  // ===================
  // Triggers / important endpoints / high usage
  // ===================
  {
    id: "AssignArchetypeStack-ProcessAssignArchetypeFunctio-1hR8pDYlT7SF",
    name: "process-assign-archetype",
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
    id: "ArenaMatchStatsStack-ArenaMatchStatsProcessFunctio-BeRSvEwimZhR",
    name: "process-arena-match-stats",
  },
  {
    id: "ArenaDraftPickStack-StartSaveArenaDraftPickFunctio-L9RuiZXRQ9nh",
    name: "api-start-save-arena-draft-pick",
  },
  {
    id: "ArenaDraftPickStack-ProcessSaveArenaDraftPickFunct-QuIyGP8WgoYO",
    name: "process-save-arena-draft-pick",
  },

  // ===================
  // The rest
  // ===================
  {
    id: "UserPacksStack-ProcessSavePacksFunction-1CBREIG8IM3RF",
    name: "process-save-packs",
  },
  {
    id: "ArenaDraftPickStack-SaveArenaDraftStats-VusorLzBrWAh",
    name: "api-save-draft-stat",
  },
  {
    id: "MatchStatsStack-ProcessMatchStatsFunction2-8qoxF7NzjWs5",
    name: "api-retrieve-user-match-stats-2",
  },
  {
    id: "RetrieveUserBgsBestStatsS-RetrieveUserBgsBestStats-tkbV418sS3Lg",
    name: "api-retrieve-user-bgs-best-stats-2",
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
    id: "ArenaDraftPickStack-RetrieveArenaDraftStats-PA93sQZxzhQE",
    name: "api-retrieve-draft-stat",
  },
  // {
  //   id: "OwLegacySubStack-GetSubFromLegacyOwSub-vqH0APqzhFMx",
  //   name: "api-ow-legacy-get-status",
  // },
  // {
  //   id: "OwLegacySubStack-UnsubscribeUserFromLegacyOwSub-2u1IIVeVc5CH",
  //   name: "api-ow-legacy-unsub",
  // },
  // {
  //   id: "OwLegacySubStack-GetTebexSubDetails-v0VuBSTs7bmW",
  //   name: "api-get-tebex-sub-details",
  // },
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
  // {
  //   id: "AuthStack-AuthFunction-Q68CiWS0cRqs",
  //   name: "auth-website",
  // },
  {
    id: "IdFromBgsSimulationSample-GetIdFromBgsSimulationSa-XdHoinVSW1lU",
    name: "api-bgs-get-id-from-sample-2",
  },
  {
    id: "RetrieveBgsSimulationSamp-RetrieveBgsSimulationSam-NB5kBWGr0f0I",
    name: "api-bgs-retrieve-simulation-sample-2",
  },
  // {
  //   id: "RetrieveDuelsSingleRunSta-RetrieveDuelsSingleRunFu-ixek2vFX6Dlu",
  //   name: "api-retrieve-duels-single-run-2",
  // },
  {
    id: "RetrieveGlobalStatsStack-RetrieveGlobalStatsFuncti-XoTxr4I7PIwH",
    name: "api-retrieve-overview-global-stats-2",
  },
  {
    id: "RetrieveReviewStack-RetrieveReviewFunction2-JWlhajdkQTjc",
    name: "api-retrieve-review-2",
  },
  {
    id: "UserMappingStack2-StartSaveMappingFunction-1XPZIJ8YG29RH",
    name: "api-start-save-mapping",
  },
  {
    id: "UserMappingStack2-StartSaveMappingFunction2-N8wDp6ws7NqN",
    name: "api-start-save-mapping-2",
  },
  // {
  //   id: "UserProfileStack-RetrieveOwnProfileFunction-OPzqESAYjDju",
  //   name: "api-retrieve-own-profile",
  // },
  // {
  //   id: "UserProfileStack-RetrieveOtherProfileFunction-aNvcb2vibmPU",
  //   name: "api-retrieve-other-profile",
  // },
  // {
  //   id: "UserProfileStack-UpdateProfileFunction-oDgojeMfjskx",
  //   name: "api-update-profile",
  // },
  // {
  //   id: "UserProfileStack-ShareProfileFunction-IedKMblyFEBn",
  //   name: "api-share-profile",
  // },
  // {
  //   id: "UserProfileStack-UnshareProfileFunction-d1TVXzlunAht",
  //   name: "api-unshare-profile",
  // },
  // {
  //   id: "UserProfileStack-RetrieveProfileFunction-FLZZpdmlf10v",
  //   name: "api-retrieve-profile",
  // },
  {
    id: "AuthStack-GenerateFirestoneTokenFunction-w2TohjJDEwgm",
    name: "api-generate-firestone-token",
  },
  {
    id: "LotteryStack-UpdateLotteryFunction-gZOvlcn8cWE6",
    name: "api-lottery-update",
  },
  {
    id: "CommunitiesStack-RetrieveCommunity-yjqEGQ1qu3C8",
    name: "api-retrieve-community",
  },
  {
    id: "CommunitiesStack-JoinCommunity-dOlV0YNwq4Dt",
    name: "api-join-community",
  },
  {
    id: "CommunitiesStack-RetrieveUserCommunities-SAS4xixzJBtP",
    name: "api-retrieve-user-communities",
  },
  {
    id: "CommunitiesStack-LeaveCommunity-M2vCXW6uBmdA",
    name: "api-leave-community",
  },
  {
    id: "CommunitiesStack-CreateCommunity-k2PKbdGNa2uA",
    name: "api-create-community",
  },
];
