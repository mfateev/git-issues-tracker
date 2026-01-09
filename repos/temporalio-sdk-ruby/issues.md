# temporalio/sdk-ruby - Complete Issue Dump

**Generated:** 2026-01-09
**Total Issues:** 180
**Total Upvotes:** 11
**Total Comments:** 134

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 180 |
| Issues with Upvotes | 9 (5%) |
| Total Upvotes | 11 |
| Total Comments | 134 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 81 |
| bug | 22 |
| Mend: dependency security vulnerability | 7 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#330](#330) | 1 | 9 | [Bug] Potential deadlock detected after upgrade to v0.6.0 |
| [#226](#226) | 0 | 6 | [Feature Request] Document and validate that keyword args are disallowed in certain contexts |
| [#338](#338) | 0 | 5 | [Bug] Retry policy non_retryable_error_types does not respect error module/namespace |
| [#319](#319) | 2 | 1 | [Feature Request] Look into client-side trimming of failures to avoid server-side wrap-and-truncate |
| [#162](#162) | 0 | 5 | Investigate issue with Ruby 3.1/3.2 and worker fibers |
| [#117](#117) | 0 | 5 | Temporal CLI based ephemeral server |
| [#91](#91) | 2 | 1 | [Feature Request] Document a comparison with Coinbase Temporal Ruby library |
| [#51](#51) | 0 | 5 | github.com/temporalio/temporalite-v0.1.1: 1 vulnerabilities (highest severity is: 7.5) |
| [#315](#315) | 0 | 4 | [Bug] ScopedLogger fails attempting to compare symbol to integer for libraries like semantic_logger |
| [#288](#288) | 0 | 4 | [Feature Request] Support single-page fetching for list workflows |
| [#246](#246) | 1 | 2 | [Feature Request] Rails Integration |
| [#229](#229) | 0 | 4 | Please do a point release with the relaxing of the protobuf version |
| [#364](#364) | 0 | 3 | [Feature Request] Confirm/assert Ruby 4 compatibility, maybe drop 3.2 support |
| [#310](#310) | 1 | 1 | [Feature Request] Research and maybe implement disallowing all Ruby stdlib sync constructs in workflows |
| [#292](#292) | 0 | 3 | [Bug] Potential issue using runtime Sorbet and handlers |
| [#290](#290) | 0 | 3 | [Bug] Child invoked via #execute_child_workflow don't show up in parent relationship or UI |
| [#289](#289) | 0 | 3 | [Bug] temporalio_bridge error when installing gem |
| [#236](#236) | 0 | 3 | [Feature Request] Sagas |
| [#102](#102) | 0 | 3 | go.temporal.io/sdk-v1.17.0: 3 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#23](#23) | 0 | 3 | temporal-sdk-core-0.1.0: 1 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#308](#308) | 0 | 2 | [Feature Request] Error notification |
| [#306](#306) | 1 | 0 | [Feature Request] Update build-gems GH workflow smoke test to use macOS Intel |
| [#293](#293) | 0 | 2 | [Bug] Do not drop namespace from activity/workflow name |
| [#279](#279) | 0 | 2 | [Bug] Improperly accessing current activity context in outbound heartbeat |
| [#276](#276) | 0 | 2 | [Bug] Test env does not return result of workflow with child workflow |
| [#272](#272) | 0 | 2 | [Feature Request] Time#iso8601 improperly considered illegal, look into excluding |
| [#268](#268) | 0 | 2 | [Feature Request] Investigate `test_metric_basics` flake |
| [#255](#255) | 1 | 0 | [Bug] Workflow info start time should be the workflow start time not the first task start time |
| [#239](#239) | 1 | 0 | [Feature Request] Allow use of io_wait-based fiber calls |
| [#188](#188) | 1 | 0 | [Feature Request] Signal-with-start and update-with-start |
| [#176](#176) | 0 | 2 | [Feature Request] Buffered metrics for user use |
| [#79](#79) | 0 | 2 | Find a way to mark unstable/private API |
| [#373](#373) | 0 | 1 | ## Bug Report: Fiber state corruption after `Workflow.timeout` expires on x86_64 |
| [#360](#360) | 0 | 1 | Problem: Testing Temporal Workflows with Signals in Ruby SDK Time-Skipping Environment |
| [#359](#359) | 0 | 1 | [Feature Request] Disable durable scheduler for all OTel in-workflow calls, not just some |
| [#334](#334) | 0 | 1 | [Feature Request] Ensure fibers and workflow instances are properly GC'd on workflow eviction |
| [#320](#320) | 0 | 1 | [Feature Request] Switch scheduler ready fiber list from array to queue |
| [#273](#273) | 0 | 1 | [Feature Request] Investigate, document, and validate fork behavior |
| [#271](#271) | 0 | 1 | [Feature Request] Support "hints" for payload conversion |
| [#264](#264) | 0 | 1 | [Feature Request] Investigate `test_queue` flake |
| [#261](#261) | 0 | 1 | [Feature Request] Use exception full message for workflow/activity task logs |
| [#259](#259) | 0 | 1 | [Bug] auto_time_skipping_disabled not resuming after block exit |
| [#254](#254) | 0 | 1 | [ruby] SDK support for activity reset |
| [#250](#250) | 0 | 1 | [Feature Request] Warn when the server-provided task start time is fairly different than time SDK begins processing the task |
| [#238](#238) | 0 | 1 | [Feature Request] Serialization context for codecs and converters |
| [#225](#225) | 0 | 1 | [Feature Request] Custom slot supplier |
| [#203](#203) | 0 | 1 | [Feature Request] Contributing Guide |
| [#190](#190) | 0 | 1 | [Feature Request] Ensure signal buffer properly drained when dynamic signal added |
| [#186](#186) | 0 | 1 | [Feature Request] Expose replay-safe metric meter from workflows |
| [#184](#184) | 0 | 1 | [Feature Request] Ractor-based sandboxing |
| [#172](#172) | 0 | 1 | [Bug] Windows CI segfaulting during tests |
| [#167](#167) | 0 | 1 | [Feature Request] Activity test environment |
| [#140](#140) | 0 | 1 | Worker versioning support |
| [#132](#132) | 0 | 1 | [Bug] Release assets bear incorrect version number |
| [#130](#130) | 0 | 1 | Issue with using Temporal ruby-sdk |
| [#128](#128) | 0 | 1 | Add API to count workflows |
| [#126](#126) | 0 | 1 | temporal-sdk-core-api-0.1.0: 3 vulnerabilities (highest severity is: 9.1) |
| [#120](#120) | 0 | 1 | Check for empty strings when preparing Activities and Workflows in a worker |
| [#118](#118) | 0 | 1 | Investigate issue with Ruby 3.2+ |
| [#116](#116) | 0 | 1 | tokio-1.23.1.crate: 1 vulnerabilities (highest severity is: 9.8) - autoclosed |
| [#112](#112) | 0 | 1 | Implement `operator_service` on the `Connection` |
| [#109](#109) | 0 | 1 | Expose individual RPC Services via Connection |
| [#107](#107) | 0 | 1 | Publish YARD docs to `vercel` |
| [#104](#104) | 0 | 1 | Non-blocking `Worker#shutdown` |
| [#78](#78) | 0 | 1 | Simplify Client/Worker initialization |
| [#76](#76) | 0 | 1 | Lazy thread-pool |
| [#73](#73) | 0 | 1 | Add TLS support to the Client |
| [#72](#72) | 0 | 1 | Add `run_id` to `Temporal::Error::WorkflowExecutionAlreadyStarted` based on the details of the Rust error |
| [#71](#71) | 0 | 1 | Detect UnsupportedQuery correctly (based on the gRPC status code `INVALID_ARGUMENT `) |
| [#70](#70) | 0 | 1 | Add `#execute_workflow` to Client |
| [#52](#52) | 0 | 1 | Implement proto (json & binary) converters |
| [#48](#48) | 0 | 1 | grpc-1.49.1-x86_64-linux.gem: 1 vulnerabilities (highest severity is: 5.7) - autoclosed |
| [#41](#41) | 0 | 1 | go.temporal.io/server-v1.17.5: 5 vulnerabilities (highest severity is: 7.5) - autoclosed |
| [#40](#40) | 0 | 1 | Modify `search_attributes` to align with server changes |
| [#34](#34) | 0 | 1 | Try joining all the tokio's join handlers to ensure no `panic`s are ignores |
| [#26](#26) | 0 | 1 | Add a layer between the Bridge and Ruby bindings to handle and raise VM errors better |
| [#6](#6) | 0 | 1 | Implement a shared thread pool |
| [#367](#367) | 0 | 0 | [Feature Request] Support non-workflow activities |
| [#361](#361) | 0 | 0 | [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow |
| [#355](#355) | 0 | 0 | [Bug] Some common uses of ActiveModel fail in workflows due to sync construct use |
| [#354](#354) | 0 | 0 | [Feature Request] Enable Worker Heartbeating |
| [#353](#353) | 0 | 0 | [ruby] Plugin + SimplePlugin |
| [#333](#333) | 0 | 0 | [Feature Request] Require payload codec from data converter file |
| [#329](#329) | 0 | 0 | [Feature Request] Ensure gRPC binary metadata headers are supported |
| [#328](#328) | 0 | 0 | [Feature Request] Reclassify Benign Application errors in OpenTelemetry |
| [#318](#318) | 0 | 0 | [Feature Request] Plugin support |
| [#311](#311) | 0 | 0 | [Feature Request] Add first execution run ID to workflow info |
| [#299](#299) | 0 | 0 | [Bug] Workflow handler *name* can only be applied to one handler |
| [#298](#298) | 0 | 0 | [Feature Request] Add Summary to LocalActivityOptions |
| [#297](#297) | 0 | 0 | [Feature Request] Support accessing raw last heartbeat details |
| [#294](#294) | 0 | 0 | [Bug] Application error conversion is not properly defaulting type to unqualified class name |
| [#287](#287) | 0 | 0 | [Feature Request] Environment Configuration |
| [#281](#281) | 0 | 0 | [Feature Request] Provide last result and last failure to workflows |
| [#278](#278) | 0 | 0 | [Bug] Improper enum value comparison on workflow update |
| [#270](#270) | 0 | 0 | [Ruby] Worker Versioning high level client |
| [#267](#267) | 0 | 0 | [Feature Request] Clarify in README issue with lazy loading during rails when testing workflows |
| [#253](#253) | 0 | 0 | [Bug] Unregistered Local Activity should fail Workflow Task |
| [#252](#252) | 0 | 0 | [Bug] OpenTelemetry using wrong timestamps causing it to fail with OTLP |
| [#251](#251) | 0 | 0 | [Feature Request] Allow implicit durable timers to be disabled |
| [#248](#248) | 0 | 0 | [Feature Request] Show retry policy on activity info |
| [#242](#242) | 0 | 0 | [Feature Request] Apply application failure logging and metrics behaviour according to `ApplicationErrorCategory` |
| [#241](#241) | 0 | 0 | Heartbeating activities should be interrupted when the activities are paused. |
| [#237](#237) | 0 | 0 | [Feature Request] Support New Worker Versioning API |
| [#233](#233) | 0 | 0 | [Feature Request] Simple nightly smoke benchmark |
| [#232](#232) | 0 | 0 | Initial Nexus implementation - Ruby |
| [#228](#228) | 0 | 0 | [Feature Request] Custom metric bucket sizes |
| [#227](#227) | 0 | 0 | [Feature Request] Expose root workflow execution |
| [#224](#224) | 0 | 0 | [Feature Request] Built-in query responses should use "RawValue" |
| [#222](#222) | 0 | 0 | [Feature Request] Test randomness seed update over reset |
| [#218](#218) | 0 | 0 | [Feature Request] Support buildable source gem |
| [#217](#217) | 0 | 0 | [Feature Request] Support user metadata |
| [#215](#215) | 0 | 0 | [Feature Request] Build musl gem |
| [#211](#211) | 0 | 0 | [Feature Request] Host Ruby docs at ruby.temporal.io |
| [#210](#210) | 0 | 0 | [Feature Request] Support Priority Annotations |
| [#209](#209) | 0 | 0 | [Feature Request] Add explicit memoization support to the`patched()` API |
| [#208](#208) | 0 | 0 | [Feature Request] Add `required_ruby_version >= 3.2.0` back to gemspec |
| [#206](#206) | 0 | 0 | [Feature Request] Accept search attributes in dev server startup |
| [#205](#205) | 0 | 0 | [Feature Request] Allow customization of dev server UI port |
| [#196](#196) | 0 | 0 | [Feature Request] OTel metrics over HTTP |
| [#195](#195) | 0 | 0 | [Feature Request] Special behavior for Temporal built-in prefixes |
| [#192](#192) | 0 | 0 | [Feature Request] Remove Go from test pipeline |
| [#191](#191) | 0 | 0 | [Feature Request] Deadlock detection - improve interruption and stack trace |
| [#189](#189) | 0 | 0 | [Feature Request] OpenTelemetry tracing |
| [#187](#187) | 0 | 0 | [Feature Request] Workflow replayer |
| [#185](#185) | 0 | 0 | [Feature Request] Warn on unawaited workflow futures with failures  |
| [#182](#182) | 0 | 0 | [Feature Request] Drop Ruby 3.1 support, add Ruby 3.4 support |
| [#181](#181) | 0 | 0 | [Feature Request] Provide client from activity context |
| [#180](#180) | 0 | 0 | [Feature Request] Access to workflow/activity instance from context |
| [#179](#179) | 0 | 0 | [Feature Request] Provide "workflow local" |
| [#169](#169) | 0 | 0 | [Feature Request] Metric meter implementation |
| [#168](#168) | 0 | 0 | [Feature Request] Client RPC call cancellation |
| [#166](#166) | 0 | 0 | [Feature Request] Dynamic activities |
| [#165](#165) | 0 | 0 | [Feature Request] Worker client replacement |
| [#164](#164) | 0 | 0 | [Feature Request] API key and RPC metadata setter |
| [#163](#163) | 0 | 0 | [Feature Request] Schedule client |
| [#154](#154) | 0 | 0 | [Feature Request] Scaffolding and bare-bones client |
| [#141](#141) | 0 | 0 | Workflow update support |
| [#134](#134) | 0 | 0 | [Bug] RBS files are not included in released Gem |
| [#113](#113) | 0 | 0 | Implement basic Workflow Worker (timer only) |
| [#108](#108) | 0 | 0 | Implement TestServer environment |
| [#98](#98) | 0 | 0 | Shutdown worker based on signals |
| [#96](#96) | 0 | 0 | Make `Connection` interrupt friendly |
| [#95](#95) | 0 | 0 | Pass WorkerResult into Ruby land using `impl From<WorkerResult>` |
| [#94](#94) | 0 | 0 | Rename `Temporal` to `Temporalio` to align with other SDKs |
| [#92](#92) | 0 | 0 | Graceful timeout for worker shutdown |
| [#88](#88) | 0 | 0 | Update README with Worker details |
| [#87](#87) | 0 | 0 | Implement Worker shutdown |
| [#86](#86) | 0 | 0 | Improve `Worker#run` to accept block and drop `Worker#start` |
| [#85](#85) | 0 | 0 | Activity Interceptors |
| [#84](#84) | 0 | 0 | Activity Cancellations |
| [#83](#83) | 0 | 0 | Activity Heartbeat |
| [#77](#77) | 0 | 0 | Add codec support for `to_payload` and `from_payload` methods |
| [#75](#75) | 0 | 0 | Accept `Temporal::DataConverter` in Client and Worker |
| [#58](#58) | 0 | 0 | Allow custom converters and codecs on the client |
| [#56](#56) | 0 | 0 | Add YARD docs |
| [#53](#53) | 0 | 0 | Implement a FailureConverter |
| [#47](#47) | 0 | 0 | Isolate `workflow_service` on the `Connection` (leaving a room for `operator_service`, `health_service` and `test_service`) |
| [#36](#36) | 0 | 0 | Add exception classes and figure out hierarchy |
| [#35](#35) | 0 | 0 | Submit an E2E proposal |
| [#32](#32) | 0 | 0 | Implement a Ruby Worker |
| [#31](#31) | 0 | 0 | Wrap Core globals within a `CoreRuntime` singleton in Ruby |
| [#29](#29) | 0 | 0 | Generate protobufs for the Core |
| [#24](#24) | 0 | 0 | Switch to using thiserror for Error definitions |
| [#20](#20) | 0 | 0 | Add RBS type checker |
| [#19](#19) | 0 | 0 | Integrate with Core API (initial setup, build scripts) |
| [#18](#18) | 0 | 0 | Pick a bridging gem for Core API |
| [#17](#17) | 0 | 0 | Research Core API |
| [#16](#16) | 0 | 0 | Setup basic CI pipeline (rspec, rubocop) |
| [#15](#15) | 0 | 0 | Implement an end-to-end integration test (Go workflow + Ruby client and activities) |
| [#14](#14) | 0 | 0 | Integrate Client and Worker with Payload Codecs |
| [#13](#13) | 0 | 0 | Integrate Client and Worker with Payload Converters |
| [#12](#12) | 0 | 0 | Implement Payload Codec interface |
| [#11](#11) | 0 | 0 | Implement basic Payload Converters (null, bytes and JSON) |
| [#10](#10) | 0 | 0 | Implement Payload Converter interface |
| [#9](#9) | 0 | 0 | Implement Activity Class |
| [#8](#8) | 0 | 0 | Implement Activity Context |
| [#7](#7) | 0 | 0 | Implement a basic activity Worker |
| [#5](#5) | 0 | 0 | Implement Temporal::WorkflowHandle |
| [#4](#4) | 0 | 0 | Implement Temporal::Client |
| [#3](#3) | 0 | 0 | Implement Temporal::Connection |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

<a id="330"></a>

### #330: [Bug] Potential deadlock detected after upgrade to v0.6.0

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/330 |
| **State** | CLOSED |
| **Author** | laurynas (Laurynas Butkus) |
| **Created** | 2025-08-29 08:30:35.000 UTC (4 months ago) |
| **Updated** | 2025-09-10 19:10:16.000 UTC |
| **Closed** | 2025-09-10 19:10:16.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 9 |
| **Priority Score** | 11 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

I have upgraded sdk-ruby from `v0.5.0` to `v0.6.0` and ran benchmark workflow locally in dev env. 

### Describe the bug

Benchmark workflow consistently works fine with `v0.5.0`, but with `v0.6.0` it consistently gets stuck with error `[TMPRL1101] Potential deadlock detected: workflow didn't yield within 2.0 second(s).`.

<img width="1241" height="812" alt="Image" src="https://github.com/user-attachments/assets/8b19570c-f45c-4694-bce6-1489cd4b4bb2" />

### Minimal Reproduction

- Start worker
- Start workflow
- Wait
- Get error

### Environment/Versions

- OS and processor: M3 MacBook
- Temporal Version: 1.18
- Temporal server running on Docker

### Additional context

Workflow:

```ruby
class Benchmarks::AsyncActivityTemporalioWorkflow < TemporalioWorkflow
  def execute(iterations = 1000)
    futures = iterations.times.map do |i|
      Temporalio::Workflow::Future.new do
        TemporalioExt::Activities.execute(HelloWorldActivityV2, "Test #{i}")
      end
    end

    Temporalio::Workflow::Future.all_of(*futures).wait

    true
  end
end
```

Activity:

```ruby
class HelloWorldActivityV2 < TemporalioActivity
  def execute(name)
    "Hello #{name}"
  end
end
```

#### Comments (9)

<details>
<summary><strong>cretz</strong> commented on 2025-08-29 13:12:25.000 UTC</summary>

Thanks for the replication! We will try to replicate and investigate.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-29 14:04:09.000 UTC</summary>

I am unable to replicate this on any version including 0.6.0. Here is a full standalone script:

```ruby
# frozen_string_literal: true

require 'temporalio/activity'
require 'temporalio/client'
require 'temporalio/testing'
require 'temporalio/worker'
require 'temporalio/workflow'

class ManyActivitiesActivity < Temporalio::Activity::Definition
  def execute(name)
    "Hello #{name}"
  end
end

class ManyActivitiesWorkflow < Temporalio::Workflow::Definition
  def execute(iterations = 1000)
    futures = iterations.times.map do |i|
      Temporalio::Workflow::Future.new do
        Temporalio::Workflow.execute_activity(ManyActivitiesActivity, "Test #{i}", start_to_close_timeout: 30)
      end
    end

    Temporalio::Workflow::Future.all_of(*futures).wait

    'done'
  end
end

# Run local, full Temporal server (same as `temporal server start-dev` from CLI)
Temporalio::Testing::WorkflowEnvironment.start_local do |env|
  # Run worker
  Temporalio::Worker.new(
    client: env.client,
    task_queue: 'my-task-queue',
    activities: [ManyActivitiesActivity],
    workflows: [ManyActivitiesWorkflow]
  ).run do
    # Run workflow
    result = env.client.execute_workflow(
      ManyActivitiesWorkflow,
      id: 'my-workflow',
      task_queue: 'my-task-queue'
    )
    puts "Workflow result: #{result}"
  end
end
```

I wonder if your worker is otherwise overloaded or there is something else happening inside of `TemporalExt` not shown here. Is it possible to provide a fully-runnable standalone replication? Can alter the script I provided to demonstrate replication if needed.

Also, as a general note, you might consider batching activity work where you can. Calling 20 activities that each do 50 things is often more reasonable than 1000 activities doing 1 thing, though the latter may make sense if needing independent retryability (but note there are maximum activity limits per workflow).

</details>

<details>
<summary><strong>laurynas</strong> commented on 2025-08-29 14:15:27.000 UTC</summary>

Hey @cretz, thanks for the tips. It was just my experiment checking activity performance. It is strange that there is a difference between v0.5.0 and v0.6.0, maybe related with this change (I didn't check): 
https://github.com/temporalio/sdk-ruby/pull/309

I'll try to experiment more, maybe with plain ruby, without any TemporalioExt helpers for clarity (though they just set some defaults to reduce boilerplate).

I'll post the results once I have something.

Reactions: ❤️ 1

</details>

<details>
<summary><strong>laurynas</strong> commented on 2025-08-29 16:52:54.000 UTC</summary>

Hi again! I have created plain ruby example to run on docker:
https://github.com/laurynas/temporalio-ruby-sdk-experiments

Wrote short instructions how to run it in the README file.

With this example I can reproduce the issue quite consistently on my MacBook M3 Pro.

v0.5.0 works fine with the same workflow.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-29 19:15:37.000 UTC</summary>

Thanks! I think I was able to replicate just by changing my script to use child workflows as you did in your repo there. We are investigating...

Reactions: 👍 1

</details>

<details>
<summary><strong>laurynas</strong> commented on 2025-08-29 20:51:29.000 UTC</summary>

I ran my docker experiment on much slower Dell Latitude 7290 with Ubuntu 24.04 and I couldn't reproduce the issue. The workflow runs slowly, but no deadlocks.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-02 15:48:07.000 UTC</summary>

After investigation, this is a case where, with the illegal call tracer on, it actually does take over 2s to process things. There is also a bug preventing the disabling of the call tracer we will fix. The only current workaround for this is to set `debug_mode: true` when creating the worker that disables deadlock detector (and therefore allows CPU-bound work to take longer than 2s).

We are investigating more permanent fixes here including reducing the scope of the illegal call tracer. I will update when we have more info.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-02 20:31:55.000 UTC</summary>

Added a PR that will hopefully reduce the call tracing scope down enough to not cause issues here: #332. If you'd like to test it, can rebuild the SDK (see bottom of README) on that branch. EDIT: Though make sure it is in "ready for review". We may have to turn it to a draft while we debug some garbage collector issues.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-10 19:10:16.000 UTC</summary>

This should be now solved with #332. Basically, we just run less validation things so as not to slow down enough to hit this deadlock detection.

Reactions: 👍 1

</details>


---

<a id="226"></a>

### #226: [Feature Request] Document and validate that keyword args are disallowed in certain contexts

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/226 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-24 20:26:18.000 UTC (10 months ago) |
| **Updated** | 2025-05-19 13:21:56.000 UTC |
| **Closed** | 2025-05-19 13:21:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Keyword arguments are not supported in activities, workflows, signals, queries, or updates. We should clearly document this in README and validate this rule at definition time with a clear error.

#### Comments (6)

<details>
<summary><strong>santiagodoldan</strong> commented on 2025-04-25 15:33:20.000 UTC</summary>

@cretz are there any plans on adding support to keyword arguments? We want to migrate from coinbase SDK and this would affect all our existing workflows and activities.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-25 19:36:06.000 UTC</summary>

There are no plans to support keyword arguments because Temporal does not support them and many languages that Ruby SDK can invoke workflows/activities on do not support them. Therefore no Temporal SDKs in languages with keyword arguments (e.g. Python) allow them in workflows/activities. We usually encourage a single parameter that can have fields added which is compatible across all of Temporal.

I am just reading https://github.com/coinbase/temporal-ruby/pull/255, but struggling to understand it a bit probably because I don't understand how that SDK serializes inputs. It seems to assume that all forms of input as an array whose last value is a hash means it's kwargs? I am curious how that would work if I invoked an activity with a single arg of `['foo', { 'bar' => 'baz' }]` though I admit I didn't dig deep enough to see if that situation was properly disambiguated.

</details>

<details>
<summary><strong>santiagodoldan</strong> commented on 2025-04-28 19:48:43.000 UTC</summary>

It's because the input goes inside another array 👇 

```ruby
[
  [
    "foo",
    {
      "bar": "baz"
    }
  ]
]
```

> I am just reading [coinbase/temporal-ruby#255](https://github.com/coinbase/temporal-ruby/pull/255), but struggling to understand it a bit probably because I don't understand how that SDK serializes inputs. It seems to assume that all forms of input as an array whose last value is a hash means it's kwargs? I am curious how that would work if I invoked an activity with a single arg of `['foo', { 'bar' => 'baz' }]` though I admit I didn't dig deep enough to see if that situation was properly disambiguated.



</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-28 20:01:24.000 UTC</summary>

> It's because the input goes inside another array

Not following exactly. How can you differentiate `('foo', bar: 'baz')` and `('foo', { 'bar' => 'baz' })` in this case? One is a positional and keyword parameter, another is two positional parameters, and it's important to know which is which at deserialization time.

All Temporal SDKs only support positional parameters, and all Temporal SDKs strongly encourage a single parameter that is an object/dict that can have fields added.

</details>

<details>
<summary><strong>santiagodoldan</strong> commented on 2025-04-29 12:33:35.000 UTC</summary>

I did a little bit more of investigation

**Coinbase SDK**

```ruby
Temporal.start_workflow(FooWorkflow, ['foo', { bar: 'baz' }])
```

![Image](https://github.com/user-attachments/assets/1afe6a30-7833-469a-9fbd-cd3702bc00ea)

```ruby
Temporal.start_workflow(FooWorkflow, 'foo', { bar: 'baz' })
```

![Image](https://github.com/user-attachments/assets/23e02c64-3abc-46e6-9f87-34b23bb986bd)

**Temporal SDK**

`client.start_workflow(FooWorkflow, ['foo', { bar: 'baz' }], id: SecureRandom.uuid, task_queue: 'general')`

![Image](https://github.com/user-attachments/assets/c9032616-bdaf-45fe-bf62-bf39553235dc)

`client.start_workflow(FooWorkflow, 'foo', { bar: 'baz' }, id: SecureRandom.uuid, task_queue: 'general')`

![Image](https://github.com/user-attachments/assets/caa78c66-1af0-4a6a-97df-cfb5950c32af)

The only difference so far is the extra `:` which I don't know why they add it. There is almost the same behavior here which is great. The difference is how each SDK treats that input.

> Not following exactly. How can you differentiate `('foo', bar: 'baz')` and `('foo', { 'bar' => 'baz' })` in this case? One is a positional and keyword parameter, another is two positional parameters, and it's important to know which is which at deserialization time.

That's the magic of the double splat operator, it will support both, a positional argument or keyword arguments. So if your #execute method defines positional or keyword arguments, it doesn't matter.

```ruby
arda(dev)* def foo(a, b)
arda(dev)*   p a, b
arda(dev)> end
=> :foo

arda(dev)* def bar(a, bar:)
arda(dev)*   p a, bar
arda(dev)> end
=> :bar

arda(dev)> foo('foo', **{ bar: 'baz' })
"foo"
{:bar=>"baz"}
=> ["foo", {:bar=>"baz"}]

arda(dev)> bar('foo', **{ bar: 'baz' })
"foo"
"baz"
=> ["foo", "baz"]
```


</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-29 13:50:06.000 UTC</summary>

We don't want to build expectations on certain keyword argument presence/requirement. We want to have an unambiguous parameter signature arity in all SDKs. If you pass a hash as _one_ of your parameters, it is _one_ of your parameters, not sometimes one and sometimes multiple. Also the addition of a key into a hash shouldn't cause an invocation failure because you were using keyword args and hadn't yet defined that new key. If you'd like to destructure it _inside_ your workflow that is ok, but Temporal only supports positional parameters in its serialized form and we only therefore want positional parameters in deserialized form instead of treating a trailing hash as special.

</details>


---

<a id="338"></a>

### #338: [Bug] Retry policy non_retryable_error_types does not respect error module/namespace

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/338 |
| **State** | CLOSED |
| **Author** | laurynas (Laurynas Butkus) |
| **Created** | 2025-09-12 12:32:47.000 UTC (3 months ago) |
| **Updated** | 2025-09-15 09:00:49.000 UTC |
| **Closed** | 2025-09-15 09:00:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

We want activity to fail instantly on certain error types, for example `ActiveRecord::RecordNotFound`.

We use retry policy:

```ruby
Temporalio::RetryPolicy.new(
  non_retryable_error_types: %w(ActiveRecord::RecordNotFound),
)
```

### Describe the bug

When `ActiveRecord::RecordNotFound` error is raised we expect workflow to fail, but it retries.
However, if we specify error type without namespace, it works fine - fails instantly:

```ruby
Temporalio::RetryPolicy.new(
  non_retryable_error_types: %w(RecordNotFound),
)
```

Also in Temporal UI it failure type shows without module:
<img width="359" height="110" alt="Image" src="https://github.com/user-attachments/assets/73cd0fe9-f16a-436d-8749-3024797fa329" />

### Minimal Reproduction

Details in bug description.

### Environment/Versions

Reproduced with Ruby SDK v0.5.0, v0.6.0

### Additional context

Possibly related to https://github.com/temporalio/sdk-ruby/issues/293

#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2025-09-12 12:54:41.000 UTC</summary>

This is intentional. By default, exceptions raised from activity are converted to `ApplicationError` with the `type` as the _unqualified_ error type name. This is the same in all SDKs. We may need to document this better, but it is very much on purpose (so much so we actually had a bug where we weren't doing this originally but fixed in #294). If the default unqualified name is not specific enough, consider either catching the error and raising `ApplicationError` yourself w/ `non_retryable: true`, or raising `ApplicationError` with any `type` string you'd like corresponding to your retry policy.

Also, if wanting to discuss or have general questions, feel free to ask on the [forum](https://community.temporal.io) or [Slack](https://t.mp/slack) in the `#ruby-sdk` channel.

</details>

<details>
<summary><strong>laurynas</strong> commented on 2025-09-12 13:03:36.000 UTC</summary>

Thanks for the clarification and guidance. This is indeed unexpected and could cause some issues when migrating from Coinbase SDK. We'll try to find some generic solution. I guess we could use custom failure converter which would be extending default one. Does it make sense?

</details>

<details>
<summary><strong>laurynas</strong> commented on 2025-09-12 13:51:07.000 UTC</summary>

I managed to workaround it using custom failure converter, like this:

```ruby
require 'temporalio/converters/failure_converter'

module TemporalioExt
  module Converters
    class FailureConverter < ::Temporalio::Converters::FailureConverter
      def to_failure(error, converter)
        failure = super

        return failure if failure.application_failure_info.nil?

        failure.application_failure_info.type = error.class.name
        failure
      end
    end
  end
end
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-12 15:31:29.000 UTC</summary>

> I guess we could use custom failure converter which would be extending default one. Does it make sense?

I think it would be better to change the retry policy. Custom failure converters are rare and you may not want to remember to install yours just for this one error type field.

</details>

<details>
<summary><strong>laurynas</strong> commented on 2025-09-15 07:21:01.000 UTC</summary>

Hey @cretz, thanks for the tip! I think I found a clean way to keep namespace as you have suggested - re-raising `ApplicationError` in the intereceptor:

```ruby
require 'temporalio/client/interceptor'
require 'temporalio/worker/interceptor'

module Vinted
  module TemporalioExt
    module Interceptors
      class ActivityErrorType
        include Temporalio::Client::Interceptor
        include Temporalio::Worker::Interceptor::Activity

        def intercept_activity(next_interceptor)
          ActivityInbound.new(next_interceptor)
        end

        class ActivityInbound < Temporalio::Worker::Interceptor::Activity::Inbound
          def execute(_input)
            super
          rescue Temporalio::Error => e
            raise(e)
          rescue StandardError => e
            # raising ApplicationError manually to keep a full error type namespace
            # https://github.com/temporalio/sdk-ruby/issues/338
            raise Temporalio::Error::ApplicationError.new(e.message, type: e.class.name)
          end
        end
      end
    end
  end
end
```

</details>


---

<a id="319"></a>

### #319: [Feature Request] Look into client-side trimming of failures to avoid server-side wrap-and-truncate

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/319 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 19:29:05.000 UTC (4 months ago) |
| **Updated** | 2025-08-18 13:04:29.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

Today if failure proto is too large server side, they truncate it _and_ wrap in server error. See if there's something we can do client side before the failure is sent to limit its size. Probably needs to be opt-out too since server-side failure size limits can be customizable for self-hosted users.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-08-18 13:04:29.000 UTC</summary>

See https://github.com/temporalio/features/issues/597 for possible algorithm

</details>


---

<a id="162"></a>

### #162: Investigate issue with Ruby 3.1/3.2 and worker fibers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/162 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 14:08:31.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-10 15:30:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Currently fiber-based workers hang in Ruby 3.1/3.2 but work in Ruby 3.3+. Initial investigation is showing that pushing to a `Queue` from a separate thread may not be waking up a fiber. As a (temporary?) workaround, we are only allowing Fiber-based workers in Ruby 3.3+.

#### Comments (5)

<details>
<summary><strong>bdchauvette</strong> commented on 2024-10-08 17:42:16.000 UTC</summary>

You might've already looked into this, but any chance this is related to the introduction of M:N scheduling in 3.3? 🤔

https://bugs.ruby-lang.org/issues/19842

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-08 18:06:18.000 UTC</summary>

I do suspect it is related to that. Basically what we are finding pre-3.3 is that in some cases when we have one Ruby thread that pushes to a queue, a fiber that is waiting on queue pop is not woken up. Due to how we need to use Rust, we need to be able to wake up fibers from another thread and queues were the logical way to do it. Note, this does not happen all the time. In many cases a queue push from another thread does resume a fiber waiting on queue pop.

Maybe it's something we are just not doing right, or maybe there's some other way to wake up a fiber from another thread. We may end up reworking our callback logic to not use queue from other thread, but instead do a `captured_fiber_scheduler.fiber { queue.push }` hoping that will fix it.

This is causing our fiber-based tests to not work in < 3.3. We need to do a lot more investigating here, but for now so we could get the activity worker PR out, we created this separate issue.

Reactions: 👍 2

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-08 18:14:34.000 UTC</summary>

The other obvious question becomes, how important is pre-3.3 fiber support? 3.1 will be EOL'd in the spring and 3.2 a year after that. And of course threads work across all versions. It just becomes a question of how much work to investigate/solve vs benefit.

Reactions: 👍 1

</details>

<details>
<summary><strong>mjameswh</strong> commented on 2024-10-10 12:36:41.000 UTC</summary>

> The other obvious question becomes, how important is pre-3.3 fiber support? ... It just becomes a question of how much work to investigate/solve vs benefit.

Agree, that would be a reasonable compromise.

Only thing: are you sure this issue is purely a "fiber on pre-3.3" thing, and not hiding something bigger that could haunt us later? It might be worth investigating just a little bit more to confirm your initial suspicion before dismissing.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-10 15:27:59.000 UTC</summary>

> are you sure this issue is purely a "fiber on pre-3.3" thing, and not hiding something bigger that could haunt us later? It might be worth investigating just a little bit more to confirm your initial suspicion before dismissing.

I am not sure because I don't know the exact cause. I agree would like to investigate (or delegate the investigation). I did basic investigation showing literally as I used `asdf` to switch Ruby versions, a test was not working in 3.1/3.2 and was in 3.3, and tracked it down to a `queue.pop` in a fiber not waking up to a `queue.push` from another thread (a Ruby thread, but from Rust code). But I could not replicate with a trivial thread.new + queue.push and fiber.schedule + queue.pop, hence the opening of this ticket for investigating more deeply.

</details>


---

<a id="117"></a>

### #117: Temporal CLI based ephemeral server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/117 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-02-12 23:25:43.000 UTC (2y 11m ago) |
| **Updated** | 2024-07-12 14:11:11.000 UTC |
| **Closed** | 2024-07-12 14:11:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (5)

<details>
<summary><strong>bergundy</strong> commented on 2023-02-12 23:27:08.000 UTC</summary>

Depends on https://github.com/temporalio/sdk-core/issues/485

No need to maintain support for Temporalite.

</details>

<details>
<summary><strong>josh-berry</strong> commented on 2023-11-22 01:29:02.000 UTC</summary>

How is this different from `temporal server start-dev`?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-11-27 15:07:15.000 UTC</summary>

Our SDKs offer a programmatic interface to that that also downloads it and such

</details>

<details>
<summary><strong>lorensr</strong> commented on 2023-11-27 19:10:05.000 UTC</summary>

https://typescript.temporal.io/api/classes/testing.TestWorkflowEnvironment#createlocal

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:10.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="91"></a>

### #91: [Feature Request] Document a comparison with Coinbase Temporal Ruby library

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/91 |
| **State** | CLOSED |
| **Author** | haimgel (Haim Gelfenbeyn) |
| **Created** | 2022-12-08 19:56:37.000 UTC (3y 1m ago) |
| **Updated** | 2024-07-12 14:11:28.000 UTC |
| **Closed** | 2024-07-12 14:11:28.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

I think it would be great to include in the README a comparison with the [Temporal Ruby library](https://github.com/coinbase/temporal-ruby) started by Coinbase, e.g. motivation behind starting this project rather than contribute to an already existing one, how this one would differ, why would I want to use one over the other, etc.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:28.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="51"></a>

### #51: github.com/temporalio/temporalite-v0.1.1: 1 vulnerabilities (highest severity is: 7.5)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/51 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2022-10-18 14:59:49.000 UTC (3y 2m ago) |
| **Updated** | 2024-07-12 14:12:13.000 UTC |
| **Closed** | 2024-07-12 14:12:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>github.com/temporalio/temporalite-v0.1.1</b></p></summary>

<p></p>
<p>Path to dependency file: /spec/support/go_server/go.mod</p>
<p>Path to vulnerable library: /spec/support/go_server/go.mod</p>
<p>

<p>Found in HEAD commit: [108dceb5653a3877efcd11d0b1a51a437450f1c3](https://github.com/temporalio/sdk-ruby/commit/108dceb5653a3877efcd11d0b1a51a437450f1c3)</p></details>

## Vulnerabilities
| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (github.com/temporalio/temporalite-v0.1.1 version) | Remediation Possible** |
|----|----|----|----|----|----|----|
|[CVE-2022-41721](https://www.mend.io/vulnerability-database/CVE-2022-41721) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | golang.org/x/net-v0.0.0-20220708220712-1185a9018129 | Transitive | N/A* | &#10060; |

<p>_For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>_*In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details
<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2022-41721</summary>

### Vulnerable Library - <b>golang.org/x/net-v0.0.0-20220708220712-1185a9018129</b></p>
<p></p>
<p>Library home page: [https://proxy.golang.org/golang.org/x/net/@v/v0.0.0-20220708220712-1185a9018129.zip](https://proxy.golang.org/golang.org/x/net/@v/v0.0.0-20220708220712-1185a9018129.zip)</p>
<p>Path to dependency file: /spec/support/go_server/go.mod</p>
<p>Path to vulnerable library: /spec/support/go_server/go.mod</p>
<p>

Dependency Hierarchy:

* github.com/temporalio/temporalite-v0.1.1 (Root Library)
  * go.temporal.io/sdk-v1.15.0
    * github.com/grpc-ecosystem/go-grpc-middleware-v1.3.0
      * :x: **golang.org/x/net-v0.0.0-20220708220712-1185a9018129** (Vulnerable Library)
<p>Found in HEAD commit: [108dceb5653a3877efcd11d0b1a51a437450f1c3](https://github.com/temporalio/sdk-ruby/commit/108dceb5653a3877efcd11d0b1a51a437450f1c3)</p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

### Vulnerability Details
<p>

A request smuggling attack is possible when using MaxBytesHandler. When using MaxBytesHandler, the body of an HTTP request is not fully consumed. When the server attempts to read HTTP2 frames from the connection, it will instead be reading the body of the HTTP request, which could be attacker-manipulated to represent arbitrary HTTP2 requests.

<p>Publish Date: 2023-01-13
<p>URL: [CVE-2022-41721](https://www.mend.io/vulnerability-database/CVE-2022-41721)</p>
</p>

<p></p>

### CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:

* Exploitability Metrics:
  * Attack Vector: Network
  * Attack Complexity: Low
  * Privileges Required: None
  * User Interaction: None
  * Scope: Unchanged
* Impact Metrics:
  * Confidentiality Impact: None
  * Integrity Impact: None
  * Availability Impact: High
</p>
For more information on CVSS3 Scores, click [here](https://www.first.org/cvss/calculator/3.0).
</p>

<p></p>

### Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Release Date: 2023-01-13</p>
<p>Fix Resolution: v0.2.0</p>

</p>

<p></p>

</details>



#### Comments (5)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2022-11-14 19:49:30.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2022-12-01 12:31:08.000 UTC</summary>

:information_source: This issue was automatically re-opened by Mend because the vulnerable library in the specific branch(es) has been detected in the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-01-08 03:13:06.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-01-20 12:16:33.000 UTC</summary>

:information_source: This issue was automatically re-opened by Mend because the vulnerable library in the specific branch(es) has been detected in the Mend inventory.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:12:13.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="315"></a>

### #315: [Bug] ScopedLogger fails attempting to compare symbol to integer for libraries like semantic_logger

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/315 |
| **State** | OPEN |
| **Author** | schoblaska (Joseph Schoblaska) |
| **Created** | 2025-08-14 13:50:38.000 UTC (4 months ago) |
| **Updated** | 2025-08-14 17:30:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm running Temporal alongside a Rails application, starting the Temporal worker with a Rails runner script like in the [example](https://github.com/temporalio/samples-ruby/tree/main/rails_app).

### Describe the bug

Workflows are failing on exceptions bubbling up from `ScopedLogger` on this line:

https://github.com/temporalio/sdk-ruby/blob/21a3f312d23692bf1737556d113ccfb9df128b64/temporalio/lib/temporalio/scoped_logger.rb#L20

When I inspect those values, `severity` is 2, `Logger::Unknown` is undefined (should be `Logger::UNKNOWN`?), and `level` is `:debug`.

```
comparison of Integer with :debug failed

/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/scoped_logger.rb:20:in 'Integer#<'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/scoped_logger.rb:20:in 'Temporalio::ScopedLogger#add'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/replay_safe_logger.rb:31:in 'block in Temporalio::Internal::Worker::WorkflowInstance::ReplaySafeLogger#add'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/illegal_call_tracer.rb:134:in 'block in Temporalio::Internal::Worker::WorkflowInstance::IllegalCallTracer#disable'
<internal:trace_point>:297:in 'TracePoint#disable'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/illegal_call_tracer.rb:133:in 'Temporalio::Internal::Worker::WorkflowInstance::IllegalCallTracer#disable'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance.rb:197:in 'Temporalio::Internal::Worker::WorkflowInstance#illegal_call_tracing_disabled'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/replay_safe_logger.rb:31:in 'Temporalio::Internal::Worker::WorkflowInstance::ReplaySafeLogger#add'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/scoped_logger.rb:57:in 'Temporalio::ScopedLogger#warn'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance.rb:289:in 'block in Temporalio::Internal::Worker::WorkflowInstance#activate_internal'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/replay_safe_logger.rb:20:in 'Temporalio::Internal::Worker::WorkflowInstance::ReplaySafeLogger#replay_safety_disabled'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance.rb:288:in 'Temporalio::Internal::Worker::WorkflowInstance#activate_internal'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance.rb:166:in 'block in Temporalio::Internal::Worker::WorkflowInstance#activate'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/illegal_call_tracer.rb:125:in 'block in Temporalio::Internal::Worker::WorkflowInstance::IllegalCallTracer#enable'
<internal:trace_point>:261:in 'TracePoint#enable'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/illegal_call_tracer.rb:124:in 'Temporalio::Internal::Worker::WorkflowInstance::IllegalCallTracer#enable'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance.rb:236:in 'Temporalio::Internal::Worker::WorkflowInstance#run_in_scheduler'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance.rb:166:in 'Temporalio::Internal::Worker::WorkflowInstance#activate'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/workflow_executor/thread_pool.rb:163:in 'block in Temporalio::Worker::WorkflowExecutor::ThreadPool::Worker#activate'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/timeout-0.4.3/lib/timeout.rb:185:in 'block in Timeout.timeout'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/timeout-0.4.3/lib/timeout.rb:192:in 'Timeout.timeout'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/workflow_executor/thread_pool.rb:149:in 'Temporalio::Worker::WorkflowExecutor::ThreadPool::Worker#activate'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/workflow_executor/thread_pool.rb:124:in 'block in Temporalio::Worker::WorkflowExecutor::ThreadPool::Worker#run'
<internal:kernel>:168:in 'Kernel#loop'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/workflow_executor/thread_pool.rb:115:in 'Temporalio::Worker::WorkflowExecutor::ThreadPool::Worker#run'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/workflow_executor/thread_pool.rb:99:in 'block in Temporalio::Worker::WorkflowExecutor::ThreadPool::Worker#initialize'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/thread_pool.rb:200:in 'block (3 levels) in Temporalio::Worker::ThreadPool::Worker#initialize'
<internal:kernel>:168:in 'Kernel#loop'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/thread_pool.rb:193:in 'block (2 levels) in Temporalio::Worker::ThreadPool::Worker#initialize'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/thread_pool.rb:192:in 'Kernel#catch'
/Users/joseph/.rvm/gems/ruby-3.4.2/gems/temporalio-0.5.0-arm64-darwin/lib/temporalio/worker/thread_pool.rb:192:in 'block in Temporalio::Worker::ThreadPool::Worker#initialize'
```

### Environment/Versions

- OS and processor: M1 Mac
- Using the `temporalio/auto-setup:latest` Docker image

#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2025-08-14 14:39:36.000 UTC</summary>

Interesting. Per https://github.com/ruby/rbs/blob/607dc0573276048ba41f07fe160df102898fe717/stdlib/logger/0/logger.rbs#L609, `level` is supposed to be an integer not a symbol. Even Ruby itself does integer comparison operators against `level` e.g. https://github.com/ruby/logger/blob/9239e197f39df4cb11652808bdfd1624f824a3a3/lib/logger.rb#L482.

So I wonder if `Rails.logger.level` is a symbol. `Rails.logger` is an `ActiveSupport::Logger` which extends `::Logger` which means it should only have `level` returning an integer. So does `Rails.logger.level > 2` fail? Does `Rails.logger.debug?` fail? We will have to investigate (and/or feel free to do some deep diving here yourself).

</details>

<details>
<summary><strong>schoblaska</strong> commented on 2025-08-14 16:22:05.000 UTC</summary>

I did a little digging and realized that I'm using [rails_semantic_logger](https://github.com/reidmorrison/rails_semantic_logger) in this project, which uses symbols for log levels, which can result in [compatibility issues](https://github.com/rails/rails/commit/e01d1e25dd6e03233effff524a9e2bf03e3f4869).

```
3.4.2 :001 > Rails.logger
 => #<SemanticLogger::Logger:0x000000011611bf90 @filter=nil, @level=nil, @level_index=nil, @name="Rails">

3.4.2 :002 > Rails.logger.level
 => :debug
```

On a Rails project using the default logger:

```
3.3.5 :001 > Rails.logger
 =>
#<ActiveSupport::BroadcastLogger:0x00000001683e64f8
 @broadcasts=
  [#<ActiveSupport::Logger:0x000000016ea37b30
    @default_formatter=#<Logger::Formatter:0x00000001683ee108 @datetime_format=nil>,
    @formatter=#<ActiveSupport::Logger::SimpleFormatter:0x00000001683e6d18 @datetime_format=nil>,
    @level=0,
    @level_override={},
    @local_level_key=:logger_thread_safe_level_41180,
    @logdev=
     #<Logger::LogDevice:0x000000016f6db9b8
      @binmode=false,
      @dev=#<File:/Users/joseph/projects/web_app/log/development.log>,
      @filename="/Users/joseph/projects/web_app/log/development.log",
      @mon_data=#<Monitor:0x00000001683ee040>,
      @mon_data_owner_object_id=21640,
      @reraise_write_errors=[],
      @shift_age=1,
      @shift_period_suffix="%Y%m%d",
      @shift_size=104857600,
      @skip_header=false>,
    @progname=nil>,
   #<ActiveSupport::Logger:0x000000010f470d78
    @default_formatter=#<Logger::Formatter:0x000000016e8571d0 @datetime_format=nil>,
    @formatter=#<ActiveSupport::Logger::SimpleFormatter:0x000000016e856c58 @datetime_format=nil>,
    @level=0,
    @level_override={},
    @logdev=#<Logger::LogDevice:0x000000031063b740 @binmode=false, @dev=#<IO:<STDERR>>, @filename=nil, @mon_data=#<Monitor:0x000000016e856d70>, @mon_data_owner_object_id=41160, @reraise_write_errors=[], @shift_age=nil, @shift_period_suffix=nil, @shift_size=nil, @skip_header=false>,
    @progname=nil>],
 @formatter=#<ActiveSupport::Logger::SimpleFormatter:0x00000001683e6d18 @datetime_format=nil>,
 @progname="Broadcast">

3.3.5 :002 > Rails.logger.level
 => 0
```

Personally, I don't need the semantic logger anymore (I believe I initially switched to it because of a telemetry library I was using) so I'll probably just switch back to the default.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-14 17:08:50.000 UTC</summary>

:+1: FWIW, I personally disagree with the first sentence of https://github.com/rails/rails/pull/49563 that states

> Numeric values for Logger#level is an implementation detail

And https://github.com/reidmorrison/semantic_logger/issues/28 and others here. The integer is set [in RBS](https://github.com/ruby/rbs/blob/607dc0573276048ba41f07fe160df102898fe717/stdlib/logger/0/logger.rbs#L609), [in Sorbet](https://github.com/sorbet/sorbet/blob/a8d95f61dc809cd0eb26d712bc537cbf60ff21be/rbi/stdlib/logger.rbi#L304), and is clearly referred to as an integer in the base `Logger` class multiple times, which any extension/wrapper/delegator relies on.

However, I'll update the title of this issue and if other users complain about semantic_logger issues here, we can try to adjust our wrapper to be semantic_logger friendly.

Reactions: 👍 1

</details>

<details>
<summary><strong>schoblaska</strong> commented on 2025-08-14 17:30:54.000 UTC</summary>

Sounds good! Thanks for looking into this. I opened a PR for the `Logger::Unknown` issue: https://github.com/temporalio/sdk-ruby/pull/316

Reactions: ❤️ 1

</details>


---

<a id="288"></a>

### #288: [Feature Request] Support single-page fetching for list workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/288 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-20 19:52:45.000 UTC (6 months ago) |
| **Updated** | 2025-06-27 21:06:02.000 UTC |
| **Closed** | 2025-06-27 21:06:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Currently the enumerable doesn't allow you to provide a next page token if you want to get the next page later. Need a single-page form of list workflows.

#### Comments (4)

<details>
<summary><strong>jeromepl</strong> commented on 2025-06-25 00:15:15.000 UTC</summary>

I dug a bit into the internals of the coinbase temporal ruby gem and it looks like there an [`Executions` object](https://github.com/coinbase/temporal-ruby/blob/b5efd2cef802be2fa97d5bab04839413726ac06e/lib/temporal/workflow/executions.rb) is **always** returned. This object is an enumerable with `#next_page_token` and `#next_page` public methods, so very similar to what I proposed in #285.

However what I don't like from the coinbase/temporal-ruby approach is that the return value of `#next_page_token` is ill-defined. If you call it _before_ calling `#each` you will get the token that was passed as input to get the list of workflows (or `nil` if none was given), but if you call it _after_ then you will get the token for the next page.

This leads me to think that we might not want to always return the same object type for `#list_workflows`, as in the case where no `page_size` is given, we would want to automatically traverse all pages and thus the what to return for `#next_page_token` while doing the traversal would be unclear.
This would leave us with two options:
1. Have two possible return types for `#list_workflows`, depending on whether `page_size` is `nil` or not.
2. Define a separate method for the "paginated" version of `#list_workflows`, for example `#list_workflows_paginated`.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-06-25 19:42:59.000 UTC</summary>

I think I personally like 2 and add a `list_workflow_page` w/ optional page size and next page token, and alter `list_workflows` to just use that (and make the interceptor and such for just the canonical `list_workflow_page`). The result of `list_workflow_page` can literally be `Temporalio::Client::ListWorkflowPage` that is a `Data` of the items and the next page token (with the absence representing completion). This is on our near term backlog, but would also welcome contribution (e.g. just changing the existing PR).

</details>

<details>
<summary><strong>jeromepl</strong> commented on 2025-06-25 20:49:06.000 UTC</summary>

I'll update my PR shortly 🙂 

Reactions: ❤️ 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-06-27 21:06:02.000 UTC</summary>

Solved in #285

</details>


---

<a id="246"></a>

### #246: [Feature Request] Rails Integration

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/246 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-16 15:55:01.000 UTC (8 months ago) |
| **Updated** | 2025-08-05 19:32:43.000 UTC |
| **Closed** | 2025-08-05 19:32:43.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

We are considering explicit Rails integration/gem as part of the SDK (beyond just a sample at https://github.com/temporalio/samples-ruby/issues/4), and this is to collect ideas of what it could contain:

* Rails config and Temporal client DI
* Code gen (maybe)
  * e.g. simple `foreman` script to run worker
* `ActiveJob` integration (activities and/or workflows, TBD)
* `ActiveModel`/`ActiveRecord` data conversion (already documented a bit at https://github.com/temporalio/sdk-ruby?tab=readme-ov-file#activerecord-and-activemodel)

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-04-24 19:53:46.000 UTC</summary>

After research, we see some of these are feasible and some aren't. We are going to do the sample at https://github.com/temporalio/samples-ruby/issues/4 first, then apply learnings here. At this time, we think the following may be reasonable:

* Code generation for creating a worker
* ActiveModel/ActiveRecord support in converters
* Rails context inside activities (maybe)

Temporal client initializer is not really needed (can just create client yourself, will show in sample), and ActiveJob support is problematic because it expects the code to live on the Rails side instead of the worker side. But both can still be researched.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-05 19:32:43.000 UTC</summary>

Rails integration has been demonstrated in a sample at https://github.com/temporalio/samples-ruby/tree/main/rails_app, but there is nothing substantial enough over plain Ruby use to justify an explicit integration at this time. Closing issue for now, but can reopen if we feel there are explicit Rails integration points we need to support beyond the sample.

</details>


---

<a id="229"></a>

### #229: Please do a point release with the relaxing of the protobuf version

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/229 |
| **State** | CLOSED |
| **Author** | njaremko (Nathan Jaremko) |
| **Created** | 2025-03-05 03:00:44.000 UTC (10 months ago) |
| **Updated** | 2025-04-22 16:32:47.000 UTC |
| **Closed** | 2025-04-22 16:32:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I can't switch to this because the version you've published to RubyGems doesn't have the relaxing on the protobuf version that you merged a few weeks ago.

I'd really appreciate if you released a point release, so I don't have to get a source build working 🙏 

#### Comments (4)

<details>
<summary><strong>thegreenrobot</strong> commented on 2025-03-06 03:58:37.000 UTC</summary>

Looking for this as well. 🙏 

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-07 11:34:17.000 UTC</summary>

Happy to do so! Will try to do so next week or the following.

</details>

<details>
<summary><strong>njaremko</strong> commented on 2025-03-27 16:10:22.000 UTC</summary>

Any updates here?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-27 16:40:54.000 UTC</summary>

Yes, we want to do a new release, we are just trying to get in a couple of more features in (OTel and metric buffer). Sorry for the wait.

Reactions: 👍 1

</details>


---

<a id="364"></a>

### #364: [Feature Request] Confirm/assert Ruby 4 compatibility, maybe drop 3.2 support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/364 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-02 14:50:16.000 UTC (1 months ago) |
| **Updated** | 2026-01-07 16:54:00.000 UTC |
| **Closed** | 2026-01-07 16:54:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to update CI, docs, etc to confirm/assert Ruby 4 compatibility. Also consider dropping 3.2 support if it goes EOL as expected.


#### Comments (3)

<details>
<summary><strong>kapso</strong> commented on 2026-01-05 18:17:47.000 UTC</summary>

Hi @cretz , any update on this, would love to have Ruby 4 support. Thanks

</details>

<details>
<summary><strong>cretz</strong> commented on 2026-01-05 19:08:17.000 UTC</summary>

Yes, we are actively working on this

Reactions: 👍 1

</details>

<details>
<summary><strong>kapso</strong> commented on 2026-01-06 17:57:23.000 UTC</summary>

@cretz thats great, thanks. Looking fwd to the upgrade.

</details>


---

<a id="310"></a>

### #310: [Feature Request] Research and maybe implement disallowing all Ruby stdlib sync constructs in workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/310 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-06 16:18:39.000 UTC (5 months ago) |
| **Updated** | 2025-08-18 14:27:17.000 UTC |
| **Closed** | 2025-08-18 14:27:17.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

In Ruby, `sleep`, `Timeout.timeout`, `Mutex`, `ConditionVariable`, `Queue`, and `SizedQueue` are all fiber-aware and therefore we implicitly make them durable which is a nice property. So users can use their normal constructs and they "magically" work. But there are cases where third party uses of these are expected to be same-process only. We hit one where logger uses a mutex and we therefore durably blocked the mutex and completed the workflow task, but the local-process unblock happened after we had removed our fiber scheduler so it was not durably unblocked leading to hung workflows.

The proposal is to, before GA, consider all of these standard library things illegal via illegal call tracing. This will help users catch when libraries are accidentally doing something illegal that they need to opt-out of the durable scheduler for. This means that we need to provide workflow-safe equivalents. We already do for `sleep` and `timeout`, but we need to forothers. The current thought is to basically do a `Delegator` type approach to the standard library ones that does opt-out of illegal call checks.

It is important to land this before GA since it is backwards incompatible. By being extra restrictive here, we can choose to relax things later if we want.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-08-12 13:33:17.000 UTC</summary>

We have hit our first snag here. While trying to disable use of `Mutex` in workflows, it turns out every Google Protobuf field access uses a mutex. It may not be reasonable for us to wrap every proto access in a disable-tracer block nor may it be reasonable to ask users to. It is also too expensive and fickle to inspect the stack to allow only Google Protobuf to use mutexes and nobody else. However, if we leave `Mutex` for general use like it is used in loggers, technically it may hang workflows if you use stdlib `Logger` with `Mutex` (and maybe other places), see #309. Not sure what to do here, discussing with team...

</details>


---

<a id="292"></a>

### #292: [Bug] Potential issue using runtime Sorbet and handlers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/292 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-27 21:10:49.000 UTC (6 months ago) |
| **Updated** | 2025-08-19 21:22:13.000 UTC |
| **Closed** | 2025-08-19 21:22:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

User getting error like:

```
/Users/someuser/.dev/gem/somehash/gems/temporalio-0.4.0-arm64-darwin/lib/temporalio/workflow/definition.rb:287:in 'Temporalio::Workflow::Definition.singleton_method_added': Attempting to override Temporal-defined class definition method (RuntimeError)
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/_methods.rb:555:in 'T::Private::Methods::SingletonMethodHooks#singleton_method_added'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/class_utils.rb:82:in 'Module#define_method'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/class_utils.rb:82:in 'block in T::Private::ClassUtils.def_with_visibility'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/class_utils.rb:73:in 'Module#module_exec'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/class_utils.rb:73:in 'T::Private::ClassUtils.def_with_visibility'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/call_validation.rb:31:in 'block (2 levels) in T::Private::Methods::CallValidation.wrap_method_if_needed'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/decl_state.rb:25:in 'T::Private::DeclState#without_on_method_added'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/call_validation.rb:30:in 'block in T::Private::Methods::CallValidation.wrap_method_if_needed'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/configuration.rb:533:in 'T::Configuration.without_ruby_warnings'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/call_validation.rb:28:in 'T::Private::Methods::CallValidation.wrap_method_if_needed'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/_methods.rb:411:in 'T::Private::Methods.unwrap_method'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/_methods.rb:353:in 'T::Private::Methods.run_sig'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/_methods.rb:248:in 'block in T::Private::Methods._on_method_added'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/_methods.rb:449:in 'T::Private::Methods.run_sig_block_for_key'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/_methods.rb:469:in 'block in T::Private::Methods.run_all_sig_blocks'
	from <internal:kernel>:168:in 'Kernel#loop'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/private/methods/_methods.rb:466:in 'T::Private::Methods.run_all_sig_blocks'
	from /Users/someuser/.dev/gem/somehash/gems/sorbet-runtime-0.5.12164/lib/types/utils.rb:85:in 'T::Utils.run_all_sig_blocks'
```

Somehow Sorbet seems to be creating a duplicate singleton method _after_ (or when) we do. First, we need to replicate, which can probably be done with a simple signal like:

```ruby
    sig { void }
    workflow_signal
    def activate_program
      # do something
    end
```

Understand why Sorbet is adding singleton methods to our class and if we can avoid it. Second, solve. Worst case scenario we may have to detect the situation where it's Sorbet adding a method and ignore it.

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-07-15 14:22:58.000 UTC</summary>

We had created a similar issue for Sorbet at https://github.com/sorbet/sorbet/issues/8592. Basically they're doing singleton method stuff when decorating an instance method.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-07-18 14:03:03.000 UTC</summary>

We have also created https://github.com/sorbet/sorbet/issues/9084 separately just in case it's not the exact same thing

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-19 21:22:13.000 UTC</summary>

Both of these issues are solved with recent Sorbet releases.

</details>


---

<a id="290"></a>

### #290: [Bug] Child invoked via #execute_child_workflow don't show up in parent relationship or UI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/290 |
| **State** | CLOSED |
| **Author** | 1990eam (Elián Agustín Magni) |
| **Created** | 2025-06-25 20:36:50.000 UTC (6 months ago) |
| **Updated** | 2025-06-27 14:02:45.000 UTC |
| **Closed** | 2025-06-27 13:05:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Invoke child workflows from within a parent workflow via `#execute_child_workflow`

### Describe the bug

Child workflows invoked via `#execute_child_workflow` run and are completed but they don't show as relationships of the parent workflow (A) nor in the dashboard (B). They only seem to show up in the parent workflow execution history (C)

A
![Image](https://github.com/user-attachments/assets/2ba90afd-5a2e-4ffc-8496-96bcfcf1a79e)

B
![Image](https://github.com/user-attachments/assets/68acb7ef-e477-47df-b677-aab07e19f905)

C
![Image](https://github.com/user-attachments/assets/a12214ad-e804-4165-a36d-2fac45941c36)


### Minimal Reproduction

Invoke child workflows from within parent context via `#execute_child_workflow`

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Linux 22.04
- Temporal Version: Ruby 0.4.0
- Are you using Docker or Kubernetes or building Temporal from source? Docker

### Additional context

We do wrap the child invocation in a `Temporalio::Workflow::Future.new {}` block as we want these to run concurrently and are using an `abandon` `parent_close_policy`


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-06-26 13:09:50.000 UTC</summary>

You may need to at least wait until the child workflows are _started_ before exiting the workflow. You can use `start_child_workflow` and wait for that result before completing the primary workflow function. The completion of the workflow makes the requests to start child workflows a no-op (same for a request to start activities and other things).

</details>

<details>
<summary><strong>1990eam</strong> commented on 2025-06-26 16:00:56.000 UTC</summary>

> You may need to at least wait until the child workflows are _started_ before exiting the workflow. You can use `start_child_workflow` and wait for that result before completing the primary workflow function. 

I changed a couple things to try what you are suggesting.

I started using `start_child_workflow` since the docs say that calls to that method `do not complete until the start has been accepted by the server` . It looked like that would be enough, especially since I can't call `started?` on a `Future` to check before completing the parent, but unfortunately nothing changed.

What did _work_ (not an actual solution) was putting a `sleep` after invoking the child workflows and before the parent workflow returns, then the child workflows started showing up everywhere.

Are there any workarounds? What's the right way to use the `abandon` parent close policy to not lose ability to track child workflows if the parent completes before child start?



</details>

<details>
<summary><strong>cretz</strong> commented on 2025-06-26 18:27:34.000 UTC</summary>

> It looked like that would be enough, especially since I can't call started? on a Future to check before completing the parent, but unfortunately nothing changed.

Future doesn't have a "started", you'd wait until the future completes which represents start completing, e.g. something like this (untested, just typed here in chat, may have typos)

```ruby
Temporalio::Workflow::Future.all_of(
  *10.times.map do |i|
    Temporalio::Workflow::Future.new do
      Temporalio::Workflow.start_child_workflow(
        MyChildWorkflow, "param #{i}",
        parent_close_policy: Temporalio::Workflow::ParentClosePolicy::ABANDON
      )
    end
  end
).wait
```

Notice how that will wait for all futures to complete before moving on, and futures complete when the workflow has been accepted to start by the server. See https://github.com/temporalio/sdk-ruby?tab=readme-ov-file#workflow-futures.


Reactions: ❤️ 1

</details>


---

<a id="289"></a>

### #289: [Bug] temporalio_bridge error when installing gem

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/289 |
| **State** | CLOSED |
| **Author** | dipth (Thomas Dippel) |
| **Created** | 2025-06-25 10:05:24.000 UTC (6 months ago) |
| **Updated** | 2025-06-26 12:18:57.000 UTC |
| **Closed** | 2025-06-26 12:18:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

The `temporalio` gem fails to install.

### Describe the bug

Installing the gem to a Rails application running in a Docker image by adding the following to `Gemfile`:

```
gem "temporalio", "~> 0.4.0"
```

results in the following error message when running `bundle install`:

```
Resolving dependencies...
Installing temporalio 0.4.0 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

    error: failed to parse manifest at `/opt/bundle/ruby/3.4.0/gems/temporalio-0.4.0/ext/Cargo.toml`

Caused by:
  can't find library `temporalio_bridge`, rename file to `src/lib.rs` or specify lib.path
```

### Environment/Versions

- Host OS processor: `M4 Mac OS 15.5 (24F74)`
- Docker Image: `Linux 6.10.14-linuxkit #1 SMP Tue Apr 15 16:00:54 UTC 2025 aarch64 GNU/Linux`
- Temporal Version: `1.3.0 (Server 1.27.1, UI 2.36.0)`
- SDK Version: `0.4.0`
- Ruby Version: `ruby 3.4.4 (2025-05-14 revision a38531fd3f) +PRISM [aarch64-linux]`
- Rust Version: `rustc 1.87.0 (17067e9ac 2025-05-09)`

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-06-25 19:36:23.000 UTC</summary>

I think this is getting the source gem. This gem does not support building fro a source gem at this time (ref https://github.com/temporalio/sdk-ruby?tab=readme-ov-file#installation). I wonder why it is getting the source gem from https://rubygems.org/gems/temporalio/versions instead of the `aarch64-linux` one.

Can you show the output of `bundle install --verbose`? Also can you show the output of `ruby -e 'puts RUBY_PLATFORM'` when running where you are installing?

</details>

<details>
<summary><strong>dipth</strong> commented on 2025-06-26 12:10:23.000 UTC</summary>

```
# => ruby -e 'puts RUBY_PLATFORM'
aarch64-linux
```

```
Running `bundle install --verbose` with bundler 2.5.11
Found changes from the lockfile, re-resolving dependencies because the dependencies in your gemfile changed
[...]
Installing temporalio 0.4.0 with native extensions
Building native extensions. This could take a while...
Bundler::InstallError: Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

    error: failed to parse manifest at `/opt/bundle/ruby/3.4.0/gems/temporalio-0.4.0/ext/Cargo.toml`

Caused by:
  can't find library `temporalio_bridge`, rename file to `src/lib.rs` or specify lib.path

cargo metadata failed, exit code 101

Gem files will remain installed in /opt/bundle/ruby/3.4.0/gems/temporalio-0.4.0 for inspection.
Results logged to /opt/bundle/ruby/3.4.0/extensions/aarch64-linux/3.4.0/temporalio-0.4.0/gem_make.out

  /usr/local/lib/ruby/3.4.0/rubygems/ext/cargo_builder.rb:225:in 'Gem::Ext::CargoBuilder#cargo_crate_name'
  /usr/local/lib/ruby/3.4.0/rubygems/ext/cargo_builder.rb:31:in 'Gem::Ext::CargoBuilder#build'
  /usr/local/lib/ruby/3.4.0/rubygems/ext/builder.rb:195:in 'Gem::Ext::Builder#build_extension'
  /usr/local/lib/ruby/3.4.0/rubygems/ext/builder.rb:229:in 'block in Gem::Ext::Builder#build_extensions'
  /usr/local/lib/ruby/3.4.0/rubygems/ext/builder.rb:226:in 'Array#each'
  /usr/local/lib/ruby/3.4.0/rubygems/ext/builder.rb:226:in 'Gem::Ext::Builder#build_extensions'
  /usr/local/lib/ruby/3.4.0/rubygems/installer.rb:844:in 'Gem::Installer#build_extensions'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/rubygems_gem_installer.rb:76:in 'Bundler::RubyGemsGemInstaller#build_extensions'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/rubygems_gem_installer.rb:28:in 'Bundler::RubyGemsGemInstaller#install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/source/rubygems.rb:206:in 'Bundler::Source::Rubygems#install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer/gem_installer.rb:54:in 'Bundler::GemInstaller#install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer/gem_installer.rb:16:in 'Bundler::GemInstaller#install_from_spec'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer/parallel_installer.rb:132:in 'Bundler::ParallelInstaller#do_install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer/parallel_installer.rb:123:in 'block in Bundler::ParallelInstaller#worker_pool'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/worker.rb:62:in 'Bundler::Worker#apply_func'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/worker.rb:57:in 'block in Bundler::Worker#process_queue'
  <internal:kernel>:168:in 'Kernel#loop'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/worker.rb:54:in 'Bundler::Worker#process_queue'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/worker.rb:90:in 'block (2 levels) in Bundler::Worker#create_threads'

An error occurred while installing temporalio (0.4.0), and Bundler cannot continue.

In Gemfile:
  temporalio

/opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer/parallel_installer.rb:166:in 'Bundler::ParallelInstaller#handle_error'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer/parallel_installer.rb:96:in 'Bundler::ParallelInstaller#call'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer/parallel_installer.rb:66:in 'Bundler::ParallelInstaller.call'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer.rb:244:in 'Bundler::Installer#install_in_parallel'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer.rb:201:in 'Bundler::Installer#install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer.rb:89:in 'block in Bundler::Installer#run'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/process_lock.rb:12:in 'block in Bundler::ProcessLock.lock'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/process_lock.rb:9:in 'IO.open'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/process_lock.rb:9:in 'Bundler::ProcessLock.lock'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer.rb:71:in 'Bundler::Installer#run'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/installer.rb:23:in 'Bundler::Installer.install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/cli/install.rb:63:in 'Bundler::CLI::Install#run'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/cli.rb:247:in 'block in Bundler::CLI#install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/settings.rb:157:in 'Bundler::Settings#temporary'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/cli.rb:246:in 'Bundler::CLI#install'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/vendor/thor/lib/thor/command.rb:28:in 'Bundler::Thor::Command#run'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/vendor/thor/lib/thor/invocation.rb:127:in 'Bundler::Thor::Invocation#invoke_command'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/vendor/thor/lib/thor.rb:527:in 'Bundler::Thor.dispatch'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/cli.rb:35:in 'Bundler::CLI.dispatch'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/vendor/thor/lib/thor/base.rb:584:in 'Bundler::Thor::Base::ClassMethods#start'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/cli.rb:29:in 'Bundler::CLI.start'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/exe/bundle:28:in 'block in <top (required)>'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/lib/bundler/friendly_errors.rb:117:in 'Bundler.with_friendly_errors'
  /opt/bundle/ruby/3.4.0/gems/bundler-2.5.11/exe/bundle:20:in '<top (required)>'
  ./bin/bundle:108:in 'Kernel#load'
  ./bin/bundle:108:in '<main>'
```

</details>

<details>
<summary><strong>dipth</strong> commented on 2025-06-26 12:18:57.000 UTC</summary>

Adding `aarch64-linux` to the `PLATFORMS` section in `Gemfile.lock` seems to have solved the problem

</details>


---

<a id="236"></a>

### #236: [Feature Request] Sagas

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/236 |
| **State** | CLOSED |
| **Author** | blaineventurine (Blaine Venturine) |
| **Created** | 2025-03-22 03:37:39.000 UTC (9 months ago) |
| **Updated** | 2025-03-25 13:42:27.000 UTC |
| **Closed** | 2025-03-25 13:42:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

No.

### Describe the solution you'd like

I noticed several of the other SDKs have an implementation of sagas. Is there a plan to port that functionality here as well?

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-03-24 13:19:30.000 UTC</summary>

> I noticed several of the other SDKs have an implementation of sagas. Is there a plan to port that functionality here as well?

Only Java and we regret it because "saga" is a pattern more than a utility (can see the source of the Java utility to see how trivial) and different people need different approaches (e.g. some want compensations concurrently, some want to collect compensation errors in different ways, etc). See https://temporal.io/blog/saga-pattern-made-easy and https://temporal.io/blog/compensating-actions-part-of-a-complete-breakfast-with-sagas posts on saga. For instance, in Ruby:

```ruby
class MyWorkflow < Temporalio::Workflow::Definition
  def execute
    compensation_activities = []

    compensation_activities << CancelHotelActivity
    Temporalio::Workflow.execute_activity(BookHotelActivity, start_to_close_timeout: 30)

    compensation_activities << CancelFlightActivity
    Temporalio::Workflow.execute_activity(BookFlightActivity, start_to_close_timeout: 30)

    compensation_activities << CancelExcursionActivity
    Temporalio::Workflow.execute_activity(BookExcursionActivity, start_to_close_timeout: 30)
  rescue
    compensation_activities.reverse.each do |act|
      Temporalio::Workflow.execute_activity(act, start_to_close_timeout: 30)
    end
    raise
  end
end
```

Obviously you may customize this to your needs. Also, you may have to pass a new `Temporalio::Cancellation` to the compensation activities instead of the implied workflow one if you are expecting workflow cancellations because it won't work to execute activities with an already-canceled `Cancellation`.

Does this help? Also feel free to join us on `#ruby-sdk` channel on [Slack](https://t.mp/slack)

</details>

<details>
<summary><strong>blaineventurine</strong> commented on 2025-03-24 22:30:57.000 UTC</summary>

Thanks for the reply! As long as I know they aren't planned for this gem, I'm happy to implement them in our code myself, our use case is nearly as trivial as the example you posted. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-25 13:42:06.000 UTC</summary>

Correct, a specific utility is not planned because the pattern is already supported. We do plan on showing the pattern in a sample, see https://github.com/temporalio/samples-ruby/issues/14. (closing issue, but feel free to keep commenting or join us on Slack)

</details>


---

<a id="102"></a>

### #102: go.temporal.io/sdk-v1.17.0: 3 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/102 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2022-12-21 20:58:13.000 UTC (3 years ago) |
| **Updated** | 2023-07-25 21:32:47.000 UTC |
| **Closed** | 2023-07-25 21:32:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>go.temporal.io/sdk-v1.17.0</b></p></summary>

<p></p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (go.temporal.io/sdk-v1.17.0 version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2022-41723](https://www.mend.io/vulnerability-database/CVE-2022-41723) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | golang.org/x/net-v0.0.0-20220906165146-f3363e06e74c | Transitive | N/A* | &#10060; |
| [CVE-2022-32149](https://www.mend.io/vulnerability-database/CVE-2022-32149) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | golang.org/x/text-v0.3.7 | Transitive | N/A* | &#10060; |
| [CVE-2022-41721](https://www.mend.io/vulnerability-database/CVE-2022-41721) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | golang.org/x/net-v0.0.0-20220906165146-f3363e06e74c | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2022-41723</summary>


###  Vulnerable Library - <b>golang.org/x/net-v0.0.0-20220906165146-f3363e06e74c</b></p>

<p></p>
<p>Library home page: <a href="https://proxy.golang.org/golang.org/x/net/@v/v0.0.0-20220906165146-f3363e06e74c.zip">https://proxy.golang.org/golang.org/x/net/@v/v0.0.0-20220906165146-f3363e06e74c.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/sdk-v1.17.0 (Root Library)
    - google.golang.org/grpc-v1.49.0
      - :x: **golang.org/x/net-v0.0.0-20220906165146-f3363e06e74c** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A maliciously crafted HTTP/2 stream could cause excessive CPU consumption in the HPACK decoder, sufficient to cause a denial of service from a small number of small requests.

<p>Publish Date: 2023-02-28
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-41723>CVE-2022-41723</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://osv.dev/vulnerability/GO-2023-1568">https://osv.dev/vulnerability/GO-2023-1568</a></p>
<p>Release Date: 2022-09-29</p>
<p>Fix Resolution: v0.7.0</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2022-32149</summary>


###  Vulnerable Library - <b>golang.org/x/text-v0.3.7</b></p>

<p></p>
<p>Library home page: <a href="https://proxy.golang.org/golang.org/x/text/@v/v0.3.7.zip">https://proxy.golang.org/golang.org/x/text/@v/v0.3.7.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/sdk-v1.17.0 (Root Library)
    - google.golang.org/grpc-v1.49.0
      - golang.org/x/net-v0.0.0-20220906165146-f3363e06e74c
        - :x: **golang.org/x/text-v0.3.7** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
An attacker may cause a denial of service by crafting an Accept-Language header which ParseAcceptLanguage will take significant time to parse.

<p>Publish Date: 2022-10-14
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-32149>CVE-2022-32149</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://www.cve.org/CVERecord?id=CVE-2022-32149">https://www.cve.org/CVERecord?id=CVE-2022-32149</a></p>
<p>Release Date: 2022-10-14</p>
<p>Fix Resolution: v0.3.8</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2022-41721</summary>


###  Vulnerable Library - <b>golang.org/x/net-v0.0.0-20220906165146-f3363e06e74c</b></p>

<p></p>
<p>Library home page: <a href="https://proxy.golang.org/golang.org/x/net/@v/v0.0.0-20220906165146-f3363e06e74c.zip">https://proxy.golang.org/golang.org/x/net/@v/v0.0.0-20220906165146-f3363e06e74c.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/sdk-v1.17.0 (Root Library)
    - google.golang.org/grpc-v1.49.0
      - :x: **golang.org/x/net-v0.0.0-20220906165146-f3363e06e74c** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A request smuggling attack is possible when using MaxBytesHandler. When using MaxBytesHandler, the body of an HTTP request is not fully consumed. When the server attempts to read HTTP2 frames from the connection, it will instead be reading the body of the HTTP request, which could be attacker-manipulated to represent arbitrary HTTP2 requests.

<p>Publish Date: 2023-01-13
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2022-41721>CVE-2022-41721</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

</details>

#### Comments (3)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-01-06 01:10:11.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-01-20 12:16:39.000 UTC</summary>

:information_source: This issue was automatically re-opened by Mend because the vulnerable library in the specific branch(es) has been detected in the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-07-25 21:32:46.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="23"></a>

### #23: temporal-sdk-core-0.1.0: 1 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/23 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2022-06-23 16:32:45.000 UTC (3y 6m ago) |
| **Updated** | 2023-01-23 16:51:46.000 UTC |
| **Closed** | 2023-01-23 16:51:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>temporal-sdk-core-0.1.0</b></p></summary>

<p></p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/699e8bc5701f13bf6df8a00f0c624a7682ff73e0">699e8bc5701f13bf6df8a00f0c624a7682ff73e0</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (temporal-sdk-core version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2023-22895](https://www.mend.io/vulnerability-database/CVE-2023-22895) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | bzip2-0.4.3.crate | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the section "Details" below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2023-22895</summary>


###  Vulnerable Library - <b>bzip2-0.4.3.crate</b></p>

<p>Bindings to libbzip2 for bzip2 compression and decompression exposed as
Reader/Writer streams.
</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/bzip2/0.4.3/download">https://crates.io/api/v1/crates/bzip2/0.4.3/download</a></p>
<p>

Dependency Hierarchy:
  - temporal-sdk-core-0.1.0 (Root Library)
    - zip-0.6.3.crate
      - :x: **bzip2-0.4.3.crate** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/699e8bc5701f13bf6df8a00f0c624a7682ff73e0">699e8bc5701f13bf6df8a00f0c624a7682ff73e0</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
The bzip2 crate before 0.4.4 for Rust allow attackers to cause a denial of service via a large file that triggers an integer overflow in mem.rs. NOTE: this is unrelated to the https://crates.io/crates/bzip2-rs product.

<p>Publish Date: 2023-01-10
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2023-22895>CVE-2023-22895</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-22895">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-22895</a></p>
<p>Release Date: 2023-01-10</p>
<p>Fix Resolution: bzip2 - 0.4.4</p>

</p>

<p></p>

</details>

#### Comments (3)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2022-09-27 17:32:44.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-01-10 22:15:40.000 UTC</summary>

:information_source: This issue was automatically re-opened by Mend because the vulnerable library in the specific branch(es) has been detected in the Mend inventory.

</details>

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-01-23 16:51:46.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="308"></a>

### #308: [Feature Request] Error notification

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/308 |
| **State** | CLOSED |
| **Author** | fmluizao (Fernando Luizão) |
| **Created** | 2025-08-01 19:44:43.000 UTC (5 months ago) |
| **Updated** | 2025-08-04 16:40:39.000 UTC |
| **Closed** | 2025-08-04 14:22:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

When a workflow fails, we don't have visibility outside the web UI. We use [Bugsnag](https://www.bugsnag.com/) for error notifications, and we want to send workflow errors to it. I searched the docs and couldn't find anything like that, I'm missing something?

### Describe the solution you'd like

Maybe a good solution would be adding an option to `Temporalio::Worker`, like

```ruby
worker = Temporalio::Worker.new(
  ...
  error_notifier: BugsnagNotifier
)
```

`BugsnagNotifier` could be any class with an interface you define, like:

```ruby
class BugsnagNotifier
  def notify(exception)
    # send exception to bugsnag
  end
end
```

Would you accept a PR for that? I can work on it if you provide me some guidance, since I'm not familiar with the sdk codebase 🙈 

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-08-04 14:22:36.000 UTC</summary>

You should use interceptors for this which can wrap workflow logic. We don't yet have a good interceptors sample (we have https://github.com/temporalio/samples-ruby/tree/main/context_propagation which is a bit different, but I have opened https://github.com/temporalio/samples-ruby/issues/43). You may need to disable some things in the sandbox via `Temporalio::Workflow::Unsafe` calls to allow doing this illegal thing (accessing non-deterministic system like this in deterministic workflow). You can see how Python did it with Sentry at https://github.com/temporalio/samples-python/tree/main/sentry though the sample uses an older version of Sentry and is therefore a bit broken.

Feel free to join us in the `#ruby-sdk` channel on [Slack](https://t.mp/slack) or in [our forums](https://community.temporal.io/) for general guidance discussion. (closing this issue since it's not an SDK issue, but can keep commenting)

</details>

<details>
<summary><strong>fmluizao</strong> commented on 2025-08-04 16:40:39.000 UTC</summary>

Hi @cretz,

Thanks for the info, I'll take a look at the sample!

Reactions: 👍 1

</details>


---

<a id="306"></a>

### #306: [Feature Request] Update build-gems GH workflow smoke test to use macOS Intel

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/306 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-07-24 14:07:13.000 UTC (5 months ago) |
| **Updated** | 2025-07-24 14:07:13.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

`macos-intel` (i.e. `macos-13`) runner had to be removed from build-gems run because it cannot download the CLI to do a smoke test presumably because it does not have latest CA certificates. It is a low priority platform anyways and updating the certificates is non-trival (e.g. here's Python's solution: https://github.com/python/cpython/blob/d8fa40b08da60a711311751891fa830cb4ae77f3/Mac/BuildScript/resources/install_certificates.command).


---

<a id="293"></a>

### #293: [Bug] Do not drop namespace from activity/workflow name

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/293 |
| **State** | CLOSED |
| **Author** | laurynas (Laurynas Butkus) |
| **Created** | 2025-07-01 13:18:55.000 UTC (6 months ago) |
| **Updated** | 2025-07-01 13:44:58.000 UTC |
| **Closed** | 2025-07-01 13:44:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm creating activities and workflows using ruby modules as namespaces.

### Describe the bug

Unless specified explicitly, workflow and activity names are generated from the class names, but namespace is dropped. It can cause clashes, if the same class name is used in different namespaces.

https://github.com/temporalio/sdk-ruby/blob/v0.4.0/temporalio/lib/temporalio/workflow/definition.rb#L453
https://github.com/temporalio/sdk-ruby/blob/v0.4.0/temporalio/lib/temporalio/activity/definition.rb#L89

It is counter-intuitive and may cause unexpected issues.

### Minimal Reproduction

class `Users::CreateWorkflow` -> workflow name becomes  `CreateWorkflow`
class `Accounts::CreateWorkflow` -> workflow name becomes  `CreateWorkflow`

### Environment/Versions

Gem version 0.4.0

### Workaround

It is possible to workaround the issue by specifying `workflow_name` in your workflow class or creating your own base classes like:

```ruby
class ApplicationWorkflow <  Temporalio::Workflow::Definition
  # explicitly set the workflow name to the class name including namespace to avoid collisions,
  # because sdk drops namespace from the workflow name by default
  def self.inherited(subclass)
    subclass.workflow_name subclass.name.to_s
    super
  end
end
```

```ruby
class ApplicationActivity <  Temporalio::Activity::Definition
  # explicitly set the activity name to the class name including namespace to avoid collisions,
  # because sdk drops namespace from the activity name by default
  def self.inherited(subclass)
    subclass.activity_name subclass.name.to_s
    super
  end
end
```




#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-07-01 13:22:16.000 UTC</summary>

> It can cause clashes, if the same class name is used in different namespaces.

Using the unqualified class name by default is by design here and in other SDKs. This same ambiguity would happen if the same workflow type/function name were in different packages in Go, packages in Java, modules in Python, namespaces in .NET, etc. It is understood that in most Ruby contexts the fully qualified name is used to disambiguate even more than those other languages, but this default is chosen for SDK/CLI/UI compatibility/clarity. If you need to deviate from the default, you can use `activity_name`/`workflow_name`, e.g.

```ruby
class ApplicationActivity < Temporalio::Activity::Definition
  activity_name 'my-custom-name'

  def execute
    # ...
  end
end
```

</details>

<details>
<summary><strong>laurynas</strong> commented on 2025-07-01 13:44:58.000 UTC</summary>

@cretz thanks for the clarification!

Reactions: 👍 1

</details>


---

<a id="279"></a>

### #279: [Bug] Improperly accessing current activity context in outbound heartbeat

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/279 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-06 15:39:16.000 UTC (7 months ago) |
| **Updated** | 2025-07-02 15:58:33.000 UTC |
| **Closed** | 2025-06-09 15:49:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

The activity outbound implementation for heartbeat is using the `current` to get the activity info and task token. It should have this task token provided in another manner and not access the context in heartbeat because heartbeat may be happening in a different thread/fiber.

#### Comments (2)

<details>
<summary><strong>jeromepl</strong> commented on 2025-07-02 13:36:39.000 UTC</summary>

Hi @cretz do you have a rough idea when a new version of this gem will be released?
We are blocked from releasing our migration from the coinbase SDK to this one by this bug fix, so I am trying to see if it's worth investing in building this gem from source in our CI/CD or if we can just wait a little for a new version release.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-07-02 15:58:33.000 UTC</summary>

There were a couple of other issues we were trying to solve before next release (namely #271 and some bugs), so no explicit timeline though hopefully not too long. I just triggered a re-run of https://github.com/temporalio/sdk-ruby/actions/runs/15935636842 which should, if/when passes, upload gem artifacts for each platform that you can download.

Reactions: ❤️ 1

</details>


---

<a id="276"></a>

### #276: [Bug] Test env does not return result of workflow with child workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/276 |
| **State** | CLOSED |
| **Author** | dimroc (Dimitri Roche) |
| **Created** | 2025-05-29 17:45:36.000 UTC (7 months ago) |
| **Updated** | 2025-06-02 16:28:52.000 UTC |
| **Closed** | 2025-06-02 16:28:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I am trying to test a workflow that spins up one child workflow inside a future.

### Describe the bug

1. Without a child workflow, the following code returns a `result` one can assert against.
2. With a child workflow, the following code has `result` nil, even if you try to wait for workflow handle. This happens often, but not all the time, implying a race condition?

However, in both scenarios, it's very evident that all workflows, child workflows, and activities are running. 

```ruby
      Temporalio::Testing::WorkflowEnvironment.start_time_skipping do |env|
        worker = Temporalio::Worker.new(
          client: env.client,
          task_queue: "tq-#{SecureRandom.uuid}",
          workflows: [
            AnalyzerUploadWorkflow,
            AnalyzerDocumentCreationWorkflow # Child workflow
          ],
          activities: [
            AnalyzerUploadActivities::BestPdfSplit,
            PdfImageActivities::Ingestion,
            AnalyzerDocument::CreationActivity
          ]
        )

        result = worker.run do
          env.client.execute_workflow(
            AnalyzerUploadWorkflow,
            analyzer_upload.id,
            id: workflow_id,
            task_queue: worker.task_queue
          )
        end

        expect(result).to be_present # <--- fails if AnalyzerUploadWorkflow is refactored to have child workflow
      end

```


### Minimal Reproduction

TBD

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: M3 MacBook
- Temporal Version: Ruby SDK 0.4
- Are you using Docker or Kubernetes or building Temporal from source? Temporal test suite


#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-05-29 19:53:15.000 UTC</summary>

Can you provide a full standalone replication that includes the workflows? Feel free to make it as small as necessary to show that a workflow with a child workflow is not returning the value you expect. Also, can you confirm this same behavior exists with `start_local` instead of `start_time_skipping` (just to confirm this is not something specific to the time-skipping test server which could have an issue with child workflows in this case somehow)?

Reactions: 👍 1

</details>

<details>
<summary><strong>dimroc</strong> commented on 2025-06-02 16:28:51.000 UTC</summary>

I'm unable to reproduce this with a minimal example so I'll close for now.

</details>


---

<a id="272"></a>

### #272: [Feature Request] Time#iso8601 improperly considered illegal, look into excluding

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/272 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-15 15:48:56.000 UTC (7 months ago) |
| **Updated** | 2025-06-27 18:42:34.000 UTC |
| **Closed** | 2025-06-27 18:42:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

A user calling `Time#iso8601` is getting a trace with:

```
/usr/local/bundle/ruby/3.3.0/gems/temporalio-0.4.0-aarch64-linux/lib/temporalio/internal/worker/workflow_instance/illegal_call_tracer.rb:66:in `block in initialize'                                                                
/usr/local/lib/ruby/3.3.0/time.rb:82:in `zone_offset'
/usr/local/lib/ruby/3.3.0/time.rb:640:in `xmlschema'
```

This is because the second parameter at https://github.com/ruby/ruby/blob/5124f9ac7513eb590c37717337c430cb93caa151/lib/time.rb#L82 is asking for current time. Ug. We need to find some way to exclude this.

Right now we only accept a basic hash of illegal calls. We probably need a more advanced abstraction for illegal time skipping that allows a workflow-stateful stack to skip checking further down. Put it behind a very generic "check illegal" abstract class so others can have implementations.

#### Comments (2)

<details>
<summary><strong>igillis-clara</strong> commented on 2025-06-18 16:41:44.000 UTC</summary>

Ideally it could be judicious about `initialize` as well. If it's called with arguments and a timezone, I don't believe there is any nondeterminism issue. This comes up when trying to deserialize `datetime` strings using the default `ActiveModel` deserialization.

https://github.com/rails/rails/blob/v7.1.5.1/activemodel/lib/active_model/type/helpers/time_value.rb#L76

https://github.com/ruby/ruby/blob/v3_3_8/timev.rb#L409

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-06-20 18:22:32.000 UTC</summary>

👍 Yes, we need to support `Time#initialize` with deterministic parameters. It's a little wonky with TracePoint to do something that advanced (inspect parameters via binding), but it can be done and we will have tests confirming it.

</details>


---

<a id="268"></a>

### #268: [Feature Request] Investigate `test_metric_basics` flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/268 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-14 19:25:31.000 UTC (7 months ago) |
| **Updated** | 2025-07-24 16:12:17.000 UTC |
| **Closed** | 2025-07-24 16:12:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Getting flake like:

```
RuntimeTest#test_metric_basics = Full cause chain:
Exception: Minitest::Assertion - Expected: 1
  Actual: 2
Backtrace:
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/vendor/bundle/ruby/3.4.0/gems/minitest-5.25.5/lib/minitest/assertions.rb:176:in 'Minitest::Assertions#assert'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/vendor/bundle/ruby/3.4.0/gems/minitest-5.25.5/lib/minitest/assertions.rb:216:in 'Minitest::Assertions#assert_equal'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/test/runtime_test.rb:14:in 'RuntimeTest#assert_metric_line'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/test/runtime_test.rb:80:in 'RuntimeTest#test_metric_basics'
```

Rarely in CI

#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2025-05-19 23:44:16.000 UTC</summary>

There is something strange with OTel where it is putting some strange metrics up in Prometheus that don't have the attributes right as we recorded. Commenting out for now, but revisit when upgrading OTel as part of https://github.com/temporalio/sdk-core/issues/862.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-07-24 16:12:17.000 UTC</summary>

Have not seen this issue since Core upgrade, closing for now, but will reopen if seen again

</details>


---

<a id="255"></a>

### #255: [Bug] Workflow info start time should be the workflow start time not the first task start time

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/255 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-24 15:05:30.000 UTC (8 months ago) |
| **Updated** | 2025-05-20 00:22:12.000 UTC |
| **Closed** | 2025-05-20 00:22:12.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the bug

Change the workflow info start time to be the workflow's start time. In Python and .NET (https://github.com/temporalio/sdk-python/issues/849 and https://github.com/temporalio/sdk-dotnet/issues/462) we have backwards compatibility constraints causing us to make a new field and document the difference, but Ruby is not yet GA, so we can make this alteration.


---

<a id="239"></a>

### #239: [Feature Request] Allow use of io_wait-based fiber calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/239 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-25 18:35:18.000 UTC (9 months ago) |
| **Updated** | 2025-04-15 17:57:28.000 UTC |
| **Closed** | 2025-04-15 17:57:27.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

Make a new `Temporalio::Workflow::Unsafe.io_enabled` helper (akin to `illegal_call_tracing_disabled`) and if in that context, allow `io_wait` fiber scheduler calls to go through, otherwise fail with clear error why it is failing. Today it's a TODO at
At https://github.com/temporalio/sdk-ruby/blob/6218c1f4bcbbe9e11b12357379158bf0d75998ed/temporalio/lib/temporalio/internal/worker/workflow_instance/scheduler.rb#L139-L142


---

<a id="188"></a>

### #188: [Feature Request] Signal-with-start and update-with-start

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/188 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-08 20:22:38.000 UTC (1 years ago) |
| **Updated** | 2025-02-11 21:15:18.000 UTC |
| **Closed** | 2025-02-11 21:15:18.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

In Python and .NET we had assumed the movement was towards reusing the existing start-workflow call for signal/update/whatever-else with start. But the design has shifted away from that and to specific methods, so we should do the same in Ruby. We need the following methods on client:

* `signal_with_start_workflow` - accepts signal, signal args, required `WithStartWorkflowOperation`, and returns workflow handle
* `start_update_with_start_workflow` - accepts update, update args/options, required `WithStartWorkflowOperation`, and returns update handle
* `execute_update_with_start_workflow` - accepts update, update args/options, required `WithStartWorkflowOperation`, and returns update result


---

<a id="176"></a>

### #176: [Feature Request] Buffered metrics for user use

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/176 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-11-04 14:48:25.000 UTC (1y 2m ago) |
| **Updated** | 2025-04-09 20:35:03.000 UTC |
| **Closed** | 2025-04-09 20:35:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Like Python, user needs to be able to provide a metric buffer to the runtime that is filled with buffered metrics as an alternative to OTel and Prometheus


#### Comments (2)

<details>
<summary><strong>candidosales</strong> commented on 2024-12-19 04:30:09.000 UTC</summary>

@cretz , I'm interested in contributing; if you give me direction, I can help you implement those features. 😊

I have experience with Ruby and Golang and use Temporal at work in our Ruby services.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-12-19 13:00:39.000 UTC</summary>

Since it is under so much active development right now, it would be a bit difficult to contribute. We have a large PR coming within the next few weeks for full workflow support that changes so much it may not be worth contributing at least until then. Are you looking to contribute the metric buffer implementation specifically? It is a bit advanced because it requires some specialized Rust side work.

Overall it is a bit difficult to contribute at this early stage until we have a stable release. But we can probably use contribution to samples soon or in general just getting feedback from users on the SDK. Feel free to join us on #ruby-sdk on Slack (https://t.mp/slack) to give feedback or just discuss Ruby in general.

Reactions: 👍 1

</details>


---

<a id="79"></a>

### #79: Find a way to mark unstable/private API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/79 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-01 12:23:56.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-19 14:45:05.000 UTC |
| **Closed** | 2022-12-19 14:45:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (2)

<details>
<summary><strong>laertispappas</strong> commented on 2022-12-01 17:16:00.000 UTC</summary>

The most common thing I've seen here is via comments / documentation. If we want to force 
"java" like visibility here maybe a combination of `private_constant` and `private/protected` scope can solve the issue. Although this will goes a bit away from Ruby idioms though.

Example:

```
# public scope
module. Temporal
  class Worker
    def initialize(...)
       @activity_worker = create_activity_worker(core_worker, data_converter, activity_executor)
    end
  end  
  
  
  # Private scope
  class Worker
     class Activity; end
     private_constant Activity
    
     private

     def create_activity_worker(...)
        Activity.new(...)
     end
  end
  
```

</details>

<details>
<summary><strong>antstorm</strong> commented on 2022-12-15 20:14:26.000 UTC</summary>

I think this one should work well for us — https://rubydoc.info/gems/yard/file/docs/Tags.md#private

</details>


---

<a id="373"></a>

### #373: ## Bug Report: Fiber state corruption after `Workflow.timeout` expires on x86_64

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/373 |
| **State** | CLOSED |
| **Author** | NielsKSchjoedt (Niels Kristian Schjødt) |
| **Created** | 2026-01-05 23:10:37.000 UTC (3 days ago) |
| **Updated** | 2026-01-07 17:23:21.000 UTC |
| **Closed** | 2026-01-07 17:23:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Bug Report: Fiber state corruption after `Workflow.timeout` expires on x86_64

### What are you really trying to do?

We're building a long-running opportunity nurturing workflow that waits for customer replies. The workflow uses `Workflow.timeout` to wait up to 48 hours for a signal (customer reply), then calls an activity to update database state when the timeout expires.

```ruby
# Simplified workflow pattern
loop do
  received = false
  Temporalio::Workflow.timeout(48.hours) do
    Temporalio::Workflow.wait_condition { @customer_replied }
    received = true
  end
  
  unless received
    # Timeout expired - transition to paused state
    Temporalio::Workflow.execute_activity(
      UpdateStateActivity,
      { "state" => "paused" },
      start_to_close_timeout: 30
    )
    break
  end
end
```

### Describe the bug

When `Workflow.timeout` expires (not cancelled by condition becoming true), calling `Workflow.execute_activity` immediately afterward crashes with:

```
NoMethodError: undefined method 'status' for true
```

The crash occurs inside the SDK at `outbound_implementation.rb:177`:

```ruby
# temporalio-1.1.0/lib/temporalio/internal/worker/workflow_instance/outbound_implementation.rb:177
case resolution.status  # <-- resolution is `true` instead of a Resolution object
```

This suggests `Fiber.yield` is returning `true` instead of the expected `Resolution` object after the timeout path executes.

**Key observations:**
- Only happens on **x86_64-linux** architecture
- Does **NOT** happen on **aarch64** (M1/M2 Mac)
- Only occurs when timeout **expires** (not when cancelled by condition becoming true)
- Activity code never executes - crash is before activity dispatch
- Workflow replays and retries continuously fail with same error

**Workaround:** Adding `Workflow.sleep(0)` before `execute_activity` forces a clean fiber yield/resume cycle and fixes the issue:

```ruby
unless received
  Temporalio::Workflow.sleep(0)  # <-- Workaround
  Temporalio::Workflow.execute_activity(...)
end
```

### Minimal Reproduction

Unfortunately we don't have a minimal reproduction yet, but here's the pattern that triggers it:

```ruby
require 'temporalio'

class UpdateStateActivity < Temporalio::Activity::Definition
  def execute(params)
    puts "Activity executed with: #{params.inspect}"
    { "success" => true }
  end
end

class TimeoutBugWorkflow < Temporalio::Workflow::Definition
  def execute
    @signal_received = false
    
    received = false
    Temporalio::Workflow.timeout(5.seconds) do
      Temporalio::Workflow.wait_condition { @signal_received }
      received = true
    end
    
    unless received
      # This crashes on x86_64 when timeout expires
      Temporalio::Workflow.execute_activity(
        UpdateStateActivity,
        { "state" => "paused" },
        start_to_close_timeout: 30
      )
    end
    
    { "completed" => true }
  end
  
  workflow_signal
  def signal_received
    @signal_received = true
  end
end
```

**To reproduce:**
1. Start workflow on x86_64 Linux
2. Do NOT send the signal (let timeout expire)
3. After 5 seconds, workflow crashes with `undefined method 'status' for true`

### Environment/Versions

- **OS and processor:** x86_64 Linux (Hetzner cloud server, Debian-based Docker container)
- **Ruby version:** 3.4.0
- **Temporal SDK version:** `temporalio` gem 1.1.0 (x86_64-linux platform)
- **Temporal Server:** Self-hosted via Docker Compose (version from temporalio/server image)
- **Works on:** aarch64 (Apple M1/M2 Mac) with same Ruby and gem versions
- **Fails on:** x86_64-linux only

### Additional context

**Full stack trace:**
```
/usr/local/bundle/ruby/3.4.0/gems/temporalio-1.1.0-x86_64-linux/lib/temporalio/internal/worker/workflow_instance/outbound_implementation.rb:177:in 'execute_activity_once'
/usr/local/bundle/ruby/3.4.0/gems/temporalio-1.1.0-x86_64-linux/lib/temporalio/internal/worker/workflow_instance/outbound_implementation.rb:134:in 'block in execute_activity_with_local_backoffs'
<internal:kernel>:168:in 'Kernel#loop'
/usr/local/bundle/ruby/3.4.0/gems/temporalio-1.1.0-x86_64-linux/lib/temporalio/internal/worker/workflow_instance/outbound_implementation.rb:133:in 'execute_activity_with_local_backoffs'
/usr/local/bundle/ruby/3.4.0/gems/temporalio-1.1.0-x86_64-linux/lib/temporalio/internal/worker/workflow_instance/outbound_implementation.rb:59:in 'execute_activity'
/usr/local/bundle/ruby/3.4.0/gems/temporalio-1.1.0-x86_64-linux/lib/temporalio/internal/worker/workflow_instance/context.rb:107:in 'execute_activity'
/usr/local/bundle/ruby/3.4.0/gems/temporalio-1.1.0-x86_64-linux/lib/temporalio/workflow.rb:163:in 'execute_activity'
```

**Hypothesis:** The fiber scheduler's handling of timeout expiration leaves some internal state in an inconsistent state on x86_64, causing the next `Fiber.yield` to return a boolean instead of the expected `Resolution` object. The `sleep(0)` workaround likely resets this state by forcing a clean yield/resume cycle.

**We're happy to provide more debugging information or test patches if helpful!**

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2026-01-06 14:19:30.000 UTC</summary>

Thanks! Interesting, I think what may be happening is that we are recording the "current fiber" for both the wait condition and the execute activity, and then yielding in both spots for that to be resumed with a value. But when the wait timeout occurs, that wait condition is left around. So at some point, we resolve that fiber with the result of the wait condition but it's the execute activity that is currently yielded. My guess is we are not properly removing the wait condition when an exception is raised from yield (which is what timeout does).

> Unfortunately we don't have a minimal reproduction yet

I suspect it's because you need to send the signal after the timeout but while the activity is executing (e.g. could have the activity send the signal back to the workflow).

This definitely appears to be a bug and we are looking into it now.

</details>


---

<a id="360"></a>

### #360: Problem: Testing Temporal Workflows with Signals in Ruby SDK Time-Skipping Environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/360 |
| **State** | OPEN |
| **Author** | NielsKSchjoedt (Niels Kristian Schjødt) |
| **Created** | 2025-11-09 22:46:12.000 UTC (2 months ago) |
| **Updated** | 2025-11-10 15:08:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

# Problem: Testing Temporal Workflows with Signals in Ruby SDK Time-Skipping Environment

## Context
I'm testing a workflow in the Temporalio Ruby SDK that uses `wait_condition` to wait for signals. The workflow works correctly in production, but I cannot test the signal-driven continuation in the time-skipping test environment (`Temporalio::Testing::WorkflowEnvironment.start_time_skipping`).

## Workflow Pattern (Simplified)
```ruby
class PipelineExecutionWorkflow < Temporalio::Workflow
  workflow_signal
  def customer_replied
    @customer_replied = true
  end

  def execute(opportunity_id, pipeline_id)
    # Step 1: Send initial email
    send_email_activity(opportunity_id)
    
    # Step 2: Wait for customer reply signal
    Temporalio::Workflow.timeout(48.hours) do
      Temporalio::Workflow.wait_condition { @customer_replied }
    end
    
    # Step 3: Process customer reply (extract data, send AI response)
    if @customer_replied
      extract_and_respond(opportunity_id)
    end
    
    { "success" => true }
  end
end
```

## What I've Tried in Tests

```ruby
Temporalio::Testing::WorkflowEnvironment.start_time_skipping do |env|
  worker = Temporalio::Worker.new(
    client: env.client,
    task_queue: "test-queue",
    workflows: [PipelineExecutionWorkflow],
    activities: [SendEmailActivity, ExtractActivity]
  )
  
  worker.run do
    # Start workflow (doesn't wait for completion)
    workflow_handle = env.client.start_workflow(
      PipelineExecutionWorkflow,
      opportunity_id,
      pipeline_id,
      id: "test-pipeline-#{opportunity_id}",
      task_queue: "test-queue"
    )
    
    # Give time for initial email to be sent
    sleep 0.5
    
    # Check workflow state - shows it's waiting
    state = workflow_handle.query("get_state")
    # => {"waiting_for_signal" => true, "customer_replied" => false}
    
    # Send the signal
    workflow_handle.signal("customer_replied")
    
    # Check state again - signal was received!
    state_after = workflow_handle.query("get_state")
    # => {"waiting_for_signal" => false, "customer_replied" => true}
    
    # But when I try to get the result, it times out or returns nil
    result = workflow_handle.result  # ← TIMES OUT or returns nil
    # The workflow doesn't continue executing after receiving the signal
  end
end
```

## Observed Behavior
1. ✅ Workflow starts successfully
2. ✅ Initial email activity executes
3. ✅ Workflow enters wait state (`wait_condition`)
4. ✅ Signal is received (verified via query - `@customer_replied` becomes `true`)
5. ❌ **Workflow doesn't continue execution** after signal received
6. ❌ `workflow_handle.result` times out or workflow appears "stuck"

## Questions

**With the Temporal Ruby SDK source code available:**

1. **Is this a known limitation** of the time-skipping test environment with `wait_condition` and signals?

2. **What is the correct way** to test workflows that use `wait_condition` with signals in the time-skipping environment?

3. **Should I use a different testing approach** for signal-driven workflows? (e.g., real Temporal server, different test helper methods)

4. **Is there a way to manually advance time** or "wake up" the workflow after sending a signal in the test environment?

5. **Are there any special considerations** or setup required for testing signal-driven workflows that use `wait_condition`?

## Additional Context
- Ruby SDK version: 1.0.0 (from Gemfile)
- The workflow works perfectly in production with real Temporal server
- Synchronous workflows (without signals/wait) test fine in time-skipping environment
- I've tried both `start_workflow` (non-blocking) and `execute_workflow` (blocking) - neither works for the signal continuation


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-11-10 15:06:19.000 UTC</summary>

Mentioned at https://github.com/temporalio/sdk-ruby?tab=readme-ov-file#workflow-testing (though maybe not clearly enough), the automatic time-skipping doesn't kick in until you wait for the workflow result. So the workflow does not progress automatically until you wait for the result (and no activities are running). But you can make it progress manually by calling `sleep` on the environment.

> I've tried both start_workflow (non-blocking) and execute_workflow (blocking) - neither works for the signal continuation

I'd be curious to see what this looks like as the latter should progress automatically assuming the activity runs as expected (i.e. one with its name is registered). Usually you'd have to run `execute_workflow` in a background thread and you wouldn't get the handle to even make those signal calls on (so if the activity is registered, a 48h timeout would occur immediately based on the code).

(also feel free to join us on `#ruby-sdk` channel on [Slack](https://t.mp/slack) if easier to chat about time-skipping test environments and other Ruby things)

</details>


---

<a id="359"></a>

### #359: [Feature Request] Disable durable scheduler for all OTel in-workflow calls, not just some

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/359 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-11-07 19:46:01.000 UTC (2 months ago) |
| **Updated** | 2025-12-02 23:10:11.000 UTC |
| **Closed** | 2025-12-02 23:10:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

~Add a default-false boolean `disable_durable_workflow_scheduler` option to `Temporalio::Contrib::OpenTelemetry::TracingInterceptor.new` that, when set to `true`, runs OTel code from the workflow interceptor in `Temporalio::Workflow::Unsafe.durable_scheduler_disabled`.~ See first comment

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-12-02 15:08:54.000 UTC</summary>

After research, we already disable durable scheduler, it's just that some libraries are monkey-patching `Context.current` which can make it non-deterministic (e.g. [DataDog](https://github.com/DataDog/dd-trace-rb/blob/f88393d0571806b9980bb2cf5066eba60cfea177/lib/datadog/opentelemetry/api/context.rb#L184)). So we just need to disable the durable scheduler for every OTel call, not just the obvious non-deterministic ones.

</details>


---

<a id="334"></a>

### #334: [Feature Request] Ensure fibers and workflow instances are properly GC'd on workflow eviction

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/334 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-08 20:16:12.000 UTC (4 months ago) |
| **Updated** | 2025-09-11 15:55:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

~It was originally thought that if nothing in user code was referencing a suspended fiber anymore, it would get garbage collected (this is how tasks work in .NET). However, threads actually keep a strong reference to suspended fibers and we reuse threads. On workflow eviction, any number of fibers may be suspended, including the primary one.~

~The only way to remove a strong reference to a fiber on a thread is to complete the fiber, and the only way to complete the fiber is resume until complete (potentially raising an exception inside it to force it to resume). So we should go over known fibers and raise a non-standard-error exception inside them. This needs to take an approach similar to https://github.com/temporalio/sdk-python/pull/499 where we ignore any side-effects that could be caused by raising (e.g. don't make an activity command if the user did it inside `ensure`). Make sure there is a test that tries to make uncollected fibers in any way it can and confirm. The `test_confirm_garbage_collect` test (that we had to skip pending this issue) has some utilities/designs here.~

EDIT: These statements about threads holding strong references to fibers are no longer deemed accurate, see first comment.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-09-11 15:55:37.000 UTC</summary>

After some research, it seems that even suspended fibers are subject to garbage collection if all references to them are removed (which means the scheduler is garbage collected).

However, we are struggling to provide a good test that proves this due to GC inconsistencies. Can look at efforts in #336, where we fashioned a test that works when just executing the single garbage collect test, but not when running with the whole suite. Can also look at efforts in #335 where we did even more test attempts and have an implementation of force-finishing fibers when we thought that was required.

Overall, we do not believe there is a memory leak, but we struggle to write a deterministic test for this. We can revisit if issues appear.

</details>


---

<a id="320"></a>

### #320: [Feature Request] Switch scheduler ready fiber list from array to queue

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/320 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-18 22:09:22.000 UTC (4 months ago) |
| **Updated** | 2025-08-19 20:41:00.000 UTC |
| **Closed** | 2025-08-18 22:20:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Use queue w/ pop nonblock. Using an array over and over with `shift` + `<<` is bad memory practice.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-08-18 22:20:13.000 UTC</summary>

Note, queue is a bit blocked on how it is used with our fiber scheduler. The way we completely drain this array means it's actually not a big deal here.

</details>


---

<a id="273"></a>

### #273: [Feature Request] Investigate, document, and validate fork behavior

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/273 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-28 19:52:06.000 UTC (7 months ago) |
| **Updated** | 2025-07-23 18:37:20.000 UTC |
| **Closed** | 2025-07-23 18:37:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Objects in Core-based SDKs cannot be used across forks. But they can be created post-fork no problem. As part of this issue we should:

* Confirm behavior with the Rails sample and fork-based server e.g. puma and make sure the sample still works with forking
* Document that Temporal objects cannot be used across a fork (i.e. created before, accessed after)
* Document that Temporal clients should not be used pre-fork since that by default creates a runtime (and possibly document how to provide an alternative runtime if a user must use a Temporal client on both sides of the fork)
* Consider eagerly validating that a runtime and/or client is only used on the process it was created on (and raise exception with clear message if it is used across fork)

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-07-21 13:23:32.000 UTC</summary>

After some thought, it is best that we store the process ID on the runtime and make sure every client call and every worker call are on the same PID as the runtime.

</details>


---

<a id="271"></a>

### #271: [Feature Request] Support "hints" for payload conversion

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/271 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-15 12:48:01.000 UTC (7 months ago) |
| **Updated** | 2025-07-14 13:02:30.000 UTC |
| **Closed** | 2025-07-14 13:02:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

* Add `activity_input_hint`, `activity_output_hint`, `workflow_input_hint`, and `workflow_output_hint` definition methods to activities/workflows, and add `input_hints` and `output_hint` to `workflow_signal` (except output), `workflow_query`, and `workflow_update`
  * While these are documented to accept classes, technically they can accept anything
  * For ease-of-use, we can accept `input_hint` singular on `workflow_signal`, `workflow_query`, and `workflow_update` pieces that is mutually exclusive with the array form
* Look at other places that may need hints such as memo and heartbeat detail deserialization
* Add `hint` optional keyword argument to `PayloadConverter#from_payload`/`DataConverter#from_payload` and `hints` to `PayloadConverter#from_payloads`/`DataConverter#from_payloads`
  * Should we pass this at serialization time too? We aren't going to use it by default but a custom converter may, so might as well

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-05-19 12:24:03.000 UTC</summary>

After some discussion, supporting `Struct` and `Data` types natively is fraught with complication on nested field types. If needed, it can be tackled later. Right now, just the ability to provide hints is good enough.

</details>


---

<a id="264"></a>

### #264: [Feature Request] Investigate `test_queue` flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/264 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-12 18:16:13.000 UTC (8 months ago) |
| **Updated** | 2025-07-24 16:12:12.000 UTC |
| **Closed** | 2025-07-24 16:12:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

During [this CI run](https://github.com/temporalio/sdk-ruby/actions/runs/14978028437/job/42075181750?pr=263) (may be gone by the time this is being read), we got this error:

```
WorkerWorkflowTest#test_queue = I, [2025-05-12T17:04:51.532128 #12857]  INFO -- : Block completed, beginning worker shutdown
time=2025-05-12T17:04:51.654 level=ERROR msg="service failures" operation=AddWorkflowTask wf-namespace=default grpc_code=Unavailable wf-id=wf-6d62c599-c9fb-440e-bba2-86be625ce346 wf-run-id=0196c574-163a-7888-95b9-58d59e75f99e error="sticky worker unavailable, please use original task queue."
I, [2025-05-12T17:04:51.754911 #12857]  INFO -- : Block completed, beginning worker shutdown
I, [2025-05-12T17:04:52.779953 #12857]  INFO -- : Block completed, beginning worker shutdown
I, [2025-05-12T17:04:52.989104 #12857]  INFO -- : Block completed, beginning worker shutdown
time=2025-05-12T17:04:53.225 level=ERROR msg="service failures" operation=AddWorkflowTask wf-namespace=default grpc_code=Unavailable wf-id=wf-d07f6b97-bfc0-4109-bce6-630a2440e540 wf-run-id=0196c574-1c5b-71fe-a17f-b73c02c59078 error="sticky worker unavailable, please use original task queue."
E, [2025-05-12T17:04:54.834755 #12857] ERROR -- : Block failure (beginning worker shutdown)
E, [2025-05-12T17:04:54.834808 #12857] ERROR -- : 1c1
< "0196c574-de2f-7532-8408-fe9253e8cb4a"
---
> "0196c574-e62d-7731-b052-6d233ceeb4fa"
 (Minitest::Assertion)
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/vendor/bundle/ruby/3.4.0/gems/minitest-5.25.5/lib/minitest/assertions.rb:176:in 'Minitest::Assertions#assert'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/vendor/bundle/ruby/3.4.0/gems/minitest-5.25.5/lib/minitest/assertions.rb:216:in 'Minitest::Assertions#assert_equal'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/test/worker_workflow_test.rb:1399:in 'block in WorkerWorkflowTest#test_queue'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/test/workflow_utils.rb:63:in 'block in WorkflowUtils#execute_workflow'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/lib/temporalio/internal/worker/multi_runner.rb:42:in 'block in Temporalio::Internal::Worker::MultiRunner#apply_thread_or_fiber_block'
Full cause chain:
Exception: Minitest::Assertion - 1c1
< "0196c574-de2f-7532-8408-fe9253e8cb4a"
---
> "0196c574-e62d-7731-b052-6d233ceeb4fa"
Backtrace:
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/vendor/bundle/ruby/3.4.0/gems/minitest-5.25.5/lib/minitest/assertions.rb:176:in 'Minitest::Assertions#assert'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/vendor/bundle/ruby/3.4.0/gems/minitest-5.25.5/lib/minitest/assertions.rb:216:in 'Minitest::Assertions#assert_equal'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/test/worker_workflow_test.rb:1399:in 'block in WorkerWorkflowTest#test_queue'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/test/workflow_utils.rb:63:in 'block in WorkflowUtils#execute_workflow'
/home/runner/work/sdk-ruby/sdk-ruby/temporalio/lib/temporalio/internal/worker/multi_runner.rb:42:in 'block in Temporalio::Internal::Worker::MultiRunner#apply_thread_or_fiber_block'
```

It looks like the first workflow can complete before we start the second in rare cases. We need to also have a failed-only ID reuse policy on the last execute workflow of this test.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-07-24 16:12:12.000 UTC</summary>

Have not seen this issue since Core upgrade, closing for now, but will reopen if seen again

</details>


---

<a id="261"></a>

### #261: [Feature Request] Use exception full message for workflow/activity task logs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/261 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-05 14:55:10.000 UTC (8 months ago) |
| **Updated** | 2025-06-26 13:37:00.000 UTC |
| **Closed** | 2025-06-26 13:37:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Currently we just log the exception and not the exception full message. For activities and workflow task failures (and any other logs where we just log the error), use the `full_message`. This includes the stack trace which is helpful.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-06-26 13:37:00.000 UTC</summary>

After review, it looks like we are logging the full activity and workflow task failure by sending the exception as a separate log statement which seems to show the stack trace. Closing.

</details>


---

<a id="259"></a>

### #259: [Bug] auto_time_skipping_disabled not resuming after block exit

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/259 |
| **State** | CLOSED |
| **Author** | igillis-clara (Ian Gillis) |
| **Created** | 2025-05-02 19:19:01.000 UTC (8 months ago) |
| **Updated** | 2025-05-02 21:13:21.000 UTC |
| **Closed** | 2025-05-02 21:13:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm trying to write a test for this (simplified) workflow

```
  def execute(input)
    @start_date = Date.parse(input.start_date_str)

    execute_activity(...)

    update_status :not_started

    sleep_until next_week_at("wednesday", "8:00")

    update_status :complete
  end

  workflow_update
  def edited
    update_status :in_progress if @status == :not_started
  end

```
Specifically, I want to:
- Disable auto time skipping to test that the `update` sets the status to `in_progress` correctly
- Resume auto time skipping and verify that the workflow result is the expected value

### Describe the bug

I have a test like:

```
    Temporalio::Workflow.stub :now, Time.new(2025, 4, 16) do
      Temporalio::Testing::WorkflowEnvironment.start_time_skipping(logger: Rails.logger) do |env|
        with_worker(env) do |worker|
          handle = env.client.start_workflow(...)
          env.auto_time_skipping_disabled do
            until (timesheet = Timesheet.find_by(placement:, starts_on:))
              sleep(0.5)
            end

            assert_equal handle.query(:status), "not_started"

            handle.update(:edited)

            assert_equal handle.query(:status), "in_progress"
          end
          # Times out before reaching here
          assert_equal handle.result, "complete"
        end
      end
    end

```

### Minimal Reproduction

Code samples above. Will write a test in the PR.

### Environment/Versions

- Ruby SDK version `0.4.0`
- Apple M2 Max running Sequoia 15.4.1
- Temporal cloud
- Minitest

### Additional context

I believe the initialization of  `already_disabled` in `auto_time_skipping_disabled` is the problem. Just need to negate it.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-05-02 20:54:49.000 UTC</summary>

Thanks for the PR! LGTM

</details>


---

<a id="254"></a>

### #254: [ruby] SDK support for activity reset

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/254 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-04-23 19:08:04.000 UTC (8 months ago) |
| **Updated** | 2025-09-11 21:40:17.000 UTC |
| **Closed** | 2025-09-11 21:40:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/620

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-06-09 21:11:54.000 UTC</summary>

Half of this is done in #283, but not marking this complete until we can have a test confirming behavior (there is no released dev server with this functionality atm)

</details>


---

<a id="250"></a>

### #250: [Feature Request] Warn when the server-provided task start time is fairly different than time SDK begins processing the task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/250 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-22 12:23:02.000 UTC (8 months ago) |
| **Updated** | 2025-09-23 20:08:01.000 UTC |
| **Closed** | 2025-09-23 20:08:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/616


#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-09-23 20:08:01.000 UTC</summary>

We're not gonna do this. Too niche.

</details>


---

<a id="238"></a>

### #238: [Feature Request] Serialization context for codecs and converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/238 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-25 15:04:59.000 UTC (9 months ago) |
| **Updated** | 2025-10-07 17:23:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/434

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-10-07 17:23:31.000 UTC</summary>

Make sure to include nexus per https://github.com/temporalio/features/issues/678

</details>


---

<a id="225"></a>

### #225: [Feature Request] Custom slot supplier

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/225 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-24 20:18:07.000 UTC (10 months ago) |
| **Updated** | 2025-09-29 18:11:40.000 UTC |
| **Closed** | 2025-09-29 18:11:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Support custom slot suppliers, e.g. like Python did: https://github.com/temporalio/sdk-python/pull/690

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-09-05 12:34:15.000 UTC</summary>

Make sure tests exist to confirm custom slot supplier slot info has proper fields, see https://github.com/temporalio/features/issues/672

</details>


---

<a id="203"></a>

### #203: [Feature Request] Contributing Guide

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/203 |
| **State** | OPEN |
| **Author** | MikePresman (Mike Presman) |
| **Created** | 2025-01-23 21:01:05.000 UTC (11 months ago) |
| **Updated** | 2025-01-23 22:41:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I'm interested in contributing but with having little to no context on how temporal builds or goes upon building this SDK I'd love a guide.

A contributing.md would suffice or a link or anything the maintainers find appropriate.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-01-23 22:40:31.000 UTC</summary>

Thanks for wanting to contribute!

In the absence of a full contribution guide during the alpha period of the SDK, we have the "Development" section of the README at https://github.com/temporalio/sdk-ruby?tab=readme-ov-file#development that can give pointers on building (though I see it currently says 3.1 Ruby when we now require 3.2, will fix). Looking at the CI runs can also help.

https://github.com/temporalio/samples-ruby is a place where there may be even more contribution value. See the issues there for samples we are missing.

Also, feel free to join us in Slack (https://t.mp/slack) on the `#ruby-sdk` channel to discuss contributions too. 

</details>


---

<a id="190"></a>

### #190: [Feature Request] Ensure signal buffer properly drained when dynamic signal added

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/190 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-13 12:32:27.000 UTC (12 months ago) |
| **Updated** | 2025-01-13 15:57:48.000 UTC |
| **Closed** | 2025-01-13 15:57:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Ensure signal buffer properly drained when dynamic signal added. There is a TODO in #183 for this.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-01-13 15:57:32.000 UTC</summary>

Solving with the rest of workflow stuff in #183

</details>


---

<a id="186"></a>

### #186: [Feature Request] Expose replay-safe metric meter from workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/186 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-08 20:17:16.000 UTC (1 years ago) |
| **Updated** | 2025-01-10 17:28:30.000 UTC |
| **Closed** | 2025-01-10 17:28:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Like Python, .NET, etc, expose replay-safe `Temporalio::Workflow.metric_meter` for recording metrics inside workflows

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-01-10 17:28:25.000 UTC</summary>

This is being handled with the rest of workflow support at #183 

</details>


---

<a id="184"></a>

### #184: [Feature Request] Ractor-based sandboxing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/184 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-08 20:07:40.000 UTC (1 years ago) |
| **Updated** | 2025-01-21 21:05:43.000 UTC |
| **Closed** | 2025-01-21 21:05:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Decide whether we even want Ractor-based sandboxing, then implement it.

This mostly works today except for `Google::Protobuf` (see https://github.com/protocolbuffers/protobuf/issues/19321). But we have all these protos and impl in Rust, so it would not be _that_ hard to make a `method_missing` version of this (which is effectively what the existing Ruby extension does at https://github.com/protocolbuffers/protobuf/tree/main/ruby/ext/google/protobuf_c), just effort and confirming we are ok abandoning the official proto library (which has other benefits such as not clashing with users' protobuf library use).

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-01-21 21:05:41.000 UTC</summary>

It has been decided that while there are a lot of state-isolation benefits to Ractor-based workflows, since `Google::Protobuf` doesn't support them and since they are experimental, it is not worth the effort to require them today. We can revisit when ecosystem support improves.

</details>


---

<a id="172"></a>

### #172: [Bug] Windows CI segfaulting during tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/172 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-17 19:05:19.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-17 21:43:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Looking at CI for Windows, segfaults are continuously occurring during the test portion and it is not known why. This could be related to running the dev server in a mssy2/mingw environment and not Ruby, unsure. Investigate.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-10-17 21:43:08.000 UTC</summary>

So I have some backtraces from gdb like:

```
#0  0x00007ffcc22b7618 in x64-ucrt-ruby330!rb_w32_Sleep () from c:\dls\ruby-3.3.5\bin\x64-ucrt-ruby330.dll
#1  0x00007ffcb14fc9a2 in parking_lot::raw_mutex::RawMutex::lock_slow () from c:\work\tem\sdk-ruby\temporal-sdk-ruby\temporalio\lib\temporalio\internal\bridge\temporalio_bridge.so
#2  0x00007ffcb14e3568 in tokio::runtime::blocking::pool::Inner::run () from c:\work\tem\sdk-ruby\temporal-sdk-ruby\temporalio\lib\temporalio\internal\bridge\temporalio_bridge.so
#3  0x00007ffcb14a3b0a in std::sys::backtrace::__rust_begin_short_backtrace () from c:\work\tem\sdk-ruby\temporal-sdk-ruby\temporalio\lib\temporalio\internal\bridge\temporalio_bridge.so
#4  0x00007ffcb14c4d3f in core::ops::function::FnOnce::call_once{{vtable.shim}} () from c:\work\tem\sdk-ruby\temporal-sdk-ruby\temporalio\lib\temporalio\internal\bridge\temporalio_bridge.so
#5  0x00007ffcb1620a5d in std::sys::pal::windows::thread::Thread::new::thread_start () from c:\work\tem\sdk-ruby\temporal-sdk-ruby\temporalio\lib\temporalio\internal\bridge\temporalio_bridge.so
#6  0x00007ffd6078257d in KERNEL32!BaseThreadInitThunk () from C:\windows\System32\kernel32.dll
#7  0x00007ffd61e4af28 in ntdll!RtlUserThreadStart () from C:\windows\SYSTEM32\ntdll.dll
#8  0x0000000000000000 in ?? ()
```

Similar shown here when I turn on debug symbols. Basically it looks like somehow `parking_lot::raw_mutex::RawMutex::lock_slow` is calling `rb_w32_Sleep` which is so strange. I would expect `rb_w32_Sleep` to segfault if called from a non-Ruby thread (it asks for Ruby thread local info using [TlsGetValue](https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-tlsgetvalue) and always assumes that returns a non-null pointer, but in this case it is a null pointer). I wonder if somehow https://github.com/Amanieu/parking_lot/blob/0.12.3/core/src/thread_parker/windows/bindings.rs#L31 is actually picking up https://github.com/ruby/ruby/blob/v3_3_5/include/ruby/win32.h#L159 due to how the build is working that is putting Ruby headers on the gcc path or included alongside the Rust code. Very confusing.

</details>


---

<a id="167"></a>

### #167: [Feature Request] Activity test environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/167 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 17:35:24.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-17 13:01:43.000 UTC |
| **Closed** | 2024-10-17 13:01:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need activity test environment that can capture heartbeats, inject cancellation, mock info, etc.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-10-08 22:15:13.000 UTC</summary>

This is being added as part of the primary #161 PR.

</details>


---

<a id="140"></a>

### #140: Worker versioning support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/140 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-07-05 16:54:00.000 UTC (2y 6m ago) |
| **Updated** | 2024-07-12 14:10:03.000 UTC |
| **Closed** | 2024-07-12 14:10:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:10:03.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="132"></a>

### #132: [Bug] Release assets bear incorrect version number

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/132 |
| **State** | CLOSED |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-03-23 20:19:01.000 UTC (2y 9m ago) |
| **Updated** | 2024-07-12 14:10:40.000 UTC |
| **Closed** | 2024-07-12 14:10:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug
On GitHub's release page ([example](https://github.com/temporalio/sdk-ruby/releases/tag/v0.1.0-alpha)), assets are systematically named `bridge-0.0.1-ruby...`. The version number should be updated to reflect actual release number.

### Additional context
This version number comes from Bridge's Cargo.toml file. We need to update the version number in that file in the pre-release commit.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:10:40.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="130"></a>

### #130: Issue with using Temporal ruby-sdk

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/130 |
| **State** | CLOSED |
| **Author** | RondaPriyatham |
| **Created** | 2023-03-14 09:27:39.000 UTC (2y 10m ago) |
| **Updated** | 2023-03-28 19:23:05.000 UTC |
| **Closed** | 2023-03-28 19:23:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Description:
Trying to use Temporal services using ruby sdk. I have tried to implement the temporal services for java tool and it worked well. so I want to use the same services to the ruby tool. When I tried to implement it, produces the following error.
![image](https://user-images.githubusercontent.com/91109272/224953995-066332d5-5de0-4dd6-b956-6925f3558043.png)

Note: I have not used 'temporal' word anywhere. I have used Temporalio in particular.

System setup:
Using ruby 3.0.4
rustc version: 1.68.0
and installed other gems required for temporalio as described in documentation.
Have pulled the docker image and running the temporal on localhost.

-Output for "gem list" command. (please find that there is temporalio gem installed already).
![image](https://user-images.githubusercontent.com/91109272/224955441-cdd4e785-e2f0-4a2d-9c7e-6d9a83d4a7e4.png)


-bundle install command output for the directory which contains all the project files with Gemfile.
![image](https://user-images.githubusercontent.com/91109272/224955266-e426d65f-7c27-4793-bf9a-0db45bcfb18c.png)

I have referred to the issue in which it has described the name change of sdk from temporal to temporalio. But few snippets in the documentation still refer it as temporal. Please do check for that too.
And please let me know what can I do for this issue.


#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2023-03-28 19:23:05.000 UTC</summary>

I think this should work correctly in version 0.1.1.

Could you please try that again? I'll close this issue in the mean time, but please reopen it if you still get the same behaviour.

</details>


---

<a id="128"></a>

### #128: Add API to count workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/128 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-03-03 22:06:24.000 UTC (2y 10m ago) |
| **Updated** | 2024-07-12 14:10:45.000 UTC |
| **Closed** | 2024-07-12 14:10:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See parent issue for more information.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:10:44.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="126"></a>

### #126: temporal-sdk-core-api-0.1.0: 3 vulnerabilities (highest severity is: 9.1)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/126 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-02-26 15:31:23.000 UTC (2y 10m ago) |
| **Updated** | 2024-07-12 14:10:53.000 UTC |
| **Closed** | 2024-07-12 14:10:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>temporal-sdk-core-api-0.1.0</b></p></summary>

<p></p>
<p>Path to dependency file: /bridge/Cargo.toml</p>
<p>Path to vulnerable library: /bridge/Cargo.toml</p>
<p>

<p>Found in HEAD commit: [63b662559cd583d424ccbd121f96a1194e1fa2eb](https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb)</p></details>

## Vulnerabilities
| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (temporal-sdk-core-api version) | Remediation Possible** |
|----|----|----|----|----|----|----|
|[WS-2023-0045](https://github.com/XAMPPRocky/remove_dir_all/commit/7247a8b6ee59fc99bbb69ca6b3ca4bfd8c809ead) | <img src='https://whitesource-resources.whitesourcesoftware.com/critical_vul.png?' width=19 height=20> Critical | 9.1 | remove_dir_all-0.5.3.crate | Transitive | N/A* | &#10060; |
|[CVE-2018-16875](https://www.mend.io/vulnerability-database/CVE-2018-16875) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | webpki-0.22.0.crate | Transitive | N/A* | &#10060; |
|[CVE-2023-26964](https://www.mend.io/vulnerability-database/CVE-2023-26964) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | hyper-0.14.23.crate | Transitive | N/A* | &#10060; |

<p>_For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p><p>_*In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details
<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/critical_vul.png?' width=19 height=20> WS-2023-0045</summary>

### Vulnerable Library - <b>remove_dir_all-0.5.3.crate</b></p>
<p>A safe, reliable implementation of remove_dir_all for Windows</p>
<p>Library home page: [https://crates.io/api/v1/crates/remove_dir_all/0.5.3/download](https://crates.io/api/v1/crates/remove_dir_all/0.5.3/download)</p>
<p>Path to dependency file: /bridge/Cargo.toml</p>
<p>Path to vulnerable library: /bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:

* temporal-sdk-core-api-0.1.0 (Root Library)
  * temporal-client-0.1.0
    * temporal-sdk-core-protos-0.1.0
      * prost-wkt-types-0.4.0.crate
        * prost-build-0.11.6.crate
          * tempfile-3.3.0.crate
            * :x: **remove_dir_all-0.5.3.crate** (Vulnerable Library)
<p>Found in HEAD commit: [63b662559cd583d424ccbd121f96a1194e1fa2eb](https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb)</p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

### Vulnerability Details
<p>

The remove_dir_all crate is a Rust library that offers additional features over the Rust standard library fs::remove_dir_all function. It suffers the same class of failure as the code it was layering over: TOCTOU race conditions, with the ability to cause arbitrary paths to be deleted by substituting a symlink for a path after the type of the path was checked.

<p>Publish Date: 2023-02-24
<p>URL: [WS-2023-0045](https://github.com/XAMPPRocky/remove_dir_all/commit/7247a8b6ee59fc99bbb69ca6b3ca4bfd8c809ead)</p>
</p>

<p></p>

### CVSS 3 Score Details (<b>9.1</b>)
<p>

Base Score Metrics:

* Exploitability Metrics:
  * Attack Vector: Network
  * Attack Complexity: Low
  * Privileges Required: None
  * User Interaction: None
  * Scope: Unchanged
* Impact Metrics:
  * Confidentiality Impact: None
  * Integrity Impact: High
  * Availability Impact: High
</p>
For more information on CVSS3 Scores, click [here](https://www.first.org/cvss/calculator/3.0).
</p>

<p></p>

### Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: [https://github.com/advisories/GHSA-mc8h-8q98-g5hr](https://github.com/advisories/GHSA-mc8h-8q98-g5hr)</p>
<p>Release Date: 2023-02-24</p>
<p>Fix Resolution: remove_dir_all - 0.8.0</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2018-16875</summary>

### Vulnerable Library - <b>webpki-0.22.0.crate</b></p>
<p>Web PKI X.509 Certificate Verification.</p>
<p>Library home page: [https://crates.io/api/v1/crates/webpki/0.22.0/download](https://crates.io/api/v1/crates/webpki/0.22.0/download)</p>
<p>Path to dependency file: /bridge/Cargo.toml</p>
<p>Path to vulnerable library: /bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:

* temporal-sdk-core-api-0.1.0 (Root Library)
  * temporal-client-0.1.0
    * temporal-sdk-core-protos-0.1.0
      * tonic-0.8.2.crate
        * tokio-rustls-0.23.4.crate
          * rustls-0.20.7.crate
            * :x: **webpki-0.22.0.crate** (Vulnerable Library)
<p>Found in HEAD commit: [63b662559cd583d424ccbd121f96a1194e1fa2eb](https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb)</p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

### Vulnerability Details
<p>

The crypto/x509 package of Go before 1.10.6 and 1.11.x before 1.11.3 does not limit the amount of work performed for each chain verification, which might allow attackers to craft pathological inputs leading to a CPU denial of service. Go TLS servers accepting client certificates and TLS clients are affected.

<p>Publish Date: 2018-12-14
<p>URL: [CVE-2018-16875](https://www.mend.io/vulnerability-database/CVE-2018-16875)</p>
</p>

<p></p>

### CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:

* Exploitability Metrics:
  * Attack Vector: Network
  * Attack Complexity: Low
  * Privileges Required: None
  * User Interaction: None
  * Scope: Unchanged
* Impact Metrics:
  * Confidentiality Impact: None
  * Integrity Impact: None
  * Availability Impact: High
</p>
For more information on CVSS3 Scores, click [here](https://www.first.org/cvss/calculator/3.0).
</p>

<p></p>

### Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: [https://github.com/advisories/GHSA-fh2r-99q2-6mmg](https://github.com/advisories/GHSA-fh2r-99q2-6mmg)</p>
<p>Release Date: 2018-12-14</p>
<p>Fix Resolution: golang 1.10.6,golang 1.11.3, webpki - 0.22.2, rustls-webpki - 0.100.2,0.101.4</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2023-26964</summary>

### Vulnerable Library - <b>hyper-0.14.23.crate</b></p>
<p>A fast and correct HTTP library.</p>
<p>Library home page: [https://crates.io/api/v1/crates/hyper/0.14.23/download](https://crates.io/api/v1/crates/hyper/0.14.23/download)</p>
<p>Path to dependency file: /bridge/Cargo.toml</p>
<p>Path to vulnerable library: /bridge/Cargo.toml</p>
<p>

Dependency Hierarchy:

* temporal-sdk-core-api-0.1.0 (Root Library)
  * temporal-client-0.1.0
    * temporal-sdk-core-protos-0.1.0
      * tonic-0.8.2.crate
        * :x: **hyper-0.14.23.crate** (Vulnerable Library)
<p>Found in HEAD commit: [63b662559cd583d424ccbd121f96a1194e1fa2eb](https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb)</p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

### Vulnerability Details
<p>

An issue was discovered in hyper v0.13.7. h2-0.2.4 Stream stacking occurs when the H2 component processes HTTP2 RST_STREAM frames. As a result, the memory and CPU usage are high which can lead to a Denial of Service (DoS).

<p>Publish Date: 2023-04-11
<p>URL: [CVE-2023-26964](https://www.mend.io/vulnerability-database/CVE-2023-26964)</p>
</p>

<p></p>

### CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:

* Exploitability Metrics:
  * Attack Vector: Network
  * Attack Complexity: Low
  * Privileges Required: None
  * User Interaction: None
  * Scope: Unchanged
* Impact Metrics:
  * Confidentiality Impact: None
  * Integrity Impact: None
  * Availability Impact: High
</p>
For more information on CVSS3 Scores, click [here](https://www.first.org/cvss/calculator/3.0).
</p>

<p></p>

### Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: [https://github.com/advisories/GHSA-f8vr-r385-rh5r](https://github.com/advisories/GHSA-f8vr-r385-rh5r)</p>
<p>Release Date: 2023-04-11</p>
<p>Fix Resolution: h2 - 0.3.17</p>

</p>

<p></p>

</details>



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:10:53.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="120"></a>

### #120: Check for empty strings when preparing Activities and Workflows in a worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/120 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-02-16 18:09:56.000 UTC (2y 10m ago) |
| **Updated** | 2024-07-12 14:10:58.000 UTC |
| **Closed** | 2024-07-12 14:10:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:10:58.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="118"></a>

### #118: Investigate issue with Ruby 3.2+

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/118 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-02-15 17:33:41.000 UTC (2y 10m ago) |
| **Updated** | 2024-07-12 14:11:05.000 UTC |
| **Closed** | 2024-07-12 14:11:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:05.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="116"></a>

### #116: tokio-1.23.1.crate: 1 vulnerabilities (highest severity is: 9.8) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/116 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2023-02-06 15:06:46.000 UTC (2y 11m ago) |
| **Updated** | 2023-02-24 17:51:31.000 UTC |
| **Closed** | 2023-02-24 17:51:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>tokio-1.23.1.crate</b></p></summary>

<p>An event-driven, non-blocking I/O platform for writing asynchronous I/O
backed applications.
</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/tokio/1.23.1/download">https://crates.io/api/v1/crates/tokio/1.23.1/download</a></p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (tokio version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [WS-2023-0027](https://github.com/tokio-rs/tokio/commit/d6ea7a742b92d3e516035a584ab9347a96be363a) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 9.8 | tokio-1.23.1.crate | Direct | tokio - 1.18.5,1.20.4,1.24.2 | &#10060; |


## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> WS-2023-0027</summary>


###  Vulnerable Library - <b>tokio-1.23.1.crate</b></p>

<p>An event-driven, non-blocking I/O platform for writing asynchronous I/O
backed applications.
</p>
<p>Library home page: <a href="https://crates.io/api/v1/crates/tokio/1.23.1/download">https://crates.io/api/v1/crates/tokio/1.23.1/download</a></p>
<p>

Dependency Hierarchy:
  - :x: **tokio-1.23.1.crate** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A soundness issue was discovered in tokio. tokio::io::ReadHalf<T>::unsplit can violate the Pin contract. Specific set of conditions needed to trigger an issue (a !Unpin type in ReadHalf) is unusual, combined with the difficulty of making any arbitrary use-after-free exploitable in Rust without doing a lot of careful alignment of data types in the surrounding code. The tokio feature io-util is also required to be enabled to trigger this soundness issue.

<p>Publish Date: 2023-02-02
<p>URL: <a href=https://github.com/tokio-rs/tokio/commit/d6ea7a742b92d3e516035a584ab9347a96be363a>WS-2023-0027</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>9.8</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: High
  - Integrity Impact: High
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://rustsec.org/advisories/RUSTSEC-2023-0005.html">https://rustsec.org/advisories/RUSTSEC-2023-0005.html</a></p>
<p>Release Date: 2023-02-02</p>
<p>Fix Resolution: tokio - 1.18.5,1.20.4,1.24.2</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-02-24 17:51:31.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="112"></a>

### #112: Implement `operator_service` on the `Connection`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/112 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-01-23 16:05:37.000 UTC (2y 11m ago) |
| **Updated** | 2024-07-12 14:11:14.000 UTC |
| **Closed** | 2024-07-12 14:11:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:14.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="109"></a>

### #109: Expose individual RPC Services via Connection

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/109 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-01-17 15:22:17.000 UTC (2y 11m ago) |
| **Updated** | 2024-07-12 14:11:17.000 UTC |
| **Closed** | 2024-07-12 14:11:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:17.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="107"></a>

### #107: Publish YARD docs to `vercel`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/107 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-01-12 13:27:44.000 UTC (2y 12m ago) |
| **Updated** | 2024-07-12 14:11:21.000 UTC |
| **Closed** | 2024-07-12 14:11:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:21.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="104"></a>

### #104: Non-blocking `Worker#shutdown`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/104 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-01-04 12:37:34.000 UTC (3 years ago) |
| **Updated** | 2024-07-12 14:11:24.000 UTC |
| **Closed** | 2024-07-12 14:11:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:24.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="78"></a>

### #78: Simplify Client/Worker initialization

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/78 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-01 12:20:36.000 UTC (3y 1m ago) |
| **Updated** | 2024-07-12 14:11:32.000 UTC |
| **Closed** | 2024-07-12 14:11:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:32.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="76"></a>

### #76: Lazy thread-pool

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/76 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-01 12:17:38.000 UTC (3y 1m ago) |
| **Updated** | 2024-07-12 14:11:38.000 UTC |
| **Closed** | 2024-07-12 14:11:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:38.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="73"></a>

### #73: Add TLS support to the Client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/73 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-11-18 13:32:27.000 UTC (3y 1m ago) |
| **Updated** | 2023-03-23 18:58:40.000 UTC |
| **Closed** | 2023-03-23 18:58:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>mjameswh</strong> commented on 2023-03-23 18:58:40.000 UTC</summary>

Done in #129 

</details>


---

<a id="72"></a>

### #72: Add `run_id` to `Temporal::Error::WorkflowExecutionAlreadyStarted` based on the details of the Rust error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/72 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-11-18 13:27:58.000 UTC (3y 1m ago) |
| **Updated** | 2024-07-12 14:11:44.000 UTC |
| **Closed** | 2024-07-12 14:11:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:44.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="71"></a>

### #71: Detect UnsupportedQuery correctly (based on the gRPC status code `INVALID_ARGUMENT `)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/71 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-11-18 13:12:24.000 UTC (3y 1m ago) |
| **Updated** | 2024-07-12 14:11:48.000 UTC |
| **Closed** | 2024-07-12 14:11:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:48.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="70"></a>

### #70: Add `#execute_workflow` to Client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/70 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-11-18 12:11:40.000 UTC (3y 1m ago) |
| **Updated** | 2024-07-12 14:11:52.000 UTC |
| **Closed** | 2024-07-12 14:11:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:52.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="52"></a>

### #52: Implement proto (json & binary) converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/52 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-10-18 16:52:18.000 UTC (3y 2m ago) |
| **Updated** | 2024-07-12 14:11:57.000 UTC |
| **Closed** | 2024-07-12 14:11:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:11:56.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="48"></a>

### #48: grpc-1.49.1-x86_64-linux.gem: 1 vulnerabilities (highest severity is: 5.7) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/48 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2022-10-07 01:06:51.000 UTC (3y 3m ago) |
| **Updated** | 2022-10-18 14:59:54.000 UTC |
| **Closed** | 2022-10-18 14:59:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>grpc-1.49.1-x86_64-linux.gem</b></p></summary>

<p></p>
<p>Path to dependency file: /Gemfile.lock</p>
<p>Path to vulnerable library: /home/wss-scanner/.gem/ruby/2.7.0/cache/google-protobuf-3.21.6-x86_64-linux.gem</p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | --- | --- |
| [CVE-2022-3171](https://vuln.whitesourcesoftware.com/vulnerability/CVE-2022-3171) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> Medium | 5.7 | google-protobuf-3.21.6-x86_64-linux.gem | Transitive | N/A | &#10060; |


## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> CVE-2022-3171</summary>


###  Vulnerable Library - <b>google-protobuf-3.21.6-x86_64-linux.gem</b></p>

<p>Protocol Buffers are Google's data interchange format.</p>
<p>Library home page: <a href="https://rubygems.org/gems/google-protobuf-3.21.6-x86_64-linux.gem">https://rubygems.org/gems/google-protobuf-3.21.6-x86_64-linux.gem</a></p>
<p>Path to dependency file: /Gemfile.lock</p>
<p>Path to vulnerable library: /home/wss-scanner/.gem/ruby/2.7.0/cache/google-protobuf-3.21.6-x86_64-linux.gem</p>
<p>

Dependency Hierarchy:
  - grpc-1.49.1-x86_64-linux.gem (Root Library)
    - :x: **google-protobuf-3.21.6-x86_64-linux.gem** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
A potential Denial of Service issue in protobuf-java core and lite was discovered in the parsing procedure for binary and text format data. Input streams containing multiple instances of non-repeated embedded messages with repeated or unknown fields cause objects to be converted back-n-forth between mutable and immutable forms, resulting in potentially long garbage collection pauses.

This issue was fixed In the following version:

protobuf-java (3.21.7, 3.20.3, 3.19.6, 3.16.3)
protobuf-javalite (3.21.7, 3.20.3, 3.19.6, 3.16.3)
protobuf-kotlin (3.21.7, 3.20.3, 3.19.6)
protobuf-kotlin-lite (3.21.7, 3.20.3, 3.19.6)
google-protobuf [JRuby gem only] (3.21.7, 3.20.3, 3.19.6)

<p>Publish Date: 2022-09-10
<p>URL: <a href=https://vuln.whitesourcesoftware.com/vulnerability/CVE-2022-3171>CVE-2022-3171</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>5.7</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Adjacent
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://github.com/advisories/GHSA-h4h5-3hr4-j3g2">https://github.com/advisories/GHSA-h4h5-3hr4-j3g2</a></p>
<p>Release Date: 2022-09-10</p>
<p>Fix Resolution: com.google.protobuf:protobuf-java:3.16.3,3.19.6,3.20.3,3.21.7;com.google.protobuf:protobuf-javalite:3.16.3,3.19.6,3.20.3,3.21.7;com.google.protobuf:protobuf-kotlin:3.19.6,3.20.3,3.21.7;com.google.protobuf:protobuf-kotlin-lite:3.19.6,3.20.3,3.21.7;google-protobuf - 3.19.6,3.20.3,3.21.7</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2022-10-18 14:59:54.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="41"></a>

### #41: go.temporal.io/server-v1.17.5: 5 vulnerabilities (highest severity is: 7.5) - autoclosed

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/41 |
| **State** | CLOSED |
| **Author** | app/mend-for-github-com |
| **Created** | 2022-09-21 17:22:32.000 UTC (3y 3m ago) |
| **Updated** | 2023-07-25 21:32:44.000 UTC |
| **Closed** | 2023-07-25 21:32:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>go.temporal.io/server-v1.17.5</b></p></summary>

<p></p>
<p>


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p></details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (go.temporal.io/server-v1.17.5 version) | Remediation Available |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2018-1320](https://www.mend.io/vulnerability-database/CVE-2018-1320) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7 | Transitive | N/A* | &#10060; |
| [CVE-2019-0205](https://www.mend.io/vulnerability-database/CVE-2019-0205) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | detected in multiple dependencies | Transitive | N/A* | &#10060; |
| [CVE-2019-0210](https://www.mend.io/vulnerability-database/CVE-2019-0210) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> High | 7.5 | detected in multiple dependencies | Transitive | N/A* | &#10060; |
| [CVE-2018-11798](https://www.mend.io/vulnerability-database/CVE-2018-11798) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> Medium | 6.5 | github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7 | Transitive | N/A* | &#10060; |
| [CVE-2020-28928](https://www.mend.io/vulnerability-database/CVE-2020-28928) | <img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> Medium | 5.5 | modernc.org/libc-v1.16.10 | Transitive | N/A* | &#10060; |
<p>*For some transitive vulnerabilities, there is no version of direct dependency with a fix. Check the "Details" section below to see if there is a version of transitive dependency where vulnerability is fixed.</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2018-1320</summary>


###  Vulnerable Library - <b>github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7</b></p>

<p>Apache Thrift</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip">https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/server-v1.17.5 (Root Library)
    - github.com/temporalio/ringpop-go-v0.0.0-20211012191444-6f91b5915e95
      - :x: **github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Apache Thrift Java client library versions 0.5.0 through 0.11.0 can bypass SASL negotiation isComplete validation in the org.apache.thrift.transport.TSaslTransport class. An assert used to determine if the SASL handshake had successfully completed could be disabled in production settings making the validation incomplete.

<p>Publish Date: 2019-01-07
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2018-1320>CVE-2018-1320</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: High
  - Availability Impact: None
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1320">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1320</a></p>
<p>Release Date: 2019-01-07</p>
<p>Fix Resolution: 0.12.0</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2019-0205</summary>


###  Vulnerable Libraries - <b>github.com/uber-go/tally/v4-v4.1.2</b>, <b>github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7</b></p>
<p>


### <b>github.com/uber-go/tally/v4-v4.1.2</b></p>

<p>A Go metrics interface with fast buffered metrics and third party reporters</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.2.zip">https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.2.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/server-v1.17.5 (Root Library)
    - :x: **github.com/uber-go/tally/v4-v4.1.2** (Vulnerable Library)


### <b>github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7</b></p>

<p>Apache Thrift</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip">https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/server-v1.17.5 (Root Library)
    - github.com/temporalio/ringpop-go-v0.0.0-20211012191444-6f91b5915e95
      - :x: **github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7** (Vulnerable Library)


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
In Apache Thrift all versions up to and including 0.12.0, a server or client may run into an endless loop when feed with specific input data. Because the issue had already been partially fixed in version 0.11.0, depending on the installed version it affects only certain language bindings.

<p>Publish Date: 2019-10-29
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2019-0205>CVE-2019-0205</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0205">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0205</a></p>
<p>Release Date: 2019-10-29</p>
<p>Fix Resolution: org.apache.thrift:libthrift:0.13.0</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png' width=19 height=20> CVE-2019-0210</summary>


###  Vulnerable Libraries - <b>github.com/uber-go/tally/v4-v4.1.2</b>, <b>github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7</b></p>
<p>


### <b>github.com/uber-go/tally/v4-v4.1.2</b></p>

<p>A Go metrics interface with fast buffered metrics and third party reporters</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.2.zip">https://proxy.golang.org/github.com/uber-go/tally/v4/@v/v4.1.2.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/server-v1.17.5 (Root Library)
    - :x: **github.com/uber-go/tally/v4-v4.1.2** (Vulnerable Library)


### <b>github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7</b></p>

<p>Apache Thrift</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip">https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/server-v1.17.5 (Root Library)
    - github.com/temporalio/ringpop-go-v0.0.0-20211012191444-6f91b5915e95
      - :x: **github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7** (Vulnerable Library)


<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
In Apache Thrift 0.9.3 to 0.12.0, a server implemented in Go using TJSONProtocol or TSimpleJSONProtocol may panic when feed with invalid input data.

<p>Publish Date: 2019-10-29
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2019-0210>CVE-2019-0210</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>7.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: None
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="http://mail-archives.apache.org/mod_mbox/thrift-dev/201910.mbox/%3C277A46CA87494176B1BBCF5D72624A2A%40HAGGIS%3E">http://mail-archives.apache.org/mod_mbox/thrift-dev/201910.mbox/%3C277A46CA87494176B1BBCF5D72624A2A%40HAGGIS%3E</a></p>
<p>Release Date: 2019-10-29</p>
<p>Fix Resolution: 0.13.0</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> CVE-2018-11798</summary>


###  Vulnerable Library - <b>github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7</b></p>

<p>Apache Thrift</p>
<p>Library home page: <a href="https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip">https://proxy.golang.org/github.com/apache/thrift/@v/v0.0.0-20161221203622-b2a4d4ae21c7.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/server-v1.17.5 (Root Library)
    - github.com/temporalio/ringpop-go-v0.0.0-20211012191444-6f91b5915e95
      - :x: **github.com/apache/thrift-v0.0.0-20161221203622-b2a4d4ae21c7** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
The Apache Thrift Node.js static web server in versions 0.9.2 through 0.11.0 have been determined to contain a security vulnerability in which a remote user has the ability to access files outside the set webservers docroot path.

<p>Publish Date: 2019-01-07
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2018-11798>CVE-2018-11798</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>6.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Network
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: High
  - Integrity Impact: None
  - Availability Impact: None
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-11798">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-11798</a></p>
<p>Release Date: 2019-01-07</p>
<p>Fix Resolution: v0.12.0</p>

</p>

<p></p>

</details><details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/medium_vul.png' width=19 height=20> CVE-2020-28928</summary>


###  Vulnerable Library - <b>modernc.org/libc-v1.16.10</b></p>

<p></p>
<p>Library home page: <a href="https://proxy.golang.org/modernc.org/libc/@v/v1.16.10.zip">https://proxy.golang.org/modernc.org/libc/@v/v1.16.10.zip</a></p>
<p>

Dependency Hierarchy:
  - go.temporal.io/server-v1.17.5 (Root Library)
    - modernc.org/sqlite-v1.17.3
      - :x: **modernc.org/libc-v1.16.10** (Vulnerable Library)
<p>Found in HEAD commit: <a href="https://github.com/temporalio/sdk-ruby/commit/63b662559cd583d424ccbd121f96a1194e1fa2eb">63b662559cd583d424ccbd121f96a1194e1fa2eb</a></p>
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
In musl libc through 1.2.1, wcsnrtombs mishandles particular combinations of destination buffer size and source character limit, as demonstrated by an invalid write access (buffer overflow).

<p>Publish Date: 2020-11-24
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2020-28928>CVE-2020-28928</a></p>
</p>

<p></p>

###  CVSS 3 Score Details (<b>5.5</b>)
<p>

Base Score Metrics:
- Exploitability Metrics:
  - Attack Vector: Local
  - Attack Complexity: Low
  - Privileges Required: Low
  - User Interaction: None
  - Scope: Unchanged
- Impact Metrics:
  - Confidentiality Impact: None
  - Integrity Impact: None
  - Availability Impact: High
</p>
For more information on CVSS3 Scores, click <a href="https://www.first.org/cvss/calculator/3.0">here</a>.
</p>

<p></p>

###  Suggested Fix
<p>

<p>Type: Upgrade version</p>
<p>Origin: <a href="https://nvd.nist.gov/vuln/detail/CVE-2020-28928">https://nvd.nist.gov/vuln/detail/CVE-2020-28928</a></p>
<p>Release Date: 2020-11-24</p>
<p>Fix Resolution: musl - 1.2.2-1,1.2.2-1,1.1.16-3+deb9u1</p>

</p>

<p></p>

</details>

#### Comments (1)

<details>
<summary><strong>mend-for-github-com</strong> commented on 2023-07-25 21:32:44.000 UTC</summary>

:heavy_check_mark: This issue was automatically closed by Mend because the vulnerable library in the specific branch(es) was either marked as ignored or it is no longer part of the Mend inventory.

</details>


---

<a id="40"></a>

### #40: Modify `search_attributes` to align with server changes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/40 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-09-21 16:29:14.000 UTC (3y 3m ago) |
| **Updated** | 2024-07-12 14:12:21.000 UTC |
| **Closed** | 2024-07-12 14:12:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:12:21.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="34"></a>

### #34: Try joining all the tokio's join handlers to ensure no `panic`s are ignores

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/34 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-07-21 19:56:14.000 UTC (3y 5m ago) |
| **Updated** | 2024-07-12 14:12:26.000 UTC |
| **Closed** | 2024-07-12 14:12:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:12:25.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="26"></a>

### #26: Add a layer between the Bridge and Ruby bindings to handle and raise VM errors better

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/26 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-07-04 18:21:05.000 UTC (3y 6m ago) |
| **Updated** | 2024-07-12 14:13:04.000 UTC |
| **Closed** | 2024-07-12 14:13:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:13:04.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="6"></a>

### #6: Implement a shared thread pool

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/6 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:26.000 UTC (3y 7m ago) |
| **Updated** | 2024-07-12 14:13:09.000 UTC |
| **Closed** | 2024-07-12 14:13:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-12 14:13:09.000 UTC</summary>

The SDK is undergoing a rewrite/refresh and this issue applied to a previous version and is no longer applicable

</details>


---

<a id="367"></a>

### #367: [Feature Request] Support non-workflow activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/367 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-02 17:20:10.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 17:20:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Allow executing activities without a workflow. The clients must support the new (upcoming) server APIs for starting, managing and getting results of activities. The workers must support running activities outside of workflow context.

### Additional context

Server API PR (WIP): https://github.com/temporalio/api/pull/640


---

<a id="361"></a>

### #361: [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/361 |
| **State** | OPEN |
| **Author** | chris-olszewski (Chris Olszewski) |
| **Created** | 2025-11-12 16:27:44.000 UTC (1 months ago) |
| **Updated** | 2025-11-12 16:27:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Users want to override the target version on a workflow, especially when doing pre-deployment testing.  This should work the same as it does when creating a Workflow from a client.


### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="355"></a>

### #355: [Bug] Some common uses of ActiveModel fail in workflows due to sync construct use

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/355 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-28 15:32:46.000 UTC (2 months ago) |
| **Updated** | 2025-10-28 15:32:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Many common uses of ActiveModel use `ConcurrentMap` under the hood which uses `Thread::Mutex` which is forbidden in workflows. 

We believe this can be replicated simply by accessing an attribute that doesn't exist. We also believe this can be replicated using a model set like:

```ruby
module MyCompany
  module Messages
    class Foo
      include Message

      attribute :some_field_1, :string
      attribute :some_field_2, :string
      attribute :some_field_3, ObjectType.for(Array), :default => []
      attribute :some_field_4, :boolean, :default => false
      attribute :some_field_5, :boolean, :default => false
    end
  end

  module Message
    extend ActiveSupport::Concern
    include ActiveModel::Model
    include ActiveModel::Attributes
    include ActiveModel::Serializers::JSON

    included do
      def as_json(options = {})
        super(options).merge(::JSON.create_id => self.class.name)
      end
    end

    class_methods do
      def json_create(data)
        new(**data.except(JSON.create_id))
      end
    end
  end
end
```

This can give stack traces like:
```
W, [2025-10-24T12:22:16.291089 #70269]  WARN -- : Cannot access Thread::Mutex synchronize from inside a workflow, reason: disallowed. If this is known to be safe, the code can be run in a Temporalio::Workflow::Unsafe.illegal_call_tracing_disabled block. {:attempt=>1, :namespace=>"default", :run_id=>"019a1773-c113-74ff-924d-7c51d86cd682", :task_queue=>"deliverable-orchestration", :workflow_id=>"59824eb54dc4fa489c15c372", :workflow_type=>"OrchestrationWorkflowV2"} (Temporalio::Workflow::NondeterminismError)
/path/to/gems/temporalio-0.6.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/illegal_call_tracer.rb:112:in `block in initialize'
/path/to/gems/concurrent-ruby-1.3.4/lib/concurrent-ruby/concurrent/collection/map/mri_map_backend.rb:25:in `compute_if_absent'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_methods.rb:400:in `attribute_method_matchers_matching'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_methods.rb:506:in `matched_attribute_method'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_methods.rb:494:in `respond_to?'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_assignment.rb:48:in `_assign_attribute'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_assignment.rb:42:in `block in _assign_attributes'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_assignment.rb:41:in `each'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_assignment.rb:41:in `_assign_attributes'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attribute_assignment.rb:34:in `assign_attributes'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/model.rb:81:in `initialize'
/path/to/gems/activemodel-6.1.7.10/lib/active_model/attributes.rb:77:in `initialize'
/path/to/models/my_models.rb:99:in `new'
```

And for cases where it's an invalid attribute access via `method_missing`, it can give traces like:

```
/path/to/gems/temporalio-1.0.0-arm64-darwin/lib/temporalio/internal/worker/workflow_instance/illegal_call_tracer.rb:112:in `block in initialize'
/path/to/gems/concurrent-ruby-1.3.4/lib/concurrent-ruby/concurrent/collection/map/mri_map_backend.rb:25:in `compute_if_absent'
/path/to/gems/activemodel-6.1.7.3/lib/active_model/attribute_methods.rb:400:in `attribute_method_matchers_matching'
/path/to/gems/activemodel-6.1.7.3/lib/active_model/attribute_methods.rb:506:in `matched_attribute_method'
/path/to/gems/activemodel-6.1.7.3/lib/active_model/attribute_methods.rb:468:in `method_missing'
my_workflow_class.rb:52:in `block in execute'
my_workflow_class.rb:39:in `loop'
```

`ConcurrentMap` use is so pervasive in ActiveModel, it is unreasonable for us to ask users not to use anything relying on it. Also, it may be unreasonable to just alter our illegal trace detector to check backtrace for the active model because the use of mutexes can cause an issue like we hit with loggers (see https://temporal.io/blog/temporal-ruby-crash-proof-fibers#implicitly-used-sync-constructs).

The best solution may be a `WorkflowSafeObject` type of mixin that surrounds every call with `Workflow::Unsafe::durable_scheduler_disabled`.


---

<a id="354"></a>

### #354: [Feature Request] Enable Worker Heartbeating

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/354 |
| **State** | CLOSED |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-10-28 02:01:03.000 UTC (2 months ago) |
| **Updated** | 2025-12-05 14:33:01.000 UTC |
| **Closed** | 2025-12-05 14:33:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Worker heartbeating is implemented in Core, need to enable worker heartbeating by allowing users to specify the worker heartbeat interval when initializing Core Runtime

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="353"></a>

### #353: [ruby] Plugin + SimplePlugin

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/353 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-10-20 21:22:51.000 UTC (2 months ago) |
| **Updated** | 2025-10-20 21:24:42.000 UTC |
| **Closed** | 2025-10-20 21:24:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Implement Plugins so that users can self-serve creating integrations with Temporal Workflows.  This is done in Python and we can copy. 


---

<a id="333"></a>

### #333: [Feature Request] Require payload codec from data converter file

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/333 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-04 13:51:41.000 UTC (4 months ago) |
| **Updated** | 2025-09-04 13:51:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users should be able to `require 'temporalio/converters'` and have payload codec, but it is not required from the data converter file which is required from the top-level converters file. Add it.



---

<a id="329"></a>

### #329: [Feature Request] Ensure gRPC binary metadata headers are supported

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/329 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-27 20:46:14.000 UTC (4 months ago) |
| **Updated** | 2025-10-06 19:21:05.000 UTC |
| **Closed** | 2025-10-06 19:21:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/671. Probably just need to require ASCII-based string values for `-bin` keys and set those as Tonic metadata binary values.



---

<a id="328"></a>

### #328: [Feature Request] Reclassify Benign Application errors in OpenTelemetry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/328 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-08-26 20:41:02.000 UTC (4 months ago) |
| **Updated** | 2025-09-30 16:44:52.000 UTC |
| **Closed** | 2025-09-30 16:44:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See issue description here:

https://github.com/temporalio/sdk-python/issues/1041


---

<a id="318"></a>

### #318: [Feature Request] Plugin support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/318 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 14:33:56.000 UTC (4 months ago) |
| **Updated** | 2026-01-05 19:46:09.000 UTC |
| **Closed** | 2026-01-05 19:46:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/652



---

<a id="311"></a>

### #311: [Feature Request] Add first execution run ID to workflow info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/311 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-11 14:28:56.000 UTC (5 months ago) |
| **Updated** | 2025-09-15 20:14:25.000 UTC |
| **Closed** | 2025-09-15 20:14:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/29


---

<a id="299"></a>

### #299: [Bug] Workflow handler *name* can only be applied to one handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/299 |
| **State** | CLOSED |
| **Author** | stwomack (Steve Womack) |
| **Created** | 2025-07-21 19:37:49.000 UTC (5 months ago) |
| **Updated** | 2025-08-21 21:32:24.000 UTC |
| **Closed** | 2025-08-21 21:32:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

With most SDKs, multiple workflow handlers can be decorated with the same name, like python here:
```
    @workflow.signal(name="UpdateOrder")
    def update_order_signal(self, update_input: UpdateOrderInput):
        workflow.logger.info(f"Received update order signal with address: {update_input.Address}")
        self.updated_address = update_input.Address

    @workflow.update(name="UpdateOrder")
    def update_order_update(self, update_input: UpdateOrderInput) -> str:
        workflow.logger.info(f"Received update order signal with address: {update_input.Address}")
        self.updated_address = update_input.Address
        return "Updated address: " + update_input.Address
```

### Describe the bug

With Ruby, they cannot

```
   workflow_signal(name: 'UpdateOrder')
    def update_order(update_input)
      logger.info("Received update order signal with address: #{update_input}")
      @updated_address = update_input['Address']
    end

    # TODO This won't work. Only one of these can be decorated with a specific name, unlike other SDKs where "UpdateOrder" is the name for all three
    # Only one of these will work at a time, and do so by making its name 'UpdateOrder' as that's what the UI calls.
    workflow_update(name: 'UpdateOrder')
    def update_order_update(update_input)
      logger.info("Received update order update with address: #{update_input['Address']}")
      @updated_address = update_input['Address']
      "Updated address: #{@updated_address}"
    end
```

This results in the error message: 

> "in `method_added': Workflow signal UpdateOrder already defined as a different handler type (RuntimeError)"

### Minimal Reproduction

See previous section for how to replicate

### Environment/Versions

Ruby SDK 0.4.0

### Additional context





---

<a id="298"></a>

### #298: [Feature Request] Add Summary to LocalActivityOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/298 |
| **State** | CLOSED |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-07-18 00:08:01.000 UTC (5 months ago) |
| **Updated** | 2025-09-19 19:33:36.000 UTC |
| **Closed** | 2025-09-19 19:33:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

See `features` repo issue

### Describe the solution you'd like


### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="297"></a>

### #297: [Feature Request] Support accessing raw last heartbeat details

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/297 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-07-11 15:18:58.000 UTC (6 months ago) |
| **Updated** | 2025-07-22 13:04:09.000 UTC |
| **Closed** | 2025-07-22 13:04:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users may need access to the raw form of the last heartbeat details (e.g. if they want to provide hints via #271). We should expose this, probably as a collection of `Temporalio::Converters::RawValue` on `Temporalio::Activity::Info`. Also need to make `heartbeat_details` lazy somehow because those using raw may not want to have eager deserialization.


---

<a id="294"></a>

### #294: [Bug] Application error conversion is not properly defaulting type to unqualified class name

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/294 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-07-02 19:18:02.000 UTC (6 months ago) |
| **Updated** | 2025-07-07 14:14:07.000 UTC |
| **Closed** | 2025-07-07 14:14:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

https://github.com/temporalio/sdk-ruby/blob/ec7212bbb6aedafa856ffd9f8e0bd8bd79e9a87d/temporalio/lib/temporalio/converters/failure_converter.rb#L89 should be `error.class.name.to_s.split('::').last`


---

<a id="287"></a>

### #287: [Feature Request] Environment Configuration

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/287 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-06-17 20:00:40.000 UTC (6 months ago) |
| **Updated** | 2025-09-10 19:29:19.000 UTC |
| **Closed** | 2025-09-10 19:29:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/441 and https://github.com/temporalio/proposals/blob/master/all-sdk/external-client-configuration.md


---

<a id="281"></a>

### #281: [Feature Request] Provide last result and last failure to workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/281 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-09 14:16:59.000 UTC (7 months ago) |
| **Updated** | 2025-10-15 13:01:18.000 UTC |
| **Closed** | 2025-10-15 13:01:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/635



---

<a id="278"></a>

### #278: [Bug] Improper enum value comparison on workflow update

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/278 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-05 21:50:23.000 UTC (7 months ago) |
| **Updated** | 2025-06-09 18:30:57.000 UTC |
| **Closed** | 2025-06-09 18:30:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Error with trace:

```
ArgumentError: comparison of Symbol with 2 failed (ArgumentError)
               resp.stage >= Temporalio::Client::WorkflowUpdateWaitStage::ACCEPTED
                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  from temporalio-0.4.0-x86_64 (linux) lib/temporalio/internal/client/implementation.rb:502:in `>='
  from temporalio-0.4.0-x86_64 (linux) lib/temporalio/internal/client/implementation.rb:502:in `block in start_workflow_update'
  from <internal:kernel>:187:in `loop'
  from temporalio-0.4.0-x86_64 (linux) lib/temporalio/internal/client/implementation.rb:493:in `start_workflow_update'
  from temporalio-0.4.0-x86_64 (linux) lib/temporalio/client/workflow_handle.rb:290:in `start_update'
  from temporalio-0.4.0-x86_64 (linux) lib/temporalio/client/workflow_handle.rb:320:in `execute_update'
```

Basically, per https://protobuf.dev/reference/ruby/ruby-generated/#enum enums inside protos may be symbols instead of integers, so we were improperly comparing as if it was an integer. We may need to change the LHS to something like `Api::Enums::V1::UpdateWorkflowExecutionLifecycleStage.resolve(resp.stage)`


---

<a id="270"></a>

### #270: [Ruby] Worker Versioning high level client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/270 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-05-14 22:46:39.000 UTC (7 months ago) |
| **Updated** | 2025-05-14 22:49:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Create the high-level client for control plane operations concerning worker deployments. See the Go one as an example (though it also needs some updating as of this writing)


---

<a id="267"></a>

### #267: [Feature Request] Clarify in README issue with lazy loading during rails when testing workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/267 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-13 16:06:19.000 UTC (8 months ago) |
| **Updated** | 2025-05-20 00:09:40.000 UTC |
| **Closed** | 2025-05-20 00:09:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Lazy loading is on by default during rails dev/test, ref https://guides.rubyonrails.org/v7.2/autoloading_and_reloading_constants.html#eager-loading, which causes a problem with running workflows because the lazily load of an activity class uses IO and we forbid that, so you get an error json like:

> Cannot access File path from inside a workflow. If this is known to be safe, the code can be run in a Temporalio::Workflow::Unsafe.illegal_call_tracing_disabled block.

From `bootsnap` via `zeitwerk`. This is actually a good thing because potentially-side-effecting imports should not happen during workflow run. We need to document how to handle, similar to how https://guides.rubyonrails.org/v7.2/autoloading_and_reloading_constants.html#single-table-inheritance documents it.


---

<a id="253"></a>

### #253: [Bug] Unregistered Local Activity should fail Workflow Task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/253 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-23 13:34:00.000 UTC (8 months ago) |
| **Updated** | 2025-05-12 17:41:22.000 UTC |
| **Closed** | 2025-05-12 17:41:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

See https://github.com/temporalio/features/issues/221


---

<a id="252"></a>

### #252: [Bug] OpenTelemetry using wrong timestamps causing it to fail with OTLP

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/252 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-22 22:18:55.000 UTC (8 months ago) |
| **Updated** | 2025-05-12 15:46:20.000 UTC |
| **Closed** | 2025-05-12 15:46:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

See https://github.com/open-telemetry/opentelemetry-ruby/issues/1841. Basically need to change https://github.com/temporalio/sdk-ruby/blob/c52c5fe6b698eca9543d732129bc09f06927aee2/temporalio/lib/temporalio/contrib/open_telemetry.rb#L458-L464 to just use the `Time` from `Temporalio::Workflow.now` as the timestamp, do not convert to nanos


---

<a id="251"></a>

### #251: [Feature Request] Allow implicit durable timers to be disabled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/251 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-22 20:59:10.000 UTC (8 months ago) |
| **Updated** | 2025-07-07 15:38:01.000 UTC |
| **Closed** | 2025-07-07 15:38:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When using tools like OpenTelemetry simple span processors from within a workflow (instead of batch processing), it is using `Timeout`, but we don't want that to be a durable timeout like it is by default, so we need a way for users to disable this and we need to apply it to OTel span creation/recording. So we need `Temporalio::Workflow::Unsafe.implicit_durable_timers_disabled` helper.

To test this, make sure simple span processor using OTLP exporter works (may also have to add `io_enabled` for OTel code).


---

<a id="248"></a>

### #248: [Feature Request] Show retry policy on activity info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/248 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-17 12:23:53.000 UTC (8 months ago) |
| **Updated** | 2025-09-19 19:18:02.000 UTC |
| **Closed** | 2025-09-19 19:18:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Describe the solution you'd like**

See https://github.com/temporalio/features/issues/615


---

<a id="242"></a>

### #242: [Feature Request] Apply application failure logging and metrics behaviour according to `ApplicationErrorCategory`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/242 |
| **State** | CLOSED |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-04-09 18:33:35.000 UTC (9 months ago) |
| **Updated** | 2025-06-03 13:15:55.000 UTC |
| **Closed** | 2025-06-03 13:15:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See corresponding features issue:
https://github.com/temporalio/features/issues/614

Will need to wait for core:
https://github.com/temporalio/sdk-core/issues/897

Core-based SDKs only need to apply corresponding logging behaviour, core handles metrics.


---

<a id="241"></a>

### #241: Heartbeating activities should be interrupted when the activities are paused.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/241 |
| **State** | CLOSED |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-04-01 23:44:42.000 UTC (9 months ago) |
| **Updated** | 2025-06-10 13:23:55.000 UTC |
| **Closed** | 2025-06-10 13:23:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/602


---

<a id="237"></a>

### #237: [Feature Request] Support New Worker Versioning API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/237 |
| **State** | CLOSED |
| **Author** | antlai-temporal (Antonio Lain) |
| **Created** | 2025-03-24 18:12:30.000 UTC (9 months ago) |
| **Updated** | 2025-05-14 21:05:25.000 UTC |
| **Closed** | 2025-05-14 21:05:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

### Is your feature request related to a problem? Please describe.
We need to add annotations to workflows to support the new versioning APIs. Refer to temporalio/features#548 for the Go equivalents.

## Describe the solution you'd like
There are some designs for all SDK languages (including Ruby) here: https://docs.google.com/document/d/1QGacjnlFwrfFtAvv9besx6sEdr36kJ3zQ9J7bGLRwk4/edit?usp=sharing



---

<a id="233"></a>

### #233: [Feature Request] Simple nightly smoke benchmark

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/233 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-17 15:19:21.000 UTC (9 months ago) |
| **Updated** | 2025-03-21 17:57:37.000 UTC |
| **Closed** | 2025-03-21 17:57:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Similar to Python (https://github.com/temporalio/sdk-python/actions/workflows/nightly.yml) and .NET (https://github.com/temporalio/sdk-dotnet/actions/workflows/nightly.yml). This is mostly a sanity check that high-performing Ruby works as expected.


---

<a id="232"></a>

### #232: Initial Nexus implementation - Ruby

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/232 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-11 14:16:52.000 UTC (10 months ago) |
| **Updated** | 2025-11-14 09:00:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Alongside Nexus Ruby SDK, need Temporal-specific implementation in this SDK. See https://github.com/temporalio/features/issues/609


---

<a id="228"></a>

### #228: [Feature Request] Custom metric bucket sizes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/228 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-26 19:51:14.000 UTC (10 months ago) |
| **Updated** | 2025-04-18 17:27:18.000 UTC |
| **Closed** | 2025-04-18 17:27:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/606. Need to expose histogram bucket overrides made available in https://github.com/temporalio/sdk-core/pull/844.


---

<a id="227"></a>

### #227: [Feature Request] Expose root workflow execution

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/227 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-25 14:18:34.000 UTC (10 months ago) |
| **Updated** | 2025-04-17 12:48:48.000 UTC |
| **Closed** | 2025-04-17 12:48:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/605, but needs to wait on https://github.com/temporalio/sdk-core/issues/881



---

<a id="224"></a>

### #224: [Feature Request] Built-in query responses should use "RawValue"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/224 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-21 20:38:47.000 UTC (10 months ago) |
| **Updated** | 2025-03-17 16:22:12.000 UTC |
| **Closed** | 2025-03-17 16:22:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/604. Make sure built-in queries return a raw value


---

<a id="222"></a>

### #222: [Feature Request] Test randomness seed update over reset

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/222 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-12 18:34:14.000 UTC (11 months ago) |
| **Updated** | 2025-02-12 18:34:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Add a test that will confirm post-reset-point workflows have a different update seed. Probably by running a workflow to completion that uses randomness to get some value into history twice (e.g. as two activities with random-built inputs), then reset the workflow between those two points and run it to completion. Then confirm the value pre-reset is the same but different post-reset.


---

<a id="218"></a>

### #218: [Feature Request] Support buildable source gem

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/218 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-10 21:14:34.000 UTC (11 months ago) |
| **Updated** | 2025-02-10 21:14:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today we provide a source gem that doesn't work. But we very well could include all the sdk-core stuff needed to build the entire SDK on gem install. This can help people with more obscure environments. Specifically we need to have a smoke test for gem building that does a `gem install --platform ruby` to confirm, if Rust is available, it can build.


---

<a id="217"></a>

### #217: [Feature Request] Support user metadata

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/217 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-07 13:35:48.000 UTC (11 months ago) |
| **Updated** | 2025-02-20 19:47:15.000 UTC |
| **Closed** | 2025-02-20 19:47:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/486. Specifically:

* Accept optional "static summary " and "static details" on all ways to start a workflow (start, signal with start, schedule, and child workflow) and populate user metadata with them
* Accept optional "summary" when creating timers and populate user metadata with it
* Accept optional "summary" when creating activities and populate user metadata with it
* Handle `__temporal_workflow_metadata` query (see features issue and https://github.com/temporalio/sdk-go/pull/1597)
* Mark experimental


---

<a id="215"></a>

### #215: [Feature Request] Build musl gem

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/215 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-05 22:36:45.000 UTC (11 months ago) |
| **Updated** | 2025-02-06 21:55:07.000 UTC |
| **Closed** | 2025-02-06 21:55:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/594


---

<a id="211"></a>

### #211: [Feature Request] Host Ruby docs at ruby.temporal.io

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/211 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-03 20:05:57.000 UTC (11 months ago) |
| **Updated** | 2025-02-03 22:18:15.000 UTC |
| **Closed** | 2025-02-03 22:18:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

https://rubydoc.info/gems/temporalio is having issues and while it will continue to work, we want to go ahead and publish yard docs to ruby.temporal.io as we do with dotnet.temporal.io, python.temporal.io, and typescript.temporal.io. Also update the README to mark this as the canonical location for hosted docs.


---

<a id="210"></a>

### #210: [Feature Request] Support Priority Annotations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/210 |
| **State** | CLOSED |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-03 18:22:31.000 UTC (11 months ago) |
| **Updated** | 2025-05-29 21:18:35.000 UTC |
| **Closed** | 2025-05-29 21:18:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Is your feature request related to a problem? Please describe.**
Add support for attaching priority to workflows/activities

**Describe the solution you'd like**
See https://github.com/temporalio/features/issues/593 for details



---

<a id="209"></a>

### #209: [Feature Request] Add explicit memoization support to the`patched()` API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/209 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:54:30.000 UTC (11 months ago) |
| **Updated** | 2025-01-29 23:54:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In short:

- Add a `memoized` argument to the `patched` and `deprecatePatch` APIs.

- Delegate handling of the `patched` logic to Core.

- Backward compatibility support is probably not a concern for this SDK.

See temporalio/features#591 for details.


---

<a id="208"></a>

### #208: [Feature Request] Add `required_ruby_version >= 3.2.0` back to gemspec

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/208 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-27 15:11:30.000 UTC (11 months ago) |
| **Updated** | 2025-05-06 12:56:59.000 UTC |
| **Closed** | 2025-05-06 12:56:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

With https://github.com/rake-compiler/rake-compiler-dock/issues/145 complete and released, can put this limitation into the gemspec


---

<a id="206"></a>

### #206: [Feature Request] Accept search attributes in dev server startup

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/206 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-24 14:30:05.000 UTC (11 months ago) |
| **Updated** | 2025-02-12 20:37:01.000 UTC |
| **Closed** | 2025-02-12 20:37:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/494. With https://github.com/temporalio/cli/pull/593 deployed, users should be allowed to set search attributes in dev server option that translate to `--search-attribute` calls.



---

<a id="205"></a>

### #205: [Feature Request] Allow customization of dev server UI port

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/205 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-24 13:28:12.000 UTC (11 months ago) |
| **Updated** | 2025-02-12 20:37:01.000 UTC |
| **Closed** | 2025-02-12 20:37:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/588


---

<a id="196"></a>

### #196: [Feature Request] OTel metrics over HTTP

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/196 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-15 13:40:56.000 UTC (11 months ago) |
| **Updated** | 2025-03-17 14:45:05.000 UTC |
| **Closed** | 2025-03-17 14:45:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Expose ability to have Core OTel metrics use HTTP instead of default gRPC protocol. Would recommend a simple default-false http boolean. See https://github.com/temporalio/sdk-core/issues/820.



---

<a id="195"></a>

### #195: [Feature Request] Special behavior for Temporal built-in prefixes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/195 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-15 13:15:58.000 UTC (11 months ago) |
| **Updated** | 2025-02-19 19:09:45.000 UTC |
| **Closed** | 2025-02-19 19:09:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/576


---

<a id="192"></a>

### #192: [Feature Request] Remove Go from test pipeline

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/192 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-14 14:51:32.000 UTC (12 months ago) |
| **Updated** | 2025-01-14 14:51:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Go is currently needed for the "kitchen sink" workflow, but we now have the ability to write that workflow in pure Ruby


---

<a id="191"></a>

### #191: [Feature Request] Deadlock detection - improve interruption and stack trace

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/191 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-13 12:53:44.000 UTC (12 months ago) |
| **Updated** | 2025-01-13 12:53:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today, deadlocked workflow does not get interrupted and the stack trace is where we raised it. Try to interrupt the workflow if it is evicted post-deadlock and try to put the stack trace of the deadlocked thread as the deadlock error's stack trace.


---

<a id="189"></a>

### #189: [Feature Request] OpenTelemetry tracing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/189 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-13 11:54:25.000 UTC (12 months ago) |
| **Updated** | 2025-03-27 17:07:53.000 UTC |
| **Closed** | 2025-03-27 17:07:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need full OTel tracing like other SDKs


---

<a id="187"></a>

### #187: [Feature Request] Workflow replayer

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/187 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-08 20:18:05.000 UTC (1 years ago) |
| **Updated** | 2025-01-24 19:40:14.000 UTC |
| **Closed** | 2025-01-24 19:40:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Implement workflow replayer, including capabilities commonly seen in Python and .NET to stream histories


---

<a id="185"></a>

### #185: [Feature Request] Warn on unawaited workflow futures with failures 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/185 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-08 20:16:11.000 UTC (1 years ago) |
| **Updated** | 2025-01-08 20:16:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In Java workflows today, if a future that fails is never waited on, we warn on workflow completion. We should do the same in Ruby. Could even consider warning on futures that do not fail that are never waited on, but that may get annoying. There are several forms of this in the wild in several languages (JS, .NET, Python, etc), pick what is best.


---

<a id="182"></a>

### #182: [Feature Request] Drop Ruby 3.1 support, add Ruby 3.4 support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/182 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 18:33:24.000 UTC (1 years ago) |
| **Updated** | 2025-01-15 14:55:20.000 UTC |
| **Closed** | 2025-01-15 14:55:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Confirm with users that 3.1 is not a requirement. In addition to dropping 3.1 support, we can now leverage `Data` instead of `Struct` if we want.


---

<a id="181"></a>

### #181: [Feature Request] Provide client from activity context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/181 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 14:35:31.000 UTC (1 years ago) |
| **Updated** | 2025-02-11 15:59:22.000 UTC |
| **Closed** | 2025-02-11 15:59:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Allow users to access Temporal client from within an activity. This is likely a `client` instance method on `Activity::Context`. See https://github.com/temporalio/features/issues/203.


---

<a id="180"></a>

### #180: [Feature Request] Access to workflow/activity instance from context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/180 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 14:01:48.000 UTC (1 years ago) |
| **Updated** | 2025-01-27 15:11:54.000 UTC |
| **Closed** | 2025-01-27 15:11:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

The created instance of the workflow class should be made available as `Temporalio::Workflow.instance` class method. The created instance of an activity class (even if it was created by a user) should be made available as `Temporalio::Activity::Context#instance` instance method. See https://github.com/temporalio/features/issues/572.



---

<a id="179"></a>

### #179: [Feature Request] Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/179 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 13:59:25.000 UTC (1 years ago) |
| **Updated** | 2025-01-07 13:59:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users need a workflow-local var that is scoped only to the current workflow when accessed via code. See https://github.com/temporalio/features/issues/571.

Rough sketch: like thread-local and fiber-local, a user can use `Workflow["myValue"]` to get or set workflow-local data.


---

<a id="169"></a>

### #169: [Feature Request] Metric meter implementation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/169 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 20:20:11.000 UTC (1y 3m ago) |
| **Updated** | 2024-11-12 15:17:23.000 UTC |
| **Closed** | 2024-11-12 15:17:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need metric meter abstraction (i.e. accessible from runtime or activities or workflows)

EDIT: Moved buffer implementation to #176


---

<a id="168"></a>

### #168: [Feature Request] Client RPC call cancellation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/168 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 18:12:58.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-21 15:40:06.000 UTC |
| **Closed** | 2024-10-21 15:40:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to allow users to set a `Temporalio::Cancellation` for client calls


---

<a id="166"></a>

### #166: [Feature Request] Dynamic activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/166 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 15:58:28.000 UTC (1y 3m ago) |
| **Updated** | 2025-01-17 16:25:41.000 UTC |
| **Closed** | 2025-01-17 16:25:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Support dynamic activities. Only activities are supported as of this issue creation, but if workflows come about in the interim, support their dynamic items too.


---

<a id="165"></a>

### #165: [Feature Request] Worker client replacement

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/165 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 15:44:48.000 UTC (1y 3m ago) |
| **Updated** | 2025-02-11 15:59:22.000 UTC |
| **Closed** | 2025-02-11 15:59:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to be able to replace the client on a live worker


---

<a id="164"></a>

### #164: [Feature Request] API key and RPC metadata setter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/164 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 15:44:31.000 UTC (1y 3m ago) |
| **Updated** | 2025-01-21 14:30:09.000 UTC |
| **Closed** | 2025-01-21 14:30:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to be able to set the API key and RPC metadata on the live client


---

<a id="163"></a>

### #163: [Feature Request] Schedule client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/163 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-07 15:44:01.000 UTC (1y 3m ago) |
| **Updated** | 2024-11-04 19:17:09.000 UTC |
| **Closed** | 2024-11-04 19:17:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need full featured schedule client


---

<a id="154"></a>

### #154: [Feature Request] Scaffolding and bare-bones client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/154 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-12 14:28:22.000 UTC (1y 6m ago) |
| **Updated** | 2024-08-09 19:48:38.000 UTC |
| **Closed** | 2024-08-09 19:48:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need the scaffolding and initial client for this repo. Namely:

* Scaffolding. Includes:
  * Proto gen, build, lint, docs, test, etc tasks
  * GitHub actions workflow
  * Basic README updates
* Ruby/Rust bridge
* Bare-bones start/exec-workflow-only client. Includes:
  * Starting/executing a workflow from a string only
  * Connection and minimal raw gRPC service calls
  * Workflow handle
  * Basic interceptor
  * Simple test
  * Bare-bones data conversion
  * Bare-bones error hierarchy
  * Yard doc for all API
* Test setup. Includes:
  * Testing infra/tasks
  * Workflow environment w/ local ephemeral server
  * Golang kitchen-sink worker

What will not be included in this initial PR:

* Full RBS signatures
* Full gRPC service call set
* Failure conversion
* Full error hierarchy
* Payload codecs
* Runtime telemetry
* Tests for anything but starting a workflow and getting successful results

Much of this leans on the great work by @antstorm



---

<a id="141"></a>

### #141: Workflow update support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/141 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2023-07-05 16:58:39.000 UTC (2y 6m ago) |
| **Updated** | 2023-10-10 16:24:11.000 UTC |
| **Closed** | 2023-10-10 16:24:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="134"></a>

### #134: [Bug] RBS files are not included in released Gem

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/134 |
| **State** | CLOSED |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2023-03-23 22:35:22.000 UTC (2y 9m ago) |
| **Updated** | 2023-03-26 13:22:17.000 UTC |
| **Closed** | 2023-03-26 13:22:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Trying to write a sample project using the released `temporalio` gem (v0.1.0). Steep checking appears not to be working and I see the following error in console:

```
Cannot find type definitions for library: temporalio ([nil]) (RBS::EnvironmentLoader::UnknownLibraryError)
```

I think that this is due to the fact that the `sig/` directory is not included in released gem file.


---

<a id="113"></a>

### #113: Implement basic Workflow Worker (timer only)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/113 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-01-26 16:50:57.000 UTC (2y 11m ago) |
| **Updated** | 2023-02-17 17:07:01.000 UTC |
| **Closed** | 2023-02-17 17:07:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="108"></a>

### #108: Implement TestServer environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/108 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2023-01-16 18:03:31.000 UTC (2y 11m ago) |
| **Updated** | 2023-01-26 18:39:02.000 UTC |
| **Closed** | 2023-01-26 18:39:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="98"></a>

### #98: Shutdown worker based on signals

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/98 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-19 14:35:15.000 UTC (3 years ago) |
| **Updated** | 2023-01-04 22:26:23.000 UTC |
| **Closed** | 2023-01-04 22:26:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="96"></a>

### #96: Make `Connection` interrupt friendly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/96 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-14 20:56:49.000 UTC (3 years ago) |
| **Updated** | 2022-12-15 19:03:46.000 UTC |
| **Closed** | 2022-12-15 19:03:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="95"></a>

### #95: Pass WorkerResult into Ruby land using `impl From<WorkerResult>`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/95 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-14 19:37:51.000 UTC (3 years ago) |
| **Updated** | 2022-12-15 19:03:46.000 UTC |
| **Closed** | 2022-12-15 19:03:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="94"></a>

### #94: Rename `Temporal` to `Temporalio` to align with other SDKs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/94 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-14 16:19:48.000 UTC (3 years ago) |
| **Updated** | 2022-12-21 20:56:04.000 UTC |
| **Closed** | 2022-12-21 20:56:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="92"></a>

### #92: Graceful timeout for worker shutdown

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/92 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-12 18:55:22.000 UTC (3 years ago) |
| **Updated** | 2023-01-04 22:26:23.000 UTC |
| **Closed** | 2023-01-04 22:26:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="88"></a>

### #88: Update README with Worker details

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/88 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-06 12:52:30.000 UTC (3y 1m ago) |
| **Updated** | 2023-01-04 15:48:01.000 UTC |
| **Closed** | 2023-01-04 15:48:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="87"></a>

### #87: Implement Worker shutdown

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/87 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-06 12:52:09.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-14 19:38:54.000 UTC |
| **Closed** | 2022-12-14 19:38:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="86"></a>

### #86: Improve `Worker#run` to accept block and drop `Worker#start`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/86 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-06 12:51:54.000 UTC (3y 1m ago) |
| **Updated** | 2023-01-04 12:46:49.000 UTC |
| **Closed** | 2023-01-04 12:46:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="85"></a>

### #85: Activity Interceptors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/85 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-06 12:51:17.000 UTC (3y 1m ago) |
| **Updated** | 2023-01-23 16:49:38.000 UTC |
| **Closed** | 2023-01-23 16:49:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="84"></a>

### #84: Activity Cancellations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/84 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-06 12:51:01.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-09 17:44:15.000 UTC |
| **Closed** | 2022-12-09 17:44:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="83"></a>

### #83: Activity Heartbeat

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/83 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-06 12:50:46.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-08 19:54:51.000 UTC |
| **Closed** | 2022-12-08 19:54:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="77"></a>

### #77: Add codec support for `to_payload` and `from_payload` methods

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/77 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-12-01 12:19:51.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-19 14:47:19.000 UTC |
| **Closed** | 2022-12-19 14:47:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="75"></a>

### #75: Accept `Temporal::DataConverter` in Client and Worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/75 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-11-30 12:54:31.000 UTC (3y 1m ago) |
| **Updated** | 2022-12-19 14:47:19.000 UTC |
| **Closed** | 2022-12-19 14:47:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="58"></a>

### #58: Allow custom converters and codecs on the client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/58 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-11-02 12:16:42.000 UTC (3y 2m ago) |
| **Updated** | 2022-11-11 12:29:54.000 UTC |
| **Closed** | 2022-11-11 12:29:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="56"></a>

### #56: Add YARD docs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/56 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-11-01 21:47:31.000 UTC (3y 2m ago) |
| **Updated** | 2022-11-02 11:56:46.000 UTC |
| **Closed** | 2022-11-02 11:56:46.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="53"></a>

### #53: Implement a FailureConverter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/53 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-10-18 16:52:35.000 UTC (3y 2m ago) |
| **Updated** | 2022-10-31 16:38:16.000 UTC |
| **Closed** | 2022-10-31 16:38:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="47"></a>

### #47: Isolate `workflow_service` on the `Connection` (leaving a room for `operator_service`, `health_service` and `test_service`)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/47 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-09-27 17:00:21.000 UTC (3y 3m ago) |
| **Updated** | 2023-01-26 18:39:02.000 UTC |
| **Closed** | 2023-01-26 18:39:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="36"></a>

### #36: Add exception classes and figure out hierarchy

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/36 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-02 16:37:45.000 UTC (3y 5m ago) |
| **Updated** | 2022-12-19 14:47:19.000 UTC |
| **Closed** | 2022-12-19 14:47:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="35"></a>

### #35: Submit an E2E proposal

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/35 |
| **State** | CLOSED |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-08-01 20:54:18.000 UTC (3y 5m ago) |
| **Updated** | 2022-12-19 14:47:18.000 UTC |
| **Closed** | 2022-12-19 14:47:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="32"></a>

### #32: Implement a Ruby Worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/32 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-07-21 15:31:56.000 UTC (3y 5m ago) |
| **Updated** | 2022-12-01 12:29:02.000 UTC |
| **Closed** | 2022-12-01 12:29:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="31"></a>

### #31: Wrap Core globals within a `CoreRuntime` singleton in Ruby

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/31 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-07-20 17:47:47.000 UTC (3y 5m ago) |
| **Updated** | 2022-07-25 16:50:00.000 UTC |
| **Closed** | 2022-07-25 16:50:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="29"></a>

### #29: Generate protobufs for the Core

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/29 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-07-18 15:31:53.000 UTC (3y 5m ago) |
| **Updated** | 2022-07-18 16:11:50.000 UTC |
| **Closed** | 2022-07-18 16:11:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="24"></a>

### #24: Switch to using thiserror for Error definitions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/24 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-07-01 16:01:10.000 UTC (3y 6m ago) |
| **Updated** | 2022-07-01 16:14:57.000 UTC |
| **Closed** | 2022-07-01 16:14:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="20"></a>

### #20: Add RBS type checker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/20 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-17 14:45:39.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:47:18.000 UTC |
| **Closed** | 2022-12-19 14:47:18.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="19"></a>

### #19: Integrate with Core API (initial setup, build scripts)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/19 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:32:16.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:34.000 UTC |
| **Closed** | 2022-12-19 14:46:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="18"></a>

### #18: Pick a bridging gem for Core API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/18 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:32:13.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:34.000 UTC |
| **Closed** | 2022-12-19 14:46:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="17"></a>

### #17: Research Core API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/17 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:32:10.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:34.000 UTC |
| **Closed** | 2022-12-19 14:46:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="16"></a>

### #16: Setup basic CI pipeline (rspec, rubocop)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/16 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:32:07.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:33.000 UTC |
| **Closed** | 2022-12-19 14:46:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="15"></a>

### #15: Implement an end-to-end integration test (Go workflow + Ruby client and activities)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/15 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:59.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:33.000 UTC |
| **Closed** | 2022-12-19 14:46:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="14"></a>

### #14: Integrate Client and Worker with Payload Codecs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/14 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:55.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:33.000 UTC |
| **Closed** | 2022-12-19 14:46:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="13"></a>

### #13: Integrate Client and Worker with Payload Converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/13 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:52.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:32.000 UTC |
| **Closed** | 2022-12-19 14:46:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="12"></a>

### #12: Implement Payload Codec interface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/12 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:49.000 UTC (3y 7m ago) |
| **Updated** | 2022-10-18 15:33:41.000 UTC |
| **Closed** | 2022-10-18 15:33:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="11"></a>

### #11: Implement basic Payload Converters (null, bytes and JSON)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/11 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:46.000 UTC (3y 7m ago) |
| **Updated** | 2022-10-18 14:57:29.000 UTC |
| **Closed** | 2022-10-18 14:57:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="10"></a>

### #10: Implement Payload Converter interface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/10 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:42.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:32.000 UTC |
| **Closed** | 2022-12-19 14:46:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="9"></a>

### #9: Implement Activity Class

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/9 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:35.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:32.000 UTC |
| **Closed** | 2022-12-19 14:46:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="8"></a>

### #8: Implement Activity Context

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/8 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:32.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:31.000 UTC |
| **Closed** | 2022-12-19 14:46:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="7"></a>

### #7: Implement a basic activity Worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/7 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:29.000 UTC (3y 7m ago) |
| **Updated** | 2022-07-20 17:46:45.000 UTC |
| **Closed** | 2022-07-20 17:46:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="5"></a>

### #5: Implement Temporal::WorkflowHandle

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/5 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:22.000 UTC (3y 7m ago) |
| **Updated** | 2022-12-19 14:46:31.000 UTC |
| **Closed** | 2022-12-19 14:46:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="4"></a>

### #4: Implement Temporal::Client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/4 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:31:08.000 UTC (3y 7m ago) |
| **Updated** | 2022-09-21 17:20:06.000 UTC |
| **Closed** | 2022-09-21 17:20:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


---

<a id="3"></a>

### #3: Implement Temporal::Connection

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/3 |
| **State** | CLOSED |
| **Author** | antstorm (Anthony D) |
| **Created** | 2022-05-16 17:30:51.000 UTC (3y 7m ago) |
| **Updated** | 2022-06-23 16:30:57.000 UTC |
| **Closed** | 2022-06-23 16:30:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*


