<!--
Generated: 2026-01-10T19:43:26.079Z
Theme: api-design
Issues: 14
Repositories: 1
-->

# API Design: Cross-Repository Analysis

## Overview

The API design issues in the Temporal ecosystem are concentrated entirely within the `temporalio/api` repository, which serves as the foundational Protocol Buffer definitions for the entire platform. With 14 total issues (9 open, 5 closed), this repository faces challenges primarily around proto organization, dependency management, and API evolution. The issues reflect the tension between maintaining backward compatibility while improving the API surface for developer experience across multiple language SDKs.

Key themes include protobuf schema organization and distribution (#328, #400, #18), HTTP API design and routing (#409, #427, #428), and the need to clean up confusing or misleading API elements (#6, #232, #299). Several high-upvote issues (#328 with 6 upvotes, #24 and #409 with 1 upvote each) demonstrate strong community interest in improving the tooling and distribution mechanisms around Temporal's proto definitions. The repository shows healthy maintenance with 5 of 14 issues closed, addressing fundamental organizational problems like package structure and naming consistency.

The concentration of issues in a single repository makes sense given that `temporalio/api` is the source of truth for all SDK interfaces. However, the impact of these issues radiates outward—poor proto organization affects every SDK's code generation, confusing enum values create bugs across all implementations, and HTTP API routing conflicts impact UI and gateway integrations. The cross-cutting nature of these issues means that thoughtful API design improvements here have multiplicative benefits across the entire Temporal ecosystem.

## By Repository

### api (14 issues)

The api repository struggles with three main problem areas: protobuf tooling and distribution (#328, #400), HTTP API routing and versioning (#409, #427, #428), and API clarity and maintenance (#6, #232, #299, #131). Critical issues include #328 (Buf schema registry publishing with 6 upvotes), #400 (third-party proto dependency conflicts), and #427 (configurable HTTP API subpaths for UI integration). The repository shows a pattern of addressing technical debt through systematic cleanup—resolved issues include proto package reorganization (#18), enum renaming for consistency (#6), adoption of buf for linting (#24), and endpoint naming standardization (#428).

## Common Patterns

1. **Protobuf Organization and Dependency Management** - Multiple issues (#328, #400, #18) address challenges in organizing proto files, managing third-party dependencies, and distributing schemas. The root cause is balancing ease of use (keeping dependencies bundled) with flexibility (avoiding conflicts with user's own proto dependencies).

2. **API Naming Consistency and Clarity** - Several issues (#6, #428, #299, #232) identify confusing or misleading API elements that cause developer friction. Examples include semantically incorrect enum names (WorkflowAlreadyRunning vs WorkflowAlreadyStarted), inconsistent endpoint naming patterns (/cluster-info vs /cluster), and internal states exposed in public APIs.

3. **HTTP API Evolution and Integration** - Issues #409, #427, and #428 demonstrate the challenges of evolving the HTTP API surface while maintaining compatibility and enabling flexible deployment patterns. The HTTP API is still stabilizing, allowing for breaking changes like path prefix removal (#409) before full release.

4. **Backward Compatibility vs. Developer Experience Trade-offs** - Multiple issues (#307, #131, #169, #18) wrestle with when to deprecate confusing APIs, remove deprecated fields, or reorganize namespaces. The tension between not breaking existing code and improving the API surface for new users is a recurring theme.

5. **Language-Specific Code Generation Challenges** - Issues #169 and #18 highlight that a single proto structure must serve multiple language ecosystems with different conventions and expectations, creating pressure to either customize per-language or find a one-size-fits-all solution.

## High-Impact Issues

| # | Repo | Title | Severity | Status |
|---|------|-------|----------|--------|
| #328 | api | Publish and maintain Buf schema registry | medium | 🔴 Open |
| #400 | api | Move third-party proto dependencies to subdirectory | medium | 🔴 Open |
| #427 | api | Make HTTP API routes configurable at non-root subpath | medium | 🔴 Open |
| #307 | api | Deprecate ListOpenWorkflowExecutions and ListClosedWorkflowExecutions | low | 🔴 Open |
| #18 | api | Reorganize proto packages by decomposing common/enums | medium | ✅ Closed |
| #409 | api | Remove /api/v1/ prefix from HTTP API paths | medium | ✅ Closed |
| #232 | api | Remove RETRY_STATE_IN_PROGRESS from public API | low | 🔴 Open |
| #299 | api | Fix misleading 'complete history' comment in PollWorkflowTaskQueueResponse | low | 🔴 Open |
| #169 | api | Allow language-specific namespace customization in proto generation | low | 🔴 Open |
| #6 | api | Rename ChildWorkflowExecutionFailedCause enum value for consistency | medium | ✅ Closed |

**Impact rationale**: #328 (6 upvotes) directly affects modern protobuf workflows and code generation tooling adoption. #400 blocks users who need custom proto dependency versions. #427 prevents flexible UI Server deployment patterns. #307 addresses long-term API surface confusion. #18 and #409 (closed) resolved fundamental organizational and routing issues. #232, #299, and #169 impact developer experience and API clarity. #6 (closed) fixed semantic consistency across the API.

## Recommendations

1. **Prioritize Buf Schema Registry Publishing (#328)** - With 6 upvotes and broad impact on protobuf tooling adoption, resolve the Google dependency inlining challenge and publish to Buf Schema Registry. Consider using Buf's dependency management features or creating a separate module for inlined dependencies. This unblocks modern code generation workflows and improves the developer experience across all SDKs.

2. **Implement Configurable HTTP API Subpath Support (#427)** - The inability to mount HTTP API routes at a non-root subpath creates real integration challenges for UI Server deployments and custom API gateways. This should be addressed before HTTP API stabilization to avoid breaking changes later. Consider making the path prefix configurable via environment variable or config file.

3. **Resolve Third-Party Proto Dependency Conflicts (#400)** - Move Google API and Protobuf dependencies to a `third_party/` or `vendor/` subdirectory with proper protoc include path configuration. This is a well-established pattern in the protobuf ecosystem and prevents conflicts when users have their own versions of these common dependencies. Document the include paths clearly for SDK maintainers.

4. **Complete API Cleanup and Deprecation Cycle** - Address #131 (remove deprecated fields), #232 (hide internal retry state), #299 (fix misleading documentation), and #307 (deprecate confusing list methods) as a coordinated cleanup effort. Establish clear deprecation guidelines with timeline expectations (e.g., mark deprecated in version N, remove in version N+2) to balance backward compatibility with API clarity.

5. **Establish Language-Specific Customization Guidelines (#169)** - Rather than attempting one-size-fits-all proto organization, define a policy for when language-specific customizations are acceptable. Consider using proto options or buf configuration to allow languages like .NET to generate more idiomatic namespace structures without affecting other SDKs. Document the trade-offs and decision criteria for future requests.

## Related Themes

- **breaking-changes** - Several issues involve backward compatibility considerations and managed deprecation cycles
- **serialization** - Protobuf organization and code generation directly impacts serialization patterns across SDKs
- **observability** - API clarity and consistent naming improve debuggability and understanding of workflow execution states