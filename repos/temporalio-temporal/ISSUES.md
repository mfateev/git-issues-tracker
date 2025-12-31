# temporalio/temporal - Open Issues

**Generated:** 2025-12-31
**Total Issues:** 530
**Total Upvotes:** 899
**Total Comments:** 865

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 530 |
| Issues with Upvotes | 143 (27%) |
| Total Upvotes | 899 |
| Total Comments | 865 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 349 |
| potential-bug | 126 |
| up-for-grabs | 30 |
| API | 25 |
| difficulty: easy | 20 |
| operations | 20 |
| devexp | 14 |
| difficulty: medium | 11 |
| refactoring | 11 |
| bug | 11 |

## Top 20 Issues (by Priority Score)

Priority Score = Upvotes × 2 + Comments

| # | Score | 👍 | 💬 | Age | Title |
|---|-------|-----|-----|-----|-------|
| 1 | 154 | 70 | 14 | 5y 4m | [#680](https://github.com/temporalio/temporal/issues/680) Add ability for workflow to wait for completion of an ext... |
| 2 | 127 | 50 | 27 | 4y 8m | [#1507](https://github.com/temporalio/temporal/issues/1507) Provide priority task queues |
| 3 | 103 | 46 | 11 | 3y 9m | [#2668](https://github.com/temporalio/temporal/issues/2668) Document POSTGRES_SEEDS (or better yet, use a descriptive... |
| 4 | 99 | 46 | 7 | 4 years | [#2318](https://github.com/temporalio/temporal/issues/2318) MongoDB as Persistent |
| 5 | 74 | 30 | 14 | 1y 8m | [#5680](https://github.com/temporalio/temporal/issues/5680) Official support for Opensearch |
| 6 | 62 | 30 | 2 | 5y 5m | [#537](https://github.com/temporalio/temporal/issues/537) Add SignalWithStart\UpdateWithStart command |
| 7 | 60 | 28 | 4 | 5y 10m | [#131](https://github.com/temporalio/temporal/issues/131) Different retry options based on failure type |
| 8 | 54 | 19 | 16 | 5y 8m | [#328](https://github.com/temporalio/temporal/issues/328) Try to run temporal on top of  Amazon Keyspaces |
| 9 | 53 | 23 | 7 | 3y 9m | [#2609](https://github.com/temporalio/temporal/issues/2609) Add ability to transfer child workflows to new parent run... |
| 10 | 49 | 18 | 13 | 3y 10m | [#2582](https://github.com/temporalio/temporal/issues/2582) Add health check handler for worker service |
| 11 | 48 | 23 | 2 | 1y 11m | [#5302](https://github.com/temporalio/temporal/issues/5302) YDB Temporal support. |
| 12 | 48 | 22 | 4 | 4y 5m | [#1797](https://github.com/temporalio/temporal/issues/1797) Ability to get all task queues per namespace |
| 13 | 43 | 16 | 11 | 4y 8m | [#1460](https://github.com/temporalio/temporal/issues/1460) Add task queue query |
| 14 | 38 | 16 | 6 | 3y 4m | [#3228](https://github.com/temporalio/temporal/issues/3228) Metadata for Timers |
| 15 | 36 | 16 | 4 | 3y 3m | [#3366](https://github.com/temporalio/temporal/issues/3366) Support sqlite in production. |
| 16 | 34 | 14 | 6 | 2y 4m | [#4795](https://github.com/temporalio/temporal/issues/4795) Schedules - add option for execution workflowid to be "as... |
| 17 | 33 | 15 | 3 | 4y 3m | [#1988](https://github.com/temporalio/temporal/issues/1988) Implement dynamic task queue routing |
| 18 | 32 | 14 | 4 | 5y 8m | [#298](https://github.com/temporalio/temporal/issues/298) Support embedded version of the service |
| 19 | 27 | 13 | 1 | 2y 8m | [#4180](https://github.com/temporalio/temporal/issues/4180) Official CockroachDB (CRDB) support |
| 20 | 25 | 12 | 1 | 4y 8m | [#1492](https://github.com/temporalio/temporal/issues/1492) Optimize large payload fan-out to activities and child wo... |

---

## All Issues

### Bugs (137)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#2941](https://github.com/temporalio/temporal/issues/2941) | 9 | 3 | 3y 7m | potential-bug | Host level cache for history |
| [#4233](https://github.com/temporalio/temporal/issues/4233) | 6 | 7 | 2y 8m | potential-bug | Too high memory usage on history service  |
| [#7037](https://github.com/temporalio/temporal/issues/7037) | 5 | 7 | 1 years | potential-bug | [bug] Viewing schedule throws a 504 "context de... |
| [#6995](https://github.com/temporalio/temporal/issues/6995) | 6 | 3 | 1 years | potential-bug | Error during VisibilityDeleteExecution |
| [#6323](https://github.com/temporalio/temporal/issues/6323) | 0 | 15 | 1y 5m | potential-bug | Frontend Service - goroutine (CPU & Memory) Leak |
| [#983](https://github.com/temporalio/temporal/issues/983) | 5 | 1 | 5y 1m | good first issue, refactoring | loggging/exception stack trace not capturing un... |
| [#5455](https://github.com/temporalio/temporal/issues/5455) | 5 | 0 | 1y 10m | potential-bug | docker-compose multirole sometimes stuck on boot |
| [#4000](https://github.com/temporalio/temporal/issues/4000) | 2 | 6 | 2y 10m | bug | bug: concurrent map read and map write |
| [#6806](https://github.com/temporalio/temporal/issues/6806) | 3 | 3 | 1y 1m | potential-bug | WorkflowTaskTimedOut if submiting a large numbe... |
| [#5741](https://github.com/temporalio/temporal/issues/5741) | 0 | 9 | 1y 8m | potential-bug | Addressing a lot of security vulnerabilities in... |
| [#471](https://github.com/temporalio/temporal/issues/471) | 1 | 7 | 5y 6m | potential-bug, operations | temporal Docker fails to bind on multiple inter... |
| [#8719](https://github.com/temporalio/temporal/issues/8719) | 3 | 1 | 1 months | potential-bug | Stale internode gRPC connections after pod term... |
| [#6193](https://github.com/temporalio/temporal/issues/6193) | 2 | 3 | 1y 6m | potential-bug | Cannot load archived (s3 provider) workflow his... |
| [#1119](https://github.com/temporalio/temporal/issues/1119) | 1 | 5 | 5 years | bug, difficulty: easy | ParentExecution not set in WorkflowExecutionInfo |
| [#8490](https://github.com/temporalio/temporal/issues/8490) | 2 | 2 | 2 months | bug, schedules | Scheduled Actions doesn't clear ContinuedFailur... |
| [#7894](https://github.com/temporalio/temporal/issues/7894) | 2 | 2 | 6 months | potential-bug | Cannot load Archived Workflows on UI even archi... |
| [#7600](https://github.com/temporalio/temporal/issues/7600) | 0 | 6 | 8 months | potential-bug | start_workflow_execution fails with duplicate k... |
| [#6664](https://github.com/temporalio/temporal/issues/6664) | 1 | 4 | 1y 2m | potential-bug | Request unauthorized for SQL search-attributes ... |
| [#4919](https://github.com/temporalio/temporal/issues/4919) | 0 | 6 | 2y 3m | potential-bug | Allow Internal-Frontend to Register/Update Name... |
| [#2729](https://github.com/temporalio/temporal/issues/2729) | 0 | 6 | 3y 8m | potential-bug | Temporal Is not able to connect to Cassandra ev... |
| [#245](https://github.com/temporalio/temporal/issues/245) | 0 | 6 | 5y 9m | potential-bug, needs-investigation | Cassandra timestamp type |
| [#6307](https://github.com/temporalio/temporal/issues/6307) | 1 | 3 | 1y 5m | potential-bug | Panic When Upgrading From 1.20.4 To 1.21.6 |
| [#6146](https://github.com/temporalio/temporal/issues/6146) | 0 | 5 | 1y 6m | potential-bug | temporal on arm64 Linux is not working correctl... |
| [#5693](https://github.com/temporalio/temporal/issues/5693) | 0 | 5 | 1y 8m | potential-bug | Multiple Hosts in connection string are not han... |
| [#5364](https://github.com/temporalio/temporal/issues/5364) | 2 | 1 | 1y 11m | potential-bug | Inconsistent tctl workflow list behaviour |
| [#8202](https://github.com/temporalio/temporal/issues/8202) | 0 | 4 | 4 months | potential-bug | CrashLoopBackOff on GKE cluster. |
| [#7200](https://github.com/temporalio/temporal/issues/7200) | 1 | 2 | 11 months | potential-bug | temporal cli works but hit deadline-exceeded er... |
| [#6977](https://github.com/temporalio/temporal/issues/6977) | 2 | 0 | 1 years | potential-bug | Addressing a lot of security vulnerabilities in... |
| [#6976](https://github.com/temporalio/temporal/issues/6976) | 2 | 0 | 1 years | potential-bug | Addressing a lot of security vulnerabilities in... |
| [#6338](https://github.com/temporalio/temporal/issues/6338) | 0 | 4 | 1y 5m | potential-bug | error in prometheus reporter: AccessHistoryNew ... |
| [#4715](https://github.com/temporalio/temporal/issues/4715) | 0 | 4 | 2y 5m | potential-bug | Unable to start 1.21.4 cluster with archival di... |
| [#4094](https://github.com/temporalio/temporal/issues/4094) | 0 | 4 | 2y 9m | bug, good first issue | [Bug] Version info upgrade notification does no... |
| [#2698](https://github.com/temporalio/temporal/issues/2698) | 0 | 4 | 3y 9m | potential-bug | Internode TLS certificates dual used as both cl... |
| [#1844](https://github.com/temporalio/temporal/issues/1844) | 0 | 4 | 4y 4m | potential-bug | Taskqueue scavenger emits persistence errors |
| [#7741](https://github.com/temporalio/temporal/issues/7741) | 0 | 3 | 7 months | potential-bug | Workflow Update causing WFT Failure with `Prema... |
| [#7640](https://github.com/temporalio/temporal/issues/7640) | 0 | 3 | 8 months | potential-bug | Unable to use passthrough:/// prefix in tempora... |
| [#6375](https://github.com/temporalio/temporal/issues/6375) | 0 | 3 | 1y 4m | potential-bug | CompleteUpdate message is sometimes not honored... |
| [#5475](https://github.com/temporalio/temporal/issues/5475) | 0 | 3 | 1y 10m | potential-bug | temporal frontend unable to connect to elastics... |
| [#5436](https://github.com/temporalio/temporal/issues/5436) | 0 | 3 | 1y 10m | potential-bug | 503 in api/v1/namespaces/<your_namespace>/searc... |
| [#4778](https://github.com/temporalio/temporal/issues/4778) | 0 | 3 | 2y 4m | potential-bug | I want to be able to print log files separately... |
| [#4193](https://github.com/temporalio/temporal/issues/4193) | 0 | 3 | 2y 8m | potential-bug | High frequency query mysql |
| [#4020](https://github.com/temporalio/temporal/issues/4020) | 0 | 3 | 2y 10m | potential-bug | Unexpected lag between TimerStarted and TimerFi... |
| [#3104](https://github.com/temporalio/temporal/issues/3104) | 0 | 3 | 3y 5m | bug | Surprising clusterMetadata override |
| [#787](https://github.com/temporalio/temporal/issues/787) | 1 | 1 | 5y 3m | potential-bug, up-for-grabs | Frequent timeouts while archiving to S3 |
| [#8013](https://github.com/temporalio/temporal/issues/8013) | 1 | 0 | 6 months | potential-bug | List workflows by custom search attributes some... |
| [#7821](https://github.com/temporalio/temporal/issues/7821) | 0 | 2 | 7 months | bug | [Bug]  workflow list takes differnt query for h... |
| [#6479](https://github.com/temporalio/temporal/issues/6479) | 0 | 2 | 1y 3m | potential-bug | GKE Web UI 404 Archival Using bucket |
| [#6467](https://github.com/temporalio/temporal/issues/6467) | 1 | 0 | 1y 4m | potential-bug | CVE-2024-24790 |
| [#6333](https://github.com/temporalio/temporal/issues/6333) | 0 | 2 | 1y 5m | potential-bug | Do not consume rate limit token on invalid tasks |
| [#6273](https://github.com/temporalio/temporal/issues/6273) | 1 | 0 | 1y 5m | potential-bug | PostgreSQL schema update fails on busy Temporal... |
| [#6226](https://github.com/temporalio/temporal/issues/6226) | 0 | 2 | 1y 6m | potential-bug | "Flag provided but not defined" when trying to ... |
| [#6173](https://github.com/temporalio/temporal/issues/6173) | 1 | 0 | 1y 6m | potential-bug | Schedule "StartAt" not used when calculating in... |
| [#5785](https://github.com/temporalio/temporal/issues/5785) | 0 | 2 | 1y 8m | potential-bug | deleted schedule showing |
| [#5729](https://github.com/temporalio/temporal/issues/5729) | 0 | 2 | 1y 8m | potential-bug | Temporal fails to connect to Google Cloud SQL P... |
| [#5624](https://github.com/temporalio/temporal/issues/5624) | 0 | 2 | 1y 9m | potential-bug | Archival does not show list of archived workflows |
| [#4823](https://github.com/temporalio/temporal/issues/4823) | 1 | 0 | 2y 4m | potential-bug | Bearer token not passed to remote cluster when ... |
| [#3885](https://github.com/temporalio/temporal/issues/3885) | 0 | 2 | 2y 11m | potential-bug | LIKE is not working as expected in visibility q... |
| [#3614](https://github.com/temporalio/temporal/issues/3614) | 0 | 2 | 3y 1m | potential-bug, schedules | Cannot trigger/run multiple schedule actions im... |
| [#2929](https://github.com/temporalio/temporal/issues/2929) | 1 | 0 | 3y 7m | potential-bug | Update namespace replication task cleanup logic... |
| [#1847](https://github.com/temporalio/temporal/issues/1847) | 0 | 2 | 4y 4m | potential-bug | [xdc] Workers connected to standby cluster not ... |
| [#607](https://github.com/temporalio/temporal/issues/607) | 0 | 2 | 5y 5m | good first issue, potential-bug | Add proper unit / integration tests for parentc... |
| [#8909](https://github.com/temporalio/temporal/issues/8909) | 0 | 1 | 2 days | potential-bug | Deprecation error log in v1.29.1 with Elasticse... |
| [#8655](https://github.com/temporalio/temporal/issues/8655) | 0 | 1 | 1 months | potential-bug | Addressing security vulnerabilities in the Temp... |
| [#8654](https://github.com/temporalio/temporal/issues/8654) | 0 | 1 | 1 months | potential-bug | Unable to view workflows in UI |
| [#8431](https://github.com/temporalio/temporal/issues/8431) | 0 | 1 | 2 months | potential-bug | Docker deployment TEMPORAL_ADMINTOOLS_VERSION |
| [#8235](https://github.com/temporalio/temporal/issues/8235) | 0 | 1 | 4y 4m | potential-bug | GetWorkflow doesn't find archived one |
| [#8220](https://github.com/temporalio/temporal/issues/8220) | 0 | 1 | 4 months | potential-bug | Addressing security vulnerabilities in the Temp... |
| [#8219](https://github.com/temporalio/temporal/issues/8219) | 0 | 1 | 4 months | potential-bug | Addressing security vulnerabilities in the Temp... |
| [#7869](https://github.com/temporalio/temporal/issues/7869) | 0 | 1 | 6 months | potential-bug | temporal frontend unable to connect to elastics... |
| [#7591](https://github.com/temporalio/temporal/issues/7591) | 0 | 1 | 8 months | potential-bug | 1.27.1 - Multiple ChildWorkflowStarted events w... |
| [#7515](https://github.com/temporalio/temporal/issues/7515) | 0 | 1 | 9 months | potential-bug | Retry interval is not always respected |
| [#7506](https://github.com/temporalio/temporal/issues/7506) | 0 | 1 | 9 months | potential-bug | Start child with WorkflowID longer than 255 wit... |
| [#7480](https://github.com/temporalio/temporal/issues/7480) | 0 | 1 | 9 months | potential-bug | Addressing a lot of security vulnerabilities in... |
| [#6527](https://github.com/temporalio/temporal/issues/6527) | 0 | 1 | 1y 3m | potential-bug | WorkflowCache inconsistency upon workflow (forc... |
| [#6525](https://github.com/temporalio/temporal/issues/6525) | 0 | 1 | 1y 3m | potential-bug | Rare test failure in CLI: "Current branch token... |
| [#6459](https://github.com/temporalio/temporal/issues/6459) | 0 | 1 | 1y 4m | potential-bug | Excessive new connections to Postgres  |
| [#6378](https://github.com/temporalio/temporal/issues/6378) | 0 | 1 | 1y 4m | potential-bug | unknown method GetWorkflowExecutionHistoryRever... |
| [#6319](https://github.com/temporalio/temporal/issues/6319) | 0 | 1 | 1y 5m | potential-bug | Schedule list with query times out on server 1.... |
| [#6188](https://github.com/temporalio/temporal/issues/6188) | 0 | 1 | 1y 6m | potential-bug | CreateSchedule with empty workflowID should not... |
| [#4612](https://github.com/temporalio/temporal/issues/4612) | 0 | 1 | 2y 5m | potential-bug, matching | Matching task dispatch busy loop when history s... |
| [#4348](https://github.com/temporalio/temporal/issues/4348) | 0 | 1 | 2y 7m | potential-bug | Replication tasks referencing archived workflow... |
| [#4131](https://github.com/temporalio/temporal/issues/4131) | 0 | 1 | 2y 9m | potential-bug | Issue with MariaDB 10.6.9.  (Galera cluster) |
| [#3667](https://github.com/temporalio/temporal/issues/3667) | 0 | 1 | 3y 1m | bug | Temporal Server returns incorrect RetryState in... |
| [#3134](https://github.com/temporalio/temporal/issues/3134) | 0 | 1 | 3y 5m | enhancement, potential-bug | Do not block shard ownership assertion if `acqu... |
| [#3065](https://github.com/temporalio/temporal/issues/3065) | 0 | 1 | 3y 5m | potential-bug | i get taskqueue history metics,it has abort all... |
| [#2615](https://github.com/temporalio/temporal/issues/2615) | 0 | 1 | 3y 9m | config, potential-bug | auto-setup does not use DB_PORT for mysql and c... |
| [#2403](https://github.com/temporalio/temporal/issues/2403) | 0 | 1 | 3y 11m | potential-bug | import of github.com/cactus/go-statsd-client is... |
| [#1057](https://github.com/temporalio/temporal/issues/1057) | 0 | 1 | 5 years | potential-bug, packaging | On first start Temporal should not accept conne... |
| [#746](https://github.com/temporalio/temporal/issues/746) | 0 | 1 | 5y 3m | potential-bug, CRON | Workflow loses cron when also using NewContinue... |
| [#266](https://github.com/temporalio/temporal/issues/266) | 0 | 1 | 5y 9m | bug, operations | Matching service degradation due to large numbe... |
| [#8864](https://github.com/temporalio/temporal/issues/8864) | 0 | 0 | 13 days | potential-bug | Workflow cannot run with the dedicated cloud Po... |
| [#8833](https://github.com/temporalio/temporal/issues/8833) | 0 | 0 | 15 days | potential-bug | Scheduler does not list workflows runned when u... |
| [#8631](https://github.com/temporalio/temporal/issues/8631) | 0 | 0 | 1 months | potential-bug | Trying to create search attribute that already ... |
| [#8579](https://github.com/temporalio/temporal/issues/8579) | 0 | 0 | 2 months | potential-bug | Addressing security vulnerabilities in the Temp... |
| [#7566](https://github.com/temporalio/temporal/issues/7566) | 0 | 0 | 9 months | bug | A workflow task following ShutdownWorker should... |
| [#7487](https://github.com/temporalio/temporal/issues/7487) | 0 | 0 | 9 months | potential-bug | grpc Status response to query errors contains m... |
| [#7481](https://github.com/temporalio/temporal/issues/7481) | 0 | 0 | 9 months | potential-bug | Addressing a lot of security vulnerabilities in... |
| [#6954](https://github.com/temporalio/temporal/issues/6954) | 0 | 0 | 1 years | potential-bug | IsTerminatedByResetter should not be used for c... |
| [#6952](https://github.com/temporalio/temporal/issues/6952) | 0 | 0 | 1 years | potential-bug | Extend activity retry expiration time upon reset |
| [#6844](https://github.com/temporalio/temporal/issues/6844) | 0 | 0 | 1y 1m | potential-bug | Temporal 1.24.1 <- 1.23.1 upgrade error |
| [#6843](https://github.com/temporalio/temporal/issues/6843) | 0 | 0 | 1y 1m | potential-bug | Add small jitter timeout to the long poll empty... |
| [#6542](https://github.com/temporalio/temporal/issues/6542) | 0 | 0 | 1y 3m | potential-bug | temporal-history panic |
| [#6541](https://github.com/temporalio/temporal/issues/6541) | 0 | 0 | 1y 3m | potential-bug | getAnyClient with cachingRedirector problem |
| [#6512](https://github.com/temporalio/temporal/issues/6512) | 0 | 0 | 1y 3m | potential-bug | Update latency increases with number of updates... |
| [#6471](https://github.com/temporalio/temporal/issues/6471) | 0 | 0 | 1y 4m | potential-bug | Angie testing something (to delete) |
| [#6468](https://github.com/temporalio/temporal/issues/6468) | 0 | 0 | 1y 4m | potential-bug | GenerateReplicationTasks activity of ForceRepli... |
| [#6411](https://github.com/temporalio/temporal/issues/6411) | 0 | 0 | 1y 4m | potential-bug | Error: Cannot query workflow due to Workflow Ta... |
| [#6328](https://github.com/temporalio/temporal/issues/6328) | 0 | 0 | 1y 5m | potential-bug | Unit test error in v1.24.2 |
| [#6320](https://github.com/temporalio/temporal/issues/6320) | 0 | 0 | 1y 5m | potential-bug | Multiple versioning related flakes in Go SDK te... |
| [#6211](https://github.com/temporalio/temporal/issues/6211) | 0 | 0 | 1y 6m | potential-bug | Flaky versioning issue when querying since 1.24 |
| [#6210](https://github.com/temporalio/temporal/issues/6210) | 0 | 0 | 1y 6m | potential-bug | Lots of log noise on restarting server with sql... |
| [#6144](https://github.com/temporalio/temporal/issues/6144) | 0 | 0 | 1y 6m | potential-bug | ActivityStateReplicator should trigger history ... |
| [#5853](https://github.com/temporalio/temporal/issues/5853) | 0 | 0 | 1y 7m | potential-bug | Cross-replicated search attributes are not pers... |
| [#5642](https://github.com/temporalio/temporal/issues/5642) | 0 | 0 | 1y 9m | potential-bug | dynamic-config-value invalid JSON value for key  |
| [#5604](https://github.com/temporalio/temporal/issues/5604) | 0 | 0 | 1y 9m | potential-bug | `temporalio/server` image 1.23.0 reports RC ver... |
| [#5587](https://github.com/temporalio/temporal/issues/5587) | 0 | 0 | 1y 9m | potential-bug | dev-server crash on AddOrUpdateRemoteCluster RP... |
| [#5489](https://github.com/temporalio/temporal/issues/5489) | 0 | 0 | 1y 10m | potential-bug | SecondaryVisbilityStore validation failed |
| [#5298](https://github.com/temporalio/temporal/issues/5298) | 0 | 0 | 1y 11m | potential-bug | Can Child workflows inherit search attributes f... |
| [#5249](https://github.com/temporalio/temporal/issues/5249) | 0 | 0 | 2 years | potential-bug | Retry Policy should be copied to the continued ... |
| [#5063](https://github.com/temporalio/temporal/issues/5063) | 0 | 0 | 2y 2m | potential-bug | Workflow Task Timeout not always respected |
| [#4934](https://github.com/temporalio/temporal/issues/4934) | 0 | 0 | 2y 2m | potential-bug | The Rate and Burst functions of DynamicRateLimi... |
| [#4149](https://github.com/temporalio/temporal/issues/4149) | 0 | 0 | 2y 8m | potential-bug | ​ Version v1.20.1 had slow query in temporal_vi... |
| [#4052](https://github.com/temporalio/temporal/issues/4052) | 0 | 0 | 2y 9m | potential-bug | Non-expired JWT rejected as expired by Temporal... |
| [#4028](https://github.com/temporalio/temporal/issues/4028) | 0 | 0 | 2y 9m | potential-bug | Signal requestID dropped upon workflow reset |
| [#3912](https://github.com/temporalio/temporal/issues/3912) | 0 | 0 | 2y 10m | potential-bug | Matching with Cassandra encounters lots of tomb... |
| [#3590](https://github.com/temporalio/temporal/issues/3590) | 0 | 0 | 3y 1m | potential-bug, P1 | GRPC_SSL_CIPHER_SUITES not respected |
| [#3453](https://github.com/temporalio/temporal/issues/3453) | 0 | 0 | 3y 2m | potential-bug, P1 | Build docker images with integer UID/GID and us... |
| [#3436](https://github.com/temporalio/temporal/issues/3436) | 0 | 0 | 3y 3m | potential-bug | Integration test for metrics |
| [#3284](https://github.com/temporalio/temporal/issues/3284) | 0 | 0 | 3y 4m | bug | Server returns status messages over metadata li... |
| [#3223](https://github.com/temporalio/temporal/issues/3223) | 0 | 0 | 3y 4m | potential-bug | panic: assignment to entry in nil map in `loadC... |
| [#3154](https://github.com/temporalio/temporal/issues/3154) | 0 | 0 | 4 years | bug | tdbg workflow show does not support pagination |
| [#3145](https://github.com/temporalio/temporal/issues/3145) | 0 | 0 | 3y 5m | potential-bug | Per task queue ratelimiting should only count v... |
| [#3133](https://github.com/temporalio/temporal/issues/3133) | 0 | 0 | 3y 5m | potential-bug | Publish size/number of history events for close... |
| [#2528](https://github.com/temporalio/temporal/issues/2528) | 0 | 0 | 3y 10m | potential-bug | SQL delete workflow execution does not delete a... |
| [#2406](https://github.com/temporalio/temporal/issues/2406) | 0 | 0 | 3y 11m | potential-bug | Wire up Transaction.CreateWorkflowExecution |
| [#1867](https://github.com/temporalio/temporal/issues/1867) | 0 | 0 | 4y 4m | potential-bug | temporal-server "hang" during SIGTERM after los... |
| [#1579](https://github.com/temporalio/temporal/issues/1579) | 0 | 0 | 4y 7m | potential-bug, difficulty: medium | Continued submission of tasks to an orphaned ta... |

### Enhancements (350)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#680](https://github.com/temporalio/temporal/issues/680) | 70 | 14 | 5y 4m | enhancement, API | Add ability for workflow to wait for completion... |
| [#1507](https://github.com/temporalio/temporal/issues/1507) | 50 | 27 | 4y 8m | enhancement, API | Provide priority task queues |
| [#2668](https://github.com/temporalio/temporal/issues/2668) | 46 | 11 | 3y 9m | enhancement, config | Document POSTGRES_SEEDS (or better yet, use a d... |
| [#2318](https://github.com/temporalio/temporal/issues/2318) | 46 | 7 | 4 years | enhancement | MongoDB as Persistent |
| [#5680](https://github.com/temporalio/temporal/issues/5680) | 30 | 14 | 1y 8m | enhancement | Official support for Opensearch |
| [#537](https://github.com/temporalio/temporal/issues/537) | 30 | 2 | 5y 5m | enhancement, API | Add SignalWithStart\UpdateWithStart command |
| [#131](https://github.com/temporalio/temporal/issues/131) | 28 | 4 | 5y 10m | enhancement, API | Different retry options based on failure type |
| [#328](https://github.com/temporalio/temporal/issues/328) | 19 | 16 | 5y 8m | enhancement, product-integration | Try to run temporal on top of  Amazon Keyspaces |
| [#2609](https://github.com/temporalio/temporal/issues/2609) | 23 | 7 | 3y 9m | enhancement | Add ability to transfer child workflows to new ... |
| [#2582](https://github.com/temporalio/temporal/issues/2582) | 18 | 13 | 3y 10m | enhancement, up-for-grabs | Add health check handler for worker service |
| [#5302](https://github.com/temporalio/temporal/issues/5302) | 23 | 2 | 1y 11m | enhancement | YDB Temporal support. |
| [#1797](https://github.com/temporalio/temporal/issues/1797) | 22 | 4 | 4y 5m | enhancement, API | Ability to get all task queues per namespace |
| [#1460](https://github.com/temporalio/temporal/issues/1460) | 16 | 11 | 4y 8m | enhancement, devexp | Add task queue query |
| [#3228](https://github.com/temporalio/temporal/issues/3228) | 16 | 6 | 3y 4m | enhancement | Metadata for Timers |
| [#3366](https://github.com/temporalio/temporal/issues/3366) | 16 | 4 | 3y 3m | enhancement | Support sqlite in production. |
| [#4795](https://github.com/temporalio/temporal/issues/4795) | 14 | 6 | 2y 4m | enhancement, schedules | Schedules - add option for execution workflowid... |
| [#1988](https://github.com/temporalio/temporal/issues/1988) | 15 | 3 | 4y 3m | enhancement | Implement dynamic task queue routing |
| [#298](https://github.com/temporalio/temporal/issues/298) | 14 | 4 | 5y 8m | enhancement, packaging | Support embedded version of the service |
| [#4180](https://github.com/temporalio/temporal/issues/4180) | 13 | 1 | 2y 8m | enhancement | Official CockroachDB (CRDB) support |
| [#1492](https://github.com/temporalio/temporal/issues/1492) | 12 | 1 | 4y 8m | enhancement, devexp | Optimize large payload fan-out to activities an... |
| [#5811](https://github.com/temporalio/temporal/issues/5811) | 12 | 0 | 1y 8m | enhancement, schedules | Support last day of month as a recurring schedu... |
| [#3056](https://github.com/temporalio/temporal/issues/3056) | 11 | 2 | 3y 6m | enhancement | Support wildcard search for workflows |
| [#2617](https://github.com/temporalio/temporal/issues/2617) | 9 | 6 | 3y 9m | enhancement | Allow retention period to be set per workflow c... |
| [#1428](https://github.com/temporalio/temporal/issues/1428) | 11 | 2 | 4y 9m | enhancement, difficulty: hard | Aim for error free rolling bounces and upgrades... |
| [#4386](https://github.com/temporalio/temporal/issues/4386) | 6 | 11 | 2y 7m | enhancement | Add new Workflow Id Reuse Policy: Allow Duplica... |
| [#130](https://github.com/temporalio/temporal/issues/130) | 6 | 11 | 5y 10m | enhancement, CRON | Add cron activity |
| [#4383](https://github.com/temporalio/temporal/issues/4383) | 10 | 2 | 2y 7m | enhancement | Support log-less graceful shutdown without "Err... |
| [#685](https://github.com/temporalio/temporal/issues/685) | 9 | 4 | 5y 4m | enhancement | Delay workflow completion until abandoned child... |
| [#3709](https://github.com/temporalio/temporal/issues/3709) | 8 | 5 | 3 years | enhancement | Workflows/activities to post event notification... |
| [#3383](https://github.com/temporalio/temporal/issues/3383) | 4 | 13 | 3y 3m | enhancement | Schema name selection for postgres |
| [#3006](https://github.com/temporalio/temporal/issues/3006) | 0 | 18 | 3y 6m | enhancement | Workflow Pause / Unpause |
| [#487](https://github.com/temporalio/temporal/issues/487) | 8 | 2 | 5y 6m | enhancement, API | Consider separating retention period from uniqu... |
| [#4105](https://github.com/temporalio/temporal/issues/4105) | 8 | 1 | 2y 9m | enhancement | Full support for scylladb as persistence layer |
| [#4829](https://github.com/temporalio/temporal/issues/4829) | 8 | 0 | 2y 4m | enhancement | Allow to specify task queue when resetting an e... |
| [#5516](https://github.com/temporalio/temporal/issues/5516) | 7 | 1 | 1y 9m | enhancement | Support for Azure Blob Storage for Archival |
| [#4902](https://github.com/temporalio/temporal/issues/4902) | 0 | 15 | 2y 3m | enhancement | Custom authentication between frontend and othe... |
| [#3309](https://github.com/temporalio/temporal/issues/3309) | 7 | 1 | 3y 3m | enhancement | Notify all workers on a task queue |
| [#1412](https://github.com/temporalio/temporal/issues/1412) | 7 | 1 | 4y 9m | enhancement, API | Add soft workflow timeout |
| [#804](https://github.com/temporalio/temporal/issues/804) | 5 | 5 | 5y 2m | enhancement, up-for-grabs | Synchronous Start |
| [#7930](https://github.com/temporalio/temporal/issues/7930) | 0 | 14 | 6 months | enhancement | Replace "github.com/olivere/elastic/v7" with th... |
| [#3468](https://github.com/temporalio/temporal/issues/3468) | 6 | 2 | 3y 2m | enhancement | Add ability to list task queues for a given nam... |
| [#8724](https://github.com/temporalio/temporal/issues/8724) | 6 | 1 | 1 months | enhancement | Support Azure Entra ID Authentication for Postg... |
| [#8356](https://github.com/temporalio/temporal/issues/8356) | 6 | 1 | 3 months | enhancement | Resource-Aware Worker Concurrency |
| [#6799](https://github.com/temporalio/temporal/issues/6799) | 3 | 7 | 1y 1m | enhancement | Support `WorkflowIdConflictPolicy` for child wo... |
| [#4044](https://github.com/temporalio/temporal/issues/4044) | 5 | 2 | 2y 9m | enhancement | Postgres schema support partition table feature |
| [#1289](https://github.com/temporalio/temporal/issues/1289) | 5 | 2 | 4y 10m | enhancement, up-for-grabs | Do not fail continue as new on a new signal |
| [#2621](https://github.com/temporalio/temporal/issues/2621) | 5 | 0 | 3y 9m | enhancement, config | Align TLS enable env var names between temporal... |
| [#1499](https://github.com/temporalio/temporal/issues/1499) | 4 | 2 | 4y 8m | enhancement, CRON | Ability to update workflow config, including cr... |
| [#1203](https://github.com/temporalio/temporal/issues/1203) | 5 | 0 | 4y 11m | enhancement, API | Add SignalWithReset |
| [#5286](https://github.com/temporalio/temporal/issues/5286) | 3 | 3 | 1y 11m | enhancement | Slack Notification Integration (or other messag... |
| [#4387](https://github.com/temporalio/temporal/issues/4387) | 2 | 5 | 2y 7m | enhancement | Add blacklist/whitelist of signal and synchrono... |
| [#2691](https://github.com/temporalio/temporal/issues/2691) | 0 | 9 | 3y 9m | enhancement, API | Support for "workflow chain IDs" in all APIs th... |
| [#453](https://github.com/temporalio/temporal/issues/453) | 2 | 5 | 5y 6m | enhancement, operations | Feature: implement docker healthcheck |
| [#421](https://github.com/temporalio/temporal/issues/421) | 4 | 1 | 5y 7m | enhancement, difficulty: easy | Add admin command to dump dynamic config value[s] |
| [#196](https://github.com/temporalio/temporal/issues/196) | 4 | 1 | 5y 9m | enhancement, difficulty: hard | Task list with rate limiting per key |
| [#8205](https://github.com/temporalio/temporal/issues/8205) | 2 | 4 | 4 months | enhancement, schedules | Improve DST handling in schedules |
| [#7666](https://github.com/temporalio/temporal/issues/7666) | 3 | 2 | 8 months | enhancement | Сoncurrency limit (built-in semaphore) per Work... |
| [#3517](https://github.com/temporalio/temporal/issues/3517) | 3 | 2 | 3y 2m | enhancement | Provide a way to retrieve the list of failures ... |
| [#3141](https://github.com/temporalio/temporal/issues/3141) | 4 | 0 | 3y 5m | enhancement | Support reset to any point with pending ChildWo... |
| [#954](https://github.com/temporalio/temporal/issues/954) | 3 | 2 | 5y 1m | enhancement, database | docs: Add multi-region deployment documentation |
| [#7777](https://github.com/temporalio/temporal/issues/7777) | 3 | 1 | 7 months | enhancement | Support workflow task completions larger than g... |
| [#7421](https://github.com/temporalio/temporal/issues/7421) | 2 | 3 | 10 months | archival, feature-request | Migration to AWS SDK for Go v2 needed |
| [#785](https://github.com/temporalio/temporal/issues/785) | 3 | 1 | 5y 3m | enhancement, architecture | Workflow-less activity |
| [#682](https://github.com/temporalio/temporal/issues/682) | 0 | 7 | 5y 4m | enhancement, difficulty: easy | Signal to self error in Workflow code |
| [#5874](https://github.com/temporalio/temporal/issues/5874) | 0 | 6 | 2y 6m | enhancement | Provide extra info of the received signal for r... |
| [#5725](https://github.com/temporalio/temporal/issues/5725) | 3 | 0 | 1y 8m | enhancement | Add PARENT_CLOSE_POLICY_DISCONNECTED |
| [#3503](https://github.com/temporalio/temporal/issues/3503) | 2 | 2 | 3y 2m | enhancement | Dynamic Task Queue rate limiting |
| [#2341](https://github.com/temporalio/temporal/issues/2341) | 1 | 4 | 3y 12m | enhancement, up-for-grabs | config: strict mode for configuration parsing |
| [#2230](https://github.com/temporalio/temporal/issues/2230) | 3 | 0 | 4y 1m | enhancement | Add a feature flag to enable the self-signed ce... |
| [#1994](https://github.com/temporalio/temporal/issues/1994) | 0 | 6 | 4y 3m | enhancement, CRON | Cron tailgate-like workflow triggering (start a... |
| [#1485](https://github.com/temporalio/temporal/issues/1485) | 3 | 0 | 4y 8m | enhancement, API | Provide default mapping for authorizer roles to... |
| [#8636](https://github.com/temporalio/temporal/issues/8636) | 1 | 3 | 1 months | enhancement | Auth plugin design |
| [#8284](https://github.com/temporalio/temporal/issues/8284) | 2 | 1 | 3 months | enhancement | Carry over signal to retry execution if origina... |
| [#6805](https://github.com/temporalio/temporal/issues/6805) | 2 | 1 | 1y 1m | enhancement | Scaling Temporal Workers |
| [#4151](https://github.com/temporalio/temporal/issues/4151) | 2 | 1 | 2y 8m | enhancement | Allow update timeout/retry config for started a... |
| [#4038](https://github.com/temporalio/temporal/issues/4038) | 2 | 1 | 2y 9m | enhancement | partitioned activity taskQueue based on workflo... |
| [#3502](https://github.com/temporalio/temporal/issues/3502) | 0 | 5 | 3y 2m | enhancement | Add metric for number of open Workflow Executions |
| [#2891](https://github.com/temporalio/temporal/issues/2891) | 0 | 5 | 3y 7m | enhancement | Document configuration (development.yaml, dynam... |
| [#2630](https://github.com/temporalio/temporal/issues/2630) | 0 | 5 | 3y 9m | enhancement | DNS name in BroadcastAddress  |
| [#2320](https://github.com/temporalio/temporal/issues/2320) | 0 | 5 | 4 years | enhancement | Thrift version update and unification |
| [#1895](https://github.com/temporalio/temporal/issues/1895) | 0 | 5 | 4y 3m | enhancement | Use "nobody" account to run binaries in the docker |
| [#1882](https://github.com/temporalio/temporal/issues/1882) | 0 | 5 | 4y 4m | enhancement | support manual retries |
| [#1739](https://github.com/temporalio/temporal/issues/1739) | 2 | 1 | 4y 5m | enhancement | Return more accurate error codes |
| [#469](https://github.com/temporalio/temporal/issues/469) | 2 | 1 | 5y 6m | enhancement, API | Limit depth of child workflows |
| [#8581](https://github.com/temporalio/temporal/issues/8581) | 1 | 2 | 2 months | enhancement | [Scheduled Actions] - Update Schedule memo |
| [#8109](https://github.com/temporalio/temporal/issues/8109) | 2 | 0 | 5 months | enhancement | Support for Naming Timers in Temporal Workflows |
| [#7947](https://github.com/temporalio/temporal/issues/7947) | 2 | 0 | 6 months | enhancement | CLI/WebUI option to list out dynamic configs |
| [#6845](https://github.com/temporalio/temporal/issues/6845) | 0 | 4 | 1y 1m | enhancement | Support full, structured failures for queries |
| [#6611](https://github.com/temporalio/temporal/issues/6611) | 2 | 0 | 1y 2m | enhancement | Expose anonymous HTTP/HTTPS health endpoint on ... |
| [#6201](https://github.com/temporalio/temporal/issues/6201) | 2 | 0 | 1y 6m | enhancement | tdbg diagnose command for stuck workflow |
| [#6100](https://github.com/temporalio/temporal/issues/6100) | 0 | 4 | 1y 6m | enhancement | fr: add support for multi-az postgres with read... |
| [#5881](https://github.com/temporalio/temporal/issues/5881) | 2 | 0 | 1y 7m | enhancement | Continue-as-new with a different WorkflowID |
| [#5873](https://github.com/temporalio/temporal/issues/5873) | 0 | 4 | 1y 7m | enhancement | WorkflowContext provides whether the current wo... |
| [#4845](https://github.com/temporalio/temporal/issues/4845) | 2 | 0 | 2y 3m | enhancement | Add ability to reject signals by type |
| [#4542](https://github.com/temporalio/temporal/issues/4542) | 2 | 0 | 2y 6m | enhancement | Support activity caching through sticky routing... |
| [#3769](https://github.com/temporalio/temporal/issues/3769) | 0 | 4 | 2y 12m | enhancement | Any plan to support MS SQL Server? |
| [#2905](https://github.com/temporalio/temporal/issues/2905) | 2 | 0 | 3y 7m | enhancement | Access and configure underlying gRPC connection... |
| [#1904](https://github.com/temporalio/temporal/issues/1904) | 2 | 0 | 4y 3m | enhancement, visibility | Create visibility reconciler workflow |
| [#1821](https://github.com/temporalio/temporal/issues/1821) | 2 | 0 | 4y 4m | enhancement | Document the Elasticsearch permissions required... |
| [#1700](https://github.com/temporalio/temporal/issues/1700) | 0 | 4 | 4y 6m | enhancement, API | Simple way to handle a single concurrent workflow |
| [#960](https://github.com/temporalio/temporal/issues/960) | 2 | 0 | 5y 1m | enhancement, packaging | Support for in memory db and setup for running ... |
| [#674](https://github.com/temporalio/temporal/issues/674) | 0 | 4 | 5y 4m | enhancement, difficulty: medium | Heartbeat WorkflowTask during history pagination |
| [#8764](https://github.com/temporalio/temporal/issues/8764) | 1 | 1 | 26 days | enhancement | Listing workflows and activities from temporal sdk |
| [#8611](https://github.com/temporalio/temporal/issues/8611) | 0 | 3 | 1 months | enhancement | Allowing workflow to specify max retry attempts... |
| [#8432](https://github.com/temporalio/temporal/issues/8432) | 0 | 3 | 2 months | enhancement | Set log level of dynamic config updated message... |
| [#8113](https://github.com/temporalio/temporal/issues/8113) | 0 | 3 | 5 months | enhancement | Add Activity support for Worker Versioning |
| [#8087](https://github.com/temporalio/temporal/issues/8087) | 1 | 1 | 5 months | enhancement, feature-request | [Scheduled Actions] Skipped Action Metric |
| [#7882](https://github.com/temporalio/temporal/issues/7882) | 1 | 1 | 6 months | enhancement | Support for selecting "Workflow Id Conflict Pol... |
| [#7866](https://github.com/temporalio/temporal/issues/7866) | 0 | 3 | 7 months | enhancement | AWS STS for connecting S3 for archival |
| [#7637](https://github.com/temporalio/temporal/issues/7637) | 0 | 3 | 8 months | enhancement | Add a dedicated metric for corrupted workflows |
| [#7623](https://github.com/temporalio/temporal/issues/7623) | 1 | 1 | 8 months | enhancement | Feature: Delayed schedule for activity tasks |
| [#7560](https://github.com/temporalio/temporal/issues/7560) | 0 | 3 | 9 months | enhancement | Default JWT claim mapper support for permission... |
| [#7551](https://github.com/temporalio/temporal/issues/7551) | 0 | 3 | 1 years | enhancement | Atomic workflow reset & update |
| [#6633](https://github.com/temporalio/temporal/issues/6633) | 1 | 1 | 1y 2m | enhancement | [Feature Request] Support exponential/native hi... |
| [#6546](https://github.com/temporalio/temporal/issues/6546) | 0 | 3 | 1y 3m | enhancement | Allow to disable workflow deadlock detector |
| [#5877](https://github.com/temporalio/temporal/issues/5877) | 0 | 3 | 1y 7m | enhancement | Address force completion when make a request th... |
| [#5768](https://github.com/temporalio/temporal/issues/5768) | 0 | 3 | 1y 8m | enhancement | Metric specific to workflow retries per namespace |
| [#5135](https://github.com/temporalio/temporal/issues/5135) | 0 | 3 | 2y 1m | enhancement | Support more direct/immediate notification of a... |
| [#4887](https://github.com/temporalio/temporal/issues/4887) | 0 | 3 | 2y 3m | enhancement | Prepopulate run_id in schedule future_action_times |
| [#4463](https://github.com/temporalio/temporal/issues/4463) | 1 | 1 | 2y 6m | enhancement | Cache event history from query tasks |
| [#3863](https://github.com/temporalio/temporal/issues/3863) | 0 | 3 | 2y 11m | enhancement | Pin a particular workflow run to prevent it fro... |
| [#3665](https://github.com/temporalio/temporal/issues/3665) | 0 | 3 | 3y 1m | enhancement | Update workflow search attributes outside of wo... |
| [#3532](https://github.com/temporalio/temporal/issues/3532) | 0 | 3 | 3y 2m | enhancement | Remove unused methods in ClientBean |
| [#3015](https://github.com/temporalio/temporal/issues/3015) | 0 | 3 | 3y 6m | enhancement | Possibility to exclude metrics tags when emitti... |
| [#2598](https://github.com/temporalio/temporal/issues/2598) | 1 | 1 | 3y 9m | enhancement | Allow configurable time for history/visibility ... |
| [#1338](https://github.com/temporalio/temporal/issues/1338) | 0 | 3 | 4y 10m | enhancement, good first issue | Workflow Reset: add logic of determining the re... |
| [#1311](https://github.com/temporalio/temporal/issues/1311) | 0 | 3 | 4y 10m | enhancement, good first issue | Make workflow state (not status) available via API |
| [#1024](https://github.com/temporalio/temporal/issues/1024) | 1 | 1 | 5y 1m | enhancement, API | Add a CLI and tab in the web dashboard to displ... |
| [#996](https://github.com/temporalio/temporal/issues/996) | 0 | 3 | 5y 1m | enhancement, API | [request] API needs for Temporal Web |
| [#518](https://github.com/temporalio/temporal/issues/518) | 1 | 1 | 5y 5m | enhancement, API | Add support for passing large arguments between... |
| [#503](https://github.com/temporalio/temporal/issues/503) | 1 | 1 | 5y 5m | enhancement, good first issue | Record activity started and failed event for ac... |
| [#8606](https://github.com/temporalio/temporal/issues/8606) | 0 | 2 | 1 months | enhancement | Schedules - allow TriggerImmediatelyRequest to ... |
| [#8072](https://github.com/temporalio/temporal/issues/8072) | 0 | 2 | 5 months | enhancement | Adding sql metric stats |
| [#7625](https://github.com/temporalio/temporal/issues/7625) | 0 | 2 | 8 months | enhancement, difficulty: easy | Additional tuning configs for scavenger jobs |
| [#6946](https://github.com/temporalio/temporal/issues/6946) | 0 | 2 | 1 years | enhancement | PostgreSQL password in config file |
| [#6834](https://github.com/temporalio/temporal/issues/6834) | 1 | 0 | 1y 1m | enhancement | Support start delay in continue-as-new options |
| [#6827](https://github.com/temporalio/temporal/issues/6827) | 1 | 0 | 1y 1m | enhancement | Support Environment Variable Substitution for c... |
| [#6758](https://github.com/temporalio/temporal/issues/6758) | 0 | 2 | 1y 1m | enhancement | API for setting RPS limits for activity tasks d... |
| [#6754](https://github.com/temporalio/temporal/issues/6754) | 1 | 0 | 1y 1m | enhancement | Adding a custom label to Temporal out-of-the-bo... |
| [#6724](https://github.com/temporalio/temporal/issues/6724) | 1 | 0 | 1y 2m | enhancement | More batch reset types |
| [#6561](https://github.com/temporalio/temporal/issues/6561) | 0 | 2 | 1y 3m | enhancement | Simple configuration structure |
| [#6481](https://github.com/temporalio/temporal/issues/6481) | 1 | 0 | 1y 3m | enhancement | Support wait for signal in execution history API |
| [#6255](https://github.com/temporalio/temporal/issues/6255) | 0 | 2 | 1y 5m | enhancement | Add support for a "final workflow state retenti... |
| [#6239](https://github.com/temporalio/temporal/issues/6239) | 1 | 0 | 1y 6m | enhancement | Allow SDKs to change workflow task max retry in... |
| [#5105](https://github.com/temporalio/temporal/issues/5105) | 0 | 2 | 2y 1m | enhancement | Add support to create Elasticsearch rolling ind... |
| [#4947](https://github.com/temporalio/temporal/issues/4947) | 1 | 0 | 2y 2m | enhancement | Add fields to `ListBatchOperations` and `Descri... |
| [#4802](https://github.com/temporalio/temporal/issues/4802) | 0 | 2 | 2y 4m | enhancement | Increase the number of pre-allocated custom sea... |
| [#4389](https://github.com/temporalio/temporal/issues/4389) | 0 | 2 | 2y 7m | enhancement | Do not record activity input in the workflow hi... |
| [#4201](https://github.com/temporalio/temporal/issues/4201) | 0 | 2 | 2y 8m | enhancement | Allow to configure max concurrency of a workflo... |
| [#4179](https://github.com/temporalio/temporal/issues/4179) | 0 | 2 | 2y 8m | enhancement | Header propagation on activity/workflow results |
| [#3633](https://github.com/temporalio/temporal/issues/3633) | 0 | 2 | 3y 1m | enhancement | Cassandra schema should use default SizeTieredC... |
| [#3212](https://github.com/temporalio/temporal/issues/3212) | 0 | 2 | 3y 4m | enhancement | Add query param to ListNamespacesRequest |
| [#3086](https://github.com/temporalio/temporal/issues/3086) | 0 | 2 | 3y 5m | enhancement, performance | Do not emit metrics when acquire shard r/w lock |
| [#2688](https://github.com/temporalio/temporal/issues/2688) | 1 | 0 | 3y 9m | enhancement | Support SignalExternalWorkflowExecutionWithStart |
| [#2526](https://github.com/temporalio/temporal/issues/2526) | 0 | 2 | 3y 10m | enhancement | Metric on workflows not progressing because of ... |
| [#2491](https://github.com/temporalio/temporal/issues/2491) | 0 | 2 | 3y 10m | enhancement, up-for-grabs | Throttled logger should not throttle errors tha... |
| [#2482](https://github.com/temporalio/temporal/issues/2482) | 1 | 0 | 3y 10m | enhancement | Ability to disable dynamic config in auto-setup... |
| [#2470](https://github.com/temporalio/temporal/issues/2470) | 0 | 2 | 3y 11m | enhancement, up-for-grabs | Temporal assumes the credentials of storage ser... |
| [#2405](https://github.com/temporalio/temporal/issues/2405) | 0 | 2 | 3y 11m | enhancement | Use sticky task queue on querying close workflow |
| [#2342](https://github.com/temporalio/temporal/issues/2342) | 1 | 0 | 3y 12m | enhancement | Add API to allow operator to add custom system ... |
| [#1893](https://github.com/temporalio/temporal/issues/1893) | 1 | 0 | 4y 3m | enhancement | Include tarball with versioned schema in release |
| [#1423](https://github.com/temporalio/temporal/issues/1423) | 1 | 0 | 4y 9m | enhancement, operations | Make output streams of logger configurable perf... |
| [#1018](https://github.com/temporalio/temporal/issues/1018) | 1 | 0 | 5y 1m | enhancement, API | Add CANCEL_REQUESTED status |
| [#845](https://github.com/temporalio/temporal/issues/845) | 0 | 2 | 5y 2m | enhancement | Generate a signed token for each workflow activity |
| [#773](https://github.com/temporalio/temporal/issues/773) | 0 | 2 | 5y 3m | enhancement | session and childworkflow |
| [#705](https://github.com/temporalio/temporal/issues/705) | 0 | 2 | 5y 4m | enhancement, difficulty: hard | Support reset with pending child workflows |
| [#515](https://github.com/temporalio/temporal/issues/515) | 1 | 0 | 5y 5m | enhancement, difficulty: easy | Expose zap logger encoding to config |
| [#455](https://github.com/temporalio/temporal/issues/455) | 1 | 0 | 5y 6m | enhancement, difficulty: easy | If a temporal service fails to start due to a m... |
| [#109](https://github.com/temporalio/temporal/issues/109) | 0 | 2 | 5y 11m | enhancement, devexp | Docker: Docker image with schema loaded |
| [#108](https://github.com/temporalio/temporal/issues/108) | 0 | 2 | 5y 11m | enhancement, docker | Make temporal docker to not emit noisy logs |
| [#8608](https://github.com/temporalio/temporal/issues/8608) | 0 | 1 | 1 months | enhancement | Support opt-in ability to get workflow input an... |
| [#8537](https://github.com/temporalio/temporal/issues/8537) | 0 | 1 | 2 months | enhancement | Add first execution run ID for already-started ... |
| [#8349](https://github.com/temporalio/temporal/issues/8349) | 0 | 1 | 3 months | enhancement | Support relative time in the visibility store |
| [#8322](https://github.com/temporalio/temporal/issues/8322) | 0 | 1 | 3 months | enhancement | Don't log a warning when task queue kind is uns... |
| [#8298](https://github.com/temporalio/temporal/issues/8298) | 0 | 1 | 3 months | enhancement | Make Nexus work out of the box with zero config |
| [#8101](https://github.com/temporalio/temporal/issues/8101) | 0 | 1 | 5 months | enhancement | Improve record activity started implementation |
| [#7916](https://github.com/temporalio/temporal/issues/7916) | 0 | 1 | 6 months | enhancement | Allow multiple task queues to a worker - enable... |
| [#7780](https://github.com/temporalio/temporal/issues/7780) | 0 | 1 | 7 months | enhancement | Support for HTTPS metrics endpoint on OSS Temporal |
| [#7658](https://github.com/temporalio/temporal/issues/7658) | 0 | 1 | 8 months | enhancement | Allow Configurable Prefixes for Temporal Schema... |
| [#7657](https://github.com/temporalio/temporal/issues/7657) | 0 | 1 | 8 months | enhancement | Rename Visibility schema's version table to avo... |
| [#7577](https://github.com/temporalio/temporal/issues/7577) | 0 | 1 | 9 months | enhancement | Add retries for Temporal having connectivity fa... |
| [#7390](https://github.com/temporalio/temporal/issues/7390) | 0 | 1 | 10 months | enhancement | Feature: Integrate Needle RAG API as a component. |
| [#7367](https://github.com/temporalio/temporal/issues/7367) | 0 | 1 | 10 months | enhancement | Do not truncate activity failure info if there ... |
| [#6647](https://github.com/temporalio/temporal/issues/6647) | 0 | 1 | 1y 2m | enhancement | Make option for UpsertSearchAttribute command t... |
| [#6329](https://github.com/temporalio/temporal/issues/6329) | 0 | 1 | 1y 5m | enhancement | Ability to attach a local debugger to Local Tem... |
| [#5796](https://github.com/temporalio/temporal/issues/5796) | 0 | 1 | 1y 8m | enhancement | Application Error with a Suggested Retry Interv... |
| [#5763](https://github.com/temporalio/temporal/issues/5763) | 0 | 1 | 1y 8m | enhancement | Limit failure cause depth |
| [#4816](https://github.com/temporalio/temporal/issues/4816) | 0 | 1 | 2y 4m | enhancement | Elasticsearch legacy index template  |
| [#4692](https://github.com/temporalio/temporal/issues/4692) | 0 | 1 | 2y 5m | enhancement | Could taskReader persistAckLevel check last per... |
| [#4600](https://github.com/temporalio/temporal/issues/4600) | 0 | 1 | 2y 5m | enhancement | Use different task queue for activity and workf... |
| [#4502](https://github.com/temporalio/temporal/issues/4502) | 0 | 1 | 2y 6m | enhancement | Support data references to avoid storing the sa... |
| [#4247](https://github.com/temporalio/temporal/issues/4247) | 0 | 1 | 2y 8m | enhancement | Add firstExecutionRunId to system search attribute |
| [#4246](https://github.com/temporalio/temporal/issues/4246) | 0 | 1 | 2y 8m | enhancement | Consider adding Heartbeat Details to other Fail... |
| [#4021](https://github.com/temporalio/temporal/issues/4021) | 0 | 1 | 2y 10m | enhancement, P0 | Expiration policy for signal requestIDs in muta... |
| [#3987](https://github.com/temporalio/temporal/issues/3987) | 0 | 1 | 2y 10m | enhancement | Named Timers |
| [#3682](https://github.com/temporalio/temporal/issues/3682) | 0 | 1 | 3y 1m | enhancement | Taskqueue scavenger does not work for cassandra |
| [#3666](https://github.com/temporalio/temporal/issues/3666) | 0 | 1 | 3y 1m | enhancement | Add ability to invoke the ParentClosePolicy on ... |
| [#3177](https://github.com/temporalio/temporal/issues/3177) | 0 | 1 | 3y 5m | enhancement | Add input validation that request ID size is be... |
| [#3165](https://github.com/temporalio/temporal/issues/3165) | 0 | 1 | 3y 5m | enhancement | Sync search attributes and ES schema |
| [#3134](https://github.com/temporalio/temporal/issues/3134) | 0 | 1 | 3y 5m | enhancement, potential-bug | Do not block shard ownership assertion if `acqu... |
| [#3008](https://github.com/temporalio/temporal/issues/3008) | 0 | 1 | 3y 6m | enhancement, feature-request | Continue workflow as new and signal in a single... |
| [#2829](https://github.com/temporalio/temporal/issues/2829) | 0 | 1 | 3y 7m | enhancement | Support starting abandoned child after parent w... |
| [#2707](https://github.com/temporalio/temporal/issues/2707) | 0 | 1 | 3y 8m | enhancement | Admin CLI to update mutable state directly |
| [#2687](https://github.com/temporalio/temporal/issues/2687) | 0 | 1 | 3y 9m | enhancement, difficulty: easy | Populate identity for child workflows |
| [#2565](https://github.com/temporalio/temporal/issues/2565) | 0 | 1 | 3y 10m | enhancement | Consider adding an option for bidirectional gRP... |
| [#2283](https://github.com/temporalio/temporal/issues/2283) | 0 | 1 | 4 years | enhancement | Add well known indicator/label/tag to log outpu... |
| [#2252](https://github.com/temporalio/temporal/issues/2252) | 0 | 1 | 4 years | enhancement | Improve error message(s) returned when failing ... |
| [#2101](https://github.com/temporalio/temporal/issues/2101) | 0 | 1 | 4y 2m | enhancement | History server should emit cache size / capacit... |
| [#2054](https://github.com/temporalio/temporal/issues/2054) | 0 | 1 | 4y 2m | enhancement | Expose disableInitialHostLookup for temporal-ca... |
| [#1979](https://github.com/temporalio/temporal/issues/1979) | 0 | 1 | 4y 3m | enhancement | Worker identity from task heartbeats is not exp... |
| [#1898](https://github.com/temporalio/temporal/issues/1898) | 0 | 1 | 4y 3m | enhancement | Add pid file configuration option |
| [#1891](https://github.com/temporalio/temporal/issues/1891) | 0 | 1 | 4y 3m | enhancement | Worker heartbeat |
| [#1714](https://github.com/temporalio/temporal/issues/1714) | 0 | 1 | 4y 5m | enhancement | Activity dispatching optimization |
| [#1468](https://github.com/temporalio/temporal/issues/1468) | 0 | 1 | 4y 8m | enhancement | Add ActivityTaskStarted event immediately if Re... |
| [#19](https://github.com/temporalio/temporal/issues/19) | 0 | 1 | 6y 1m | enhancement, docker | Clear indication that service is up and running |
| [#13](https://github.com/temporalio/temporal/issues/13) | 0 | 1 | 6y 1m | enhancement, discussion | Multi-phase activities |
| [#8901](https://github.com/temporalio/temporal/issues/8901) | 0 | 0 | 7 days | enhancement | Skip Re-executing Completed Activities on Workf... |
| [#8652](https://github.com/temporalio/temporal/issues/8652) | 0 | 0 | 1 months | enhancement | Documenting the current state of ScyllaDB as a ... |
| [#8648](https://github.com/temporalio/temporal/issues/8648) | 0 | 0 | 1 months | enhancement | Add ExecutionStatus to visibility columns for a... |
| [#8538](https://github.com/temporalio/temporal/issues/8538) | 0 | 0 | 2 months | enhancement | Provide user identity on user-initiated events |
| [#8097](https://github.com/temporalio/temporal/issues/8097) | 0 | 0 | 5 months | enhancement | Carryover instead of reject incoming signals up... |
| [#8074](https://github.com/temporalio/temporal/issues/8074) | 0 | 0 | 5 months | enhancement | [FR] - ResetWithSignal |
| [#8039](https://github.com/temporalio/temporal/issues/8039) | 0 | 0 | 5 months | enhancement | Expose activity last failure info via PollActiv... |
| [#7940](https://github.com/temporalio/temporal/issues/7940) | 0 | 0 | 6 months | enhancement | Allow auth headers to be sent to HTTP on localhost |
| [#7933](https://github.com/temporalio/temporal/issues/7933) | 0 | 0 | 6 months | enhancement | Workflow reset: add ability to set workflow run... |
| [#7721](https://github.com/temporalio/temporal/issues/7721) | 0 | 0 | 7 months | enhancement | Expose API version to API users |
| [#7708](https://github.com/temporalio/temporal/issues/7708) | 0 | 0 | 8 months | enhancement | Dev Mode Improvements (Insights from AWS Hackat... |
| [#7164](https://github.com/temporalio/temporal/issues/7164) | 0 | 0 | 11 months | enhancement | Confirm aborted update retries schedule respons... |
| [#7011](https://github.com/temporalio/temporal/issues/7011) | 0 | 0 | 1 years | enhancement | Support Markdown in Result panel |
| [#6961](https://github.com/temporalio/temporal/issues/6961) | 0 | 0 | 1 years | enhancement | Provide already-existing run ID on StartChildWo... |
| [#6924](https://github.com/temporalio/temporal/issues/6924) | 0 | 0 | 1 years | enhancement | Support custom search attributes of type Duration |
| [#6896](https://github.com/temporalio/temporal/issues/6896) | 0 | 0 | 1y 1m | enhancement | Include command info when command fails validation |
| [#6800](https://github.com/temporalio/temporal/issues/6800) | 0 | 0 | 1y 1m | enhancement | Support activity task queue `max_tasks_per_seco... |
| [#6760](https://github.com/temporalio/temporal/issues/6760) | 0 | 0 | 1y 1m | enhancement | Include in-memory (sync match) backlog in `Appr... |
| [#6695](https://github.com/temporalio/temporal/issues/6695) | 0 | 0 | 1y 2m | enhancement | disable XDC cache when not using multi-cluster ... |
| [#6618](https://github.com/temporalio/temporal/issues/6618) | 0 | 0 | 1y 2m | enhancement | Cassandra 5 support |
| [#6617](https://github.com/temporalio/temporal/issues/6617) | 0 | 0 | 1y 2m | enhancement | hybrid architecture for Temporal |
| [#6600](https://github.com/temporalio/temporal/issues/6600) | 0 | 0 | 1y 2m | enhancement | Standardized Documentation Format a la Swagger |
| [#6585](https://github.com/temporalio/temporal/issues/6585) | 0 | 0 | 1y 3m | enhancement | Record a history event indicating that a Nexus ... |
| [#6555](https://github.com/temporalio/temporal/issues/6555) | 0 | 0 | 1y 3m | enhancement | Add `EdDSA` support to default JWT ClaimMapper |
| [#6529](https://github.com/temporalio/temporal/issues/6529) | 0 | 0 | 1y 3m | enhancement | Certificate-filters in self-hosted version of T... |
| [#6521](https://github.com/temporalio/temporal/issues/6521) | 0 | 0 | 1y 3m | enhancement | Optional Activities |
| [#6501](https://github.com/temporalio/temporal/issues/6501) | 0 | 0 | 1y 3m | enhancement | Access original run id in mutable state |
| [#6475](https://github.com/temporalio/temporal/issues/6475) | 0 | 0 | 1y 3m | enhancement | Support registering search attributes as an opt... |
| [#6364](https://github.com/temporalio/temporal/issues/6364) | 0 | 0 | 1y 5m | enhancement | Add TemporalScheduledStartTime and TemporalSche... |
| [#6339](https://github.com/temporalio/temporal/issues/6339) | 0 | 0 | 1y 5m | enhancement | Update/trigger/etc activities via client |
| [#6336](https://github.com/temporalio/temporal/issues/6336) | 0 | 0 | 1y 5m | enhancement | Expose start delay in child workflow options |
| [#6275](https://github.com/temporalio/temporal/issues/6275) | 0 | 0 | 1y 5m | enhancement | Is there a way to detect when workflow is in a ... |
| [#6259](https://github.com/temporalio/temporal/issues/6259) | 0 | 0 | 1y 5m | enhancement | Support validated/authenticated payloads |
| [#6253](https://github.com/temporalio/temporal/issues/6253) | 0 | 0 | 1y 5m | enhancement | Expand configuration for Elastic to support ser... |
| [#6237](https://github.com/temporalio/temporal/issues/6237) | 0 | 0 | 1y 6m | enhancement | Enable wildcard namespace definition when setti... |
| [#6227](https://github.com/temporalio/temporal/issues/6227) | 0 | 0 | 1y 6m | enhancement | Metric for Complete Workflow/Activity Failure |
| [#6212](https://github.com/temporalio/temporal/issues/6212) | 0 | 0 | 1y 6m | enhancement | Allow configurable root path for HTTP API |
| [#6192](https://github.com/temporalio/temporal/issues/6192) | 0 | 0 | 1y 6m | enhancement | Support externally-provided unique async comple... |
| [#6104](https://github.com/temporalio/temporal/issues/6104) | 0 | 0 | 1y 6m | enhancement | Include Linux ARM, macOS x64/ARM, and Windows x... |
| [#5743](https://github.com/temporalio/temporal/issues/5743) | 0 | 0 | 1y 8m | enhancement, operations | DLQv2 operator tooling should print categoryID,... |
| [#5634](https://github.com/temporalio/temporal/issues/5634) | 0 | 0 | 1y 9m | enhancement, docker | Use the new CLI's rewrite branch when building ... |
| [#5589](https://github.com/temporalio/temporal/issues/5589) | 0 | 0 | 1y 9m | enhancement | command missing in new Temporal CLI |
| [#5544](https://github.com/temporalio/temporal/issues/5544) | 0 | 0 | 1y 9m | enhancement | Use different error when signalName is empty th... |
| [#5543](https://github.com/temporalio/temporal/issues/5543) | 0 | 0 | 1y 9m | enhancement | Remove indexes from schema Temporal in cassandra |
| [#5541](https://github.com/temporalio/temporal/issues/5541) | 0 | 0 | 1y 9m | enhancement | Support for nestjs |
| [#5510](https://github.com/temporalio/temporal/issues/5510) | 0 | 0 | 1y 9m | enhancement | Ability to update schedule memo via Python SDK |
| [#5493](https://github.com/temporalio/temporal/issues/5493) | 0 | 0 | 1y 10m | enhancement | Automatically split history event batches when ... |
| [#5461](https://github.com/temporalio/temporal/issues/5461) | 0 | 0 | 1y 10m | enhancement | Add programmatic way to extract metrics port wh... |
| [#5454](https://github.com/temporalio/temporal/issues/5454) | 0 | 0 | 1y 10m | enhancement | Identifiers length validation |
| [#5439](https://github.com/temporalio/temporal/issues/5439) | 0 | 0 | 1y 10m | enhancement | Worker cache handover |
| [#5352](https://github.com/temporalio/temporal/issues/5352) | 0 | 0 | 1y 11m | enhancement | Refinement of ResourceExhausted reasons |
| [#5310](https://github.com/temporalio/temporal/issues/5310) | 0 | 0 | 1y 11m | enhancement | Allow(optionally) omit activity argument/input ... |
| [#5306](https://github.com/temporalio/temporal/issues/5306) | 0 | 0 | 1y 11m | enhancement | Defining a storage class on S3 archival |
| [#5303](https://github.com/temporalio/temporal/issues/5303) | 0 | 0 | 1y 11m | enhancement | Provide WorkflowStatus in when signing a workfl... |
| [#5299](https://github.com/temporalio/temporal/issues/5299) | 0 | 0 | 1y 11m | enhancement | Check DB Connectivity in Liveness probe |
| [#5245](https://github.com/temporalio/temporal/issues/5245) | 0 | 0 | 2 years | enhancement | SchedulesClientListOptions is missing SearchAtt... |
| [#5133](https://github.com/temporalio/temporal/issues/5133) | 0 | 0 | 2y 1m | enhancement | Failed workflow list for batch operations |
| [#5047](https://github.com/temporalio/temporal/issues/5047) | 0 | 0 | 2y 2m | enhancement | Config option to turn off "ignoring permission ... |
| [#5005](https://github.com/temporalio/temporal/issues/5005) | 0 | 0 | 2y 2m | enhancement, schedules | Schedules: Allow overriding search attributes w... |
| [#4984](https://github.com/temporalio/temporal/issues/4984) | 0 | 0 | 2y 2m | enhancement, schedules | Schedules: Make it possible to list buffered ex... |
| [#4979](https://github.com/temporalio/temporal/issues/4979) | 0 | 0 | 2y 2m | enhancement | Support waiting for Admitted stage on UpdateWor... |
| [#4958](https://github.com/temporalio/temporal/issues/4958) | 0 | 0 | 2y 2m | enhancement | GetMutableStateRequest is used in poll mutable ... |
| [#4957](https://github.com/temporalio/temporal/issues/4957) | 0 | 0 | 2y 2m | enhancement | CurrentBranchChanged Error should use event id ... |
| [#4870](https://github.com/temporalio/temporal/issues/4870) | 0 | 0 | 2y 3m | enhancement | Allow static JWKS for `jwtKeyProvider` |
| [#4749](https://github.com/temporalio/temporal/issues/4749) | 0 | 0 | 2y 4m | enhancement | Support listening on both IPv4 and IPv6 network... |
| [#4745](https://github.com/temporalio/temporal/issues/4745) | 0 | 0 | 2y 4m | enhancement | Replicate search attributes together with names... |
| [#4703](https://github.com/temporalio/temporal/issues/4703) | 0 | 0 | 2y 5m | enhancement, schedules | Add a list of datetimes to `ScheduleSpec` |
| [#4638](https://github.com/temporalio/temporal/issues/4638) | 0 | 0 | 2y 5m | enhancement | History Queue Deletion & Life Cycle |
| [#4428](https://github.com/temporalio/temporal/issues/4428) | 0 | 0 | 2y 7m | enhancement, feature-request | Support fixed deadline timers |
| [#4171](https://github.com/temporalio/temporal/issues/4171) | 0 | 0 | 2y 8m | enhancement | Add metrics when history service writes activit... |
| [#4117](https://github.com/temporalio/temporal/issues/4117) | 0 | 0 | 2y 9m | enhancement | Take additional factors into account for sugges... |
| [#4059](https://github.com/temporalio/temporal/issues/4059) | 0 | 0 | 2y 9m | enhancement | System search attributes to find workflows that... |
| [#4045](https://github.com/temporalio/temporal/issues/4045) | 0 | 0 | 2y 9m | enhancement | Expose current worker identity for started pend... |
| [#4030](https://github.com/temporalio/temporal/issues/4030) | 0 | 0 | 2y 9m | enhancement | Query at a specific WorkflowTaskStarted eventId |
| [#4029](https://github.com/temporalio/temporal/issues/4029) | 0 | 0 | 2y 9m | enhancement, discussion | Clear signal requestID on workflow close |
| [#3990](https://github.com/temporalio/temporal/issues/3990) | 0 | 0 | 2y 10m | enhancement | Blacklisting workers by version and identity |
| [#3988](https://github.com/temporalio/temporal/issues/3988) | 0 | 0 | 2y 10m | enhancement | Add query result caching |
| [#3700](https://github.com/temporalio/temporal/issues/3700) | 0 | 0 | 3 years | enhancement | Archival - add ExecutionStatus to archival visi... |
| [#3688](https://github.com/temporalio/temporal/issues/3688) | 0 | 0 | 3 years | enhancement | Read only workflow worker |
| [#3597](https://github.com/temporalio/temporal/issues/3597) | 0 | 0 | 3y 1m | enhancement, P1 | Add a Cancellation Request status to DescribeWo... |
| [#3543](https://github.com/temporalio/temporal/issues/3543) | 0 | 0 | 3y 2m | enhancement | Better memory management for zap logger |
| [#3536](https://github.com/temporalio/temporal/issues/3536) | 0 | 0 | 3y 2m | enhancement | Allow Admin DeleteWorkflowExecution Delete by n... |
| [#3435](https://github.com/temporalio/temporal/issues/3435) | 0 | 0 | 3y 3m | enhancement | Add API for worker to signal that it is shuttin... |
| [#3381](https://github.com/temporalio/temporal/issues/3381) | 0 | 0 | 3y 3m | enhancement | Causal consistency guarantee in replication |
| [#3367](https://github.com/temporalio/temporal/issues/3367) | 0 | 0 | 3y 3m | enhancement | Single active timer task per workflow |
| [#3296](https://github.com/temporalio/temporal/issues/3296) | 0 | 0 | 3y 4m | enhancement | Ensure ordering of child-workflow-sent signal a... |
| [#3288](https://github.com/temporalio/temporal/issues/3288) | 0 | 0 | 3y 4m | enhancement | Add API for setting task queue rate limiting |
| [#3261](https://github.com/temporalio/temporal/issues/3261) | 0 | 0 | 3y 4m | enhancement | Add command: DescribeExternalWorkflowExecution |
| [#3258](https://github.com/temporalio/temporal/issues/3258) | 0 | 0 | 3y 4m | enhancement | Allow option for reset to terminate any current... |
| [#3183](https://github.com/temporalio/temporal/issues/3183) | 0 | 0 | 3y 5m | enhancement | Replace metrics and retryable client with clien... |
| [#3168](https://github.com/temporalio/temporal/issues/3168) | 0 | 0 | 3y 5m | enhancement | Matching service optimization - Do not persist ... |
| [#3143](https://github.com/temporalio/temporal/issues/3143) | 0 | 0 | 3y 5m | enhancement | Improved per task queue metrics |
| [#3062](https://github.com/temporalio/temporal/issues/3062) | 0 | 0 | 3y 5m | enhancement | New error type for workflow already completed? |
| [#3060](https://github.com/temporalio/temporal/issues/3060) | 0 | 0 | 3y 5m | enhancement | Validate num of matching task queue partition c... |
| [#3025](https://github.com/temporalio/temporal/issues/3025) | 0 | 0 | 3y 6m | enhancement | Ability to define execution order of async acti... |
| [#3004](https://github.com/temporalio/temporal/issues/3004) | 0 | 0 | 3y 6m | enhancement | Support bypass of autoforwarding with special h... |
| [#2968](https://github.com/temporalio/temporal/issues/2968) | 0 | 0 | 3y 6m | enhancement | Support changing system workflow cron schedule |
| [#2918](https://github.com/temporalio/temporal/issues/2918) | 0 | 0 | 3y 7m | enhancement | Persistent Coroutine Workflows |
| [#2915](https://github.com/temporalio/temporal/issues/2915) | 0 | 0 | 3y 7m | enhancement | Dynamic config change listener  |
| [#2849](https://github.com/temporalio/temporal/issues/2849) | 0 | 0 | 3y 7m | enhancement | Do not load all persistence libraries unless ne... |
| [#2800](https://github.com/temporalio/temporal/issues/2800) | 0 | 0 | 3y 8m | enhancement | Do not write repeated workflow task heartbeat t... |
| [#2730](https://github.com/temporalio/temporal/issues/2730) | 0 | 0 | 3y 8m | enhancement | Use broadcast shutdown channel |
| [#2435](https://github.com/temporalio/temporal/issues/2435) | 0 | 0 | 3y 11m | enhancement | Need detailed server-internal resource exhauste... |
| [#2375](https://github.com/temporalio/temporal/issues/2375) | 0 | 0 | 3y 11m | enhancement | Reduce unnecessary & duplicated data encoding |
| [#2282](https://github.com/temporalio/temporal/issues/2282) | 0 | 0 | 4 years | enhancement | Flush transient ActivityTaskStarted events befo... |
| [#2059](https://github.com/temporalio/temporal/issues/2059) | 0 | 0 | 4y 2m | enhancement | Embed schema content within schema tool |
| [#1966](https://github.com/temporalio/temporal/issues/1966) | 0 | 0 | 4y 3m | enhancement | Split resource limit exceed error into user fac... |
| [#1903](https://github.com/temporalio/temporal/issues/1903) | 0 | 0 | 4y 3m | enhancement, visibility | Add WorkflowSizeInBytes as Visibility Attribute |
| [#1840](https://github.com/temporalio/temporal/issues/1840) | 0 | 0 | 4y 4m | enhancement | Temporal Elasticsearch support for custom index... |
| [#1757](https://github.com/temporalio/temporal/issues/1757) | 0 | 0 | 4y 5m | enhancement | Document dynamic config behavior |
| [#1552](https://github.com/temporalio/temporal/issues/1552) | 0 | 0 | 4y 7m | enhancement, operations | Better resource limit exceeded error message |
| [#1080](https://github.com/temporalio/temporal/issues/1080) | 0 | 0 | 5 years | enhancement, performance | Use workflow raw history events API  |
| [#1041](https://github.com/temporalio/temporal/issues/1041) | 0 | 0 | 5y 1m | enhancement, versioning | Ensure major.minor.patch to major.minor+1.patch... |
| [#1021](https://github.com/temporalio/temporal/issues/1021) | 0 | 0 | 5y 1m | enhancement, difficulty: easy | Maintenance workflow cleanup stale queue tasks |
| [#973](https://github.com/temporalio/temporal/issues/973) | 0 | 0 | 5y 1m | enhancement, performance | Support of batch activity |
| [#972](https://github.com/temporalio/temporal/issues/972) | 0 | 0 | 5y 1m | enhancement, performance | Have a Deleted state for entities state machine... |
| [#940](https://github.com/temporalio/temporal/issues/940) | 0 | 0 | 5y 2m | enhancement, refactoring | Unify all persistence TTL handling logic |
| [#939](https://github.com/temporalio/temporal/issues/939) | 0 | 0 | 5y 2m | enhancement, refactoring | Persistence Layer Unified Serialization / Deser... |
| [#926](https://github.com/temporalio/temporal/issues/926) | 0 | 0 | 5y 2m | enhancement, API | Add configurable initialDelay for Cron job setu... |
| [#891](https://github.com/temporalio/temporal/issues/891) | 0 | 0 | 5y 2m | enhancement, difficulty: medium | History service should pause accepting new sign... |
| [#881](https://github.com/temporalio/temporal/issues/881) | 0 | 0 | 5y 2m | enhancement, performance | Matching Service Task Queue Metadata Management |
| [#852](https://github.com/temporalio/temporal/issues/852) | 0 | 0 | 5y 2m | enhancement, config | Support in mem TLS configuration / data for Pos... |
| [#848](https://github.com/temporalio/temporal/issues/848) | 0 | 0 | 5y 2m | enhancement | Support blue/green cluster deployment with inco... |
| [#810](https://github.com/temporalio/temporal/issues/810) | 0 | 0 | 5y 2m | enhancement, refactoring | Revisit persistence interface (SQL / NoSQL) bef... |
| [#741](https://github.com/temporalio/temporal/issues/741) | 0 | 0 | 5y 3m | enhancement, architecture | Support reset starting from an activity of a sp... |
| [#699](https://github.com/temporalio/temporal/issues/699) | 0 | 0 | 5y 4m | enhancement, refactoring | History Engine refactoring |
| [#689](https://github.com/temporalio/temporal/issues/689) | 0 | 0 | 5y 4m | enhancement, API | Add dynamic config knob to limit maximum durati... |
| [#677](https://github.com/temporalio/temporal/issues/677) | 0 | 0 | 5y 4m | enhancement, difficulty: hard | Support for loading history events using size o... |
| [#675](https://github.com/temporalio/temporal/issues/675) | 0 | 0 | 5y 4m | enhancement, operations | Rate limiting pagination based on history sizes |
| [#595](https://github.com/temporalio/temporal/issues/595) | 0 | 0 | 5y 5m | enhancement, packaging | Allow configuration of archival config through ... |
| [#574](https://github.com/temporalio/temporal/issues/574) | 0 | 0 | 5y 5m | enhancement, difficulty: medium | Background scan to remove unnecessary timers |
| [#550](https://github.com/temporalio/temporal/issues/550) | 0 | 0 | 5y 5m | enhancement, packaging | creating a dev environment using podman instead... |
| [#373](https://github.com/temporalio/temporal/issues/373) | 0 | 0 | 5y 7m | enhancement, API | Change ParentClosePolicy to struct and add appl... |
| [#309](https://github.com/temporalio/temporal/issues/309) | 0 | 0 | 5y 8m | enhancement, API | Make long poll interval configurable through th... |

### Other (44)

| # | 👍 | 💬 | Age | Labels | Title |
|---|-----|-----|-----|--------|-------|
| [#351](https://github.com/temporalio/temporal/issues/351) | 5 | 4 | 5y 8m | CRON, visibility | List Workflow Executions ignoring previous runs |
| [#8110](https://github.com/temporalio/temporal/issues/8110) | 1 | 10 | 5 months | - | v1.28.0 vulnerabilities |
| [#5156](https://github.com/temporalio/temporal/issues/5156) | 4 | 4 | 2y 1m | - | Allow configuration of expected audience value ... |
| [#2426](https://github.com/temporalio/temporal/issues/2426) | 1 | 10 | 3y 11m | - | [Feature Request] Add reason field to RequestCa... |
| [#5022](https://github.com/temporalio/temporal/issues/5022) | 2 | 5 | 2y 2m | - | Can't display archived workflows which have pas... |
| [#3624](https://github.com/temporalio/temporal/issues/3624) | 2 | 5 | 3y 1m | - | Reset should be allowed with pending childWF in... |
| [#8461](https://github.com/temporalio/temporal/issues/8461) | 2 | 3 | 2 months | - | Adding documentation for self-hosting temporal ... |
| [#2685](https://github.com/temporalio/temporal/issues/2685) | 0 | 4 | 3y 9m | - | [Interpreter Proposal] New way to write workflo... |
| [#778](https://github.com/temporalio/temporal/issues/778) | 0 | 4 | 5y 5m | good first issue, API | Add ScheduleToStart timeout to WorkflowTaskSche... |
| [#8153](https://github.com/temporalio/temporal/issues/8153) | 1 | 1 | 4 months | - | Address security vulnerability CVE-2025-22871 f... |
| [#5171](https://github.com/temporalio/temporal/issues/5171) | 0 | 3 | 2y 9m | - | Timeout on complete when invalid task token passed |
| [#5026](https://github.com/temporalio/temporal/issues/5026) | 0 | 2 | 2y 2m | - | When I tested with more than 200 workers connec... |
| [#2695](https://github.com/temporalio/temporal/issues/2695) | 0 | 2 | 3y 9m | duplicate, config | Workflow ID size check mismatch |
| [#8698](https://github.com/temporalio/temporal/issues/8698) | 0 | 1 | 1 months | - | [Security] Review & Fix Multiple CVEs affecting... |
| [#7800](https://github.com/temporalio/temporal/issues/7800) | 0 | 1 | 7 months | - | SSO and system worker |
| [#7503](https://github.com/temporalio/temporal/issues/7503) | 0 | 1 | 9 months | - | Does temporal support sharing database? |
| [#7405](https://github.com/temporalio/temporal/issues/7405) | 0 | 1 | 10 months | - | strange workflow task timeout |
| [#6819](https://github.com/temporalio/temporal/issues/6819) | 0 | 1 | 1y 1m | - | Why is the default value of the SDK client grpc... |
| [#6000](https://github.com/temporalio/temporal/issues/6000) | 0 | 1 | 1y 7m | - | How to ensure that activities belonging to the ... |
| [#5372](https://github.com/temporalio/temporal/issues/5372) | 0 | 1 | 1y 11m | - | trigger one workflow from another workflow  |
| [#5324](https://github.com/temporalio/temporal/issues/5324) | 0 | 1 | 1y 11m | - | access from one temporal namespace to another |
| [#3983](https://github.com/temporalio/temporal/issues/3983) | 0 | 1 | 2y 10m | refactoring | Unused `GetHistoryTask` persistence API |
| [#3417](https://github.com/temporalio/temporal/issues/3417) | 0 | 1 | 3y 3m | API, P1 | deleteWorkflowExecution failure response leaks ... |
| [#8902](https://github.com/temporalio/temporal/issues/8902) | 0 | 0 | 7 days | - | History service memory usage upward trend |
| [#8889](https://github.com/temporalio/temporal/issues/8889) | 0 | 0 | 11 days | - | Enhancing Temporal PR Review and Release Confid... |
| [#8866](https://github.com/temporalio/temporal/issues/8866) | 0 | 0 | 13 days | - | Address security vulnerability CVE-2025-61729 f... |
| [#8865](https://github.com/temporalio/temporal/issues/8865) | 0 | 0 | 13 days | - | Address security vulnerability CVE-2025-61727 f... |
| [#8790](https://github.com/temporalio/temporal/issues/8790) | 0 | 0 | 21 days | - | history_node table keeps growing |
| [#8006](https://github.com/temporalio/temporal/issues/8006) | 0 | 0 | 6 months | - | Is it possible to dynamially customize what lab... |
| [#7867](https://github.com/temporalio/temporal/issues/7867) | 0 | 0 | 7 months | - | Golang Upgrade |
| [#7845](https://github.com/temporalio/temporal/issues/7845) | 0 | 0 | 7 months | - | for enabling SSL in temporal engine will below ... |
| [#7576](https://github.com/temporalio/temporal/issues/7576) | 0 | 0 | 9 months | - | security vulnarablity issues in 1.27.2 (latest ... |
| [#7048](https://github.com/temporalio/temporal/issues/7048) | 0 | 0 | 11 months | - | Handle Permission Errors in getConfigFiles Func... |
| [#6680](https://github.com/temporalio/temporal/issues/6680) | 0 | 0 | 1y 2m | - | Coordinate CI step timeout-minutes with `go tes... |
| [#6403](https://github.com/temporalio/temporal/issues/6403) | 0 | 0 | 1y 4m | - | Introducing quarkus-temporal |
| [#5553](https://github.com/temporalio/temporal/issues/5553) | 0 | 0 | 1y 9m | - | Update license check script to verify current y... |
| [#4435](https://github.com/temporalio/temporal/issues/4435) | 0 | 0 | 2y 7m | refactoring | Deprecate old archival logic |
| [#2995](https://github.com/temporalio/temporal/issues/2995) | 0 | 0 | 3y 6m | performance, backlog | Task Predicate Equivalence Check |
| [#2991](https://github.com/temporalio/temporal/issues/2991) | 0 | 0 | 3y 6m | refactoring, metrics | Dynamically generate task type tag value in tim... |
| [#791](https://github.com/temporalio/temporal/issues/791) | 0 | 0 | 5y 3m | needs-investigation | Revisit matching engine ListTaskQueue functiona... |
| [#589](https://github.com/temporalio/temporal/issues/589) | 0 | 0 | 5y 5m | testing | listTaskQueuePartitions in MatchingService matc... |
| [#294](https://github.com/temporalio/temporal/issues/294) | 0 | 0 | 5y 8m | API | Return LongPollExpirationInterval on poll call ... |
| [#293](https://github.com/temporalio/temporal/issues/293) | 0 | 0 | 5y 8m | refactoring, API | Fix names of dynamic config properties |
| [#84](https://github.com/temporalio/temporal/issues/84) | 0 | 0 | 5y 11m | refactoring, testing | Group and categorize tests |

