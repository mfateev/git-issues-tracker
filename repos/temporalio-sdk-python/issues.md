# temporalio/sdk-python - Complete Issue Dump

**Generated:** 2026-01-02
**Total Issues:** 115
**Total Upvotes:** 31
**Total Comments:** 206

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 115 |
| Issues with Upvotes | 17 (15%) |
| Total Upvotes | 31 |
| Total Comments | 206 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 65 |
| bug | 46 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#487](#487) | 6 | 3 | [Feature Request] Allow workflow logger to opt-out of sandboxing |
| [#638](#638) | 1 | 12 | Importing 3rd party package `ruamel.yaml` anywhere causes failure to validate workflow |
| [#688](#688) | 0 | 12 | [Bug] Workflow sandbox issues with Protobuf |
| [#160](#160) | 0 | 12 | [Bug] OpenTelemetry interceptors report errors |
| [#1048](#1048) | 0 | 11 | [Feature Request] Support raising cancellation in sync multiprocessed activities |
| [#238](#238) | 3 | 5 | [Bug] Can't debugging workflow using vscode |
| [#733](#733) | 0 | 10 | [Bug] Unable to run workflows with OpenTelemetry and ddtrace |
| [#700](#700) | 0 | 10 | [Bug] No clean way to cancel an activity and wait until it's cancelled |
| [#300](#300) | 0 | 10 | [Bug] Investigate PyGILState_Release issue for client |
| [#639](#639) | 1 | 7 | [Bug] Operation was canceled when start_workflow |
| [#758](#758) | 1 | 6 | [Feature Request] Suggest Providing activities extraction utilities to get them from a class and a module |
| [#1104](#1104) | 0 | 7 | Setting debug_mode in a Worker still doesn't allow the user of breakpoints |
| [#807](#807) | 2 | 3 | [Feature Request] Loss of stack trace information |
| [#676](#676) | 0 | 7 | [Feature Request] Support `(str, Enum)` like `StrEnum` |
| [#603](#603) | 3 | 1 | [Feature Request] Investigate/document how to use PyCharm debugger with workflows |
| [#1154](#1154) | 2 | 2 | [Feature Request] Support InterpreterPoolExecutor from py3.14 |
| [#837](#837) | 0 | 6 | [Feature Request] Make Temporal logger adapter accomodate to OpenTelemetry |
| [#235](#235) | 0 | 6 | [Feature Request] Raise exception for payloads that violate gRPC message max size |
| [#1136](#1136) | 0 | 5 | [Bug] Langfuse Tracing Not Working with Temporal OpenAI Agents Plugin |
| [#1009](#1009) | 0 | 5 | [Feature Request] OpenAI Agents Streaming support |
| [#875](#875) | 1 | 3 | [Feature Request] Expose SDK metric for `worker._count_not_evict_count` |
| [#641](#641) | 1 | 3 | [Bug] Sending a query that is not registered in the workflow results in an "Encoded failure" when encode_common_attributes=True |
| [#586](#586) | 0 | 5 | [Bug] workflow.start_child_workflow() behaving differently than workflow.execute_child_workflow() in tests |
| [#476](#476) | 0 | 5 | [Bug] Failed during multiprocess queue poll for heartbeat |
| [#321](#321) | 2 | 1 | [Feature Request] Temporal exceptions from converters and codecs should fail the workflow not task |
| [#1250](#1250) | 1 | 2 | RuntimeError when starting Temporal test server in Python SDK |
| [#928](#928) | 2 | 0 | [Feature Request] Research and make SDK free-threading capable/compatible |
| [#697](#697) | 0 | 4 | [Feature Request] Handle edge case of recursive exceptions in failure converter |
| [#622](#622) | 1 | 2 | [Bug] unable to install temporal on python 3.11-alpine3.16 |
| [#213](#213) | 2 | 0 | [Feature Request] Confirm vscode debuggability within sandbox |
| [#1186](#1186) | 0 | 3 | [Bug] Incomplete fix for #1091 - conversation_id still required in _TemporalModelStub.get_response() |
| [#1049](#1049) | 0 | 3 | [Feature Request] Support access to metric meter in multi-processed workers |
| [#891](#891) | 0 | 3 | [Feature Request] Support executing Workflow directly |
| [#782](#782) | 1 | 1 | [Bug] cancelled timer callback causes asyncio.exceptions.InvalidStateError |
| [#454](#454) | 0 | 3 | [Feature Request] Schedule creation should create tracing span by default |
| [#399](#399) | 0 | 3 | [Bug] Older Python versions cannot auto-import activity return class in sandbox |
| [#1203](#1203) | 0 | 2 | [Bug] `retry_policy` not set in `ativity.info()` despite being defined in the `workflow.execute_activity()` call |
| [#1089](#1089) | 1 | 0 | [Feature Request] Provide supported Session implementations for OpenAI Agents |
| [#618](#618) | 0 | 2 | [Feature Request] Improve wait_condition semantics |
| [#601](#601) | 0 | 2 | [Feature Request] Reset workflow feature |
| [#462](#462) | 0 | 2 | [Bug] Handle possibility of update-before-start |
| [#390](#390) | 0 | 2 | PoC - Static analyzer for Python |
| [#1130](#1130) | 0 | 1 | [Feature Request] Support for custom tracing providers |
| [#851](#851) | 0 | 1 | [Bug] Test server in time-skipping mode does return userMetadata.summary |
| [#814](#814) | 0 | 1 | [Bug] Python client not able to connect to self-hosted Temporal server via proxy using authorization header |
| [#803](#803) | 0 | 1 | Run different worker types in separate threads |
| [#778](#778) | 0 | 1 | [Bug] strange workflow task timeout |
| [#731](#731) | 0 | 1 | [Feature Request] Special behavior for Temporal built-in prefixes |
| [#719](#719) | 0 | 1 | [Feature Request] Provide "workflow local" |
| [#699](#699) | 0 | 1 | [Bug] `workflow.wait` broken with `asyncio.FIRST_COMPLETED` and local activities |
| [#655](#655) | 0 | 1 | [Bug] KeyError: 'warnings' due to sandbox |
| [#652](#652) | 0 | 1 | [Bug] `ScheduleOverlapPolicy` has broken __eq__ |
| [#629](#629) | 0 | 1 | [Bug] workflow.upsert_search_attributes() will bork SDK on empty inputs |
| [#625](#625) | 0 | 1 | [Feature Request] Fix pyright type-checking violations |
| [#597](#597) | 0 | 1 | [Bug] Cant build wheel temporalio when installing with pip |
| [#563](#563) | 0 | 1 | [Feature Request] Update test running to replay |
| [#360](#360) | 0 | 1 | [Feature Request] Allow use of type hints even if arg count mismatches in case of default params |
| [#1262](#1262) | 0 | 0 | [Bug] Add ability to obtain `ApplicationError` details with type hint |
| [#1254](#1254) | 0 | 0 | [Bug] `SandboxImportNotificationPolicy.WARN_ON_UNINTENTIONAL_PASSTHROUGH` warns on import of the workflow itself to the sandbox |
| [#1237](#1237) | 0 | 0 | [Bug] Converter returns bad value converting `dict[None, Any]` |
| [#1232](#1232) | 0 | 0 | [Feature Request] Add BasedPyright as a required typecheck |
| [#1230](#1230) | 0 | 0 | [Feature Request] Support non-workflow activities |
| [#1209](#1209) | 0 | 0 | [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow |
| [#1176](#1176) | 0 | 0 | [Feature Request] Clean up pyright exclude list |
| [#1121](#1121) | 0 | 0 | [Feature Request] Document runtime telemetry config fields |
| [#1079](#1079) | 0 | 0 | [Feature Request] Ensure tests exist to confirm custom slot supplier slot info has proper fields |
| [#1077](#1077) | 0 | 0 | [Feature Request] Extend typing improvements from #938 |
| [#1056](#1056) | 0 | 0 | [Feature Request] Add workflow MCP client |
| [#921](#921) | 0 | 0 | Remove eval_type_backport dependency |
| [#892](#892) | 0 | 0 | [Feature Request] Support `merge_extra` in custom adapters |
| [#870](#870) | 0 | 0 | [Python] Worker Versioning high level client |
| [#834](#834) | 0 | 0 | [Bug] Python 3.13.3 on macOS Intel hangs post-test |
| [#826](#826) | 0 | 0 | [Bug] test_unfinished_handler_on_workflow_termination fails in some situations with time skipping and update |
| [#810](#810) | 0 | 0 | [Feature Request] Implement proper behavior for `cancelled`, `uncancel`, and `cancelling` of activities and child workflows |
| [#773](#773) | 0 | 0 | [Feature Request] Built-in query responses should use "RawValue" |
| [#772](#772) | 0 | 0 | [Bug] Investigate unused bind_f function |
| [#764](#764) | 0 | 0 | Expose Workflow cancel cause/reason |
| [#762](#762) | 0 | 0 | [Feature Request] Enforce no-mutable-defaults lint rule |
| [#761](#761) | 0 | 0 | [Feature Request] Publish musl wheel |
| [#754](#754) | 0 | 0 | [Feature Request] Add explicit memoization support to the `patched()` API |
| [#748](#748) | 0 | 0 | [Feature Request] Allow customization of dev server UI port |
| [#722](#722) | 0 | 0 | [Feature Request] Stack trace on deadlock exception improvements |
| [#675](#675) | 0 | 0 | [Feature Request] Auto-skip time in time-skipping testing environment when waiting on update result |
| [#669](#669) | 0 | 0 | [Feature Request] Support / provide guidance on using OpenTelemetry logging + metrics SDKs with process-pool workers  |
| [#657](#657) | 0 | 0 | [Bug] Cannot replace worker client if default Runtime is used |
| [#637](#637) | 0 | 0 | [Bug] Windows 3.12.5 builds are broken |
| [#636](#636) | 0 | 0 | [Feature Request] Add type-level tests |
| [#613](#613) | 0 | 0 | [Feature Request] Investigate adding allure to GitHub Actions CI workflows |
| [#611](#611) | 0 | 0 | [Feature Request] Better error message when trying to upsert a datetime search attribute with non-tz-aware datetime. |
| [#608](#608) | 0 | 0 | [Feature Request] Make payload conversion errors on workflow input more discriminable |
| [#607](#607) | 0 | 0 | [Bug] Prevent hot-reload of workflow definitions from disk |
| [#606](#606) | 0 | 0 | [Feature Request] Consider aligning activation job application with TS changes |
| [#585](#585) | 0 | 0 | [Bug] Test flake, may be sandbox import issue |
| [#543](#543) | 0 | 0 | [Bug] Generating protos via docker and manually are causing different whitespace inside of multi-paragraph docs |
| [#536](#536) | 0 | 0 | [Feature Request] Clarify exception on return type decoding failure |
| [#535](#535) | 0 | 0 | [Feature Request] Turn invalid asyncio call warnings into errors |
| [#503](#503) | 0 | 0 | [Bug] Do not mutate `extra` in activity/workflow loggers |
| [#496](#496) | 0 | 0 | [Bug] Fix explanation of Pydantic datetime issue |
| [#488](#488) | 0 | 0 | [Bug] Fix typo in restriction set |
| [#479](#479) | 0 | 0 | [Feature Request] Reflection-based payload codec test to ensure all non-search-attribute payloads are covered |
| [#467](#467) | 0 | 0 | [Feature Request] Support workflow metadata query |
| [#439](#439) | 0 | 0 | [Feature Request] Allow continue as new from update handler |
| [#438](#438) | 0 | 0 | [Feature Request] Allow `RawValue` to be used for Search Attibute Upsert |
| [#436](#436) | 0 | 0 | [Bug] Ensure continue as new raised from update handler is a task failure |
| [#435](#435) | 0 | 0 | [Bug] Overload checking not catching bad parameters anymore |
| [#433](#433) | 0 | 0 | [Feature Request] Remove activation job sorting and confirm update order |
| [#427](#427) | 0 | 0 | [Bug] dataclasses require even defaulted fields in the JSON dict |
| [#421](#421) | 0 | 0 | [Feature Request] Move from black/isort to Ruff |
| [#377](#377) | 0 | 0 | [Feature Request] Warn when non-static activity method registered as static |
| [#355](#355) | 0 | 0 | [Feature Request] Log and drop signals that pass the wrong number of arguments |
| [#352](#352) | 0 | 0 | [Bug] Cancel received in between awaitables not cancelling workflow |
| [#348](#348) | 0 | 0 | [Feature Request] Make all exposed modules be packages |
| [#301](#301) | 0 | 0 | [Bug] Proxied classes are not properly hashable |
| [#45](#45) | 0 | 0 | Improve workflow stack trace query result |
| [#11](#11) | 0 | 0 | Test client/worker/core behavior across fork |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

<a id="487"></a>

### #487: [Feature Request] Allow workflow logger to opt-out of sandboxing

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/487 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-03-12 17:58:04.000 UTC (1y 9m ago) |
| **Updated** | 2025-10-16 00:06:49.000 UTC |
| **Upvotes** | 6 |
| **Comments** | 3 |
| **Priority Score** | 15 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 6 👀 2 |

#### Description

### Describe the solution you'd like

Some users have advanced logger handlers that cannot work in sandbox mode. I think we can add a `temporalio.workflow.logger.unsafe_disable_sandbox()` call on the logger and if set, the `process` call can be wrapped in `with temporalio.workflow.unsafe.sandbox_unrestricted()` and `workflow.unsafe.imports_passed_through()`.

#### Comments (3)

<details>
<summary><strong>millerick</strong> commented on 2025-10-15 19:21:46.000 UTC</summary>

Until this is implemented, would it be reasonable for users that run into issues with their logger to add the underlying logging libraries a `with_passthrough_modules()` call to suppress these types of messages?  E.g. to ignore sandbox restrictions for `structlog`?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-10-15 19:37:48.000 UTC</summary>

Depends on how the underlying logging library is loaded and used on whether that would be enough. I would probably recommend something like:

```python
class SandboxDisabledLoggerAdapter(workflow.LoggerAdapter):
    def process(
        self, msg: Any, kwargs: MutableMapping[str, Any]
    ) -> Tuple[Any, MutableMapping[str, Any]]:
        with temporalio.workflow.unsafe.sandbox_unrestricted():
            with temporalio.workflow.unsafe.imports_passed_through():
                return super().process(msg, kwargs)

temporalio.workflow.logger = SandboxDisabledLoggerAdapter(logging.getLogger("temporalio.workflow"), None)
```

Which is basically what this issue is suggesting we offer a helper for. But I just typed this here in GH issue, this would have to be tested and confirmed to work as expected.


</details>

<details>
<summary><strong>millerick</strong> commented on 2025-10-16 00:06:48.000 UTC</summary>

Our issues stem from formatting the record and not from processing the record.  I'll try to find a similar way to wrap the format calls in `structlog`, but adding this as a datapoint for if/when the helpers this issue represents in the SDK are implemented.
```
During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/lib/python3.11/logging/__init__.py", line 1110, in emit
    msg = self.format(record)
          ^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/logging/__init__.py", line 953, in format
    return fmt.format(record)
           ^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/site-packages/structlog/stdlib.py", line 1098, in format
    ed = p(logger, meth_name, cast(EventDict, ed))
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/site-packages/structlog/processors.py", line 346, in __call__
    return self._dumps(event_dict, **self._dumps_kw)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/json/__init__.py", line 238, in dumps
    **kw).encode(obj)
          ^^^^^^^^^^^
  File "/usr/local/lib/python3.11/json/encoder.py", line 200, in encode
    chunks = self.iterencode(o, _one_shot=True)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/json/encoder.py", line 258, in iterencode
    return _iterencode(o, 0)
           ^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/site-packages/structlog/processors.py", line 354, in _json_fallback_handler
    from structlog.threadlocal import _ThreadLocalDictWrapper
  File "/usr/local/lib/python3.11/site-packages/temporalio/worker/workflow_sandbox/_importer.py", line 442, in __call__
    return self.current(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.11/site-packages/temporalio/worker/workflow_sandbox/_importer.py", line 234, in _import
    mod = importlib.__import__(name, globals, locals, fromlist, level)
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

Reactions: 👍 1

</details>


---

<a id="638"></a>

### #638: Importing 3rd party package `ruamel.yaml` anywhere causes failure to validate workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/638 |
| **State** | OPEN |
| **Author** | adamh-oai (Adam Hupp) |
| **Created** | 2024-09-08 07:44:18.000 UTC (1y 3m ago) |
| **Updated** | 2024-10-16 20:56:09.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 12 |
| **Priority Score** | 14 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description


To reproduce:
  1. Checkout https://github.com/temporalio/samples-python
  2. `poetry add ruamel.yaml`
  3. Add `import ruamel.yaml` to the top of `hello/hello_activity.py`
  4. `poetry run hello/hello_activity.py`

This produces the error here: https://gist.github.com/adamh-oai/dfdb9b07b89bf3cee10da34ba2582805

Important parts:

```
  File "/Users/adamh/.virtualenvs/temporalio-samples-G-Ux_4V2-py3.11/lib/python3.11/site-packages/ruamel/yaml/representer.py", line 1132, in <module>
    RoundTripRepresenter.add_representer(TimeStamp, RoundTripRepresenter.represent_datetime)
  File "/Users/adamh/.virtualenvs/temporalio-samples-G-Ux_4V2-py3.11/lib/python3.11/site-packages/ruamel/yaml/representer.py", line 135, in add_representer
    cls.yaml_representers[data_type] = representer
    ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
TypeError: unhashable type: '_RestrictedProxy'

The above exception was the direct cause of the following exception:
...
  File "/Users/adamh/.virtualenvs/temporalio-samples-G-Ux_4V2-py3.11/lib/python3.11/site-packages/temporalio/worker/_workflow.py", line 118, in __init__
    raise RuntimeError(f"Failed validating workflow {defn.name}") from err
RuntimeError: Failed validating workflow GreetingWorkflow
```

This behavior is surprising to me because the workflow/activity is not actually using the `ruamel` package.  The error persists if I move the workflow/activity to a separate module and wrap in a `imports_passed_through` block.  Wrapping the `ruamel` import in this same block *does* resolve the error.  It seems like the `ruamel` import may have side effects on other modules.  So, I have a workaround, but (short of disabling sandboxing entirely) I'm concerned that in a large codebase with unpredictable 3rd party libraries this will be a recurring issue.

#### Comments (12)

<details>
<summary><strong>cretz</strong> commented on 2024-09-09 13:32:38.000 UTC</summary>

This is a sandbox issue. Despite those short "hello" samples being in the same file, we actually recommend workflows be in their own file. Can you replicate if the workflows are in a separate file and import the activities via "passthrough" similar to what's shown in the quickstart of the README: https://github.com/temporalio/sdk-python?tab=readme-ov-file#implementing-a-workflow?

</details>

<details>
<summary><strong>adamh-oai</strong> commented on 2024-09-09 17:36:40.000 UTC</summary>

Yes, it happens if the workflows are in their own module and imported via an unsafe block:

> The error persists if I move the workflow/activity to a separate module and wrap in a imports_passed_through block. Wrapping the ruamel import in this same block does resolve the error. It seems like the ruamel import may have side effects on other modules. So, I have a workaround, but (short of disabling sandboxing entirely) I'm concerned that in a large codebase with unpredictable 3rd party libraries this will be a recurring issue.

</details>

<details>
<summary><strong>adamh-oai</strong> commented on 2024-09-09 17:37:18.000 UTC</summary>

 A related issue: https://github.com/temporalio/sdk-python/issues/301

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-09 17:47:01.000 UTC</summary>

> Yes, it happens if the workflows are in their own module and imported via an unsafe block:

Ah, I see the bug already opened for making the proxy item hashable. I wonder then if this is a duplicate of that. In this case our wrapping of datetime causes this issue.

>  Wrapping the ruamel import in this same block does resolve the error. It seems like the ruamel import may have side effects on other modules.

To confirm, are you using this library _inside_ the workflow and want the import reloaded every time the workflow is run? We recommend passing through all imports you know you'll use deterministically and/or you don't want completely reloaded every time. It's going to be a performance issue to reload third party libraries for every workflow run, but I understand the safety benefit.

> I'm concerned that in a large codebase with unpredictable 3rd party libraries this will be a recurring issue.

Yes, most do not use many third party libraries _inside_ their workflows, mostly only in activities and other code. But yes, our goal is to try our best to make third party libraries usable inside workflows but these hiccups happen here and there and we need to fix the linked bug.

</details>

<details>
<summary><strong>adamh-oai</strong> commented on 2024-09-09 18:09:58.000 UTC</summary>

> To confirm, are you using this library inside the workflow and want the import reloaded every time the workflow is run? 

This import is not used inside the workflow; in the real case where I hit this I was using it to load a yaml file for configuring the temporal client, but the workflows themselves don't import it or use it.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-09 18:43:18.000 UTC</summary>

> but the workflows themselves don't import it or use it.

This error only occurs in workflow code when loading it in a sandbox, so somehow this yaml code is getting executed/loaded in a workflow. Maybe the activity imports weren't being passed through when you split the workflow file off onto its own?

</details>

<details>
<summary><strong>creatorrr</strong> commented on 2024-10-15 22:41:45.000 UTC</summary>

Same issue. I ended up removing `ruamel` entirely but I found that adding the following to the _very first_ `__init__.py` file seems to help:

```python
from temporalio import workflow

with workflow.unsafe.imports_passed_through():
    import ruamel.yaml

    # also- msgpack if installed
    import msgpack
```

Reactions: 👍 1

</details>

<details>
<summary><strong>creatorrr</strong> commented on 2024-10-15 22:42:46.000 UTC</summary>

@cretz it would be really helpful to add this suggestion / explanation to the error though. It took up hours to track this down and fix :(

Reactions: 👍 1

</details>

<details>
<summary><strong>creatorrr</strong> commented on 2024-10-15 22:43:57.000 UTC</summary>

or maybe a whitelist of common libraries in the temporal python sdk itself? that's probably not super wise but would save so much confusion

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-16 15:47:29.000 UTC</summary>

We don't really control the error here unfortunately. We do have docs at https://github.com/temporalio/sdk-python?tab=readme-ov-file#workflow-sandbox that say in bold:

> **For performance and behavior reasons, users are encouraged to pass through all third party modules whose calls will be deterministic**

</details>

<details>
<summary><strong>adamh-oai</strong> commented on 2024-10-16 18:35:30.000 UTC</summary>

> This error only occurs in workflow code when loading it in a sandbox, so somehow this yaml code is getting executed/loaded in a workflow. 

The way I interpreted it is that because ruamel patches datetime, it's implicitly used in the the workflow even though it's not imported.  FWIW, I can't repro this right now but it was weirdly inconsistent earlier as well so not sure what's going on; since someone else ran into it I assume this is a real issue.  Ideally ruamel would just Not Do That, but I'm also not sure why it does or what other options there are.  

The main issue is that an innocuous change in another part of the codebase that doesn't touch anything temporal related can cause temporal sandbox failures.  

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-16 20:45:07.000 UTC</summary>

> because ruamel patches datetime

Ah, I was not aware of this (unfamiliar with the library). So we proxy datetime to avoid people doing things like calling `now()`. But that proxying can be disabled. We have to do this for Pydantic because of an issue in Python subclass checking. So you can create a new sandbox runner without datetime proxied like https://github.com/temporalio/samples-python/blob/171b5e5b205167fdff4231978857c4efe1cd6225/pydantic_converter/worker.py#L45-L65 and pass that runner to the worker and `datetime` will not be affected usually.

However, you may have to use `with temporalio.workflow.unsafe.sandbox_unrestricted():` for any ruamel-using code (even if it uses it indirectly, like with datetime) to avoid our other checks.

> The main issue is that an innocuous change in another part of the codebase that doesn't touch anything temporal related can cause temporal sandbox failures.

I am not sure any Python library can help this if patching is occurring. If you patch Python stdlib and some unrelated code expects it to work the stdlib way, it may fail. But between passing through imports, unrestricting sandbox for certain code, and disabling proxying for the `datetime` module, you should be able to remove all Temporal checks and wrappings.

</details>


---

<a id="688"></a>

### #688: [Bug] Workflow sandbox issues with Protobuf

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/688 |
| **State** | OPEN |
| **Author** | Gr1N (Nikita Grishko) |
| **Created** | 2024-11-12 16:48:34.000 UTC (1y 1m ago) |
| **Updated** | 2025-03-11 17:02:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 12 |
| **Priority Score** | 12 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Hey!

I'm doing nothing special. I have one workflow and one activity. I use Protobuf messages as input parameters for both cases. I just expect to be able to execute the workflow and wait for it to be completed.

### Describe the bug

The issue happens only in the Kubernetes environment.

```
Traceback (most recent call last):
  File \"/usr/local/lib/python3.11/site-packages/temporalio/converter.py\", line 436, in from_payload
    return google.protobuf.json_format.Parse(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File \"/usr/local/lib/python3.11/site-packages/google/protobuf/json_format.py\", line 421, in Parse
    return ParseDict(js, message, ignore_unknown_fields, descriptor_pool,
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File \"/usr/local/lib/python3.11/site-packages/google/protobuf/json_format.py\", line 446, in ParseDict
    parser.ConvertMessage(js_dict, message, '')
  File \"/usr/local/lib/python3.11/site-packages/google/protobuf/json_format.py\", line 487, in ConvertMessage
    self._ConvertFieldValuePair(value, message, path)
  File \"/usr/local/lib/python3.11/site-packages/google/protobuf/json_format.py\", line 563, in _ConvertFieldValuePair
    if _IsMapEntry(field):
       ^^^^^^^^^^^^^^^^^^
  File \"/usr/local/lib/python3.11/site-packages/google/protobuf/json_format.py\", line 151, in _IsMapEntry
    field.message_type.GetOptions().map_entry)
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File \"<frozen importlib._bootstrap>\", line 1176, in _find_and_load
  File \"<frozen importlib._bootstrap>\", line 1130, in _find_and_load_unlocked
  File \"/usr/local/lib/python3.11/site-packages/temporalio/worker/workflow_sandbox/_importer.py\", line 393, in __getitem__
    return self.current[key]
           ~~~~~~~~~~~~^^^^^
KeyError: 'google.protobuf'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File \"/usr/local/lib/python3.11/site-packages/temporalio/converter.py\", line 306, in from_payloads
    values.append(converter.from_payload(payload, type_hint))
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File \"/usr/local/lib/python3.11/site-packages/temporalio/converter.py\", line 442, in from_payload
    raise RuntimeError(f\"Unknown Protobuf type {message_type}\") from err
RuntimeError: Unknown Protobuf type internal.path.to.protobuf.TaskRequest

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File \"/usr/local/lib/python3.11/site-packages/temporalio/worker/_workflow_instance.py\", line 1625, in _convert_payloads
    return self._payload_converter.from_payloads(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File \"/usr/local/lib/python3.11/site-packages/temporalio/converter.py\", line 308, in from_payloads
    raise RuntimeError(
RuntimeError: Payload at index 0 with encoding json/protobuf could not be converted

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File \"/usr/local/lib/python3.11/site-packages/temporalio/worker/_workflow_instance.py\", line 364, in activate
    self._workflow_input = self._make_workflow_input(start_job)
                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File \"/usr/local/lib/python3.11/site-packages/temporalio/worker/_workflow_instance.py\", line 896, in _make_workflow_input
    args = self._convert_payloads(start_job.arguments, arg_types)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File \"/usr/local/lib/python3.11/site-packages/temporalio/worker/_workflow_instance.py\", line 1633, in _convert_payloads
    raise RuntimeError(\"Failed decoding arguments\") from err
```

### Minimal Reproduction

Unfortunately, I don't have steps for reproduction. Everything works perfectly in my and my colleague's local environments.

I would love to hear ideas or proposals on what to look into to understand the root cause. The only thing I can state is that if I add the following import, everything works:
```python
with workflow.unsafe.imports_passed_through():
    import google.protobuf
```

My other Protobuf imports (the result of code generation from Protobuf definitions) are already under unsafe context manager.

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Linux
- Temporal Version: 1.8.0
- Yes, Docker and Kubernetes

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (12)

<details>
<summary><strong>cretz</strong> commented on 2024-11-12 17:15:23.000 UTC</summary>

> Unfortunately, I don't have steps for reproduction. Everything works perfectly in my and my colleague's local environments.

Ideally we can replicate so we can help debug the problem. It is interesting that the exact same Python code does different things in different environments. It may be a protobuf version issue or an order of operations issue, but a standalone replication may be needed for us to confirm the issue.

> The only thing I can state is that if I add the following import, everything works:

Looking at the traceback, it's a bit of an interesting case where we catch `KeyError` because that's how we're checking a not-found protobuf, but this is actually having an import-level key error for importing `google.protobuf`. I wonder if it is lazily importing `google.protobuf` inside of `GetOptions` there somehow.

I can't really tell the problem without a replication. Can you confirm exact protobuf version (both library and protoc generator) and continually reduce the k8s-only form of replication until it's very small and standalone?

</details>

<details>
<summary><strong>Gr1N</strong> commented on 2024-11-12 17:23:00.000 UTC</summary>

Here are my versions:
```
protobuf 4.25.3
libprotoc 3.19.6
```

Here is an example of a workflow file:
```python
from temporalio import workflow

with workflow.unsafe.imports_passed_through():
    from temporalio.v1.lorem_pb2 import (
        LoremWorkflowRequest,
        LoremWorkflowResponse,
    )


@workflow.defn(name="lorem-workflow")
class LoremWorkflow:
    @workflow.run
    async def run(self, req: LoremWorkflowRequest) -> LoremWorkflowResponse:
        return LoremWorkflowResponse(text="i am response")
```

Could it be the issue with my Protobuf definitions and the fact that I use maps (but again, on local, all good)?
```protobuf
message LoremWorkflowRequest {
  map<string, bool> random = 1;
}
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-11-12 17:47:27.000 UTC</summary>

> Here is an example of a workflow file:

To confirm, the exact same code from Python start to end fails in one of your environments but not another? May need to see the full standalone code (i.e. how you are registering/running worker). There may be an operations order issue.

> Could it be the issue with my Protobuf definitions and the fact that I use maps (but again, on local, all good)?

I cannot know to be honest without replicating and debugging. The code you show above should work fine in every environment. I wonder if there are Python version differences or something else in the one environment where this happens that could help us figure out how to reliably replicate?

I think the main goal is to confirm the _exact_ same small code that fails in one environment but works in another. Even something as simple as the order something is imported may affect it which is why _exact_ code matters.

</details>

<details>
<summary><strong>Gr1N</strong> commented on 2024-11-12 19:27:05.000 UTC</summary>

Yep, I understand that providing insights without a reproducible example is almost impossible.

However, I figured out how to make my workflow workable. 

I had my Protobuf imports under unsafe context manager:
```python
with workflow.unsafe.imports_passed_through():
    from temporalio.v1.lorem_pb2 import (
        LoremWorkflowRequest,
        LoremWorkflowResponse,
    )
``` 

I changed that to the following, and now I see no exceptions:
```python
from temporalio.v1.lorem_pb2 import (
    LoremWorkflowRequest,
    LoremWorkflowResponse,
)
```

What is the right way? 

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-11-12 20:14:21.000 UTC</summary>

> What is the right way?

The first way with the imports passed through is usually better for models because with the second way you're re-importing the models on every single workflow run which costs memory and CPU. Having said that, we automatically mark any import beneath `temporalio` as pass through I believe, so a bit surprised there is a difference.

</details>

<details>
<summary><strong>trajano</strong> commented on 2025-03-09 16:03:25.000 UTC</summary>

Sounds like the same issue I have https://stackoverflow.com/questions/79495633/how-do-i-handle-json-protobuf-messages-in-temporal-python-sdk

But I think the problem is that type is not known by the time it gets to the converter for lookup as noted by `<unknown>`  on the message

```
site-packages\temporalio\converter.py", line 435, in from_payload
    value = _sym_db.GetSymbol(message_type)()
            ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
```

The message_type may not be known at that point because of 
```
message_type = payload.metadata.get("messageType", b"<unknown>").decode()
```

AFAIK python erases type information at runtime so I am not sure how you're supposed to determine that unless there's an undocumented annotation to say what the types are.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-10 13:36:01.000 UTC</summary>

> But I think the problem is that type is not known by the time it gets to the converter for lookup

The problem is that whatever is doing the protobuf conversion is not setting metadata on the payload properly. This would be a bit strange in all but the oldest Python SDK versions or in CLI. Can you show the raw payload in workflow history (can download still encoded history from UI)? How are you setting this value? Are you possibly using CLI?

> AFAIK python erases type information at runtime

No, type hints are available at runtime, but regardless, on deserialization we use a `messageType` metadata value that should be set

Also, instead of an existing GH issue or SO, there are also forums and `#python-sdk` channels on Slack if easier for you. I think your problem is unrelated to this issue which is about the sandbox.

</details>

<details>
<summary><strong>trajano</strong> commented on 2025-03-10 18:12:45.000 UTC</summary>

Are you talking about this?

```json
{
  "eventId": "1",
  "eventTime": "2025-03-10T18:11:26.549986494Z",
  "eventType": "WorkflowExecutionStarted",
  "taskId": "1049165",
  "userMetadata": {},
  "workflowExecutionStartedEventAttributes": {
    "workflowType": {
      "name": "GreetingWorkflowProtobuf"
    },
    "taskQueue": {
      "name": "foo",
      "kind": "TASK_QUEUE_KIND_NORMAL"
    },
    "input": {
      "payloads": [
        {
          "message": "Archie"
        }
      ]
    },
    "workflowTaskTimeout": "10s",
    "originalExecutionRunId": "cc2e7a38-8c5e-4ca7-806b-e441d0ad7514",
    "firstExecutionRunId": "cc2e7a38-8c5e-4ca7-806b-e441d0ad7514",
    "attempt": 1,
    "firstWorkflowTaskBackoff": "0s",
    "workflowId": "29e58714-ebe5-4f6b-b277-fe81215c5a58"
  },
  "links": []
}
```

> No, type hints are available at runtime, but regardless, on deserialization we use a messageType metadata value that should be set

I don't see that but it explicitly be set in `userMetadata` ? I don't recall having to do that when it's Java

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-10 19:06:40.000 UTC</summary>

> I don't see that but it explicitly be set in `userMetadata`? I don't recall having to do that when it's Java

Yes, Java was able to infer, but even modern Java SDK will set that metadata. But newer SDKs _require_ this field even when they can infer. How are you starting this workflow? Any recent SDK version you start it with using a protobuf message will set the proper metadata. Are you using CLI? If so, you'll need something like `--input-meta messageType=my.qualified.Proto`.

</details>

<details>
<summary><strong>trajano</strong> commented on 2025-03-11 01:31:18.000 UTC</summary>

@cretz I am starting through Temporal UI, the **Start workflow** button

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-03-11 15:32:19.000 UTC</summary>

When starting through the latest UI, you have to select `json/protobuf` as the encoding, which will then provide a "Message Type" field you must provide with the fully qualified proto message name. Most SDKs require this even if older SDKs/implementations don't for backwards compatibility reasons.

Note, this is unrelated to this GitHub issue which is specifically concerning the sandbox and protobuf. Can use Slack or forums for general help (or another GitHub issue if really needed), or you can open a cloud ticket if you're a cloud customer.

</details>

<details>
<summary><strong>trajano</strong> commented on 2025-03-11 17:02:12.000 UTC</summary>

@cretz  noted, it appears to be in the latest cloud UI, but not in the current dev-server.  I'll open up a related issue

</details>


---

<a id="160"></a>

### #160: [Bug] OpenTelemetry interceptors report errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/160 |
| **State** | OPEN |
| **Author** | anhdle14 (Le Anh Duc) |
| **Created** | 2022-10-19 18:14:32.000 UTC (3y 2m ago) |
| **Updated** | 2024-07-31 19:11:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 12 |
| **Priority Score** | 12 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

I am currently using OpenTelemetry and Temporal Interceptors to send traces to Grafana Tempo via Grafana Agent.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

```plaintext
Failed to detach context
Traceback (most recent call last):
  File "/app/.venv/lib/python3.10/site-packages/temporalio/contrib/opentelemetry.py", line 419, in _top_level_workflow_context
    yield None
  File "/app/.venv/lib/python3.10/site-packages/temporalio/contrib/opentelemetry.py", line 332, in execute_workflow
    return await super().execute_workflow(input)
GeneratorExit

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/app/.venv/lib/python3.10/site-packages/opentelemetry/context/__init__.py", line 157, in detach
    _RUNTIME_CONTEXT.detach(token)  # type: ignore
  File "/app/.venv/lib/python3.10/site-packages/opentelemetry/context/contextvars_context.py", line 50, in detach
    self._current_context.reset(token)  # type: ignore
ValueError: <Token var=<ContextVar name='current_context' default={} at 0x7f33b28ea750> at 0x7f33244d7e40> was created in a different Context
```

It just returns errors like this without any more detailed 

### Minimal Reproduction

```py
# worker.py

resource = Resource(attributes={SERVICE_NAME: "worker"})

provider = TracerProvider(resource=resource)
provider.add_span_processor(BatchSpanProcessor(ConsoleSpanExporter()))
provider.add_span_processor(BatchSpanProcessor(OTLPSpanExporter(
    endpoint="tempo-us-central1.grafana.net:443",
    headers=[
        "authorization=Basic <REDACTED>"
    ]
)))

# Sets the global default tracer provider
trace.set_tracer_provider(provider)

# Creates a tracer from the global tracer provider
tracer = trace.get_tracer(__name__)


async def worker():
    client = await Client.connect(
        target_host="127.0.0.1:7233",
        namespace="default",
        interceptors=[TracingInterceptor(tracer=tracer)],
    )

    worker = Worker(
        client=client,
        task_queue="hello-query-task-queue",
        workflows=[GreetingWorkflow],
        activities=[compose_greeting],
    )
    
    await worker.run()


if __name__ == "__main__":
    asyncio.run(worker())
```

```py
# activity.py
resource = Resource(attributes={
    SERVICE_NAME: "python_temporal_opentelemetry_parallel"
})

provider = TracerProvider(resource=resource)
provider.add_span_processor(BatchSpanProcessor(ConsoleSpanExporter()))
provider.add_span_processor(BatchSpanProcessor(OTLPSpanExporter()))

# Sets the global default tracer provider
trace.set_tracer_provider(provider)

# Creates a tracer from the global tracer provider
tracer = trace.get_tracer(__name__)


@activity.defn
async def say_hello_activity(name: str) -> str:
    return f"Hello, {name}!"


@workflow.defn
class SayHelloWorkflow:
    @workflow.run
    async def run(self) -> None:
        otel_workflow.completed_span("parallel_wf")
        # Run 5 activities at the same time

        # ...

async def main():
    # Start client
    client = await Client.connect(
        target_host="localhost:7233",
        interceptors=[TracingInterceptor(tracer)],
    )


    # While the worker is running, use the client to run the workflow and
    # print out its result. Note, in many production setups, the client
    # would be in a completely separate process from the worker.
    handle = await client.start_workflow(
        SayHelloWorkflow.run,
        id="hello-parallel-activity-workflow-id",
        task_queue="hello-activity-task-queue",
    )
        
    await handle
    # print(f"Result: {result}")

if __name__ == "__main__":
    asyncio.run(main())
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: AWS | EKS | Docker | Ubuntu
- Temporal version: `temporalio = "^0.1b2"`
- OTel version:
  ```
  opentelemetry-api = "=1.13.0"
  opentelemetry-sdk = "=1.13.0"
  opentelemetry-exporter-otlp = "=1.11.1"
  opentelemetry-instrumentation-pymongo = "=0.34b0"
  opentelemetry-instrumentation-logging = "=0.34b0"
  opentelemetry-instrumentation-redis = "=0.34b0"
  opentelemetry-instrumentation-fastapi = "=0.34b0"
  ```
- Are you using Docker or Kubernetes or building Temporal from source?

  Yes

### Additional context

N/A

<!-- Add any other context about the problem here. -->


#### Comments (12)

<details>
<summary><strong>cretz</strong> commented on 2022-10-19 18:41:17.000 UTC</summary>

Thanks for the reproduction! That really helps. I will hopefully get to this soon.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-11-03 14:07:02.000 UTC</summary>

@anhdle14 - While it takes me some time to get around to this, there is https://github.com/temporalio/samples-python/tree/main/open_telemetry that does work fine. Can you confirm? Also note that OTLP package that uses an older version of protobuf may not work with ours at this time.

</details>

<details>
<summary><strong>nathanielobrown</strong> commented on 2023-05-22 16:06:12.000 UTC</summary>

I'm seeing this as well in my tests with `temporalio==1.2.0, opentelemetry-api==1.17.0, `opentelemetry-sdk==`.17.0`

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-22 16:22:16.000 UTC</summary>

@nathanielobrown - Can you describe what you're trying to do exactly? Are you trying to use OpenTelemetry from a workflow or in your workflow file? Can you pass through the import?

</details>

<details>
<summary><strong>nathanielobrown</strong> commented on 2023-05-22 16:33:18.000 UTC</summary>

I'm importing `from temporalio.contrib.opentelemetry import TracingInterceptor` and then using this interceptor for all my clients and workers. For the client I do have another interceptor I created for Sentry:
```python
def get_worker_interceptors() -> Sequence[Interceptor]:
    return [SentryInterceptor(), TracingInterceptor()]


def get_client_interceptors() -> Sequence[ClientInterceptor]:
    return [TracingInterceptor()]
```
I haven't got tracing working well yet, so I'm no expert/still a bit lost in the otel stuff, but I can say I see this log output in tests that run a workflow. Maybe for all tests that run workflows, not 100% sure:

```
ERROR:opentelemetry.context:Failed to detach context
Traceback (most recent call last):
  File "/Users/nob/Library/Caches/pypoetry/virtualenvs/dd-6mCrh732-py3.10/lib/python3.10/site-packages/temporalio/contrib/opentelemetry.py", line 427, in _top_level_workflow_context
    yield None
  File "/Users/nob/Library/Caches/pypoetry/virtualenvs/dd-6mCrh732-py3.10/lib/python3.10/site-packages/temporalio/contrib/opentelemetry.py", line 340, in execute_workflow
    return await super().execute_workflow(input)
GeneratorExit

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/Users/nob/Library/Caches/pypoetry/virtualenvs/dd-6mCrh732-py3.10/lib/python3.10/site-packages/opentelemetry/context/__init__.py", line 163, in detach
    _RUNTIME_CONTEXT.detach(token)  # type: ignore
  File "/Users/nob/Library/Caches/pypoetry/virtualenvs/dd-6mCrh732-py3.10/lib/python3.10/site-packages/opentelemetry/context/contextvars_context.py", line 50, in detach
    self._current_context.reset(token)  # type: ignore
ValueError: <Token var=<ContextVar name='current_context' default={} at 0x1104908b0> at 0x168a7fc40> was created in a different Context
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-22 16:40:58.000 UTC</summary>

Is that in a workflow file? Have you made sure you pass through the import?

</details>

<details>
<summary><strong>nathanielobrown</strong> commented on 2023-05-22 16:45:46.000 UTC</summary>

Not sure I totally follow, but I can say I've been using `UnsandboxedWorkflowRunner` so haven't been worrying about "pass through" imports. My definition of getting the interceptors and creating workers are in separate modules from my workflows. Does that answer the question?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-05-22 17:30:14.000 UTC</summary>

> Does that answer the question?

Yes, if you're not using the sandbox then it must be some other issue. We have unit tests for OTel at https://github.com/temporalio/sdk-python/blob/main/tests/contrib/test_opentelemetry.py, but the original users' sample recreates the tracer twice and yours using Sentry + OTel which shouldn't matter. I will try to create a small reproducible test case when I can get to this issue.

</details>

<details>
<summary><strong>nathanielobrown</strong> commented on 2023-06-20 11:22:01.000 UTC</summary>

Just wanted to jot down that I think this might just be an issue _on worker exit_. This happens all over the place in my tests, but I'm creating+shutting down workers all over the place as well. In production I see a lot of these errors when a worker is killed.

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-06-20 12:41:28.000 UTC</summary>

Yeah, there's an issue with detach context on generator exit (i.e. when event loop is GC'd). May be similar to https://github.com/open-telemetry/opentelemetry-python/issues/2606. I have to probably just swallow detachment failure.

</details>

<details>
<summary><strong>anhdle14</strong> commented on 2023-06-20 23:34:48.000 UTC</summary>

> but the original users' sample recreates the tracer twice and yours using Sentry + OTel which shouldn't matter. I will try to create a small reproducible test case when I can get to this issue.

Sorry, I don't follow this, should I not create the tracer twice?

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-07-05 13:23:26.000 UTC</summary>

> Sorry, I don't follow this, should I not create the tracer twice?

Correct. You are already setting it globally in `worker.py` that imports `activity.py`, you don't need to set it in `activity.py`. You are also including the workflow in with the activity and I would recommend that workflows be a separate file. You should not run global code in the workflow file (it is sandboxed and will run every workflow run). See README.

</details>


---

<a id="1048"></a>

### #1048: [Feature Request] Support raising cancellation in sync multiprocessed activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1048 |
| **State** | OPEN |
| **Author** | gregbrowndev (Greg Brown) |
| **Created** | 2025-08-24 12:17:29.000 UTC (4 months ago) |
| **Updated** | 2025-11-07 20:55:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 11 |
| **Priority Score** | 11 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Currently, activities running on a multi-processed worker can not be cancelled, either voluntarily by the user/workflow or involuntarily e.g. by a missed heartbeat (or activity timeout, I think?).

This leads to wasted resources and potential pool starvation, as the activity will run to completion anyway just to get the error below and subsequently retried:

> Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. 

Additionally, in the case of missed heartbeats / timeout, the server will show the activity has failed and will retry the activity. Users might not expect or protect against this behaviour, leading to possible data corruption (e.g. if the activity was trying to write to a specific file) or duplicate side effects (e.g. if the activity did something at the end, like send an email). 

Reproduction: [hello_cancellation.py](https://github.com/gregbrowndev/samples-python/blob/4f61efdb875ca3d4f92c69ff6fa172ab858611cb/hello/hello_cancellation.py#L66-L81) shows a sync, multi-processed activity running forever in a while loop, preventing the worker from shutting down after the workflow was cancelled.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

- Cancellation should be best effort in sync, multi-processed workers, like it is for async and multithreaded workers, with the known expectation that a cancellation cannot be received unless the activity is instrumented with heartbeats. 

- Provide clearer documentation in [Interrupt a Workflow Execution](https://docs.temporal.io/develop/python/cancellation#cancellation) and/or [Python SDK sync-vs-async](https://docs.temporal.io/develop/python/python-sdk-sync-vs-async) that sync, multiprocess workers do not currently support cancellation
- Provide guidance to avoid problematic side effects in such activities, e.g.
  - ensure output is written to a unique location or some kind of resource lock is acquired by the activity, 
  - trigger "only-once" side effects in subsequent activities in the workflow, e.g. sending an email (and that this requires a separate async or multithreaded worker / task queue)
  - etc.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

Other relevant work/issues:

- https://github.com/temporalio/sdk-python/pull/217
- https://github.com/temporalio/sdk-python/issues/1047

Root cause:

- Activity cancellation upon a missed heartbeat or timeout happens here in [_ActivityWorker](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L276)
- This sets various cancellation properties/events in [_RunningActivity](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L628-L629)
- For sync, multiprocessed activities, the `cancelled_event` is [initialised with a multiprocessing Manager event](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L451-L459) that can communicate across the process boundary.
- Multi-threaded activities initialise the `_ThreadExceptionRaiser` in [_execute_sync_activity](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L817-L820) with the thread ID, but this isn't done for the multi-processed case (I imagine it doesn't work the same way).
- So it looks like the `cancelled_event` is set and can be observed within the child process via [_Context](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L831-L833), but there is currently no built-in way for the user activity implementation to react to this event.

I also assume this affects the ["cancelled due to activity pause"](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L319-L336), at least after the activity has already started?

Out of interest, how does the the [_handle_start_activity_task](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L319-L336) work in this case? Does the `_ActivityWorker` continue to poll for tasks for an activity it has already picked up, as seems to be [suggested by the cancel task](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/worker/_activity.py#L166-L168)? Does the server somehow ensure these cancel tasks are sticky, so the correct worker instance that picked up the start task can process them? I'm assuming this mechanism only works for newly picked up activities, so `start` was never triggered. If not though, why isn't this mechanism also used for heartbeat failures?

Cheers,

I hope this assessment is accurate 🙏🏻 



#### Comments (11)

<details>
<summary><strong>cretz</strong> commented on 2025-08-26 12:43:52.000 UTC</summary>

For cancel, we leverage interruption. It is easy for us to cancel/interrupt asyncio and we use an advanced Python C function to interrupt a thread, but for non-thread-pool executors, there is no clear way to interrupt processing. But utilities like `activity.is_cancelled()` and `activity.wait_for_cancelled_sync()` should work. If you use multiprocess activities, you'll have to manually check for cancellation due to there being no clear way to interrupt non-thread-pool executor (of which process-pool is one type).

</details>

<details>
<summary><strong>gregbrowndev</strong> commented on 2025-08-26 21:23:17.000 UTC</summary>

thanks @cretz for the explanation. 

Just so I understand, the reason the `_ThreadExceptionRaiser` / underlying C function approach cannot be used for the multi-processed worker is because:

1. We cannot serialise `_ThreadExceptionRaiser` across the process pool, or
2. The C function only works in the current Python process (i.e. in the parent process where it is called)? or
3. The exception raised by `_ThreadExceptionRaiser` requires a kind of wait point, similar to the asyncio `CancelledError`. Since CPU bound work may take a long time before hitting a OS call, e.g. `sleep`, etc. we wouldn't able to rely on this to interrupt the thread in a timely manner?

The problem with manually checking if the task is cancelled is because it might not be viable to do so, e.g. in a tight loop (check every iteration?) or calling into some long-running library function outside of your control. For the same reason, I do the heartbeats in a separate thread following the async autoheartbeater example, so I can send one periodically. But then you still have the same issue, how to interrupt the main cpu-bound thread from the io-bound heartbeat/cancellation-checking thread?

One possible solution could be to use [signals](https://docs.python.org/3/library/signal.html) to interrupt the child process? This seems to work fairly well:

https://gist.github.com/gregbrowndev/ea3e699224185591c10c4f68fb0e65b9



</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-27 12:48:50.000 UTC</summary>

> Just so I understand, the reason the _ThreadExceptionRaiser / underlying C function approach cannot be used for the multi-processed worker is because

I think the reason is more simply - we don't know what executor is being used so we can't guess at how to interrupt code.

> For the same reason, I do the heartbeats in a separate thread following the async autoheartbeater example, so I can send one periodically. But then you still have the same issue, how to interrupt the main cpu-bound thread from the io-bound heartbeat/cancellation-checking thread?

This is general purpose code at this point, and only you know how best to interrupt your Python code. How might you interrupt this Python code if it weren't a Temporal activity? _Technically_ you maybe can reuse `temporalio.bridge.runtime.Runtime._raise_in_thread`, though it is untested in child process and we can't guarantee compatibility. You might be able to signal the child.

> One possible solution could be to use [signals](https://docs.python.org/3/library/signal.html) to interrupt the child process?

We can't even be sure the user is using multiprocessing, this code path is just for the non-threadpool executor, not specifically process pool executor.

</details>

<details>
<summary><strong>gregbrowndev</strong> commented on 2025-08-30 15:18:23.000 UTC</summary>

Thanks again for explaining. I think the penny just dropped for me that you're talking about third-party, possibly distributed executors rather than just the standard library ones (I didn't know there were any others).

I do think it would be sensible and valuable for the SDK to support both standard library executors equally in time and add missing features such as this. Particularly now that I know its technically possible, its just the code path treats all the other executors as sync, non-threaded.

I can see this issue, like the other ProcessPool executor features I requested, will a bit further back on the priority list for the time being. So happy to leave it here. But let me know if contributions are welcome and I could pick it up.


</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-02 15:17:10.000 UTC</summary>

> I think the penny just dropped for me that you're talking about third-party, possibly distributed executors rather than just the standard library ones

It's not just that there are third party executors, even with process pool executor, there is no obvious, single interruption approach in Python I don't believe. How would you interrupt a process-pool executor based function/task in normal Python if Temporal weren't involved? Is the approach universally what people would want? It is also important that it can be traditionally caught, shielded from, etc.

If you need advanced logic beyond the default, what you may want is to use an `async def` activity and make your own `run_in_executor` call to your process pool executor, and wait for cancellation and apply it to your process-pool-based future how you prefer best. This is effectively what we do, with some added capabilities to send heartbeats and back to the parent process and cancel info to the child process.

</details>

<details>
<summary><strong>gregbrowndev</strong> commented on 2025-09-03 15:03:15.000 UTC</summary>

I understand the concern, but I think there's a reasonable solution simply flipping your argument around:

Why not handle `ProcessPoolExecutor` out of the box in a somewhat opinionated, Temporal-aware way, and then if the user requires more advanced executor logic beyond the default, they can run a custom executor within an async/threaded worker?

---

I think all of the issues you raised are solvable without too much change:

> How would you interrupt a process-pool executor based function/task in normal Python if Temporal weren't involved? 

I think they should be interrupted in an analogous way as the async and threaded workers, i.e. the interruption is hands off, driven by the cancellation message received by the ActivityWorker, and doesn't require user code to explicitly check which may be infeasible. 

Like I showed in the Gist above, using `os.pkill(pid, SIGINT)` looks as analogous to me as what the threaded worker's  `_ThreadExceptionRaiser` low-level C function is doing. All it does it raise a `KeyboardInterrupt` in process specified by the `pid`. It doesn't destroy the actual process, it can be reused for further work. Its no different from any other uncaught exception in the task. We could go further and register a `SIGINT` signal handler in the process raise a `temporalio.exceptions.CancelledError` to be consistent with the sync, threaded approach.

> Is the approach universally what people would want?

I think this would be a sensible default, consistent with the behaviour of the other workers. If its not the exact approach the user wants, they could run their own executor within a async/threaded worker as mentioned. I find it hard to imagine this behaviour wouldn't be the expectation of most users coming from the other two main worker types.

> It is also important that it can be traditionally caught, shielded from, etc.

The exception raised by `os.pkill(pid, SIGINT)` in the child process would be a `KeyboardInterrupt` by default, but can be handled to raise a different exception. Its raised in the main thread of the process, and can be caught, ignored, reraised, etc. by normal Python code.

In the gist, I didn't handle shielding but this could be handled by backing the shield depth with the `multiprocess.Manager`. 

Reactions: 👍 2

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-09-03 15:41:09.000 UTC</summary>

> Why not handle ProcessPoolExecutor out of the box in a somewhat opinionated, Temporal-aware way, and then if the user requires more advanced executor logic beyond the default, they can run a custom executor within an async/threaded worker?

There hasn't really been enough desire for explicit process pool executor support. It's a fairly significant challenge to maintain these abstractions if they are rarely used.

There is actually some regret in supporting non-thread-pool based executors because they are much less commonly used and it's usually best for a user to control how they want to handle multiprocessing instead of Temporal choose. No other Temporal SDK supports multiprocessing. By having Temporal just execute a function and a user choose how to delegate their logic (multiprocess, sidecars, microservices, etc), we prevent issues such as our existing opinionated abstraction not sharing the same opinions as different users (e.g. not choosing a specific interruption approach, or not choosing to explicitly support process pools, or not making OTel work natively across a process boundary, etc).

There is concern about heaping on additional logic/expectations onto this lesser used non-thread-pool abstraction compared to just documenting its limitations and encouraging users to exercise more explicit control over the delegation of work/interruption/contexts from their own functions.

</details>

<details>
<summary><strong>ikseek</strong> commented on 2025-11-06 00:35:56.000 UTC</summary>

We use billiard.Pool adapted to ProcessPoolExecutor interface to run temporal sync activities that can segfault.
Is there a supported way I can hook into activity cancelation in such worker to send a SIGINT or in worst case SIGKILL to the subprocess executing the sync activity?
Thanks.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-11-07 14:43:53.000 UTC</summary>

Inside the activity itself, you can wait on cancellation via `activity.wait_for_cancellation_sync()` in a background thread. It will return when the activity has been cancelled (worker shutdown or server-sent cancel assuming you are properly heartbeating) at which point the process can exit itself if it'd like. There is no way outside the activity to get the cancel, but you can use a regular `async def` activity and do https://docs.python.org/3/library/asyncio-eventloop.html#asyncio.loop.run_in_executor to your process pool executor yourself and on asyncio cancellation do something to that started execution (or just use `def` and process pool executor or subprocessing in asyncio or threaded directly).

</details>

<details>
<summary><strong>ikseek</strong> commented on 2025-11-07 19:25:23.000 UTC</summary>

@cretz Thanks for the response!
Unfortunately wait_for_cancelled_sync raises `RuntimeError("Not in activity context")` when called not in the thread where activity executes.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-11-07 20:55:03.000 UTC</summary>

> Unfortunately wait_for_cancelled_sync raises RuntimeError("Not in activity context") when called not in the thread where activity executes.

This is touched on kinda at https://github.com/temporalio/sdk-python?tab=readme-ov-file#activity-context where it mentions the activity context uses https://docs.python.org/3/library/contextvars.html which do not span threads by default. You will have to use something like `copy_context` + `.run` to run code inside the same context.

</details>


---

<a id="238"></a>

### #238: [Bug] Can't debugging workflow using vscode

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/238 |
| **State** | OPEN |
| **Author** | niros1 |
| **Created** | 2023-01-03 21:38:49.000 UTC (3 years ago) |
| **Updated** | 2024-11-16 16:40:38.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 5 |
| **Priority Score** | 11 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 |

#### Description


when run a workflow with vscode debugger attach I get the flowwing error as soon a workflow start.

```File "/usr/local/lib/python3.7/site-packages/debugpy/_vendored/pydevd/pydevd.py", line 1715, in process_internal_commands
    int_cmd.do_it(self)
  File "/usr/local/lib/python3.7/site-packages/debugpy/_vendored/pydevd/_pydevd_bundle/pydevd_comm.py", line 542, in do_it
    self.method(dbg, *self.args, **self.kwargs)
  File "/usr/local/lib/python3.7/site-packages/debugpy/_vendored/pydevd/_pydevd_bundle/pydevd_constants.py", line 511, in new_func
    with warnings.catch_warnings():
  File "/usr/local/lib/python3.7/warnings.py", line 458, in __init__
    self._module = sys.modules['warnings'] if module is None else module
  File "/usr/local/lib/python3.7/site-packages/temporalio/worker/workflow_sandbox/_importer.py", line 393, in __getitem__
    return self.current[key]
KeyError: 'warnings'
```



### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [Linux]
- Temporal Version: Python sdk 0.1b4
- Are you using Docker or Kubernetes or building Temporal from source? Nor


#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2023-01-03 21:48:23.000 UTC</summary>

I will investigate this as part of https://github.com/temporalio/sdk-python/issues/213. In the meantime you can disable the sandbox during debug (you may also want to set `debug=True` for the worker so you don't hit deadlock timeouts).

</details>

<details>
<summary><strong>niros1</strong> commented on 2023-01-04 08:10:18.000 UTC</summary>

10X a lot - I will try it and update

</details>

<details>
<summary><strong>niros1</strong> commented on 2023-01-04 11:54:39.000 UTC</summary>

workflow_runner=workflow_instance.UnsandboxedWorkflowRunner()
Workaround it.

Reactions: 🎉 3

</details>

<details>
<summary><strong>MauSant</strong> commented on 2024-01-05 02:37:03.000 UTC</summary>

> workflow_runner=workflow_instance.UnsandboxedWorkflowRunner() Workaround it.

Thank you!

It worked for me with the following code: 

```
from temporalio.client import Client  
from temporalio.worker import Worker, UnsandboxedWorkflowRunner  

Worker(
        client,
        task_queue=some_task_queue,
        activities=[],
        workflows=[SomeWorkflow],
        debug_mode=True,
        workflow_runner=UnsandboxedWorkflowRunner()
    ):






Reactions: 👍 5

</details>

<details>
<summary><strong>challapradyumna</strong> commented on 2024-11-16 16:39:27.000 UTC</summary>

Created a new worker bypassing the `_pydevd_bundle` module. Works as of now. 

```
def new_sandbox_runner() -> SandboxedWorkflowRunner:
    # TODO(cretz): Use with_child_unrestricted when https://github.com/temporalio/sdk-python/issues/254
    # is fixed and released
    invalid_module_member_children = dict(
        SandboxRestrictions.invalid_module_members_default.children
    )
    del invalid_module_member_children["datetime"]
    return SandboxedWorkflowRunner(
        restrictions=dataclasses.replace(
            SandboxRestrictions.default.with_passthrough_modules("_pydevd_bundle"),
            invalid_module_members=dataclasses.replace(
                SandboxRestrictions.invalid_module_members_default,
                children=invalid_module_member_children,
            ),
        )
    )
```

used the above as a workflow runner as below

```
   worker = Worker(
        client,
        workflow_runner=new_sandbox_runner(),
        task_queue="queue",
        workflows=[Workflow],
        activities=[activity],
        max_concurrent_workflow_tasks = 1,
        max_concurrent_activities= 1
    )
```

Reactions: ❤️ 1

</details>


---

<a id="733"></a>

### #733: [Bug] Unable to run workflows with OpenTelemetry and ddtrace

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/733 |
| **State** | OPEN |
| **Author** | connected-bkiiskila (Benjamin Kiiskila) |
| **Created** | 2025-01-16 16:08:34.000 UTC (11 months ago) |
| **Updated** | 2025-08-04 15:32:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 10 |
| **Priority Score** | 10 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I'm attempting to enable tracing on my worker using the TracingInterceptor and the tracer provided by ddtrace.

### Describe the bug

A change upstream with the OpenTelemetry SDK seems to have caused an issue with Temporal's sandbox environment, causing an error stating os.environ.get isn't allowed in a workflow.

The relevant change on the OpenTelemetry side is [here](https://github.com/open-telemetry/opentelemetry-python/commit/52abb610dbdf1751cc745720055119ca1656ec16) - if I run with a version prior to 1.29 then I no longer get an error.

### Minimal Reproduction

A workflow implemented on a client with the TracingInterceptor attached and a valid OpenTelemetry SDK configured, in my case I'm using ddtrace with the DD_TRACE_OTEL_ENABLED environment variable set to true. From what I can tell though the call that isn't allowed in the sandbox is coming directly from the OpenTelemetry SDK and not the ddtrace patch.

### Environment/Versions

- OS and processor: macOS Apple Silicon
- Temporal Version: SDK 1.9.0
- Running in Docker arm64

### Additional context

You can see the stacktrace and error that's displayed on the Temporal UI here: https://gist.github.com/connected-bkiiskila/d11592cb86271b5f343a4d387097d418


#### Comments (10)

<details>
<summary><strong>cretz</strong> commented on 2025-01-16 17:40:59.000 UTC</summary>

Thanks! Hrmmm...

Looking at your stack trace, it appears at https://github.com/DataDog/dd-trace-py/blob/eddd51464e8c32db019e239c106317228b65667c/ddtrace/internal/opentelemetry/context.py#L24-L26 `opentelemetry.baggage` is and others are unfortunately imported at _runtime_ which means you may be inadvertently re-importing things for every workflow run. You should be able to add `import opentelemetry.baggage` somewhere outside of your workflow (e.g. where you start the worker) to run the module initialization code that `ddtrace` is running lazily. This will also improve your performance. `ddtrace` (reasonably) assumes modules are cached and that `import`s are not rerun in other environments, but that's not the case with workflows.

Though I am a bit surprised our `import opentelemetry.baggage.propagation` doesn't imply this. You may _also_ have to configure the sandbox restrictions to treat these OTel imports as pass through (https://github.com/temporalio/sdk-python?tab=readme-ov-file#passthrough-modules). It will require testing...

</details>

<details>
<summary><strong>connected-bkiiskila</strong> commented on 2025-01-16 17:42:43.000 UTC</summary>

I'll give that extra import a shot and see if that works and report back

</details>

<details>
<summary><strong>connected-bkiiskila</strong> commented on 2025-01-16 18:22:52.000 UTC</summary>

Hmmm, that doesn't seem to work either - only thing I'm having luck with is the downgrade to <1.29

For that passthrough documentation, would I just be flat out allowing os.environ.get or is there a way to allow specifically the call within the opentelemetry SDK? 

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-16 20:25:36.000 UTC</summary>

> For that passthrough documentation, would I just be flat out allowing os.environ.get or is there a way to allow specifically the call within the opentelemetry SDK?

The passthrough would be for passing through the imports, unrelated to the restrictions happening on `os.environ.get`. What's happening now, from your stack trace, is that `from opentelemetry.baggage import get_all` is being run _at runtime_ in the workflow. We want that to have already been cached. You can probably just add this to the top of your _workflow file_:

```
with workflow.unsafe.imports_passed_through():
    import opentelemetry.baggage
```

But this is untested. Even if we do allow `os.environ.get` through the sandbox, the bigger problem is that you are reimporting OTel libraries for _every workflow run_ which you don't want to do.

</details>

<details>
<summary><strong>connected-bkiiskila</strong> commented on 2025-01-16 21:45:18.000 UTC</summary>

Seems like that <1.29 fix was a fluke and works some of the time for whatever reason so I'm likely going to have to allow the import of os.environ.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-16 21:50:05.000 UTC</summary>

We may also be able to look into it, though it seems to be `ddtrace` specific in that they are importing at runtime. I do think it is worth doing your best to prevent this import from being treated as a new import for every workflow run (since that means it runs all OTel bootstrap code every run and takes up extra memory).

</details>

<details>
<summary><strong>connected-bkiiskila</strong> commented on 2025-01-16 21:51:07.000 UTC</summary>

Yeah I'd like to avoid it if possible, would you suggest creating a ticket on the ddtrace side and referencing this?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-01-16 22:04:14.000 UTC</summary>

`ddtrace` is not really doing anything wrong as far as a normal Python library goes. https://github.com/DataDog/dd-trace-py/blob/eddd51464e8c32db019e239c106317228b65667c/ddtrace/internal/opentelemetry/context.py#L24-L26 is just a problem in Temporal workflows. But we need to get those imports preloaded and passed through. You may be able to do something like:

```python
import opentelemetry.baggage
import opentelemetry.trace

my_worker = Worker(
  ...,
  workflow_runner=SandboxedWorkflowRunner(
    restrictions=SandboxRestrictions.default.with_passthrough_modules("opentelemetry", "ddtrace")
  )
)
```

when you create your worker.

</details>

<details>
<summary><strong>TheCodeWrangler</strong> commented on 2025-07-30 17:48:31.000 UTC</summary>

I have been seeing similar errors in a deployment I have where datadog sidecars were enabled.

Is this something we would need to patch into all our application workers 

```
with workflow.unsafe.imports_passed_through():
    ...
```

OR is there something that could/should be done at the `python-sdk` level to solve this for all users?

>But we need to get those imports preloaded

@cretz is this something you guys plan on implementing?  If you give some clear guidance on what needs done i could possibly draft a PR for it



</details>

<details>
<summary><strong>cretz</strong> commented on 2025-08-04 14:59:42.000 UTC</summary>

I don't think we have plans to support `ddtrace` specifically at this time. I do think you need to pass through the import of `ddtrace` if it is used in workflow code, including in workflow interceptors which are just workflow code. There may be other sandbox avoidance things that need to happen depending on the details of what `ddtrace` tries to do.

</details>


---

<a id="700"></a>

### #700: [Bug] No clean way to cancel an activity and wait until it's cancelled

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/700 |
| **State** | OPEN |
| **Author** | andmis (Andrey Mishchenko) |
| **Created** | 2024-12-09 19:54:17.000 UTC (1 years ago) |
| **Updated** | 2025-05-14 09:27:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 10 |
| **Priority Score** | 10 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

Start an activity from a workflow, cancel it, wait for clean cancellation acknowledgement, exit the workflow.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

There appear to be several issues.
1. If you call `handle.cancel()` on an activity handle from the workflow, the `CancelledError` will only be raised in the activity _after_ an `activity.heartbeat()` call, _followed_ by an `await something()` call. Otherwise the activity itself doesn't seem to receive `CancelledError`. This kinda sucks -- both that you need to call `heartbeat()` for cancellation requests to get through, and the fact that long-running coros do not get interrupted correctly. I don't understand the underlying implementation, but if the reason we need to `heartbeat()` is that workers don't want to poll for cancellation, still, when you call `activity.heartbeat()`, the client library could check for cancellation and immediately call `task.cancel()` on the task running the activity, no? Currently the work-around seems to be to litter activity code with `asyncio.sleep(0.1)`.
2. From the workflow code, if you want to cleanly wait for the activity cancellation, you have to catch `ActivityError`, which is a broader exception type than I actually want to catch (presumably there are other `ActivityError`s which I don't want to catch).
3. If you use `WAIT_CANCELLATION_COMPLETED`, if you try to cancel an activity that's currently awaiting a long-running coro (like `asyncio.sleep(10)`), the activity won't receive a `CancelledError` until it sends a heartbeat, which it can't do until the coro it's waiting on finishes, so your workflow won't finish until the activity's long-running coro finishes.

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

https://github.com/andmis/snippets/tree/temporal-python-sdk-cannot-cleanly-cancel-activities

Using `python run_workflow.py` with no args, the workflow exits promptly, but the activity never receives `CancelledError`, completes, and we get warning log spam:
```
2024-12-09 19:44:06.116611+00:00 (Workflow) Starting, use_sleep=False use_wait=False
2024-12-09 11:44:06.124587 (Activity) Running sandbox_activity
2024-12-09 19:44:07.130422+00:00 (Workflow) Cancelling activity
2024-12-09 19:44:07.130422+00:00 (Workflow) Activity cancelled
2024-12-09 19:44:07.130422+00:00 (Workflow) Exiting
2024-12-09 11:44:12.868185 (Activity) Completing sandbox_activity
2024-12-09T19:44:12.881460Z  WARN temporal_sdk_core::worker::activities: Activity not found on completion. This may happen if the activity has already been cancelled but completed anyway. task_token=TaskToken(CiRhOTc2ZWZkMy1iM2NiLTQwZmMtOWYzZi1jNjk0MzU2NjMzN2ESEHNhbmRib3gtd29ya2Zsb3caJDVhMjAyNWI3LWRhY2MtNDg4OC04NjA5LWI3NGQ3MzI2MzA3YyAFKAEyATFCEHNhbmRib3hfYWN0aXZpdHlKCAgBEIeKQBgB) details=Status { code: NotFound, message: "workflow execution already completed", details: b"\x08\x05\x12$workflow execution already completed\x1aB\n@type.googleapis.com/temporal.api.errordetails.v1.NotFoundFailure", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
```

Using `python run_workflow.py -w`, the workflow waits until the activity's long-running `sleep` finishes, despite the activity being cancelled (note timestamps), and the activity completes rather than being cancelled:
```
2024-12-09 19:45:15.119427+00:00 (Workflow) Starting, use_sleep=False use_wait=True
2024-12-09 11:45:15.127826 (Activity) Running sandbox_activity
2024-12-09 19:45:16.130733+00:00 (Workflow) Cancelling activity
2024-12-09 11:45:24.371849 (Activity) Completing sandbox_activity
2024-12-09 19:45:24.384356+00:00 (Workflow) Exiting
```

Using `python run_workflow.py -w -s`, the workflow waits for the long-running coro in the activity to finish, which is bad, and the activity does cancel rather than completing, but `-s` sucks:
```
2024-12-09 19:47:00.283375+00:00 (Workflow) Starting, use_sleep=True use_wait=True
2024-12-09 11:47:00.291593 (Activity) Running sandbox_activity
2024-12-09 19:47:01.301447+00:00 (Workflow) Cancelling activity
2024-12-09 11:47:06.547612 (Activity) Cancelling sandbox_activity
2024-12-09 19:47:06.551643+00:00 (Workflow) Activity cancelled
2024-12-09 19:47:06.551643+00:00 (Workflow) Exiting
```

Using `python run_workflow.py -s` results in the workflow exiting cleanly and promptly (since we aren't using `WAIT_CANCELLATION_COMPLETED`), and the activity cancels rather than completing, but still waits on the long-running coro:
```
2024-12-09 19:48:40.102363+00:00 (Workflow) Starting, use_sleep=True use_wait=False
2024-12-09 11:48:40.110083 (Activity) Running sandbox_activity
2024-12-09 19:48:41.121725+00:00 (Workflow) Cancelling activity
2024-12-09 19:48:41.121725+00:00 (Workflow) Activity cancelled
2024-12-09 19:48:41.121725+00:00 (Workflow) Exiting
2024-12-09 11:48:47.629316 (Activity) Cancelling sandbox_activity
```

## Environment/Versions

OS and processor: macOS, M1
Temporal version: 1.1.2
Python SDK version: 1.8.0
Are you using Docker or Kubernetes or building Temporal from source? No


#### Comments (10)

<details>
<summary><strong>andmis</strong> commented on 2024-12-09 20:04:34.000 UTC</summary>

Sorry if this report is a bit garbled -- I'd say the real issue is "there does not seem to be a clean, blessed way of doing this".

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-12-09 20:41:04.000 UTC</summary>

> If you call handle.cancel() on an activity handle from the workflow, the CancelledError will only be raised in the activity after an activity.heartbeat() call, followed by an await something() call. Otherwise the activity itself doesn't seem to receive CancelledError.

This is how Python asyncio cancellation works. It only can issue a cancel at the await point. The snippet you show completes the activity immediately after calling the non-blocking heartbeat, so I would not expect it to fail because it has completed.

> From the workflow code, if you want to cleanly wait for the activity cancellation, you have to catch ActivityError, which is a broader exception type than I actually want to catch (presumably there are other ActivityErrors which I don't want to catch).

Use the `__cause__` (aliased as `cause`) to differentiate

> the activity won't receive a CancelledError until it sends a heartbeat, which it can't do until the coro it's waiting on finishes, so your workflow won't finish until the activity's long-running coro finishes.

This is the nature of heartbeating. The server only relays cancellation on heartbeating to the worker, so if you're not heartbeating you're not receiving cancellation. You can run heartbeating in a background task or you can do something like sleep for a short period and heartbeat every so often. Also, heartbeats are throttled to within 0.8 times the heartbeat timeout anyways but you are not setting the heartbeat timeout so it uses a really high default.

See:

* https://docs.temporal.io/develop/python/failure-detection#activity-heartbeats
* https://docs.temporal.io/encyclopedia/detecting-activity-failures#activity-heartbeat
* https://github.com/temporalio/sdk-python?tab=readme-ov-file#heartbeating-and-cancellation

Etc to better understand how heartbeating and activity cancellation work together.

</details>

<details>
<summary><strong>andmis</strong> commented on 2024-12-09 20:44:24.000 UTC</summary>

**edit:** ignore this post, i misunderstood something above.

---

> This is how Python asyncio cancellation works. It only can issue a cancel at the await point. The snippet you show completes the activity immediately after calling the non-blocking heartbeat, so I would not expect it to fail because it has completed.

It's possible for `task.cancel()` to interrupt a coro such as `sleep`:

<img width="406" alt="image" src="https://github.com/user-attachments/assets/b6d1891e-76cc-4065-bbd1-703811c8e031">


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-12-09 20:54:15.000 UTC</summary>

> It's possible for task.cancel() to interrupt a coro such as sleep:

Right, if `use_sleep` is set, that makes sense, it was just a bit strange to see an activity that could heartbeat and then complete immediately. But regardless, to the later point, in this case you are choosing to sleep without heartbeating which means the worker never even gets notified while sleeping that the activity is cancelling. You should heartbeat while sleeping if you want to cancel while sleeping.

Reactions: 👍 1

</details>

<details>
<summary><strong>andmis</strong> commented on 2024-12-09 21:01:29.000 UTC</summary>

IIUC the point of the activity issuing a heartbeat is to let the server know it's still healthy. it sounds like your advice is that i could create a separate `asyncio.Task` and heartbeat from that task, and then i would get `CancelledError` interrupting my long-running coro.

so IIUC, `activity.heartbeat()` basically means `send_heartbeat_to_server_and_check_for_cancellation()`. is that right?

</details>

<details>
<summary><strong>andmis</strong> commented on 2024-12-09 21:06:19.000 UTC</summary>

i'd suggest noting in the docs the exact semantics here.

these docs make it sound like you can just `handle.cancel()` and that will work: https://python.temporal.io/temporalio.workflow.ActivityHandle.html

it sounds like the semantics are something like this, i'd appreciate clarification as well:
- call `handle.cancel()`
- from your activity code, call `activity.heartbeat()`
- after `handle.cancel()` followed by `acvitity.heartbeat()`, we will call `task.cancel()` on the root `asyncio.Task` running your activity

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-12-09 21:50:58.000 UTC</summary>

> these docs make it sound like you can just handle.cancel() and that will work

In Python asyncio, calling cancel on a task doesn't immediately cancel always (or at all), it's up to the implementation for how to handle. Some tasks may swallow cancel, some shield, some may do cleanup first, or in our case we communicate it with a server. But it does work in that the request is sent to the server and put on history (assuming activity is not complete), it's just not necessarily processed immediately. We will see about clarifying in the docs that Python asyncio Task cancellation (and explicit Temporal workflow activity cancellation in all Temporal languages) is actually a cancellation request.

> after handle.cancel() followed by acvitity.heartbeat(), we will call task.cancel() on the root asyncio.Task running your activity

Yes, though there are of course caveats concerning heartbeat throttling so it's not always immediately on heartbeating.

Reactions: 👍 1

</details>

<details>
<summary><strong>spacether</strong> commented on 2025-03-31 23:35:42.000 UTC</summary>

It looks like [activity file handles extend asyncio.Task](https://python.temporal.io/temporalio.workflow.ActivityHandle.html).
So can one use workflow.wait_condition until activity_handle.canceled() is True?
hmm that did not work for us, but checking for activity_handle.done worked

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-01 13:13:25.000 UTC</summary>

>  So can one use workflow.wait_condition until activity_handle.canceled() is True?

The proper way is to wait on the activity task/handle itself, catching the `ActivityError` and checking that the `cause` is `CancelledError`, though yes `done()` may work. As for cancelled helpers on activity and child workflow tasks, I opened #810 on that.

Reactions: 👍 1

</details>

<details>
<summary><strong>teije01</strong> commented on 2025-05-14 09:27:40.000 UTC</summary>

The way we went about this is the following:

```python
try:
    await workflow.execute_xxx(...)
except exceptions.ActivityError as e:
    if e.retry_state == exceptions.RetryState.CANCEL_REQUESTED:
        handle_explicit_cancellation_teardown()
```

or for a full activity example (heartbeat util from: https://github.com/temporalio/samples-python/blob/main/custom_decorator/activity_utils.py)
```python
import asyncio
import datetime as dt

from temporalio import activity, exceptions, workflow

class HelloGoodbyeActivities:
    def __init__(self):
        pass

    @activity.defn
    @heartbeat_utils.periodic_heartbeater
    async def say_hello(self):
        """Demo activity for saying hello."""
        activity.logger.info("activity=say_hello fired")
        for _ in range(5):
            activity.logger.info("Hello!")
            await asyncio.sleep(10)

    @activity.defn
    async def say_goodbye(self):
        """Demo activity for saying goodbye."""
        activity.logger.info("Goodbye!")

    @classmethod
    async def hello_goodbye(cls):
        try:
            await workflow.execute_activity_method(
                cls.say_hello,
                start_to_close_timeout=dt.timedelta(minutes=1),
                heartbeat_timeout=dt.timedelta(seconds=10),
            )
            await workflow.execute_activity_method(
                cls.say_goodbye, start_to_close_timeout=dt.timedelta(seconds=10)
            )
        except exceptions.ActivityError as e:
            if e.retry_state == exceptions.RetryState.CANCEL_REQUESTED:
                workflow.logger.exception(
                    f"Workflow canceled: {type(e.cause)}({e}), {e.retry_state=}"
                )
                await workflow.execute_activity_method(
                    cls.say_goodbye, start_to_close_timeout=dt.timedelta(seconds=10)
                )
            else:
                workflow.logger.exception(
                    f"Workflow failed: {e.cause} {type(e.cause)}({e}), {e.retry_state=}"
                )
            raise
        except Exception as e:
            workflow.logger.exception(f"Unknown exception: {e}, {e.__dict__}")



@workflow.defn
class SayHello:
    @workflow.run
    async def run(self) -> None:
        return await HelloGoodbyeActivities.hello_goodbye()
```

This example would always get to the say_goodbye activity, no matter when it was cancelled (even after a worker restart).

</details>


---

<a id="300"></a>

### #300: [Bug] Investigate PyGILState_Release issue for client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/300 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-03-22 14:13:35.000 UTC (2y 9m ago) |
| **Updated** | 2024-11-20 23:03:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 10 |
| **Priority Score** | 10 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

On short-lived client-only process after `execute_workflow` client call completes, one user reported getting:

```
Fatal Python error: PyGILState_Release: thread state 0x***************** must be current when releasing
Python runtime state: finalizing (tstate=0x*****************)
Thread 0x****************** (most recent call first):
  <no Python frame>
```

Maybe this is caused by process death while waiting on client call complete? Try to replicate.

There is some discussion at https://github.com/PyO3/pyo3/issues/1274 that predates pyo3-asyncio. Maybe I am not implementing our custom Tokio pyo3 asyncio extension properly?

It looks like we shouldn't be calling `Python::with_gil` in callbacks (i.e. not in Python-owned thread) for any reason, so we need to work around that. But https://pyo3.rs/main/ecosystem/async-await.html#awaiting-a-rust-future-in-python shows it used in a callback.

First thing is a replication, then we can see whether an pyo3-asyncio upgrade can help.

#### Comments (10)

<details>
<summary><strong>TiunovNN</strong> commented on 2024-09-25 09:47:15.000 UTC</summary>

Hi @cretz . I've came across the similar problem. Here is a simple code to reproduce bug:

```python
import asyncio
import logging

from temporalio.client import Client
from temporalio.exceptions import WorkflowAlreadyStartedError
from temporalio.runtime import (LoggingConfig, Runtime, TelemetryConfig, TelemetryFilter)


async def connect_client(host):
    temporal_client: Client = await Client.connect(
        host,
        namespace='default',
        runtime=Runtime(
            telemetry=TelemetryConfig(
                logging=LoggingConfig(
                    filter=TelemetryFilter(
                        core_level='DEBUG',
                        other_level='DEBUG',
                    ),
                ),
            ),
        ),
    )

    try:
        await temporal_client.start_workflow('PackagerWorkflow', 'test', id='Pack',
                                             task_queue='default_queue')
    except WorkflowAlreadyStartedError:
        pass


def run(self):
    logging.basicConfig(level=logging.DEBUG, force=True)
    logging.info('start app')
    asyncio.run(connect_client('localhost:7233'))
    logging.info('finish app')

if __name__ == "__main__":
    run()
```

log from gdb:
```
2024-09-25T09:32:59.616938Z DEBUG hyper_util::client::legacy::connect::dns: resolving host="localhost"                                                                                                            
2024-09-25T09:32:59.657156Z DEBUG hyper_util::client::legacy::connect::http: connecting to [::1]:7233                                                                                                             
2024-09-25T09:32:59.657644Z DEBUG hyper_util::client::legacy::connect::http: connecting to 127.0.0.1:7233                                                                                                         
2024-09-25T09:32:59.657936Z DEBUG hyper_util::client::legacy::connect::http: connected to 127.0.0.1:7233                                                                                                          
2024-09-25T09:32:59.657996Z DEBUG h2::client: binding client connection                                                                                                                                           
2024-09-25T09:32:59.658088Z DEBUG h2::client: client connection bound                                                                                                                                             
2024-09-25T09:32:59.658129Z DEBUG h2::codec::framed_write: send frame=Settings { flags: (0x0), enable_push: 0, initial_window_size: 2097152, max_frame_size: 16384, max_header_list_size: 16384 }
2024-09-25T09:32:59.658413Z DEBUG Connection: h2::codec::framed_write: send frame=WindowUpdate { stream_id: StreamId(0), size_increment: 5177345 } peer=Client
2024-09-25T09:32:59.658430Z DEBUG tower::buffer::worker: service.ready=true processing request                                                                                                                    
2024-09-25T09:32:59.658655Z DEBUG Connection: h2::codec::framed_read: received frame=Settings { flags: (0x0), max_frame_size: 16384 } peer=Client      
2024-09-25T09:32:59.658704Z DEBUG Connection: h2::codec::framed_write: send frame=Settings { flags: (0x1: ACK) } peer=Client      
2024-09-25T09:32:59.658715Z DEBUG Connection: h2::codec::framed_write: send frame=Headers { stream_id: StreamId(1), flags: (0x4: END_HEADERS) } peer=Client                                                       
2024-09-25T09:32:59.658763Z DEBUG Connection: h2::codec::framed_write: send frame=Data { stream_id: StreamId(1) } peer=Client                                                                                     
2024-09-25T09:32:59.658773Z DEBUG Connection: h2::codec::framed_write: send frame=Data { stream_id: StreamId(1), flags: (0x1: END_STREAM) } peer=Client    
2024-09-25T09:32:59.658843Z DEBUG Connection: h2::codec::framed_read: received frame=Settings { flags: (0x1: ACK) } peer=Client                                                                                   
2024-09-25T09:32:59.658872Z DEBUG Connection: h2::proto::settings: received settings ACK; applying Settings { flags: (0x0), enable_push: 0, initial_window_size: 2097152, max_frame_size: 16384, max_header_list_s
ize: 16384 } peer=Client                                                                                                                                                                                          
2024-09-25T09:32:59.659016Z DEBUG Connection: h2::codec::framed_read: received frame=WindowUpdate { stream_id: StreamId(0), size_increment: 5 } peer=Client
2024-09-25T09:32:59.659059Z DEBUG Connection: h2::codec::framed_read: received frame=Ping { ack: false, payload: [2, 4, 16, 16, 9, 14, 7, 7] } peer=Client                 
2024-09-25T09:32:59.659073Z DEBUG Connection: h2::codec::framed_write: send frame=Ping { ack: true, payload: [2, 4, 16, 16, 9, 14, 7, 7] } peer=Client                                                            
2024-09-25T09:32:59.659470Z DEBUG Connection: h2::codec::framed_read: received frame=Headers { stream_id: StreamId(1), flags: (0x4: END_HEADERS) } peer=Client
2024-09-25T09:32:59.659492Z DEBUG Connection: h2::codec::framed_read: received frame=Data { stream_id: StreamId(1) } peer=Client  
2024-09-25T09:32:59.659506Z DEBUG Connection: h2::codec::framed_read: received frame=Headers { stream_id: StreamId(1), flags: (0x5: END_HEADERS | END_STREAM) } peer=Client
2024-09-25T09:32:59.660903Z DEBUG tower::buffer::worker: service.ready=true processing request                                                                                                                    
2024-09-25T09:32:59.661020Z DEBUG Connection: h2::codec::framed_write: send frame=Headers { stream_id: StreamId(3), flags: (0x4: END_HEADERS) } peer=Client                                                       
2024-09-25T09:32:59.661100Z DEBUG Connection: h2::codec::framed_write: send frame=Data { stream_id: StreamId(3) } peer=Client                                                                                     
2024-09-25T09:32:59.661111Z DEBUG Connection: h2::codec::framed_write: send frame=Data { stream_id: StreamId(3), flags: (0x1: END_STREAM) } peer=Client                                                           
2024-09-25T09:32:59.661419Z DEBUG Connection: h2::codec::framed_read: received frame=WindowUpdate { stream_id: StreamId(0), size_increment: 170 } peer=Client                                                     
2024-09-25T09:32:59.661438Z DEBUG Connection: h2::codec::framed_read: received frame=Ping { ack: false, payload: [2, 4, 16, 16, 9, 14, 7, 7] } peer=Client                                                        
2024-09-25T09:32:59.661444Z DEBUG Connection: h2::codec::framed_write: send frame=Ping { ack: true, payload: [2, 4, 16, 16, 9, 14, 7, 7] } peer=Client                                                            
2024-09-25T09:32:59.664355Z DEBUG Connection: h2::codec::framed_read: received frame=Headers { stream_id: StreamId(3), flags: (0x5: END_HEADERS | END_STREAM) } peer=Client                                       
INFO:root:finish app                                                                                                                                                                                              
Fatal Python error: This thread state must be current when releasing                                                                                                                                              
Python runtime state: finalizing (tstate=0x95d720)                                                                                                                                                                
                                                                                                                                                                                                                  
Current thread 0x00007ffedaff7700 (most recent call first):                                                                                                                                                       
  File "/usr/lib/python3.8/asyncio/selector_events.py", line 140 in _write_to_self                                                                                                                                
  File "/usr/lib/python3.8/asyncio/base_events.py", line 770 in call_soon_threadsafe                                                                                                                              
                                                                                                                                                                                                                  
Thread 0x00007ffff7bfd740 (most recent call first):                                                                                                                                                               
<no Python frame>                                                                                                                                                                                                 
                                                                                                                                                                                                                  
Thread 79 "tokio-runtime-w" received signal SIGABRT, Aborted.                                            
```

Full stack trace of failed thread: https://gist.github.com/TiunovNN/84c253d62f03f11270a49facee6c7b52

I suppose that root cause is the python does not call destructor immediately, and as written in docs `A Client does not have an explicit "close"`. When cpython is finalizing code, it acquires GIL and executes destructor of tokio::runtime::Runtime which is expecting while all tasks have finished. At the same time tokio::runtime got ping message and run python code to handle message, which is trying to acquire GIL as well.

It would be better if there was an explicit way to close client.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-25 12:57:25.000 UTC</summary>

> Here is a simple code to reproduce bug:

I am struggling to replicate. There is a slight bug where `run` accepts `self`, but fixing that, I didn't see it. Can you confirm your OS, `temporalio` SDK version, and Python version?

> It would be better if there was an explicit way to close client.

I don't think this would solve it if the issue is Tokio runtime cleanup. A better solution may be like what https://github.com/hydro-project/hydroflow/pull/699 did (linked from https://github.com/hydro-project/hydroflow/issues/619 who linked here as having a common issue). Specifically using something like `atexit.register` to register runtime drop.

But ideally we could get a reliable replication first so we can confirm it is fixed once we make the change. I am struggling to get this currently.

</details>

<details>
<summary><strong>TiunovNN</strong> commented on 2024-09-25 14:00:30.000 UTC</summary>

> I am struggling to replicate.

My mistake. I have forgot to mention that this bug appears not every run, but rarely. So you have to rerun script several times.
I used gdb in the following manner:
```shell
$ gdb python
(gdb) set pagination off
(gdb) break _exit
(gdb) command
> run
> end
(gdb) run script.py
```
And wait for several minutes.

> Can you confirm your OS, temporalio SDK version, and Python version?

The bug appears on the following sets:
* Ubuntu 20.04.6 LTS + python 3.12 + temporal 1.5.0
* Ubuntu 22.04.5 LTS + python 3.12 + temporal 1.5.0
* Ubuntu 20.04.6 LTS + python 3.12 + temporal 1.7.1
* Ubuntu 22.04.5 LTS + python 3.12 + temporal 1.7.1
* Ubuntu 20.04.6 LTS + python 3.8 + temporal 1.7.1




</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-25 14:31:49.000 UTC</summary>

Thanks! We will increase the priority on this.

</details>

<details>
<summary><strong>TiunovNN</strong> commented on 2024-10-02 08:52:46.000 UTC</summary>

@cretz 
> Specifically using something like atexit.register to register runtime drop

Please, take into account, that client destructor might be called even during execution process (not only at exit), when there is no references to the object. I would recommend to use context manager as appropriate solution for python.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-02 13:07:23.000 UTC</summary>

> that client destructor might be called even during execution process (not only at exit), when there is no references to the object.

This is not just about client destructor, this is about when it is dropped Rust side. If the client is in use in any way (Python or Rust), it is not closed/disconnected. We can't just use context manager because it is passed around (e.g. to a worker) and may only retain Rust references. I think this error is specific to the Python-Rust bridge and PyO3.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-15 16:58:33.000 UTC</summary>

Update here, I am still struggling to replicate. I suspect this is actually a Tokio runtime lifetime issue and not specific to the client, but we are still trying to replicate reliably (running the script under gdb for me, at least on 3.10, just continually works forever).

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-15 20:14:26.000 UTC</summary>

I can replicate a similar issue changing the code to just run a task in the background and then completing the app before waiting on complete, e.g.:

```python
import asyncio
import logging
import uuid

from temporalio.api.workflowservice.v1 import StartWorkflowExecutionRequest
from temporalio.client import Client
from temporalio.exceptions import WorkflowAlreadyStartedError
from temporalio.runtime import LoggingConfig, Runtime, TelemetryConfig, TelemetryFilter


async def connect_client(host):
    client = await Client.connect(
        host,
        namespace="default",
        runtime=Runtime(
            telemetry=TelemetryConfig(
                logging=LoggingConfig(
                    filter=TelemetryFilter(
                        core_level="DEBUG",
                        other_level="DEBUG",
                    ),
                ),
            ),
        ),
    )

    req = StartWorkflowExecutionRequest(
        namespace="default",
        workflow_id=f"my-workflow-id-{uuid.uuid4()}",
        identity="my-identity",
        request_id=str(uuid.uuid4()),
    )
    req.workflow_type.name = "my-workflow"
    req.task_queue.name = "my-task-queue"

    asyncio.create_task(client.workflow_service.start_workflow_execution(req))


def run():
    logging.basicConfig(level=logging.DEBUG, force=True)
    logging.info("start app")
    asyncio.run(connect_client("localhost:7233"))
    logging.info("finish app")


if __name__ == "__main__":
    run()
```

This will give:

```
FATAL: exception not rethrown
Aborted
```

My current guess is this is because pyo3-asyncio assumes `Python::with_gil` will succeed, but that delegates to `PyGILState_Ensure` which documents at https://docs.python.org/3/c-api/init.html#c.PyGILState_Ensure:

> Calling this function from a thread when the runtime is finalizing will terminate the thread, even if the thread was not created by Python. You can use [Py_IsFinalizing()](https://docs.python.org/3/c-api/init.html#c.Py_IsFinalizing) or [sys.is_finalizing()](https://docs.python.org/3/library/sys.html#sys.is_finalizing) to check if the interpreter is in process of being finalized before calling this function to avoid unwanted termination.

Unfortunately `Py_IsFinalizing` is 3.13+ and ideally we don't want the overhead of invoking `sys.is_finalizing`, but we may have to (and it's not that bad considering pyo3-asyncio already uses things like `call_soon_threadsafe`).

Unfortunately https://github.com/awestlake87/pyo3-asyncio is mostly abandoned, https://github.com/PyO3/pyo3-async-runtimes is just a simple fork, and built-in PyO3 asyncio with Rust futures is still being worked on. So we probably would just end up vendoring what we haven't already from pyo3-asyncio (we already copy and slightly alter some code to use the current Tokio runtime instead of one big static global).

</details>

<details>
<summary><strong>i3Cheese</strong> commented on 2024-11-20 18:24:54.000 UTC</summary>

@cretz
Hello! I encountered the same issue, and I would like to help fix it. Where do I start?


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-11-20 23:03:32.000 UTC</summary>

Assuming our guess at the issue is correct, fixing this is daunting because it probably requires rewriting/vendoring a Rust library (pyo3-asyncio). Can you confirm this only happens on process/event-loop shutdown? The best way to avoid this is to not attempt to gracefully exit the program while the client is in use somewhere.

</details>


---

<a id="639"></a>

### #639: [Bug] Operation was canceled when start_workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/639 |
| **State** | OPEN |
| **Author** | duy-nguyen-ts (duy-nguyen-ts) |
| **Created** | 2024-09-10 03:47:36.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-13 02:49:54.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 7 |
| **Priority Score** | 9 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?
- Hi team, I am having an issue when trying to `start_workflow` and `signal_workflow`
<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

- It happens when I called method `start_workflow`. Maybe it cant connect to create workflow on temporal and return `temporal_sdk_bridge.RPCError: (1, 'operation was canceled', b'')`
- I started 10 workflows but received 6 success and 4 error cancelled
- I want to know why it happens, does it due to network or anything else ? How can I fix that ? E.x: Add retry policy when start_workflow,...

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Mac M2
- Temporal Version: ^1.6.0
- Are you using Docker or Kubernetes or building Temporal from source: Using Docker

### Additional context

<!-- Add any other context about the problem here. -->

#### Comments (7)

<details>
<summary><strong>duy-nguyen-ts</strong> commented on 2024-09-10 03:57:25.000 UTC</summary>

I had check my logs again, this error also happens when I call signal to workflow.

</details>

<details>
<summary><strong>duy-nguyen-ts</strong> commented on 2024-09-10 04:27:33.000 UTC</summary>

After tracing this issue, I saw it happened at this line, maybe error when it made a rpc call to temporal
![Screenshot 2024-09-10 at 11 25 47](https://github.com/user-attachments/assets/459b144e-ff48-4409-9335-eeb792a656af)


</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-10 12:11:19.000 UTC</summary>

Can you replicate this reliably? If so, can you alter a sample to show how to replicate? And is it against Temporal cloud or self-hosted server? We are releasing a fix in the next couple of days for a similar error at https://github.com/temporalio/sdk-core/issues/807, but we believe that only affected 1.7.0.

Reactions: 👍 1

</details>

<details>
<summary><strong>duy-nguyen-ts</strong> commented on 2024-09-11 02:43:03.000 UTC</summary>

Hi @cretz , thanks for your reply,  I am using Temporal as self-hosted server and I can't always replicate it, sometime it happened and not. I investigated and assumed that it caused at point in above image. Currently, I added retry when call start_workflow and this error still happen but less than before. About my code, it just sample like this: 
- Create a client with connect
`temporal_client = await Client.connect(target_host=...,namespace=...)`
- Call start_workflow (maybe many calls at the same time)
`handler = await temporal_client.start_workflow(workflow, args=[arg], id="workflow_id", task_queue="task_queue")`

</details>

<details>
<summary><strong>duy-nguyen-ts</strong> commented on 2024-09-11 02:45:11.000 UTC</summary>

I am using version 1.6.0 so maybe it not similar to https://github.com/temporalio/sdk-core/issues/807

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-09-11 13:10:05.000 UTC</summary>

> I am using Temporal as self-hosted server and I can't always replicate it, sometime it happened and not

Even if it takes a minute to replicate, any replication would help us debug.

I am afraid there's not much to go on here. We have many samples/users starting hundreds/thousands of workflows without any issues on self-hosted servers. Can you make sure you're not doing something like accidentally blocking the thread in an `async def` call thereby causing asyncio to stop working properly?

Reactions: 👍 1

</details>

<details>
<summary><strong>duy-nguyen-ts</strong> commented on 2024-09-13 02:49:53.000 UTC</summary>

Okk @cretz , thank you for your response. I will continue monitor it 😄 

</details>


---

<a id="758"></a>

### #758: [Feature Request] Suggest Providing activities extraction utilities to get them from a class and a module

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/758 |
| **State** | OPEN |
| **Author** | spacether (Justin Black) |
| **Created** | 2025-01-31 19:52:04.000 UTC (11 months ago) |
| **Updated** | 2025-06-05 02:42:36.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 6 |
| **Priority Score** | 8 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

Creating activities and decorating them is easy using activy.def in python
Making sure that they are all included in worker launch is more difficult.

### Describe the solution you'd like

It would be helpful if a utility was provided that allowed
- extracting activities from a class
- extracting activities from a class instance
- extracting activities from a module

Below is a sample implementation for extraction from class and class instances, assuming async method implementations that uses ast and inspection.

It looks like one could find which methods are decorate by checking if `fn.__temporal_activity_definition` but that is a private variable name and is not exposed in the temporalio activity.py module. Code that uses __temporal_activity_definition would be simpler and not invoking `ast.parse(inspect.getsource(cls))` is preferrable.
```
import ast
import inspect
import typing


class _MyNodeVisitor(ast.NodeVisitor):
    def __init__(self):
        self.fn_name_to_decorators: dict[str, set[str]] = {}

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef):
        self.fn_name_to_decorators[node.name] = set()
        for decorator in node.decorator_list:
            print(decorator)
            if isinstance(decorator, ast.Call):
                # noinspection PyUnresolvedReferences
                name = (
                    decorator.func.attr
                    if isinstance(decorator.func, ast.Attribute)
                    else decorator.func.id
                )
            else:
                # noinspection PyUnresolvedReferences
                name = (
                    decorator.value.id + "." + decorator.attr
                    if isinstance(decorator, ast.Attribute)
                    else decorator.id
                )

            self.fn_name_to_decorators[node.name].add(name)

    def get_fn_name_to_decorators(self) -> dict[str, set[str]]:
        return self.fn_name_to_decorators


class ActivitiesListProvider:
    @classmethod
    def __get_activities(
        cls,
        instance: typing.Union[
            type["ActivitiesListProvider"], "ActivitiesListProvider"
        ],
    ) -> list[typing.Callable]:
        visitor = _MyNodeVisitor()
        visitor.visit(ast.parse(inspect.getsource(cls)))
        fn_name_to_decorators: dict[str, set[str]] = visitor.get_fn_name_to_decorators()

        activities = []
        for fn_name, decorators in fn_name_to_decorators.items():
            if "activity.defn" in decorators:
                method = getattr(instance, fn_name)
                activities.append(method)
        return activities

    def get_activities_from_instance(self) -> list[typing.Callable]:
        return self.__get_activities(self)

    @classmethod
    def get_activities_from_cls(cls) -> list[typing.Callable]:
        return cls.__get_activities(cls)
```
And some Tests:
```
from workflow_metrics.temporal_tools import activities_class

from temporalio import activity


class SomeActivities(activities_class.ActivitiesListProvider):
    @activity.defn
    async def instance_method_activity(self):
        pass

    @activity.defn
    async def class_method_activity(self):
        pass

    @staticmethod
    @activity.defn
    async def static_method_activity():
        pass


def test_get_activities_from_cls():
    assert SomeActivities.get_activities_from_cls() == [
        SomeActivities.instance_method_activity,
        SomeActivities.class_method_activity,
        SomeActivities.static_method_activity,
    ]


class ActivitiesClassThatNeedsInstance(activities_class.ActivitiesListProvider):
    @activity.defn
    async def instance_method_activity(self):
        pass

    @activity.defn
    async def class_method_activity(self):
        pass

    @staticmethod
    @activity.defn
    async def static_method_activity():
        pass


def test_get_activities_from_instance():
    inst = ActivitiesClassThatNeedsInstance()
    assert inst.get_activities_from_instance() == [
        inst.instance_method_activity,
        inst.class_method_activity,
        inst.static_method_activity,
    ]
```

### Additional context

In code that I am working on activities are mainly defined in one module when they are fns and in class methods.


#### Comments (6)

<details>
<summary><strong>cretz</strong> commented on 2025-02-03 16:58:12.000 UTC</summary>

Sorry, just noticed this feature issue. Having discussion if viability on PR at https://github.com/temporalio/sdk-python/pull/759#discussion_r1939572982. Also circulating with team.

</details>

<details>
<summary><strong>dandavison</strong> commented on 2025-02-03 17:32:22.000 UTC</summary>

Hi @spacether, thanks for the input here. Before getting into implementation, can you expand on the problem that you want to see solved and what you see as the requirements for possible solutions? I.e. expand on this

> Making sure that they are all included in worker launch is more difficult.

E.g. what is it that you don't like currently, and, without speculating about specific implementations, what sorts of behaviors / semantics regarding activities would you like users to be able to express when starting a worker? It might help if you sketch some Worker launch code featuring imaginary APIs / function calls that would give you the semantics that you want.

</details>

<details>
<summary><strong>spacether</strong> commented on 2025-02-03 18:09:04.000 UTC</summary>

So right now it is entirely up to a develop to manually build an explicit list of activities in python. Our activities are already segregated by the kind fo work that they do into a python modules and activity classes. So then when we need to use them in a worker, one has to to list every activity decorated funcction in that module and in one or two classes when we already know that the activities I need come from these 3 sources: 1 module, and two classes. Adding these utilities lets me vend activities from those sources easily.

I would like:
```
worker = Worker(
  activities=[*ActivitiesClass.get_acitivities(), *get_activities(activities_module)]
)
```
or
```
worker = Worker(
  activities_classes=(ActivitiesClass,)
  activities_modules=(activities_module),
)
```
or
```
worker = Worker(
  activities=[ActivitiesClass, activities_module, etc...]
)
```
One could make activities accept a list of (callables or a module or a class that has activities methods in it), where all of the activities from the class or module would be loaded into the worker.

</details>

<details>
<summary><strong>noxasaxon</strong> commented on 2025-02-04 09:43:31.000 UTC</summary>

I recently came to the same conclusion as @spacether and made a similar function for collecting activities as part of a utility library for enforcing best practices at test time to avoid runtime failures. 

My developers use a collection function in a worker.py file so that they don't forget to add an activity method to the worker every time they write a new one.

I also have a function that is intended to run in a test, you just import your project's temporal directory module and it gets every @activity.defn method in the module and submodules and so that we can validate everything automatically:

Repo is very much a work in progress still, not much documentation for the function-based validation as opposed to inheriting from a special validator class but the collection methods are here:

https://github.com/noxasaxon/temporal_utils_python/blob/main/src/temporal_utils/collectors.py

</details>

<details>
<summary><strong>charlesmelby</strong> commented on 2025-06-05 02:11:34.000 UTC</summary>

I've resorted more than once to wrapping temporal's activity and workflow decorators in my own to make activity and workflow collection easy.

Typically speaking, I have two needs:
1. be able to import activities easily from a file or folder
2. be able to put some filters in place -- e.g. allow certain test-oriented activities to be co-located with standard activities to avoid a fragmented codebase.

Manual import is messy because
1. it is error-prone, especially in the case of things like feature flags
2. it makes for poor separation of concerns, since the worker needs to be *explicitly* aware of every piece of functionality it serves.

Personally I'd be just as happy with a method that provides for easy collection, e.g.
```py
from temporalio import worker
import my_activities
from other_activities import ActivityClass

w = worker.Worker(
  ...,
  activities=worker.collect_activities(
    "path/to/activity/folder",
    my_activities,
    ActivityClass
  ), ...
)
```
together with some simple filters.
One that would be useful is a skip directive in the activity decorator, which causes collection to be skipped (but doesn't prevent it from being registered explicitly with a worker):
```py
@activity.defn(skip=True)
async def my_activity():
    ...
```
This would facilitate e.g. test cases, dev/prod feature flags, and the like.

More flexible and comprehensive would be the ability to configure tags (this could easily be used in lieu of `skip`):
```py
@activity.defn(tags=["dev", "e2e"])
async def prototyped_task():
    ...
```
together with filtering directives in the collect_activities function:
```py
activities = worker.collect_activities(module, tags=["prod"])
activities = worker.collect_activities(module, exclude_tags=["test"])
```
Finally, some kind of name pattern filter might be nice (though once again this could generally be handled by tags):
```py
activities = worker.collect_activities(module, regex=r".*_v[45]|database_.*")
```

My activities are usually bare functions so I don't have a real opinion on the best approach for activities that are owned by a class or class instance.

</details>

<details>
<summary><strong>charlesmelby</strong> commented on 2025-06-05 02:41:48.000 UTC</summary>

As a side note, one important issue to address is being able to deal effectively with mocks for tests.
With my current wrappers I actually just collect the activities at definition time (optionally grouped by worker name), but also provide facilities to override them inside tests: 
```py
@flows.activity
async def real_activity():
  ...

@flows.activity(worker="other_worker")
async def other_activity():
  ...

async def real_activity_mock():
  ...

async def other_activity_mock():
  ...

@flows.testing.case
@flows.testing.provide(activities={"real_activity": other_activity_mock})
@pytest.mark.asyncio
async def test_with_mock_other_activity(flow_runner):
  await flow_runner.execute_workflow(my_workflow, ...)

# actually mainly used to mock activities handled by remote workers,
# but can be used with other workers in the same process
@flows.testing.case
@flows.testing.provide("other_worker", activities={"other_activity": other_activity_mock})
@pytest.mark.asyncio
async def test_with_mock_other_activity(flow_runner):
  await flow_runner.execute_workflow(multi_worker_workflow, ...)
```

With collection by a function as above configuring concise declarative tests might be more challenging.
Including an override directive could be helpful for this, e.g.
```py
worker.collect_activities(module, overrides={"my_activity": my_activity_mock})
```

</details>


---

<a id="1104"></a>

### #1104: Setting debug_mode in a Worker still doesn't allow the user of breakpoints

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1104 |
| **State** | OPEN |
| **Author** | togakangaroo (George Mauer) |
| **Created** | 2025-09-13 14:20:02.000 UTC (3 months ago) |
| **Updated** | 2025-09-22 14:46:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I am trying to use the pdb debugger from inside unit tests literally with the `breakpoint()` function.

### Describe the bug

It is pretty straightforward really, change the workflow to use sandboxing and set a `breakpoint()`. When you do you get an endless scroll with
```
temporalio.worker.workflow_sandbox._restrictions.RestrictedWorkflowAccessError: Cannot access __builtins__.breakpoint from inside a workflow. If this is code from a module not used in a workflow or known to only be used deterministically from a workflow, mark the import as pass through.
08:48:32 [ WARNING] Failed activation on workflow GreetingWorkflow with ID 68cd5a5e-2ada-40ff-aa67-63eae9ab3055 and run ID 01994355-86ca-7dd3-9335-69a9e5be86ff (_workflow_instance.py:452)
Traceback (most recent call last):
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/_workflow_instance.py", line 412, in activate
    self._run_once(check_conditions=index == 1 or index == 2)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/_workflow_instance.py", line 2130, in _run_once
    raise self._current_activation_error
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/_workflow_instance.py", line 2148, in _run_top_level_workflow_function
    await coro
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/_workflow_instance.py", line 974, in run_workflow
    result = await self._inbound.execute_workflow(input)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/testing/_workflow.py", line 518, in execute_workflow
    return await super().execute_workflow(input)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/_interceptor.py", line 385, in execute_workflow
    return await self.next.execute_workflow(input)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/_workflow_instance.py", line 2529, in execute_workflow
    return await input.run_fn(*args)
           ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/georgemauer/code/temporal-samples/hello/hello_activity.py", line 32, in run
    breakpoint()
    ~~~~~~~~~~^^
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/workflow_sandbox/_importer.py", line 497, in __call__
    return self.current(*args, **kwargs)
           ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/Users/georgemauer/code/temporal-samples/.venv/lib/python3.13/site-packages/temporalio/worker/workflow_sandbox/_importer.py", line 94, in restrict_built_in
    raise RestrictedWorkflowAccessError(f"__builtins__.{name}")
```
### Minimal Reproduction

I have [recreated this in temporal samples here](https://github.com/temporalio/samples-python/compare/main...togakangaroo:temporal-samples-python:demonstrate-debug-mode-not-working?expand=1)

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- Apple M4 Pro
- Temporal Version: 1.15.0
- Literally just running the samples
 
### Additional context

 I am debugging as part of trying to figure out why passing `RetryPolicy(max_attempts=1)` on `client.execute_workflow` in my unit tests doesn't seem to turn off retries of activities. 

What I ultimately want is to be able to tell my unit tests to only retry once or twice - essentially to set a retry policy specifically for my tests. The documentation implies that doing this by passing `retry_policy=RetryPolicy(max_attempts=2)` to `client.execute_workflow()` should work yet it doesn't for me. The only way to get it working is by passing a retry policy to `workflow.execute_activity()` but that would mean changing my code specifically for simple automation tests which I want to avoid.

So I started trying to inspect the code. Because there are base classes involved I want to inspect things at run time, however setting a breakpoint in my workflow fails. According to the documentation, `debug_mode=True` should make it possible to use breakpoints but that seems to *only* be the case when you don't have `sandbox=True` on your workflows which means I'd have to modify my code specifically for testing.


#### Comments (7)

<details>
<summary><strong>togakangaroo</strong> commented on 2025-09-14 20:49:23.000 UTC</summary>

This seems to be happening with `@workflow.defn(sandboxed=False)` and `workflow_runner=UnsandboxedWorkflowRunner()` as well.

I have to emphasize how utterly painful it is to have to develop things without the ability to place a breakpoint. Even when you can test activties in isolation, what we care about is the workflow as whole and that testability is really key. In my real-world case, the activities are basically just doing db loading and projection, not much to test - its the logic in the workflows and ensuring how it works across retries thats important.

</details>

<details>
<summary><strong>togakangaroo</strong> commented on 2025-09-15 17:28:19.000 UTC</summary>

Another example of where I'm struggling without `breakpoint` - I'm troubleshooting a situation in my tests where a mock is not set the way I intend it to. I want to inspect what is going on and I simply cannot.

For what its worth, I have tried
```
    with workflow.unsafe.sandbox_unrestricted():
        breakpoint()
```
which *does* hit the breakpoint, but the breakpoint is not in my code. I have to navigate up the call stack and then *do* see my code there and can inspect it, but boy is it a big workaround.

</details>

<details>
<summary><strong>tconley1428</strong> commented on 2025-09-16 15:55:16.000 UTC</summary>

> The documentation implies that doing this by passing retry_policy=RetryPolicy(max_attempts=2) to client.execute_workflow() should work yet it doesn't for me

Can you point to documentation that says this? The retry policy in `execute_workflow` is the policy for workflow retries, not activities. If the documentation says otherwise or is unclear, it should be fixed. 

As to the larger question of breakpoints, they should work with the unsandboxed runner, so that is something we would have to look into. The recommended way to debug would be to debug a replay of the workflow run, as that will avoid any interaction with server timeouts, but that is more of a problem when you have hit and are staying at the breakpoint, not in hitting it in the first place.

</details>

<details>
<summary><strong>togakangaroo</strong> commented on 2025-09-17 18:19:55.000 UTC</summary>

@tconley1428 I guess I don't really understand the distinction between workflow and activity retries. If I have a workflow with activities A then B, if activity B fails, then it will retry again later and when it does it will rerun the entire workflow while skipping activity A because it's already completed successfully in the event history. It does not, sticky cache aside, save the entire workflow memory state in between the two runs, the workflow runs from the beginning.

So if the entire workflow reruns again...then what's the distinction? Is it that failed workflows themselves would be retried?

If so, I think that bit is very confusing since the entire workflow *does* rerun on activity retries. Additionally, [the documentation does mention a default RetryPolicy](https://docs.temporal.io/develop/python/failure-detection#activity-timeouts:~:text=Activity%20Executions%20are%20automatically%20associated%20with%20a%20default%20Retry%20Policy) but clicking that link simply takes you to the encyclopedia page on retries in general.

Given the above and, because both use the same `RetryPolicy` class, it seems a reasonable inference that setting it at the workflow level is what controls the default. I think the docs need to make a very clear distinction on it as well as explaining how to set the default (which is needed since you would want a different policy to be used in unit tests).

I'll write another reply about breakpoints...

</details>

<details>
<summary><strong>togakangaroo</strong> commented on 2025-09-17 18:37:06.000 UTC</summary>

Regarding breakpoints. If I take exactly what is in that branch I have in the demo and run the unit test, it actually *is* hitting the breakpoint now (which is odd, I could have sworn it threw an error earlier, but maybe that was when I was trying in different configurations).

```
uv run pytest --pdb '/Users/georgemauer/code/temporal-samples/tests/hello/hello_activity_test.py::test_mock_activity'
```

<img width="1617" height="291" alt="showing test run in the terminal with a pause at the breakpoint but no ability to interact with the pdb debugger" src="https://github.com/user-attachments/assets/113e4f65-f349-4c93-b3a0-1c92f767a528" />

However, notice in that screenshot that while it *does* break, it is not in the pdb repl and I cannot interact with the debugger in any way. I cannot inspect a variable, I cannot step, I cannot continue, I can't even seem to quit out of it without having to kil the underlying process in another terminal. This is despite me having `debug-mode=True` *and* the workflow being marked as not sandboxed.

Interestingly, in the samples this is happening even *if* I do `workflow_runner=UnsandboxedWorkflowRunner()` *and* the `        with workflow.unsafe.sandbox_unrestricted()` stuff I figured out above. That worked in my real project, but in this samples branch it just hangs.

</details>

<details>
<summary><strong>togakangaroo</strong> commented on 2025-09-17 18:40:34.000 UTC</summary>

I want to comment on this as well @tconley1428 

> The recommended way to debug would be to debug a replay of the workflow run

That precludes test-driven-development as workflow does it not? Since you'd need something deployed somewhere so that you could get something to replay?

</details>

<details>
<summary><strong>tconley1428</strong> commented on 2025-09-22 14:46:05.000 UTC</summary>

> That precludes test-driven-development as workflow does it not? Since you'd need something deployed somewhere so that you could get something to replay?

Take a look at the `Replayer`: https://github.com/temporalio/sdk-python/blob/main/temporalio/worker/_replayer.py#L33. You can run a workflow in tests, get its history, then either store it (we do this to test replays across sdk version changes) or run it through the replayer to replay immediately.

> If so, I think that bit is very confusing since the entire workflow does rerun on activity retries

Only kinda. The workflow _might_ replay to retry an activity, but doesn't necessarily. And that's different from rerunning the workflow, which would redo any completed activities, being a fresh start of the workflow. That said, it isn't very common and not recommended to rely on workflow retries. 

I take your point about the documentation of a default retry policy though. The "default" retry policy is not a mutable one. If you'd like, you can make an additional issue requesting a means of overriding the default activity retry policy at a higher level, and we'll consider it. 

On breakpoints, we might need to find some time to reproduce your behavior. With sandboxing off, it shouldn't really be different from a standard python program, but I haven't debugged in that way before.

</details>


---

<a id="807"></a>

### #807: [Feature Request] Loss of stack trace information

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/807 |
| **State** | OPEN |
| **Author** | mrknmc (Mark Nemec) |
| **Created** | 2025-03-29 13:08:51.000 UTC (9 months ago) |
| **Updated** | 2025-04-04 14:55:02.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 3 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

* I would like to include full stack trace information in Sentry - see screenshot below where only `ChildWorkflowError` has a stack trace and both `ActivityError` and `ApplicationError` are missing it.
* I understand the exceptions are passed through the distributed system using the `Failure` Protobuf message which has a `stack_trace` field which could be used to populate the Sentry stack trace. This works for getting the stack trace of the `ApplicationError` in the activity. However, it's impossible to get the stack trace for the `ActivityError` in the `TestChildWorkflow` because the failure is just copied from the original failure here: https://github.com/temporalio/sdk-python/blob/bf747f1170e603b1e1adbd77c673fa83f0c99e7d/temporalio/converter.py#L826-L829

<img width="1131" alt="Image" src="https://github.com/user-attachments/assets/fb08e736-8f58-4aa0-bf45-c17523ce0292" />

This is the workflow and activity code I'm using to test this:

```
@activity.defn(...)
async def test_activity() -> None:
    raise TestException("Test error")


@workflow.defn
class TestChildWorkflow:
    @workflow.run
    async def run(self) -> None:
        # execute_default_activity is our wrapper around workflow.execute_activity
        await execute_default_activity(
            test_activity,
            retry_policy=RetryPolicy(maximum_attempts=1),
        ),


@workflow.defn
class TestParentWorkflow:
    @workflow.run
    async def run(self) -> None:
        # child workflow fails parent workflow
        await workflow.execute_child_workflow(
            TestChildWorkflow.run,
            id=f"test-child-workflow-{int(workflow.time())}",
            task_queue=get_temporal_tasks_queue_name(),
        )
```

### Describe the solution you'd like

* Ability to get the stack trace for every error in the chain. I am happy to contribute this code but I am not sure if there is a strong reason for why it is done this way and whether it can be changed.


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-03-31 14:12:33.000 UTC</summary>

Python exceptions don't support easily deserializing tracebacks that come from remote/arbitrary strings (such as the ones we store which can come from any programming language or Python version). Therefore, we make the raw failure available to access this if needed. So for instance, this would get a collection of messages and tracebacks (untested, just typed here in code):

```python
@dataclass
class ExcDetails:
    message: str
    stack_trace: Optional[str]

def populate_chain(exc: Exception, chain: list[ExcDetails]) -> None:
    stack_trace = None
    if isinstance(exc, FailureError) and exc.failure:
        stack_trace = exc.failure.stack_trace
    elif exc.__traceback__:
        stack_trace = "\n".join(traceback.format_tb(exc.__traceback__))
    chain.append(ExcDetails(message=exc.message, stack_trace=stack_trace))
    if exc.__cause__:
        populate_chain(exc.__cause__, chain)
```

Something like that should work. Or do you have alternative suggestions on how to make arbitrary string stack trace available via error?

</details>

<details>
<summary><strong>tpetkov-red</strong> commented on 2025-04-04 08:34:41.000 UTC</summary>

> Something like that should work. Or do you have alternative suggestions on how to make arbitrary string stack trace available via error?

Found this issue while trying to solve a similar problem.  
Honestly, I'd be happy with the above (or similar) solution plopped into the sdk.
@cretz  do you think this can be included into the project?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-04 14:54:15.000 UTC</summary>

The SDK already includes stack trace on the errors, it's just via `failure.stack_trace` instead of `__traceback__` because Python has limitations on what can be on `__traceback__`. This little sample code was just showing how you can call `failure.stack_trace` in your code, but I don't think we'll include this sample in the SDK proper. You can use a whole new object to collect stack traces if you want like this sample does, though many may just prefer to use the existing Python exceptions and provide a formatter of sorts to whatever is displaying/recording the exception.

</details>


---

<a id="676"></a>

### #676: [Feature Request] Support `(str, Enum)` like `StrEnum`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/676 |
| **State** | OPEN |
| **Author** | sayevsky (Slava) |
| **Created** | 2024-10-24 14:36:28.000 UTC (1y 2m ago) |
| **Updated** | 2025-03-01 20:21:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->
I'm trying to use enum class to pass it to activity as an input.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

Activity deserializes bytes to list of chars instead of given Enum

### Minimal Reproduction
```
from enum import Enum

from temporalio.api.common.v1.message_pb2 import Payload
from temporalio.converter import JSONPlainPayloadConverter

class SomeEnum(str, Enum):
    ONE = "one"
    TWO = "two"



converter = JSONPlainPayloadConverter()
result = converter.from_payload(Payload(metadata={
    "key": b"encoding",
    "value": b"json/plain"},
    data=b"\"one\""),
    SomeEnum)
print(result)
```
Output:
```
['o', 'n', 'e']
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
- M1 Mac, though any architecture impacted
- Temporal Version: [e.g. 1.14.0?] and/or SDK version
SDK version is 1.6.0
- Are you using Docker or Kubernetes or building Temporal from source?
No

### Additional context

JSONPlainPayloadConverter deserializes IntEnum, StrEnum correctly, but it is more reliable to convert payload to any Enum

<!-- Add any other context about the problem here. -->


#### Comments (7)

<details>
<summary><strong>cretz</strong> commented on 2024-10-24 14:38:51.000 UTC</summary>

Per https://github.com/temporalio/sdk-python?tab=readme-ov-file#data-conversion and https://docs.temporal.io/develop/python/converters-and-encryption#payload-conversion, only `StrEnum` and `IntEnum` are supported directly. Can you extend from one of those?

</details>

<details>
<summary><strong>sayevsky</strong> commented on 2024-10-25 08:33:01.000 UTC</summary>

Hello, @cretz, thank you for the quick follow up.
Is the decision by not supporting basic Enum intentional? Are there any known corner-cases that stop adding additional functionality?

I can extend, but it is seems, that I need to copy-paste the whole `value_to_type` into my project. That is because types could be generic and `value_to_type` traverse the type recursively. 

</details>

<details>
<summary><strong>sayevsky</strong> commented on 2024-10-25 09:10:28.000 UTC</summary>

As proposal:

```
...
# StrEnum, available in 3.11+
    if sys.version_info >= (3, 11):
        if inspect.isclass(hint) and issubclass(hint, StrEnum):
            if not isinstance(value, str):
                raise TypeError(
                    f"Cannot convert to enum {hint}, value not a string, value is {type(value)}"
                )
            return hint(value)
# proposal to add the code:
    if inspect.isclass(hint) and issubclass(hint, Enum):
        if not isinstance(value, str):
            raise TypeError(
                f"Cannot convert to enum {hint}, value not a string, value is {type(value)}"
            )
        return hint(value)
```

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-25 13:00:41.000 UTC</summary>

> Is the decision by not supporting basic Enum intentional?

It is because there is no clear serialization of plain `Enum`. But there is for `(str, Enum)` together so we can probably support that combo (though we, and Python, suggest using `StrEnum` now if you can). Your proposal is close, but we probably also need to also check that it's a subclass of _both_ `str` _and_ `Enum` and not just `Enum`. We'll look into adding this, thanks!

</details>

<details>
<summary><strong>sayevsky</strong> commented on 2024-10-25 13:52:56.000 UTC</summary>

Similar enhancement for `(int, Enum)` would be nice. And if both checks do not match, then throw Exception. Because current behaviour is not obvious.

Thanks.

</details>

<details>
<summary><strong>spacether</strong> commented on 2025-03-01 07:55:45.000 UTC</summary>

Why not pickle enums into bytes for serialization? Or leverage what pydantic does? 

</details>

<details>
<summary><strong>dandavison</strong> commented on 2025-03-01 20:21:50.000 UTC</summary>

@spacether tangential to this ticket, but we recently added an official Pydantic data converter to the SDK: https://github.com/temporalio/sdk-python?tab=readme-ov-file#pydantic-support If you use that data converter you'll get Pydantic's enum support (which does support `(str, Enum)`).

Reactions: 👍 1

</details>


---

<a id="603"></a>

### #603: [Feature Request] Investigate/document how to use PyCharm debugger with workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/603 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-08-06 17:50:17.000 UTC (1y 4m ago) |
| **Updated** | 2025-01-17 20:28:59.000 UTC |
| **Upvotes** | 3 |
| **Comments** | 1 |
| **Priority Score** | 7 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 3 👀 3 |

#### Description

### Describe the solution you'd like

May be similar to #238 but maybe not (that's more about the sandbox).

It seems when trying to debug via replayer in PyCharm, some things break that work just fine when not using PyCharm's debugger. Investigate what breaks and why. This may be due to some patching/expectations PyCharm has around asyncio that don't hold true for custom asyncio implementations. There's another issue at https://youtrack.jetbrains.com/issue/PY-64542/Asyncio-support-for-the-debugger-doesnt-work-with-pytest-asyncio.

We need to document how exactly to use breakpoints in workflows from this IDE.

#### Comments (1)

<details>
<summary><strong>mnichols</strong> commented on 2025-01-17 20:28:58.000 UTC</summary>

@cretz here is my first crack at such a doc:

Python developers must take into consideration both the [sandbox](https://docs.temporal.io/develop/python/python-sdk-sandbox) and the Workflow Task Timeout for any Debugger interactions. Here are some tips to help you "step through" Workflow Code with a Debugger.

### Debugging Workflow Code

Finding problems within complex Workflow code might be aided by stepping through
the code as you normally would to inspect variable state, step through execution paths, etc.

Workflow code executed by a Worker does so within the bounds of a Workflow Task which is
itself governed by a Timeout. 
* The maximum amount of time a Workflow Task can be configured to take before `Failed` is *120 seconds*. 
* The default Timeout is _10 seconds_.
* That means you have a maximum of _two minutes_ to diagnose your code before the current Task will be failed and rescheduled.
You'll see a flood of error messages in your console related to these Task issues. This may not be enough time to perform your diagnosis.

#### _So how can I step through my Workflow Code??_

You can get around this Task boundary by executing your code within a `Replayer`.
This is done by passing Workflow Execution history into the Replayer while the debugger is attached to step through the code.
Executed this way, there is no Task to interfere with your diagnosis.

> **PyCharm** users might experience issues with `asyncio` debugging.
> If you are having difficulty debugging with **PyCharm**, you might consider the [steps in this ticket](https://youtrack.jetbrains.com/issue/PY-57667/Asyncio-support-for-the-debugger-EXPERIMENTAL-FEATURE)
> to solve it. The `python.debug.asyncio.repl` can be toggled within PyCharm by:
> 1. Use Shift + Shift (Search Everywhere)
> 2. In the popup type: Registry and press Enter
> 3. Find "Registry" in the list of results and click on it.
> 4. In the new popup find `python.debug.asyncio.repl` line and check (enable) or uncheck (disable) the respective checkbox
> 5. Press Close.
> 6. Restart the IDE.

Here are a couple of approaches to debug Temporal Workflows with a Debugger:

### The Debug Two-Step

This approach involves running first _without_ the Debugger attached to generate Workflow Execution histories.
Subsequently, these histories can be used in the second run _with_ the Debugger attached.
This approach can be handy if you already have Execution histories you want to verify that failed, for example, in production.


_First run_ (without Debugger attached)
1. Execute the Workflow(s) and keep the Temporal Server running (if testing locally)

_Second run_ (with Debugger attached)
1. Set appropriate breakpoints in Workflow code.
2. Fetch the related Workflow Execution History(ies) and store in a variable
3. Pass the history into a `Replayer` with the following properties set:
```python
replayer = Replayer(
    workflows=[MyWorkflow], 
    debug_mode=True,
    namespace='debug',
    workflow_runner=temporalio.worker.UnsandboxedWorkflowRunner())
```
4. Profit.

### The Debug One-Shot

1. Set appropriate breakpoints in Workflow code, but this time add a `Condition` of `workflow.info().namespace == 'debug'.
2. Run the test *with Debugger attached* that:
   1. Executes the Workflow(s) 
   2. Fetches the related Workflow Execution History(ies) and store in a variable
   3. Passes the history into a `Replayer` with the following properties set:
```python
replayer = Replayer(
    workflows=[MyWorkflow], 
    debug_mode=True,
    namespace='debug',
    workflow_runner=temporalio.worker.UnsandboxedWorkflowRunner())
```
3. Profit.

Reactions: ❤️ 3

</details>


---

<a id="1154"></a>

### #1154: [Feature Request] Support InterpreterPoolExecutor from py3.14

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1154 |
| **State** | OPEN |
| **Author** | blueraft (Ahmed Ilyas) |
| **Created** | 2025-10-13 09:41:39.000 UTC (2 months ago) |
| **Updated** | 2025-10-15 15:51:48.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 2 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

Python 3.14 adds [InterpreterPoolExecutor](https://docs.python.org/3.14/library/concurrent.futures.html#concurrent.futures.InterpreterPoolExecutor), a subclass of ThreadPoolExecutor that runs tasks in isolated subinterpreters.

The Temporal Python SDK appears to assume ThreadPoolExecutor-like behavior in [worker/_activity.py](https://github.com/temporalio/sdk-python/blob/main/temporalio/worker/_activity.py), which doesn’t hold for InterpreterPoolExecutor. Using it as an activity executor leads to the following errors:

```python
concurrent.interpreters.NotShareableError: (Queue(2), <built-in method run of _contextvars.Context object at 0x1015fec00>, (<function _execute_sync_activity at 0x1014171c0>, Info(activity_id='61', activity_type='task', attempt=3, current_attempt_scheduled_time=datetime.datetime(2025, 10, 13, 9, 32, 51, 324811, tzinfo=datetime.timezone.utc), heartbeat_details=[], heartbeat_timeout=None, is_local=False, schedule_to_close_timeout=None, scheduled_time=datetime.datetime(2025, 10, 13, 9, 32, 47, 122424, tzinfo=datetime.timezone.utc), start_to_close_timeout=datetime.timedelta(seconds=36000), started_time=datetime.datetime(2025, 10, 13, 9, 32, 51, 692224, tzinfo=datetime.timezone.utc), task_queue='hello-task-queue', task_token=b'\n$0199c8e3-3716-7223-b18b-3a720150440f\x1231906eac1-8e34-4119-b7d5-0da5e8ffefd4-hello-workflow\x1a$0199dcea-4e2f-7cb2-bf9b-ef9859498ab6 A(\x032\x0261B\x04taskJ\x08\x08\x01\x10\x93\xb4A\x18\x01', workflow_id='1906eac1-8e34-4119-b7d5-0da5e8ffefd4-hello-workflow', workflow_namespace='default', workflow_run_id='0199dcea-4e2f-7cb2-bf9b-ef9859498ab6', workflow_type='GreetingWorkflow', priority=Priority(priority_key=None, fairness_key=None, fairness_weight=None), retry_policy=RetryPolicy(initial_interval=datetime.timedelta(seconds=1), backoff_coefficient=2.0, maximum_interval=datetime.timedelta(seconds=100), maximum_attempts=0, non_retryable_error_types=None)), <function _ActivityInboundImpl.execute_activity.<locals>.<lambda> at 0x1016381a0>, <temporalio.worker._activity._ThreadExceptionRaiser object at 0x10161df60>, <threading.Event at 0x101620fb0: unset>, <threading.Event at 0x10152d810: unset>, <temporalio.converter.DefaultPayloadConverter object at 0x1010e4c20>, <temporalio.common._NoopMetricMeter object at 0x100d9be00>, _ActivityCancellationDetailsHolder(details=None), <function task at 0x101529430>), {}) does not support cross-interpreter data
```




#### Comments (2)

<details>
<summary><strong>tconley1428</strong> commented on 2025-10-15 15:33:59.000 UTC</summary>

We'll take a look when we can. We still have to do some due diligence on compatibility with python 3.14 as a whole. Some of our dev dependencies don't (or didn't recently) support 3.14 yet, so officially supporting and validating it will take some work.

</details>

<details>
<summary><strong>blueraft</strong> commented on 2025-10-15 15:51:48.000 UTC</summary>

Thanks, appreciate it!

</details>


---

<a id="837"></a>

### #837: [Feature Request] Make Temporal logger adapter accomodate to OpenTelemetry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/837 |
| **State** | OPEN |
| **Author** | RoggeOhta (RoggeOhta) |
| **Created** | 2025-04-22 11:48:20.000 UTC (8 months ago) |
| **Updated** | 2025-04-24 14:45:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

### Problem
Temporal's activity/workflow logger adapter uses a Dict for its "extra" field, violating the OpenTelemetry format that requires basic data types (bool, str, bytes, int, float).

### Solution
#838 


#### Comments (6)

<details>
<summary><strong>RoggeOhta</strong> commented on 2025-04-22 12:01:15.000 UTC</summary>

#838 I've write a draft solution for this problem

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-22 13:42:22.000 UTC</summary>

Thanks for the issue!

We cannot incompatibly change default logging for all users because of OpenTelemetry-only limitations. Also per https://opentelemetry.io/docs/languages/python/, OTel logging is still in development. Once it does stabilize, we can definitely look into opt-in options for either splatting the details as done in the PR, or adding something to `temporalio.contrib.opentelemetry` to help handle this nested "extra" data on log records.

Digging through the OTel source, it seems attributes can have nested dicts. It links to https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#field-attributes which says the attribute values can be `any` which supports nested dicts I think: https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#type-any. I wonder what type of error you are seeing here?

</details>

<details>
<summary><strong>RoggeOhta</strong> commented on 2025-04-22 15:57:09.000 UTC</summary>

> Thanks for the issue!
> 
> We cannot incompatibly change default logging for all users because of OpenTelemetry-only limitations. Also per https://opentelemetry.io/docs/languages/python/, OTel logging is still in development. Once it does stabilize, we can definitely look into opt-in options for either splatting the details as done in the PR, or adding something to `temporalio.contrib.opentelemetry` to help handle this nested "extra" data on log records.
> 
> Digging through the OTel source, it seems attributes can have nested dicts. It links to https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#field-attributes which says the attribute values can be `any` which supports nested dicts I think: https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/data-model.md#type-any. I wonder what type of error you are seeing here?

Thank you for the response. I wasn't aware of the opentelemetry-specification. The error is actually a warning generated by the `opentelemetry-sdk` Python library.
https://github.com/open-telemetry/opentelemetry-python/blob/742171e50c70f4a4540a01d2c6c3cbcf4882d810/opentelemetry-api/src/opentelemetry/attributes/__init__.py#L111

The library verifies if an attribute type is among the `_VALID_ATTR_VALUE_TYPES`, but it has a broader category called `_VALID_ANY_VALUE_TYPES` that includes Mapping types, which was not utilized. When it finds attributes that are not of basic types, it removes them, complicating the ability to trace specific activities or workflows.
https://github.com/open-telemetry/opentelemetry-python/blob/742171e50c70f4a4540a01d2c6c3cbcf4882d810/opentelemetry-api/src/opentelemetry/attributes/__init__.py#L25

Could we potentially implement a workaround to address this, like adding an option to flatten the logger's extra field?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-22 22:46:09.000 UTC</summary>

> Could we potentially implement a workaround to address this, like adding an option to flatten the logger's extra field?

I am concerned about flattening Temporal-specific values just for OTel purposes. To do this right, we'd really need to prefix `temporal_activity.` and `temporal_workflow.` to all the extra value names when flattening. But it is technically something we can do, though we may want to wait until logging stabilizes in case there is a better handler-level approach we can devise instead of doing this at the logger level.

I think a better approach may be to encourage custom adapters. You could set `temporalio.activity.logger` and `temporalio.workflow.logger` to your own class extensions of `temporalio.activity.LoggerAdapter` and `temporalio.workflow.LoggerAdapter` setting the `activity_info_on_extra` and `workflow_info_on_extra` to `False` on super init or post super init. Then you can override `process` to set whatever "extra" values from the activity/workflow context you'd like instead of using the preset default ones. This is the primary reason we exposed and documented those adapter classes is for this kind of advanced customization.

</details>

<details>
<summary><strong>RoggeOhta</strong> commented on 2025-04-24 10:04:11.000 UTC</summary>

Okay, I found a workaround. Posting in case it helps others who encounter this issue.

First, set global `activity` and `workflow` logger at your program init. Turn off the extra info.
```python
activity.logger.activity_info_on_extra = False
workflow.logger.workflow_info_on_extra = False
```

Then, in every `activity/workflow`, add this info manually to your own logger.
```
# start of some activity
my_logger.extra = activity.info()._logger_details()

# start of some workflow
my_logger.extra = workflow.info()._logger_details()
```

This should bypass the python oTel library warning while retaining activity trace logs.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-24 14:38:32.000 UTC</summary>

:+1:

> Then, in every activity/workflow, add this info manually to your own logger

An alternative is to replace those loggers with your own extension of `activity.LoggerAdapter` and `workflow.LoggerAdapter` that overrides `process` to set these values.

The concern here for us adding this option as-is is that we need to qualify all keys with `temporal_activity.` and `temporal_workflow.` prefixes probably if we're not allowed nested maps. We may be able to add that option today or wait until OTel logging stabilizes.

Reactions: 👍 2

</details>


---

<a id="235"></a>

### #235: [Feature Request] Raise exception for payloads that violate gRPC message max size

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/235 |
| **State** | OPEN |
| **Author** | nathanielobrown (Nathaniel Brown) |
| **Created** | 2022-12-30 17:41:06.000 UTC (3 years ago) |
| **Updated** | 2025-07-07 19:37:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
I ran into an issue where my code tried to send a payload that was larger than the 4MB supported by gRPC. The issue is that it wasn't so obvious that this was the issue. I only figured it out after reviewing my logs and seeing the following line:

```
WARN temporal_client::retry: gRPC call respond_workflow_task_completed retried 5 times error=Status { code: ResourceExhausted, message: "grpc: received message larger than max (10248653 vs. 4194304)", metadata: MetadataMap { headers: {"content-type": "application/grpc"} }, source: None }
```

For some reason this error did not raise an exception (which I would have seen in Sentry) and in the Temporal UI all I would see were timeouts. This made it take longer to understand the root issue.

### Describe the solution you'd like

I think the default data converter could check for this case and raise a clear exception to help developers quickly understand the issue. Alternatively, maybe some error from gRPC could be propagated better, IDK about this but I'm sure @cretz will know best!

Here's what I added to my custom JSON encoder to add this behaviour for myself:
```python
from typing import Any, Optional, Type

import orjson
import temporalio.api.common.v1
from pydantic.json import pydantic_encoder
from temporalio.converter import (
    JSONPlainPayloadConverter as BaseJSONPlainPayloadConverter,
)


MAX_PAYLOAD_SIZE = 4_194_304


class JSONPlainPayloadConverter(BaseJSONPlainPayloadConverter):
    def to_payload(self, value: Any) -> Optional[temporalio.api.common.v1.Payload]:
        serialized_valued = orjson.dumps(value, default=pydantic_encoder)
        if len(serialized_valued) > MAX_PAYLOAD_SIZE:
            raise RuntimeError(
                f"Payload size {len(serialized_valued):,d} "
                + f"exceeds max size {MAX_PAYLOAD_SIZE}"
            )
        return temporalio.api.common.v1.Payload(
            metadata={"encoding": self._encoding.encode()},
            data=serialized_valued,
        )
```


#### Comments (6)

<details>
<summary><strong>cretz</strong> commented on 2022-12-30 17:57:41.000 UTC</summary>

But it's not just single payload that can cause this. What if you have two payloads that are each 2.5MB in the same gRPC call (very possible just calling two activities)? Or other things like string names or lots of little memo values that make it over 4MB? Also, I am guessing this is a server side error and therefore the server may be able to configure this (though we may not expose such a knob by default). Also, your solution doesn't help people using proto payloads or byte array payloads.

If the only purpose is to change English words in your specific case of single-payload-too-large from "grpc: received message larger than max" to "payload size exceeds max size" what you have is acceptable. But I am not sure we need to put this in the SDK if this is a server side error and can come about via many ways the JSON-payload-converter check you have won't catch.

> Alternatively, maybe some error from gRPC could be propagated better,

How could the propagation improve? IIUC you're just changing the string message and stack trace, you're still gonna fail the workflow task and have to look at logs to see what happened.

</details>

<details>
<summary><strong>nathanielobrown</strong> commented on 2022-12-30 18:46:17.000 UTC</summary>

@cretz, I definitely don't know the best way to do this and I agree that the solution I used is not a "final" solution that would work for the SDK. I do feel like something could be improved here, but maybe I am wrong. I'll just try to detail what I'm experiencing.

The log message comes from the worker who is executing the workflow, although I would gather that it is just logging an error returned by the server.

What's important to me is not that we change the message in some way, but that we clearly fail whatever task we were trying to perform rather than retrying and timing out. The timeout means we have to embark on an investigation and cross-reference with logs, while an exception would make things more clear.

Maybe when a client talking to gRPC gets this specific error it can raise an exception rather than retrying and eventually timing out silently? If we receive an error response like this I would think a retry will never help fix the issue. I realize there are probably similar gRPC errors that should be retried and it might be a little in-the-weeds to try to isolate this (and potentially other unfixable errors) as a case for special handling, but I also think that I will not be the last one who runs across this issue and others may experience the same confusion.

</details>

<details>
<summary><strong>cretz</strong> commented on 2022-12-30 19:20:30.000 UTC</summary>

> but that we clearly fail whatever task we were trying to perform rather than retrying and timing out

Ah, I see now. So when we make gRPC calls, we take some failure statuses to mean that there is a temporary issue and we should retry the call. Other failure statuses we treat as a problem with the workflow and fail the task (which is just like throwing from a workflow like you do here). `ResourceExhausted` is seen as a transient error even though it's not in this case. I will discuss with team to see if there may be a better way here. I think this is an issue in all SDKs today.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2023-01-13 14:35:07.000 UTC</summary>

This is pending https://github.com/temporalio/sdk-core/issues/462

</details>

<details>
<summary><strong>GSmithApps</strong> commented on 2025-07-07 17:37:48.000 UTC</summary>

@cretz should this be closed?

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-07-07 19:37:39.000 UTC</summary>

Yes, though I wonder if we should first add a test or at least have some manual confirmation that too-large gRPC message does indeed bubble out and is not implicitly retried.

Reactions: 👍 1

</details>


---

<a id="1136"></a>

### #1136: [Bug] Langfuse Tracing Not Working with Temporal OpenAI Agents Plugin

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1136 |
| **State** | OPEN |
| **Author** | databill86 |
| **Created** | 2025-09-30 15:25:56.000 UTC (3 months ago) |
| **Updated** | 2025-12-02 17:34:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

**Context:** This issue was separated from a [previous bug report](https://github.com/temporalio/sdk-python/issues/1134). @tconley1428 confirmed that the plugin approach is the only way to run agents [edit: Tim - Agents SDK agents] in Temporal workflows, but the tracing/observability issue remains unresolved and I think it deserves a separate issue.

### What are you really trying to do?

I'm building a multi-tenant application using Temporal workflows with OpenAI agents and need observability/tracing to work properly with Langfuse (though logfire, as explained [here](https://langfuse.com/integrations/frameworks/openai-agents)). I want to trace agent execution, tool calls, and model interactions through Langfuse and logfire.

### Describe the bug

When using Temporal workflows with OpenAI agents and the required `OpenAIAgentsPlugin`, the Langfuse tracing instrumentation fails to work properly. The tracing setup doesn't capture agent execution traces in Langfuse.

**Expected Behavior:**
- Agent execution should be traced and visible in Langfuse.

<img width="1638" height="288" alt="Image" src="https://github.com/user-attachments/assets/2fdfdaca-4d31-4ad3-8d58-b64f26245f9b" />

**Current Behavior:**
- No traces appear in Langfuse when using the plugin approach
- Agent execution happens but is not observable through Langfuse
- Tracing works fine when running agents outside of Temporal workflows

### Minimal Reproduction

**1. Tracing Setup (that works outside workflows):**
```python
from agents import set_trace_processors
import logfire
import nest_asyncio
import os

def init_tracing():
    """Initialize tracing and observability."""
    # Set Langfuse env vars from settings
    os.environ.setdefault("LANGFUSE_PUBLIC_KEY", LANGFUSE_PUBLIC_KEY)
    os.environ.setdefault("LANGFUSE_SECRET_KEY", LANGFUSE_SECRET_KEY)
    os.environ.setdefault("LANGFUSE_HOST", LANGFUSE_HOST)

    set_trace_processors([])  # only disable OpenAI tracing

    # Instrument OpenAI Agents SDK via pydantic-ai logfire
    try:
        nest_asyncio.apply()
        logfire.configure(service_name="temporal-demo", send_to_logfire=False)
        # This method automatically patches the OpenAI Agents SDK to send logs via OTLP to Langfuse.
        logfire.instrument_openai_agents()
    except Exception as exc:
        logger.error(f"Logfire instrumentation not available: {exc}")
```

**2. Worker Setup with Plugin (required for Temporal workflows):**
```python
from temporalio.worker import Worker
from temporalio.contrib.openai_agents import OpenAIAgentsPlugin, ModelActivityParameters
from datetime import timedelta

async def main():
    # Initialize tracing (conflicts with plugins)
    init_tracing()  # Sets up logfire → OTLP → Langfuse
    
    # Create Temporal client with plugins (required for agents)
    plugins = [
        OpenAIAgentsPlugin(
            model_params=ModelActivityParameters(
                start_to_close_timeout=timedelta(seconds=30)
            ),
            model_provider=CustomLitellmProvider(
                base_url=PROXY_BASE_URL,
                api_key=PROXY_API_KEY,
            ),
        ),
    ]
    
    client = await create_temporal_client(include_plugins=True)
    
    # Run the worker
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as activity_executor:
        worker = Worker(
            client,
            task_queue="demo-task-queue",
            workflows=[MyWorkflow],
            activities=[simple_tool_activity],
            activity_executor=activity_executor,
        )
        await worker.run()
```

**3. Workflow with Agent:**
```python
from temporalio import workflow
from agents import Agent

@workflow.defn
class MyWorkflow:
    @workflow.run
    async def run(self) -> str:
        # Create agent with string model (required with plugins)
        agent = Agent(
            name="Triage Agent",
            instructions="Your instructions here",
            model="gpt-4o-mini",  # String model name required with plugins
            tools=tools,
        )
        
        # This executes but doesn't appear in Langfuse traces
        result = await agent.run("Your message here")
        return result
```

**4. Custom Model Provider (for proxy configuration):**

```python
from agents.extensions.models.litellm_model import LitellmModel
from agents.models.interface import Model, ModelProvider

class CustomLitellmProvider(ModelProvider):
    """Custom ModelProvider that uses LiteLLM with configurable base_url and api_key."""

    def __init__(self, base_url: str | None = None, api_key: str | None = None):
        self.base_url = base_url
        self.api_key = api_key

    @property
    def model_class(self) -> type[Model]:
        return LitellmModel

    @property
    def provider_name(self) -> str:
        return "CustomLitellmProvider"

    def get_model(self, model_name: str) -> Model:
        return LitellmModel(
            model=model_name,
            base_url=self.base_url,
            api_key=self.api_key,
        )
```

### Environment/Versions

- OS and processor: Linux
- Temporal Version: temporalio==1.18.0
- OpenAI SDK: openai==1.109.0
- OpenAI Agents: openai-agents==0.3.2
- Python: 3.11
- Langfuse: Latest version
- logfire: Latest version
- Are you using Docker or Kubernetes or building Temporal from source? Using Docker


**Current Behavior:**
No traces appear in Langfuse at all when using the plugin approach.


Thanks 🙏


#### Comments (5)

<details>
<summary><strong>tconley1428</strong> commented on 2025-09-30 15:39:35.000 UTC</summary>

Can you clarify, the link you provided doesn't mention logfire at all.

</details>

<details>
<summary><strong>databill86</strong> commented on 2025-09-30 16:04:19.000 UTC</summary>

Sorry about that, I actually had the link saved in a readme file and copy pasted without checking. The tutorial has been updated, and it no longer uses [logfire instrument](https://logfire.pydantic.dev/docs/integrations/llms/openai/#openai-agents). 

Instead of `logfire.instrument_openai_agents()`, they now recommend:
```python
from openinference.instrumentation.openai_agents import OpenAIAgentsInstrumentor
OpenAIAgentsInstrumentor().instrument()
```

I tested this, and it worked! I can see the traces in Langfuse (screenshot attached).

<img width="1896" height="831" alt="Image" src="https://github.com/user-attachments/assets/85ec8346-9af8-463d-9c5c-efa1956af564" />

However, I have the following errors in the logs:

```
ERROR:opentelemetry.context:Failed to detach context
Traceback (most recent call last):
  File "/lib/python3.11/site-packages/opentelemetry/context/__init__.py", line 155, in detach
    _RUNTIME_CONTEXT.detach(token)
  File "/lib/python3.11/site-packages/opentelemetry/context/contextvars_context.py", line 53, in detach
    self._current_context.reset(token)
ValueError: <Token var=<ContextVar name='current_context' default={} at 0x79c8f92d40e0> at 0x79c8c81a70c0> was created in a different Context

2025-09-30 17:53:03.498 | INFO     | activities.simple_tool_activity:tool_func:27 - ✅ Tool activity completed: Tool processed: 'Hello, this is a test message for the demo!' - This is a simple response from the tool activity!

ERROR:opentelemetry.context:Failed to detach context
Traceback (most recent call last):
  File "/lib/python3.11/site-packages/opentelemetry/context/__init__.py", line 155, in detach
    _RUNTIME_CONTEXT.detach(token)
  File "/lib/python3.11/site-packages/opentelemetry/context/contextvars_context.py", line 53, in detach
    self._current_context.reset(token)
ValueError: <Token var=<ContextVar name='current_context' default={} at 0x79c8f92d40e0> at 0x79c8b81d9b40> was created in a different Context
ERROR:opentelemetry.context:Failed to detach context
Traceback (most recent call last):
  File "/lib/python3.11/site-packages/opentelemetry/context/__init__.py", line 155, in detach
    _RUNTIME_CONTEXT.detach(token)
  File "/lib/python3.11/site-packages/opentelemetry/context/contextvars_context.py", line 53, in detach
    self._current_context.reset(token)
ValueError: <Token var=<ContextVar name='current_context' default={} at 0x79c8f92d40e0> at 0x79c8c81a47c0> was created in a different Context
```
Should I be concerned about these context detachment errors?



</details>

<details>
<summary><strong>tconley1428</strong> commented on 2025-09-30 16:17:27.000 UTC</summary>

We have an open report of that which has been around for a while. https://github.com/temporalio/sdk-python/issues/441
If you don't see other issues with the run, it is probably okay to carry on, but it is something that is bubbling up for us to prioritize investigating. 

</details>

<details>
<summary><strong>databill86</strong> commented on 2025-10-01 08:37:28.000 UTC</summary>


Thanks for the quick response.

**Tracing is absolutely critical for us**, we can't avoid it. The specific tracing tool doesn't matter as long as it works reliably with Temporal. Langfuse is probably the most widely used, so if there's something that works well with that, it would be cool.

To summarize, I've done a lot of testing with different tracing approaches and here's what I found:

1. Using [logfire](https://logfire.pydantic.dev/docs/integrations/llms/openai/#openai-agents) with **`logfire.instrument_openai_agents()`** 
   - ❌ **Doesn't work with Temporal (when using plugins in the client definition)** - nothing gets traced, no errors
   - ✅ **Works without Temporal plugins** - traces perfectly when agent runs in a regular activity outside workflow

2. Using [logfire](https://logfire.pydantic.dev/docs/integrations/llms/openai/#openai-agents) with **`logfire.instrument_openai()`** (global OpenAI client instrumentation)
   - ⚠️ **Partially works with Temporal (when using plugins in the client definition)** - traces metadata but input/output are null, also we have multiple observations in different langfuse traces for the same agent run, without any errors.

3. Using [openinference](https://langfuse.com/integrations/frameworks/openai-agents) **`OpenAIAgentsInstrumentor().instrument()`** 
`from openinference.instrumentation.openai_agents import OpenAIAgentsInstrumentor
OpenAIAgentsInstrumentor().instrument()`
   - ⚠️ **Works but with context detachment errors**
   - Traces content but throws context-related errors

Thanks again for looking into this! 🙏


</details>

<details>
<summary><strong>tconley1428</strong> commented on 2025-10-01 17:04:00.000 UTC</summary>

1. I looked into why logfire doesn't work. Their instrumentation overrides the TracingProvider, which is also what we do to enable tracing and these conflict. I found a way to combine the two, but that doesn't help, as logfire's implementation is not durable safe. 

2. Wouldn't be expected to work well really, since the agents instrumentor exists to better instrument the scenario, versus doing so directly through the openai client library.

3. We have the context detachment errors on the docket to look at.

Reactions: 👍 1

</details>


---

<a id="1009"></a>

### #1009: [Feature Request] OpenAI Agents Streaming support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1009 |
| **State** | OPEN |
| **Author** | surki (Suresh Kumar Ponnusamy) |
| **Created** | 2025-07-29 11:50:24.000 UTC (5 months ago) |
| **Updated** | 2025-08-04 18:28:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Feature Request
1. Looks like run_streamed() is not supported. In a long running reasoning agent, we need to keep the chat updated with the progress. Any plan to support it?

### Answered Questions
2. What's the recommended way to integrate? the `OpenAIAgentsPlugin` or `set_open_ai_agent_temporal_overrides`? If plugin, any plan to cut a release with latest changes?
3. Is it safe to use single worker for both regular workflows/activities and agent workflows? concerned about plugin/override negatively interacting with other workflows.

#### Comments (5)

<details>
<summary><strong>tconley1428</strong> commented on 2025-07-29 14:00:07.000 UTC</summary>

1. We do plan to support streaming. It's on the roadmap.
2. `OpenAIAgentsPlugin` is intended to be the only usage method. It released last night: https://github.com/temporalio/sdk-python/releases/tag/1.15.0, with samples and readme updates in the works to align to that new model.
3. It is safe to use both. You can look at the plugin implementation which is quite small to identify the set of changes. The only one of particular concern is that other workflows will have to use the `pydantic_data_converter`. This is generally not a bad idea anyway since it is more robust than our built in one, but for some scenarios it could be problematic. For instance, adding it into an existing worker with histories may not work as the conversion process would differ.

I'll repurpose this issue specifically to track the streaming support request. In general for free form questions rather than a feature request, I would recommend using our community slack: https://temporalio.slack.com/archives/CTT84RS0P

</details>

<details>
<summary><strong>surki</strong> commented on 2025-07-31 05:25:15.000 UTC</summary>


Thanks @tconley1428 , I will keep an eye on this for streaming support, happy to test when it lands.

I upgraded and moved to use plugin, seems good so far, didn't notice any issues, will test some more. 
I didn't see any examples for doing pytest, seems `temporalio.testing.WorkflowEnvironment`  doesn't support plugins?

I seem to be using non-pydantic version for other workflows, so would run two workers for now.

Thanks for sharing community slack, will use that going forward for the questions.


</details>

<details>
<summary><strong>tconley1428</strong> commented on 2025-07-31 17:35:15.000 UTC</summary>

For pytest, you can see https://github.com/temporalio/sdk-python/blob/main/tests/contrib/openai_agents/test_openai.py. In our particular case the `WorkflowEnvironment` was already generated, so adding it there didn't come up, but that's something we can do.

</details>

<details>
<summary><strong>mav913ai</strong> commented on 2025-08-03 17:26:46.000 UTC</summary>

I am new to Temporal - just was trying to test it with OpenAI agents sdk, but couldn't since Runner.run_streamed is not supported. Has anyone figured out a workaround for this? 

We can't run the agent without streaming. 


</details>

<details>
<summary><strong>tconley1428</strong> commented on 2025-08-04 18:28:12.000 UTC</summary>

Streaming is not currently supported, as it is non-trivial to bring those updates back to the workflow from the activity in which the models are running. It is on the roadmap, but not currently supported. 

</details>


---

<a id="875"></a>

### #875: [Feature Request] Expose SDK metric for `worker._count_not_evict_count`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/875 |
| **State** | OPEN |
| **Author** | millerick (Michael Millerick) |
| **Created** | 2025-05-20 15:46:54.000 UTC (7 months ago) |
| **Updated** | 2025-05-27 19:32:29.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 3 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

We have found that periodically (for reasons that we still need to root cause) our workers run into a series of `Failed running eviction job for run ID 0196d798-a08b-7a00-9082-353865f449b4, continually retrying eviction. Since eviction could not be processed, this worker may not complete and the slot may remain forever used unless it eventually completes.` errors.  Then hours later when the pod containing the worker is terminated, we see this log: `Shutting down workflow worker, but 46 workflow(s) could not be evicted previously, so the shutdown may hang`.  For this particular worker, we run 50 concurrent workflows, which if I interpret things correct means that for several hours the worker was in an infinite loop trying to allow 46 workflows to evict and only able to process 4 workflow tasks at a time.

We would like to be able to detect and alert on these situations more proactively.  Usually we end up finding out about them because the worker set scales up to the maximum number of replicas for an extended period of time.

### Describe the solution you'd like

Since the code already keeps track of when it is in its own infinite loop trying to process the eviction, I think it would be useful to expose that information as a metric so that alerting tools can be used to alert when pods have been in that state for whatever the team monitoring the metric determines to be "too long".

### Additional context

If the team is bold enough, it could also be nice to do one or more of the following:
1. Provide a setting that forces the worker to shutdown if it has been in an eviction loop for too long.
2. Provide more threads than `max_concurrent_workflow_tasks` so that the ability to process workflows isn't as likely to be impeded by the infinite eviction loop.


#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-05-27 15:07:47.000 UTC</summary>

> for reasons that we still need to root cause

Hrmm, this is a fairly advanced/rare situation and should only occur if something is written improperly or something else unexpected is happening. We do prefer to expose these rare situations as logs instead of metrics. All SDK metrics are Core/Rust-based and we have no pure Python or Python-SDK-specific metrics.

Is it possible to use logs as the exposure mechanism? There are lots of other rare places where problems can occur that we log and do not treat as metrics or worker-shutdown-able situations. I will confer with team on their thoughts here for this specific situation.

I think you may be able to use `temporal_worker_task_slots_available` and `temporal_worker_task_slots_used` to determine if slots are never returned. Only kinda though, because metrics do not give the information that logs do.

</details>

<details>
<summary><strong>millerick</strong> commented on 2025-05-27 19:00:11.000 UTC</summary>

> I think you may be able to use `temporal_worker_task_slots_available` and `temporal_worker_task_slots_used` to determine if slots are never returned. Only kinda though, because metrics do not give the information that logs do.

Yes, using the `temporal_worker_task_slots_used` metric is less direct, but it may be usable for this purpose.  We have yet to run into a situation where all of the worker task slots are reported as used for legitimate reasons.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-05-27 19:32:01.000 UTC</summary>

:+1: After conferring, this may be a useful metric, but it may be a bit of a heavy lift for language-specific metrics in our Core-based SDKs for this type of metric. We will leave the issue open, but adding this metric may not be a priority for us at this time.

Reactions: 👍 1 😕 1

</details>


---

<a id="641"></a>

### #641: [Bug] Sending a query that is not registered in the workflow results in an "Encoded failure" when encode_common_attributes=True

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/641 |
| **State** | OPEN |
| **Author** | antmendoza (Antonio Mendoza Pérez) |
| **Created** | 2024-09-11 09:14:14.000 UTC (1y 3m ago) |
| **Updated** | 2024-12-05 17:54:26.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 3 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

List workflow queries using the UI (Queries tab) 

<img width="1132" alt="image" src="https://github.com/user-attachments/assets/5f644d8a-2ab1-4492-8e78-892e002ef0c8">

<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug
The UI shows "Encoded failure" but this is an error thrown by the worker when the UI tries to get the list of queries the workflow exposes with `queryType: "@@temporal-internal__list`

I get the same error when I use the client to send a query that is not registered in the workflow, and the client configuration has the `data_converter` which `failure_converter_class` has  `encode_common_attributes=True`


### Minimal Reproduction

> Full reproduction is here https://github.com/antmendoza/my-temporal-pocs/tree/main/python/_8156


clone https://github.com/temporalio/samples-python/tree/main/encryption 

Add the following modifications:
- Create a new DefaultFailureConverter with encode_common_attributes=True

```
class FailureConverterWithDecodedAttributes(temporalio.DefaultFailureConverter):
    def __init__(self) -> None:
        super().__init__(encode_common_attributes=True)
```


- Add `failure_converter_class=FailureConverterWithDecodedAttributes` to the client.
```
    client = await Client.connect(
        "localhost:7233",
        # Use the default converter, but change the codec
        data_converter=dataclasses.replace(
            temporalio.converter.default(),
            payload_codec=EncryptionCodec(),
            failure_converter_class=FailureConverterWithDecodedAttributes,
        ),
    )
```


After running a workflow, try to send a query that does not exist for the workflow.
```
        await client.get_workflow_handle("encryption-workflow-id").query("non-existing-query")
```

The query will fail with "Encoded failure"



#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2024-09-11 13:01:45.000 UTC</summary>

Hrmm, so this is a general Temporal Core SDK issue where query failures use the `Failure` structure but the server doesn't support that for query failures. I will confer with the team on this.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-10-10 21:22:29.000 UTC</summary>

I believe we have confirmed that this is due to the UI using query failures to populate the query list but encrypting these failures is incompatible with that. We have filed an issue with the UI team to support failure decryption.

Reactions: 👍 1

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-12-05 17:54:25.000 UTC</summary>

Note, there is a server side issue to fix query failure encoding: https://github.com/temporalio/temporal/issues/6845. If this becomes high enough priority, we can add SDK-side workarounds to keep query failures in plain text temporarily.

</details>


---

<a id="586"></a>

### #586: [Bug] workflow.start_child_workflow() behaving differently than workflow.execute_child_workflow() in tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/586 |
| **State** | OPEN |
| **Author** | cpg1111 (Christian Grabowski) |
| **Created** | 2024-07-18 00:23:24.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-18 13:47:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Hi there, I am writing tests for a workflow in which it spawns N child workflows using `workflow.start_child_workflow()`, places them in a list, and resolves the result later, like the following example:
```python
class Child:
    async def run(self) -> bool:
        return True

class Parent:
    async def run(self, n: int):
        children = []

        for _ in range(n):
            child = await workflow.start_child_workflow(Child, ...)
            children.append(child)

        ...
        for child in children:
            result = await child.result()
            # do something with result 
```

and test code like the following:
```python
async def test_parent():
    # setup test env worker with both workflows
    wf = await env.client.start_workflow("parent", ...)
    await env.sleep(duration=timedelta(seconds=5))
    await wf.result()
```

### Describe the bug

Even when I have that exact child workflow, I get an `InvalidStateError` saying `Result is not set`. If I do not put the handler in a list and immediately call `await child.result()` it blocks indefinitely. However if I use `workflow.execute_child_workflow()` everything works fine. It's also worth noting these workflows work fine in an actual execution, this issue only exists using the `testing.WorkflowEnvironment`.


### Minimal Reproduction

Write a workflow that calls multiple child workflows using `workflow.start_child_workflow()`, write a test with a single sleep before awaiting the parent's result.

### Environment/Versions

- Ubuntu 22.04 AMD EPYC 7352
- Temporal 1.22.5 and Python SDK 1.3.0
- from source

### Additional context

N/A


#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2024-07-18 13:33:11.000 UTC</summary>

> await child.result()

This is not valid API and a type checker should catch this. Starting a child workflow returns a `ChildWorkflowHandle` which is an `asyncio.Task` that is already waiting on result and should be awaited itself to get the result (e.g. just `await child`). This is unlike starting a workflow from a client which uses a workflow handle that can be fetched in other ways and therefore is not always a task and therefore does have a separate `.result()` to start the awaiting process.

</details>

<details>
<summary><strong>cpg1111</strong> commented on 2024-07-18 13:40:46.000 UTC</summary>

Ah ok, yes that fixed it. I didn't see anything around this in the docs regarding `ChildWorkflowHandle`, just that it inherits from `asycnio.Task`, I'd be happy to submit a PR including this, assuming the docs are autogenerated?

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-07-18 13:42:49.000 UTC</summary>

Unsure which docs you are referring to (there is https://github.com/temporalio/sdk-python/blob/main/README.md, https://python.temporal.io, and https://docs.temporal.io/develop/python/) but yes, we happily accept contributions on them all.

</details>

<details>
<summary><strong>cpg1111</strong> commented on 2024-07-18 13:45:24.000 UTC</summary>

I was referring to the second link, but I can submit PRs to the others where it makes sense.

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-07-18 13:46:59.000 UTC</summary>

API docs make sense. That is auto generated from docstrings yes. PRs to this repo welcome to update those API docs.

Reactions: 👍 1

</details>


---

<a id="476"></a>

### #476: [Bug] Failed during multiprocess queue poll for heartbeat

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/476 |
| **State** | OPEN |
| **Author** | wilsoniya (Michael Wilson) |
| **Created** | 2024-02-22 20:33:09.000 UTC (1y 10m ago) |
| **Updated** | 2024-03-28 12:42:23.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 5 |
| **Priority Score** | 5 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Operate a heavily-loaded multiprocess worker. 


### Describe the bug

In a heavily-loaded multiprocess worker with activities that may possibly be issuing heartbeats too frequently, I observe logging indicating the parent process times out reading from the  `_MultiprocessingSharedStateManager._heartbeat_queue` thus the worker tree effectively hangs, i.e., exhibits no further liveness in its ability to process tasks.  If this situation is unrecoverable, I would expect the worker process tree to terminate, thus allowing a restart (i.e., via systemd, k8s policy, etc.).

It's not clear to me why this timeout is happening, but it also results in the heartbeat queue filling up and blocking further progress on activities which heartbeat.

I see the following logging. First, presumably logs emitted by the parent of the process tree (i.e., the reader of the heartbeat queue): 

```json
{
  "git": "0bd697f642d775670c808da1e216c44764ddb854",
  "version": "1.2.0",
  "event": "Failed during multiprocess queue poll for heartbeat",
  "timestamp": "2024-02-13T19:33:27.414756Z",
  "logger": "temporalio.worker._activity",
  "level": "error",
  "exception": [
    {
      "exc_type": "TimeoutError",
      "exc_value": "",
      "syntax_error": null,
      "is_cause": false,
      "frames": [
        {
          "filename": "/opt/DPS/venv/lib/python3.8/site-packages/temporalio/worker/_activity.py",
          "lineno": 905,
          "name": "_heartbeat_processor",
          "line": "",
          "locals": {
            "self": "'<temporalio.worker._activity._MultiprocessingSharedStateManager object at 0x7f23'+9",
            "item": "\"(b'\\\\n$bc8c0612-11a9-4a58-ab6b-43d37f064f56\\\\x12\\\\x18replicate-treenode-20060\\\\x1a$8\"+115",
            "completion": "'<function _MultiprocessingSharedStateManager.unregister_heartbeater.<locals>.<la'+24",
            "fn": "'<function _ActivityInboundImpl.execute_activity.<locals>.<lambda> at 0x7f23412cb'+4"
          }
        },
        {
          "filename": "/opt/DPS/venv/lib/python3.8/site-packages/temporalio/worker/_activity.py",
          "lineno": 644,
          "name": "<lambda>",
          "line": "",
          "locals": {
            "details": "()",
            "heartbeat_with_context": "'<function _ActivityInboundImpl.execute_activity.<locals>.heartbeat_with_context '+18",
            "loop": "<_UnixSelectorEventLoop running=True closed=False debug=False>"
          }
        },
        {
          "filename": "/usr/lib/python3.8/concurrent/futures/_base.py",
          "lineno": 446,
          "name": "result",
          "line": "",
          "locals": {
            "self": "None",
            "timeout": "10"
          }
        }
      ]
    }
  ]
}
```
And second, from the a child in the process tree, as it attempts to push heartbeats to the queue:

```json
{
  "git": "0bd697f642d775670c808da1e216c44764ddb854",
  "version": "1.2.0",
  "event": "ProgressPipe callback raised exception",
  "timestamp": "2024-02-08T21:26:47.729792Z",
  "logger": "vault.storage_manager.stream",
  "level": "error",
  "exception": [
    {
      "exc_type": "Full",
      "exc_value": "",
      "syntax_error": null,
      "is_cause": false,
      "frames": [
        {
          "filename": "/opt/DPS/vault-site/vault/storage_manager/stream.py",
          "lineno": 250,
          "name": "_invoke_callback",
          "line": "",
          "locals": {
            "self": "<vault.storage_manager.stream.ProgressPipe object at 0x7f78d9ab2eb0>",
            "e": "Full()"
          }
        },
        {
          "filename": "/opt/DPS/vault-site/vault/temporal/replication/activities.py",
          "lineno": 225,
          "name": "<lambda>",
          "line": "",
          "locals": {
            "n": "1960837120",
            "tree_node": "<TreeNode: TreeNode object (278873)>"
          }
        },
        {
          "filename": "/opt/DPS/venv/lib/python3.8/site-packages/temporalio/activity.py",
          "lineno": 274,
          "name": "heartbeat",
          "line": "",
          "locals": {
            "details": "(1960837120, 2077125573)",
            "heartbeat_fn": "<function _execute_sync_activity.<locals>.<lambda> at 0x7f78dab99790>"
          }
        },
        {
          "filename": "/opt/DPS/venv/lib/python3.8/site-packages/temporalio/worker/_activity.py",
          "lineno": 743,
          "name": "<lambda>",
          "line": "",
          "locals": {
            "details": "(1960837120, 2077125573)",
            "heartbeat_sender": "'<temporalio.worker._activity._MultiprocessingSharedHeartbeatSender object at 0x7'+12",
            "info": "\"Info(activity_id='3', activity_type='adjust_replica', attempt=1, current_attempt\"+875"
          }
        },
        {
          "filename": "/opt/DPS/venv/lib/python3.8/site-packages/temporalio/worker/_activity.py",
          "lineno": 924,
          "name": "send_heartbeat",
          "line": "",
          "locals": {
            "self": "'<temporalio.worker._activity._MultiprocessingSharedHeartbeatSender object at 0x7'+12",
            "task_token": "\"b'\\\\n$bc8c0612-11a9-4a58-ab6b-43d37f064f56\\\\x12\\\\x19replicate-treenode-278873\\\\x1a$5\"+110",
            "details": "(1960837120, 2077125573)"
          }
        },
        {
          "filename": "<string>",
          "lineno": 2,
          "name": "put",
          "line": "",
          "locals": {
            "self": "<AutoProxy[Queue] object, typeid 'Queue' at 0x7f78dab2b070>",
            "args": "\"((b'\\\\n$bc8c0612-11a9-4a58-ab6b-43d37f064f56\\\\x12\\\\x19replicate-treenode-278873\\\\x1a\"+150",
            "kwds": "{}"
          }
        },
        {
          "filename": "/usr/lib/python3.8/multiprocessing/managers.py",
          "lineno": 850,
          "name": "_callmethod",
          "line": "",
          "locals": {
            "self": "<AutoProxy[Queue] object, typeid 'Queue' at 0x7f78dab2b070>",
            "methodname": "put",
            "args": "\"((b'\\\\n$bc8c0612-11a9-4a58-ab6b-43d37f064f56\\\\x12\\\\x19replicate-treenode-278873\\\\x1a\"+150",
            "kwds": "{}",
            "conn": "<multiprocessing.connection.Connection object at 0x7f78e1c62460>",
            "kind": "#ERROR",
            "result": "Full()"
          }
        }
      ]
    }
  ]
}
```

### Minimal Reproduction

Unfortunately, I have no reproduction, but I do have some analysis to share:

I think the log message `Failed during multiprocess queue poll for heartbeat` is potentially misleading, as [raised here](https://github.com/temporalio/sdk-python/blob/1.5.0/temporalio/worker/_activity.py#L908-L909) on the top `Exception` type. Digging into the first stack trace above, the exception is a `TimeoutError` and the point of origin appears to be here: https://github.com/temporalio/sdk-python/blob/1.5.0/temporalio/worker/_activity.py#L644 - the body of that expression ends with `Future.result(10)`, which can raise `TimeoutError`.  So the `TimeoutError` arises not from queue polling, but from executing a coroutine on an event loop. As to why the `Future.result(10)` call times out, I can't understand why.

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: `5.4.0-42-generic #46-Ubuntu SMP Fri Jul 10 00:24:02 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux`
- Temporal Version: 1.22.1, sdk-python 1.5.0
- Using the binary distribution, operated natively, i.e., non-containerized.



#### Comments (5)

<details>
<summary><strong>cretz</strong> commented on 2024-02-26 15:39:57.000 UTC</summary>

Hrmm, so in a well-running multiprocess setup, a heartbeat should be immediate and barely queued. Because the primary process should be processing the cross-process heartbeat almost immediately.

> So the TimeoutError arises not from queue polling, but from executing a coroutine on an event loop.

Well, it's more like from the lack of queue polling. I believe if the heartbeat queue is not being polled/processed fast enough, this is where this call gets hung.

> As to why the Future.result(10) call times out, I can't understand why.

The only reason why I can think this would fail is if your primary process is not processing asyncio quickly enough. This often happens if you're doing a blocking call in some `async def` somewhere but I suppose could be caused by sending too many heartbeats too fast (or a combination of both things).

I am not sure there is much that can be done here. I believe the worker is not processing heartbeats faster than you are sending them and at some point it's a timeout. We can't queue heartbeats indefinitely. Open to suggestions though. For whatever suggestion, we likely need a replication to even confirm it solves your issue.

Alternatively, you may consider standard threaded (or async) activities that you, inside the activity, invoke multiprocessing.

</details>

<details>
<summary><strong>wilsoniya</strong> commented on 2024-02-29 22:27:42.000 UTC</summary>

Thanks for replying and generally being so responsive!

> The only reason why I can think this would fail is if your primary process is not processing asyncio quickly enough. This often happens if you're doing a blocking call in some async def somewhere but I suppose could be caused by sending too many heartbeats too fast (or a combination of both things).

I suspect you're right. I'm using Pydantic 2.x, and [using the custom data converter recipe you provide](https://github.com/temporalio/samples-python/tree/main/pydantic_converter). The activity with frequent heartbeats is sending the details parameter, [thus invoking the data converter](https://github.com/temporalio/sdk-python/blob/1.5.0/temporalio/worker/_activity.py#L250-L252) (if I understand correctly). Pydantic 2.x appears to have some serious unresolved perf issues, so I'm wondering if the primary process is bogged down doing Pydantic serde of heartbeat details. I'm going to experiment with omitting heartbeat details and see if that resolves the issue.

> I am not sure there is much that can be done here. I believe the worker is not processing heartbeats faster than you are sending them and at some point it's a timeout. We can't queue heartbeats indefinitely. Open to suggestions though. For whatever suggestion, we likely need a replication to even confirm it solves your issue.

Is this `return` call potentially problematic? 

https://github.com/temporalio/sdk-python/blob/4037dd4ce57461124612a9536f534abc05a7eb79/temporalio/worker/_activity.py#L908-L910

It seems like returning from `_MultiprocessingSharedStateManager._heartbeat_processor()` when we catch a `TimeoutError` when evaluating the heartbeat future here 

https://github.com/temporalio/sdk-python/blob/4037dd4ce57461124612a9536f534abc05a7eb79/temporalio/worker/_activity.py#L644-L646

will result in processing no further heartbeats, and thus the heartbeat queue filling up and blocking further activity liveness. I have an incomplete understanding of this code, but I suspect that the error I'm describing is unrecoverable. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-03-01 13:31:40.000 UTC</summary>

> Is this return call potentially problematic?

I fear it will encourage lossy heartbeats as opposed to just stopping the processor. If we had an easy way to surface the exception we would, but in the meantime I am worried about just accepting some heartbeats and not others

> will result in processing no further heartbeats, and thus the heartbeat queue filling up and blocking further activity liveness

Yes, this is a dangerous state to get in. I am not exactly sure what we should do when the shared heartbeat processor fails. It should never fail. I do want to avoid adding some kind of advanced code (e.g. draining just this specific activity's heartbeat queue somehow) to this never-should-happen failure state. Really it shouldn't even be a queue, it should be almost immediate where the queue never has a size more than one.

Open to suggestions about how to better surface this. Should I try to find a way to throw an exception and shut the whole worker down?

</details>

<details>
<summary><strong>wilsoniya</strong> commented on 2024-03-27 23:17:14.000 UTC</summary>

Sorry for the delayed response.

> Should I try to find a way to throw an exception and shut the whole worker down?

That would be ideal for my use case. But more generally, I think encountering situations one has consciously conceived of as "impossible" merits a hard crash. And given a choice between a process crashing or technically persisting in a dysfunctional state, I think the former is more conducive to detecting and recovering from a problem. 

Thanks!

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-03-28 12:41:02.000 UTC</summary>

With Temporal, we often favor partially disfunctional workers that still work for other things (e.g. things that aren't heartbeating and workflows) over fail-fast. But maybe we can make it an option.

But I am now wondering if we should deprecate multiprocess activities and instead tell users they can use normal Python subprocessing in their activities if they _must_ have separate processes. It doesn't have much value in the SDK anymore than any other form of remote activity would. The details of dealing with out-of-process activities is probably best left to the (advanced) user.

</details>


---

<a id="321"></a>

### #321: [Feature Request] Temporal exceptions from converters and codecs should fail the workflow not task

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/321 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-05-24 20:17:13.000 UTC (2y 7m ago) |
| **Updated** | 2023-07-05 15:34:46.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

Need to let conversion and encoding/decoding fail workflow instead of just task.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2023-07-05 15:34:46.000 UTC</summary>

We have merged #329 which does let conversion fail workflow, but we haven't done codec because it is more complicated and we need more consensus here.

</details>


---

<a id="1250"></a>

### #1250: RuntimeError when starting Temporal test server in Python SDK

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1250 |
| **State** | OPEN |
| **Author** | grinyael86 |
| **Created** | 2025-11-17 14:18:31.000 UTC (1 months ago) |
| **Updated** | 2025-12-11 23:25:41.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

## Expected Behavior

The temporal test server is downloaded and running

## Actual Behavior

When trying to start the Temporal test server using the Python SDK, I encounter the following error:

`RuntimeError: Failed starting test server: error sending request for url (https://temporal.download/temporal-test-server/default?arch=amd64&platform=linux&sdk-name=sdk-python&sdk-version=1.17.0)
`

The issue does not always happen, and sometimes it works fine - no blocking firewall or any network restriction from my side

## Steps to Reproduce the Problem

Create a test that has a worker who uses that as a client:

`   
async with await WorkflowEnvironment.start_time_skipping() as env:
   yield env.client
`

like:

`
async with Worker(
            client=temporal_env,
            task_queue="my_job_queue",
            workflows=[MyWorkflow],
            activities=[my_activity],
            activity_executor=activity_executor,
        ):
            result = await temporal_env.execute_workflow(
                WorkflowsNames.MY_WORKFLOW,
                workflow_input,
                id=f"test-workflow-{workflow_input.data.trans_id}",
                task_queue="MY_job_queue",
                execution_timeout=timedelta(minutes=10),
            )
`

a second way to reproduce:

run for linux:

`
curl -v "https://temporal.download/temporal-test-server/default?arch=amd64&platform=linux&sdk-name=sdk-python&sdk-version=1.17.0"
`

run for windows:

`
curl -v "https://temporal.download/temporal-test-server/default?arch=amd64&platform=windows&sdk-name=sdk-python&sdk-version=1.17.0"
`

and check if it's blocked or not

#### Comments (2)

<details>
<summary><strong>vladislavkoz</strong> commented on 2025-11-18 14:31:51.000 UTC</summary>

Have similar problem with 

 Failed starting Temporal dev server: HTTP status server error (500 Internal Server Error) for url (https://temporal.download/cli/default?arch=arm64&platform=darwin&format=tar.gz&sdk-name=sdk-python&sdk-version=1.19.0

</details>

<details>
<summary><strong>grinyael86</strong> commented on 2025-11-19 07:34:47.000 UTC</summary>

For now, I downloaded the server to my project and configured the temporal test environment to point to it.

</details>


---

<a id="928"></a>

### #928: [Feature Request] Research and make SDK free-threading capable/compatible

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/928 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-27 15:57:23.000 UTC (6 months ago) |
| **Updated** | 2025-06-27 15:57:23.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Describe the solution you'd like

Kind of related to #863. Per https://pyo3.rs/v0.25.1/free-threading.html this should be a simple opt-in, but we may have struggles with Python Protobuf (have to confirm they are free-threading compat too). Need to research first and confirm findings and what we'd have to do if it's anything significant. We will also need to have CI-based confirmation of our compatibility with a free-threading runtime.


---

<a id="697"></a>

### #697: [Feature Request] Handle edge case of recursive exceptions in failure converter

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/697 |
| **State** | OPEN |
| **Author** | yunmanger1 (German Ilin) |
| **Created** | 2024-12-03 21:56:44.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-25 01:01:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

It is kind of an easy mistake to do in python:

```
try:
    raise ValueError("test")
except Exception as e:
    raise e from e
```

The re-raised exception will have `e.__cause__` referencing itself resulting in failure to serialize error and python sdk won't report anything resulting in retries and startToClose timeouts.

### Describe the solution you'd like

Handle a case  when `e.__cause__ == e` in DefaultFailureConverter. Created a dummy pull request #696

### Additional context

https://temporalio.slack.com/archives/CTT84RS0P/p1719632201314119

#### Comments (4)

<details>
<summary><strong>cretz</strong> commented on 2024-12-03 22:01:04.000 UTC</summary>

> python sdk won't report anything

I think this is the primary bug. There are situations where recursion and stack overflow can occur in serialization, and the linked PR naively only helps the case of the cause being the same as itself (but if it was two causes deep that recursed, the issue would still appear). We just need to make it clear when it happens (or any other failure serialization happens).

If we are indeed not reporting anything, we need to fix that. #685 is related when failing to build a failure.

</details>

<details>
<summary><strong>yunmanger1</strong> commented on 2024-12-04 18:07:54.000 UTC</summary>

You are right that it doesn't solve all cycles. Not sure if your case happens in practice. What needs to happen to have an exception cycled after 2 or 3 steps?

Maybe the solution could be just have a max depth of 10 let's say. During serialization you truncate too  deep stacks anyway. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-12-04 19:25:20.000 UTC</summary>

I think we just need to log the failure of serializing this (assume there's a stack depth/overflow exception but is not visible due to #685)

</details>

<details>
<summary><strong>Ye123459</strong> commented on 2024-12-25 01:00:57.000 UTC</summary>

When handling exceptions in DefaultFailureConverter, to avoid e.__cause__ == e problems caused by reraising exceptions, you can take the following solutions:

Avoid using the from statement when catching and rethrowing exceptions:

Reraising the exception directly without specifying from avoids the problem of __cause__ pointing to itself.
Check and reset the __cause__ attribute:

After catching the exception, check the __cause__ attribute and reset it to None if it points to itself.
Custom exception handling logic:

Add logic to DefaultFailureConverter to ensure that __cause__ does not point to itself when handling exceptions.
Here is a specific code example:

class DefaultFailureConverter:
    def convert(self, exception):
        try:
            raise exception
        except Exception as e:
            if e.__cause__ is e:
                e.__cause__ = None
            raise e

</details>


---

<a id="622"></a>

### #622: [Bug] unable to install temporal on python 3.11-alpine3.16

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/622 |
| **State** | OPEN |
| **Author** | hansraj1999 (Hansraj Deghun) |
| **Created** | 2024-08-26 12:11:27.000 UTC (1y 4m ago) |
| **Updated** | 2025-11-14 17:39:48.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 👀 1 |

#### Description


Using cached temporalio-1.7.0.tar.gz (1.3 MB)
Installing build dependencies ... error
error: subprocess-exited-with-error
× pip subprocess to install build dependencies did not run successfully.
│ exit code: 1
╰─> [10 lines of output]
Collecting poetry-core>=1.0.0
Using cached poetry_core-1.9.0-py3-none-any.whl.metadata (3.5 kB)
Collecting setuptools
Using cached setuptools-73.0.1-py3-none-any.whl.metadata (6.6 kB)
Collecting wheel
Using cached wheel-0.44.0-py3-none-any.whl.metadata (2.3 kB)
Collecting setuptools-rust
Using cached setuptools_rust-1.10.1-py3-none-any.whl.metadata (9.2 kB)
ERROR: Could not find a version that satisfies the requirement protoc-wheel-0 (from versions: none)
ERROR: No matching distribution found for protoc-wheel-0
end of output]

note: This error originates from a subprocess, and is likely not a problem with pip.
error: subprocess-exited-with-error

base image python 3.11-alpine3.16
getting this error while running python -m pip install temporalio command



#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-08-26 12:25:10.000 UTC</summary>

We do not provide Alpine/musl builds in PyPI. You will have to build the SDK yourself. See https://github.com/temporalio/sdk-python?tab=readme-ov-file#building. I am a bit surprised that it is requiring protoc wheel still however.

Reactions: 👍 1 👎 2 😕 1

</details>

<details>
<summary><strong>nebenwelt</strong> commented on 2025-11-14 17:39:48.000 UTC</summary>

> We do not provide Alpine

Very bad. Alpine is a very popular lightweight Python image.

</details>


---

<a id="213"></a>

### #213: [Feature Request] Confirm vscode debuggability within sandbox

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/213 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-11-28 12:52:15.000 UTC (3y 1m ago) |
| **Updated** | 2022-11-28 12:52:15.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 0 |
| **Priority Score** | 4 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

User reported issue debugging while in sandbox


---

<a id="1186"></a>

### #1186: [Bug] Incomplete fix for #1091 - conversation_id still required in _TemporalModelStub.get_response()

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1186 |
| **State** | OPEN |
| **Author** | danielmillerp (Daniel Miller) |
| **Created** | 2025-10-24 20:54:57.000 UTC (2 months ago) |
| **Updated** | 2025-11-03 18:06:51.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

  I'm trying to use the Temporal Python SDK's OpenAI agents integration plugin to build and run agents with Temporal workflows.

### Describe the bug

When using the Temporal OpenAI agents plugin, the _TemporalModelStub.get_response() method throws a TypeError because the optional parameters lack default
  values:

  TypeError: _TemporalModelStub.get_response() missing 1 required keyword-only argument: 'conversation_id'

  This issue was previously reported in #1091 (https://github.com/temporalio/sdk-python/issues/1091) and supposedly fixed by PR #1092, but the fix didn't fully
  resolve the problem. The PR added the parameters to the method signature but didn't give them default values, so they're still required at runtime despite
  being marked as Optional.

### Minimal Reproduction

  1. Install temporalio 1.18.1 and openai-agents 0.2.7
  2. Set up any basic Temporal workflow using the OpenAI agents plugin
  3. Run the workflow
  4. Observe TypeError when the plugin tries to call get_response()
 
### Environment/Versions

<!-- Please complete the following information where relevant. -->

  - OS and processor: macOS Darwin 24.6.0 (M1)
  - Temporal SDK Version: 1.18.1
  - OpenAI Agents Version: 0.2.7
  - Python Version: 3.13

### Additional context

 Issue #1091 identified this problem and PR #1092 attempted to fix it by adding the conversation_id, previous_response_id, and prompt parameters. However, the
  fix was incomplete - the parameters were added without default values.

  Current implementation in temporalio/contrib/openai_agents/_temporal_model_stub.py:60-72:
  async def get_response(
      ...
      *,
      previous_response_id: Optional[str],
      conversation_id: Optional[str],
      prompt: Optional[ResponsePromptParam],
  ) -> ModelResponse:

  Required fix:
  async def get_response(
      ...
      *,
      previous_response_id: Optional[str] = None,
      conversation_id: Optional[str] = None,
      prompt: Optional[ResponsePromptParam] = None,
  ) -> ModelResponse:

  Adding = None makes these parameters truly optional, allowing the plugin to work without requiring callers to explicitly pass these arguments. Without this,
  the TypeError persists despite the attempted fix.


#### Comments (3)

<details>
<summary><strong>tconley1428</strong> commented on 2025-10-27 14:18:05.000 UTC</summary>

We aren't intending to maintain backwards compatibility with any arbitrary version of `openai-agents` given that it is developing rapidly. Our current (in main) requirements for it are `"openai-agents>=0.3,<0.5",`. Do you have a compelling reason not to upgrade? Agents is currently on `0.4.2`

</details>

<details>
<summary><strong>danielmillerp</strong> commented on 2025-11-02 20:57:46.000 UTC</summary>

> We aren't intending to maintain backwards compatibility with any arbitrary version of `openai-agents` given that it is developing rapidly. Our current (in main) requirements for it are `"openai-agents>=0.3,<0.5",`. Do you have a compelling reason not to upgrade? Agents is currently on `0.4.2`

I see the same error in version 0.4.2

</details>

<details>
<summary><strong>tconley1428</strong> commented on 2025-11-03 18:06:51.000 UTC</summary>

OpenAI Agents should be passing the conversation_id. https://github.com/openai/openai-agents-python/blob/a30c32e722a4cdb761fe8b250606757ec8581296/src/agents/run.py#L1672 Do you have a stacktrace for the failure, and can you confirm that the update to `0.4.2` took place?

</details>


---

<a id="1049"></a>

### #1049: [Feature Request] Support access to metric meter in multi-processed workers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1049 |
| **State** | OPEN |
| **Author** | gregbrowndev (Greg Brown) |
| **Created** | 2025-08-24 16:52:34.000 UTC (4 months ago) |
| **Updated** | 2025-09-03 23:46:02.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

Currently, the SDK doesn't extend custom metric support via the Runtime's MetricMeter to activities running within a multi-processed worker. This means users have to figure out how to support this themselves, which adds complexity to the project and may be infeasible for some.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Ideally, I'd hope to see metrics wired up across the process pool out of the box. So following a similar approach to the existing heartbeat manager, metrics emitted by the child process would be sent via a multiprocessing queue to the parent worker process.

Possible high-level approach:

- Provide `temporalio.common.MetricMeter` implementation alternate to [_MetricMeter](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/runtime.py#L480) that is set in [`_Context`](https://github.com/temporalio/sdk-python/blob/607641bf1e8250699b9c7ae0e87230d43b26c2ff/temporalio/activity.py#L190) automatically in process pool workers.
- Instead of being backed by `temporalio.bridge.metric.MetricMeter`, they would push messages onto a queue consumed by the parent process, which would then rely those actions against the real `temporalio.bridge.metric.MetricMeter`.

This might be easier Python side, than trying to wire up the Rust code under the hood.

Worth pointing out there are on-going proposals to do this natively in OTEL: https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/4968.

I'd be happy to support this work, if you think the plan sounds reasonable. 

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

#### **Background**

The previous work to add custom metric support, https://github.com/temporalio/sdk-python/pull/384, at the time didn't include support for multi-processed worker:

> NOTE: This does not return a metric meter for sync activities that are non-threaded (i.e. multiprocess) because a meter cannot be shared across processes and it's a large effort to support metric shipping across processes for this rarely used activity type

#### **Case to support this feature**

The multi-processed worker provides a lot of value, at least on my project which uses Temporal for its typical system integration use cases but also for managing some reasonably heavy CPU bound workloads (e.g. processing PDFs, NLP, small batch jobs, etc.) all within one tool. 

It might be the least frequently used worker type, but it provides several key benefits of its own:

- It highlights a clear design principle to split up CPU bound workloads at the workflow level, i.e. fanning out, and then keep each activity single threaded/single processed to optimise performance, avoid under/over utilisation of the underlying CPU cores, and support better auto-scaling decisions. Its easier to understand when size and scheduling of tasks on the process pool is managed by the worker itself, rather than a free-for-all that could occur if async/threaded activities were to manage their own/shared processes or pools.
- It provides out of the box support for heartbeating in activities running in the process pool, which users would need to wire up themselves if managing processes in the asyncio/threaded workers.
- Python is a common data science language, so a process pool based worker would be the go to over async/threaded

#### **Existing solution** 

Besides having to set up and configure a second OTEL metrics toolchain (`MeterProvider`, processors, exporters, and using different `meter` and `metric` classes), users would need to:

- ensure the toolchain is initialised correctly to properly configure the process pool
- be concerned with different default `mp_context`  behaviours on different OSs, e.g. maybe they develop on MacOS which defaults to `spawn`, but deploy in a linux based image, which defaults to `fork` ([the default will change to `forkserver` Python 3.14](https://docs.python.org/3.14/whatsnew/3.14.html#incompatible-changes)) 
- ensure with the global metric provider isn't accidentally inherited by the child process, which can cause deadlocks, or understand fork pre init hooks. 

Once the process pool is configured, we'd then need to get metrics out of the process correctly, e.g.:

- Tagging metrics with the process ID `pid` and using `OTLPMetricExporter` provides a simple solution, since each process would just push its own metrics to a collector. However, this would lead to high-cardinality, increased costs, and further complexity down the line.

  > Note: the metric payloads scraped/pushed to the backend need to be uniquely labeled, otherwise you get out-of-order writes, conflicts, and are otherwise left with meaningless metric values interleaved from multiple ambiguous sources. (It can also cause you to exceed the platform's data points per minute (DPM), which in Grafana Clouds case DPM=1, i.e. scrape/emit every 60s. 

- The initial simplicity would then come at the cost of having to set up some external metric aggregation. E.g. within an OTEL collector's [transformprocessor](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/transformprocessor#supported-functions) using [aggregate_on_attributes](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/v0.128.0/processor/transformprocessor#aggregate_on_attributes) to aggregate out the PID label. This also requires sensitive handling using `interval`, `batch`, `metricstarttime`, etc. to ensure you capture all the metrics within one interval.

#### Comments (3)

<details>
<summary><strong>tconley1428</strong> commented on 2025-08-25 17:24:29.000 UTC</summary>

This does seem like a valuable feature for multi process workers, but that isn't a very large scenario at the moment and we have limited bandwidth. We'll put it up for triage, but it isn't very likely to be prioritized soon. 

</details>

<details>
<summary><strong>gregbrowndev</strong> commented on 2025-08-26 22:46:42.000 UTC</summary>

Thanks for considering the request @tconley1428 🙏🏻 

I understand the bandwidth constraints (I hope the Nexus work is going well!). Would it be helpful to receive contributions in this area? I'd quite like to drive forward observability related features for my own project's sake and to give back to the project. 

---

I did spend quite a bit of time over the weekend digging into the Rust SDK code to better understand whats happening under the hood. 

For me, most of the SDK's latency histogram metric are basically a bit useless and expensive, since we can't specify bucket overrides in `OtelConfig` like you can in the Prometheus config and all of my tasks are long running and even `scheduled_to_start` latencies go higher than the [default settings](https://github.com/temporalio/sdk-core/blob/d34c1d6d393462a816baf2469c256a21ffbaf196/core/src/telemetry/metrics.rs#L675-L725) (very much specific to my own use case, I know). So even if I solved this issue, I'd still be constrained by the bucket settings in the Rust code. Though, ideally, we'd be able to export exponential histogram formats.

Additionally, the currently metric meter doesn't support other advanced features like [capturing trace exemplars](https://github.com/open-telemetry/opentelemetry-python/blob/1aaa2a25872c36aee208442ff654a67f5daa5736/opentelemetry-sdk/src/opentelemetry/sdk/metrics/_internal/__init__.py#L427-L437) (trace-to-metrics), as it would mean adding that to the abstraction / dynamically loading OTEL's tracer within the metric meter some how...

So I'm just wondering now whether the SDK would be better off with a Python-first OTEL integration built on top of the `MetricBuffer` to access the raw SDK datapoints and then have access to all the features, like `views`, `resource`, tracing-integration, etc. all configurable within the standard Python OTEL SDK. 

Is that something that is being considered? Otherwise, I'd be happy to be able to contribute towards these missing features if the [language] -> Rust approach is the intended solution going forward.

Cheers

</details>

<details>
<summary><strong>Sushisource</strong> commented on 2025-09-03 23:46:02.000 UTC</summary>

@gregbrowndev Thanks for all this great feedback.

So, I agree that probably the best option here is to use the `MetricBuffer` as you suggest, so that you can directly do the more advanced things you'd like to do in Python using the exporter directly. It is, indeed, exactly what `MetricBuffer` is intended for.

Something using it to export via OTel could I think be added to contrib here: https://github.com/temporalio/sdk-python/blob/main/temporalio/contrib/opentelemetry.py and would be a welcome contribution

</details>


---

<a id="891"></a>

### #891: [Feature Request] Support executing Workflow directly

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/891 |
| **State** | OPEN |
| **Author** | Kilo59 (Gabriel) |
| **Created** | 2025-06-06 17:54:34.000 UTC (7 months ago) |
| **Updated** | 2025-06-09 20:47:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

I'm often frustrated when I have some piece business logic as part of a Temporal Workflow that I also want to execute outside of a Temporal Worker. I would like to be able to avoid duplicating this code as much as possible.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

Being able to call a `Workflow.run` method directly rather than only being able to run it via a temporal worker is one way to get around this issue.

However the below example will throw a `temporalio.workflow._NotInWorkflowEventLoopError: Not in workflow event loop` error.


```python
import asyncio
import dataclasses

from temporalio import activity, workflow


@dataclasses.dataclass
class MyArgs:
    to_greet: str


@workflow.defn
class GreetingWorkflow:
    @workflow.run
    async def run(self, arg: MyArgs) -> list[str]:
        log: list[str] = []

        hello = await workflow.execute_activity(
            GreetingActivities.say_hello,
            arg.to_greet,
        )
        print(hello)
        log.append(hello)

        goodbye = await workflow.execute_activity(
            GreetingActivities.say_goodbye,
            arg.to_greet,
        )
        print(goodbye)
        log.append(goodbye)
        return log


class GreetingActivities:
    @activity.defn
    async def say_hello(self, to_greet: str) -> str:
        return f"Hello {to_greet}!"

    @activity.defn
    async def say_goodbye(self, to_greet: str) -> str:
        return f"Goodbye {to_greet}!"


if __name__ == "__main__":
    wf = GreetingWorkflow()
    asyncio.run(wf.run(MyArgs(to_greet="world")))
```


### Additional context

<!-- Add any other context or screenshots about the feature request here. -->

I don't particular care about running the workflow per se, I just would like to avoid duplicating the "activity" orchestration logic in the workflow layer.

Also when run this way I don't expect to retain the standard temporal "durable execution" guarantees. 

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2025-06-06 19:25:28.000 UTC</summary>

> Being able to call a Workflow.run method directly rather than only being able to run it via a temporal worker is one way to get around this issue.

Those calls like `workflow.execute_activity(...` are durable calls that only make sense when run in a worker-based environment. They make no sense outside of a durable context. It seems the request is to run Temporal without a server. It would not be reasonable to effectively embed all server logic like retries and such into the SDK, nor do we expect the primitives to be "durable optional".

> Also when run this way I don't expect to retain the standard temporal "durable execution" guarantees.

The APIs are only designed for use in a durable environment. If you must have a durable and non-durable way to run the same code, you may consider your own abstraction that checks `workflow.in_workflow()` to fall back to whatever non-durable form you prefer (e.g. your durable-optional form of execute activity could fall back to just invoking with manual retry logic). But Temporal workflow primitives require the server to be present and require durability.

</details>

<details>
<summary><strong>Kilo59</strong> commented on 2025-06-09 19:03:46.000 UTC</summary>

@cretz 

Yeah (as I said) I don't care about the durable execution when calling the workflow this way.

I assumed I was going to have to create my own abstraction, but I was hoping to avoid that.
For example is there a way to register a standard async event loop as "Workflow EventLoop" so that it doesn't throw this `temporalio.workflow._NotInWorkflowEventLoopError: Not in workflow event loop` error?

But assuming no, back to creating my own abstraction...
Is there some kind of Workflow activity method registry that I can pull from? That way I could programatically know what activity methods the workflow would call?
I would think something like this might also be useful when testing workflow business logic.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-06-09 20:41:18.000 UTC</summary>

> For example is there a way to register a standard async event loop as "Workflow EventLoop" so that it doesn't throw this temporalio.workflow._NotInWorkflowEventLoopError: Not in workflow event loop error?

I am afraid not. The workflow event loop is a specially-crafted event loop to be deterministic and has certain things the rest of the workflow calls expect to be present. You can check `workflow.in_workflow()` and only call `workflow.` module calls if that is true.

> Is there some kind of Workflow activity method registry that I can pull from? That way I could programatically know what activity methods the workflow would call?

To clarify, are you asking which activities are available to a workflow? Technically you can call any activity. While there are overloads for type-safe activity invocation, technically you can pass any string as the activity name. And you can invoke activities that could be on any other task queue on any other worker (even in a different programming language). So there is no centralized place to determine all activities a workflow could call. You can keep track of the activities you pass to your worker if you want to know which activities are available on that task queue (assuming you're not using dynamic activities).

</details>


---

<a id="782"></a>

### #782: [Bug] cancelled timer callback causes asyncio.exceptions.InvalidStateError

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/782 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-03-05 02:07:47.000 UTC (10 months ago) |
| **Updated** | 2025-03-07 13:11:34.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

The workflow below succeeds, but an exception occurs and is logged by the worker. In the example below this exception does not cause a workflow or workflow task failure, but we should nevertheless prevent it. What happens is:

1. An `asyncio.Task` is created, which blocks on a timer.
2. The task is cancelled, which throws `asyncio.CancelledError` into the coroutine, and cancels the `sleep` future.
3. But SDK internals have set a callback that attempts to resolve the future. This callback still fires at the set timer time, despite the future having been cancelled in the interim, causing `asyncio.exceptions.InvalidStateError`. See

https://github.com/temporalio/sdk-python/blob/49ca10e413ba67e1adfeed3b5577cb4f5b007e54/temporalio/worker/_workflow_instance.py#L1453-L1457


```
🔴 caught asyncio.CancelledError when sleeping in task
Exception in callback _WorkflowInstanceImpl.workflow_sleep.<locals>.<lambda>() at /Users/dan/src/temporalio/sdk-python/temporalio/worker/_workflow_instance.py:1456
handle: <_TimerHandle when=1741139892.760706 _WorkflowInstanceImpl.workflow_sleep.<locals>.<lambda>() at /Users/dan/src/temporalio/sdk-python/temporalio/worker/_workflow_instance.py:1456>
Traceback (most recent call last):
  File "/Users/dan/.local/share/uv/python/cpython-3.13.1-macos-aarch64-none/lib/python3.13/asyncio/events.py", line 89, in _run
    self._context.run(self._callback, *self._args)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/dan/src/temporalio/sdk-python/temporalio/worker/_workflow_instance.py", line 1456, in <lambda>
    lambda: fut.set_result(None),
            ~~~~~~~~~~~~~~^^^^^^
asyncio.exceptions.InvalidStateError: invalid state
Result: Hello, World!
```


```python
import asyncio
import uuid

from temporalio import workflow
from temporalio.client import Client
from temporalio.worker import Worker


@workflow.defn
class SayHello:
    async def _my_task(self) -> None:
        try:
            await workflow.sleep(6, summary="my task")
        except asyncio.CancelledError:
            print("🔴 caught asyncio.CancelledError when sleeping in task")

    @workflow.run
    async def run(self) -> str:
        task = asyncio.create_task(self._my_task())
        await workflow.sleep(2, summary="let the loop start")

        try:
            task.cancel()
            await task
        except BaseException:
            assert False, "unreachable"

        await workflow.sleep(15)
        return "Hello, World!"


async def main():
    client = await Client.connect("localhost:7233")
    task_queue = "timer-callback-exception-task-queue"
    async with Worker(
        client,
        task_queue=task_queue,
        workflows=[SayHello],
    ):
        result = await client.execute_workflow(
            SayHello.run,
            id=str(uuid.uuid4()),
            task_queue=task_queue,
        )
        print(f"Result: {result}")


if __name__ == "__main__":
    asyncio.run(main())
```

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-07 13:11:33.000 UTC</summary>

:+1: Should just not call `set_result` on an already done future (and find where else we might be doing that). This is probably just us (me) not properly thinking about the fact that in Python's `asyncio.Future` set-result-if-already-done is not a no-op (as it is in other langs and as `concurrent.futures.Future` result setter was until 3.8).

</details>


---

<a id="454"></a>

### #454: [Feature Request] Schedule creation should create tracing span by default

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/454 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-01-03 21:13:37.000 UTC (2 years ago) |
| **Updated** | 2025-07-24 13:56:06.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

When the tracing interceptor is in use, by default creating a schedule should create a span for the schedule and set it on the workflow header if the action is starting a workflow. Users need to be able to opt-out in their tracing interceptor options.

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2024-03-05 18:30:13.000 UTC</summary>

(do not blindly implement as is, see discussion starting with comment https://github.com/temporalio/features/issues/394#issuecomment-1966551344 before proceeding)

</details>

<details>
<summary><strong>jherbert</strong> commented on 2025-07-23 19:03:36.000 UTC</summary>

@cretz  Know of any workarounds for this in the Python SDK? With the `always_create_workflow_spans` #794  parameter do get spans created when kicked off from a schedule, but without a common parent span so they are all not associated with each other.

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-07-24 13:55:05.000 UTC</summary>

There is not currently a workaround since scheduled workflows are created server side and spans are created client side. Even if you create your own span (like we do) when workflow starts client-side, that span will not remain the parent if the workflow runs on another worker.

</details>


---

<a id="399"></a>

### #399: [Bug] Older Python versions cannot auto-import activity return class in sandbox

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/399 |
| **State** | OPEN |
| **Author** | devery59 (Kris) |
| **Created** | 2023-10-12 01:56:27.000 UTC (2y 2m ago) |
| **Updated** | 2023-10-20 12:38:56.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 🚀 1 |

#### Description

### What are you really trying to do?
I'm Using Temporal on EKS Cluster and I try to connect temporal in other application and run workflow. When I use custom @dataclass as return value of activity, "Failed decoding arguments" error has occured. 
<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

```
{
  "message": "Failed decoding arguments",
  "source": "",
  "stackTrace": "  File \"/usr/local/lib/python3.9/site-packages/temporalio/worker/_workflow_instance.py\", line 301, in activate\n    self._apply(job)\n\n  File \"/usr/local/lib/python3.9/site-packages/temporalio/worker/_workflow_instance.py\", line 373, in _apply\n    self._apply_resolve_activity(job.resolve_activity)\n\n  File \"/usr/local/lib/python3.9/site-packages/temporalio/worker/_workflow_instance.py\", line 490, in _apply_resolve_activity\n    ret_vals = self._convert_payloads(\n\n  File \"/usr/local/lib/python3.9/site-packages/temporalio/worker/_workflow_instance.py\", line 1232, in _convert_payloads\n    raise RuntimeError(\"Failed decoding arguments\") from err\n",
  "encodedAttributes": null,
  "cause": {
    "message": "<Custom dataclass path>",
    "source": "",
    "stackTrace": "  File \"/usr/local/lib/python3.9/site-packages/temporalio/worker/_workflow_instance.py\", line 1224, in _convert_payloads\n    return self._payload_converter.from_payloads(\n\n  File \"/usr/local/lib/python3.9/site-packages/temporalio/converter.py\", line 307, in from_payloads\n    values.append(converter.from_payload(payload, type_hint))\n\n  File \"/usr/local/lib/python3.9/site-packages/temporalio/converter.py\", line 569, in from_payload\n    obj = value_to_type(type_hint, obj, self._custom_type_converters)\n\n  File \"/usr/local/lib/python3.9/site-packages/temporalio/converter.py\", line 1361, in value_to_type\n    field_hints = get_type_hints(hint)\n\n  File \"/usr/local/lib/python3.9/typing.py\", line 1450, in get_type_hints\n    base_globals = sys.modules[base.__module__].__dict__\n\n  File \"/usr/local/lib/python3.9/site-packages/temporalio/worker/workflow_sandbox/_importer.py\", line 393, in __getitem__\n    return self.current[key]\n",
    "encodedAttributes": null,
    "cause": null,
    "applicationFailureInfo": {
      "type": "KeyError",
      "nonRetryable": false,
      "details": null
    }
  },
  "applicationFailureInfo": {
    "type": "RuntimeError",
    "nonRetryable": false,
    "details": null
  }
}
``` 

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

This is my execution code.
```
async with Worker(
        client,
        task_queue=TASK_QUEUE_NAME,
        workflows=[test_workflow],
        activities=[get_request_s3_dir],
    ):

        await client.execute_workflow(
            test_workflow.run,
            request,
            id=REQUEST_ID,
            task_queue=TASK_QUEUE_NAME,
            retry_policy=RetryPolicy(maximum_interval=timedelta(seconds=2), maximum_attempts=3),
        )
``` 

This is my workflow code.
```
@workflow.defn
class test_workflow:
 
    @workflow.run
    async def run(self, request: requestDataClass):
        request_s3_dir = await workflow.execute_activity(
            get_request_s3_dir,
            args = [BUCKET_NAME, request.request_id],
            start_to_close_timeout=timedelta(seconds=15),
        )
``` 
This is my activity code.
```
@activity.defn
async def get_request_s3_dir(bucket_name: str, request_id: str) -> customDataClass:
    uri = f"s3://{bucket_name}/{request_id}"
    return customDataClass.from_uri(uri) 
``` 
This is my custom dataclass code.
```
@dataclass
class customDataClass:
    uri: str
    bucket_name: str
    object_key: str

    @classmethod
    def from_uri(cls, uri: str):
        ...
        return cls(uri, bucket_name, object_key)
``` 
### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Make Docker image and run pod in EKS
- Temporal Version: 2.16.2(on my web) & temporalio == 1.3.0
- base Image of Docker : python:3.9-slim-buster 

### Additional context

<!-- Add any other context about the problem here. -->

1. I'm using python 3.9 version to test on EKS. But when i use python 3.11 version as my Base Image or python setting there is no issue. Is there any difference between python 3.9 version's temporal env and 3.11 version's temporal env? ( I checked pip list versions. requirements version is same)
2. I know if i use in my workflow like below...
```
in python 3.9 verison ( above problem is solved)
with workflow.unsafe.imports_passed_through():
    from file import customDataClass
``` 
```
in python 3.11 verison
 < no need to import >
``` 

3. Let me know what is stable python version when i use temporal cluster and is there any best way to use pattern like this?


Thanks for your all effort.

#### Comments (3)

<details>
<summary><strong>cretz</strong> commented on 2023-10-12 12:24:58.000 UTC</summary>

> \<Custom dataclass path>

Is the full error message just a path to the data class? Can I get the _exact_ error message?

> Is there any difference between python 3.9 version's temporal env and 3.11 version's temporal env?

None in our code, but Python may have changed how imports work between the two

> I know if i use in my workflow like below...

So it appears in newer Python versions the sandbox importer can import your dataclass but in older Python versions you have to import it yourself

> Minimal Reproduction

It may be easier with a full replication instead of just snippets, but I may have the idea here.

Regardless, I will see if I can investigate this. In the meantime, import the custom data class yourself as you have shown. Or upgrade to your Python version.




Reactions: ❤️ 1

</details>

<details>
<summary><strong>devery59</strong> commented on 2023-10-13 03:32:08.000 UTC</summary>

@cretz 
Thanks for reply! 

> Is the full error message just a path to the data class? Can I get the exact error message?

Yes error message just a path to the data class

> Regardless, I will see if I can investigate this. In the meantime, import the custom data class yourself as you have shown. Or upgrade to your Python version.

Thanks for your comment! I expect specific reason of above issue. Let me know if there is another thought.


</details>

<details>
<summary><strong>cretz</strong> commented on 2023-10-20 12:38:56.000 UTC</summary>

Is it possible to provide a standalone replication? Maybe alter https://github.com/temporalio/samples-python/blob/main/hello/hello_activity.py until you can replicate the failure? (feel free to separate out to multiple files)

</details>


---

<a id="1203"></a>

### #1203: [Bug] `retry_policy` not set in `ativity.info()` despite being defined in the `workflow.execute_activity()` call

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1203 |
| **State** | OPEN |
| **Author** | brent-cybrid (Brent Carrara) |
| **Created** | 2025-10-31 21:11:02.000 UTC (2 months ago) |
| **Updated** | 2025-11-04 13:49:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

We're trying to access the `retry_policy` from the `activity.info` from within an activity.

### Describe the bug

`retry_policy` isn't set even though it's set on the `workflow.execute_activity` call.

### Minimal Reproduction

```python
#!/usr/bin/env python3
"""
Minimal reproducible example demonstrating Temporal SDK bug:
activity.info().retry_policy is None even when workflow specifies retry_policy

This script is standalone and only requires: pip install temporalio
"""
import asyncio
from datetime import timedelta
from temporalio import activity, workflow
from temporalio.common import RetryPolicy
from temporalio.testing import WorkflowEnvironment
from temporalio.worker import Worker


# Simple activity that captures what retry_policy information it receives
@activity.defn
async def check_retry_policy_activity() -> dict:
    """Activity that returns information about the retry_policy it receives."""
    info = activity.info()

    return {
        'has_retry_policy_attr': hasattr(info, 'retry_policy'),
        'rety_policy_is_set': info.retry_policy is not None if hasattr(info, 'retry_policy') else False,
        'non_retryable_error_types': (
            info.retry_policy.non_retryable_error_types
            if (
                hasattr(info, 'retry_policy')
                and hasattr(info.retry_policy, 'non_retryable_error_types')
            )
            else None
        )
    }


# Simple workflow that specifies retry_policy with non_retryable_error_types
@workflow.defn
class RetryPolicyTestWorkflow:
    """Workflow that calls activity with specific retry_policy."""

    @workflow.run
    async def run(self) -> dict:
        # Execute activity with retry_policy that includes non_retryable_error_types
        return await workflow.execute_activity(
            check_retry_policy_activity,
            start_to_close_timeout=timedelta(seconds=10),
            retry_policy=RetryPolicy(
                non_retryable_error_types=["MyNonRetryableError", "AnotherNonRetryableError"]
            ),
        )


async def main():
    """Run the test workflow and verify retry_policy is available in activity."""
    
    async with await WorkflowEnvironment.start_time_skipping() as env:
        # Create worker with our workflow and activity
        async with Worker(
            env.client,
            task_queue="test-queue",
            workflows=[RetryPolicyTestWorkflow],
            activities=[check_retry_policy_activity],
        ):
            # Execute the workflow
            result = await env.client.execute_workflow(
                RetryPolicyTestWorkflow.run,
                id="test-workflow-retry-policy",
                task_queue="test-queue",
            )

            # Verify the bug
            if result['rety_policy_is_set']:
                return True
            else:
                print("BUG PRESENT: retry_policy is not set, even though workflow specifies it")
                return False


if __name__ == "__main__":
    success = asyncio.run(main())
    exit(0 if success else 1)
```

### Environment/Versions

Temporal Cloud

### Additional context




#### Comments (2)

<details>
<summary><strong>tconley1428</strong> commented on 2025-11-03 19:07:52.000 UTC</summary>

Can you validate on a dev or real server as well? There are some things the time skipping server does differently from the standard servers. 

</details>

<details>
<summary><strong>michael-cybrid</strong> commented on 2025-11-04 13:49:24.000 UTC</summary>

@brent-cybrid is a colleague of mine. We see this in Temporal Cloud as well.

Reactions: 👍 1

</details>


---

<a id="1089"></a>

### #1089: [Feature Request] Provide supported Session implementations for OpenAI Agents

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1089 |
| **State** | OPEN |
| **Author** | tconley1428 |
| **Created** | 2025-09-09 19:56:51.000 UTC (3 months ago) |
| **Updated** | 2025-09-09 19:56:51.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.

We don't provide any functional `Session` implementations, as we don't support the builtin Sqlite one. 

### Describe the solution you'd like

Provide at least one in the box `Session` which works in a workflow context.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="618"></a>

### #618: [Feature Request] Improve wait_condition semantics

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/618 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-08-21 12:09:17.000 UTC (1y 4m ago) |
| **Updated** | 2025-04-10 13:34:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Ideally, the following would not happen:

```python
@workflow.defn
class WaitForSharedMutableStateWorkflow:
    def __init__(self) -> None:
        self.cond = False

    @workflow.run
    async def run(self):
        self.cond = True
        await asyncio.gather(self.coro("1"), self.coro("2"))

    async def coro(self, id: str):
        await workflow.wait_condition(lambda: self.cond)
        print(f"after wait coro {id} sees {self.cond}")  # ❗❗ <== coro2 sees False❗
        self.cond = False
        await asyncio.sleep(1)
        self.cond = True
```

Completely eliminating the possibility would be ideal, but best-effort improvements would also be welcome.

#### Comments (2)

<details>
<summary><strong>GSmithApps</strong> commented on 2025-04-09 21:50:15.000 UTC</summary>

Hey @dandavison,

I definitely agree on this.

As an interim code-around, it worked on my end if I replace

```python
        await asyncio.gather(self.coro("1"), self.coro("2"))
```

with

```python
        for task in [self.coro("1"), self.coro("2")]:
            asyncio.create_task(task)
            await asyncio.sleep(0.0000000001)
```

On the downside, it creates actions because it creates a temporal timer for each coro

I'm curious to hear what you think!

</details>

<details>
<summary><strong>cretz</strong> commented on 2025-04-10 13:34:03.000 UTC</summary>

No, because the wait condition is resolved after a second which can be on another task. And even if it did work, it's not a general solution to the problem because the concern is that wait conditions _all_ wake up if the predicate is satisfied (as opposed to other SDKs that only wake up one). Whether that happens before or after a sleep is immaterial. The snippet is a trivial example showing the issue, but that's not real world code. In real world code, you just have to make sure you code for the fact that the line of code after a wait condition that may be waited on multiple times concurrently may not match the condition.

</details>


---

<a id="601"></a>

### #601: [Feature Request] Reset workflow feature

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/601 |
| **State** | OPEN |
| **Author** | burbaljaka (Timur Kapitonov) |
| **Created** | 2024-08-05 10:06:36.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-05 13:32:40.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

There is a missing feature in Python SDK for workflow reset

### Describe the solution you'd like

I have implemented this on my project and would like to share my findings
### Additional context

<!-- Add any other context or screenshots about the feature request here. -->


#### Comments (2)

<details>
<summary><strong>burbaljaka</strong> commented on 2024-08-05 10:07:38.000 UTC</summary>

I would like to create a PR with go-live ready code, let me know if you could be interested in this kind of assistance :)

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-08-05 13:32:38.000 UTC</summary>

We intentionally don't expose workflow reset as high-level in most SDKs, but you can access the raw gRPC call for workflow reset via `workflow_service`. So `await my_client.workflow_service.reset_workflow_execution(...)` is available for advanced users, but it is considered an advanced call and not one people use regularly (it's for getting out of bad situations, if it's being used as part of regular flow, an alternative should be considered).

</details>


---

<a id="462"></a>

### #462: [Bug] Handle possibility of update-before-start

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/462 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-01-12 17:39:57.000 UTC (1y 11m ago) |
| **Updated** | 2025-02-07 03:29:12.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug
Because of the fact that we re-order updates to come before other things a-la signals in Core, it's currently possible to handle an update before running the first bit of workflow code if an update comes in same task as start workflow.

We'll likely need to buffer things as we do in other SDKs (in lieu of making some other choice)

### Minimal Reproduction
See the `test_workflow_update_handlers_unhappy` test and discussion here

### Environment/Versions
<!-- Please complete the following information where relevant. -->

* OS and processor: [e.g. M1 Mac, x86 Windows, Linux]
* Temporal Version: [e.g. 1.14.0?] and/or SDK version
* Are you using Docker or Kubernetes or building Temporal from source?

### Additional context
<!-- Add any other context about the problem here. -->



#### Comments (2)

<details>
<summary><strong>cretz</strong> commented on 2024-01-12 17:45:02.000 UTC</summary>

Also, we need to stop reordering of activation jobs inside of Python. Right now this moves signals first and does not account for updates. But we need to make very sure that the Core ordering matches what is already happening (besides update).

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-01-12 18:40:00.000 UTC</summary>

.NET equivalent: https://github.com/temporalio/sdk-dotnet/issues/176. We need to make sure we have a test that does a start then update _then_ starts a worker and confirms behavior with dynamically registered handlers.

Reactions: 👍 1

</details>


---

<a id="390"></a>

### #390: PoC - Static analyzer for Python

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/390 |
| **State** | OPEN |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2023-09-26 18:15:04.000 UTC (2y 3m ago) |
| **Updated** | 2024-08-21 16:12:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

*No description provided.*

#### Comments (2)

<details>
<summary><strong>dandavison</strong> commented on 2024-08-21 15:40:00.000 UTC</summary>

Ultimately, we want static analysis for Temporal SDKs to be both runnable as a standalone process and easily integratable into LSP-based IDE tooling.

One possibility here would be [mypy plugins](https://mypy.readthedocs.io/en/stable/extending_mypy.html#extending-mypy-using-plugins). However, it's not clear that mypy is going to be dominant in the future of Python type-checking: Microsoft subsequently created Pyright, which is more closely associated with and widely deployed in developer LSP tooling due to VSCode (as well as a bit faster and perhaps has some other advantages). However, my impression is that Pyright [will not](https://github.com/microsoft/pyright/issues/607#issuecomment-873467941) provide extensibility of the sort that we need.

Now, [Astral](https://astral.sh/) are [creating](https://github.com/astral-sh/ruff/pulls?q=is%3Apr+label%3Ared-knot+is%3Aclosed) a new Python type-checker. Astral's `ruff` linter and formatter has been extremely well received, and they have created LSP tools to go with it. Clearly, their type checker will be integrated into their LSP solution. (They've also [released](https://astral.sh/blog/uv-unified-python-packaging) a competitor to pip/poetry/pyenv etc).

I think that we should watch [this space](https://github.com/astral-sh/ruff/pulls?q=is%3Apr+label%3Ared-knot+is%3Aclosed). In particular to understand whether Astral are creating type-checking technology that is extensible in a way that we can make use of, and if so when it would make sense to start prototyping. 

</details>

<details>
<summary><strong>cretz</strong> commented on 2024-08-21 16:00:04.000 UTC</summary>

Basically there are two static analyzers needed IMO:

* General purpose Python static analyzer that catches people making thread-blocking calls (directly or transitively) in an `async def` function
* Temporal-specific Python static analyzer that catches people making illegal calls (directly or transitively) in a workflow

The first one should be a general product/repo IMO, but they both need a call graph so there is an opportunity for code sharing.

I have POC'd this with MyPy plugins by the way. You can build a reasonable call graph but storing it in cache is difficult because they only allow you to set some plugin metadata at a higher level not a per function level (read https://github.com/python/mypy/blob/master/mypy/plugin.py). It can be hacked, but I think we should contribute a very small PR to MyPy to allow plugins to store a metadata dict on more specific objects.

I have researched a good bit about Python call graph builders and there are no good/fast modern ones. And I've only found MyPy to provide extensibility _and_ semantic analysis to build proper call graphs (this can't be done without static analysis). It will be great if Ruff gets this analysis, we could definitely build on it.

</details>


---

<a id="1130"></a>

### #1130: [Feature Request] Support for custom tracing providers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1130 |
| **State** | OPEN |
| **Author** | johnyang101 (John Yang) |
| **Created** | 2025-09-29 20:26:23.000 UTC (3 months ago) |
| **Updated** | 2025-09-30 14:41:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I'd like to add a custom tracing provider for the OpenAI Agents SDK. Importantly, this tracing provider is supported by the OpenAI Agents SDK itself.

### The solution I'd like

I'd like to be able to pass the tracing provider to the OpenAI Agents Plugin when initializing the client e.g. 

```python
from temporalio.client import Client
from temporalio.contrib.openai_agents import OpenAIAgentsPlugin
from custom_tracing_provider import CustomTraceProvider

plugin = OpenAIAgentsPlugin(
     trace_provider=CustomTraceProvider()
)


client_config = {
    "namespace": NAMESPACE,
    "plugins": [plugin],
    "API_KEY": os.environ.get("TEMPORAL_API_KEY")
}

_client_instance = await Client.connect(ADDRESS, **client_config)

```

Given the temporal tracing provider today is implemented on top of the `DefaultTracingProvider` class provided by OpenAI as shown below, perhaps it wouldn't be too hard to just create a factory that takes any supported tracing provider and returns a Temporal supported one.
```python

class TemporalTraceProvider(DefaultTraceProvider):
    """A trace provider that integrates with Temporal workflows."""

    def __init__(self, auto_close_in_workflows: bool = False):
        """Initialize the TemporalTraceProvider."""
        super().__init__()
        self._original_provider = cast(DefaultTraceProvider, get_trace_provider())
        self._multi_processor = _TemporalTracingProcessor(
            self._original_provider._multi_processor,
            auto_close_in_workflows,
        )

    def time_iso(self) -> str:
        """Return the current deterministic time in ISO 8601 format."""
        if workflow.in_workflow():
            return workflow.now().isoformat()
        return super().time_iso()

    def gen_trace_id(self) -> str:
        """Generate a new trace ID."""
        if workflow.in_workflow():
            try:
                """Generate a new trace ID."""
                return f"trace_{_workflow_uuid()}"
            except ReadOnlyContextError:
                return f"trace_{uuid.uuid4().hex}"
        return super().gen_trace_id()

    def gen_span_id(self) -> str:
        """Generate a span ID."""
        if workflow.in_workflow():
            try:
                """Generate a deterministic span ID."""
                return f"span_{_workflow_uuid()}"
            except ReadOnlyContextError:
                return f"span_{uuid.uuid4().hex[:24]}"
        return super().gen_span_id()

    def gen_group_id(self) -> str:
        """Generate a group ID."""
        if workflow.in_workflow():
            try:
                """Generate a deterministic group ID."""
                return f"group_{_workflow_uuid()}"
            except ReadOnlyContextError:
                return f"group_{uuid.uuid4().hex[:24]}"
        return super().gen_group_id()

    def __enter__(self):
        """Enter the context of the Temporal trace provider."""
        return self

    def __exit__(
        self,
        exc_type: type[BaseException],
        exc_val: BaseException,
        exc_tb: TracebackType,
    ):
        """Exit the context of the Temporal trace provider."""
        self._multi_processor.shutdown()
```

#### Comments (1)

<details>
<summary><strong>tconley1428</strong> commented on 2025-09-30 14:41:55.000 UTC</summary>

Can you elaborate on the scenario? For what reason do you want to override the trace provider? Typically I've seen folks implement a `TracingProcessor`. 

</details>


---

<a id="851"></a>

### #851: [Bug] Test server in time-skipping mode does return userMetadata.summary

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/851 |
| **State** | OPEN |
| **Author** | yunmanger1 (German Ilin) |
| **Created** | 2025-04-25 22:44:24.000 UTC (8 months ago) |
| **Updated** | 2025-04-28 13:07:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I want to leverage `userMetadata.summary` and show it in UI, and test the functionality.

### Describe the bug

My tests fail when running tests with test server in time-skipping mode.
I am passing `summary` attribute when executing workflow and activities. Then I query workflow history I can see `userMetadata.summary` populated on the `HistoryEvent` when running in dev mode, but it is missing in time-skipping mode. 

### Minimal Reproduction

```
@workflow.defn
class WorkflowSample:

    @workflow.run
    async def run(self, name: str) -> list[str]:
        result = await workflow.execute_activity(ActivitySample.greeting, name, summary=f"Calculating greeting for {name}")
        return [result]
```

```
    async def get_payload_value(self, *args: Payload | None) -> str | None:
        decoded_summary = await self.data_converter.decode(non_empty_payloads(*args))
        if len(decoded_summary) == 0:
            return None
        return decoded_summary[0]

    async def get_summary(self, history_event: HistoryEvent) -> str | None:
        logger.debug("Getting summary for event %s", MessageToJson(history_event))
        return await self.get_payload_value(
            history_event.user_metadata.summary)
    
    async def run(self):
        async for event in workflow_handle.fetch_history_events(wait_new_event=wait_new_event):
            summary = await self.get_summary(event)
            print(summary)
```

### Environment/Versions

- OS and processor: M1 Mac
- Temporal Version:  1.10.0



#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-04-28 13:05:26.000 UTC</summary>

Hrmm, this was added in https://github.com/temporalio/sdk-java/pull/2441. We will test and confirm. In the meantime, can you clear out any `temporal-` prefixed files in `$TMPDIR` and try again and confirm this is still failing?

(transferring to SDK)

</details>


---

<a id="814"></a>

### #814: [Bug] Python client not able to connect to self-hosted Temporal server via proxy using authorization header

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/814 |
| **State** | OPEN |
| **Author** | dipali-bhatt |
| **Created** | 2025-04-03 01:24:22.000 UTC (9 months ago) |
| **Updated** | 2025-04-03 13:14:32.000 UTC |
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
We’re trying to connect Python client to our self-hosted Temporal server via a proxy using an authorization header.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->
We see that it is able to connect to the worker at startup, but after exactly 60 seconds, it fails with the below error. Note that we do see some transient 503 errors while connecting to the server; but after that it’s able to connect successfully (verified in server logs).

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->
Here’ the set of errors we see:
1.
```
Error: Client connection not established Failed client connect: `get_system_info` call error after connection: Status { code: PermissionDenied, message: "encountered c2c service api error response 503", metadata: MetadataMap { headers: {"content-type": "application/grpc", "date": "Wed, 19 Mar 2025 02:11:39 GMT"} }, source: None }.
Traceback (most recent call last):
  File "/home/temporal/temporal_sample_worker_python/src/run_worker.py", line 202, in <module>
    asyncio.run(main())
  File "/usr/lib64/python3.9/asyncio/runners.py", line 44, in run
    return loop.run_until_complete(main)
  File "/usr/lib64/python3.9/asyncio/base_events.py", line 647, in run_until_complete
    return future.result()
  File "/home/temporal/temporal_sample_worker_python/src/run_worker.py", line 157, in main
    await conn.create_client()
  File "/home/temporal/temporal_sample_worker_python/src/utils.py", line 105, in create_client
    self.client = await Client.connect("dev.api.data.falcon.sfdcfc.net:7443",
  File "/usr/local/lib64/python3.9/site-packages/temporalio/client.py", line 176, in connect
    await temporalio.service.ServiceClient.connect(connect_config),
  File "/usr/local/lib64/python3.9/site-packages/temporalio/service.py", line 209, in connect
    return await _BridgeServiceClient.connect(config)
  File "/usr/local/lib64/python3.9/site-packages/temporalio/service.py", line 1117, in connect
    await client._connected_client()
  File "/usr/local/lib64/python3.9/site-packages/temporalio/service.py", line 1130, in _connected_client
    self._bridge_client = await temporalio.bridge.client.Client.connect(
  File "/usr/local/lib64/python3.9/site-packages/temporalio/bridge/client.py", line 97, in connect
    await temporalio.bridge.temporal_sdk_bridge.connect_client(
RuntimeError: Failed client connect: `get_system_info` call error after connection: Status { code: PermissionDenied, message: "encountered c2c service api error response 503", metadata: MetadataMap { headers: {"content-type": "application/grpc", "date": "Wed, 19 Mar 2025 02:11:39 GMT"} }, source: None }
```
2.
```
2025-03-19T02:17:48.974543Z  WARN temporal_sdk_core::worker::workflow::wft_poller: Error while polling for workflow tasks error=Status { code: Unimplemented, metadata: MetadataMap { headers: {"content-type": "application/grpc", "date": "Wed, 19 Mar 2025 02:17:48 GMT"} }, source: None }
2025-03-19T02:17:48.974547Z ERROR temporal_sdk_core::worker::workflow::workflow_stream: Workflow processing encountered fatal error and must shut down TonicError(Status { code: Unimplemented, metadata: MetadataMap { headers: {"content-type": "application/grpc", "date": "Wed, 19 Mar 2025 02:17:48 GMT"} }, source: None })
2025-03-19T02:17:48.974551Z ERROR temporal_sdk_core::worker::workflow::workflow_stream: Workflow processing encountered fatal error and must shut down TonicError(Status { code: Unimplemented, metadata: MetadataMap { headers: {"content-type": "application/grpc", "date": "Wed, 19 Mar 2025 02:17:48 GMT"} }, source: None })
2025-03-19 02:17:48,975 - ERROR - Worker failed, shutting down
Traceback (most recent call last):
  File "/usr/local/lib64/python3.9/site-packages/temporalio/worker/_workflow.py", line 154, in run
    act = await self._bridge_worker().poll_workflow_activation()
  File "/usr/local/lib64/python3.9/site-packages/temporalio/bridge/worker.py", line 147, in poll_workflow_activation
    await self._ref.poll_workflow_activation()
RuntimeError: Poll failure: Unhandled grpc error when polling: Status { code: Unimplemented, metadata: MetadataMap { headers: {"content-type": "application/grpc", "date": "Wed, 19 Mar 2025 02:17:48 GMT"} }, source: None }

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/usr/local/lib64/python3.9/site-packages/temporalio/worker/_workflow.py", line 164, in run
    raise RuntimeError("Workflow worker failed") from err
RuntimeError: Workflow worker failed
2025-03-19 02:17:48,975 - INFO - Beginning worker shutdown, will wait 0:00:00 before cancelling activities

Traceback (most recent call last):
  File "/usr/local/lib64/python3.9/site-packages/temporalio/worker/_workflow.py", line 154, in run
    act = await self._bridge_worker().poll_workflow_activation()
  File "/usr/local/lib64/python3.9/site-packages/temporalio/bridge/worker.py", line 147, in poll_workflow_activation
    await self._ref.poll_workflow_activation()
RuntimeError: Poll failure: Unhandled grpc error when polling: Status { code: Unimplemented, metadata: MetadataMap { headers: {"content-type": "application/grpc", "date": "Wed, 19 Mar 2025 02:17:48 GMT"} }, source: None }

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/home/temporal/temporal_sample_worker_python/src/run_worker.py", line 202, in <module>
    asyncio.run(main())
  File "/usr/lib64/python3.9/asyncio/runners.py", line 44, in run
    return loop.run_until_complete(main)
  File "/usr/lib64/python3.9/asyncio/base_events.py", line 647, in run_until_complete
    return future.result()
  File "/home/temporal/temporal_sample_worker_python/src/run_worker.py", line 179, in main
    await run_worker(client, taskqueue_name, args.worker_type)
  File "/home/temporal/temporal_sample_worker_python/src/run_worker.py", line 142, in run_worker
    await worker.run()
  File "/usr/local/lib64/python3.9/site-packages/temporalio/worker/_worker.py", line 571, in run
    raise exception
  File "/usr/local/lib64/python3.9/site-packages/temporalio/worker/_workflow.py", line 164, in run
    raise RuntimeError("Workflow worker failed") from err
RuntimeError: Workflow worker failed
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- Temporal Version: Server v1.26.2, SDK v1.10.0

### Additional context

<!-- Add any other context about the problem here. -->
Our issue looks similar to this this open bug: [[Bug] Worker hangs after polling workflow task queue · Issue #631 · temporalio/sdk-python · GitHub](https://github.com/temporalio/sdk-python/issues/631)
Wanted to check if it is same issue and if not we need help in understanding the fixing it.


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-04-03 13:12:54.000 UTC</summary>

Can you confirm that this is not an issue when connecting directly to Temporal and therefore an issue specific to your proxy? What kind of proxy is this?

Also note that the proxy has to be setup with the proper parameters, specifically it should allow individual calls for more than 80s, have a soft max connection age (i.e. http/2 go away) of no less than 6m and hard mas connection age (i.e. connection kill) of 8m. This is because on Temporal server we allow 70s, 5m, and 6m10s for these values respectively so the proxy needs to not intrude on that. The other issue was also an improper ingress/proxy configuration issue where it was failing requests that need to stay open for 70s.

</details>


---

<a id="803"></a>

### #803: Run different worker types in separate threads

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/803 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-03-27 20:44:35.000 UTC (9 months ago) |
| **Updated** | 2025-03-28 14:06:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Currently, when workflow and activity workers are run in the same process, they share the the same thread (same event loop):

https://github.com/temporalio/sdk-python/blob/b0dfaef0f029244a44f56c4c1970cda8621b4e68/temporalio/worker/_worker.py#L489-L492

Running these (and Nexus workers when they arrive) in different threads would prevent an async activity that incorrectly does blocking I/O from blocking workflow progress. In addition to limiting blast radius it should make it easier to understand the failure modes.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-28 13:48:56.000 UTC</summary>

This is going to be tough to do. Notes:

* We have to be able to use the primary/user-controlled event loop for running (some) activities/operations anyways, so maybe this is a workflow worker only thing?
* Workflow workers will have to remove async and go threaded which will cost threads. There is the blocking call for polling (currently async, so not using Python thread). Then the code backgrounds the work when received which uses async today. And then _that_ work uses a thread on a pool so that it can impose a deadlock timeout on it. This means every workflow activation uses 1 thread from the thread pool today. We either have to double the in-use thread count or run a single thread for the life of the workflow worker that runs its own asyncio event loop so it can background activations as received (not to be confused with the next point).
* Workflow workers will always need to use primary/user-controlled event loop for user codecs anyways (e.g. via `asyncio.run_coroutine_threadsafe`) which means it is subject to the same blocking concerns. So any benefits are only for those not using codecs.

We will have to decide whether the benefit is worth the costs here.

</details>


---

<a id="778"></a>

### #778: [Bug] strange workflow task timeout

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/778 |
| **State** | OPEN |
| **Author** | hebrd (hebrd) |
| **Created** | 2025-03-01 03:39:57.000 UTC (10 months ago) |
| **Updated** | 2025-03-07 12:19:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I've set the activity timeout to 3600 seconds in the settings. Most tasks complete normally, but some are not polled and executed by the worker until several hours later.

Below is the event history—I'm unsure what happened. Could anyone help diagnose this issue?

Thanks in advance!

![Image](https://github.com/user-attachments/assets/5d6b5d7f-e2b4-44da-8ebc-082efe988188)

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-03-07 12:18:27.000 UTC</summary>

Workflow task timeout means something worker side is preventing that workflow task from responding within 10 seconds. It could be any number of things (e.g. blocking the thread in `async def` functions somewhere in the system such as activities). Event history alone cannot give us enough information about the code. If at all possible to provide a small, standalone replication (even if it has to be run several times to see it or be put in some kind of loop), that could help.

Also, you can use our traditional support methods instead of GitHub if you'd like: https://temporal.io/community.

</details>


---

<a id="731"></a>

### #731: [Feature Request] Special behavior for Temporal built-in prefixes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/731 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-15 13:14:09.000 UTC (11 months ago) |
| **Updated** | 2025-01-21 18:13:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/576

#### Comments (1)

<details>
<summary><strong>josh-berry</strong> commented on 2025-01-21 18:13:34.000 UTC</summary>

Note: double-underscores have some special meaning in Python for method and property names on a class. Specifically, Python munges `__foo` -> `_ClassName__foo` (or something like that, I don't exactly remember).

We don't think this is relevant, because we're only reserving well-known/already-established names, and we think `__temporal_` is specific enough that it's unlikely to collide with any class name.

</details>


---

<a id="719"></a>

### #719: [Feature Request] Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/719 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 13:47:42.000 UTC (12 months ago) |
| **Updated** | 2025-07-24 15:57:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users need a workflow-local var that is scoped only to the current workflow when accessed via code. See https://github.com/temporalio/features/issues/571.

Rough sketch: a user can have `myValue = workflow.LocalVar("myValue")`, and all methods and typesafety and such work like `contextvars.ContextVar`.

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2025-07-24 15:57:07.000 UTC</summary>

Note, this can already be done be users using `setattr`/`getattr` on `workflow.instance()`.

</details>


---

<a id="699"></a>

### #699: [Bug] `workflow.wait` broken with `asyncio.FIRST_COMPLETED` and local activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/699 |
| **State** | OPEN |
| **Author** | andmis (Andrey Mishchenko) |
| **Created** | 2024-12-09 19:04:53.000 UTC (1 years ago) |
| **Updated** | 2024-12-09 20:34:48.000 UTC |
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

Start N local activities, wait for the first one to finish, cancel the others.

### Describe the bug

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

If I start N local activities, then use `workflow.wait(tasks, return_when=asyncio.FIRST_COMPLETED)`, the `workflow.wait` coro blocks until all of the activities actually finish, instead of returning when the first one finishes. If I use non-local activities, this bug does not happen.

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

https://github.com/andmis/snippets/tree/temporal-python-sdk-local-activity-workflow-wait-bug

```
# Worker output after `python run_workflow.py`
2024-12-09 19:02:30.750775+00:00 (Workflow) Starting, local=False
2024-12-09 19:02:30.750775+00:00 (Workflow) Waiting for first completed activity
2024-12-09 11:02:30.760073 (Activity 0) Running sandbox_activity
2024-12-09 11:02:30.760565 (Activity 1) Running sandbox_activity
2024-12-09 11:02:32.875597 (Activity 1) Exiting sandbox_activity
2024-12-09 19:02:32.891753+00:00 (Workflow) Got first completed activity, cancelling others and exiting
2024-12-09 19:02:32.891753+00:00 (Workflow) Exiting
2024-12-09 11:02:35.328912 (Activity 0) Cancelling sandbox_activity

# Worker output after `python run_workflow.py -l`
2024-12-09 19:03:48.421271+00:00 (Workflow) Starting, local=True
2024-12-09 19:03:48.421271+00:00 (Workflow) Waiting for first completed activity
2024-12-09 11:03:48.425911 (Activity 0) Running sandbox_activity
2024-12-09 11:03:48.426165 (Activity 1) Running sandbox_activity
2024-12-09 11:03:49.817020 (Activity 1) Exiting sandbox_activity
2024-12-09 11:03:56.397142 (Activity 0) Exiting sandbox_activity
2024-12-09 19:03:56.394210+00:00 (Workflow) Got first completed activity, cancelling others and exiting
2024-12-09 19:03:56.394210+00:00 (Workflow) Exiting
# Note the timestamps
```

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: macOS, M1
- Temporal version: 1.1.2
- Python SDK version: 1.8.0
- Are you using Docker or Kubernetes or building Temporal from source? No

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-12-09 20:34:46.000 UTC</summary>

Thanks! We will investigate.

</details>


---

<a id="655"></a>

### #655: [Bug] KeyError: 'warnings' due to sandbox

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/655 |
| **State** | OPEN |
| **Author** | leonard-henriquez (Léonard Henriquez) |
| **Created** | 2024-09-29 08:46:03.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-30 13:07:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## What are you really trying to do?

Use Sentry with Temporal to track and manage warnings within workflows.

## Describe the bug

Sentry’s catch_warnings context manager, which relies on the standard Python warnings module, raises a KeyError in Temporal workflows because the warnings module is not available. This happens in environments managed by Temporal, which restricts access to certain standard Python modules like warnings.

This restriction leads to a failure when using libraries like Sentry that depend on this module for capturing and managing Python warnings.

Error Example:
```
KeyError: 'warnings'
```

Cause: The warnings module is not present or accessible within the Temporal workflow environment, causing the code to fail when it tries to reference sys.modules['warnings'].

## Minimal Reproduction

To reproduce this issue:

	1.	Set up a Temporal workflow in Python.
	2.	Integrate Sentry’s catch_warnings context manager or any other library that uses the warnings module.
	3.	Trigger a Python warning within the workflow (e.g., by using warnings.warn()).
	4.	The workflow fails with a KeyError: 'warnings' due to the restricted access.

Here’s a minimal code snippet:

```
def workflow_function():
    with warnings.catch_warnings(record=True) as w:
        warnings.warn("This is a test warning")
```

## Environment/Versions
	•	OS and processor: MacBook Pro M1
	•	Temporal Version: 1.7.1
	•	Are you using Docker or Kubernetes?: Using Docker to run Temporal

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-09-30 13:07:24.000 UTC</summary>

> 2.	Integrate Sentry’s catch_warnings context manager or any other library that uses the warnings module.

You're going to have to pass through the imports and disable the sandbox I believe. `warnings` is not a determinism-safe module (and Sentry likely isn't either). Using non-deterministic modules like Sentry require pass through and sandbox avoidance. https://github.com/temporalio/sdk-python?tab=readme-ov-file#workflow-sandbox explains how the sandbox works and how to disable for parts of code. Similar pass through and avoidance techniques are applied in our Sentry interceptor in the sample at https://github.com/temporalio/samples-python/tree/main/sentry.

</details>


---

<a id="652"></a>

### #652: [Bug] `ScheduleOverlapPolicy` has broken __eq__

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/652 |
| **State** | OPEN |
| **Author** | andersio (Anders Ha) |
| **Created** | 2024-09-27 08:53:30.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-27 12:08:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

In a deployment script, compare a `Schedule` on the server to a proposed `Schedule`, and skip schedule updates as needed.

### Describe the bug

When comparing two `Schedule`s that differ only in their `ScheduleOverlapPolicy`, `Schedule.__eq__` returns true.

This seems to be caused by `ScheduleOverlapPolicy`, where every enum case apparently equals to any cases according to `ScheduleOverlapPolicy.__eq__`, even though the underlying values are different.

For some reason, `ScheduleOverlapPolicy` is both a dataclass and an IntEnum. Seems like the rare combination might have caused the behaviour here?

### Minimal Reproduction

```python
from temporalio.client import ScheduleOverlapPolicy

print(ScheduleOverlapPolicy.SKIP == ScheduleOverlapPolicy.TERMINATE_OTHER)
# console: True

print(int(ScheduleOverlapPolicy.SKIP) == int(ScheduleOverlapPolicy.TERMINATE_OTHER))
# console: False

print(ScheduleOverlapPolicy.SKIP.value == ScheduleOverlapPolicy.TERMINATE_OTHER.value)
# console: False
```

### Environment/Versions

Python 3.11.7

```
 name         : temporalio             
 version      : 1.7.0                  
 description  : Temporal.io Python SDK 

dependencies
 - protobuf >=3.20
 - types-protobuf >=3.20
 - typing-extensions >=4.2.0,<5.0.0
```

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-09-27 12:08:07.000 UTC</summary>

> For some reason, ScheduleOverlapPolicy is both a dataclass and an IntEnum

This was a mistake on our part and was fixed in #628 and therefore the fix is in 1.7.1. Can you confirm?

</details>


---

<a id="629"></a>

### #629: [Bug] workflow.upsert_search_attributes() will bork SDK on empty inputs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/629 |
| **State** | OPEN |
| **Author** | irdbl (Kevin Pham) |
| **Created** | 2024-09-02 22:14:28.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-03 13:02:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

In the middle of a workflow, if you call `upsert_search_attributes` with an empty input:

```python
empty = []
workflow.upsert_search_attributes(empty)
```

You'll get a completely inscrutable and hard to debug error like so:

```
Failed completing activation on workflow with run ID 27fa7d71-76a8-4b3b-be33-1e0d11afc5a4
Traceback (most recent call last):
  File ".../.venv/lib/python3.12/site-packages/temporalio/worker/_workflow.py", line 320, in _handle_activation
    await self._bridge_worker().complete_workflow_activation(completion)
  File ".../.venv/lib/python3.12/site-packages/temporalio/bridge/worker.py", line 117, in complete_workflow_activation
    await self._ref.complete_workflow_activation(comp.SerializeToString())
RuntimeError: Completion failure: Lang SDK sent us a malformed workflow completion for run (27fa7d71-76a8-4b3b-be33-1e0d11afc5a4): At least one workflow command in the completion contained an empty variant
```

#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-09-03 13:02:51.000 UTC</summary>

Saw the attached PR, thanks!

</details>


---

<a id="625"></a>

### #625: [Feature Request] Fix pyright type-checking violations

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/625 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-08-27 17:24:59.000 UTC (1y 4m ago) |
| **Updated** | 2025-03-25 15:07:53.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

#420 started requiring pyright in CI, but with a substantial exclusion list. Fix violations and remove exclusion list.

#### Comments (1)

<details>
<summary><strong>dandavison</strong> commented on 2025-03-25 15:07:51.000 UTC</summary>

E.g. https://github.com/temporalio/sdk-python/issues/795

</details>


---

<a id="597"></a>

### #597: [Bug] Cant build wheel temporalio when installing with pip

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/597 |
| **State** | OPEN |
| **Author** | ichsansaid (Muhammad Al Ichsan Nur Rizqi Said) |
| **Created** | 2024-08-01 02:53:32.000 UTC (1y 5m ago) |
| **Updated** | 2024-08-05 16:25:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?
pip install temporalio
<!-- 
Tell us at a high level what you're doing, to avoid XY problem (https://en.wikipedia.org/wiki/XY_problem) 
-->

### Describe the bug
![image](https://github.com/user-attachments/assets/820ca4e3-dddc-4744-886a-e55fde0bf3d4)
![image](https://github.com/user-attachments/assets/194ecca3-efe3-4470-a2f4-ca03f5709e23)
![image](https://github.com/user-attachments/assets/c29f9d50-d1a0-45a1-8274-3f066481fe6c)
When i installed the temporalio, these errors is comes up, i also already installed rust compiler in my windows but still error

<!-- A clear and concise description of what the bug is. -->

<!-- If applicable, add screenshots or code blocks to help explain your problem. You can also use [Loom](http://loom.com/) to do short, free video bug reports. -->

### Minimal Reproduction

<!-- 
Modify our hello world templates to demonstrate:

- TypeScript: https://github.com/temporalio/samples-typescript/tree/main/hello-world
- Go: https://github.com/temporalio/money-transfer-project-template-go
- Java: https://github.com/temporalio/money-transfer-project-template-java
- PHP: https://github.com/temporalio/samples-php#samples
-->

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: Windows
- Temporal Version: Latest
- Are you using Docker or Kubernetes or building Temporal from source? not using docker and kubernetes

### Additional context

<!-- Add any other context about the problem here. -->


#### Comments (1)

<details>
<summary><strong>cretz</strong> commented on 2024-08-05 16:24:50.000 UTC</summary>

For some reason your `pip` install is not using a prebuilt wheel. Can you show the output of `pip debug --verbose` (or at least the "Compatible tags" section)? If it is Windows, I wonder if it's Windows ARM or 32-bit, both of which we don't prebuild wheels for.

</details>


---

<a id="563"></a>

### #563: [Feature Request] Update test running to replay

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/563 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-27 13:10:49.000 UTC (1y 6m ago) |
| **Updated** | 2025-05-16 15:02:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We need to replay our test workflows more. Today we don't replay nor do we run without cache, both of which could catch issues. At the least we need to try to auto-replay workflows that complete in tests.

#### Comments (1)

<details>
<summary><strong>avinashtanniru</strong> commented on 2025-05-16 15:02:18.000 UTC</summary>

There is a featue : https://docs.temporal.io/develop/python/testing-suite#replay But not sure how it works. 
I'm unable to test this. 

</details>


---

<a id="360"></a>

### #360: [Feature Request] Allow use of type hints even if arg count mismatches in case of default params

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/360 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-01 21:54:50.000 UTC (2y 5m ago) |
| **Updated** | 2025-12-11 19:46:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today we only use a type hint if the arg count matches the input count. But the args may have default values. So we need to at least use type hints when the required arg count matches the input count. Maybe we should just remove the check altogether and just use as many type hints as we can.

#### Comments (1)

<details>
<summary><strong>asavartsov</strong> commented on 2025-12-11 19:46:02.000 UTC</summary>

I guess not a lot changed? I stumbled into this in very funny way: I have a workflow which first argument is a model, and some rest have default values for single reason: being able to quickly "Start Workflow Like This One" from UI because it supports only one argument.

As you guess, in the programmatic flow all values are provided and everything works fine, but when starting from UI, the model becomes a `dict`. 

There are a lot of options of course, from the wrapping to checking if a dict and `model_validating` in manually. Anyway, not knowing about type-hinting limitations, I attributed this sudden appearance of dict to incorrect data converter configuration, and was digging in wrong direction.

So maybe this limitation worth to be mentioned in README, somewhere around `@workflow.run` and  Pydantic sections.

</details>


---

<a id="1262"></a>

### #1262: [Bug] Add ability to obtain `ApplicationError` details with type hint

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1262 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-12-29 15:19:00.000 UTC (4 days ago) |
| **Updated** | 2025-12-29 15:19:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

For users of deserialized `ApplicationError`, today we only offer the deserialized `details` in raw Python form (e.g. dicts and such). For `ApplicationErrors` that are deserialized, we should make the `details` property lazy, have a property for obtaining the raw details (that only works if raw details were set on create, i.e. in deserialization situations), and have a method that lets you access a detail by index and type hint.


---

<a id="1254"></a>

### #1254: [Bug] `SandboxImportNotificationPolicy.WARN_ON_UNINTENTIONAL_PASSTHROUGH` warns on import of the workflow itself to the sandbox

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1254 |
| **State** | OPEN |
| **Author** | VegetarianOrc (Alex Mazzeo) |
| **Created** | 2025-12-17 23:35:07.000 UTC (16 days ago) |
| **Updated** | 2025-12-17 23:35:07.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Leverage `SandboxImportNotificationPolicy.WARN_ON_UNINTENTIONAL_PASSTHROUGH` to identify imports that aren't intentionally passed through to the sandbox.

### Describe the bug

Using a sandboxed runner with the workflows defined in a separate from the worker triggers the unintentional passthrough warning. The workflow must be loaded into the sandbox each time and therefore should be exempt from this warning.

### Minimal Reproduction

```python
# workflows.py
from datetime import timedelta

from temporalio import workflow

from warning.activities import echo_activity


@workflow.defn
class ExampleWorkflow:
    @workflow.run
    async def run(self) -> str:
        activity_result = await workflow.execute_activity(
            echo_activity,
            "example",
            task_queue="example-task-queue",
            start_to_close_timeout=timedelta(seconds=10),
        )

        return activity_result
```

```python
# activities.py
from temporalio import activity


@activity.defn
async def echo_activity(input: str) -> str:
    return f"hello {input}"

```

```python
# worker.py
import asyncio

from temporalio.client import Client
from temporalio.envconfig import ClientConfig
from temporalio.worker import Worker
from temporalio.worker.workflow_sandbox import (
    SandboxedWorkflowRunner,
    SandboxRestrictions,
)
from temporalio.workflow import SandboxImportNotificationPolicy

from warning.activities import echo_activity
from warning.workflows import ExampleWorkflow


async def main():
    config = ClientConfig.load_client_connect_config()
    config.setdefault("target_host", "localhost:7233")

    # Start client
    client = await Client.connect(**config)

    worker = Worker(
        client,
        task_queue="example-task-queue",
        workflows=[ExampleWorkflow],
        activities=[echo_activity],
        workflow_runner=SandboxedWorkflowRunner(
            restrictions=SandboxRestrictions.default.with_import_notification_policy(
                SandboxImportNotificationPolicy.WARN_ON_DYNAMIC_IMPORT
                | SandboxImportNotificationPolicy.WARN_ON_UNINTENTIONAL_PASSTHROUGH
            )
        ),
    )

    await worker.run()


if __name__ == "__main__":
    asyncio.run(main())
```

Starting the above worker yields this log on startup and workflow execution:

> uv run warning/worker.py
/.../temporalio/worker/workflow_sandbox/_importer.py:323: UserWarning: Module warning.workflows was not intentionally passed through to the sandbox.
  warnings.warn(
/.../temporalio/worker/workflow_sandbox/_importer.py:323: UserWarning: Module warning.activities was not intentionally passed through to the sandbox.
  warnings.warn(

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- Temporal Version: SDK 1.20

### Additional context

<!-- Add any other context about the problem here. -->



---

<a id="1237"></a>

### #1237: [Bug] Converter returns bad value converting `dict[None, Any]`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1237 |
| **State** | OPEN |
| **Author** | tconley1428 |
| **Created** | 2025-12-03 21:58:21.000 UTC (1 months ago) |
| **Updated** | 2025-12-03 21:58:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I don't know why this would be a thing.

### Describe the bug

In `test_converter.py`, 
`ok(dict[None, str], {'null': "1"})` passes, but that doesn't really seem like the correct return object.

### Minimal Reproduction

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

### Additional context

<!-- Add any other context about the problem here. -->



---

<a id="1232"></a>

### #1232: [Feature Request] Add BasedPyright as a required typecheck

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1232 |
| **State** | OPEN |
| **Author** | tconley1428 |
| **Created** | 2025-12-02 20:02:33.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 20:02:33.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

The codebase should pass checks from BasedPyright as it gains user adoption.

### Describe the solution you'd like

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="1230"></a>

### #1230: [Feature Request] Support non-workflow activities

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1230 |
| **State** | OPEN |
| **Author** | maciejdudko (Maciej Dudkowski) |
| **Created** | 2025-12-02 17:20:15.000 UTC (1 months ago) |
| **Updated** | 2025-12-02 17:20:15.000 UTC |
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

<a id="1209"></a>

### #1209: [Feature Request] Allow overriding of the Worker Deployment Version when invoking a Child Workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1209 |
| **State** | OPEN |
| **Author** | chris-olszewski (Chris Olszewski) |
| **Created** | 2025-11-12 16:25:55.000 UTC (1 months ago) |
| **Updated** | 2025-11-12 16:25:55.000 UTC |
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

<a id="1176"></a>

### #1176: [Feature Request] Clean up pyright exclude list

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1176 |
| **State** | OPEN |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-10-21 21:36:14.000 UTC (2 months ago) |
| **Updated** | 2025-10-21 21:36:14.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
Ran into the CI lint failure mentioned in `pyproject.toml`
```
  # TODO: these pass locally but fail in CI with
  # error: Import "temporalio.bridge.temporal_sdk_bridge" could not be resolved
```

ended up switching the order of `poe lint` and `poe build-develop` in CI to resolve this issue. 

### Describe the solution you'd like
The list of excludes is quite long, with some substantial files. We should go through and clean up the list of files that need to be excluded here.

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

<a id="1121"></a>

### #1121: [Feature Request] Document runtime telemetry config fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1121 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-25 14:14:35.000 UTC (3 months ago) |
| **Updated** | 2025-09-25 14:14:35.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

`OpenTelemetryConfig` and `PrometheusConfig` should have their fields documented clearly


---

<a id="1079"></a>

### #1079: [Feature Request] Ensure tests exist to confirm custom slot supplier slot info has proper fields

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1079 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-09-05 12:31:34.000 UTC (3 months ago) |
| **Updated** | 2025-09-05 12:31:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/672



---

<a id="1077"></a>

### #1077: [Feature Request] Extend typing improvements from #938

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1077 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-09-04 02:14:04.000 UTC (4 months ago) |
| **Updated** | 2025-09-04 02:14:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

#938 improved type inference. Check whether the analogous improvement can be made elsewhere, as suggested in the comment:

> Should this also be done with workflow things like execute_activity, start_activity, execute_child_workflow, and start_child_workflow?


---

<a id="1056"></a>

### #1056: [Feature Request] Add workflow MCP client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/1056 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-08-26 15:54:29.000 UTC (4 months ago) |
| **Updated** | 2025-08-26 17:02:45.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

The SDK should contain a component allowing MCP to be used from native workflow code (i.e. when not using a 3rd-party agent SDK).

For the SDK API, one possibility is that this will be an `mcp.ClientSession`.

The initial version of this should allow use of existing `stdio` and `http` transport MCP servers. Regarding implementation, one possibility is that this will involve a custom transport that responds to `tools/list` and `tools/call` calls by making activity calls, making use of an activity-local activity worker to implement stateful sessions, as implemented in https://github.com/temporalio/sdk-python/pull/1021. This may be similar to [nexus-mcp-python:nexusmcp/workflow_transport.py](https://github.com/bergundy/nexus-mcp-python/blob/main/nexusmcp/workflow_transport.py), adapted to use activities.

Subsequent versions should allow fully durable/fault-tolerant tool calls / client sessions, i.e. making use of durable execution primitives such as workflows exposed as MCP tools. This may involve adding options to make the transport use nexus operations in addition to activities. 


---

<a id="921"></a>

### #921: Remove eval_type_backport dependency

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/921 |
| **State** | OPEN |
| **Author** | tconley1428 |
| **Created** | 2025-06-25 16:07:36.000 UTC (6 months ago) |
| **Updated** | 2025-06-25 16:07:39.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | tconley1428 |
| **Milestone** | None |

#### Description

When python 3.9 is EOL, we should remove the dependency on `eval_type_backport` in the `open-ai` extra. 


---

<a id="892"></a>

### #892: [Feature Request] Support `merge_extra` in custom adapters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/892 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-06-06 20:26:24.000 UTC (7 months ago) |
| **Updated** | 2025-06-06 20:26:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/sdk-python/issues/276#issuecomment-2949910553.

For `workflow.LoggerAdapter` and `activity.LoggerAdapter`, consider supporting `merge_extra` to allow users to set adapter-level extra data. Note, the stdlib's form of this is 3.13 only so we may need our own form.


---

<a id="870"></a>

### #870: [Python] Worker Versioning high level client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/870 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-05-14 22:46:38.000 UTC (7 months ago) |
| **Updated** | 2025-05-14 22:47:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Create the high-level client for control plane operations concerning worker deployments. See the Go one as an example (though it also needs some updating as of this writing)


---

<a id="834"></a>

### #834: [Bug] Python 3.13.3 on macOS Intel hangs post-test

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/834 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-18 15:08:16.000 UTC (8 months ago) |
| **Updated** | 2025-04-18 15:08:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

On latest Python (3.13.3 as of this writing), macOS Intel sometimes hangs post `pytest` run in our CI, with things like:

```
 2025-04-17T16:21:46.354310Z  WARN temporal_client::retry: gRPC call poll_nexus_task_queue retried 6 times error=Status { code: Unavailable, message: "tcp connect error: Connection refused (os error 61)", source: Some(tonic::transport::Error(Transport, ConnectError(ConnectError("tcp connect error", Os { code: 61, kind: ConnectionRefused, message: "Connection refused" })))) }
2025-04-17T16:21:46.373735Z  WARN temporal_client::retry: gRPC call poll_workflow_task_queue retried 6 times error=Status { code: Unavailable, message: "tcp connect error: Connection refused (os error 61)", source: Some(tonic::transport::Error(Transport, ConnectError(ConnectError("tcp connect error", Os { code: 61, kind: ConnectionRefused, message: "Connection refused" })))) }
```

and 

```
2025-04-17T22:02:54.232127Z  WARN temporal_client::retry: gRPC call get_workflow_execution_history retried 5 times error=Status { code: Unavailable, message: "tcp connect error: Connection refused (os error 61)", source: Some(tonic::transport::Error(Transport, ConnectError(ConnectError("tcp connect error", Os { code: 61, kind: ConnectionRefused, message: "Connection refused" })))) }
2025-04-17T22:02:55.213783Z  WARN temporal_client::retry: gRPC call get_workflow_execution_history retried 6 times error=Status { code: Unavailable, message: "tcp connect error: Connection refused (os error 61)", source: Some(tonic::transport::Error(Transport, ConnectError(ConnectError("tcp connect error", Os { code: 61, kind: ConnectionRefused, message: "Connection refused" })))) }
```

This may be some worker in some test unable to shutdown properly in this specific situation.


---

<a id="826"></a>

### #826: [Bug] test_unfinished_handler_on_workflow_termination fails in some situations with time skipping and update

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/826 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-10 16:53:11.000 UTC (8 months ago) |
| **Updated** | 2025-04-10 16:54:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

As part of #644 we were trying to unskip these tests. But they still fail.

Specifically, when running in Python 3.13 (and maybe others) with time skipping test server, all permutations of `test_unfinished_handler_on_workflow_termination` that use `handler_type` `update`, `handler_waiting` `no-wait-all-handlers-finish`, and `workflow_termination_type` `continue-as-new` fail with "workflow execution already completed".

To replicate, run:

    poe test -s --log-cli-level=DEBUG --workflow-environment time-skipping -k test_unfinished_handler_on_workflow_termination

To see the failure. Leaving tests skipped for now.


---

<a id="810"></a>

### #810: [Feature Request] Implement proper behavior for `cancelled`, `uncancel`, and `cancelling` of activities and child workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/810 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-04-01 13:12:44.000 UTC (9 months ago) |
| **Updated** | 2025-04-01 13:12:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Implement proper behavior for `cancelled`, `uncancel`, and `cancelling` of activities and child workflows. The behavior probably looks like:

* `cancelled` - return true once it comes back as canceled
* `uncancel` - raise an (non-Temporal) exception saying that uncancel is not supported
* `cancelling` - probably just works already


---

<a id="773"></a>

### #773: [Feature Request] Built-in query responses should use "RawValue"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/773 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-21 20:34:19.000 UTC (10 months ago) |
| **Updated** | 2025-02-21 20:39:54.000 UTC |
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

<a id="772"></a>

### #772: [Bug] Investigate unused bind_f function

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/772 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-02-21 14:20:49.000 UTC (10 months ago) |
| **Updated** | 2025-02-21 14:20:49.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Investigate purpose of unused `bind_f` function. See https://github.com/temporalio/sdk-python/pull/771/files/a4803fc18aa4c93ccc1d00709f759c6143d8f185#r1960041327


---

<a id="764"></a>

### #764: Expose Workflow cancel cause/reason

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/764 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-11 20:44:19.000 UTC (10 months ago) |
| **Updated** | 2025-02-11 20:44:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

WorkflowExecutionCancelRequestedEventAttributes has a cause field that should be exposed when workflows receive cancels, and we should additionally expose this as an input when users are issuing cancels from clients or commands


---

<a id="762"></a>

### #762: [Feature Request] Enforce no-mutable-defaults lint rule

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/762 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2025-02-06 23:46:03.000 UTC (11 months ago) |
| **Updated** | 2025-02-06 23:46:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://google.github.io/styleguide/pyguide.html#2124-decision
https://docs.astral.sh/ruff/rules/mutable-argument-default/


---

<a id="761"></a>

### #761: [Feature Request] Publish musl wheel

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/761 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-05 22:37:16.000 UTC (11 months ago) |
| **Updated** | 2025-02-05 22:37:16.000 UTC |
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

<a id="754"></a>

### #754: [Feature Request] Add explicit memoization support to the `patched()` API

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/754 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:44:27.000 UTC (11 months ago) |
| **Updated** | 2025-01-29 23:44:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In short:

- Add a `memoized` argument to the `patched` and `deprecate_patch` APIs.

- Keep backward compatibility on those functions for non-specifying the `memoized` argument, but deprecate those signatures. Make sure documentation clearly indicate how existing calls may safely get converted.

- Delegate handling of the `patched` logic to Core.

See temporalio/features#591 for details.


---

<a id="748"></a>

### #748: [Feature Request] Allow customization of dev server UI port

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/748 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-24 13:26:15.000 UTC (11 months ago) |
| **Updated** | 2025-01-24 13:26:15.000 UTC |
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

<a id="722"></a>

### #722: [Feature Request] Stack trace on deadlock exception improvements

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/722 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-08 22:38:17.000 UTC (11 months ago) |
| **Updated** | 2025-01-08 22:38:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

https://github.com/temporalio/sdk-python/pull/626 added a stack traces from the deadlocking thread, but there are three improvements we need to make to make sure this is working properly:

1. Make this also work for users that have opted out of sandboxing (if, as suspected reading the PR, it doesn't actually work already)
2. Add a test to confirm the deadlock stack trace represents (couldn't see such a test in the PR)
3. We append `(no frames available)` or `(failed getting frames: {err})` when we couldn't capture the threads trace, but we should also add something like `(no thread ID available)` if the earlier condition occurs where for some reason we don't have a thread ID at all.


---

<a id="675"></a>

### #675: [Feature Request] Auto-skip time in time-skipping testing environment when waiting on update result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/675 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-10-21 16:31:03.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-21 16:31:03.000 UTC |
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

<a id="669"></a>

### #669: [Feature Request] Support / provide guidance on using OpenTelemetry logging + metrics SDKs with process-pool workers 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/669 |
| **State** | OPEN |
| **Author** | gregbrowndev (Greg Brown) |
| **Created** | 2024-10-14 20:46:25.000 UTC (1y 2m ago) |
| **Updated** | 2024-10-14 20:46:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

[Slack discussion](https://temporalio.slack.com/archives/CTT84RS0P/p1728929473099159)

Hi,

I've been rolling out an OpenTelemetry-based observability solution for my Temporal app. The reason for using OTel is partly due to the Temporal Python SDK already using OTel for traces and metrics (in the SDK), so I want to adopt those SDKs for custom metrics and logging.

Everything works great in async activities. I've been able to use OTel tooling for logging and tracing (using the `TracingInterceptor` as [seen in this example](https://github.com/temporalio/samples-python/blob/main/open_telemetry/worker.py)), I can see traces with their correlated logs for each activity in my backend (Grafana, Loki, Tempo). The Temporal SDK provides `activity.metric_meter()`, which I've used to add custom metrics to async activities.

However, I'm having several issues with sync activities running on process-pool-based workers (I'm happy to split them into separate issues):

The `trace_id` and `span_id` injected into the logs are incorrect for all except the first activity that runs on that worker. It seems that the first activity's IDs are injected into all activities that follow it.
- Temporal SDK's `activity.metric_meter()` doesn't work in process-pools, which is clearly a known but probably related issue. I planned to set up a separate OTel `MetricProvider` to support custom metrics in my sync activities. However, this looks to have the same limitations (I haven't tried everything exhaustively yet).

Note: I suspect initialising the `MeterProvider` for each process/activity will be a lot more simple because it isn't attached to a global root logger.

While these issues are likely inherently within the OTel SDKs, the same issues are also known to be true for the TracingProvider ([ref](https://opentelemetry-python.readthedocs.io/en/latest/examples/fork-process-model/README.html)), yet Temporal managed to get that to work. 

Please provide guidance on setting up OTel logging and custom metrics in process-pool-based workers or support them natively like you do OTel tracing.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

### Describe the solution you'd like

Support for the remaining OpenTelemetry SDKs (metric and logging) natively in both async, thread-pool, and process-pool workers. 

<!-- A clear and concise description of what you want to happen. SCREENSHOTS OR CODE SAMPLES ARE VERY HELPFUL -->




---

<a id="657"></a>

### #657: [Bug] Cannot replace worker client if default Runtime is used

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/657 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-09-30 18:11:41.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-30 18:11:41.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Our check that the runtime is the same on the replaced client as is on the worker does not work if the runtime is not set on the client (i.e. lazily uses the default). We need to either more eagerly set the runtime default on the client config for the service, or use a different way to obtain the runtime of the bridge service client when comparing.

Replication:

```python
import asyncio
from dataclasses import dataclass
from datetime import timedelta

from temporalio import activity, workflow
from temporalio.client import Client
from temporalio.worker import Worker


# While we could use multiple parameters in the activity, Temporal strongly
# encourages using a single dataclass instead which can have fields added to it
# in a backwards-compatible way.
@dataclass
class ComposeGreetingInput:
    greeting: str
    name: str


# Basic activity that logs and does string concatenation
@activity.defn
async def compose_greeting(input: ComposeGreetingInput) -> str:
    activity.logger.info("Running activity with parameter %s" % input)
    return f"{input.greeting}, {input.name}!"


# Basic workflow that logs and invokes an activity
@workflow.defn
class GreetingWorkflow:
    @workflow.run
    async def run(self, name: str) -> str:
        workflow.logger.info("Running workflow with parameter %s" % name)
        return await workflow.execute_activity(
            compose_greeting,
            ComposeGreetingInput("Hello", name),
            start_to_close_timeout=timedelta(seconds=10),
        )


async def main():
    # Uncomment the lines below to see logging output
    # import logging
    # logging.basicConfig(level=logging.INFO)

    # Start client
    client = await Client.connect("localhost:7233")

    client_2 = await Client.connect("localhost:7233")


    # Run a worker for the workflow
    async with Worker(
        client,
        task_queue="hello-activity-task-queue",
        workflows=[GreetingWorkflow],
        activities=[compose_greeting],
    ) as worker:

        worker.client = client_2

        # While the worker is running, use the client to run the workflow and
        # print out its result. Note, in many production setups, the client
        # would be in a completely separate process from the worker.
        result = await client.execute_workflow(
            GreetingWorkflow.run,
            "World",
            id="hello-activity-workflow-id",
            task_queue="hello-activity-task-queue",
        )
        print(f"Result: {result}")


if __name__ == "__main__":
    asyncio.run(main())
```

In the meantime, simply using `default=temporalio.runtime.Runtime.default()` in the client `connect` calls will work around the issue.


---

<a id="637"></a>

### #637: [Bug] Windows 3.12.5 builds are broken

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/637 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-09-06 13:17:38.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-06 13:17:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See e.g. https://github.com/temporalio/sdk-python/actions/runs/10721545848/job/29731379405

```
error: linking with `link.exe` failed: exit code: 1181
  |
  = note: "C:\\Program Files\\Microsoft Visual Studio\\2022\\Enterprise\\VC\\Tools\\MSVC\\14.41.34120\\bin\\HostX64\\x64\\link.exe"
  
  ...
  
= note: LINK : fatal error LNK1181: cannot open input file 'python3.lib'
```


---

<a id="636"></a>

### #636: [Feature Request] Add type-level tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/636 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-09-05 15:11:15.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-05 15:11:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We'd like a good way to write type-level tests to confirm that mypy and pyright are enforcing what we want them to enforce and to prevent regressions.


---

<a id="613"></a>

### #613: [Feature Request] Investigate adding allure to GitHub Actions CI workflows

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/613 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-08-19 15:18:00.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-19 15:18:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

https://allurereport.org/
https://allurereport.org/docs/pytest/
https://allurereport.org/docs/integrations-github/

The feature providing correlation of results across historical runs sounds particularly interesting, if it works well.

I was able to generate a nice-looking report locally via

```
brew install allure
pip install allure-pytest
python -m pytest --alluredir allure-results tests/worker/test_workflow.py
allure serve allure-results
```


---

<a id="611"></a>

### #611: [Feature Request] Better error message when trying to upsert a datetime search attribute with non-tz-aware datetime.

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/611 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-08-16 03:34:20.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-16 03:34:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/sdk-python/issues/572

The SDK should raise an exception with a helpful error message if the datetime object is invalid for use as a datetime search attribute (e.g. lacks a timezone), rather than waiting for the server to fail the WFT Completion.


---

<a id="608"></a>

### #608: [Feature Request] Make payload conversion errors on workflow input more discriminable

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/608 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-08-14 15:34:32.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-14 15:34:32.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

On invalid workflow input, if a bad value is called, the task fails with a runtime error. This should be a better error type that can be set on `workflow_failure_exception_types`. Consider reusing this exception in any other place that has payload conversion errors provided we are comfortable with the compatibility break of changing an error type.


---

<a id="607"></a>

### #607: [Bug] Prevent hot-reload of workflow definitions from disk

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/607 |
| **State** | OPEN |
| **Author** | dandavison (Dan Davison) |
| **Created** | 2024-08-14 14:40:20.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-14 14:40:20.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

A Python worker reloads the workflow definition from disk every time a new workflow run is started, i.e. without requiring the worker process to be shutdown and restarted. So for example, a long-running workflow that CANs will "hot reload" like this on every CAN, and a non-sticky worker will hot-reload on every WFT.

This is a side-effect of implementation (worker sandboxing involves disabling import cache which results in re-reading from disk) rather than being desired behavior, and isn't appropriate in production worker deployments since users are likely to expect that during deployments they can overwrite files without any modifications to running processes until process restart.

So, let's find a good way to prevent the behavior. For example, one possibility might involve permitting the re-read-from-disk to continue, but having the worker copy the relevant files somewhere private, and importing workflows from there.


---

<a id="606"></a>

### #606: [Feature Request] Consider aligning activation job application with TS changes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/606 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2024-08-13 21:33:26.000 UTC (1y 4m ago) |
| **Updated** | 2024-08-13 21:33:26.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Python currently applies jobs in a few different batches: https://github.com/temporalio/sdk-python/blob/main/temporalio/worker/_workflow_instance.py#L325

In TS, we changed this to only do one batch, and then run the event loop: https://github.com/temporalio/sdk-typescript/pull/1488

This model is a bit more intuitive and also fits in with what I have come to realize is really the most appropriate model for Core based languages, where everything that happens in a workflow task is "applied to state" synchronously, and then the way routines proceed to run is largely up to the language runtime (or our deterministic version thereof). Ideally, all Core langs (really, all of them, but we won't go back to change that) follow that model - state is updated synchronously, then stuff runs until we're blocked.

There is a really nice test [here](https://github.com/temporalio/sdk-typescript/pull/1488/files#diff-edcae2d23017bc07e3a859b68e980d151947323c04128f2bc08147bda4a1d7deR2512) @mjameswh added that I think all async languages should have some form of that helps us understand exactly how routines will proceed.

I'm not sure if making this change will actually have consequences to the _realized_ python behavior. In any case it should probably be protected with a flag if we make it.


---

<a id="585"></a>

### #585: [Bug] Test flake, may be sandbox import issue

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/585 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-07-17 17:40:48.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-17 17:40:48.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Sometimes on Python 3.8, there is this test failure:

```
tests/worker/test_replayer.py::test_replayer_workflow_incomplete - RuntimeError: Failed validating workflow SayHelloWorkflow
```

Here is the full logged exception:

```
______________________ test_replayer_workflow_incomplete _______________________

>   import asyncio

tests/worker/test_replayer.py:1: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
temporalio/worker/workflow_sandbox/_importer.py:441: in __call__
    return self.current(*args, **kwargs)
temporalio/worker/workflow_sandbox/_importer.py:234: in _import
    mod = importlib.__import__(name, globals, locals, fromlist, level)
<frozen importlib._bootstrap>:1093: in __import__
    ???
<frozen importlib._bootstrap>:1014: in _gcd_import
    ???
<frozen importlib._bootstrap>:991: in _find_and_load
    ???
<frozen importlib._bootstrap>:961: in _find_and_load_unlocked
    ???
<frozen importlib._bootstrap>:219: in _call_with_frames_removed
    ???
<frozen importlib._bootstrap>:1014: in _gcd_import
    ???
<frozen importlib._bootstrap>:991: in _find_and_load
    ???
<frozen importlib._bootstrap>:975: in _find_and_load_unlocked
    ???
<frozen importlib._bootstrap>:671: in _load_unlocked
    ???
<frozen importlib._bootstrap_external>:843: in exec_module
    ???
<frozen importlib._bootstrap>:219: in _call_with_frames_removed
    ???
../../../.cache/pypoetry/virtualenvs/temporalio-s8Ez09FR-py3.8/lib/python3.8/site-packages/_pytest/assertion/__init__.py:9: in <module>
    from _pytest.assertion import rewrite
temporalio/worker/workflow_sandbox/_importer.py:441: in __call__
    return self.current(*args, **kwargs)
temporalio/worker/workflow_sandbox/_importer.py:234: in _import
    mod = importlib.__import__(name, globals, locals, fromlist, level)
<frozen importlib._bootstrap>:1113: in __import__
    ???
<frozen importlib._bootstrap>:1042: in _handle_fromlist
    ???
<frozen importlib._bootstrap>:219: in _call_with_frames_removed
    ???
<frozen importlib._bootstrap>:1014: in _gcd_import
    ???
<frozen importlib._bootstrap>:991: in _find_and_load
    ???
<frozen importlib._bootstrap>:975: in _find_and_load_unlocked
    ???
<frozen importlib._bootstrap>:671: in _load_unlocked
    ???
<frozen importlib._bootstrap_external>:843: in exec_module
    ???
<frozen importlib._bootstrap>:219: in _call_with_frames_removed
    ???
../../../.cache/pypoetry/virtualenvs/temporalio-s8Ez09FR-py3.8/lib/python3.8/site-packages/_pytest/assertion/rewrite.py:32: in <module>
    from _pytest._io.saferepr import DEFAULT_REPR_MAX_SIZE
        self._on_eviction_hook = on_eviction_hook
        self._disable_safe_eviction = disable_safe_eviction
        self._throw_after_activation: Optional[Exception] = None
    
        # If there's a debug mode or a truthy TEMPORAL_DEBUG env var, disable
        # deadlock detection, otherwise set to 2 seconds
        self._deadlock_timeout_seconds = (
            None if debug_mode or os.environ.get("TEMPORAL_DEBUG") else 2
        )
    
        # Keep track of workflows that could not be evicted
        self._could_not_evict_count = 0
    
        # Set the worker-level failure exception types into the runner
        workflow_runner.set_worker_level_failure_exception_types(
            workflow_failure_exception_types
        )
    
        # Validate and build workflow dict
        self._workflows: Dict[str, temporalio.workflow._Definition] = {}
        self._dynamic_workflow: Optional[temporalio.workflow._Definition] = None
        for workflow in workflows:
            defn = temporalio.workflow._Definition.must_from_class(workflow)
            # Confirm name unique
            if defn.name in self._workflows:
                raise ValueError(f"More than one workflow named {defn.name}")
            # Prepare the workflow with the runner (this will error in the
            # sandbox if an import fails somehow)
            try:
                if defn.sandboxed:
                    workflow_runner.prepare_workflow(defn)
                else:
                    unsandboxed_workflow_runner.prepare_workflow(defn)
            except Exception as err:
>               raise RuntimeError(f"Failed validating workflow {defn.name}") from err
E               RuntimeError: Failed validating workflow SayHelloWorkflow

temporalio/worker/_workflow.py:130: RuntimeError
```

I suspect this is the previously-known issue in older Python with reimporting (https://github.com/python/cpython/issues/91351). Just opening issue for tracking.


---

<a id="543"></a>

### #543: [Bug] Generating protos via docker and manually are causing different whitespace inside of multi-paragraph docs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/543 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-06-04 19:23:33.000 UTC (1y 7m ago) |
| **Updated** | 2024-06-04 19:23:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

When using the docker-based gen proto method, for whatever reason it is slightly different than the manual way outside of the container which causes CI diff check to break


---

<a id="536"></a>

### #536: [Feature Request] Clarify exception on return type decoding failure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/536 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-31 12:58:16.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-31 12:58:17.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Today in child workflow for instance if the return type is not the expected, it says "Failed decoding arguments". It should say "Failed to decode return value on <child workflow>". Same for activities (and make sure it's clear what child/activity failed to _encode_ if needed too).


---

<a id="535"></a>

### #535: [Feature Request] Turn invalid asyncio call warnings into errors

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/535 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-05-29 22:25:00.000 UTC (1y 7m ago) |
| **Updated** | 2024-05-29 22:25:01.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

As part of #533, we are warning if `asyncio.as_completed()` or `asyncio.wait()` are invoked in workflows because they are non-deterministic. After a release and a good period of time, we should fail when these are called the same way we do with other invalid workflow calls.


---

<a id="503"></a>

### #503: [Bug] Do not mutate `extra` in activity/workflow loggers

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/503 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-04-09 20:19:03.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-09 20:19:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

If there is an existing `extra` dictionary passed to the logger, copy it before mutating it


---

<a id="496"></a>

### #496: [Bug] Fix explanation of Pydantic datetime issue

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/496 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-03-29 21:34:44.000 UTC (1y 9m ago) |
| **Updated** | 2024-03-29 22:23:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Today the README says to mark datetime as passthrough, but the right answer is to mark it as unrestricted. Fix this in README, and also consider providing snippet from https://github.com/temporalio/samples-python/blob/4303a9b15f4ddc4cd770bc0ba33afef90a25d3ae/pydantic_converter/worker.py#L45-L65.

Also clarify in README that you should pass through non-workflow imports, not just third party.


---

<a id="488"></a>

### #488: [Bug] Fix typo in restriction set

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/488 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-03-15 21:49:38.000 UTC (1y 9m ago) |
| **Updated** | 2024-03-15 21:49:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

https://github.com/temporalio/sdk-python/blob/f3d1b8511a3ef33b36fa806a9fc56f96a4a70b84/temporalio/worker/workflow_sandbox/_restrictions.py#L602 needs to be a comma instead of space


---

<a id="479"></a>

### #479: [Feature Request] Reflection-based payload codec test to ensure all non-search-attribute payloads are covered

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/479 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-26 15:05:24.000 UTC (1y 10m ago) |
| **Updated** | 2024-02-26 15:07:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In .NET we have [these tests](https://github.com/temporalio/sdk-dotnet/blob/main/tests/Temporalio.Tests/Worker/WorkflowCodecHelperTests.cs) which make sure any new payload added in gRPC is made part of codec conversion. But we don't have this for Python. We should.

(this would have caught #477)


---

<a id="467"></a>

### #467: [Feature Request] Support workflow metadata query

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/467 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2024-02-02 21:29:42.000 UTC (1y 11m ago) |
| **Updated** | 2024-02-02 21:29:42.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/51


---

<a id="439"></a>

### #439: [Feature Request] Allow continue as new from update handler

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/439 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-29 21:26:16.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-29 21:26:16.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Allow continue as new from update handler


---

<a id="438"></a>

### #438: [Feature Request] Allow `RawValue` to be used for Search Attibute Upsert

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/438 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2023-11-29 19:26:11.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-29 19:26:11.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

All in the title. There's no way at the moment to pass `RawValues` as a search attribute value. This is useful for ourselves for certain testing purposes, but could also be desirable for users shuttling SAs from one workflow to another, etc.


---

<a id="436"></a>

### #436: [Bug] Ensure continue as new raised from update handler is a task failure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/436 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-28 20:49:21.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-28 20:49:21.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Right now reading code, this may end up being swallowed (it's a base exception that I think is re-raised and uncaught in a task).


---

<a id="435"></a>

### #435: [Bug] Overload checking not catching bad parameters anymore

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/435 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-27 21:26:59.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-27 21:26:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

It appears sometime recently or in some MyPy version recently, you can execute a single-param workflow with no param and MyPy won't catch it. Investigate this and other places where type checking should catch issues but is not. Ideally we can write tests to confirm type checking failures.


---

<a id="433"></a>

### #433: [Feature Request] Remove activation job sorting and confirm update order

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/433 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-27 13:46:03.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-27 13:46:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Inside `_workflow_instance.py` we are sorting activation jobs which core does now. After https://github.com/temporalio/sdk-core/pull/639 is merged, remove that sorting, and write a test confirming that interleaved updates and signals remain interleaved.


---

<a id="427"></a>

### #427: [Bug] dataclasses require even defaulted fields in the JSON dict

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/427 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-13 20:41:00.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-13 20:41:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

It appears, at first code glance, that a dataclass cannot deserialize a JSON dict that doesn't have _all_ fields including ones with defaults. This is a bug, we should not require all fields of a dataclass be present.


---

<a id="421"></a>

### #421: [Feature Request] Move from black/isort to Ruff

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/421 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-11-09 15:20:21.000 UTC (2y 1m ago) |
| **Updated** | 2023-11-09 17:29:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | rachfop |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

We did this at https://github.com/temporalio/samples-python/pull/91 with success, we should do it here too


---

<a id="377"></a>

### #377: [Feature Request] Warn when non-static activity method registered as static

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/377 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-08-23 18:03:59.000 UTC (2y 4m ago) |
| **Updated** | 2024-03-18 18:00:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like
If possible, if an activity's first parameter is `self` but it's not an instance method, warn when creating the worker. This means the instance wasn't instantiated.




---

<a id="355"></a>

### #355: [Feature Request] Log and drop signals that pass the wrong number of arguments

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/355 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-24 22:22:52.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-24 22:22:52.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

In #349 we now drop signals whose arguments are of the wrong type. But we still fail the workflow task if the arity is off, e.g. with Python exceptions like "missing 1 required positional argument". Try to make sure there is one argument for every required parameter and no more than accepted (varargs notwithstanding). May be easiest to have a min/max param count on the `_SignalDefinition` and just check against that.


---

<a id="352"></a>

### #352: [Bug] Cancel received in between awaitables not cancelling workflow

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/352 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-18 18:08:21.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-18 18:10:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Given workflow logic like:

```python
await workflow.execute_activity(some_activity, ...)
await workflow.execute_child_workflow(SomeChildWorkflow.run, ...)
```

There may be an issue where cancellation is sent after activity is marked complete but before the next task is processed. So an event history like:

* `ActivityTaskCompleted`
* `WorkflowExecutionCancelRequested`

Where both of those are in a single task. To replicate, the best way may be to:

* Create separate workflow and activity workers
* After activity starts, kill the workflow worker
* Complete activity and confirm completion is in history
* Send cancellation to workflow
* Start back up the workflow worker and confirm it processes activity completion, then cancellation

This has not been tested, so it may not be a bug. If this is indeed a bug, this may be a gap in our asyncio implementation. One would expect that issuing a cancel on the workflow asyncio task would automatically propagate to next non-shielded await but maybe it does not do that automatically because it never expects to receive a cancel when not awaiting on something (i.e. it relies on GIL to know that asyncio does not yield to outside until waiting on coroutine). But [the docs](https://docs.python.org/3/library/asyncio-task.html#task-cancellation) do say:

> When a task is cancelled, [asyncio.CancelledError](https://docs.python.org/3/library/asyncio-exceptions.html#asyncio.CancelledError) will be raised in the task at the next opportunity.

Need to investigate...


---

<a id="348"></a>

### #348: [Feature Request] Make all exposed modules be packages

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/348 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-07-17 18:05:59.000 UTC (2y 5m ago) |
| **Updated** | 2023-07-17 18:06:04.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

`temporalio.activity`, `temporalio.workflow`, etc are all modules right now. Besides the obvious benefit of properly separating code in a package into multiple files, the other benefit is that we can control `__all__` a bit more clearly so that users' intellisense doesn't display things we've imported (and in general they aren't able to access the imported things).


---

<a id="301"></a>

### #301: [Bug] Proxied classes are not properly hashable

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/301 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2023-03-23 13:31:29.000 UTC (2y 9m ago) |
| **Updated** | 2023-03-23 13:31:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

Getting `unhashable type: '_RestrictedProxy'` possibly on a datetime in a workflow even though we define `__hash__` I am unsure why this is, need to investigate.


---

<a id="45"></a>

### #45: Improve workflow stack trace query result

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/45 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-06-10 15:28:25.000 UTC (3y 6m ago) |
| **Updated** | 2022-06-10 15:28:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👀 1 |

#### Description

### Is your feature request related to a problem? Please describe.

Right now the stack traces are not very good

### Describe the solution you'd like

Make them better hopefully without unnecessary performance penalty


---

<a id="11"></a>

### #11: Test client/worker/core behavior across fork

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-python/issues/11 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2022-03-15 20:27:43.000 UTC (3y 9m ago) |
| **Updated** | 2022-03-15 20:27:43.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | ❤️ 1 👀 1 |

#### Description

### Is your feature request related to a problem? Please describe.

Right now, it is basically undefined how core will work across forks. We do know it fails. For example, the client var, when copied across the fork, has Rust file descriptors copied for the gRPC stuff that fail during Rust drop when the child process's version of the var is GC'd.

### Describe the solution you'd like

We need to, without leak, make sure that `fork` does not fail unless you explicitly use something from across the fork, at which point it should fail. No surprise failures like on implicit Python GC failure during drop.

I don't know how yet to do this.


