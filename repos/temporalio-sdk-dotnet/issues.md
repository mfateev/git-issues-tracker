# temporalio/sdk-dotnet - Complete Issue Dump

**Generated:** 2026-01-09
**Total Issues:** 52
**Total Upvotes:** 13
**Total Comments:** 54

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 52 |
| Issues with Upvotes | 6 (12%) |
| Total Upvotes | 13 |
| Total Comments | 54 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 31 |
| bug | 13 |
| Mend: dependency security vulnerability | 1 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#286](#286) | 7 | 1 | Support .NET Trimming |
| [#179](#179) | 0 | 8 | [Bug] Workflow Update hangs on time skipping environment |
| [#390](#390) | 2 | 3 | [Feature Request] F# Samples/Documentation |
| [#563](#563) | 0 | 5 | Use global.json file to centralize SDK version |
| [#577](#577) | 0 | 4 | [Bug] Investigate test host crash flake |
| [#553](#553) | 0 | 4 | [Feature Request] OperatorService (RPC) and WorkflowService (RPC) members are marked virtual or inherit from interface |
| [#363](#363) | 1 | 2 | [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor |
| [#585](#585) | 0 | 3 | Nexus operation ignores ScheduleToCloseTimeout and retries every 10 seconds |
| [#420](#420) | 1 | 1 | [Feature Request] Provide synchronous Run method in testing |
| [#395](#395) | 0 | 3 | [Bug] Temporalio.Exceptions.RpcException:operation was canceled |
| [#234](#234) | 0 | 3 | [Bug] Unexpected reuse of payload instances in payload codec for specific workflow failure scenarios. |
| [#579](#579) | 0 | 2 | [Bug] SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux |
| [#256](#256) | 1 | 0 | [Feature Request] Clarify what the ICustomMetricMeter is used for in DiagnosticSource extension README |
| [#131](#131) | 1 | 0 | [Feature Request] Support single-platform local NuGet package build |
| [#550](#550) | 0 | 1 | [Bug] Investigate `CanRunWith_CustomSlotSupplier` flake |
| [#514](#514) | 0 | 1 | [Feature Request] Nexus cancellation type support |
| [#496](#496) | 0 | 1 | Inconsistent log property names for the workflow run identifier |
| [#478](#478) | 0 | 1 | [Feature Request] Investigate test flake for `CanRunWith_CustomSlotSupplier` |
| [#435](#435) | 0 | 1 | [Feature Request] Workflow logging - NLog async calls |
| [#386](#386) | 0 | 1 | [Feature Request] Improve WaitConditionAsync semantics |
| [#357](#357) | 0 | 1 | [Bug] Unexpected Serialization of Activity Results |
| [#337](#337) | 0 | 1 | [Feature Request] Include more details from tonic from failed client_rpc_call invocations |
| [#307](#307) | 0 | 1 | [Feature Request] Replace `System.TimeProvider` in workflows |
| [#305](#305) | 0 | 1 | Handle multiple completion commands |
| [#280](#280) | 0 | 1 | [Bug] TaskQueue not forwarded when using Test Environment, breaks ContinueAsNew (hangs) |
| [#247](#247) | 0 | 1 | [Feature Request] Support for win-x86 |
| [#229](#229) | 0 | 1 | [Feature Request] Make Temporalio.Testing to a seperate nuget out of Temporalio |
| [#171](#171) | 0 | 1 | [Feature Request] Schedule creation should create tracing span by default |
| [#32](#32) | 0 | 1 | [Feature Request] Add CancellationToken parameter to TemporalClient.ConnectAsync and friends |
| [#588](#588) | 0 | 0 | [Bug] Some unlikely workflow task failures like failure conversion issues may be lost |
| [#587](#587) | 0 | 0 | Refactor Bridge.Client to be IDisposable instead of a SafeHandle |
| [#586](#586) | 0 | 0 | Separate unmanaged pointer lifecycle management into SafeHandles |
| [#584](#584) | 0 | 0 | [Bug] Loading TLS certificates from path doesn't work |
| [#578](#578) | 0 | 0 | [Feature Request] Add tests to confirm proper Nexus support for time-skipping environment |
| [#576](#576) | 0 | 0 | [Feature Request] .NET Analyzer for Checking Workflows |
| [#568](#568) | 0 | 0 | [Feature Request] Support non-workflow activities |
| [#558](#558) | 0 | 0 | [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow |
| [#549](#549) | 0 | 0 | [Bug] Investigate `ExecuteWorkflowAsync_PollingBehavior_Autoscaling` flake |
| [#479](#479) | 0 | 0 | [.NET] Worker Versioning high level client |
| [#440](#440) | 0 | 0 | [Feature Request] Support user data in forwarded log callback in C bridge |
| [#412](#412) | 0 | 0 | Expose Workflow cancel cause/reason |
| [#402](#402) | 0 | 0 | [Feature Request] Expose read-only headers to activity info |
| [#398](#398) | 0 | 0 | [Feature Request] Add explicit memoization support to the`Patched()` API |
| [#387](#387) | 0 | 0 | [Feature Request] Provide "workflow local" |
| [#360](#360) | 0 | 0 | [Feature Request] Auto-skip time in time-skipping testing environment when waiting on update result |
| [#299](#299) | 0 | 0 | [Feature Request] Upon initial client connection, use `RpcException` if initial `GetSystemInfo` call fails |
| [#291](#291) | 0 | 0 | [Feature Request] Update test running to replay |
| [#246](#246) | 0 | 0 | [Feature Request] Expose raw proto objects on WorkflowExecution and WorkflowExecutionDescription |
| [#243](#243) | 0 | 0 | [Feature Request] Enforce no-commands-allowed restrictions in read-only contexts |
| [#194](#194) | 0 | 0 | coverlet.collector.3.1.2.nupkg: 1 vulnerabilities (highest severity is: 7.5) |
| [#176](#176) | 0 | 0 | [Feature Request] Handle possibility of update-before-start |
| [#77](#77) | 0 | 0 | [Bug] Time skipping test server not auto skipping time properly in some cases |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

<a id="286"></a>

### #286: Support .NET Trimming

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/286 |
| **State** | OPEN |
| **Author** | angusbjones (Angus Jones) |
| **Created** | 2024-06-25 03:16:47.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-25 13:17:48.000 UTC |
| **Upvotes** | 7 |
| **Comments** | 1 |
| **Priority Score** | 15 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 7 👀 1 |

#### Description

### What are you really trying to do?
Publish trimmed/aot-compatible dotnet applications.
<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->
Temporalio (and other packages) don't have trimming annotations included which produces errors when publishing with trimming enabled. 

### Minimal Reproduction
1. Download the sample at [src/AspNet/Worker](https://github.com/temporalio/samples-dotnet/tree/main/src/AspNet/Worker).
2. Modify TemporalioSamples.AspNet.Worker.csproj to include `<PublishTrimmed>true</PublishTrimmed>`
3. Run `dotnet publish` on TemporalioSamples.AspNet.Worker.csproj. 

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: M1 Mac
- Temporal Version: 1.1.2
- Are you using Docker or Kubernetes or building Temporal from source? Package


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-25 13:17:08.000 UTC</summary>

I think this is not a bug, but rather a feature request to have the SDK support trimming. There are some things we'll have to do since we use PInvoke and reflection in some places. We will keep this open as a feature request for trimming support and if it garners enough interest, we can look into annotating the SDK for it and running all tests while trimmed to ensure it works and continues to.

</details>


---

<a id="179"></a>

### #179: [Bug] Workflow Update hangs on time skipping environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/179 |
| **State** | OPEN |
| **Author** | alrz (Alireza Habibi) |
| **Created** | 2024-01-21 20:01:01.000 UTC (1y 11m ago) |
| **Updated** | 2024-08-08 22:54:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 8 |
| **Priority Score** | 8 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

### Minimal Reproduction

```cs
[Workflow]
public class TestWorkflow
{
   [WorkflowUpdate]
   public Task Update() => Task.CompletedTask;
   [WorkflowRun]
   public Task RunAsync() => Workflow.DelayAsync(TimeSpan.FromSeconds(3));
}
public async Task Test() {
    await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();
    using var worker = new TemporalWorker(
        env.Client,
        new TemporalWorkerOptions($"tq-{Guid.NewGuid()}").
            AddWorkflow<TestWorkflow>());
    await worker.ExecuteAsync(async () =>
    {
        var h = await env.Client.StartWorkflowAsync(
            (TestWorkflow wf) => wf.RunAsync(),
            new(id: $"workflow-{Guid.NewGuid()}", taskQueue: worker.Options.TaskQueue!));
        await h.ExecuteUpdateAsync(wf => wf.Update());
        await h.GetResultAsync();
    });
}
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Windows x64
- Temporal Version: Temporal nuget package 1.0.0
- Are you using Docker or Kubernetes or building Temporal from source? N/A

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (8)

<details>
<summary><strong>cretz</strong> commented on 2024-01-22 13:58:55.000 UTC</summary>

I have replicated and we have an outstanding issue in the Java SDK (where our time-skipping test server implementation lives): https://github.com/temporalio/sdk-java/issues/1903. Updates are experimental/unstable currently, but in the meantime you should be able to use a normal local server if you must use them and need to test them. I will leave this issue open pending a fix.

</details>

<details>
<summary><strong>alrz</strong> commented on 2024-01-22 14:07:23.000 UTC</summary>

> where our time-skipping test server implementation lives

Good to know, thanks! BTW is there any issue to track progress on workflow updates? If I'm not mistaken it seems like this is not sdk-related and the server implementation is actually experimental for the time being.

I thought signals would handle concurrent ops but turns out I had to use updates for this. The workaround is to use a combination of query/signal but I'm not comfortable doing that because the logic would be outside of the workflow itself and that would be hard to reason about.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-23 22:46:06.000 UTC</summary>

> BTW is there any issue to track progress on workflow updates?

I am not aware of an issue to track this. You can see the status at the top of https://docs.temporal.io/workflows#update.

> I thought signals would handle concurrent ops but turns out I had to use updates for this.

Signals can handle concurrent pieces, they just don't have results to return

> The workaround is to use a combination of query/signal but I'm not comfortable doing that because the logic would be outside of the workflow itself and that would be hard to reason about.

There's also an advanced approach to "push" results to activity workers hosted by the caller. See https://github.com/temporalio/samples-go/tree/main/reqrespactivity for a description of the pattern.

</details>

<details>
<summary><strong>alrz</strong> commented on 2024-01-24 12:12:18.000 UTC</summary>

> Signals can handle concurrent pieces, they just don't have results to return

Right, I was confused by "asynchronous" mentioned in the docs. I supposed that means we don't wait for the signal method to complete on the client side, however the call itself is synchronized inside the workflow.

Just one more question, where do we expect the signal to be received by the workflow? If I had to guess, between each `await` there's a chance that a signal would be received and get executed and then a workflow-run would be scheduled so we need to keep track of the state between each `await` and check it either in the update validator or via a query, is that correct?

Context: I'm trying to handle a concurrent timeout and signal using `WhenAny(Delay,WaitCondition)`, the happy path is that the signal would be received before the timeout. But if the timeout occurred beforehand we need to run a compensating operation. 


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-24 13:37:36.000 UTC</summary>

> Just one more question, where do we expect the signal to be received by the workflow? If I had to guess, between each await there's a chance that a signal would be received and get executed and then a workflow-run would be scheduled so we need to keep track of the state between each await and check it either in the update validator or via a query, is that correct?

This is deviating from the issue and it may be better for a discussion place like the #dotnet-sdk channel in https://t.mp/slack or our forums.

Yes, signals are received from server at potentially any yield point. Yes, most users simply set a class field from their signal and have their `Workflow.WaitConditionAsync` wait for that value to get set to a certain value. Your use case of wait-for-signal-or-timeout is a very normal one and the proper approach.

Reactions: 👍 1

</details>

<details>
<summary><strong>DovydasNavickas</strong> commented on 2024-07-18 14:29:36.000 UTC</summary>

@cretz
>Updates are experimental/unstable currently, but in the meantime you should be able to use a normal local server if you must use them and need to test them.

Locally run server with temporal CLI has the same problem as the update never returns a value, even though in the dashboard the result is already visible. The update throws an exception:
```
Temporalio.Exceptions.RpcException: workflow execution already completed
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-07-18 17:20:45.000 UTC</summary>

This sounds like a separate issue. Can you make a new issue with your .NET SDK version, CLI version, and (if you can) a replication? Can just alter https://github.com/temporalio/samples-dotnet/tree/main/src/WorkflowUpdate to demonstrate what you're seeing.

</details>

<details>
<summary><strong>DovydasNavickas</strong> commented on 2024-08-08 22:53:55.000 UTC</summary>

@cretz, I've been busy with things, but this turned out for the better: I've updated the Temporal CLI and the WorkflowUpdate sample started working. Probably there was a bug 3 weeks ago and it has been fixed.

Reactions: 👍 1

</details>


---

<a id="390"></a>

### #390: [Feature Request] F# Samples/Documentation

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/390 |
| **State** | OPEN |
| **Author** | purkhusid (Daniel P. Purkhús) |
| **Created** | 2025-01-08 17:50:48.000 UTC (1 years ago) |
| **Updated** | 2025-09-01 09:03:25.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

Currently all samples and docs are using C#. It would be very useful for people that are using F# to have some samples as well since it would lower the barrier of entry if it was not needed to do the translation from C# to F#.

It would also be good to know if there were any gotchas around using Temporal with F# e.g. is F#'s async a bad idea when using the Temporal SDK?


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-01-09 14:24:45.000 UTC</summary>

There is already a sample request open at https://github.com/temporalio/samples-dotnet/issues/10, but we have not prioritized this effort. Some early research showed that you may not be able to use the typesafe lambda expressions, but otherwise it may work. There has not been enough desire for F# to invest in it thus far. Full featured F# support would be more than a sample probably, it'd be a `Temporalio.Extensions.FSharp` package with some helpers I think.

</details>

<details>
<summary><strong>aggieben</strong> commented on 2025-08-30 23:00:34.000 UTC</summary>

I'm using F# for my backend and workflow definitions.  I'd be interested in this.  Currently running into a problem serializing workflow args that have an F# union in them.

</details>

<details>
<summary><strong>purkhusid</strong> commented on 2025-09-01 09:01:41.000 UTC</summary>

@aggieben You'll have to add F# JSON serialization using e.g. `FSharp.SystemTextJson`. Here is the custom converter settings that we use for our projects:

```
let private customDataConverter =
        // Support F# specifics when serialising workflow inputs/outputs
        let jsonOptions =
            let opts = JsonSerializerOptions()
            opts.Converters.Add(JsonFSharpConverter())
            opts

        // These converters will be attempted in order
        // Explicitly define the ordering
        // the only change from the default ordering is that we add BinaryProtoConverter before JsonProtoConverter
        // due to issues related to serializing the generated fsharp generated proto models
        let converters: IEncodingConverter array = [|
            new BinaryNullConverter()
            new BinaryPlainConverter()
            new BinaryProtoConverter()
            new JsonProtoConverter()
            new JsonPlainConverter(jsonOptions)
        |]

        DataConverter(new DefaultPayloadConverter(converters), new DefaultFailureConverter())
```

We are successfully rolling out Temporal in our codebase using F# but there are some annoyances regarding overload resolution but they can be overcome by explicitly adding type parameters when using the Temporal client.

</details>


---

<a id="563"></a>

### #563: Use global.json file to centralize SDK version

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/563 |
| **State** | OPEN |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2025-11-19 00:31:30.000 UTC (1 months ago) |
| **Updated** | 2025-12-30 20:53:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | None |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

There are several places in build pipelines that specify the SDK version and there is no clear documentation as to which version of the SDK should be used to build the .NET projects.

## Proposed Solution

Add a [global.json](https://learn.microsoft.com/en-us/dotnet/core/tools/global-json) file to the repository that specifies the version of the .NET SDK to use. This has the benefit of:
- Removing the need for build pipelines to know which version of the .NET SDK is necessary.
- Having a central location that allow .NET tooling understands how to determine which version of the .NET SDK to use.
- Allow Dependabot to potentially update the .NET SDK version if using the full triplet version.

#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2025-11-19 15:26:18.000 UTC</summary>

Also, if possible to include this anywhere other than the top-level, that'd be ideal. We already have too many top-level files for my liking (I would have liked not to have `omnisharp.json` there but I was disagreed with). It continues to move the README below the fold and make for a bit of an uglier view when arriving at the repo.

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-11-19 23:46:27.000 UTC</summary>

> Also, if possible to include this anywhere other than the top-level, that'd be ideal.

There are two classes of implicit references to the global.json that I see that would be used in this repository:
- The `setup-dotnet` GitHub action
- The solution and project files

The GitHub action allows specifying a path to global.json file, so it can be located anywhere in the repository for these.

For the solution and project files, the global.json has to be at some common root of all of those. At this time, that would be the root of the repository. However, if the `tests` directory was moved under the `src` directory, then the global.json file (and likely all of the other .NET files like the editor config, omnisharp, props, etc) could be put under that directory; these are typically looked up recursively from the directory of the solution/project file up to the root of the filesystem.

I'm not certain that's justification enough to shuffle around the source code in the repo though. The number of files that are currently at the root of the repository is not very large and feels less than a typical .NET repository.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-11-20 14:16:11.000 UTC</summary>

Yeah, we don't want to move around the entire source. But we've been operating without this file fine too, so one wonders if it is that required. I do recognize we have fewer top-level files than a typical .NET repo which is very much on purpose.

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-01 22:08:14.000 UTC</summary>

**User Experience**
If a person works consistently in the code base, said person probably already knows the requirements for building this repository. As someone newer to this project, I had to search to determine what version of the .NET SDK was necessary before the move to the .NET 10 SDK. Using a global.json file makes it clear as to what version is necessary and provides a user experience when that requirement is not met:

```
Requested SDK version: 10.0.100
global.json file: <path>/temporalio-sdk-dotnet/global.json

Installed SDKs:
8.0.416 [/usr/local/share/dotnet/sdk]

Install the [10.0.100] .NET SDK or update [<path>/temporalio-sdk-dotnet/global.json] to match an installed SDK.

Learn about SDK resolution:
https://aka.ms/dotnet/sdk-not-found
```

**Version Consistency**
Each aspect of the build process doesn't need to understand what is the .NET SDK version that is necessary to use to successfully build the repository. Currently, there are 5 separate `actions/setup-dotnet@v4` task invocations in 4 GitHub workflows that all need to agree on what is the correct version. Using a global.json file, specifying that version should not be necessary.

All of the "native" .NET tooling understands global.json and how to look it up.

**Maintenance**
Next time that .NET SDK needs a new major version bump, there will be fewer files and occurances that would need to be updated. After this type of change, I count two places: the global.json file and the container image specification of the Alpine images.

**Pinning**
In the unlikely event that a new SDK patch breaks the ability to build, using a centralized version allows the repository to be pinned to a specific version to avoid build breaks.

**Dependabot**
While not used currently, dependabot understands the global.json file and can update the SDK version as necessary to make sure that it is not set to a vulnerable version.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-12-02 13:58:22.000 UTC</summary>

Yeah, I think it's understood why a global.json file has value for _contributors_ and CI, just trying to reduce top-level files for _everyone_ that views this repo (which is a lot more than contributors). Having said that, it's not that big of a deal if you think it's important enough.

</details>


---

<a id="577"></a>

### #577: [Bug] Investigate test host crash flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/577 |
| **State** | CLOSED |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2025-12-12 22:16:08.000 UTC (27 days ago) |
| **Updated** | 2026-01-06 17:17:54.000 UTC |
| **Closed** | 2026-01-06 17:17:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | jmaeagle99 |
| **Milestone** | None |

#### Description

### Describe the bug

CI tests on `main` branch have been running into test host process crashes. The following are examples of workflow runs with the crash and their corresponding change:
| Date | Job | Variant | Commit |
|---|---|---|---|
| 2025-12-12 | https://github.com/temporalio/sdk-dotnet/actions/runs/20175327021/job/57921738811 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/79d44c3472bc77fe3e294bf5b9cfe01fdf896527 |
| 2025-12-10 | https://github.com/temporalio/sdk-dotnet/actions/runs/20110892146/job/57707557020 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/2149661d87fb6cf091066d1f6b6056e486696240 |
| 2025-12-02 | https://github.com/temporalio/sdk-dotnet/actions/runs/19900160973/job/57041412266 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/549285ab87773de9120704b788116f957d76b03a |
| 2025-11-17 | https://github.com/temporalio/sdk-dotnet/actions/runs/19445103513/job/55637681567 | macos-intel | https://github.com/temporalio/sdk-dotnet/commit/5161e0bc814baf0e382cc4e80c465c1e3d2d9669 |
| 2025-11-07 | https://github.com/temporalio/sdk-dotnet/actions/runs/19186311432/job/54853416545 | ubuntu-arm | https://github.com/temporalio/sdk-dotnet/commit/31e754f863a815cc9563d4c85df69c8426f42aa8 |

The test that was running when the crash occurs is not consistent across runs.

#### Comments (4)

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-18 22:50:20.000 UTC</summary>

The lastest test run exhibiting this issue has one or two threads with the following stack on it, which may be the cause of the crash:

```bash
        Child SP               IP Call Site
0000FF43E2CBD520 0000ff4862c80bdc [InlinedCallFrame: 0000ff43e2cbd520] Temporalio.Bridge.Interop.Methods.temporal_core_worker_complete_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Temporalio.Bridge.Interop.TemporalCoreByteArrayRef, Void*, IntPtr)
0000FF43E2CBD520 0000ff482abf9078 [InlinedCallFrame: 0000ff43e2cbd520] Temporalio.Bridge.Interop.Methods.temporal_core_worker_complete_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Temporalio.Bridge.Interop.TemporalCoreByteArrayRef, Void*, IntPtr)
0000FF43E2CBD510 0000FF482ABF9078 ILStubClass.IL_STUB_PInvoke(Temporalio.Bridge.Interop.TemporalCoreWorker*, Temporalio.Bridge.Interop.TemporalCoreByteArrayRef, Void*, IntPtr)
0000FF43E2CBD620 0000FF482ABF2DF8 Temporalio.Bridge.Worker+<CompleteWorkflowActivationAsync>d__18.MoveNext()
0000FF43E2CBD720 0000FF482B115C94 System.Runtime.CompilerServices.AsyncTaskMethodBuilder.Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF43E2CBD760 0000FF482ABF2AC4 Temporalio.Bridge.Worker.CompleteWorkflowActivationAsync(Temporalio.Bridge.Api.WorkflowCompletion.WorkflowActivationCompletion)
0000FF43E2CBD7B0 0000FF482AC7C220 Temporalio.Worker.WorkflowWorker+<HandleCacheEvictionAsync>d__12.MoveNext()
0000FF43E2CBD950 0000FF482B115C94 System.Runtime.CompilerServices.AsyncTaskMethodBuilder.Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF43E2CBD990 0000FF482AC7BC50 Temporalio.Worker.WorkflowWorker.HandleCacheEvictionAsync(Temporalio.Bridge.Api.WorkflowActivation.WorkflowActivation, Temporalio.Bridge.Api.WorkflowActivation.RemoveFromCache)
0000FF43E2CBD9E0 0000FF482ABD3C84 Temporalio.Worker.WorkflowWorker+<HandleActivationAsync>d__11.MoveNext()
0000FF43E2CBE160 0000FF482B115C94 System.Runtime.CompilerServices.AsyncTaskMethodBuilder.Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF43E2CBE1A0 0000FF482ABD3754 Temporalio.Worker.WorkflowWorker.HandleActivationAsync(Temporalio.Bridge.Api.WorkflowActivation.WorkflowActivation)
0000FF43E2CBE1F0 0000FF482ABD3630 Temporalio.Worker.WorkflowWorker+<>c__DisplayClass10_1.<ExecuteAsync>b__0()
0000FF43E2CBE210 0000FF482B16E428 System.Threading.ExecutionContext.RunFromThreadPoolDispatchLoop(System.Threading.Thread, System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 264]
0000FF43E2CBE240 0000FF482B0EEE30 System.Threading.Tasks.Task.ExecuteWithThreadLocal(System.Threading.Tasks.Task ByRef, System.Threading.Thread) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/Task.cs @ 2346]
0000FF43E2CBE300 0000FF482AB8224C System.Threading.ThreadPoolWorkQueue.Dispatch() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ThreadPoolWorkQueue.cs @ 1154]
0000FF43E2CBE3C0 0000FF4822546CC4 System.Threading.PortableThreadPool+WorkerThread.WorkerThreadStart() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/PortableThreadPool.WorkerThread.cs @ 118]
0000FF43E2CBE4B0 0000FF482B2180E0 System.Threading.Thread.StartCallback()
0000FF43E2CBE6B8 0000ff486296b444 [DebuggerU2MCatchHandlerFrame: 0000ff43e2cbe6b8]
```

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-19 06:30:39.000 UTC</summary>

If I debugged this correctly, the SIGSEGV occurs at https://github.com/temporalio/sdk-core/blob/master/crates/sdk-core-c-bridge/src/lib.rs#L39. In the dump that I debugged, data is pointing to an invalid memory address (probably use-after-free issue).

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-12-19 13:33:39.000 UTC</summary>

tldr: We should stop freeing using destructors for `Scope` and `ByteArrayRef`. We should only use `Dispose` for both (and not call from destructors).

---

Reviewing the code, I can't see how at runtime the byte array would point to an invalid place since it's pinned .NET side for the life of the C call.

EDIT: After some searching...

However, I do wonder about the lifetime of the static `ByteArrayRef.Empty` on process shutdown. I wonder if it's getting its destructor called while in use on the C side. Note that `Scope.ByteArray` does not add `ByteArrayRef.Empty` to `byteArrayRefs` because we figured the pointer would be stable for the life of the process, but I believe .NET does run GC/destructors for statics on process shutdown. If you can reliably replicate, try adding the `Empty` to `byteArrayRefs` and see if it changes anything.

One reason why I think this may not be the case is that I cannot see a situation where `temporal_core_worker_complete_workflow_activation` would ever get an empty byte array (it should always be a proto with at least the run ID.

EDIT: After some searching...

But now, the more I think about it, the more I think process shutdown in C# can just run destructors even for referenced objects which will free memory for all byte array refs, not just empty ones. If you can reliably replicate, may be worth seeing if we can track when pointers are freed compared to when they are accessed by Rust. Or maybe intentionally leak the memory just to confirm it is our byte array destructor causing the issue (and maybe for an actual fix we can intentionally leak if we know we're in process shutdown situation).

EDIT: After some searching...

The more I dig through CLR stuff, the more I think this statement by ChatGPT is our issue:

> A finalizer must never release native-visible resources whose premature release can crash the process.

So I wonder if we should stop freeing in destructors and only free on dispose explicitly (and don't call dispose from destructors). This is called out at https://learn.microsoft.com/en-us/dotnet/standard/native-interop/best-practices:

> ❌ AVOID finalizers to manage lifetime of objects that encapsulate unmanaged resources. For more information, see [Implement a Dispose method](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose).

If this were process shutdown related, it would fit with it mostly only occurring in tests and not reported during normal runtime use by users.

</details>

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-20 00:32:34.000 UTC</summary>

Managed call stack from newer dump:

```
OS Thread Id: 0x1e2f (14)
        Child SP               IP Call Site
0000FF3C9BFFDA40 0000ff410d5a7b74 [InlinedCallFrame: 0000ff3c9bffda40] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
0000FF3C9BFFDA40 0000ff40d55804a0 [InlinedCallFrame: 0000ff3c9bffda40] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
0000FF3C9BFFDA30 0000FF40D55804A0 ILStubClass.IL_STUB_PInvoke(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
0000FF3C9BFFDB20 0000FF40D5592FD0 Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
0000FF3C9BFFDC30 0000FF40D5AA323C System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].Start[[System.__Canon, System.Private.CoreLib]](System.__Canon ByRef)
0000FF3C9BFFDC70 0000FF40D558F024 Temporalio.Bridge.Worker.PollWorkflowActivationAsync()
0000FF3C9BFFDCB0 0000FF40D558A9A4 Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10.MoveNext()
0000FF3C9BFFDEC0 0000FF40D5568768 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
0000FF3C9BFFDF10 0000FF40D5AE44B8 System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
0000FF3C9BFFDF80 0000FF40D5AE52A4 System.Threading.Tasks.AwaitTaskContinuation.RunOrScheduleAction(System.Action, Boolean) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 743]
0000FF3C9BFFDFC0 0000FF40D55E50D8 System.Threading.Tasks.Task.RunContinuations(System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/Task.cs @ 3480]
0000FF3C9BFFE070 0000FF40D5AEE948 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].SetResult(System.__Canon) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 478]
0000FF3C9BFFE0A0 0000FF40D5593234 Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
0000FF3C9BFFE1B0 0000FF40D5568768 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object) [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
0000FF3C9BFFE200 0000FF40D5AF3928 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon, System.Private.CoreLib],[System.__Canon, System.Private.CoreLib]].MoveNext() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 350]
0000FF3C9BFFE260 0000FF40D5B143B4 System.Threading.Tasks.AwaitTaskContinuation.System.Threading.IThreadPoolWorkItem.Execute() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 647]
0000FF3C9BFFE300 0000FF40D55662D0 System.Threading.ThreadPoolWorkQueue.Dispatch() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/ThreadPoolWorkQueue.cs @ 1154]
0000FF3C9BFFE3C0 0000FF40CCF26CC4 System.Threading.PortableThreadPool+WorkerThread.WorkerThreadStart() [/_/src/runtime/src/libraries/System.Private.CoreLib/src/System/Threading/PortableThreadPool.WorkerThread.cs @ 118]
0000FF3C9BFFE4B0 0000FF40CCEFB690 System.Threading.Thread.StartCallback()
0000FF3C9BFFE6B8 0000ff410d29b444 [DebuggerU2MCatchHandlerFrame: 0000ff3c9bffe6b8]
```

Native call stack is:
```
(gdb) bt
#0  0x0000ff410d5a7b74 in __GI___wait4 (pid=9865, stat_loc=0xff40b868ec04, options=0, usage=0x0) at ../sysdeps/unix/sysv/linux/wait4.c:30
#1  0x0000ff410d2d9dfc in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#2  0x0000ff410d2db1bc in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#3  0x0000ff410d2b7ea8 in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#4  0x0000ff410d2b72e4 in ?? () from /usr/share/dotnet/shared/Microsoft.NETCore.App/10.0.1/libcoreclr.so
#5  <signal handler called>
#6  0x0000ff3c9123008c in __aarch64_ldadd8_relax () at ./lib/builtins/aarch64/lse.S:250
#7  0x0000ff3c8fef7644 in core::sync::atomic::atomic_add<usize, usize> (dst=0xff3c00300034) at /rustc/ded5c06cf21d2b93bffd5d884aa6e96934ee4234/library/core/src/sync/atomic.rs:3983
#8  core::sync::atomic::AtomicUsize::fetch_add (self=0xff3c00300034) at /rustc/ded5c06cf21d2b93bffd5d884aa6e96934ee4234/library/core/src/sync/atomic.rs:3165
#9  alloc::sync::{impl#30}::clone<temporalio_sdk_core::worker::Worker, alloc::alloc::Global> (self=0xff3c94041820) at /rustc/ded5c06cf21d2b93bffd5d884aa6e96934ee4234/library/alloc/src/sync.rs:2198
#10 0x0000ff3c8f6e8020 in temporalio_sdk_core_c_bridge::worker::temporal_core_worker_poll_workflow_activation (worker=0xff3c94041810, user_data=0x0, callback=0xff40cdd8bcc0) at crates/sdk-core-c-bridge/src/worker.rs:683
#11 0x0000ff40d55804a0 in ?? ()
#12 0x0000ff3c9bffe6b8 in ?? ()
Backtrace stopped: previous frame inner to this frame (corrupt stack?)
```

Frame 10 is:
```
(gdb) frame 10
#10 0x0000ff3c8f6e8020 in temporalio_sdk_core_c_bridge::worker::temporal_core_worker_poll_workflow_activation (worker=0xff3c94041810, user_data=0x0, callback=0xff40cdd8bcc0) at crates/sdk-core-c-bridge/src/worker.rs:683
683         let core_worker = worker.worker.as_ref().unwrap().clone();
```

Likely cause is that PollWorkflowActivationAsync is called after the Worker has been disposed.

</details>


---

<a id="553"></a>

### #553: [Feature Request] OperatorService (RPC) and WorkflowService (RPC) members are marked virtual or inherit from interface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/553 |
| **State** | OPEN |
| **Author** | kimpenhaus (Marcus Kimpenhaus) |
| **Created** | 2025-10-29 12:21:36.000 UTC (2 months ago) |
| **Updated** | 2025-10-29 13:18:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

We are using the ITemporalClient -> OperatorService and WorkflowService to create/make modifications on Temporal namespaces from within a Kubernetes operator. To verify our logic runs as intended we would like to write unit test (we are using NSubstitute). To setup and mock each use-case we need to substitute the corresponding services e.g OperatorService (ITemporalClient and ITemporalConnection are already interfaces).

To substitute the intended methods they need to be either virtual or come from an interface.

### Describe the solution you'd like

From what I saw you already did something similar in #419 - so marking the methods in OperatorService.Rpc and WorkflowService.Rpc virtual would be a good enough solution,  extracting interfaces would maybe be even better.

#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2025-10-29 12:48:37.000 UTC</summary>

> so marking the methods in OperatorService.Rpc and WorkflowService.Rpc virtual would be a good enough solution

We would rather not mark every method in there as virtual unless we really have to. We usually discourage mocking these kinds of things instead of using an ephemeral dev server in your tests (e.g. `Temporalio.Testing.WorkflowEnvironment.StartLocalAsync`) since that will truly test your calls as opposed to assuming how Temporal server behavior is. Regardless, all of these calls delegate to the abstract `InvokeRpcAsync`, which is what others have used to mock/impl when they must, does that work for you?

</details>

<details>
<summary><strong>kimpenhaus</strong> commented on 2025-10-29 12:52:12.000 UTC</summary>

@cretz thanks for getting back such quickly. could you point me to a sample for both:

- the using of an ephemeral dev server 
- mock of the `InvokeRpcAsync`

that would be highly appreciated and I could check if that will already help us - thanks!

</details>

<details>
<summary><strong>kimpenhaus</strong> commented on 2025-10-29 13:03:37.000 UTC</summary>

I checked with the `InvokeRpcAsync`: main problem with [NSubstitute](https://github.com/nsubstitute/NSubstitute) is that it only supports public api and as far as I can see `InvokeRpcAsync` is `protected` so I don't think this will work out.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-10-29 13:16:01.000 UTC</summary>

> the using of an ephemeral dev server

All tests in samples that need servers use https://github.com/temporalio/samples-dotnet/blob/main/tests/WorkflowEnvironment.cs with xunit. But you can simply use it in individual tests like https://github.com/temporalio/samples-dotnet/blob/4e185e8917166ace5875f46ff9c1e913e63bf910/tests/WorkflowUpdate/WorkflowUpdateTests.cs#L17-L42. The client from that environment has the operator service working/available.

If you need general support or have questions about how to use certain SDK aspects, feel free to join us on the `#dotnet-sdk` channel on [Slack](https://t.mp/slack) or [the forums](https://community.temporal.io/).

> main problem with [NSubstitute](https://github.com/nsubstitute/NSubstitute) is that it only supports public api and as far as I can see InvokeRpcAsync is protected so I don't think this will work out.

That seems to be a limitation of that one library. But can't you do something like:

```csharp
    public abstract class MyWorkflowService : WorkflowService
    {
        protected override Task<T> InvokeRpcAsync<T>(
            string rpc, IMessage req, MessageParser<T> resp, RpcOptions? options = null) =>
            InvokeRpcPublicAsync(rpc, req, resp, options);

        public abstract Task<T> InvokeRpcPublicAsync<T>(
            string rpc, IMessage req, MessageParser<T> resp, RpcOptions? options = null)
            where T : IMessage<T>;
    }
```

or

```csharp
    public class MyWorkflowService(
        Func<string, IMessage, MessageParser, RpcOptions?, Task<IMessage>> OnInvoke) : WorkflowService
    {
        protected override async Task<T> InvokeRpcAsync<T>(
            string rpc, IMessage req, MessageParser<T> resp, RpcOptions? options = null) =>
            (T)await OnInvoke(rpc, req, resp, options);
    }
```

or similar to make it suitable?

</details>


---

<a id="363"></a>

### #363: [Feature Request] Make scoped IServiceProvider available to ActivityInboundInterceptor

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/363 |
| **State** | OPEN |
| **Author** | tdg5 (Danny Guinther) |
| **Created** | 2024-11-05 15:39:28.000 UTC (1y 2m ago) |
| **Updated** | 2024-11-12 15:38:03.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

Interceptors offer a means of handling cross-cutting concerns in a way that insulates any given Activity instance from those cross-cutting concerns. However, if a given cross-cutting concern depends on a service provided by the scoped `IServiceProvider` instance, this insolation can't be maintained because only Activities can have dependencies injected via constructor injection.

As far as I understand things, there's no philosophical reason an `ActivityInboundInterceptor` couldn't have the scoped `IServiceProvider` instance made available when the `ExecuteActivityAsync` method is invoked.

### Describe the solution you'd like

Constructor injection wouldn't work for `ActivityInboundInterceptor` because the interceptors don't share the same lifetime as an Activity. However, I believe that when `ExecuteActivityAsync`, it should be in the context of an Activity. I'm not looking for method signature injection, I'd be satisfied with just getting access to the `IServiceProvider` instance and having to pull out dependencies by other means.

That said, this is all complicated by the fact that `Temporalio.Worker.Interceptors` is agnostic of `IServiceProvider` and or `Microsoft.Extensions.DependencyInjection` and the creation of the scoped `IServiceProvider` is locked up in [`Temporalio.Extensions.Hosting.ServiceProviderExtensions`](https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.Hosting/ServiceProviderExtensions.cs#L66-L70).

Something like ASP.NET's [`HttpContextAccessor`](https://github.com/dotnet/aspnetcore/blob/main/src/Http/Http/src/HttpContextAccessor.cs) could be repurposed as a ServiceLocator for the scoped `IServiceProvider` instance, but it's not so elegant.

### Additional context

I'm happy to help make this happen if there's a path forward, but I don't see an implementation I can obviously make a pull request from.


#### Comments (2)

<details>
<summary><strong>tdg5</strong> commented on 2024-11-05 18:39:45.000 UTC</summary>

Thinking about this some more, I think I'd vote against changing the method signature of `ExecuteActivityAsync`. I think some mechanism completely separate from the `ActivityInboundInterceptor` is the cleanest (er, decoupled?) option that allows for keeping the knowledge about `IServiceProvider` hidden from the more agnostic portions of `Temporalio`.

I opened https://github.com/temporalio/sdk-dotnet/pull/364 with a sketch for discussion.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-11-12 15:38:02.000 UTC</summary>

:+1: Discussing on PR.

</details>


---

<a id="585"></a>

### #585: Nexus operation ignores ScheduleToCloseTimeout and retries every 10 seconds

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/585 |
| **State** | CLOSED |
| **Author** | neeraj-mathur |
| **Created** | 2026-01-05 19:11:12.000 UTC (3 days ago) |
| **Updated** | 2026-01-06 12:17:22.000 UTC |
| **Closed** | 2026-01-06 12:17:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello Team,

I am attempting to implement a caller Workflow that invokes a long-running Nexus operation with a 2-hour timeout. In the code below, I have explicitly configured the Nexus operation using:

ScheduleToCloseTimeout = TimeSpan.FromHours(2)

However, during execution, I observe in the Temporal UI that the Nexus operation is being retried approximately every 10 seconds. Additionally, the invoked Nexus operation logs a warning with the message:

“Nexus task not found on completion.”

This behavior suggests that the configured long Nexus operation timeout is not being honored as expected.

Could someone please help identify what is incorrect or missing in the code that would cause the Nexus operation to retry at short intervals instead of respecting the configured 2-hour timeout?


`WARN temporal_sdk_core::worker::nexus: Nexus task not found on completion. This may happen if the operation has already been cancelled but completed anyway. details=Status { code: NotFound, message: "Nexus task not found or already expired", details: b"\x08\x05\x12'Nexus task not found or already expired\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }`


```
using Adapter.DataIngestor;
using Adapter.DataIngestor.Models;
using System;
using System.IO;
using System.Threading.Tasks;
using Temporalio.Client;
using Temporalio.Worker;
using Xunit;

namespace Adapter.DataIngestor.Tests;

/// <summary>
/// Simple Nexus Caller Workflow Test - following the pattern from:
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Program.cs
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Caller/HelloCallerWorkflow.workflow.cs
/// </summary>
public class SimpleNexusCallerWorkflowTest : IAsyncLifetime
{
    private TemporalClient? _temporalClient;
    private const string TemporalHost = "localhost:7233";
    private const string TemporalNamespace = "default";
    private const long TestProjectId = 1L;
    private const long TestUserId = 67890L;
    private static readonly long? TestCompanyId = 1L;

    public async Task InitializeAsync()
    {
        try
        {
            // Connect to Temporal server
            _temporalClient = await TemporalClient.ConnectAsync(new()
            {
                TargetHost = TemporalHost,
                Namespace = TemporalNamespace
            });
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException(
                $"Failed to connect to Temporal server at {TemporalHost}. " +
                "Ensure Temporal server is running. " +
                $"Error: {ex.Message}", ex);
        }
    }

    public Task DisposeAsync()
    {
        _temporalClient = null;
        return Task.CompletedTask;
    }

    [Fact]
    [Trait("Category", "Integration")]
    public async Task NexusCallerWorkflow_ProcessNeedsFile_ShouldComplete()
    {
        // Arrange
        var jsonFilePath = GetTestMaterialNeedsFilePath();
        Assert.True(File.Exists(jsonFilePath), $"Test JSON file not found at: {jsonFilePath}");

        var input = new ProcessNeedsFileInput
        {
            FilePath = jsonFilePath,
            CorrelationId = Guid.NewGuid().ToString(),
            ProjectId = TestProjectId,
            UserId = TestUserId,
            CompanyId = TestCompanyId
        };

        // Act
        var result = await ExecuteCallerWorkflowAsync(input);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(input.CorrelationId, result.CorrelationId);
        
        Console.WriteLine($"Processing completed. Success: {result.Success}");
        Console.WriteLine($"Headers Processed: {result.HeadersProcessed}");
        Console.WriteLine($"Lines Processed: {result.LinesProcessed}");
        Console.WriteLine($"Errors Count: {result.Errors.Count}");
    }

    /// <summary>
    /// Execute the caller workflow that invokes the Nexus operation.
    /// Following the pattern from: https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Program.cs
    /// </summary>
    private async Task<ProcessNeedsFileOutput> ExecuteCallerWorkflowAsync(ProcessNeedsFileInput input)
    {
        if (_temporalClient == null)
        {
            throw new InvalidOperationException("Temporal client is not initialized.");
        }

        // Create a temporary task queue for this test
        var testTaskQueue = $"test-caller-queue-{Guid.NewGuid()}";

        // Create and run a worker with the caller workflow
        using var worker = new TemporalWorker(
            _temporalClient,
            new TemporalWorkerOptions(testTaskQueue)
                .AddWorkflow<ProcessNeedsCallerWorkflow>());

        // Execute the worker and workflow
        return await worker.ExecuteAsync(async () =>
        {
            Console.WriteLine("Executing caller workflow");
            
            var result = await _temporalClient.ExecuteWorkflowAsync(
                (ProcessNeedsCallerWorkflow wf) => wf.RunAsync(input),
                new(id: $"nexus-caller-wf-{Guid.NewGuid()}", taskQueue: testTaskQueue)
                {
                    // Workflow execution timeout - total time for the workflow
                    ExecutionTimeout = TimeSpan.FromHours(2.5),
                    // Run timeout - time for a single workflow run
                    RunTimeout = TimeSpan.FromHours(2.5)
                });

            Console.WriteLine($"Workflow result: Success={result.Success}, " +
                            $"Headers={result.HeadersProcessed}, " +
                            $"Lines={result.LinesProcessed}");
            
            return result;
        });
    }

    /// <summary>
    /// Gets the path to the Material_Needs.json file
    /// </summary>
    private static string GetTestMaterialNeedsFilePath()
    {
        var testAssemblyLocation = typeof(SimpleNexusCallerWorkflowTest).Assembly.Location;
        var testAssemblyDir = Path.GetDirectoryName(testAssemblyLocation);
        
        if (string.IsNullOrEmpty(testAssemblyDir))
        {
            testAssemblyDir = Directory.GetCurrentDirectory();
        }

        // Navigate to test project directory
        var testProjectDir = Path.GetFullPath(Path.Combine(testAssemblyDir, "..", "..", ".."));
        var jsonPath = Path.Combine(testProjectDir, "Material_Needs.json");

        if (!File.Exists(jsonPath))
        {
            // Try current directory
            var currentDir = Directory.GetCurrentDirectory();
            if (currentDir.Contains("Adapter.DataIngestor.Tests"))
            {
                var altJsonPath = Path.Combine(currentDir, "Material_Needs.json");
                if (File.Exists(altJsonPath))
                {
                    return altJsonPath;
                }
            }
            
            // Try relative to working directory
            var cwdJsonPath = Path.GetFullPath(Path.Combine("test", "Adapter.DataIngestor.Tests", "Material_Needs.json"));
            if (File.Exists(cwdJsonPath))
            {
                return cwdJsonPath;
            }
        }

        return jsonPath;
    }
}
```

```
using Adapter.DataIngestor;
using Adapter.DataIngestor.Models;
using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Temporalio.Nexus;
using Temporalio.Workflows;

namespace Adapter.DataIngestor.Tests;

/// <summary>
/// Simple caller workflow that invokes the ProcessNeedsFile Nexus operation.
/// Following the pattern from:
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Caller/HelloCallerWorkflow.workflow.cs
/// https://github.com/temporalio/samples-dotnet/blob/main/src/NexusSimple/Caller/EchoCallerWorkflow.workflow.cs
/// 
/// This is a long-running Nexus operation with:
/// - 2 hour timeout
/// - No retries (failures are returned as error results)
/// </summary>
[Workflow]
public class ProcessNeedsCallerWorkflow
{
    [WorkflowRun]
    public async Task<ProcessNeedsFileOutput> RunAsync(ProcessNeedsFileInput input)
    {
        // Create Nexus operation options
        // - 2 hour timeout for long-running operation (handled by ScheduleToCloseTimeout)
        // - No built-in retry policy configuration (handled by error return)
        // Note: DO NOT create CancellationTokenSource in workflows - it's non-deterministic!
        var options = new NexusOperationOptions
        {
            ScheduleToCloseTimeout = TimeSpan.FromHours(2)
        };

        // Create typed Nexus client
        var nexusClient = Workflow.CreateNexusClient<INeedsIngestionService>(
            INeedsIngestionService.EndpointName);

        // Use reflection to invoke ExecuteNexusOperationAsync with options
        // This is necessary because the SDK's expression-based API doesn't expose the options parameter
        var clientType = nexusClient.GetType();
        var executeMethod = clientType.GetMethods(BindingFlags.Public | BindingFlags.Instance)
            .FirstOrDefault(m =>
                m.Name == "ExecuteNexusOperationAsync" &&
                m.IsGenericMethod &&
                m.GetGenericArguments().Length == 1 &&
                m.GetParameters().Length == 3 &&
                m.GetParameters()[0].ParameterType == typeof(string) &&
                m.GetParameters()[1].ParameterType == typeof(object) &&
                m.GetParameters()[2].ParameterType.Name == "NexusOperationOptions");

        if (executeMethod == null)
        {
            throw new InvalidOperationException(
                "ExecuteNexusOperationAsync method with NexusOperationOptions not found. " +
                "SDK version mismatch?");
        }

        // Make generic method for output type
        var genericMethod = executeMethod.MakeGenericMethod(typeof(ProcessNeedsFileOutput));

        try
        {
            // Invoke the Nexus operation with 2-hour timeout, no retries
            var task = (Task<ProcessNeedsFileOutput>)genericMethod.Invoke(
                nexusClient,
                new object[]
                {
                    nameof(INeedsIngestionService.ProcessNeedsFile),
                    input,
                    options
                })!;

            var result = await task;
            return result;
        }
        catch (Exception ex)
        {
            // No retries - return error result immediately
            return new ProcessNeedsFileOutput
            {
                CorrelationId = input.CorrelationId,
                Success = false,
                HeadersProcessed = 0,
                LinesProcessed = 0,
                Errors = new List<string>
                {
                    $"Nexus operation failed: {ex.Message}",
                    $"Exception type: {ex.GetType().Name}",
                    "Operation will not be retried per configuration."
                }
            };
        }
    }
}



```

<img width="3776" height="2284" alt="Image" src="https://github.com/user-attachments/assets/18c309d9-d3f4-4039-8a41-43da88611fed" />

[019b8f8b-d58d-7635-8a48-f792f559a02d_events.json](https://github.com/user-attachments/files/24439190/019b8f8b-d58d-7635-8a48-f792f559a02d_events.json)


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2026-01-05 20:06:18.000 UTC</summary>

Starting a Nexus operation has a built-in timeout of 10 seconds before the start is retried. This is mostly unrelated to operation timeout (i.e. schedule to close). A Nexus operation can either be synchronous (completing effectively immediately and returning) or asynchronous (can take a while and returns operation ID/handle). Asynchronous operations are only supported with backing workflows at this time, though we plan to allow general purpose async operations in the near future.

What does your implementation of `INeedsIngestionService.ProcessNeedsFile` look like? It should effectively complete almost immediately either with a sync result, or an async result via a started workflow.

</details>

<details>
<summary><strong>prasek</strong> commented on 2026-01-05 20:27:22.000 UTC</summary>

Nexus handlers should be used to quickly handoff to a reliable backend like Temporal in [< 10 seconds](https://docs.temporal.io/nexus/operations#synchronous-operation-lifecycle).

For long running [Async Nexus Operations](https://docs.temporal.io/nexus/operations#asynchronous-operation-lifecycle), we recommend backing the Nexus Operation with a Temporal Workflow like this: 
https://docs.temporal.io/develop/dotnet/nexus#develop-an-asynchronous-nexus-operation-handler-to-start-a-workflow

Also note the [automatic retry](https://docs.temporal.io/nexus/operations#automatic-retries) and [circuit breaking](https://docs.temporal.io/nexus/operations#circuit-breaking) behavior.

</details>

<details>
<summary><strong>neeraj-mathur</strong> commented on 2026-01-06 03:28:39.000 UTC</summary>

Thank you for the clarification. It appears that I need to migrate to an asynchronous Nexus operation handler.

The Nexus operation INeedsIngestionService.ProcessNeedsFile is a long-running process that performs a large file import. The operation is expected to take a significant amount of time to complete, with a maximum execution duration of approximately two hours, depending on the size and complexity of the data being processed.

</details>


---

<a id="420"></a>

### #420: [Feature Request] Provide synchronous Run method in testing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/420 |
| **State** | OPEN |
| **Author** | mehaKumar (Meha Kumar) |
| **Created** | 2025-03-06 23:58:32.000 UTC (10 months ago) |
| **Updated** | 2025-03-07 12:49:33.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

I have a synchronous method within an Activity that accesses `ActivityExecutionContext.Current.Logger`. I want to unit test this method, but `Temporalio.Testing.ActivityEnvironment` only has a `RunAsync` method. I have to do one of these hacky options to get around this:
1) Wrap `Temporalio.Testing.ActivityEnvironment` access in a pass-through interface wrapper, so I can mock it.
2) Mark my synchronous method Async.
3) Don't test the synchronous helper on its own, only test the surrounding async Activity.

### Describe the solution you'd like

`Temporalio.Testing.ActivityEnvironment` could have a `Run` method for synchronous code that uses `ActivityExecutionContext`.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-07 11:14:46.000 UTC</summary>

> I want to unit test this method, but `Temporalio.Testing.ActivityEnvironment` only has a `RunAsync` method

We intentionally make it `RunAsync` because it represents any chunk of asynchronous code that could run inside our activity worker. This is the same reason `TemporalWorker` does not offer a synchronous execute. While internally in this testing framework thus far we do not use asynchronous pieces, we may in the future do so.

> I have to do one of these hacky options to get around this:

You can do whatever you do in any other .NET sync context when you must run async code, e.g. `myEnv.RunAsync(myActivity).GetAwaiter().GetResult()`. But we need to keep this async for any future asynchronous needs internal to the test environment and to be like workers themselves which are async only.

</details>


---

<a id="395"></a>

### #395: [Bug] Temporalio.Exceptions.RpcException:operation was canceled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/395 |
| **State** | OPEN |
| **Author** | pauldotknopf (Paul Knopf) |
| **Created** | 2025-01-20 01:54:14.000 UTC (11 months ago) |
| **Updated** | 2025-01-24 17:07:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Get info about a namespace, using 1.4.0 of the .NET SDK.

### Describe the bug

```csharp
public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken)
{
    var stopwatch = new Stopwatch();

    try
    {
        stopwatch.Start();
        
        var client = await _rcmClientConnectionProvider.OpenClient();
        
        // Error gets thrown here.
        var namespaceInfo = await client.WorkflowService.DescribeNamespaceAsync(
            new Temporalio.Api.WorkflowService.V1.DescribeNamespaceRequest { Namespace = "default" },
            new RpcOptions
            {
                CancellationToken = cancellationToken
            }
        );

        stopwatch.Stop();

        if (namespaceInfo == null)
        {
            return HealthCheckResult.Unhealthy(
                $"Temporal namespace is unreachable: elapsed: {stopwatch.Elapsed}");
        }

        return HealthCheckResult.Healthy();
    }
    catch (Exception ex)
    {
        stopwatch.Stop();
        return HealthCheckResult.Unhealthy($"Temporal client is unreachable: elapsed: {stopwatch.Elapsed}", ex);
    }
}
```

The ```_rcmClientConnectionProvider``` variable is a singleton service that maintains a single ```ITemporalClient``` (through ```OpenClient```), used throughout the application (creating workflows and subscribing to task queues). It's code is like this:

```csharp
public async Task<ITemporalClient> OpenClient()
{
    if (_client != null)
    {
        return _client;
    }

    await _semaphoreSlim.WaitAsync();
    
    try
    {
        if (_client == null)
        {
            var options = new TemporalClientConnectOptions
            {
                TargetHost = $"{_options.HostName}:{_options.Port}",
                Namespace = _options.Namespace
            };
            if (serviceProvider.GetService(typeof(ILoggerFactory)) is ILoggerFactory loggerFactory)
            {
                options.LoggerFactory = loggerFactory;
            }

            try
            {
                _client = await TemporalClient.ConnectAsync(options);
            }
            catch(InvalidOperationException e)
            {
                if (e.Message.StartsWith("Connection failed: Server connection error"))
                {
                    var message = $"Failed to connect to Temporal server at {_options.HostName}:{_options.Port}";
                    if (_options.HostName == "localhost")
                    {
                        message += "\nA local instance of temporal can be ran by running 'temporal server start-dev'";
                    }
                    throw new InvalidOperationException(message, e);
                }

                throw;
            }
        }

        return _client;
    }
    finally
    {
        _semaphoreSlim.Release();
    }
}
```

### Minimal Reproduction

It only happens in one environment, so I fear minimal repo may be hard to do.

### Environment/Versions

Temporal helm chart v0.54.0.
Temporal .NET SDK 1.4.0 (nuget)
Azure App Service (for Linux)

### Additional context

This is the complete error, being reported by App Insights.

```json
[
  {
    "severityLevel": "Error",
    "outerId": "0",
    "message": "operation was canceled",
    "type": "Temporalio.Exceptions.RpcException",
    "id": "11222409",
    "parsedStack": [
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw",
        "level": 0
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification",
        "level": 1
      },
      {
        "assembly": "Temporalio, Version=1.4.0.0, Culture=neutral, PublicKeyToken=null",
        "method": "Temporalio.Bridge.Client+<CallAsync>d__14`1.MoveNext",
        "level": 2
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw",
        "level": 3
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification",
        "level": 4
      },
      {
        "assembly": "Temporalio, Version=1.4.0.0, Culture=neutral, PublicKeyToken=null",
        "method": "Temporalio.Client.TemporalConnection+<InvokeRpcAsync>d__42`1.MoveNext",
        "level": 5
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw",
        "level": 6
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification",
        "level": 7
      },
      {
        "assembly": "System.Private.CoreLib, Version=8.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e",
        "method": "System.Runtime.CompilerServices.TaskAwaiter`1.GetResult",
        "level": 8
      },
      {
        "assembly": "AutomatedActions.Services, Version=0.2.86.0, Culture=neutral, PublicKeyToken=null",
        "method": "AutomatedActions.Services.HealthChecks.TemporalConnectionHealthCheck+<CheckHealthAsync>d__2.MoveNext",
        "level": 9,
        "line": 26,
        "fileName": "/agent/_work/1/s/src/Workflow/src/AutomatedActions.Services/HealthChecks/TemporalConnectionHealthCheck.cs"
      }
    ]
  }
]
```

One this worth mentioning is that I don't think this is actually a timeout issue, because the exception is thrown immediately-ish: ```Temporal client is unreachable: elapsed: 00:00:00.0022905```.


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-01-21 13:59:19.000 UTC</summary>

> It only happens in one environment, so I fear minimal repo may be hard to do.

Is this only an issue on Azure or can anyone replicate it with the dev server? I fear if only one environment has the issue it may be specific to the environment. Ideally we can have a replication we can run in CI to know it has been fixed and continues to remain fixed.

</details>

<details>
<summary><strong>pauldotknopf</strong> commented on 2025-01-24 17:05:07.000 UTC</summary>

Update, it's happening in every environment now..

</details>

<details>
<summary><strong>pauldotknopf</strong> commented on 2025-01-24 17:07:12.000 UTC</summary>

Considering this timeout exception is being thrown immediately, should I not be sharing my ```TemporalClient``` across threads?

This particular method is a "health check" that's done periodically.

It doesn't look like ```TemporalClient``` implements IDisposable. Is it safe to create them and let the GC handle them? Will connection resources become starved?

</details>


---

<a id="234"></a>

### #234: [Bug] Unexpected reuse of payload instances in payload codec for specific workflow failure scenarios.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/234 |
| **State** | OPEN |
| **Author** | robcao (Robert Cao) |
| **Created** | 2024-04-26 14:10:14.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-26 15:24:26.000 UTC |
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

I'm writing a payload codec that attaches metadata to headers. I am noticing that for some specific workflow failure scenarios around `ApplicationFailureException` with `Details` objects, that under certain circumstances, the instance of the payload object passed to the payload codec is re-used from a previous payload.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

I have a very simple workflow that only contains an activity.

My sample activity always throws an `ApplicationFailureException` with a single details payload. My workflow just propagates the same exception and fails.

I believe there should be four payloads here in this scenario:

1. The workflow input.
2. The activity input.
3. The activity output (in this case failure details).
4. The workflow output (in this case failure details).

I am noticing that (what seems to be the same instance of) the payload that is being passed to the payload codec to encode both the failure from the activity, and the failure from the workflow.

I've created a payload codec implementation in `MetadataExaminingPayloadCodec.cs` that adds a uuid to the `X-My-Metadata` header in the payload metadata during encoding only if a value does not already exist on the payload, and during decoding, reads the value of the `X-My-Metadata` header in the payload metadata.

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

https://github.com/robcao/temporal-sdk-dotnet-payload-repro/tree/main

The reproduction runs as a NUnit test case for simplicity, and can be run by using the `dotnet test` command.

The output of the codec is as below. When trying to encode the payload for the workflow failure details, the payload being passed to the payload codec already has a `X-My-Metadata` header, indicating some sort of re-use.

```
  Standard Output Messages:
 Successfully added metadata 229a20b0-9b33-4053-b4b8-f3471b9cdae9...
 Now reading metadata 229a20b0-9b33-4053-b4b8-f3471b9cdae9...
 Successfully added metadata d5566faf-ce58-4917-92e5-86250da83fc8...
 Now reading metadata d5566faf-ce58-4917-92e5-86250da83fc8...
 Successfully added metadata 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
 Now reading metadata 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
 WARN: tried to add metadata, but metadata already exists with a value of 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
 Now reading metadata 9fb8cb67-e8ec-41c8-b9b9-71ad6c639b95...
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Windows 10 Enterprise 10.0.19045 x64
- Temporal Version: Temporal 1.22.5, sdk-dotnet 1.0.0
- Are you using Docker or Kubernetes or building Temporal from source? No

### Additional context

So far, I've only noticed this happening for this specific scenario around failure details, but I'm not sure if it can happen under any other scenarios.

I looked at the [encryption sample](https://github.com/temporalio/samples-dotnet/blob/main/src/Encryption/Codec/EncryptionCodec.cs), and I see that this implementation is wrapping the original payload as the data of a new payload.

```
 Task.FromResult<IReadOnlyCollection<Payload>>(payloads.Select(p =>
        {
            return new Payload()
            {
                Metadata =
                {
                    ["encoding"] = EncodingByteString,
                    ["encryption-key-id"] = keyIDByteString,
                },
                // TODO(cretz): Not clear here how to prevent copy
                Data = ByteString.CopyFrom(Encrypt(p.ToByteArray())),
            };
        }).ToList());
```

However, it's unclear in the documentation if this is actually necessary (or why if so).

This behavior is kind of strange.

If I change the workflow code to the below, the same problem is happening.

```
		[WorkflowRun]
		public async Task<WorkflowOutput> RunAsync(WorkflowInput input)
		{
			try
			{
				await Temporalio.Workflows.Workflow.ExecuteActivityAsync(
					() => Activities.FailureActivityWithDetails(new ActivityInput()),
					new()
					{
						StartToCloseTimeout = TimeSpan.FromMinutes(5),
					}).ConfigureAwait(true);
			}

			catch (ApplicationFailureException)
			{
				throw new NonRetryableWithDetailsException(new FailureDetails());
			}


			return new WorkflowOutput();
		}
```

However, if I modify the above code to catch a generic `Exception`, instead of an `ApplicationFailureException`, the payload instance no longer appears to be re-used.

```
		[WorkflowRun]
		public async Task<WorkflowOutput> RunAsync(WorkflowInput input)
		{
			try
			{
				await Temporalio.Workflows.Workflow.ExecuteActivityAsync(
					() => Activities.FailureActivityWithDetails(new ActivityInput()),
					new()
					{
						StartToCloseTimeout = TimeSpan.FromMinutes(5),
					}).ConfigureAwait(true);
			}

			catch (Exception)
			{
				throw new NonRetryableWithDetailsException(new FailureDetails());
			}


			return new WorkflowOutput();
		}
```

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2024-04-26 14:39:29.000 UTC</summary>

Your payload codec should not mutate the payload being passed in or try to maintain a reference to it in any way. Rather, you should always create a new payload. I will make a note to make this very clear in the codec documentation.

Yes https://github.com/temporalio/samples-dotnet/blob/main/src/Encryption/Codec/EncryptionCodec.cs works by creating a new payload. We don't clone before every invocation because some invocations may do nothing to the object and that would affect performance unnecessarily. If there was an easy way to "freeze" the object just for the life of the call we would.

Arguably we could have wrapped the raw proto payload object in an immutable container/interface, but this is more of an advanced API with certain implementation expectations. We will clarify in the documentation.

</details>

<details>
<summary><strong>robcao</strong> commented on 2024-04-26 15:18:59.000 UTC</summary>

Got it, thank you.

To be clear, when you say "you should always create a new payload", you do not mean just a deep clone via something like `payload.Clone()`, but rather setting the original payload (allocated into a new byte array) as the data of an outer payload wrapper?

```
new Payload()
{
    Data = ByteString.CopyFrom(payload.ToByteArray()),
};
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-04-26 15:24:25.000 UTC</summary>

Literally just always creating a new instance of the payload object. How you "wrap" or "convert" the other one into the payload is up to you. A "clone" is probably fine, though I usually recommend against that because you usually do not want all of the previous payload's metadata as your own. Rather usually you want to serialize/wrap the entire other payload into the data of the new one, and do the inverse on decode. But technically all that matters is that no fields in the parameter are mutated or referenced beyond the life of the method.

</details>


---

<a id="579"></a>

### #579: [Bug] SIGSEGV crash in temporal_core_worker_poll_workflow_activation on Linux

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/579 |
| **State** | OPEN |
| **Author** | cfauchere (Clement) |
| **Created** | 2025-12-17 22:50:42.000 UTC (22 days ago) |
| **Updated** | 2025-12-18 15:28:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

 ### What are you really trying to do?

  Running integration tests for a .NET 8 application that uses Temporal workflows. Tests run in CI on Linux (Ubuntu) with an external Temporal server container (temporalio/temporal:latest).

 ### Describe the bug

  The test host process crashes with SIGSEGV (signal 11) while the Temporal worker is polling for workflow activations. The crash happens intermittently (flaky) - tests pass locally on Windows but crash randomly in Linux CI.

  Shortly before the crash, this warning appears in logs:
  WARN temporal_sdk_core::worker: Activity heartbeat failed. task_token=... details=UnknownActivity

  ### Stack trace from crash dump:
  Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(TemporalCoreWorker*, Void*, IntPtr)
  ILStubClass.IL_STUB_PInvoke(TemporalCoreWorker*, Void*, IntPtr)
  Temporalio.Bridge.Worker.PollWorkflowActivationAsync()
  Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10.MoveNext()
  ...
  System.Threading.PortableThreadPool+WorkerThread.WorkerThread

  The crash occurs in the native Rust bridge during poll_workflow_activation, not during execution of any user workflow/activity code.

  ### Minimal Reproduction

  Unable to provide minimal repro - the crash is intermittent and only occurs in Linux CI environment, not locally on Windows. The test runs Temporal workflows with activities that use heartbeats.

  ### Environment/Versions

  - OS and processor: Linux x86_64 (Ubuntu, Azure DevOps hosted agent)
  - Temporal .NET SDK Version: 1.8.0
  - Temporal Server: temporalio/temporal:latest (Docker container, server start-dev)
  - .NET Version: 8.0
  - Works on: Windows x64 (local development)
  - Fails on: Linux x64 (CI)

#### Comments (2)

<details>
<summary><strong>cfauchere</strong> commented on 2025-12-17 22:52:03.000 UTC</summary>

```
Full stack
        Child SP               IP Call Site
00007EF4E3FFA060 00007f364e710813 [InlinedCallFrame: 00007ef4e3ffa060] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*,
IntPtr)
00007EF4E3FFA060 00007f35d4478e06 [InlinedCallFrame: 00007ef4e3ffa060] Temporalio.Bridge.Interop.Methods.temporal_core_worker_poll_workflow_activation(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*,
IntPtr)
00007EF4E3FFA050 00007F35D4478E06 ILStubClass.IL_STUB_PInvoke(Temporalio.Bridge.Interop.TemporalCoreWorker*, Void*, IntPtr)
00007EF4E3FFA0E0 00007F35D4A1B20C Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
00007EF4E3FFA1E0 00007F35D44829BB System.Runtime.CompilerServices.AsyncMethodBuilderCore.Start[[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]](<PollWorkflowActivationAsync>d__15
ByRef) [/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncMethodBuilderCore.cs @ 38]
00007EF4E3FFA250 00007F35D4482920 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].Start[[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15,
Temporalio]](<PollWorkflowActivationAsync>d__15 ByRef) [/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 35]
00007EF4E3FFA280 00007F35D44828C2 Temporalio.Bridge.Worker.PollWorkflowActivationAsync()
00007EF4E3FFA2D0 00007F35D44819AC Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10.MoveNext()
00007EF4E3FFA4B0 00007F35D4489021 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult,
System.Private.CoreLib],[Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10, Temporalio]].ExecutionContextCallback(System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 289]
00007EF4E3FFA4D0 00007F35D478CBA2 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
00007EF4E3FFA520 00007F35D4488ED4 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult,
System.Private.CoreLib],[Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10, Temporalio]].MoveNext(System.Threading.Thread)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 368]
00007EF4E3FFA570 00007F35D4488DCA System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.Threading.Tasks.VoidTaskResult,
System.Private.CoreLib],[Temporalio.Worker.WorkflowWorker+<ExecuteAsync>d__10, Temporalio]].MoveNext()
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 346]
00007EF4E3FFA590 00007F35D478D003 System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/TaskAwaiter.cs @ 273]
00007EF4E3FFA610 00007F35D47D20E5 System.Threading.Tasks.AwaitTaskContinuation.RunOrScheduleAction(System.Action, Boolean)
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 743]
00007EF4E3FFA660 00007F35D478BA9B System.Threading.Tasks.Task.RunContinuations(System.Object) [/_/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/Task.cs @ 3483]
00007EF4E3FFA700 00007F35D4994AA8 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1[[System.__Canon, System.Private.CoreLib]].SetResult(System.__Canon)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 474]
00007EF4E3FFA750 00007F35D4A1B3E9 Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15.MoveNext()
00007EF4E3FFA850 00007F35D4484577 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon,
System.Private.CoreLib],[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]].ExecutionContextCallback(System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 289]
00007EF4E3FFA870 00007F35D478CBA2 System.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext, System.Threading.ContextCallback, System.Object)
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/ExecutionContext.cs @ 179]
00007EF4E3FFA8C0 00007F35D44843D6 System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon,
System.Private.CoreLib],[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]].MoveNext(System.Threading.Thread)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 368]
00007EF4E3FFA940 00007F35D448428A System.Runtime.CompilerServices.AsyncTaskMethodBuilder`1+AsyncStateMachineBox`1[[System.__Canon,
System.Private.CoreLib],[Temporalio.Bridge.Worker+<PollWorkflowActivationAsync>d__15, Temporalio]].MoveNext()
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/AsyncTaskMethodBuilderT.cs @ 346]
00007EF4E3FFA960 00007F35D478D003 System.Runtime.CompilerServices.TaskAwaiter+<>c.<OutputWaitEtwEvents>b__12_0(System.Action, System.Threading.Tasks.Task)
[/_/src/libraries/System.Private.CoreLib/src/System/Runtime/CompilerServices/TaskAwaiter.cs @ 273]
00007EF4E3FFA9E0 00007F35D4A2300D System.Threading.Tasks.AwaitTaskContinuation.System.Threading.IThreadPoolWorkItem.Execute()
[/_/src/libraries/System.Private.CoreLib/src/System/Threading/Tasks/TaskContinuation.cs @ 647]
00007EF4E3FFAA40 00007F35D4764369 System.Threading.ThreadPoolWorkQueue.Dispatch() [/_/src/libraries/System.Private.CoreLib/src/System/Threading/ThreadPoolWorkQueue.cs @ 1010]
00007EF4E3FFAAB0 00007F35CF08258B System.Threading.PortableThreadPool+WorkerThread.WorkerThread
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-12-18 15:22:21.000 UTC</summary>

Interesting. We are also tracking a test flake at #577 that may be related (but maybe not, only thing they have in common is a segfault on tests, mostly non-Windows).

</details>


---

<a id="256"></a>

### #256: [Feature Request] Clarify what the ICustomMetricMeter is used for in DiagnosticSource extension README

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/256 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-30 13:29:34.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-30 13:29:34.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

At https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio.Extensions.DiagnosticSource/README.md it is unclear to readers of the initial paragraph what the `ICustomMetricMeter` is for. Clarify it is for runtime options and what it's used for.


---

<a id="131"></a>

### #131: [Feature Request] Support single-platform local NuGet package build

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/131 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-30 12:05:00.000 UTC (2y 4m ago) |
| **Updated** | 2023-09-01 16:22:50.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like
Today we only build NuGet packages in a GitHub workflow because it requires building across many systems and combining. But some people want to build the NuGet package locally, so we should support it, even if it is for only one platform.




---

<a id="550"></a>

### #550: [Bug] Investigate `CanRunWith_CustomSlotSupplier` flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/550 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-24 19:53:54.000 UTC (2 months ago) |
| **Updated** | 2025-12-02 23:26:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In rare situations, `Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier` fails with:

```
  Failed Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier [199 ms]
  Error Message:
   Assert.Equal() Failure
Expected: 27
Actual:   28
  Stack Trace:
     at Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkerTuningTests.cs:line 227
--- End of stack trace from previous location ---
  Standard Output Messages:
 [2025-10-24 19:04:36Z] info: Temporalio.Worker.TemporalWorker[0]
       User task completed, shutting down
 [2025-10-24 19:04:36Z] info: Temporalio.Worker.ActivityWorker[0]
       Beginning activity worker shutdown, will wait 00:00:00 before cancelling 0 activity instance(s)
 [2025-10-24 19:04:36Z] warn: Temporalio.Worker.TemporalWorker[0]
       Worker finalization failed
 System.InvalidOperationException: Cannot finalize, expected 1 reference, got 2
    at Temporalio.Bridge.Worker.FinalizeShutdownAsync() in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Bridge/Worker.cs:line 448
    at Temporalio.Worker.TemporalWorker.ExecuteInternalAsync(Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 437
```

#### Comments (1)

<details>
<summary><strong>jmaeagle99</strong> commented on 2025-12-02 23:26:40.000 UTC</summary>

Repro'd in https://github.com/temporalio/sdk-dotnet/actions/runs/19876427208/job/56964817974?pr=569

Reactions: ❤️ 1

</details>


---

<a id="514"></a>

### #514: [Feature Request] Nexus cancellation type support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/514 |
| **State** | CLOSED |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-29 18:57:15.000 UTC (4 months ago) |
| **Updated** | 2026-01-08 22:16:03.000 UTC |
| **Closed** | 2026-01-08 22:16:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Need to do https://github.com/temporalio/sdk-python/pull/981, but for .NET

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-10-14 12:44:08.000 UTC</summary>

Note, there is an issue with Core this found and is waiting on fix for: https://github.com/temporalio/sdk-core/issues/1026

</details>


---

<a id="496"></a>

### #496: Inconsistent log property names for the workflow run identifier

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/496 |
| **State** | OPEN |
| **Author** | DSmith-VERX (D Smith) |
| **Created** | 2025-07-10 21:21:53.000 UTC (6 months ago) |
| **Updated** | 2025-07-10 22:00:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I'm not sure if this would be more of a bug report or a feature request since it could be intentional. The logs within the context of a workflow (Workflow.Logger) show RunId as a property within structured log templates. The logs  within the context of an activity (using ILogger via DI in my case or Activity.Logger itself) use WorkflowRunId for this same information. 
Both loggers use WorkflowId and other properties with consistent names. Should the run identifier not also use the Workflow prefix with the workflow logger to consistency with the other workflow properties and shared properties within the activity?

This is not hugely important, but it did initially cause some confusion when filtering our logs to track down an issue where a fully completed activity "timed out" and never returned to the main workflow.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-07-10 21:59:15.000 UTC</summary>

It is intentional that we match the field names in the logger scope with the property names in the respective "info" objects. So the activity scope at https://github.com/temporalio/sdk-dotnet/blob/8e94382bc762f7b383c9ae17d82adc966d95f09f/src/Temporalio/Activities/ActivityInfo.cs#L63-L72 and the workflow scope at https://github.com/temporalio/sdk-dotnet/blob/8e94382bc762f7b383c9ae17d82adc966d95f09f/src/Temporalio/Workflows/WorkflowInfo.cs#L63-L71 do match those field names. Arguably we could have made `WorkflowInfo.RunId` be named `WorkflowInfo.WorkflowRunId` but we removed the `Wortkflow` prefix in cases where it made sense to there. Same thing with the `Namespace` field. But yes, arguably we could have had the logger scope deviate.

Unfortunately, I am not sure it'd be worth changing now due to potential incompatibilities where people may be expecting the different scope field names (and not sure we want to add a second and have duplicate values nor have an entirely new worker option for changing this). However, you can make a workflow interceptor that surrounds the workflow execution inside a `BeginScope` with whatever additional scope values you'd like.

</details>


---

<a id="478"></a>

### #478: [Feature Request] Investigate test flake for `CanRunWith_CustomSlotSupplier`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/478 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-05-14 19:44:14.000 UTC (7 months ago) |
| **Updated** | 2025-06-03 16:17:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Got flake of:

```
 [xUnit.net 00:00:26.64]     Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier [FAIL]
[xUnit.net 00:00:26.65]       Assert.Equal() Failure
[xUnit.net 00:00:26.65]       Expected: 20
[xUnit.net 00:00:26.65]       Actual:   21
[xUnit.net 00:00:26.65]       Stack Trace:
[xUnit.net 00:00:26.65]         /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkerTuningTests.cs(222,0): at Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier()
[xUnit.net 00:00:26.65]         --- End of stack trace from previous location ---
[xUnit.net 00:00:26.65]       Output:
[xUnit.net 00:00:26.65]         [2025-05-14 19:14:51Z] info: Temporalio.Worker.TemporalWorker[0]
[xUnit.net 00:00:26.65]               User task completed, shutting down
[xUnit.net 00:00:26.65]         [2025-05-14 19:14:51Z] info: Temporalio.Worker.ActivityWorker[0]
[xUnit.net 00:00:26.65]               Beginning activity worker shutdown, will wait 00:00:00 before cancelling 0 activity instance(s)
  Failed Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier [983 ms]
  Error Message:
   Assert.Equal() Failure
Expected: 20
Actual:   21
  Stack Trace:
     at Temporalio.Tests.Worker.WorkerTuningTests.CanRunWith_CustomSlotSupplier() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkerTuningTests.cs:line 222
--- End of stack trace from previous location ---
  Standard Output Messages:
 [2025-05-14 19:14:51Z] info: Temporalio.Worker.TemporalWorker[0]
       User task completed, shutting down
 [2025-05-14 19:14:51Z] info: Temporalio.Worker.ActivityWorker[0]
       Beginning activity worker shutdown, will wait 00:00:00 before cancelling 0 activity instance(s)
```

Investigate

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-06-03 16:17:51.000 UTC</summary>

Almost certainly because of https://github.com/temporalio/sdk-core/issues/894

</details>


---

<a id="435"></a>

### #435: [Feature Request] Workflow logging - NLog async calls

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/435 |
| **State** | OPEN |
| **Author** | jimborogers (James R) |
| **Created** | 2025-03-19 06:41:08.000 UTC (9 months ago) |
| **Updated** | 2025-03-19 13:43:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

I am using NLog with an HTTP target. Logging calls in the workflow result in an non-determinism error captured in this truncated stack trace:

```
Failed activation on workflow my-workflow with ID 96c4ba3b-1004-f011-846f-6025bd135063 and run ID 0195a9ef-fd91-73e1-94b0-ada51bc3e1a3
Temporalio.Exceptions.InvalidWorkflowSchedulerException Workflow attempted to perform a thread transfer task which is non-deterministic. This can be caused by timers or other non-deterministic async calls. Void Throw()    at System.Environment.get_StackTrace()
   at Worker.WorkflowTracingEventListener.OnFrameworkEventWritten(WorkflowInstance instance, EventWrittenEventArgs evt)
   at Worker.WorkflowTracingEventListener.OnEventWritten(EventWrittenEventArgs evt)
   at Tracing.EventSource.DispatchToAllListeners(EventWrittenEventArgs eventCallbackArgs)
   at Tracing.EventSource.WriteEventWithRelatedActivityIdCore(Int32 eventId, Guid* relatedActivityId, Int32 eventDataCount, EventData* data)
   at Tracing.FrameworkEventSource.WriteEvent(Int32 eventId, Int64 arg1, Int32 arg2, String arg3, Boolean arg4, Int32 arg5, Int32 arg6)
   at Threading.TimerQueueTimer.Change(UInt32 dueTime, UInt32 period)
   at Threading.Timer.Change(Int32 dueTime, Int32 period)
   at Targets.AsyncTaskTarget.Write(AsyncLogEventInfo logEvent)
   at Targets.AsyncTaskTarget.WriteAsyncThreadSafe(AsyncLogEventInfo logEvent)
   at NLog.Targets.Target.WriteAsyncLogEvent(AsyncLogEventInfo logEvent)
```

### Describe the solution you'd like

I discussed this with @cretz at Replay conference - he proposed there is an "unsafe" method that could be exposed in the .NET SDK and used for purpose of avoiding these errors.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-19 13:43:19.000 UTC</summary>

Thanks! I have opened #436. In the meantime you can set `TemporalWorkerOptions.DisableWorkflowTracingEventListener` to `true` at the worker level (though that has the consequence of disabling this protection everywhere).

</details>


---

<a id="386"></a>

### #386: [Feature Request] Improve WaitConditionAsync semantics

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/386 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-06 21:22:36.000 UTC (1 years ago) |
| **Updated** | 2025-01-06 21:24:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today we wake up _all_ wait conditions that are satisfied at the same time. This doesn't allow you to guarantee the condition is true on the line after the wait condition. We should only wake up a _single_ wait condition when satisfied and then run the entire loop again. This will allow you to implement things like:

```csharp
await Workflow.WaitConditionAsync(() => !locked);
locked = true;
```

I believe this issue is similar to https://github.com/temporalio/sdk-python/issues/618 in Python. And would require an SDK flag.

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2025-01-06 21:24:48.000 UTC</summary>

When doing this, it would make sense to resurrect the PR for https://github.com/temporalio/sdk-dotnet/issues/375 and include it with this change.

</details>


---

<a id="357"></a>

### #357: [Bug] Unexpected Serialization of Activity Results

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/357 |
| **State** | OPEN |
| **Author** | robcao (Robert Cao) |
| **Created** | 2024-10-10 03:10:01.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-11 19:07:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

I have a use case where I am invoking signal from start in an activity. I stumbled across a scenario where Temporal client credentials can potentially get leaked in workflow history.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

When executing an activity that returns a `Task`, if you instead return a `Task<T>`, the value of `T` is stored in workflow history. This can lead to unexpected leakage of Temporal server credentials when `T` is a `WorkflowHandle`.

Consider the following activity. The activity returns `Task<WorkflowHandle>`, and the workflow handle gets stored in workflow history.

```csharp
internal class Activities(ITemporalClient client)
{
	/// <summary>
	/// When returning a <see cref="Task{WorkflowHandle}"/>, the workflow handle gets serialized to workflow history.
	/// </summary>
	[Activity]
	public Task StartWorkflowThatLeaksWorkflowHandleToEventHistoryAsync()
	{
		WorkflowOptions options = new WorkflowOptions(Guid.NewGuid().ToString(), "my-tq");

		return client.StartWorkflowAsync<Other>(wf => wf.RunAsync(), options);
	}
```

The issue here is that `WorkflowHandle` has a reference to the Temporal client, which leaks sensitive information like the api key or TLS certificate into the workflow history.

![image](https://github.com/user-attachments/assets/7ff8c09f-ab0d-4014-af9b-e4b42350f690)


### Minimal Reproduction

I have a code sample here: https://github.com/robcao/temporal-client-serialization

To reproduce:

Start a dev server: `temporal server start-dev`.

Start the worker: `dotnet run`.

Execute a workflow: `temporal workflow start --task-queue=my-tq --type=Example`.

Navigate to the temporal ui and click the `Example` workflow. If you look at the workflow history, you'll see that the entire workflow handle was stored.

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
- Are you using Docker or Kubernetes or building Temporal from source?
.NET SDK 1.3.1

### Additional context

<!-- Add any other context about the problem here. -->


This can be fixed by re-writing the activity like this, so it's fairly minor. However, perhaps serialization of the `TemporalClient` should be changed to omit the `ApiKey`, `TlsOptions`, and other potentially sensitive values?

```csharp
internal class Activities(ITemporalClient client)
{
	/// <summary>
	/// No problems here because a <see cref="Task"/>> is returned.
	/// </summary>
	[Activity]
	public async Task StartWorkflowThatDoesNotLeakWorkflowHandleToEventHistoryAsync()
	{
		WorkflowOptions options = new WorkflowOptions(Guid.NewGuid().ToString(), "my-tq");

		await client.StartWorkflowAsync<Other>(wf => wf.RunAsync(), options).ConfigureAwait(false);
	}
}
```

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-10-10 15:59:15.000 UTC</summary>

You are returning `Task<WorkflowHandle>` which is then serialized.

`WorkflowHandle` is not meant to be serializable (just coincidence that it works with `System.Text.Json`). This would be the same as if you returned `Task<MyDatabaseOrmEntity>` that contains a property with the database that had its initial options. That the return type is `Task` does not mean the result is expected to automatically be removed, `Task` is just a supertype of `Task<TResult>` and return covariance applies and we do support caller specifying the result-type for upcasting. This information would leak if you just called the method regularly and not through Temporal.

You should not return the workflow handle from the activity if you do not want it to be serialized. If you cannot `await`, then you can do something like `startTask.ContinueWith(_ => Task.CompletedTask), TaskContinuationOptions.OnlyOnRanToCompletion)`.

</details>


---

<a id="337"></a>

### #337: [Feature Request] Include more details from tonic from failed client_rpc_call invocations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/337 |
| **State** | OPEN |
| **Author** | robcao (Robert Cao) |
| **Created** | 2024-08-28 15:38:18.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-10 19:01:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Failures from client_rpc_call invocations currently only contain the message from the failure.

The stack trace from a failure to check health for instance, looks like this:

```C#
Temporalio.Exceptions.RpcException: transport error
   at Temporalio.Bridge.Client.CallAsync[T](RpcService service, String rpc, IMessage req, MessageParser`1 resp, Boolean retry, IEnumerable`1 metadata, Nullable`1 timeout, Nullable`1 cancellationToken)
   at Temporalio.Client.TemporalConnection.CheckHealthAsync(RpcService service, RpcOptions options)
```

In comparison, the stack trace from a failure to connect the client is more informative, and looks like this:

```C#
System.InvalidOperationException: Connection failed: Server connection error: tonic::transport::Error(Transport, ConnectError(ConnectError("tcp connect error", Os { code: 10061, kind: ConnectionRefused, message: "No connection could be made because the target machine actively refused it." })))
   at Temporalio.Bridge.Client.ConnectAsync(Runtime runtime, TemporalConnectionOptions options)
   at Temporalio.Client.TemporalConnection.GetBridgeClientAsync()
```


### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

I would like instances of `RpcException` raised from the `client_rpc_callback` method to contain more information about the failure, comparative to what is currently raised from failures in the `client_connect` method.

For example, instead of `transport error`, perhaps the exception could contain more information, such as

`Error: Status { code: Unknown, message: "transport error", source: Some(tonic::transport::Error(Transport, hyper::Error(Io, Kind(BrokenPipe)))) }`

Having this kind of additional context available is very helpful for debugging problems. Doing a cursory search shows that `transport error` can have multiple different root causes.

Having the gRPC status code surfaced in the error message is helpful too.


### Additional context

https://github.com/temporalio/sdk-dotnet/blob/main/src/Temporalio/Bridge/src/client.rs#L258

It looks like here, the `failureDetails` is always being sent back to the .NET side as null. I am not sure if this is intentional or not (maybe the Rust side is always sending null), or maybe `failureDetails` here references the Temporal API FailureDetails proto, in which case it wouldn't be applicable at all.

I'm not certain if this will require work to be on in the core sdk first.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-09-10 19:00:20.000 UTC</summary>

Sorry it took me so long to see this. This is due to the default error string of Tonic in cases where it's not a status. There is a difference between connection errors and RPC errors in this case.

> perhaps the exception could contain more information, such as

> Error: Status { code: Unknown, message: "transport error", source: Some(tonic::transport::Error(Transport, hyper::Error(Io, Kind(BrokenPipe)))) }

But it's not a `Status` with a code and a source. We will investigate and see if there's more we can extract from the non-status error beyond it's default `fmt::Display`.

> It looks like here, the failureDetails is always being sent back to the .NET side as null

This is very specifically for gRPC "details" which is additional protobuf information, it's not for general purpose use

</details>


---

<a id="307"></a>

### #307: [Feature Request] Replace `System.TimeProvider` in workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/307 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-15 22:42:37.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-16 17:45:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

There is now a .NET API for creating timers and getting current time. Leverage it. See https://learn.microsoft.com/en-us/dotnet/api/system.timeprovider. Will have to see how it may affect versions we release packages for. https://github.com/dotnet/extensions/tree/main/src/Libraries/Microsoft.Extensions.TimeProvider.Testing seems to support .NET 6 probably by way of `Microsoft.Bcl.TimeProvider` inclusion.

Note, while we should provide a `Workflow.TimeProvider` property, there does not seem to be an obvious way to change the _default_ time provider.

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2024-07-16 17:45:54.000 UTC</summary>

> there does not seem to be an obvious way to change the default time provider.

Nor should we, I think (other than to just make it throw an error), consistent with the idea that we probably want to avoid magic.

Reactions: 👍 1

</details>


---

<a id="305"></a>

### #305: Handle multiple completion commands

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/305 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-07-13 12:39:00.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-15 12:44:30.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The change made in https://github.com/temporalio/sdk-dotnet/pull/270 is incorrect when there are multiple completion commands: in that case, we may still leave non-query commands after a completion command, and currently core removes any such commands.

We are going to fix this in core (https://github.com/temporalio/sdk-core/issues/778). This ticket is blocked on the core work but we anticipate the fix here to be straightforward: send all commands to core i.e. with (potentially multiple) completion commands interleaved with non-completions.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-15 12:44:01.000 UTC</summary>

:+1: Note as part of this work we still have to leave existing logic, but only if this flag is present. I am unsure how safe we feel about removing the old .NET logic of truncating post-completion commands (since Core was doing it too), up for discussion. It would be nice if the .NET command reordering we did here was only if this flag was set and we could leave everything else (including truncation) up to Core.

</details>


---

<a id="280"></a>

### #280: [Bug] TaskQueue not forwarded when using Test Environment, breaks ContinueAsNew (hangs)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/280 |
| **State** | OPEN |
| **Author** | mnichols (Mike Nichols) |
| **Created** | 2024-06-18 15:59:30.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-18 16:46:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

This test hangs because of a grpc reported missing TaskQueue (see below for error message):
```
using Temporalio.Client;
using Temporalio.Exceptions;
using Temporalio.Testing;
using Temporalio.Worker;
using Temporalio.Worker.Interceptors;
using Temporalio.Workflows;
using Xunit.Abstractions;

namespace Temporal.Curriculum.Timers.Tests.Orchestrations;
[Workflow]
public class Continued
{
    [WorkflowRun]
    public async Task  RunAsync(string arg)
    {
        if (string.Equals("can", arg))
        {
            return;
        }
        await Workflow.DelayAsync(2000);
        var canOpts = new ContinueAsNewOptions();
        throw Workflow.CreateContinueAsNewException<Continued>(wf => wf.RunAsync("can"), canOpts);
    }
}
public class ContinueAsNewTests : TestBase
{
    [Fact]
    public async Task CAN_WorksWithNoTaskQueue()
    {
        await using var env = await WorkflowEnvironment.StartTimeSkippingAsync();
        var workerOptions = new TemporalWorkerOptions("test") { LoggerFactory = LoggerFactory };
        workerOptions.AddWorkflow<Continued>(); 

        using var worker = new TemporalWorker(
            env.Client,
            workerOptions
        );
        await worker.ExecuteAsync(async () =>
        {
            var handle = await env.Client.StartWorkflowAsync<Continued>(wf => wf.RunAsync("first"),
                new WorkflowOptions("can1", worker.Options.TaskQueue!));

            var e = await Assert.ThrowsAsync<ContinueAsNewException>(async () =>
            {
                await handle.GetResultAsync();
            });

        });
    }

    public ContinueAsNewTests(ITestOutputHelper output) : base(output)
    {
    }
}
```

The error that prints before the test server hangs is:
```
2024-06-18T15:49:38.964086Z  WARN temporal_sdk_core::worker::workflow: Error while completing workflow activation error=status: InvalidArgument, message: "Missing TaskQueue.", details: [], metadata: MetadataMap { headers: {"content-type": "application/grpc"} }
```

It makes sense the test server hangs but the TaskQueue should really be getting auto-assigned by the Workflow if not provided explicitly.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-06-18 16:46:19.000 UTC</summary>

This is caused/blocked by https://github.com/temporalio/sdk-java/issues/1424

</details>


---

<a id="247"></a>

### #247: [Feature Request] Support for win-x86

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/247 |
| **State** | OPEN |
| **Author** | kevbry |
| **Created** | 2024-05-10 19:58:29.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-10 21:19:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👎 1 |

#### Description

### Describe the solution you'd like

Support for win-x86 

### Additional context

The legacy system I'm integrating with currently only supplies 32-bit SDKs. It would significantly simplify things if I could make use of it directly in a Temporal activity vs having to wrap the library in an API that the activity calls out to.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-05-10 21:17:15.000 UTC</summary>

The issue with the extra targets (like Windows 32-bit, Windows ARM, Linux MUSL, etc) is that it adds bloat to the package because the NuGet package has to embed the full DLL for that distro/arch. The NuGet package is already 50MB compressed and each shared library we add is ~30MB (~10MB compressed). Also, I am not sure we test for 32-bit.

You may be able to build the SDK on 32-bit though and make your own package to depend on. I will leave this open for others to see, because it is possible we may ship a separate NuGet package in the future with 32-bit support. But there are no immediate plans for Windows 32-bit.

Reactions: 👍 2

</details>


---

<a id="229"></a>

### #229: [Feature Request] Make Temporalio.Testing to a seperate nuget out of Temporalio

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/229 |
| **State** | OPEN |
| **Author** | rsr-maersk (Rik Svendsen Rose) |
| **Created** | 2024-04-22 17:00:52.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-22 18:29:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Temporalio.Testing is currently a part of the Temporalio package. I think it is better to decouple so we don't distribute test code to production
![image](https://github.com/temporalio/sdk-dotnet/assets/76153851/3c3c1dff-68eb-49df-a649-7f26a0ab2d40)


### Describe the solution you'd like


- make Temporalio.Testing into a separate nuget
- make Temporalio not reference Temporalio.Testing



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-04-22 18:28:09.000 UTC</summary>

This is more "test helpers" but they are harmless if not used (i.e. don't bring in extra dependencies). Technically this code is totally valid in production if people want to use it there. If you're concerned about certain code using certain packages, you may be able to use a configurable linter. We primarily only keep things in separate versioned packages if they cause dependency issues.

</details>


---

<a id="171"></a>

### #171: [Feature Request] Schedule creation should create tracing span by default

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/171 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-03 21:14:15.000 UTC (2 years ago) |
| **Updated** | 2025-02-04 18:25:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like
When the tracing interceptor is in use, by default creating a schedule should create a span for the schedule and set it on the workflow header if the action is starting a workflow. Users need to be able to opt-out in their tracing interceptor options.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-03-05 18:30:17.000 UTC</summary>

(do not blindly implement as is, see discussion starting with comment https://github.com/temporalio/features/issues/394#issuecomment-1966551344 before proceeding)

</details>


---

<a id="32"></a>

### #32: [Feature Request] Add CancellationToken parameter to TemporalClient.ConnectAsync and friends

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/32 |
| **State** | OPEN |
| **Author** | cgillum (Chris Gillum) |
| **Created** | 2023-03-09 01:28:28.000 UTC (2y 10m ago) |
| **Updated** | 2023-08-22 20:51:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
It's standard practice in .NET APIs that perform I/O to include a `CancellationToken` parameter so that callers can abort I/O requests that take too long.  `TemporalClient.ConnectAsync(...)` doesn't accept a cancellation token.

### Describe the solution you'd like
Add an optional `CancellationToken` to `TemporalClient.ConnectAsync(...)`, like so:

```csharp
public static async Task<TemporalClient> ConnectAsync(
    TemporalClientConnectOptions options,
    CancellationToken cancellationToken = default) { ... }
```

This feedback applies to other APIs as well, such as `TemporalConnection.ConnectAsync(...)`.



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-03-09 01:54:11.000 UTC</summary>

On every async call that supports cancellation we do accept a cancellation token, though we intentionally deviate from .NET here and include it in the options instead of as trailing parameter to keep the overload count down. This includes every call on a connected client.

But we intentionally did not include a cancellation token on connect because we don't have that wired up with Rust. It's not as easy as just cancelling a .NET task, I have to weave the token through Tokio in Rust. I put in this effort for RPC calls but not yet the connect process itself. I will look into putting this time in before beta. In the meantime know that the connection process cannot be trivially cancelled with a token.

</details>


---

<a id="588"></a>

### #588: [Bug] Some unlikely workflow task failures like failure conversion issues may be lost

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/588 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2026-01-07 15:49:26.000 UTC (1 days ago) |
| **Updated** | 2026-01-07 15:49:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

When reviewing the reworking of #492, we can have errors in the lambda/task passed to `QueueNewTaskAsync` of the `StartChildWorkflowAsync`. So if an error on failure conversion occurs in there, we are not logging it because we are not logging/catching all errors for `QueueNewTaskAsync`.

This same thing could happen in other places where we are not properly catching errors in tasks passed to `QueueNewTaskAsync`. We need to be catching these and setting `currentActivationException` (and maybe add logging if the existing task failure logging is inadequate). Whether this is done in each `QueueNewTaskAsync` caller or at the general level can be decided by implementer.


---

<a id="587"></a>

### #587: Refactor Bridge.Client to be IDisposable instead of a SafeHandle

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/587 |
| **State** | OPEN |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2026-01-06 17:17:04.000 UTC (2 days ago) |
| **Updated** | 2026-01-06 17:17:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

#583 introduced the separation of unmanaged pointer lifetime management into `SafeHandle`. The `Bridge.Client` class could not be fully converted to a disposable implementation without other possible API changes; this work was deferred to fix the immediate issue that the PR was addressing. This conversion should be done to match the pattern established for the `Bridge.Worker` class so that there aren't two SafeHandle implementations for `Interop.TemporalCoreClient*`.


---

<a id="586"></a>

### #586: Separate unmanaged pointer lifecycle management into SafeHandles

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/586 |
| **State** | OPEN |
| **Author** | jmaeagle99 (Justin Anderson) |
| **Created** | 2026-01-06 17:13:15.000 UTC (2 days ago) |
| **Updated** | 2026-01-06 17:13:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

#583 introduced separate `SafeHandle` implementations for the `Client` and `Worker` bridge implementations to allow the `SafeHandle`s to be passed around and prevent use-after-free problems. This should be extended to the remaining classes that currently maintain the lifetime of unmanaged pointers.
- Pointer lifetime management should be exclusively maintained by `SafeHandle` types for each unmanaged pointer type.
- Consumers of the unmanaged pointers should use the `Scope.Pointer` method to add-ref on a `SafeHandle`, which will return the unmanaged pointer value.


---

<a id="584"></a>

### #584: [Bug] Loading TLS certificates from path doesn't work

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/584 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-26 16:59:31.000 UTC (13 days ago) |
| **Updated** | 2025-12-26 16:59:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Connect to Temporal Cloud with mTLS auth using certificate file provided in `TEMPORAL_TLS_CLIENT_CERT_PATH` env var.

### Describe the bug

Setting `TEMPORAL_TLS_CLIENT_CERT_PATH` env var to load a certificate leads to connection error:

```
tem.InvalidOperationException: Connection failed: `get_system_info` call error after connection: Status { code: Unknown, message: "transport error", source: Some(tonic::transport::Error(Transport, hyper::Error(Io, Custom { kind: InvalidData, error: "received fatal alert: CertificateRequired" }))) }
```

If the same certificate is loaded into `TEMPORAL_TLS_CLIENT_CERT_DATA` env var, connection is successful.

### Minimal Reproduction

```
var envVars = Environment.GetEnvironmentVariables();
foreach (var key in envVars.Keys)
{
    string keyStr = key.ToString();
    if (keyStr.StartsWith("TEMPORAL"))
    {
        Console.WriteLine($"{keyStr} = {envVars[key]}");
    }
}

var connectOptions = ClientEnvConfig.LoadClientConnectOptions();
var client = await TemporalClient.ConnectAsync(connectOptions);
Console.WriteLine("✅ Client connected to {0} in namespace '{1}'", connectOptions.TargetHost, connectOptions.Namespace);
```

### Additional context

Looks like `ClientEnvConfig.Tls.ToTlsOptions` only reads `Data` and ignores  `Path` property of `DataSource`: https://github.com/temporalio/sdk-dotnet/blob/e13113b422ff633d44500fef392243b237f9d46a/src/Temporalio/Common/EnvConfig/ClientEnvConfig.cs#L204


---

<a id="578"></a>

### #578: [Feature Request] Add tests to confirm proper Nexus support for time-skipping environment

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/578 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-17 17:36:14.000 UTC (22 days ago) |
| **Updated** | 2025-12-17 17:36:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When Nexus was added, tests specific to the time-skipping test server were not added. At least a common test confirming time skipping test server works with Nexus should be added. Note, any such test may fail due to https://github.com/temporalio/sdk-java/issues/2592 which would be a blocker for doing this.


---

<a id="576"></a>

### #576: [Feature Request] .NET Analyzer for Checking Workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/576 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-12 15:31:49.000 UTC (27 days ago) |
| **Updated** | 2025-12-12 15:39:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Like we [built for Go](https://github.com/temporalio/sdk-go/tree/master/contrib/tools/workflowcheck) and [built for Java](https://github.com/temporalio/sdk-java/pull/2356), there is a desire for a "workflow check" analyzer for .NET.

Initial notes/thoughts:

* Should be a diagnostic/Roslyn analyzer called "workflow check" to match Go and Java equivalents
* Should _transitively_ check known-yet-configurable invalid actions occurring in a workflow
  * Transitive is the key/hard part
    * This requires coloring methods as "Temporal invalid" or not, and any method that invokes an invalid method is itself invalid, so this is basically call graph building
    * For Go, diagnostic checks support "facts" which are effectively serializable metadata that can be attached to typed AST, so that was used to mark a method as invalid (including transitively)
    * For Java, no such thing exists, so we had to completely write an analyzer from scratch
    * Like Java, .NET analyzer can ideally work from workflow method out and not have to eagerly color all methods
    * The error needs to show the call graph stack since many times the issue is several calls deep from the workflow itself
  * Understood that this will miss some things, e.g. reflection
  * See https://github.com/temporalio/sdk-dotnet#workflow-logic-constraints and https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#net-task-determinism for what constitutes an invalid action
* Ideally, should disable or invert certain existing analyzer/diagnostic warnings that are not applicable to workflows
  * See https://github.com/temporalio/sdk-dotnet?tab=readme-ov-file#workflow-editorconfig for set of rules that should be inverted/disabled
* If analyzer is cheap enough performance-wise to enable by default when using the `Temporalio` NuGet package, should do so
* Ideally, if the rules are not too granular, we can create entries at https://github.com/temporalio/rules for each one (so we should prefix with `TMPRL`)
  * Even if they are fairly granular, it is something we may want
* https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-roslyn-analyzer already exists for those curious

Admittedly research has not been done to confirm that all of these features are possible with .NET code analyzers.


---

<a id="568"></a>

### #568: [Feature Request] Support non-workflow activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/568 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-02 17:20:32.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 17:20:32.000 UTC |
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

<a id="558"></a>

### #558: [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/558 |
| **State** | OPEN |
| **Author** | chris-olszewski (Chris Olszewski) |
| **Created** | 2025-11-12 16:27:02.000 UTC (1 months ago) |
| **Updated** | 2025-11-12 16:27:02.000 UTC |
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

<a id="549"></a>

### #549: [Bug] Investigate `ExecuteWorkflowAsync_PollingBehavior_Autoscaling` flake

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/549 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-10-24 19:52:42.000 UTC (2 months ago) |
| **Updated** | 2025-10-24 19:54:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

In rare situations, `Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkflowAsync_PollingBehavior_Autoscaling` fails with:

```
  Failed Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkflowAsync_PollingBehavior_Autoscaling [113 ms]
  Error Message:
   The collection was expected to contain a single element, but it was empty.
  Stack Trace:
     at Temporalio.Tests.Worker.WorkflowWorkerTests.<>c__DisplayClass222_0.<<ExecuteWorkflowAsync_PollingBehavior_Autoscaling>b__0>d.MoveNext() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7561
--- End of stack trace from previous location ---
   at Temporalio.Tests.Worker.WorkflowWorkerTests.<>c__DisplayClass229_0`1.<<ExecuteWorkerAsync>b__0>d.MoveNext() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7732
--- End of stack trace from previous location ---
   at Temporalio.Worker.TemporalWorker.<>c__DisplayClass29_0`1.<<ExecuteAsync>b__0>d.MoveNext() in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 271
--- End of stack trace from previous location ---
   at Temporalio.Worker.TemporalWorker.ExecuteInternalAsync(Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 430
   at Temporalio.Worker.TemporalWorker.ExecuteInternalAsync(Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 445
   at Temporalio.Worker.TemporalWorker.ExecuteAsync[TResult](Func`1 untilComplete, CancellationToken stoppingToken) in /home/runner/work/sdk-dotnet/sdk-dotnet/src/Temporalio/Worker/TemporalWorker.cs:line 270
   at Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkerAsync[TWorkflow,TResult](Func`2 action, TemporalWorkerOptions options, IWorkerClient client) in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7745
   at Temporalio.Tests.Worker.WorkflowWorkerTests.ExecuteWorkflowAsync_PollingBehavior_Autoscaling() in /home/runner/work/sdk-dotnet/sdk-dotnet/tests/Temporalio.Tests/Worker/WorkflowWorkerTests.cs:line 7551
--- End of stack trace from previous location ---
```


---

<a id="479"></a>

### #479: [.NET] Worker Versioning high level client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/479 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-05-14 22:46:39.000 UTC (7 months ago) |
| **Updated** | 2025-05-14 22:49:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Create the high-level client for control plane operations concerning worker deployments. See the Go one as an example (though it also needs some updating as of this writing)


---

<a id="440"></a>

### #440: [Feature Request] Support user data in forwarded log callback in C bridge

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/440 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-31 17:29:35.000 UTC (9 months ago) |
| **Updated** | 2025-03-31 17:29:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

For low-level users of the pure C bridge (that happens to still be in this repo until #423), the ability to pass arbitrary user data through the callback similar to how done in other callbacks would be ideal. E.g. `forward_to_user_data: *mut libc::c_void` on `LoggingOptions` and update `ForwardedLogCallback`.


---

<a id="412"></a>

### #412: Expose Workflow cancel cause/reason

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/412 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-11 20:44:22.000 UTC (11 months ago) |
| **Updated** | 2025-02-11 20:44:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

WorkflowExecutionCancelRequestedEventAttributes has a cause field that should be exposed when workflows receive cancels, and we should additionally expose this as an input when users are issuing cancels from clients or commands


---

<a id="402"></a>

### #402: [Feature Request] Expose read-only headers to activity info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/402 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-03 13:29:53.000 UTC (11 months ago) |
| **Updated** | 2025-02-03 13:29:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 1 |

#### Description

### Describe the solution you'd like

We don't usually do this in SDKs, but since we did it in workflow info (needed inside update handler tracing interceptor), we might as well for activities


---

<a id="398"></a>

### #398: [Feature Request] Add explicit memoization support to the`Patched()` API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/398 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:45:44.000 UTC (11 months ago) |
| **Updated** | 2025-01-29 23:45:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In short:

- Add a `memoized` argument to the `Patched` and `DeprecatePatch` APIs.

- Keep backward compatibility on those functions for non-specifying the `memoized` argument, but deprecate those signatures. Make sure documentation clearly indicate how existing calls may safely get converted.

- Delegate handling of the `patched` logic to Core.

See temporalio/features#591 for details.


---

<a id="387"></a>

### #387: [Feature Request] Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/387 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 13:52:13.000 UTC (1 years ago) |
| **Updated** | 2025-01-07 13:52:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users need a workflow-local var that is scoped only to the current workflow when accessed via code. See https://github.com/temporalio/features/issues/571.

Rough sketch: a user can have `public static readonly WorkflowLocal<string> MyValue = new()`, and it works like `AsyncLocal`.



---

<a id="360"></a>

### #360: [Feature Request] Auto-skip time in time-skipping testing environment when waiting on update result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/360 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-21 16:31:24.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-21 16:31:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We auto-skip time when waiting on workflow result, we need to do the same when waiting on update result. See https://github.com/temporalio/features/issues/551.



---

<a id="299"></a>

### #299: [Feature Request] Upon initial client connection, use `RpcException` if initial `GetSystemInfo` call fails

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/299 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-03 14:00:31.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-03 14:00:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

If the TCP connection succeeds but the gRPC call fails (e.g. permission denied), throw the `RpcException` with gRPC details instead of a common exception for all connection failures.


---

<a id="291"></a>

### #291: [Feature Request] Update test running to replay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/291 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-27 13:11:14.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-27 13:11:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We need to replay our test workflows more. Today we don't replay nor do we run without cache, both of which could catch issues. At the least we need to try to auto-replay workflows that complete in tests.



---

<a id="246"></a>

### #246: [Feature Request] Expose raw proto objects on WorkflowExecution and WorkflowExecutionDescription

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/246 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-10 12:26:53.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-10 12:26:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Right now `RawInfo` and `RawDescription` are `internal` and should be exposed to see things like pending activities


---

<a id="243"></a>

### #243: [Feature Request] Enforce no-commands-allowed restrictions in read-only contexts

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/243 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-08 17:55:43.000 UTC (1y 8m ago) |
| **Updated** | 2024-05-08 17:55:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Wait condition callbacks, update validators, and queries should fail if they try to add commands


---

<a id="194"></a>

### #194: coverlet.collector.3.1.2.nupkg: 1 vulnerabilities (highest severity is: 7.5)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/194 |
| **State** | OPEN |
| **Author** | app/mend-for-github-com |
| **Created** | 2024-02-28 18:45:28.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-05 12:49:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Mend: dependency security vulnerability |
| **Assignees** | None |
| **Milestone** | None |

#### Description

<details><summary><img src='https://whitesource-resources.whitesourcesoftware.com/vulnerability_details.png' width=19 height=20> Vulnerable Library - <b>coverlet.collector.3.1.2.nupkg</b></p></summary>

<p>Coverlet is a cross platform code coverage library for .NET, with support for line, branch and metho...</p>
<p>Library home page: <a href="https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg">https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/coverlet.collector/3.1.2/coverlet.collector.3.1.2.nupkg</p>
<p>

</details>

## Vulnerabilities

| CVE | Severity | <img src='https://whitesource-resources.whitesourcesoftware.com/cvss3.png' width=19 height=20> CVSS | Dependency | Type | Fixed in (coverlet.collector.3.1.2.nupkg version) | Remediation Possible** |
| ------------- | ------------- | ----- | ----- | ----- | ------------- | --- |
| [CVE-2024-21907](https://www.mend.io/vulnerability-database/CVE-2024-21907) | <img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> High | 7.5 | coverlet.collector.3.1.2.nupkg | Direct | Newtonsoft.Json - 13.0.1 | &#9989; |
<p>**In some cases, Remediation PR cannot be created automatically for a vulnerability despite the availability of remediation</p>

## Details

<details>

<summary><img src='https://whitesource-resources.whitesourcesoftware.com/high_vul.png?' width=19 height=20> CVE-2024-21907</summary>


###  Vulnerable Library - <b>coverlet.collector.3.1.2.nupkg</b></p>

<p>Coverlet is a cross platform code coverage library for .NET, with support for line, branch and metho...</p>
<p>Library home page: <a href="https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg">https://api.nuget.org/packages/coverlet.collector.3.1.2.nupkg</a></p>
<p>Path to dependency file: /tests/Temporalio.Tests/Temporalio.Tests.csproj</p>
<p>Path to vulnerable library: /home/wss-scanner/.nuget/packages/coverlet.collector/3.1.2/coverlet.collector.3.1.2.nupkg</p>
<p>

Dependency Hierarchy:
  - :x: **coverlet.collector.3.1.2.nupkg** (Vulnerable Library)
<p>Found in base branch: <b>main</b></p>
</p>

<p></p>

###  Vulnerability Details
<p>  
  
Newtonsoft.Json before version 13.0.1 is affected by a mishandling of exceptional conditions vulnerability. Crafted data that is passed to the JsonConvert.DeserializeObject method may trigger a StackOverflow exception resulting in denial of service. Depending on the usage of the library, an unauthenticated and remote attacker may be able to cause the denial of service condition.


<p>Publish Date: 2024-01-03
<p>URL: <a href=https://www.mend.io/vulnerability-database/CVE-2024-21907>CVE-2024-21907</a></p>
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
<p>Origin: <a href="https://github.com/advisories/GHSA-5crp-9r3c-p9vr">https://github.com/advisories/GHSA-5crp-9r3c-p9vr</a></p>
<p>Release Date: 2024-01-03</p>
<p>Fix Resolution: Newtonsoft.Json - 13.0.1</p>

</p>

<p></p>


:rescue_worker_helmet: Automatic Remediation will be attempted for this issue.
</details>

***

<p>:rescue_worker_helmet:Automatic Remediation will be attempted for this issue.</p>


---

<a id="176"></a>

### #176: [Feature Request] Handle possibility of update-before-start

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/176 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-12 18:39:01.000 UTC (1y 12m ago) |
| **Updated** | 2024-01-12 18:39:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See similar Python issue at https://github.com/temporalio/sdk-python/issues/462.

Basically activation job events are ordered to have update first then start if they come in the same task. But what if someone dynamically registers a handler? It won't work on start. We likely need some buffer-for-life-of-task approach to updates so dynamic handlers work on start.


---

<a id="77"></a>

### #77: [Bug] Time skipping test server not auto skipping time properly in some cases

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-dotnet/issues/77 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-25 19:14:07.000 UTC (2y 7m ago) |
| **Updated** | 2023-08-22 20:50:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug
Came from #63. Using time-skipping test server, starting a workflow with a long timer (i.e. no activity) and then running `env.DelayAsync` is sleeping real time, not skipping time as expected.




