# temporalio/api - Complete Issue Dump

**Generated:** 2026-01-02
**Total Issues:** 13
**Total Upvotes:** 6
**Total Comments:** 9

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 13 |
| Issues with Upvotes | 1 (8%) |
| Total Upvotes | 6 |
| Total Comments | 9 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 9 |
| bug | 3 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#328](#328) | 6 | 0 | [Feature Request] Publish and maintain buf schema registry |
| [#169](#169) | 0 | 7 | [Proposal] Allow languages to customize package/namespace structure of generated proto APIs |
| [#427](#427) | 0 | 1 | Add configurable subpath for HTTP API |
| [#131](#131) | 0 | 1 | Clean up "Should be removed" fields |
| [#421](#421) | 0 | 0 | [Bug] api-go update fails if the commit message contains "`" |
| [#400](#400) | 0 | 0 | [Feature Request] Move/remove third party protos to a separate place instead of root |
| [#307](#307) | 0 | 0 | [Feature Request] Deprecate list workflow methods? |
| [#299](#299) | 0 | 0 | [Document] Potentially misleading inline comment for PollWorkflowTaskQueueResponse |
| [#232](#232) | 0 | 0 | [Feature Request] Remove RetryState.RETRY_STATE_IN_PROGRESS from public api |
| [#198](#198) | 0 | 0 | [Feature Request] Publish Postman collection |
| [#172](#172) | 0 | 0 | [Feature Request] Use Payloads for ApplicationFailure message and stack trace |
| [#154](#154) | 0 | 0 | Document SearchAttributes parsing |
| [#136](#136) | 0 | 0 | ScheduledEventId to construct Idempotence Key |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

<a id="328"></a>

### #328: [Feature Request] Publish and maintain buf schema registry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/328 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-15 13:28:24.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-15 13:28:24.000 UTC |
| **Upvotes** | 6 |
| **Comments** | 0 |
| **Priority Score** | 12 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 6 |

#### Description

### Describe the solution you'd like

For others to use we want to publish and maintain a buf schema registry. This may be more challenging than it appears because we inline our google dependency which we need to make sure we don't publish. We could also consider generating code with buf but that is outside of the scope of this issue and we want to make sure raw protoc continues to work.


---

<a id="169"></a>

### #169: [Proposal] Allow languages to customize package/namespace structure of generated proto APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/169 |
| **State** | OPEN |
| **Author** | macrogreg (macrogreg) |
| **Created** | 2022-04-01 01:14:12.000 UTC (3y 9m ago) |
| **Updated** | 2022-04-13 20:18:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hi folks,

I have a proposal (incl. a sample solution) that I would like to discuss. If folks find the following interesting in general, I have a draft PR, for which I'd love to collect feedback.

Here, I am making a critical assumption on which the need to this proposal is based. Let us assume that the assumption is, at least partially, correct. If there are strong concerns with it, we can get back to it later:
> Most developers using some particular language come from not-yet-being Temporal-users to being Temporal-users in _their preferred language of choice_. Comparatively very few actually use Temporal in different languages. Therefore, while consistency is important, we must be prepared to make improvements in some languages that cannot be made in other languages (for back-compat or other reasons), even if that affects consistency across languages. That is not to dismiss the importance of consistency. Yet, still, language-specific improvements must be possible not only in areas of language-specific idiomatic use.

Here, I am proposing an improvement of that kind. 😃 

## Context

Our proto files specify, among other things, what package names (aka namespaces) the generated language APIs should have in various target languages. So far we have left them unchanged, simply following the directory structure in the API repo. For established languages this is now a done deal, as changing the package names is a compatibility break. For new / not-established languages, we may have some more flexibility to improve things (if needed).

## Problem

While designing and developing the .NET SDK I have met the need to constantly import a multitude of `Temporal.Api.Xyz` namespaces. It feels quite redundant and annoying. Doing it once is not a big deal. But in practice, you have to do it for EVERY SINGLE FILE that uses Temporal's data contracts in your application. And in a non-trivial application, that can be quite many files. Java users may not fully appreciate this, as they can simply import `Temporal.Api.*`, but such a wildcard syntax does not exist in all languages.

Of course, the IDE can help doing this quickly. But just like with the `*`-syntax, the convenience of it varies across tools and environments. Some developers simply prefer using notepad-like editors. In other cases, the advanced IDEs' convenience factors for this particular scenario vary too. For example, Visual Studio does not _automatically_ import namespaces for good reasons that go beyond the scope of this discussion. Instead, you have to click on a type that is not yet "found" (or hit a hot-key while the cursor is there) and then select an item in the appearing drop-down menu, and VS will then import the namespace. You have to do it every time a type is not found. In our case - once _per_ required Temporal namespace in _each_ file that needs that namespace. So basically - _a lot_.

## Solution

One of our guiding principles is focus on our users/developer. And we can make their lives better by improving on the package/namespace structure of temporal APIs. Crucially, we can only do it for new or almost new Temporal languages.

For example, for .NET, I would consider it a great story to reduce all the namespaces to the following four:
```cs
Temporal.ServiceApi.V1.WorkflowService
Temporal.ServiceApi.V1.OperatorService
Temporal.ServiceApi.V1.DataModel
Temporal.ServiceApi.V1.DataModel.ErrorDetails
```

**Explanation**:

#### Root namespace: `Temporal.ServiceApi.V1....`
  * _Temporal.**Service**Api..._, not _Temporal.Api..._
From the perspective of the user, it _is_ the service API. For us, of course, it is _the_ API. But the user is faced with several Temporal APIs. At the very least, there is the SDK, but in some cases, it is structured further (the worker SDK, the activity completion client, command-line tools, ...). This particular API is just one of several. Specifically, the _service-API_.
  * _Temporal.ServiceApi.V1.**Area**_, not _Temporal.ServiceApi.**Area**.V1_.
The latter choice we took in early languages, but it seems strange. If we have a V2, who is to say that it will have the same structure? If we have the version name on the package name, it should perceed the specifics to allow a different organization in a potential V2.

#### `Temporal.ServiceApi.V1.WorkflowService`

The RPC declarations (and only the RPC declarations) for the workflow service. No data exchange types. Essentially, what is currently declared in [workflowservice/v1/service.proto](https://github.com/temporalio/api/blob/master/temporal/api/workflowservice/v1/service.proto).

#### `Temporal.ServiceApi.V1.OperatorService`

The RPC declarations (and only the RPC declarations) for the operator service. No data exchange types. Essentially, what is currently declared in [operatorservice/v1/service.proto](https://github.com/temporalio/api/blob/master/temporal/api/operatorservice/v1/service.proto).

#### `Temporal.ServiceApi.V1.DataModel`

All data exchange types. There is no reason for distinct namespaces. For the user, this is the data model for interacting with the Temporal service. Currently, this includes everything that is not in the other namespaces.

#### `Temporal.ServiceApi.V1.DataModel.ErrorDetails`

The contracts here are special because they are not really part of the API. In fact, to my knowledge, currently only Go, Java, Python, and C++ actually support the [gRPC richer error model](https://cloud.google.com/apis/design/errors#error_model) on which these are based.

## Engineering considerations

I prototyped making the proposed improvement for .NET while leaving other languages unchanged.
Initially, it required to changing the namespace setting in each file accordingly. E.g.:
```proto
option csharp_namespace = "Temporal.Api.Workflow.V1";
```
to
```proto
option csharp_namespace = "Temporal.ServiceApi.V1.DataModel";
```

Unfortunately, that is not enough. The thing is that some proto compilers use the file name as a container name when grouping generated code. If the same file name exists in different namespaces, it is not a problem. However, the same file name cannot exist in the same namespace/package more then once, even if it is placed in different directories. Yet, call almost everything `message.proto`. I addressed that with a structural renaming. E.g.:

`temporal/api/common/v1/message.proto` --> `temporal/api/common/v1/common_message.proto`
`temporal/api/failure/v1/message.proto` --> `temporal/api/failure/v1/failure_message.proto`
`temporal/api/taskqueue/v1/message.proto` --> `temporal/api/taskqueue/v1/taskqueue_message.proto`
`. . .`

This did the trick and the protos compiled just fine. Only the .NET generated files should be different from before. Here is a draft PR: https://github.com/temporalio/api/pull/170.

#### Alternative option:

Note that once we are already forced to do a file renaming like above, we are missing an opportunity to remove some redundant characters in the file names. For example:

`temporal/api/common/v1/message.proto` --> `temporal/api/v1/common_message.proto`
`temporal/api/failure/v1/message.proto` --> `temporal/api/v1/failure_message.proto`
`temporal/api/taskqueue/v1/message.proto` --> `temporal/api/v1/taskqueue_message.proto`
`. . .`

As a result of that, all the files end up in the same directory. Whether or not it is a good thing is a matter of taste, and various constraints, some of which are discussed below.
Either way, here is a draft PR: https://github.com/temporalio/api/pull/171.

#### Summary:

I validated that both of the above options compile fine to .NET, using the proposed namespace structure. Other languages should be unchanged. However, the file renaming offers other (new) languages the option to do their own namespace mappings if they wish to.

If people are interested in this proposal, I'd be more than happy to validate all other relevant languages to remain unaffected by this restructuring of source file locations.

Please, let me know what you think.

#### Comments (7)

<details>
<summary><strong>cretz</strong> commented on 2022-04-01 11:41:45.000 UTC</summary>

You don't need to do anything to this repository to get the protos the way you want for your SDK.

I have had many cases where I move generated classes around, rename them, etc harmlessly. This does not affect the source protos nor should it. Make your generated protos look however you want to look in your SDK. In fact, you probably should as the default protoc for most languages is ugly. If that means as part of your build script you take the protos and move them around the way your draft PR does, no problem. If that means advanced post processing, no problem. That doesn't need to affect this repository.

We do some advanced proto generation post-processing in the Python SDK for example because the generated result is not to our liking.

Having said that, I do support changing the `csharp_namespace` if we really must. But the current values seem reasonable to me for consistency (in our other SDK's, we call it "api" not "service api" and we have the version as the last member of the package...would need a good reason to make C# special).

</details>

<details>
<summary><strong>macrogreg</strong> commented on 2022-04-01 20:06:28.000 UTC</summary>

> You don't need to do anything to this repository to get the protos the way you want for your SDK.

Absolutely. However, `option csharp_namespace` is used for nothing other than lang data-model generation. Why would we give it one value here, if we know that we prefer to use another value in the SDK? I would much rather see a consistency _within a language_, between what we display here, as a part of our API definition and what you actually encounter in a lang SDK. That would also make the likelihood of something getting out of sync much smaller and the build scripts much simpler.

Conversely, the between languages consistency, is -while nice - less important. Languages should follow their preferred design principles when creating namespaces. As an example, if one language has the wildcard (`*`) syntax and thus, traditionally more fine-grained package names, they should be able to follow that tradition without forcing it on other languages.

</details>

<details>
<summary><strong>macrogreg</strong> commented on 2022-04-01 20:08:32.000 UTC</summary>

Also, even if for some reason we decided to have a different value for `option csharp_namespace` here and in the SDK, the proposed file-name refactoring would make it heaps easier for .NET and _every_ language who wants to consider something similar. :)

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-04-01 20:14:15.000 UTC</summary>

> Languages should follow their preferred design principles when creating namespaces.

I am not sure the difference between "ServiceApi" and "Api" is a language-specific concern.

> the proposed file-name refactoring would make it heaps easier for .NET and every language who wants to consider something similar.

This is not true though. It is actually easier for most languages' protoc generators if protos for separate proto packages are in separate directories. We had to refactor core protos at https://github.com/temporalio/sdk-core/pull/255 to basically do the opposite of what you're doing here so that the same dir didn't have two of the same unqualified message name in it. The two reasons I gave in that issue:

* Often code generators may choose to use the proto dir/import path instead of the proto package name to choose where to place files
* It is confusing for an importer to not know based on import what proto package is being used

Unfortunately protoc in each language leaves a lot to be desired and most languages have to adapt the result to their needs. I understand this makes it tough for .Net, but I don't think anything short of maybe `csharp_namespace` should be changed here.

</details>

<details>
<summary><strong>macrogreg</strong> commented on 2022-04-01 21:29:19.000 UTC</summary>

> Often code generators may choose to use the proto dir/import path instead of the proto package name to choose where to place files

Interesting point. I guess, the protoc compilers are quite different across languages. Perhaps the first proposed PR (https://github.com/temporalio/api/pull/170) highlights a better direction (rather than the second like I thought initially). There, the proto files are kept in the same directories as today (unchanged), but the file-names are made unique. E.g.:
`temporal/api/taskqueue/v1/message.proto` --> `temporal/api/taskqueue/v1/taskqueue_message.proto`
Perhaps, despite the redundancy, it is the best of both worlds, because it allows language compilers with various assumptions to do the right thing? 

</details>

<details>
<summary><strong>macrogreg</strong> commented on 2022-04-01 21:29:55.000 UTC</summary>

> It is confusing for an importer to not know based on import what proto package is being used

Could you please clarify on this? Under what circumstances in this an issue?

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-04-13 20:18:48.000 UTC</summary>

> Could you please clarify on this? Under what circumstances in this an issue?

Sorry I just saw this. For proto writers, `import "mydir/foo.proto"` having messages in package `some.package` and `import "mydir/bar.proto"` having message in package `some.other.package` is confusing. Usually it helps proto writers if the import path/dir relates to the proto package in some way.

In general though, I think at least for now, having the .Net namespaces mirror the proto packages is reasonable (same as all of our other SDKs, though slight changes may be needed if protoc generates an ugly name for something).

</details>


---

<a id="427"></a>

### #427: Add configurable subpath for HTTP API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/427 |
| **State** | OPEN |
| **Author** | stevekinney (Steve Kinney) |
| **Created** | 2024-07-01 15:43:40.000 UTC (1y 6m ago) |
| **Updated** | 2024-07-01 19:53:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The change made in #410 causes a few potential problems for integrating with the UI.

First, some users host UI Server at a subpath and set both the client-side and API routes.

```go
route.SetAPIRoutes(e, cfgProvider, serverOpts.APIMiddleware)
route.SetUIRoutes(e, cfg.PublicPath, assets)
```

Secondly, _not_ having a sub-path for the API routes means that they will likely conflict with client-side UI routes. The current implementation of the UI passes through all routes with `/api/v1` to UI Server. If both the pages and the API routes have the same path, it will be trickier to correctly implement the passthrough functionality.

Suggested resolutions:

- The path for the API routes should be configurable.
- They should default to _something_ (e.g. `/api`) and _not_ be set at the root by default since—selfishly—we'd need this set for CLI, Docker, and Temporal Cloud implementations anyway.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-07-01 19:53:06.000 UTC</summary>

> The path for the API routes should be configurable.

I have opened https://github.com/temporalio/temporal/issues/6212 (this is not done in this repo, it's part of the server that sets up the API)

> The change made in https://github.com/temporalio/api/pull/410 causes a few potential problems for integrating with the UI. [...] They should default to something (e.g. /api) and not be set at the root by default since

We do have stable roots of `/namespaces`, `/cluster`, and `/system-info` (opened https://github.com/temporalio/api/issues/428 to handle one we missed). We should never add more than those three. We do not serve anything from the literal `/`, we just removed some unnecessary API path parts, not the whole thing.

</details>


---

<a id="131"></a>

### #131: Clean up "Should be removed" fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/131 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2021-12-03 00:46:59.000 UTC (4y 1m ago) |
| **Updated** | 2021-12-03 00:49:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

In https://github.com/temporalio/api/pull/121 I added a few "Should be removed" comments to some fields. Remove them and mark them as reserved. Was not done in that PR to avoid doing any non-comments changes.

#### Comments (1)

<details>
<summary><strong>Sushisource</strong> commented on 2021-12-03 00:49:12.000 UTC</summary>

Looks like there are still some TODOs that snuck in there too so address those

</details>


---

<a id="421"></a>

### #421: [Bug] api-go update fails if the commit message contains "`"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/421 |
| **State** | OPEN |
| **Author** | twin-drill (divy) |
| **Created** | 2024-06-11 20:00:04.000 UTC (1y 6m ago) |
| **Updated** | 2024-06-11 20:02:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

When merging pull requests or committing to the repository, the workflow `api-go update` will fail if the commit message contains the "`" character.

### Describe the bug

"Prepare inputs" fails.

In this case, the word "string" is encased in "`":
```
/home/runner/work/_temp/[omitted].sh: line 7: string: command not found
```



---

<a id="400"></a>

### #400: [Feature Request] Move/remove third party protos to a separate place instead of root

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/400 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-23 17:35:34.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-23 17:53:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Other users `protoc` from the root of this repo. When https://github.com/temporalio/api/commit/108b40ae508505b64f19ccbe2fdbcd304081391b was done, we put google-based proto dependencies at the same path as our own assuming that all users were ok with using _these_ google protos instead of their own (e.g. from https://github.com/protocolbuffers/protobuf/tree/main/src/google/protobuf).

We probably need to either:

* Put the third party references where the `protoc` is actually run (e.g. `api-go`) and only embed them here when testing

or:

* Move `google/api` to `thirdparty/google-api/google/api`
* Move `google/protobuf` to `thirdparty/google-protobuf/google/protobuf`
* Add `-I thirdparty/google-api` and `-I thirdparty/google-protobuf` to _our_ `protoc`
* Confirm the fact that `thirdparty` is nested under our root is ok and can easily be ignored by most `protoc` use


---

<a id="307"></a>

### #307: [Feature Request] Deprecate list workflow methods?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/307 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2023-08-21 02:15:43.000 UTC (2y 4m ago) |
| **Updated** | 2023-08-21 02:15:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

I heard we might want to deprecate some of these:

https://github.com/temporalio/api/blob/8f89bdc358642e1358876f164c7f4e663e225117/temporal/api/workflowservice/v1/service.proto#L356-L389

Users get surprised by the limitations of ListOpen/ListClosed ([example](https://community.temporal.io/t/closed-workflow-executions-request-builder-doesnt-allow-both-status-filter-and-type-filter/9251)).

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Mark deprecated these:

- ListOpenWorkflowExecutions
- ListClosedWorkflowExecutions

And keep these?

- ListWorkflowExecutions
- ListArchivedWorkflowExecutions (assuming you can't get archived workflows from `ListWorkflowExecutions`?)
- ScanWorkflowExecutions (if it's important to have an unordered option?)



---

<a id="299"></a>

### #299: [Document] Potentially misleading inline comment for PollWorkflowTaskQueueResponse

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/299 |
| **State** | OPEN |
| **Author** | taonic (Tao Guo) |
| **Created** | 2023-06-16 08:24:39.000 UTC (2y 6m ago) |
| **Updated** | 2023-06-16 08:24:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

To clearly understand the scope of the workflow history returned in `PollWorkflowTaskQueueResponse`.

### Describe the issue

At the moment, the [inline comment](https://github.com/temporalio/api/blob/f4f5bd81e2d34770f9bf3948c1697ede3acbdc02/temporal/api/workflowservice/v1/request_response.proto#L268-L270) is stated as below:

> The history for this workflow, which will either be complete or partial. Partial histories
are sent to workers who have signaled that they are using a sticky queue when completing
a workflow task.

However, the term "complete" can be misleading as for long event history, this will only return the first page and rely on `next_page_token` for subsequent fetches.


---

<a id="232"></a>

### #232: [Feature Request] Remove RetryState.RETRY_STATE_IN_PROGRESS from public api

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/232 |
| **State** | OPEN |
| **Author** | tsurdilo (Tihomir Surdilovic) |
| **Created** | 2022-09-01 05:50:39.000 UTC (3y 4m ago) |
| **Updated** | 2022-09-01 05:50:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

RetryState.RETRY_STATE_IN_PROGRESS
is used internally only but is exposed via public api: https://github.com/temporalio/api/blob/master/temporal/api/enums/v1/workflow.proto#L107

This is causing some confusions to our users. If possible please remove it (keep it internal only). 

Idk if this should be issue opened on the server or here. Please let me know if this repo is wrong place for it.


---

<a id="198"></a>

### #198: [Feature Request] Publish Postman collection

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/198 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-07-11 18:02:14.000 UTC (3y 5m ago) |
| **Updated** | 2022-07-11 18:02:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

A user suggested:

> Temporal should publish their collection with GRPC APIs documented. It will be epic.

The ability to add gRPC requests to collections was just added to Postman.


---

<a id="172"></a>

### #172: [Feature Request] Use Payloads for ApplicationFailure message and stack trace

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/172 |
| **State** | OPEN |
| **Author** | bergundy (Roey Berman) |
| **Created** | 2022-04-18 22:51:56.000 UTC (3y 8m ago) |
| **Updated** | 2022-04-18 22:51:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Today these fields are plain text making it possible to leak sensitive application info.

### Describe the solution you'd like

Add the ability to use Payloads for these so they could be encrypted with a custom data converter



---

<a id="154"></a>

### #154: Document SearchAttributes parsing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/154 |
| **State** | OPEN |
| **Author** | lorensr (Loren ☺️) |
| **Created** | 2022-03-03 20:34:29.000 UTC (3y 10m ago) |
| **Updated** | 2022-03-03 20:34:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->
`SearchAttributes`:

https://github.com/temporalio/api/blob/148f6186cf063ddac5600aa53549ec8c0afe5eaa/temporal/api/common/v1/message.proto#L58-L62

I don't know from reading this proto how to specify search attribute types in `StartWorkflowExecution`. Possible types are:

https://github.com/temporalio/api/blob/df58bcd5eb85434a8dc5561d55e597d0ad031fc5/temporal/api/enums/v1/common.proto#L40-L48

![image](https://user-images.githubusercontent.com/251288/156648148-d3771749-e72f-41a0-8d6d-13b81994cf45.png)

https://docs.temporal.io/docs/concepts/what-is-a-search-attribute/#custom-search-attributes

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

A comment explaining how the Payloads are parsed, for example:

// Each Payload has a `metadata.type: IndexedValueType`
// If `payload.metata.type` is `INDEXED_VALUE_TYPE_DATETIME`, `payload.data` should be an integer with milliseconds since epoch.



---

<a id="136"></a>

### #136: ScheduledEventId to construct Idempotence Key

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/api/issues/136 |
| **State** | OPEN |
| **Author** | dtornow (Dominik Tornow) |
| **Created** | 2021-12-22 21:44:47.000 UTC (4 years ago) |
| **Updated** | 2021-12-22 21:45:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Feature request

Add `ScheduledEventId` to `PollActivityTaskQueueResponse`.

### Additional context

The tuple of `(PollActivityTaskQueueResponse.WorkflowExecution.RunId, PollActivityTaskQueueResponse.ScheduledEventId)` is unique per Activity Execution and may be used to construct an *Idempotence Key* to deduplicate side effects during Activity Task Executions.


