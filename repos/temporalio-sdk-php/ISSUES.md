# temporalio/sdk-php - Complete Issue Dump

**Generated:** 2025-12-31
**Total Issues:** 47
**Total Upvotes:** 12
**Total Comments:** 66

## Table of Contents

- [Summary](#summary)
- [Top Labels](#top-labels)
- [Issue Index](#issue-index)
- [All Issues](#all-issues)

## Summary

| Metric | Value |
|--------|-------|
| Open Issues | 47 |
| Issues with Upvotes | 7 (15%) |
| Total Upvotes | 12 |
| Total Comments | 66 |

## Top Labels

| Label | Count |
|-------|-------|
| enhancement | 29 |
| Tests | 8 |
| Bug | 7 |
| Question | 5 |
| Feature | 2 |
| Documentation | 1 |

## Issue Index

| # | 👍 | 💬 | Title |
|---|-----|-----|-------|
| [#592](#592-docs-document-sdk-marshaller) | 5 | 6 | [Docs] Document SDK marshaller |
| [#103](#103-question-sentry-integration-for-error-logging) | 0 | 11 | [Question] Sentry Integration for error logging |
| [#577](#577-bug-can-t-run-the-tests-of-updatemethod) | 0 | 7 | [Bug] Can't run the tests of UpdateMethod |
| [#495](#495-discussion-define-a-backwards-compatibility-promise) | 0 | 6 | [Discussion] Define a backwards compatibility promise |
| [#573](#573-bug-workerfactoryinterface-seems-to-be-missing-arguments-for-newworker-method) | 1 | 3 | [Bug] WorkerFactoryInterface seems to be missing argument... |
| [#529](#529-feature-request-registerdelayedcallback-for-tests) | 2 | 1 | [Feature Request] registerDelayedCallback for tests |
| [#302](#302-feature-request-set-the-expectcompletion-result-for-each-activity-call-inside-the-loop) | 1 | 2 | [Feature Request] Set the expectCompletion result for eac... |
| [#123](#123-bug-withenablesessionworker-causes-to-activitynotregisterederror) | 0 | 4 | [Bug] withEnableSessionWorker causes to ActivityNotRegist... |
| [#640](#640-enable-discussions) | 1 | 1 | Enable `Discussions` |
| [#635](#635-bug-memory-leak-workflow-worker) | 0 | 3 | [Bug] Memory leak workflow worker |
| [#580](#580-initial-nexus-implementation-php) | 1 | 1 | Initial Nexus implementation - PHP |
| [#428](#428-bug-unit-test-hangs-with-unit-under-test-has-runtime-or-compile-time-exception) | 0 | 3 | [Bug] Unit test hangs with unit under test has runtime or... |
| [#399](#399-not-a-bug-await-doesn-t-interrupts-on-the-activity-with-error) | 0 | 3 | [Not a Bug] await doesn't interrupts on the activity with... |
| [#642](#642-feature-request-add-first-execution-run-id-to-workflow-info) | 0 | 2 | [Feature Request] Add first execution run ID to workflow ... |
| [#623](#623-feature-request-in-test-env-i-can-t-unserialize-object-structure) | 0 | 2 | [Feature Request] In test env - I can't unserialize objec... |
| [#568](#568-question-how-to-debug-the-activity-task-starttoclose-timeout-error) | 0 | 2 | [Question] How to debug the activity task startToClose ti... |
| [#554](#554-ensure-better-sdk-support-in-ide) | 1 | 0 | Ensure better SDK support in IDE |
| [#532](#532-question-asynchronous-child-workflow-execution-problem) | 0 | 2 | [Question] Asynchronous child workflow execution problem |
| [#501](#501-repair-or-disable-windows-tests-in-ci) | 0 | 2 | Repair or disable Windows tests in CI |
| [#419](#419-feature-request-divide-workflow-stub-objects-and-workflow-proxy-objects) | 0 | 2 | [Feature Request] Divide Workflow stub objects and Workfl... |
| [#654](#654-bug-upserttypedsearchattributes-in-test-server) | 0 | 1 | [Bug] upsertTypedSearchAttributes in test server |
| [#382](#382-bug-methods-without-activitymethod-attribute-are-registered-as-activities-even-magic) | 0 | 1 | [Bug] Methods without ActivityMethod attribute are regist... |
| [#244](#244-feature-request-failureconverter-allow-more-context-in-ordinary-exceptions) | 0 | 1 | [Feature Request] FailureConverter allow more context in ... |
| [#670](#670-feature-request-symfony-8-0-support) | 0 | 0 | [Feature Request] Symfony 8.0 support |
| [#668](#668-feature-request-implement-setcurrentdetails-for-dynamic-workflow-details) | 0 | 0 | [Feature Request] Implement `SetCurrentDetails` for dynam... |
| [#648](#648-feature-request-reclassify-benign-application-errors-in-opentelemetry) | 0 | 0 | [Feature Request] Reclassify Benign Application errors in... |
| [#644](#644-feature-request-plugin-support) | 0 | 0 | [Feature Request] Plugin support |
| [#638](#638-feature-request-add-summary-to-localactivityoptions) | 0 | 0 | [Feature Request] Add Summary to LocalActivityOptions |
| [#636](#636-bug-suppressed-exception-in-worfklow-child) | 0 | 0 | [Bug] Suppressed exception in worfklow child |
| [#624](#624-bug-facade-methods-throw-wrong-exception) | 0 | 0 | [Bug] Facade methods throw wrong exception |
| [#605](#605-php-sdk-support-for-activity-reset) | 0 | 0 | [php] SDK support for activity reset  |
| [#601](#601-feature-request-expose-workflowinboundcallinterceptor-init) | 0 | 0 | [Feature Request] Expose `WorkflowInboundCallInterceptor:... |
| [#595](#595-bug-incorrect-generic-extends-of-rulefactoryinterface) | 0 | 0 | [Bug] Incorrect generic extends of RuleFactoryInterface |
| [#587](#587-feature-request-serialization-context-for-codecs-and-converters) | 0 | 0 | [Feature Request] Serialization context for codecs and co... |
| [#574](#574-feature-request-support-rawvalue-non-converted-values) | 0 | 0 | [Feature Request] Support "RawValue" non-converted values |
| [#567](#567-expose-workflow-cancel-cause-reason) | 0 | 0 | Expose Workflow cancel cause/reason |
| [#558](#558-add-patched-and-deprecatepatch-apis) | 0 | 0 | Add `Patched()` and `DeprecatePatch()` APIs |
| [#545](#545-feature-request-provide-workflow-local) | 0 | 0 | [Feature Request] Provide "workflow local" |
| [#524](#524-feature-request-allow-mocking-child-workflows-like-activites) | 0 | 0 | [Feature Request] Allow mocking child workflows like acti... |
| [#507](#507-eliminate-destructmemorizedinstanceexception) | 0 | 0 | Eliminate DestructMemorizedInstanceException |
| [#502](#502-fix-test-case) | 0 | 0 | Fix test case |
| [#476](#476-feature-request-cloud-operations-api-client) | 0 | 0 | [Feature Request] Cloud Operations API Client |
| [#454](#454-encode-failures-using-encodedattributes) | 0 | 0 | Encode Failures using EncodedAttributes |
| [#400](#400-feature-request-expose-operatorserviceclient) | 0 | 0 | [Feature Request] Expose OperatorServiceClient  |
| [#318](#318-improve-php-files-generated-from-proto) | 0 | 0 | Improve PHP files generated from proto |
| [#285](#285-use-temporal-download-server-to-download-temporalite-or-temporal-test-sever) | 0 | 0 | Use temporal.download server to download `temporalite` or... |
| [#269](#269-feature-request-use-mapworkflowfailuretoexception-for-all-workflow-methods) | 0 | 0 | [Feature Request] Use `mapWorkflowFailureToException` for... |

---

## All Issues

Issues are sorted by priority score (upvotes × 2 + comments).

---

### #592: [Docs] Document SDK marshaller

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/592 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-04-09 10:19:54.000 UTC (8 months ago) |
| **Updated** | 2025-05-29 08:05:31.000 UTC |
| **Upvotes** | 5 |
| **Comments** | 6 |
| **Priority Score** | 16 |
| **Labels** | Documentation |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 5 |

#### Description

Documentation for the marshaller is completely missing. New users have no way to learn how to serialize data objects, typed lists, and more.
It's necessary to explain attributes like Marshal, MarshalArray, types, and so on.

#### Comments (6)

<details>
<summary><strong>KorDum</strong> commented on 2025-04-14 06:55:40.000 UTC</summary>

Apparently, it will be necessary to modify it a bit for static analyzers:
https://github.com/temporalio/sdk-php/issues/595
https://github.com/temporalio/sdk-php/issues/596

Reactions: 👍 1

</details>

<details>
<summary><strong>mtorromeo</strong> commented on 2025-05-12 08:57:20.000 UTC</summary>

This is a fundamental concept that needs documenting.

Is there at least an example that I can take a look at?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-12 11:00:24.000 UTC</summary>

> Is there at least an example that I can take a look at?

https://github.com/temporalio/samples-php/blob/e291d400cec4fa819d428d84f0311dcb0fc3c6bb/app/src/Updates/Zonk/Table.php#L14-L20

https://github.com/temporalio/samples-php/blob/e291d400cec4fa819d428d84f0311dcb0fc3c6bb/app/src/Updates/Zonk/Dice.php#L13-L16

Reactions: 👍 1

</details>

<details>
<summary><strong>mtorromeo</strong> commented on 2025-05-12 11:04:53.000 UTC</summary>

For my use case I ended up using a custom `DataConverter`, which is also not documented for PHP.

The difference between `DataConverter`s and marshalling is also not clear, which is a byproduct of the lacking documentation on these topics.

</details>

<details>
<summary><strong>KorDum</strong> commented on 2025-05-29 07:58:42.000 UTC</summary>

I'm writing this so it won't be forgotten when describing it. We've just encountered an unobvious behavior: unlike Symfony Serializer, (un-)marshaller creates an object past the constructor, which makes the use of initializations through the constructor promotion not work and the field remains uninitialized.

See example:

```php
public function __contrcutor(
    public ?Some $some = null, // the field will not be initialized
) {}
```

```php
public ?Some $some = null; // will be ok

public function __contrcutor(?Some $some = null)
{
    $this->some = $some;
}
```

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-05-29 08:05:29.000 UTC</summary>

@KorDum yes. Because in the first case the default value is related to parameter, not property.

</details>


---

### #103: [Question] Sentry Integration for error logging

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/103 |
| **State** | OPEN |
| **Author** | khoerintus |
| **Created** | 2021-04-20 15:17:42.000 UTC (4y 8m ago) |
| **Updated** | 2023-09-01 12:12:44.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 11 |
| **Priority Score** | 11 |
| **Labels** | Feature, Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Is there any best practice to integrate temporal with sentry for error logging?
I know that I can use sentry php sdk, try catch in my code, and send the error.
But is there any global error handler that catch every error (from Workflow or Activity), so I can just send the error from there?
Or I can integrate roadrunner with sentry?

#### Comments (11)

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-20 15:33:11.000 UTC</summary>

Good question. We did not provide a separate interceptor for errors, so you will have to override the transport to handle them, like:
```php
use Spiral\RoadRunner\Worker;
use Temporal\Worker\Transport\HostConnectionInterface;
use Temporal\WorkerFactory;

$worker = WorkerFactory::create()
    ->newWorker();

/// ...

$worker->run(new class implements HostConnectionInterface {
    public function error(\Throwable $e) { ... } // Intercept errors
});
```

I agree that this functionality should be added. But while it is not there, you will have to write your own transport decorator.

</details>

<details>
<summary><strong>khoerintus</strong> commented on 2021-04-20 15:46:48.000 UTC</summary>

Thanks @SerafimArts for the answer. I will try it later.

</details>

<details>
<summary><strong>khoerintus</strong> commented on 2021-04-22 12:19:39.000 UTC</summary>

Hi @SerafimArts , I've tried to write my own transport decorator and use it. But the error function is never called.

I found that Exception thrown in Workflow class, is caught in Temporal\Internal\Workflow\Process\start(),
and Exception thrown in Activity class, is caught in Temporal\Internal\Transport\Router\handle().
If I put the code to send the error to sentry in those functions, it sent successfully.

</details>

<details>
<summary><strong>SerafimArts</strong> commented on 2021-04-22 15:40:11.000 UTC</summary>

Yes, that's right. The example I showed only intercepts fatal SDK errors (e.g. errors connecting to the server), and all "business logic" errors inside Workflows and Activities are considered "normal work" and sent directly to the Temporal.

Hmmm... @mfateev perhaps it makes sense to add APM (Sentry, New Relic, Kibana, etc) support to the Temporal Server? This will allow to nicely structure such errors for all SDKs at once.

Reactions: 👍 1

</details>

<details>
<summary><strong>changwuf31</strong> commented on 2021-04-26 15:10:01.000 UTC</summary>

Meanwhile, what is the current solution if we want to use sentry for temporal and php sdk ?

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-04-26 15:23:58.000 UTC</summary>

None. We are still thinking how would that look like. Most likely we can provide you hook entry point for activities, but not for the workflows as I don't think Sentry SDK can work in async mode.

</details>

<details>
<summary><strong>kozlice</strong> commented on 2021-07-05 15:55:06.000 UTC</summary>

I ran into the same issue, except I have multiple handlers in monolog (file log + Sentry). Doing a try-catch with logging & re-throwing inside an activity is not very convenient.

The proposal document mentions the idea of injecting a PSR-3-compatible logger into a worker: https://github.com/temporalio/proposals/blob/master/php/php-rr-sdk.md#logging Was it rejected or it's just not implemented yet?


</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2021-07-05 15:58:53.000 UTC</summary>

Not implemented due to the fact that you create activity classes manually, so you control injections to them.

The container refactor planned later this year, with some internal changes and optimizations, including the ability to intercept activity call (for exception catching or state resets).

P.S. Proposal does not cover all the functions from 1.0 of SDK and has some extra features kept for the later day. It was not 1-to-1 architecture plan.

Reactions: 👍 1

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2022-02-19 16:24:00.000 UTC</summary>

You can find an example of integration here: https://github.com/spiral/temporal-bridge/blob/master/src/InvokeActivityRouter.php

Essentially you can intercept the activity call and manipulate it with input or output parameters, or handle exceptions.

Reactions: 👍 1

</details>

<details>
<summary><strong>changwuf31</strong> commented on 2022-03-10 10:37:37.000 UTC</summary>

@wolfy-j :+1:  Superb, however it will be much better, if some of the sdk properties are made protected, so we can simply override the necessary functions.

</details>

<details>
<summary><strong>programmador</strong> commented on 2022-09-07 09:25:02.000 UTC</summary>

The link above is broken as that functionality was removed from temporal-bridge.
Anyway, [here](https://github.com/spiral/temporal-bridge/commit/2de00229c26e35a7cb83d7e6027270464ecbb996#diff-c6622530d00ec62cd9f77427ade1d89488623a20917ffa1066323dab91e460a9)'s how it looked like.
Though fully copying the whole WorkerFactory instead of just extending is redundant as for me. The only reason was to access `$this->queues` which is private. Accessing parent's private field is tricky, I've embraced [this library](https://github.com/ivastly/php-reflection).

And yes, this is really-really hacky, "don't do that at home".

BTW You may ask why was that functionality removed from temporal-bridge. The reason is introducing "finalizers" functionality which is enough for example for cleaning resources to avoid memory leaks but not enough for error handling as finalizers are working similar to `final` block after `try-catch`. So You cannot access errors in finalizers.

Reactions: 👀 1

</details>


---

### #577: [Bug] Can't run the tests of UpdateMethod

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/577 |
| **State** | OPEN |
| **Author** | agpopov (Alexander) |
| **Created** | 2025-03-03 13:46:57.000 UTC (10 months ago) |
| **Updated** | 2025-12-20 14:49:57.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 7 |
| **Priority Score** | 7 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello, I want to test UpdateMethod in workflow. But I get an error:

```
AssertionError: assert($result !== null)
/var/www/html/vendor/temporal/sdk/src/Client/Update/UpdateHandle.php:128
/var/www/html/vendor/temporal/sdk/src/Client/Update/UpdateHandle.php:89
/var/www/html/vendor/temporal/sdk/src/Client/Update/UpdateHandle.php:75
/var/www/html/vendor/temporal/sdk/src/Internal/Client/WorkflowProxy.php:112
/var/www/html/tests/Workflows/UploadFileWorkflowTest.php:83
```

At the same time, the signal and jquery tests are working fine.

Here is the test code:

```php
public function testCanSaveFileData(): void
    {
        $this->testService->lockTimeSkipping();

        $arguments = [
            'path' => $this->faker()->filePath(),
            'original_name' => $this->faker()->word(),
            'extension' => $this->faker()->fileExtension(),
            'size' => $this->faker()->numberBetween(),
            'is_image' => $this->faker()->boolean(),
        ];

        $file = File::factory()->make($arguments);

        $workflow = $this->workflowClient->newWorkflowStub(UploadFileWorkflow::class);
        $run = $this->workflowClient->start($workflow);

        $this->assertEquals(WorkflowExecutionStatus::Running, $run->describe()->info->status);

        $result = $workflow->saveTempFileData(new SaveFileDataArguments($arguments));

        $this->assertEquals($file->id, $run->describe()->info->searchAttributes->getValue('FileId'));
        $this->assertEquals($file->toArray(), $result['data']);

        $this->testService->unlockTimeSkipping();
    }
```

I tried calling UpdateMethod via `update` and `startUpdate`. the result is exactly the same



#### Comments (7)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-03-03 14:17:59.000 UTC</summary>

Related with https://github.com/temporalio/sdk-php/pull/526

> This situation can occur when the Workflow neither accepts nor rejects the Update due to:
> - No available workers
> - Workflow Task fails in the same tick

</details>

<details>
<summary><strong>agpopov</strong> commented on 2025-03-03 15:00:51.000 UTC</summary>

Unfortunately, I've already checked this. The workers are running, and workflow is not crashing.

Here is the config:

```yaml
version: "3"

rpc:
  listen: ${TEMPORAL_TESTING_HOST:-tcp://127.0.0.1:6001}

server:
  command: "php worker.php"

temporal:
  address: ${TEMPORAL_ADDRESS:-127.0.0.1:7233}
  activities:
    num_workers: 2

logs:
  level: info
  channels:
    server:
      mode: debug
      output: worker.log

kv:
  testing:
    driver: memory
    config:
      interval: 10
```

Here is the worker's code:

```php

require 'vendor/autoload.php';
$app = require 'bootstrap/app.php';

$app->make(Kernel::class)->bootstrap();

$factory = WorkerFactory::create(
    rpc: new Goridge(Relay::create(config('testing.temporal.host'))),
    activityCache: RoadRunnerActivityInvocationCache::create()
);

$worker = $factory->newWorker(
    taskQueue: config('testing.temporal.queue'),
    interceptorProvider: new SimplePipelineProvider(
        app(InterceptorCollection::class)->toArray(),
    ),
);

$worker->registerWorkflowTypes(...config('orchestrator.temporal.workflows'));

foreach (config("orchestrator.temporal.activities", []) as $activityType) {
    $worker->registerActivity($activityType, fn(ReflectionClass $class) => app($class->getName()));
}

$factory->run();

error_log('stop worker');
```

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-03-03 15:37:07.000 UTC</summary>

> `$this->testService->lockTimeSkipping();`

Are you using the Test Server? Does it already support updates?

</details>

<details>
<summary><strong>agpopov</strong> commented on 2025-03-03 17:21:26.000 UTC</summary>

I use the TestService in the base TestCase class
```php
 $temporalAddress = getenv('TEMPORAL_ADDRESS') ?: '127.0.0.1:7233';
 $this->testService = TestService::create($temporalAddress);
```

I'm running the test server through Environment
```php
use Temporal\Testing\Environment;

require getcwd().'/vendor/autoload.php';

if (env('TEMPORAL_TESTING_ENABLED') === true) {
    $environment = Environment::create();
    $environment->start(
        rrCommand: './rr serve -d -c '.__DIR__.'/.rr.yaml -w '.__DIR__
    );
    register_shutdown_function(fn() => $environment->stop());
}
```

And how can I find out that the test server supports updates? I didn't find it in the documentation.

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-03-04 11:28:33.000 UTC</summary>

> And how can I find out that the test server supports updates? I didn't find it in the documentation.

This is not in the documentation. The temporal-test-server is taken from the [release artifacts of the JAVA SDK](https://github.com/temporalio/sdk-java/releases). You can track release notes and issues.

Try the [dev-server](https://github.com/temporalio/sdk-php#temporal-cli). There is no timeskipping but it works with the most Temporal features

</details>

<details>
<summary><strong>jmortlock</strong> commented on 2025-03-24 07:07:20.000 UTC</summary>

I'm also hitting the same (or similar) problem when trying to write some tests for updates on a workflow.

Looks like "test-server" has support for update: https://github.com/temporalio/sdk-java/issues/1742

I either hit a `Temporal\Exception\DestructMemorizedInstanceException` exception or if i disable the DestroyWorkflow process than I get a timeout.

I've added debug code to the Workflow update method which shows its working nicely, it just never gets returned.


</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-20 14:49:57.000 UTC</summary>

@agpopov @jmortlock is there a reproducer?

</details>


---

### #495: [Discussion] Define a backwards compatibility promise

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/495 |
| **State** | OPEN |
| **Author** | Nyholm (Tobias Nyholm) |
| **Created** | 2024-08-25 20:19:59.000 UTC (1y 4m ago) |
| **Updated** | 2024-09-01 18:24:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 6 |
| **Priority Score** | 6 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

## Is your feature request related to a problem? Please describe.

I started to use Temporal a few months ago and I really like it and this SDK. I think you (the maintainers and community) have done an excellent job and I am impressed by many things. The use of Generators in `Scope::next()` is genius. 

I am doing a private Symfony bundle around this package and I've found it a little difficult to work with. 

### Issue 1

We break backwards compatibility between releases. Here are some examples, but there are many more. 

#### 2.9.0

- `Temporal\Client\ScheduleClient::getHandle()` changed signature. 
- `Temporal\Client\ServerCapabilities` was removed in a way that breaks BC. 
- `Temporal\Client\WorkflowExecutionHistory` was moved to `Temporal\Client\Workflow\WorkflowExecutionHistory`
- `Temporal\Client\WorkflowClient` have many methods changing their signatures. 

#### 2.10.0

- `Temporal\Activity\ActivityCancellationType` was converted to enum
- `Temporal\Workflow\ChildWorkflowCancellationType` was converted to enum
- `Temporal\Activity\ActivityOptions::withCancellationType()` has changed signature
- `Temporal\Worker\ChildWorkflowCancellationType` was removed in a way that breaks BC. 

### Issue 2

We have a bunch of classes in the `internal` namespace. I suggest all of them should be marked with `@internal` for better IDE support. But I also see parts of our public API returning internal classes. Example: 

`Temporal\Worker\Worker::getWorkflows(): RepositoryInterface`

## Describe the solution you'd like

I would like us, staring with the next minor release, to follow BC very strictly. I suggest to write down a BC promise what it means for us and what third party libraries and application authors can expect from us. Ie, we don't need to be super generous, but we need to be predictable. 

## Additional context

There is no secret that I am a big fan of [Symfony's BC promise](https://symfony.com/doc/current/contributing/code/bc.html). In the best of all worlds, I think we should follow the same promise. Just write a statement in our readme that we follow the same practices. 

There is also the [Roave/BackwardCompatibilityCheck](https://github.com/Roave/BackwardCompatibilityCheck) that will check for any BC breaks as part of the CI workflow. 


#### Comments (6)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-08-26 14:23:51.000 UTC</summary>

Hi.

Regarding Issue 1:

I checked your comments on BC between minor releases. Am I correct in understanding that they were obtained automatically using [Roave/BackwardCompatibilityCheck](https://github.com/Roave/BackwardCompatibilityCheck)?

2.9.0
- `Temporal\Client\ScheduleClient::getHandle()` changed signature.
  Final class, signature changed without breaking usage.
- `Temporal\Client\ServerCapabilities` was removed in a way that breaks BC.
  Moved to another location with an alias to the old class.
- `Temporal\Client\WorkflowExecutionHistory` was moved to `Temporal\Client\Workflow\WorkflowExecutionHistory`
  Alias to the old class is present.
- `Temporal\Client\WorkflowClient` has many methods changing their signatures.
  Signatures changed without breaking usage.
  ⚠️ **Class is not final, should be made `@final`.**

2.10.0
- `Temporal\Activity\ActivityCancellationType` was converted to enum
  Was a final class, constants not affected.
- `Temporal\Workflow\ChildWorkflowCancellationType` was converted to enum
  Was a final class, constants not affected.
- `Temporal\Activity\ActivityOptions::withCancellationType()` has changed signature
  Type extended, does not affect usage.
  ⚠️ **Class is not final, should be made `@final`.**
- `Temporal\Worker\ChildWorkflowCancellationType` was removed in a way that breaks BC.
  Made an alias, as it was a duplicate.

If we pay attention to the presence of aliases for removed classes or the previous work done with the marshaller, it becomes clear that we strive to adhere to semver and maintain backward compatibility where possible, without making various promises.

If we strictly follow [Symfony's BC promise](https://symfony.com/doc/current/contributing/code/bc.html), I'm afraid the PHP SDK code might become legacy-laden, and we won't be able to provide functionality on par with other SDKs.
Moreover, there are things that may look like breaking changes but are not considered as such in the context of the SDK. This includes configuration classes and API gateway interfaces to Temporal, which may and will change their signatures. We expect that these interfaces will not be inherited or implemented by the user (such as ActivityOptions, WorkflowClientInterface, WorkflowClient, etc).
At the same time, interceptor interfaces are also supplemented with new functions, but they come with traits that must be used in user implementations.

Perhaps we should consider marking classes/interfaces as risky for extension/implementation.

</details>

<details>
<summary><strong>Nyholm</strong> commented on 2024-08-26 18:03:00.000 UTC</summary>

> I checked your comments on BC between minor releases. Am I correct in understanding that they were obtained automatically using [Roave/BackwardCompatibilityCheck](https://github.com/Roave/BackwardCompatibilityCheck)?

No, most of them were obtained by my Symfony Bundle's CI started to fail. Then I looked at the diff and found some more to give some examples in this issue. 

-------

> Moved to another location with an alias to the old class.

I saw that it was an attempt, but it was incorrectly done. 

> Was a final class, constants not affected.

What if I have instantiated that class? Then it would break if the class was removed. 

---------

> If we strictly follow [Symfony's BC promise](https://symfony.com/doc/current/contributing/code/bc.html), I'm afraid the PHP SDK code might become legacy-laden, and we won't be able to provide functionality on par with other SDKs.

With all respect, I think you are wrong. There are always a way forward with keeping BC, but the "effort" might not be worth it. In such cases, write a good UPGRADE.md and tag a new major release. We wont run out of integers. =)


> Perhaps we should consider marking classes/interfaces as risky for extension/implementation.

Yes, I believe so. We want to be helpful to all users of this SDK, that means we must be predictable. If I use an `@internal` class or extend a class marked with `@final`, then I only have myself to blame. 

If we dont want to adjust how we do code changes, then this issue can be solved with documentation/comments only. But maybe some adjustments are needed. 

**Suggestion**: We add the BC promise CI job, that will make (too many) comments on each PR. These can then be discussed and fixed/ignored.  

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-08-26 19:52:31.000 UTC</summary>

> I saw that it was an attempt, but it was incorrectly done.

What do you mean? May be it should be fixed?

> What if I have instantiated that class? Then it would break if the class was removed.

In the case of a DTO or another working class, this would make sense, but in the case of an enum class, it looks like this:
![image](https://github.com/user-attachments/assets/2d439774-8a07-4cb0-a768-c1738284ce23) 😃 

> write a good UPGRADE.md and tag a new major release. We wont run out of integers. =)

If it were that simple, the SDK would already be at version 4.x. 🤔 

> Suggestion: We add the BC promise CI job, that will make (too many) comments on each PR. These can then be discussed and fixed/ignored.

Sounds good 👍 Would you like to take this on? I'll return to working on the SDK next week.

</details>

<details>
<summary><strong>Nyholm</strong> commented on 2024-08-26 20:17:02.000 UTC</summary>

> What do you mean? May be it should be fixed?

If we want to move a class. we need to make sure the old class is still working. That means as extend, instantiate, return values etc. 
I can make a PR and we can discuss the details there. 

> In the case of a DTO or another working class, 

Haha, yes. You are correct, but it is still a BC break. 

> If it were that simple, the SDK would already be at version 4.x. 🤔

That is fine. There is no harm in that. The most important thing is to be predictable and it should always work for all weird use cases. There is no gold medal if you keep version 2.x for 10 years. 

> Would you like to take this on?

Sure, I would be happy to. 

Reactions: 👍 2

</details>

<details>
<summary><strong>root-aza</strong> commented on 2024-09-01 17:37:20.000 UTC</summary>

> I am doing a private Symfony bundle around this package and I've found it a little difficult to work with.

@Nyholm hi. Why weren't you happy with this decision?

https://github.com/VantaFinance/temporal-bundle 

</details>

<details>
<summary><strong>Nyholm</strong> commented on 2024-09-01 18:23:59.000 UTC</summary>

That looks like a nice bundle. 

We (the company I work for) started our own Symfony bundle back in 2021 and we are doing a lot of custom stuff that does not make sense to open source. 

If we were just starting our Temporal journey we should definitely consider that bundle. 

Reactions: 👍 2

</details>


---

### #573: [Bug] WorkerFactoryInterface seems to be missing arguments for newWorker() method

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/573 |
| **State** | OPEN |
| **Author** | vansante (Paul) |
| **Created** | 2025-02-20 09:57:38.000 UTC (10 months ago) |
| **Updated** | 2025-02-20 14:35:14.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 3 |
| **Priority Score** | 5 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 3.0.0 |
| **Reactions** | 👍 1 |

#### Description

### What are you really trying to do?

Setting a `ExceptionInterceptorInterface` and `PipelineProvider` with the `newWorker` method.

### Describe the bug

The interface [method](https://github.com/temporalio/sdk-php/blob/master/src/Worker/WorkerFactoryInterface.php#L36) is:
```php
    public function newWorker(
        string $taskQueue = self::DEFAULT_TASK_QUEUE,
        ?WorkerOptions $options = null,
    ): WorkerInterface;
```

But the actual [implementation](https://github.com/temporalio/sdk-php/blob/master/src/WorkerFactory.php#L126) is:

```php
    public function newWorker(
        string $taskQueue = self::DEFAULT_TASK_QUEUE,
        ?WorkerOptions $options = null,
        ?ExceptionInterceptorInterface $exceptionInterceptor = null,
        ?PipelineProvider $interceptorProvider = null,
    ): WorkerInterface {
        // .. implementation
    }
```

### Minimal Reproduction

Not really relevant, just install the sdk.

### Environment/Versions

Also irrelevant.

### Additional context

The interface should describe the full method with all arguments.



#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-02-20 14:29:16.000 UTC</summary>

The interface is in the public space, so changing it can be considered a breaking change (even though it's not intended to be implemented by the user). Overall, there is no strong reason to update it for now.

</details>

<details>
<summary><strong>vansante</strong> commented on 2025-02-20 14:31:10.000 UTC</summary>

Is it really a breaking change when they are defaulted to null anyway? That means they can be omitted right?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-02-20 14:35:13.000 UTC</summary>

If we add parameters to the interface method, we will break all implementations that we do not control.

Reactions: 👍 1

</details>


---

### #529: [Feature Request] registerDelayedCallback for tests

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/529 |
| **State** | OPEN |
| **Author** | cv65kr (Kajetan) |
| **Created** | 2024-11-22 15:31:41.000 UTC (1y 1m ago) |
| **Updated** | 2024-12-05 12:20:37.000 UTC |
| **Upvotes** | 2 |
| **Comments** | 1 |
| **Priority Score** | 5 |
| **Labels** | enhancement, Tests |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 2 |

#### Description

### Is your feature request related to a problem? Please describe.

To write more efficient tests would be nice to support method like in other SDKs - `registerDelayedCallback`

### Describe the solution you'd like

https://github.com/temporalio/samples-go/blob/main/updatabletimer/workflow_test.go#L24

#### Comments (1)

<details>
<summary><strong>dominik-pakosz</strong> commented on 2024-12-05 12:20:35.000 UTC</summary>

That would be great, missing that also!

</details>


---

### #302: [Feature Request] Set the expectCompletion result for each Activity call inside the loop

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/302 |
| **State** | OPEN |
| **Author** | num213 |
| **Created** | 2023-04-27 11:33:19.000 UTC (2y 8m ago) |
| **Updated** | 2024-04-29 14:09:15.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 2 |
| **Priority Score** | 4 |
| **Labels** | enhancement, Tests |
| **Assignees** | wolfy-j, roxblnfk |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Is your feature request related to a problem? Please describe.
For PHP-SDK we can use `ActivityMocker` and `expectCompletion()` to mock an activity call result. And it works great if we don't call the activity inside the loop.

If we call it inside the loop than we can't set `expectCompletion()` for each of the Activity call inside the loop.

For example consider we have the following phpunit test:

```php
public function testWorkflowSend()
{
    $workflow = $this->workflowClient->newWorkflowStub(SomeWorkflow::class);
    $run = $this->workflowClient->start($workflow, ['value1', 'value2', 'value3']);
    $this->assertSame(['someResult1', 'someResult2', 'someResult3'], $run->getResult('array'));
}
```

The workflow method:

```php
public function send(array $values)
{
    $results = [];
    foreach ($values as $value) {
        $results[] = yield $this->activity->doSomething($value);
    }
    return $results;
}
```

And we want to mock the activity calls like this:

```php
$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', ['someResult1', 'someResult2', 'someResult3']
);
```

The result of running the workflow inside this test will be:

```php
array(3) {
[0] => array(3) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}, 
[1] => array(3) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}, 
[2] => array(3) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}
```

Instead of:

```php
array(9) {
    [0] => string(11) "someResult1",
    [1] => string(11) "someResult2",
    [2] => string(11) "someResult3",
}
```

Even if we mock the activity calls like this:

```php
$this->activityMocks->expectCompletion('SomeActivity.doSomething', 'someResult1');
$this->activityMocks->expectCompletion('SomeActivity.doSomething', 'someResult2');
$this->activityMocks->expectCompletion('SomeActivity.doSomething', 'someResult3');
```

The result will be:

```php
array(9) {
    [0] => string(11) "someResult3",
    [1] => string(11) "someResult3",
    [2] => string(11) "someResult3",
}
```

### Describe the solution you'd like
It will be great if we have a choice to set `expectCompletion` result for each call of the Activity inside the loop. For example:

```php
$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult1', 1
); // for the first call

$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult2', 2
); // for the second

$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult3', 3
); // for the third
```

And the same with `expectFailure()`:

```php
$this->activityMocks->expectCompletion(
    'SomeActivity.doSomething', 'someResult1', 1
); // for the first call
$this->activityMocks->expectFailure(
    'SomeActivity.doSomething', new Error(), 2
); // except error for the second call
```



#### Comments (2)

<details>
<summary><strong>rafaelemi</strong> commented on 2024-04-29 11:31:34.000 UTC</summary>

any news about this? 

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-04-29 14:09:14.000 UTC</summary>

Hello. There are no updates yet, but the task of improving testing tools is included in the roadmap.

Reactions: 👍 2

</details>


---

### #123: [Bug] withEnableSessionWorker causes to ActivityNotRegisteredError

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/123 |
| **State** | OPEN |
| **Author** | mixadior (Diordienko Mykhail) |
| **Created** | 2021-09-13 14:44:40.000 UTC (4y 3m ago) |
| **Updated** | 2025-12-22 16:27:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 4 |
| **Priority Score** | 4 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

If worker started with `->withEnableSessionWorker(true)` requesting any activity from it causes `ActivityNotRegisteredError`

### To Reproduce

php worker

```php

<?php

require_once __DIR__."/vendor/autoload.php";

use NetworkRequestTemporalPhpServices\Services\RequestLight\GuzzleRequestExecutor;
use NetworkRequestTemporalPhpServices\Services\RequestLight\RequestResultDto;
use Temporal\Activity\ActivityInterface;
use Temporal\WorkerFactory;
use Temporal\Client\GRPC\ServiceClient;
use Temporal\Client\WorkflowClient;

$factory = WorkerFactory::create();

$workflowClient = WorkflowClient::create(ServiceClient::create('host.docker.internal:7233'));
$worker = $factory->newWorker(
    'workers_test_sessions',
    \Temporal\Worker\WorkerOptions::new()
        ->withMaxConcurrentActivityTaskPollers(8)
        ->withMaxConcurrentWorkflowTaskPollers(8)
        ->withEnableSessionWorker(true)
);

#[ActivityInterface(prefix: "test_sessions_act.")]
class SessionTestActivity {
    public function makeRequest(string $name): string
    {
        return "sessioned ".$name;
    }

}

$worker->registerActivityImplementations(new SessionTestActivity());
$factory->run();

```

golang workflow

```go
package app

import (
	"errors"
	"fmt"
	"go.temporal.io/sdk/workflow"
	"strings"
	"time"
)

func Test123Workflow(ctx workflow.Context) error {
	ao2 := workflow.ActivityOptions{
		TaskQueue: "workers_test_sessions",
		ScheduleToCloseTimeout: time.Second * 60,
		ScheduleToStartTimeout: time.Second * 60,
		StartToCloseTimeout: time.Second * 60,
		HeartbeatTimeout: time.Second * 10,
		WaitForCancellation: false,
	}

	activityRunCtx2 := workflow.WithActivityOptions(ctx, ao2)

	so := &workflow.SessionOptions{
		CreationTimeout:  time.Minute,
		ExecutionTimeout: 10 * time.Minute,
	}

	sessionCtx, errSess := workflow.CreateSession(activityRunCtx2, so)
	if errSess != nil {
		return errSess
	}
	defer workflow.CompleteSession(sessionCtx)

	var t interface{}
	workflow.ExecuteActivity(sessionCtx, "test_sessions_act.makeRequest", "testname").Get(sessionCtx, &t)

	return nil
}

```

golang workflow worker:

```go


// @@@SNIPSTART hello-world-project-template-go-worker
package main

import (
    "log"

    "go.temporal.io/sdk/client"
    "go.temporal.io/sdk/worker"

    "hello-world-project-template-go"
)

func main() {
    // Create the client object just once per process
    c, err := client.NewClient(client.Options{})
    if err != nil {
        log.Fatalln("unable to create Temporal client", err)
    }
    defer c.Close()
    // This worker hosts both Worker and Activity functions
    w := worker.New(c, "workers_test_sessions_worklow_q", worker.Options{})
    w.RegisterWorkflow(app.Test123Workflow)

    // Start listening to the Task Queue
    err = w.Run(worker.InterruptCh())
    if err != nil {
        log.Fatalln("unable to start Worker", err)
    }
}
// @@@SNIPEND

```

golang workflow starter:

```go

// @@@SNIPSTART hello-world-project-template-go-start-workflow
package main

import (
	"context"
	"fmt"
	"log"

	"go.temporal.io/sdk/client"

	"hello-world-project-template-go"
)

func main() {
	// Create the client object just once per process
	c, err := client.NewClient(client.Options{})
	if err != nil {
		log.Fatalln("unable to create Temporal client", err)
	}
	defer c.Close()
	options := client.StartWorkflowOptions{
		TaskQueue: "workers_test_sessions_worklow_q",
	}

	we, err := c.ExecuteWorkflow(context.Background(), options, app.Test123Workflow)
	if err != nil {
		log.Fatalln("unable to complete Workflow", err)
	}
	var greeting string
	err = we.Get(context.Background(), &greeting)
	if err != nil {
		log.Fatalln("unable to get Workflow result", err)
	}
	printResults(greeting, we.GetID(), we.GetRunID())
}

func printResults(greeting string, workflowID, runID string) {
	fmt.Printf("\nWorkflowID: %s RunID: %s\n", workflowID, runID)
	fmt.Printf("\n%s\n\n", greeting)
}
// @@@SNIPEND


```


### Expected behavior

Activity written in php (`test_sessions_act.makeRquest`) executed.

### Screenshots/Terminal output

ActivityNotRegisteredError: unable to find activityType=test_sessions_act.makeRequest. Supported types: [internalSessionCreationActivity, internalSessionCompletionActivity]

Full workflow execution exported here: http://feodosian.com/wfd.json 

### Versions

- OS: MacOS 11
- Temporal Version 1.9.0 for golang code
- Roadrunner 2.4 
- Docker-compose official (https://github.com/temporalio/docker-compose) with temporal 1.12 



#### Comments (4)

<details>
<summary><strong>wolfy-j</strong> commented on 2021-09-13 16:36:53.000 UTC</summary>

Hi,

it's semi-bug at the moment since we exposed the configuration option for sessions ahead of the actual implementation. Since there a no exists implementation in Java SDK we will have to invent an OOP approach to sessions first. This work schedule is for later this year for 1.1.0 update of Temporal SDK.

Does your use case depend on this feature now?

JD

</details>

<details>
<summary><strong>mixadior</strong> commented on 2021-09-14 09:41:20.000 UTC</summary>

Hi, 

> it's semi-bug at the moment since we exposed the configuration option for sessions ahead of the actual implementation. Since there a no exists implementation in Java SDK we will have to invent an OOP approach to sessions first. This work schedule is for later this year for 1.1.0 update of Temporal SDK.

thanks for explaining. As i see php-sdk is actually go-sdk bundled into roadrunner and called via some protocol from php code. I cloned roadrunner-temporal plugin code and saw here, that temporal worker created (in golang code) with session worker and session creating activity works correctly (if don't restart RR), i failed  on finding problem why it doesn't register user activities. 

> Does your use case depend on this feature now?

Actually not, at this moment i'm investigating if i can use php-sdk, how it's documentation and examples cover cases which can meet our team if we choose it as tool for porting our php legacy code. I saw example with fileprocessing, which uses approach with separate taskqueues for every worker, i will check this approach. 




</details>

<details>
<summary><strong>rustatian</strong> commented on 2023-09-01 12:10:01.000 UTC</summary>

Hey @mixadior, have you tried to test this feature on the latest PHP-SDK/RR versions?

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-22 16:27:59.000 UTC</summary>

@mixadior could you please check again?

</details>


---

### #640: Enable `Discussions`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/640 |
| **State** | OPEN |
| **Author** | ruudk (Ruud Kamphuis) |
| **Created** | 2025-07-25 11:11:14.000 UTC (5 months ago) |
| **Updated** | 2025-07-25 12:25:58.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

It would be great to enable the Discussions feature for this repository. It would allow me to ask questions or ask for help, things that are not issues perse.

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-07-25 12:25:27.000 UTC</summary>

We have the [Question label](https://github.com/temporalio/sdk-php/issues?q=sort%3Aupdated-desc+state%3Aopen+label%3A%22Question%22) for questions, as well as many other channels where you can ask a question, like [Slack](https://t.mp/slack) or [Forum](https://community.temporal.io/tag/php-sdk)

</details>


---

### #635: [Bug] Memory leak workflow worker

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/635 |
| **State** | OPEN |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2025-07-13 06:46:09.000 UTC (5 months ago) |
| **Updated** | 2025-12-26 13:21:37.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Reload workflow with ui

### Describe the bug

if you re-run the workflow via the UI too many times, the workflow worker starts leaking memory. You can end up with a zombie process with this success.
I managed to create a memory leak of a whole 1gb and this is not a redistribution.


video proff: https://youtu.be/LVZEeMcE7rE


### Minimal Reproduction

large number of workflow re-strat


### Environment/Versions

- Temporal Version:  1.24.2
- SDK version: v2.14.1


#### Comments (3)

<details>
<summary><strong>root-aza</strong> commented on 2025-07-14 07:23:32.000 UTC</summary>

<img width="1135" height="756" alt="Image" src="https://github.com/user-attachments/assets/d98e1fe3-a440-4b5a-8ce7-34e6a1f29f24" />

meminfo dump

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2025-10-03 15:17:36.000 UTC</summary>

Can you test this behaviour with stick cache size set to < 10 items.

Reactions: 👀 1

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-26 13:21:37.000 UTC</summary>

@root-aza I'd ask you to verify this behavior with the latest SDK version.
Also it would be nice if you attach the additional information:
- Symfony framework version
- What bridge and its version do you use, as far as I can understand it is https://github.com/VantaFinance/temporal-bundle?
- RoadRunner version
- .rr.yaml config
- Is there the same behavior if you ask wrk to warm your site? Regular hello-word endpoint and the one with temporal client call: run an empty activity, e.g.

</details>


---

### #580: Initial Nexus implementation - PHP

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/580 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-11 14:17:26.000 UTC (9 months ago) |
| **Updated** | 2025-11-14 08:59:55.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 1 |
| **Priority Score** | 3 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

### Describe the solution you'd like

Alongside Nexus PHP SDK, need Temporal-specific implementation in this SDK. See https://github.com/temporalio/features/issues/609


#### Comments (1)

<details>
<summary><strong>iq-cw</strong> commented on 2025-03-18 07:11:42.000 UTC</summary>

Is there already a timetable for when this feature will be released? We are very interested in using Nexus. 

</details>


---

### #428: [Bug] Unit test hangs with unit under test has runtime or compile time exception

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/428 |
| **State** | OPEN |
| **Author** | suityou01 (Charlie Benger-Stevenson) |
| **Created** | 2024-05-07 10:00:56.000 UTC (1y 7m ago) |
| **Updated** | 2025-12-22 16:58:55.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Bug, Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Unit test a workflow

### Describe the bug

When unit testing a workflow, if the workflow under test encounters a runtime exception the unit test hangs.

### Minimal Reproduction

See pull request here https://github.com/wolfy-j/temporal-simple-test-example/pull/1

### Environment/Versions

<!-- Please complete the following information where relevant. -->

- OS and processor: [e.g. M1 Mac, x86 Windows, Linux] - Ubuntu Linux 22.04
- Temporal Version: [e.g. 1.14.0?] and/or SDK version - 1.23.1
- Are you using Docker or Kubernetes or building Temporal from source? - On the metal using Temporal\Testing\Environment

### Additional context

Discussed on slack last Friday with wolfy-j


#### Comments (3)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-05-07 12:03:26.000 UTC</summary>

Try to limit Client requests by timeouts.

</details>

<details>
<summary><strong>suityou01</strong> commented on 2024-05-07 12:58:13.000 UTC</summary>

This would not give me the error details of the runtime exception but of the timeout thus masking the problem. It would also prevent any unit testing that expected specific exceptions.

Reactions: 👍 1

</details>

<details>
<summary><strong>xepozz</strong> commented on 2025-12-22 16:58:55.000 UTC</summary>

Hi, @suityou01 
This is functional testing which follows temporal fault tolerant rules.
In this case I'd suggest to use logging and check if there were errors.
Additionally, you can extend interceptors or event create your own data converter to pass / read a modified structure in your tests.


</details>


---

### #399: [Not a Bug] await doesn't interrupts on the activity with error

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/399 |
| **State** | OPEN |
| **Author** | pfy-oleksii-storozhylov (Oleksii Storozhylov) |
| **Created** | 2024-02-15 20:54:10.000 UTC (1y 10m ago) |
| **Updated** | 2024-08-30 03:22:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 3 |
| **Priority Score** | 3 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?
I want to use await function to ensure that activities are completed with or without an errors

### Describe the bug
When any activity is completed with error, await function doesn't continue workflow immediately, it waits for the full interval

### Minimal Reproduction
```php
            foreach ($anticipationPromises as $promise) {
                $promise
                    ->then(function() use (&$index) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time()." success $index\n", FILE_APPEND);
                    })
                    ->otherwise(function() use (&$index) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time()." error $index\n", FILE_APPEND);
                    });
            }

            file_put_contents('/srv/app/ddd.log', time(). " start awaiting $index\n", FILE_APPEND);

            yield \Temporal\Workflow::awaitWithTimeout(
                 CarbonInterval::seconds(60),
                \React\Promise\all($anticipationPromises)
             );

            file_put_contents('/srv/app/ddd.log', time(). " complete $index\n", FILE_APPEND);
```

Result when 2 activities have no errors looks good

```
1708030014 start awaiting 0
1708030016 success 1
1708030018 success 2
1708030018 complete 2
```

Result when one of the activities has an error looks good (completion takes 60 seconds)

```
1708030094 start awaiting 0
1708030096 error 1
1708030098 success 2
1708030154 complete 2
```

### Environment/Versions
* temporal/sdk 2.7+

### Additional context
<!-- Add any other context about the problem here. -->



#### Comments (3)

<details>
<summary><strong>pfy-oleksii-storozhylov</strong> commented on 2024-02-15 21:05:56.000 UTC</summary>

workarround with a counter and deferred promise could be used
```php
$index = 0;

            $deferred = new Deferred();
            $deferred->promise()
                ->then(function () use (&$index) {
                    file_put_contents('/srv/app/ddd.log', time() . " deferred resolved $index\n", FILE_APPEND);
                });

            foreach ($anticipationPromises as $promise) {
                $promise
                    ->then(function () use (&$index, $deferred) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time() . " success $index\n", FILE_APPEND);

                        if ($index >= 2) {
                            $deferred->resolve(true);
                        }
                    })
                    ->otherwise(function () use (&$index, $deferred) {
                        $index++;
                        file_put_contents('/srv/app/ddd.log', time() . " error $index\n", FILE_APPEND);

                        if ($index >= 2) {
                            $deferred->resolve(true);
                        }
                    });
            }

            file_put_contents('/srv/app/ddd.log', time() . " start awaiting $index\n", FILE_APPEND);

            yield \Temporal\Workflow::awaitWithTimeout(
                CarbonInterval::seconds(60),
                $deferred->promise()
            );
```

And the result looks good
```
1708030906 start awaiting 0
1708030908 error 1
1708030910 success 2
1708030910 deferred resolved 2
1708030910 complete 2
```

</details>

<details>
<summary><strong>pfy-oleksii-storozhylov</strong> commented on 2024-02-16 10:38:26.000 UTC</summary>

Seems not an issue, `all` promise is rejected if any of promises is rejected, so the solution here is
```php
            yield \Temporal\Workflow::awaitWithTimeout(
                CarbonInterval::seconds(60),
                \Temporal\Promise::all(array_map(
                    fn (ExtendedPromiseInterface $promise) => $promise->otherwise(fn () => false),
                    $promises
                ))
            );
```

</details>

<details>
<summary><strong>wolfy-j</strong> commented on 2024-02-16 18:24:06.000 UTC</summary>

I would like to keep this issue open for our records, so we can check the await behavior in combination with promise chaining.

Reactions: 👍 1

</details>


---

### #642: [Feature Request] Add first execution run ID to workflow info

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/642 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-11 14:29:23.000 UTC (4 months ago) |
| **Updated** | 2025-12-26 16:53:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/29

#### Comments (2)

<details>
<summary><strong>xepozz</strong> commented on 2025-12-26 15:38:24.000 UTC</summary>

I suppose it's added [there](https://github.com/temporalio/sdk-php/commit/6eadea02de16a6874281e8045763a776800bcae1#diff-42e90d01ec772ae1d6e174e96d450fe7a8da7c53408435a9278148b00bebe79dR62).
@roxblnfk isn't it?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-12-26 16:53:58.000 UTC</summary>

No. You need to expose it via

```php
\Temporal\Workflow::getInfo()->firstExecution->getRunID();
// or
\Temporal\Workflow::getInfo()->firstExecutionRunID;
```

See Java implementation to chose the right way

Reactions: 👍 1

</details>


---

### #623: [Feature Request] In test env - I can't unserialize object structure

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/623 |
| **State** | OPEN |
| **Author** | agoalofalife (Ilya Chubarov) |
| **Created** | 2025-05-27 06:55:51.000 UTC (7 months ago) |
| **Updated** | 2025-12-21 14:04:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello guys! I came across with some strange things in testing env. Long story short, when i pass in mock acitvity some dto structure - sdk won't serialize it properly and as a result - later can't unserialize it.

```php
$this->activityMocks->expectCompletion('Say.hello', new Greeting(
   name :  'Name',
  status: StatusUser::Active,
  // ... etc
));
```
The problem is `ActivityMocker` is created without custom converter for `RoadRunnerActivityInvocationCache`

```php
  public function __construct(?ActivityInvocationCacheInterface $cache = null)
    {
        $this->cache = $cache ?? RoadRunnerActivityInvocationCache::create();
    }

```

### Describe the solution you'd like
How about to add in ActivityMocker __construct() custom converter? Am i right - or am i doing something wrong?



#### Comments (2)

<details>
<summary><strong>xepozz</strong> commented on 2025-12-20 16:08:04.000 UTC</summary>

@agoalofalife I've tested such scenario, everything works now.
Could you please verify? 

https://github.com/temporalio/sdk-php/pull/681

</details>

<details>
<summary><strong>agoalofalife</strong> commented on 2025-12-21 14:04:50.000 UTC</summary>

@xepozz Hello, i will try later and back 

Reactions: 👍 1

</details>


---

### #568: [Question] How to debug the activity task startToClose timeout error?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/568 |
| **State** | OPEN |
| **Author** | ArFeRR |
| **Created** | 2025-02-12 18:07:49.000 UTC (10 months ago) |
| **Updated** | 2025-02-13 12:36:15.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We're receiving the activity startToClose timeout for our activity, written on PHP with the retry policy below:

```
Timeout 3m
Retry Policy Initial Interval 1s
Retry Policy Backoff Coefficient 3
Retry Policy Maximum Interval 10s
Retry Policy Maximum Attempts 30

```

The task, which timeouts, does nothing but going to database for selecting some data by indexed field and it actually does it, but after executing the activity code it hangs for no reason until 3 minutes timeout appears. Then retry policy comes to an action and retry task starts execution, it ends with timeout too and so on, and so on. Once it all the task attempts end with timeout is throws an activity exception permanently.

Could you please look through the JSON log from temporal workflow admin for such activity and advice what to do with it?
(We've already checked the deadline exceeded debugging cookbook https://docs.temporal.io/troubleshooting/deadline-exceeded-error ,but everything is alright from our side)

[TaskFailed.json](https://github.com/user-attachments/files/18772215/TaskFailed.json)
[WorkflowFailed.json](https://github.com/user-attachments/files/18772214/WorkflowFailed.json)


#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2025-02-12 18:54:44.000 UTC</summary>

1) Check activity status in Temporal UI, was it started?
2) Check logs on worker that runs it, is there a chance that worker is dead?
3) Are you using Temporal cloud or local?
4) Are you using latest versions of RR and SDK?

it feels like your activity worker is crashing, can you try to use mock activity or something that def works first?

Reactions: 👍 1

</details>

<details>
<summary><strong>ArFeRR</strong> commented on 2025-02-13 12:36:13.000 UTC</summary>

1. Yes, the activity task was started. The json file 'TaskFailed.json', i've provided above, is the log of failed activity, actually. Additionally check the screenshot of the most recent events of the failed workflow.
2. I'm not sure how to check worker logs from temporal UI (google says it's not possible), but regarding our Grafana, the worker is not dead. It processes the Activity code and then hangs until timeout. After this it starts to process another activity task.
3. I'm using temporal local.
4. Temporal php sdk is v2.12.3, roadrunner is latest.

I do not see the worker is crashing, it hangs according to the application logs. No errors or something.

![Image](https://github.com/user-attachments/assets/06e6482e-dde2-4eba-962c-93384d121023)

</details>


---

### #554: Ensure better SDK support in IDE

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/554 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-01-17 11:19:46.000 UTC (11 months ago) |
| **Updated** | 2025-02-10 17:37:14.000 UTC |
| **Upvotes** | 1 |
| **Comments** | 0 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |
| **Reactions** | 👍 1 |

#### Description

I would like better IDE support when working with the SDK.
What could it be:

Client API
- [x] Autocomplete Workflow types in client API
	- [x] fallback to short class name if WF type is not set
- [x] Autocomplete Workflow classes in client API
- [ ] Autocomplete signal/query/update methods in untyped client stubs

Workflow

- [x] Autocomplete Workflow and Activity classes in Workflow context
- [ ] Autocomplete Activity types in untyped stubs (need to merge functions with prefixes)
- [ ] Autocomplete signal/query/update methods in Workflow context
- [ ] Force `PromiseInterface` result type from side effect calls in Workflow context


---

### #532: [Question] Asynchronous child workflow execution problem

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/532 |
| **State** | OPEN |
| **Author** | Muz4k (Muz4k) |
| **Created** | 2024-12-03 17:40:33.000 UTC (1 years ago) |
| **Updated** | 2024-12-09 19:39:00.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Question |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Hello!

(Sorry, I posted on the [forum](https://community.temporal.io/t/asynchronous-child-workflow-execution-problem/15503), but I really need to get a response as soon as possible)
I’ve got a problem with child workflow working.

The child workflow is initialized, but the execution does not start

I assume that the problem is due to the fact that it does not have time to start execution - the parent workflow finishes faster.

I found a bestway for java - [Best way to create an async child workflow](https://community.temporal.io/t/best-way-to-create-an-async-child-workflow/114) that looks like the one I need

Point 4 says “Wait for the Promise returned by getWorkflowExecution to complete. ”

Can you please tell me how this can be implemented using php-sdk?
My code now looks like this (called inside the parent workflow)

```php

Workflow::asyncDetached(
            task: static function (): void {
                $options = ChildWorkflowOptions::new()
                    ->withTaskQueue('task_name')
                    ->withParentClosePolicy(ParentClosePolicy::Abandon);

                $workflow = Workflow::newChildWorkflowStub(
                    class: MyChildWorkflowInterface::class,
                    options: $options,
                );

                $workflow->execute(); // workflow logic
            },
);
```

#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-12-09 19:26:17.000 UTC</summary>

Hi. Sorry for the delay.
Have you tried using `yield` to wait promises?

```php
// Here:
yield Workflow::asyncDetached(
    task: static function () {
        $options = ChildWorkflowOptions::new()
            ->withTaskQueue('task_name')
            ->withParentClosePolicy(ParentClosePolicy::Abandon);

        $workflow = Workflow::newChildWorkflowStub(
            class: MyChildWorkflowInterface::class,
            options: $options,
        );

        // And here:
        yield $workflow->execute(); // workflow logic
    },
);
```

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-12-09 19:34:14.000 UTC</summary>

I may have misunderstood your question.

If you want to simply run a Child Workflow in a Detached context (for example, after receiving a Cancel) and just complete the parent, `UntypedChildWorkflowStub` can help you, as it has a `start()` method.

You can obtain `UntypedChildWorkflowStub` via `Workflow::newUntypedChildWorkflowStub()`, and you can wait for the Child Workflow to start like this: `yield $untypedStub->start();`

</details>


---

### #501: Repair or disable Windows tests in CI

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/501 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-10 10:08:58.000 UTC (1y 3m ago) |
| **Updated** | 2025-02-11 14:17:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Sometimes Acceptance and Functional tests in CI end with error code -1073741819.
However, the tests themselves pass completely.
It is necessary to identify the source of the problem. This may be related to how RoadRunner or Temporal CLI are terminated.

![image](https://github.com/user-attachments/assets/62ca958e-ee03-412a-bd95-40fcb9805719)


#### Comments (2)

<details>
<summary><strong>roxblnfk</strong> commented on 2024-11-05 11:54:09.000 UTC</summary>

Reproduced on the next env:
- Windows
- PHP 8.3.x
- without protobuf extension (with it works well)

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2025-01-13 23:35:51.000 UTC</summary>

Feature and Acceptance tests on Windows still fail with error code `-1073741819`, even with installed protobuf extension.

</details>


---

### #419: [Feature Request] Divide Workflow stub objects and Workflow proxy objects

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/419 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-04-12 13:28:38.000 UTC (1y 8m ago) |
| **Updated** | 2024-04-16 14:37:09.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 2 |
| **Priority Score** | 2 |
| **Labels** | enhancement |
| **Assignees** | Sushisource, wolfy-j, roxblnfk |
| **Milestone** | None |

#### Description

## I have an idea

I suggest adjusting the Workflow Client interface: introduce a distinction between the concepts of Stub and Proxy.

Currently, as a result of calling the method `WorkflowClient::newWorkflowStub($class)` (or `WorkflowClient::newRunningWorkflowStub($class)`), we do not receive a Workflow Stub ([WorkflowStubInterface](https://github.com/temporalio/sdk-php/blob/master/src/Client/WorkflowStubInterface.php)), but a proxy object that redirects calls of Workflow methods related to the Workflow interface. That is, the user interacts with the proxy object as with an implementation of the user's Workflow interface.

At the same time, we have methods `WorkflowClient::newUntypedWorkflowStub()`, `WorkflowClient::newUntypedRunningWorkflowStub()`, which return the very [WorkflowStubInterface](https://github.com/temporalio/sdk-php/blob/master/src/Client/WorkflowStubInterface.php) (type-level guarantee). That is, they work as expected.

> [!NOTE]
> `WorkflowStubInterface` is convenient when, for example, you need to call the Describe method or the Update method with your own WaitPolicy.

We face two problems:
- methods with the `Stub` postfix work differently: two out of four return `WorkflowStubInterface`, the other two return a proxy.
- there is no proper way to get `WorkflowStubInterface` from a Workflow class. Both methods that accept a class return us a proxy.

In this commit, you can see changes in the `WorkflowClientInterface` interface. 
https://github.com/temporalio/sdk-php/commit/1847f723ff5ece0320dccfc30312da387c032b96
In the methods that currently return a Proxy, I've considered backward compatibility through the `$proxy` parameter. This will all be cleaned up in the next major version.
Calls to create stubs with `$proxy=true` will throw deprecation notices.

We can also discuss replacing the naming of Stub with Handle. Then we'll just make all the *Stub methods deprecated :)


#### Comments (2)

<details>
<summary><strong>wolfy-j</strong> commented on 2024-04-16 14:18:49.000 UTC</summary>

@Sushisource, I propose to introduce new methods instead. Can we hop on a call to discuss it?

</details>

<details>
<summary><strong>roxblnfk</strong> commented on 2024-04-16 14:36:40.000 UTC</summary>

New methods might be:

```php
// Return WorkflowStubInterface
$wfClient->newWorkflow($class, ...);
$wfClient->newRunningWorkflow($class, ...);

// Return Proxy objects. There is `Proxy` suffix
$wfClient->newWorkflowProxy($class, ...);
$wfClient->newRunningWorkflowProxy($class, ...);

// Untyped (unknown class name). Return WorkflowStubInterface
$wfClient->newUntypedWorkflow($type, ...);
$wfClient->newUntypedRunningWorkflow($type, ...);

// DEPRECATED
$wfClient->newWorkflowStub($class, ...); // Proxy object
$wfClient->newRunningWorkflowStub($class, ...); // Proxy object
$wfClient->newUntypedWorkflowStub($type, ...); // WorkflowStubInterface
$wfClient->newUntypedRunningWorkflowStub($type, ...); // WorkflowStubInterface
```

Reactions: ❤️ 1

</details>


---

### #654: [Bug] upsertTypedSearchAttributes in test server

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/654 |
| **State** | OPEN |
| **Author** | Norbytus (Alexsander) |
| **Created** | 2025-09-18 11:51:41.000 UTC (3 months ago) |
| **Updated** | 2025-09-23 19:24:58.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

Trying upsert search attribute inside workflow

### Describe the bug

Create workflow with and call Workflow::upsertTypedSearchAttributes inside workflow

### Minimal Reproduction
For example i take test from https://github.com/wolfy-j/temporal-simple-test-example
```php
<?php

declare(strict_types=1);

namespace App\Workflow;

use App\Activity\GreetingActivityInterface;
use App\Activity\VoidActivityInterface;
use Carbon\CarbonInterval;
use Temporal\Activity\ActivityOptions;
use Temporal\Common\SearchAttributes\SearchAttributeKey;
use Temporal\Workflow;

class GreetingWorkflow implements GreetingWorkflowInterface
{
    private $greetingActivity;

    public function __construct()
    {
        /**
         * Activity stub implements activity interface and proxies calls to it to Temporal activity
         * invocations. Because activities are reentrant, only a single stub can be used for multiple
         * activity invocations.
         */
        $this->greetingActivity = Workflow::newActivityStub(
            GreetingActivityInterface::class,
            ActivityOptions::new()
                ->withStartToCloseTimeout(CarbonInterval::seconds(2))
                ->withTaskQueue('tests'),
        );

        $this->voidActivity = Workflow::newActivityStub(
            VoidActivityInterface::class,
            ActivityOptions::new()
                ->withStartToCloseTimeout(CarbonInterval::seconds(2))
                ->withTaskQueue('tests'),
        );
    }

    public function greet(string $name): \Generator
    {
        Workflow::upsertTypedSearchAttributes(
            SearchAttributeKey::forKeyword('CustomKeyword')->valueSet('CustomValue'),
        );

        return yield $this->greetingActivity->composeGreeting('Hello', $name);
    }
}
```
And run phpunit and test will failed with timeout

#### Comments (1)

<details>
<summary><strong>roxblnfk</strong> commented on 2025-09-23 19:24:37.000 UTC</summary>

I'm not sure that search attributes are supported by the test server at all

</details>


---

### #382: [Bug] Methods without ActivityMethod attribute are registered as Activities (even magic)

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/382 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-01-05 14:14:35.000 UTC (1y 12m ago) |
| **Updated** | 2025-12-20 08:05:59.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the bug

We have an incorrect behavior regarding Activity: all methods of `ActivityInterface` classes are scanned and added as activity methods, instead of only registering methods with the `ActivityMethod` attribute only. This leads to even **class constructors** being included in the activity list.

### Additional context

Despite the fact that the documentation everywhere instructs the user to use attributes to mark activity methods, there is a chance that not everyone followed this. 
I propose to solve the problem in 2 stages:
- [x] We will immediately remove constructors and other magic methods from scanning.
- [ ] Add a FeatureFlag to disable the registration of activity methods without attributes.
- [ ] We can trigger a DeprecationError to inform the user that they are calling an activity method that is not marked with an attribute.


#### Comments (1)

<details>
<summary><strong>xepozz</strong> commented on 2025-12-20 08:05:59.000 UTC</summary>

Regarding the feature flag, why do you think it should be allowed at all?

</details>


---

### #244: [Feature Request] FailureConverter allow more context in ordinary exceptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/244 |
| **State** | OPEN |
| **Author** | zajca (Martin Zajíc) |
| **Created** | 2022-09-14 06:07:31.000 UTC (3y 3m ago) |
| **Updated** | 2022-09-14 06:09:50.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 1 |
| **Priority Score** | 1 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

We have older codebase where we have interfaces called UserExceptions and ApplicationExceptions based on this interfaces we know if error should be shown to user or not. Interfaces has also methods like getContext:array and getParameters:array which are similar to temporal failure details.
When temporal activity fails we are not throwing temporal failures since our app is bit old and has hundreds of such exceptions. 

What SDK does is to call mapFailureToException and our context is lost here since it really just handles instance of temporal failures.

### Describe the solution you'd like

Would be great if ApplicationFailure was an interface this way we can just force our exceptions to implement this and create details and don't have to extend ApplicationFailure all the way.

Event something like:

```
interface FailureWithDetails
  public function getDetails(): ValuesInterface
```

would probably solve the problem.

#### Comments (1)

<details>
<summary><strong>zajca</strong> commented on 2022-09-14 06:09:50.000 UTC</summary>

Or maybe interface like:

```
interface HasFailureInfo
  public function getFailureInfo(): ApplicationFailureInfo
```

</details>


---

### #670: [Feature Request] Symfony 8.0 support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/670 |
| **State** | OPEN |
| **Author** | xepozz (Dmitrii Derepko) |
| **Created** | 2025-12-18 18:07:27.000 UTC (13 days ago) |
| **Updated** | 2025-12-18 18:07:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

### Describe the solution you'd like

It would be great to support symfony 8.0 packages, there are some in the sdk's "require" section:

```
"symfony/filesystem": "^5.4.45 || ^6.4.13 || ^7.0,
"symfony/http-client": "^5.4.49 || ^6.4.17 || ^7.0,
"symfony/polyfill-php83": "^1.31.0",
"symfony/process": "^5.4.47 || ^6.4.15 || ^7.0"
```

### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #668: [Feature Request] Implement `SetCurrentDetails` for dynamic workflow details

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/668 |
| **State** | OPEN |
| **Author** | FluffyDiscord (Honk) |
| **Created** | 2025-12-06 18:03:27.000 UTC (25 days ago) |
| **Updated** | 2025-12-06 18:03:27.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

Want to set current details from the workflow itself. Apparently Temporal can do that, but PHP does not yet have a way to set it.

<img width="1119" height="606" alt="Image" src="https://github.com/user-attachments/assets/7ff290ba-bb47-471c-883d-84d6b27d5a7a" />

### Describe the solution you'd like

A way to set detail dynamically from the workflow itself.

### Additional context

---


---

### #648: [Feature Request] Reclassify Benign Application errors in OpenTelemetry

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/648 |
| **State** | OPEN |
| **Author** | THardy98 (Thomas Hardy) |
| **Created** | 2025-08-26 20:41:43.000 UTC (4 months ago) |
| **Updated** | 2025-08-26 20:41:43.000 UTC |
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

### #644: [Feature Request] Plugin support

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/644 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-08-15 14:34:25.000 UTC (4 months ago) |
| **Updated** | 2025-08-15 14:34:25.000 UTC |
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

### #638: [Feature Request] Add Summary to LocalActivityOptions

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/638 |
| **State** | OPEN |
| **Author** | yuandrew (Andrew Yuan) |
| **Created** | 2025-07-18 00:06:48.000 UTC (5 months ago) |
| **Updated** | 2025-07-18 00:09:38.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

See `features` repo issue for more info

### Describe the solution you'd like



### Additional context

<!-- Add any other context or screenshots about the feature request here. -->



---

### #636: [Bug] Suppressed exception in worfklow child

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/636 |
| **State** | OPEN |
| **Author** | root-aza (Vlad Shashkov) |
| **Created** | 2025-07-13 06:47:25.000 UTC (5 months ago) |
| **Updated** | 2025-07-25 05:42:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

I am starting the workflow


### Describe the bug

If an exception is thrown from PayloadConverter, it cannot be processed and is not visible in the logs or in ui temporal itself. I would like to be able to send this exception to sentry/logs



### Minimal Reproduction

<details>
  <summary>ChildWorkflow Case</summary>


```php
<?php

final class BRequest
{
    public function __construct(
        public string $id,
    ) {
    }
}


#[WorkflowInterface]
#[AssignWorker('mdm.client_verification.workflow')]
final class BWorkflow
{
    #[WorkflowMethod('BWorkflow')]
    public function start(BRequest $request): Generator
    {
        yield Workflow::timer(CarbonInterval::minutes(1));
    }
}


#[WorkflowInterface]
#[AssignWorker('mdm.client_verification.workflow')]
final class AWorkflow
{
    #[WorkflowMethod('AWorkflow')]
    public function start(): Generator
    {
        $workflow = Workflow::newChildWorkflowStub(
            BWorkflow::class,
            Workflow\ChildWorkflowOptions::new()
                ->withTaskQueue('mdm.client_verification.workflow')
                ->withNamespace(Workflow::getInfo()->namespace)
        );

        yield $workflow->start(new BRequest('123'));
    }
}
```


<details>
  <summary>DataConverter</summary>


```php
<?php

/**
 * Temporal Bundle
 *
 * @author Vlad Shashkov <v.shashkov@pos-credit.ru>
 * @copyright Copyright (c) 2023, The Vanta
 */

declare(strict_types=1);

namespace Vanta\Integration\Symfony\Temporal\DataConverter;

use App\ClientVerification\Workflow\Join\BRequest;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer as ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface as Serializer;
use Temporal\Api\Common\V1\Payload;
use Temporal\DataConverter\EncodingKeys;
use Temporal\DataConverter\JsonConverter;
use Temporal\DataConverter\PayloadConverterInterface as PayloadConverter;
use Temporal\DataConverter\Type;
use Temporal\Exception\DataConverterException;
use Throwable;

final readonly class SymfonySerializerDataConverter implements PayloadConverter
{
    private const INPUT_TYPE = 'symfony.serializer.type';


    public function __construct(
        private Serializer $serializer,
        private PayloadConverter $payloadConverter = new JsonConverter(),
    ) {
    }


    public function getEncodingType(): string
    {
        return EncodingKeys::METADATA_ENCODING_JSON;
    }

    public function toPayload($value): Payload
    {
        $metadata = [
            EncodingKeys::METADATA_ENCODING_KEY => $this->getEncodingType(),
        ];

        $context = [ObjectNormalizer::PRESERVE_EMPTY_OBJECTS => true];

        if (is_object($value)) {
            $metadata[self::INPUT_TYPE] = $value::class;
        }

        try {
            $data = $this->serializer->serialize($value, 'json', $context);
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }

        $payload = new Payload();
        $payload->setMetadata($metadata);
        $payload->setData($data);

        return $payload;
    }

    public function fromPayload(Payload $payload, Type $type): mixed
    {
        if ("null" == $payload->getData() && $type->allowsNull()) {
            return null;
        }

        /** @var string|null $inputType */
        $inputType = $payload->getMetadata()[self::INPUT_TYPE] ?? null;


        if ($inputType == BRequest::class) {
            // dump
            throw new DataConverterException('BAM', 3, null);
        }

        if (!$type->isClass() && $inputType == null) {
            return $this->payloadConverter->fromPayload($payload, $type);
        }

        try {
            return $this->serializer->deserialize($payload->getData(), $inputType ?? $type->getName(), 'json');
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }
    }
}
```

</details>




<details>
  <summary>Temporal UI</summary>

<img width="2372" height="1234" alt="Image" src="https://github.com/user-attachments/assets/2b7a76a3-66c9-4000-97a7-3301552938cf" />
</details>



<details>
  <summary>Event history</summary>

[594e549a-bb6d-4d0d-8415-6172ee9e4d56_events.json](https://github.com/user-attachments/files/21363356/594e549a-bb6d-4d0d-8415-6172ee9e4d56_events.json)


</details>


</details>




<details>
  <summary>ContinueAsNew Case</summary>

```php
<?php

#[WorkflowInterface]
#[AssignWorker('mdm.client_verification.workflow')]
final class AWorkflow
{
    #[WorkflowMethod('AWorkflow')]
    public function start(?stdClass $foo = null): Generator
    {

        yield Workflow::timer(CarbonInterval::second(30));


        $workflow = Workflow::newContinueAsNewStub(
            self::class,
            ContinueAsNewOptions::new()
                 ->withTaskQueue('mdm.client_verification.workflow')
        );

        yield $workflow->start(new stdClass());
    }
}

```



<details>
  <summary>DataConverter</summary>

```php
<?php

/**
 * Temporal Bundle
 *
 * @author Vlad Shashkov <v.shashkov@pos-credit.ru>
 * @copyright Copyright (c) 2023, The Vanta
 */

declare(strict_types=1);

namespace Vanta\Integration\Symfony\Temporal\DataConverter;

use App\ClientVerification\Workflow\Join\BRequest;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer as ObjectNormalizer;
use Symfony\Component\Serializer\SerializerInterface as Serializer;
use Temporal\Api\Common\V1\Payload;
use Temporal\DataConverter\EncodingKeys;
use Temporal\DataConverter\JsonConverter;
use Temporal\DataConverter\PayloadConverterInterface as PayloadConverter;
use Temporal\DataConverter\Type;
use Temporal\Exception\DataConverterException;
use Throwable;

final readonly class SymfonySerializerDataConverter implements PayloadConverter
{
    private const INPUT_TYPE = 'symfony.serializer.type';


    public function __construct(
        private Serializer $serializer,
        private PayloadConverter $payloadConverter = new JsonConverter(),
    ) {
    }


    public function getEncodingType(): string
    {
        return EncodingKeys::METADATA_ENCODING_JSON;
    }

    public function toPayload($value): Payload
    {
        $metadata = [
            EncodingKeys::METADATA_ENCODING_KEY => $this->getEncodingType(),
        ];

        $context = [ObjectNormalizer::PRESERVE_EMPTY_OBJECTS => true];

        if (is_object($value)) {
            $metadata[self::INPUT_TYPE] = $value::class;
        }

        try {
            $data = $this->serializer->serialize($value, 'json', $context);
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }

        $payload = new Payload();
        $payload->setMetadata($metadata);
        $payload->setData($data);

        return $payload;
    }

    public function fromPayload(Payload $payload, Type $type): mixed
    {
        if ("null" == $payload->getData() && $type->allowsNull()) {
            return null;
        }

        /** @var string|null $inputType */
        $inputType = $payload->getMetadata()[self::INPUT_TYPE] ?? null;


        if ($inputType == \stdClass::class) {
            // workflow broken 💥
            throw new DataConverterException('BAM', 3, null);
        }

        if (!$type->isClass() && $inputType == null) {
            return $this->payloadConverter->fromPayload($payload, $type);
        }

        try {
            return $this->serializer->deserialize($payload->getData(), $inputType ?? $type->getName(), 'json');
        } catch (Throwable $e) {
            throw new DataConverterException($e->getMessage(), $e->getCode(), $e);
        }
    }
}
```

</details>


<details>
  <summary>Temporal UI</summary>

<img width="2388" height="1271" alt="Image" src="https://github.com/user-attachments/assets/366e95a4-d25e-4d44-aed5-f027bbebf307" />


<img width="2393" height="1302" alt="Image" src="https://github.com/user-attachments/assets/564c90df-661e-4870-ae50-dd2ab0fb2906" />
</details>



<details>
  <summary>Event history</summary>

[dc5c2461-ab3e-4db6-9b3d-b9975f590159_events.json](https://github.com/user-attachments/files/21425040/dc5c2461-ab3e-4db6-9b3d-b9975f590159_events.json)

[ce120686-533e-4f9a-b7fd-c6f164ebf23c_events.json](https://github.com/user-attachments/files/21425046/ce120686-533e-4f9a-b7fd-c6f164ebf23c_events.json)

</details>



</details>


### Environment/Versions

- Temporal sdk 2.15.1
- RoadRunner 2025.1.2
- Temporal server 1.24.2



---

### #624: [Bug] Facade methods throw wrong exception

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/624 |
| **State** | OPEN |
| **Author** | mtorromeo (Massimiliano Torromeo) |
| **Created** | 2025-05-27 15:43:07.000 UTC (7 months ago) |
| **Updated** | 2025-12-26 15:26:28.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | xepozz |
| **Milestone** | None |

#### Description

### Describe the bug

When calling Facade methods from the wrong context a `RuntimeException` is thrown but the phpdoc `@throws` tag documents that the `Temporal\Exception\OutOfContextException` exception should be thrown instead.

From a superficial search, it seems like the `OutOfContextException` is never used in the codebase.

### Minimal Reproduction

```
❯ php -a
Interactive shell

php > require_once 'vendor/autoload.php';
php > \Temporal\Activity::getInfo();
PHP Warning:  Uncaught RuntimeException: Calling facade methods can only be made from the currently running process in ...
```

### Environment/Versions

temporal/sdk v2.14.1



---

### #605: [php] SDK support for activity reset 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/605 |
| **State** | OPEN |
| **Author** | drewhoskins-temporal (Drew Hoskins) |
| **Created** | 2025-04-23 19:08:08.000 UTC (8 months ago) |
| **Updated** | 2025-05-07 14:04:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

See https://github.com/temporalio/features/issues/620


---

### #601: [Feature Request] Expose `WorkflowInboundCallInterceptor::init()`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/601 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2025-04-17 11:59:47.000 UTC (8 months ago) |
| **Updated** | 2025-04-17 11:59:47.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

Expose `WorkflowInboundCallInterceptor::init()` like in [Java SDK](https://github.com/temporalio/sdk-java/blob/a4c9e68254e4eae7e46ee0cd6c8f3e0d13dfe183/temporal-sdk/src/main/java/io/temporal/common/interceptors/WorkflowInboundCallsInterceptor.java#L182-L194)


---

### #595: [Bug] Incorrect generic extends of RuleFactoryInterface

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/595 |
| **State** | OPEN |
| **Author** | KorDum (KorDum) |
| **Created** | 2025-04-14 06:26:31.000 UTC (8 months ago) |
| **Updated** | 2025-04-14 06:26:31.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Bug |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### What are you really trying to do?

There is no correct way to use generic for your marshall-types.

### Describe the bug

`RuleFactoryInterface` is not a generic interface and does not give you the ability to specify your own type:

```php
/**
 * @extends TypeInterface<mixed>
 */
interface RuleFactoryInterface extends TypeInterface {}
```

Therefore, when using this interface together with an abstract Type (like `UuidType`) we get this error from phpstan

>   Class Temporal\Internal\Marshaller\Type\Type specifies template type TMarshalType of interface Temporal\Internal\Marshaller\Type\TypeInterface as int<0, max> but it's already specified as mixed.  
> 🪪  generics.interfaceConflict

### Minimal Reproduction

```php
/**
 * @extends Type<non-negative-int>
 */
final class SomeType extends Type implements DetectableTypeInterface, RuleFactoryInterface
{
    #[Override]
    public function parse(mixed $value, mixed $current): Some
    {
        return Some::fromInt($value);
    }

    #[Override]
    public function serialize(mixed $value): int
    {
        return $value->toInt();
    }

    #[Override]
    public static function match(ReflectionNamedType $type): bool
    {
        return !$type->isBuiltin() && $type->getName() === Some::class;
    }

    #[Override]
    public static function makeRule(ReflectionProperty $property): ?MarshallingRule
    {
        $type = $property->getType();

        if (!$type instanceof ReflectionNamedType || !self::match($type)) {
            return null;
        }

        if ($type->allowsNull()) {
            return new MarshallingRule(
                name: $property->getName(),
                type: NullableType::class,
                of: new MarshallingRule(
                    type: self::class,
                    of: $type->getName(),
                ),
            );
        }

        return new MarshallingRule(
            name: $property->getName(),
            type: self::class,
            of: $type->getName(),
        );
    }
}
```

### Environment/Versions

- Temporal SDK Version: 2.13.4



---

### #587: [Feature Request] Serialization context for codecs and converters

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/587 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-03-25 15:05:25.000 UTC (9 months ago) |
| **Updated** | 2025-03-25 15:05:25.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/434



---

### #574: [Feature Request] Support "RawValue" non-converted values

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/574 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-02-21 20:27:54.000 UTC (10 months ago) |
| **Updated** | 2025-02-21 20:27:54.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

See https://github.com/temporalio/features/issues/603, need a simple payload wrapper that tells converters not to apply conversion.



---

### #567: Expose Workflow cancel cause/reason

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/567 |
| **State** | OPEN |
| **Author** | Sushisource (Spencer Judge) |
| **Created** | 2025-02-11 20:44:24.000 UTC (10 months ago) |
| **Updated** | 2025-02-11 20:44:24.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | None |
| **Assignees** | None |
| **Milestone** | None |

#### Description

WorkflowExecutionCancelRequestedEventAttributes has a cause field that should be exposed when workflows receive cancels, and we should additionally expose this as an input when users are issuing cancels from clients or commands


---

### #558: Add `Patched()` and `DeprecatePatch()` APIs

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/558 |
| **State** | OPEN |
| **Author** | mjameswh (James Watkins-Harvey) |
| **Created** | 2025-01-29 23:55:36.000 UTC (11 months ago) |
| **Updated** | 2025-07-09 08:01:13.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | 2.16.0 |

#### Description

### Describe the solution you'd like

In short:

- Add the `Patched(patchId, memoized): boolean` and `DeprecatePatch(patchId, memoized): boolean` APIs. Refer to Core's implementation (once it is ready).

- (Maybe) Deprecate the `GetVersion` API.

See temporalio/features#591 for details.


---

### #545: [Feature Request] Provide "workflow local"

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/545 |
| **State** | OPEN |
| **Author** | cretz (Chad Retz) |
| **Created** | 2025-01-07 14:03:22.000 UTC (11 months ago) |
| **Updated** | 2025-01-07 14:03:22.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Describe the solution you'd like

Users need a static workflow-local var that is scoped only to the current workflow when accessed via code. Do this however best in PHP to match how one might create a thread local or "async" local. See https://github.com/temporalio/features/issues/571.


---

### #524: [Feature Request] Allow mocking child workflows like activites

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/524 |
| **State** | OPEN |
| **Author** | KorDum (KorDum) |
| **Created** | 2024-11-07 16:27:04.000 UTC (1y 1m ago) |
| **Updated** | 2024-11-07 17:21:08.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Feature, enhancement, Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.

In a situation where one workflow starts a child workflow, there is no way to replace the child workflow with a stub. Or I don't understand how to do it - there is no word about it in the documentation.

I found some strange behavior that led me to these thoughts.
Let's imagine that we have two workflows:

1. Workflow A
2. Workflow B, which is run via `asyncDetached` in Workflow A. Workflow B has a timer for 30 minutes

This tricky setup of two workflows allows to detect a bug (as I think). If we run an integration test on Workflow A where only the activity are replaced with stubs, then run an integration test on Workflow B, the timer waits an honest 30 minutes.

If we run only the test on Workflow B, the timer will run instantly without any waiting.

### Describe the solution you'd like

It seems that if you replace Workflow B in the test for Workflow A with a stub, this strange problem goes away.



---

### #507: Eliminate DestructMemorizedInstanceException

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/507 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-19 14:10:33.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-19 14:10:34.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We need to make the SDK stop throwing `DestructMemorizedInstanceException`.
I think we can remove the Workflow context and promises without throwing this exception.


---

### #502: Fix test case

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/502 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-09-10 10:15:36.000 UTC (1y 3m ago) |
| **Updated** | 2024-09-10 10:15:36.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

We need to figure out why the Harness test sometimes fails in CI.
This may be related to how many tests were executed before it.

https://github.com/temporalio/sdk-php/blob/28538c1a346df6273e882d235e417086ed9e19c7/tests/Acceptance/Harness/Schedule/BasicTest.php#L67-L75

![image](https://github.com/user-attachments/assets/bec2756d-2489-4930-aaed-f03410e58967)



---

### #476: [Feature Request] Cloud Operations API Client

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/476 |
| **State** | OPEN |
| **Author** | josh-berry (Josh Berry) |
| **Created** | 2024-07-16 20:49:18.000 UTC (1y 5m ago) |
| **Updated** | 2024-07-16 20:49:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

As described in https://github.com/temporalio/features/issues/440, add support for the Cloud Operations APIs to PHP.


---

### #454: Encode Failures using EncodedAttributes

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/454 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2024-06-12 11:12:12.000 UTC (1y 6m ago) |
| **Updated** | 2024-08-07 17:39:10.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

That Harness test must be passed https://github.com/temporalio/features/pull/485/commits/29aed00e592d0be7449c61e4a7adab4ddcaecc33

> Failure.message should be "Encoded failure" and Failure.stack_trace should be "". 


---

### #400: [Feature Request] Expose OperatorServiceClient 

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/400 |
| **State** | OPEN |
| **Author** | shanginn (Николай Шангин) |
| **Created** | 2024-02-16 13:00:03.000 UTC (1y 10m ago) |
| **Updated** | 2024-02-16 13:00:03.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

I want to have the ability to delete a namespace using PHP-SDK

### Describe the solution you'd like

There is already working OperatorServiceClient in the SDK, but it's not used anywhere, so in order to use it I need to reimplement BaseClient.



---

### #318: Improve PHP files generated from proto

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/318 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-07-04 14:11:30.000 UTC (2y 6m ago) |
| **Updated** | 2024-03-14 21:09:29.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | roxblnfk |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
There are a lot of Psalm issues related with usage of PHP files generated from proto (messages).
For example:

```php
$details = $info->hasDetails()
    // psalm: PossiblyNullArgument: Argument 1 of EncodedValues::fromPayloads cannot be null, possibly null value provided
    ? EncodedValues::fromPayloads($info->getDetails(), $converter)
    : EncodedValues::empty();
```

### Describe the solution you'd like
That case will be fixed if we add additional annotations in generated files fike this:

```php
/**
 * ...
 * @psalm-mutation-free
 */
public function getDetails() { ... }

/**
 * @psalm-assert-if-true !null $this->getDetails()
 * @psalm-mutation-free
 */
public function hasDetails() { ... }
```




---

### #285: Use temporal.download server to download `temporalite` or `temporal-test-sever`

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/285 |
| **State** | OPEN |
| **Author** | roxblnfk (Aleksei Gagarin) |
| **Created** | 2023-02-02 13:34:30.000 UTC (2y 11m ago) |
| **Updated** | 2024-03-15 22:05:05.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement, Tests |
| **Assignees** | None |
| **Milestone** | None |

#### Description

To add yet another test-server downloader

> We have `https://temporal.download` now for downloading test server. Specifically `https://temporal.download/{artifact_name}/{version_name}` where `{artifact_name}` is `temporalite` or `temporal-test-sever` (i.e. the Java test server), and `{version_name}` is `default` or a version name. You should also pass `platform`, `arch`, `sdk-name`, and `sdk-version` query parameters to this URL. The URL will provide the path to the archive and file in the archive for the binary.
>
> For example, https://temporal.download/temporal-test-server/default?platform=windows&arch=amd64&sdk-name=sdk-python&sdk-version=1.0.0 returns:
> 
> ```
> {"archiveUrl":"https://temporal.download/assets/temporalio/sdk-java/releases/download/v1.17.0/temporal-test-server_1.17.0_windows_amd64.zip","fileToExtract":"temporal-test-server_1.17.0_windows_amd64/temporal-test-server.exe"}
> ```
> 
> You can see some logic that uses this at https://github.com/temporalio/sdk-core/blob/106b09f9db76bf3f7372de8da3f23e8194eecba1/core/src/ephemeral_server/mod.rs and https://github.com/temporalio/features/blob/ebc86a8ea07f029bee0d3f07fa841de31a07402c/harness/go/temporalite/temporalite.go#L119. We will be moving away from Temporalite of course. I suspect we will add "local server" (i.e. temporalite/temporal-cli) and "test server" (i.e. java test server) download-extract-run logic to the Go SDK in the near future. cc bergundy

_Originally posted by cretz in https://github.com/temporalio/sdk-php/issues/280#issuecomment-1413704850_




---

### #269: [Feature Request] Use `mapWorkflowFailureToException` for all workflow methods ?

| Field | Value |
|-------|-------|
| **URL** | https://github.com/temporalio/sdk-php/issues/269 |
| **State** | OPEN |
| **Author** | ruscon (Coroliov Oleg) |
| **Created** | 2022-12-17 14:08:51.000 UTC (3 years ago) |
| **Updated** | 2024-03-15 22:10:19.000 UTC |
| **Upvotes** | 0 |
| **Comments** | 0 |
| **Priority Score** | 0 |
| **Labels** | enhancement |
| **Assignees** | None |
| **Milestone** | None |

#### Description

### Is your feature request related to a problem? Please describe.
<!-- A clear and concise description of what the problem is. Ex. I'm always frustrated when [...] -->

I've run into the problem that all methods of the `WorkflowStub` class, except for the `getResult` method, don't properly map errors from `GRPC`.
`WorkflowStub.getResult` internally makes a call to the `$this->mapWorkflowFailureToException()` method.

I would like to see something similar for other methods, for example, for the `WorkflowStub.cancel` method and others.

### Additional context
<!-- Add any other context or screenshots about the feature request here. -->

You can check [sample with cancelation](https://github.com/temporalio/samples-php/blob/master/app/src/Subscription/CancelCommand.php#L40)
You will never get the `WorkflowNotFoundException` exception, only the `ServiceClientException`  will be thrown.




