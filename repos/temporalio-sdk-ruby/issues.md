# temporalio/sdk-ruby - Complete Issue Dump

**Generated:** 2026-01-02
**Total Issues:** 24
**Total Upvotes:** 3
**Total Comments:** 15

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 24 |
| Issues with Upvotes | 2 (8%) |
| Total Upvotes | 3 |
| Total Comments | 15 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 19 |
| bug | 4 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#319](#319) | 2 | 1 | [Feature Request] Look into client-side trimming of failures to avoid server-side wrap-and-truncate |
| [#162](#162) | 0 | 5 | Investigate issue with Ruby 3.1/3.2 and worker fibers |
| [#315](#315) | 0 | 4 | [Bug] ScopedLogger fails attempting to compare symbol to integer for libraries like semantic_logger |
| [#306](#306) | 1 | 0 | [Feature Request] Update build-gems GH workflow smoke test to use macOS Intel |
| [#360](#360) | 0 | 1 | Problem: Testing Temporal Workflows with Signals in Ruby SDK Time-Skipping Environment |
| [#334](#334) | 0 | 1 | [Feature Request] Ensure fibers and workflow instances are properly GC'd on workflow eviction |
| [#238](#238) | 0 | 1 | [Feature Request] Serialization context for codecs and converters |
| [#203](#203) | 0 | 1 | [Feature Request] Contributing Guide |
| [#172](#172) | 0 | 1 | [Bug] Windows CI segfaulting during tests |
| [#367](#367) | 0 | 0 | [Feature Request] Support non-workflow activities |
| [#364](#364) | 0 | 0 | [Feature Request] Confirm/assert Ruby 4 compatibility, maybe drop 3.2 support |
| [#361](#361) | 0 | 0 | [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow |
| [#355](#355) | 0 | 0 | [Bug] Some common uses of ActiveModel fail in workflows due to sync construct use |
| [#333](#333) | 0 | 0 | [Feature Request] Require payload codec from data converter file |
| [#318](#318) | 0 | 0 | [Feature Request] Plugin support |
| [#270](#270) | 0 | 0 | [Ruby] Worker Versioning high level client |
| [#232](#232) | 0 | 0 | Initial Nexus implementation - Ruby |
| [#222](#222) | 0 | 0 | [Feature Request] Test randomness seed update over reset |
| [#218](#218) | 0 | 0 | [Feature Request] Support buildable source gem |
| [#209](#209) | 0 | 0 | [Feature Request] Add explicit memoization support to the`patched()` API |
| [#192](#192) | 0 | 0 | [Feature Request] Remove Go from test pipeline |
| [#191](#191) | 0 | 0 | [Feature Request] Deadlock detection - improve interruption and stack trace |
| [#185](#185) | 0 | 0 | [Feature Request] Warn on unawaited workflow futures with failures  |
| [#179](#179) | 0 | 0 | [Feature Request] Provide "workflow local" |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

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
| **Created** | 2024-10-07 14:08:31.000 UTC (1y 2m ago) |
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

<a id="360"></a>

### #360: Problem: Testing Temporal Workflows with Signals in Ruby SDK Time-Skipping Environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/360 |
| **State** | OPEN |
| **Author** | NielsKSchjoedt (Niels Kristian Schjødt) |
| **Created** | 2025-11-09 22:46:12.000 UTC (1 months ago) |
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

<a id="334"></a>

### #334: [Feature Request] Ensure fibers and workflow instances are properly GC'd on workflow eviction

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/334 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-08 20:16:12.000 UTC (3 months ago) |
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

<a id="364"></a>

### #364: [Feature Request] Confirm/assert Ruby 4 compatibility, maybe drop 3.2 support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/364 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-02 14:50:16.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 14:53:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to update CI, docs, etc to confirm/assert Ruby 4 compatibility. Also consider dropping 3.2 support if it goes EOL as expected.



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

<a id="318"></a>

### #318: [Feature Request] Plugin support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/318 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 14:33:56.000 UTC (4 months ago) |
| **Updated** | 2025-08-15 14:33:56.000 UTC |
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

<a id="232"></a>

### #232: Initial Nexus implementation - Ruby

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/232 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-11 14:16:52.000 UTC (9 months ago) |
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

<a id="222"></a>

### #222: [Feature Request] Test randomness seed update over reset

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/222 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-12 18:34:14.000 UTC (10 months ago) |
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
| **Created** | 2025-02-10 21:14:34.000 UTC (10 months ago) |
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

<a id="192"></a>

### #192: [Feature Request] Remove Go from test pipeline

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/192 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-14 14:51:32.000 UTC (11 months ago) |
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
| **Created** | 2025-01-13 12:53:44.000 UTC (11 months ago) |
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

<a id="185"></a>

### #185: [Feature Request] Warn on unawaited workflow futures with failures 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/185 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-08 20:16:11.000 UTC (11 months ago) |
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

<a id="179"></a>

### #179: [Feature Request] Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-ruby/issues/179 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 13:59:25.000 UTC (12 months ago) |
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


