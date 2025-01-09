// Trying to keep this roughly ordered based on the volume / criticality of the functions
export const lambdaDefinitions = [
	{
		'id': 'AssignArchetypeStack-GetArchetypeForDeck-Mnw8QY7qpyu3',
		'name': 'api-get-archetype-for-deck',
		'invocations': 14372786.0,
	},
	{
		'id': 'UserPacksStack-StartSavePacksFunction2-XNCEJEJsEfzS',
		'name': 'api-start-save-packs-2',
		'invocations': 7882636.0,
	},
	{
		'id': 'ConstructedStatsStack-RetrieveConstructedDeckDetai-Jo5mvc9gQYlk',
		'name': 'api-get-constructed-meta-deck-api-gateway',
		'invocations': 7190762.0,
	},
	{
		'id': 'BazaarPveEncounterStack-BazaarPveEncounterFunction-EqzdVwaWuOl9',
		'name': 'bazaar-start-save-pve-encounter',
		'invocations': 4414394.0,
	},
	{
		'id': 'UserAchievementsStack-RetrieveAchievementsFunction-tlzvG2EWGUci',
		'name': 'api-retrieve-achievements-2',
		'invocations': 2182958.0,
	},
	{
		'id': 'UserMappingStack2-StartSaveMappingFunction2-N8wDp6ws7NqN',
		'name': 'api-start-save-mapping-2',
		'invocations': 1993006.0,
	},
	{
		'id': 'MatchStatsStack-ProcessMatchStatsFunction2-8qoxF7NzjWs5',
		'name': 'api-retrieve-user-match-stats-2',
		'invocations': 350327.0,
	},
	{
		'id': 'BazaarPersonalRunStack-BazaarPersonalRunFunctionSt-xuldfqZnD6vt',
		'name': 'bazaar-start-save-personal-run',
		'invocations': 322537.0,
	},
	{
		'id': 'UserProfileStack-ProcessUpdateProfileFunction-9KyxFBiLnYM4',
		'name': 'process-update-profile',
		'invocations': 233819.0,
	},
	{
		'id': 'TwitchPresenceStack-RetrieveTwitchPresenceFunction-asbSWYenLgW0',
		'name': 'api-retrieve-twitch-presence-2',
		'invocations': 207732.0,
	},
	{
		'id': 'BazaarPveEncounterStack-BazaarPveEncounterFunction-9KcDQC6teXpR',
		'name': 'bazaar-process-save-pve-encounter',
		'invocations': 173802.0,
	},
	{
		'id': 'SimulateBgsBattleStack-SimulateBgsBattleFunctionLi-BhXWqLooZGey',
		'name': 'api-simulate-battlegrounds-battle-2',
		'invocations': 94955.0,
	},
	{
		'id': 'UserArenaRewardsStack-RetrieveArenaRewardsFunction-yu1culDYtDZb',
		'name': 'api-retrieve-arena-rewards-2',
		'invocations': 75153.0,
	},
	{
		'id': 'BuildBattlegroundsHeroSta-AggregateHourlyQuestStat-xECFJR60i29D',
		'name': 'cron-aggregate-hourly-bgs-quest-stats',
		'invocations': 43920.0,
	},
	{
		'id': 'ConstructedStatsStack-BuildHourlyConstructedDeckSt-W2nqr4VnQMBZ',
		'name': 'cron-build-hourly-constructed-deck-stats',
		'invocations': 20160.0,
	},
	{
		'id': 'BuildBattlegroundsHeroSta-AggregateHourlyHeroStats-q2fATpfKb5vX',
		'name': 'cron-aggregate-hourly-bgs-hero-stats',
		'invocations': 15143.0,
	},
	{
		'id': 'BuildBattlegroundsHeroStatsS-BuildHourlyHeroStats2-DTnWtoHAP07E',
		'name': 'cron-build-hourly-bgs-hero-stats',
		'invocations': 12122.0,
	},
	{
		'id': 'CommunitiesStack-ProcessRecentGames-HBClyVqXTr29',
		'name': 'cron-communities-process-recent-games',
		'invocations': 8641.0,
	},
	{
		'id': 'ConstructedStatsStack-RetrieveConstructedDeckDetai-FTPQYhwnZT1v',
		'name': 'api-get-constructed-meta-deck',
		'invocations': 8599.0,
	},
	{
		'id': 'BuildBattlegroundsHeroSta-BuildHourlyHeroStatsDuos-EV0XIMcKYK6Q',
		'name': 'cron-build-hourly-bgs-hero-stats-duos',
		'invocations': 7920.0,
	},
	{
		'id': 'CommunitiesStack-RetrieveUserCommunities-SAS4xixzJBtP',
		'name': 'api-retrieve-user-communities',
		'invocations': 4652.0,
	},
	{
		'id': 'RetrieveGlobalStatsStack-RetrieveGlobalStatsFuncti-XoTxr4I7PIwH',
		'name': 'api-retrieve-overview-global-stats-2',
		'invocations': 4477.0,
	},
	{
		'id': 'ArenaStatsStack-FinalStats-6Lv4TUiLl6sl',
		'name': 'cron-arena-final-stats',
		'invocations': 4321.0,
	},
	{
		'id': 'ArenaDraftPickStack-FinalStats-apdyJIE7yhus',
		'name': 'cron-arena-draft-final-stats',
		'invocations': 4320.0,
	},
	{
		'id': 'IdFromBgsSimulationSample-GetIdFromBgsSimulationSa-XdHoinVSW1lU',
		'name': 'api-bgs-get-id-from-sample-2',
		'invocations': 4160.0,
	},
	{
		'id': 'BuildBattlegroundsHeroStatsStack-FinalCardStats-7Tm9L8yFFiCg',
		'name': 'cron-final-stats-bgs-cards-stats',
		'invocations': 3614.0,
	},
	{
		'id': 'ConstructedStatsStack-BuildDailyAggregateDeckStats-v1LTE9sunYuL',
		'name': 'cron-build-daily-aggregate-deck-stats',
		'invocations': 750.0,
	},
	{
		'id': 'PublishBgsPerfectGameStac-BuildBgsPerfectGamesFunc-FGdcis7zkK8W',
		'name': 'cron-build-bgs-perfect-games',
		'invocations': 720.0,
	},
	{
		'id': 'OfficialLeaderboardsStack-UpdateBattlegroundsLeade-RVLvnG1YUOKt',
		'name': 'cron-update-battlegrounds-leaderboard',
		'invocations': 720.0,
	},
	{
		'id': 'ArenaDraftPickStack-BuildHourlyArenaDraftStats-jSmKACb3XvZ9',
		'name': 'cron-build-hourly-arena-draft-stats',
		'invocations': 720.0,
	},
	{
		'id': 'BuildTavernBrawlStatsFunc-BuildTavernBrawlAggregat-2sdhIRHvNtNP',
		'name': 'cron-build-tavern-brawl-stats-from-hourly',
		'invocations': 360.0,
	},
	{
		'id': 'AuthStack-AuthFunction-Q68CiWS0cRqs',
		'name': 'auth-website',
		'invocations': 243.0,
	},
	{
		'id': 'ContentCreatorInputStack-StartSaveContentCreatorBg-qk18h0wZGOLo',
		'name': 'api-start-save-content-creator-bgs-comp-input',
		'invocations': 74.0,
	},
	{
		'id': 'BuildBattlegroundsHeroStat-AggregateDailyCardStats-PhGtZ5Ailt15',
		'name': 'cron-aggregate-daily-bgs-cards-stats',
		'invocations': 64.0,
	},
	{
		'id': 'LotteryStack-PickLotterWinnersFunction-tOirJ6hxlXOL',
		'name': 'cron-pick-lottery-winners',
		'invocations': 30.0,
	},
	{
		'id': 'ArenaDraftPickStack-BuildDailyAggregateStats-MEHHHrdftPCZ',
		'name': 'cron-build-daily-arena-draft-stats-aggregate',
		'invocations': 30.0,
	},
	{
		'id': 'ContentCreatorInputStack-StartSaveContentCreatorIn-AsxaULaV1g6k',
		'name': 'api-start-save-content-creator-input',
		'invocations': 29.0,
	},
	{
		'id': 'ContentCreatorInputStack-ProcessSaveContentCreator-Vwnt8s7wolRw',
		'name': 'process-save-content-creator-input',
		'invocations': 29.0,
	},
	{
		'id': 'UserProfileStack-RetrieveOtherProfileFunction-aNvcb2vibmPU',
		'name': 'api-other-retrieve-profile',
		'invocations': 4.0,
	},
	{
		'id': 'SyncDataStack-ReprocessStatsFunction-1RQPQsyrVh4z',
		'name': 'sync-data-reprocess',
		'invocations': 0,
	},
	{
		'id': 'UserPrefsStack-StartSavePrefsFunction2-BAihDOyl63Qj',
		'name': 'api-start-save-prefs-2',
		'invocations': 0,
	},
	{
		'id': 'BazaarPersonalEncounterSt-BazaarPersonalEncounterF-gNaZf0Yr7wMV',
		'name': 'bazaar-retrieve-personal-encounters',
		'invocations': 0,
	},
	{
		'id': 'UserProfileStack-UnshareProfileFunction-d1TVXzlunAht',
		'name': 'api-unshare-profile',
		'invocations': 0,
	},
	{
		'id': 'MRLambdaStack-DriverFunction-1HMIH97JIJS2A',
		'name': 'mr-lambda-driver',
		'invocations': 0,
	},
	{
		'id': 'MRLambdaStack-MapperFunction-1NU11S9BLCB9B',
		'name': 'mr-lambda-mapper',
		'invocations': 0,
	},
	{
		'id': 'MRLambdaStack-ReducerFunction-1RUWC6SIUC6DN',
		'name': 'mr-lambda-reducer',
		'invocations': 0,
	},
	{
		'id': 'CommunitiesStack-UpdateCommunity-E49uw7BA3Pcq',
		'name': 'api-update-community',
		'invocations': 0,
	},
	{
		'id': 'OwLegacySubStack-GetTebexSubDetails-v0VuBSTs7bmW',
		'name': 'api-get-tebex-sub-details',
		'invocations': 0,
	},
	{
		'id': 'TwitterStack-BuildTwitterFunction-00rWH4qXQgww',
		'name': 'cron-build-twitter',
		'invocations': 0,
	},
	{
		'id': 'TriggerBuildDuelsStatsStac-BuildDuelsStatsFunction-C99P6IG8LRFL',
		'name': 'cron-build-duels-stats',
		'invocations': 0,
	},
];
