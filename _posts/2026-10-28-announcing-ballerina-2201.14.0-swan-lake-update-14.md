---
layout: blog-post
title: Announcing Ballerina Swan Lake Update 14 (2201.14.0)
author: Hasitha Aravinda
published-date: 28 Oct 2026
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2026-10-28-announcing-ballerina-2201.14.0-swan-lake-update-14/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

The Ballerina team is excited to announce the fourteenth update release of Ballerina Swan Lake, Ballerina Swan Lake Update 14 (2201.14.0). This update introduces durable workflows, along with several improvements to the AI library and other areas.

## Durable workflows

Update 14 introduces the `ballerina/workflow` library for writing durable workflows. A workflow is a Ballerina function that can pause for hours or days, waiting for a person to approve a task or for data from another system, and then continue from the same point, even after a restart.

The following workflow reserves stock, waits for a manager's approval and for the payment, and then ships the order:

```ballerina
@workflow:Workflow
function fulfilOrder(workflow:Context ctx, Order 'order,
        record {|future<Payment> payment;|} events) returns string|error {
    Stock stock = check ctx->callActivity(reserveStock, {sku: 'order.sku, quantity: 'order.quantity},
            retryPolicy = {maxRetries: 3});
    Approval approval = check ctx->awaitHumanTask("approveOrder", {'order, stock},
            userRoles = "manager", title = "Approve the order");
    if approval.approved {
        Payment payment = check wait events.payment;
        string trackingId = check ctx->callActivity(createShipment, {'order});
        () _ = check ctx->callActivity(notifyCustomer,
                {email: 'order.customerEmail, message: string `Paid ${payment.amount}, tracking ${trackingId}`});
        return "SHIPPED";
    } else {
        () _ = check ctx->callActivity(notifyCustomer, {email: 'order.customerEmail, message: "Order rejected"});
        return "REJECTED";
    }
}
```

Activities such as `reserveStock` are plain functions that call other systems. Each completed step is recorded, so a restarted workflow does not run it again. A service starts a workflow with `workflow:run` and sends it data with `workflow:sendData`, so any listener (HTTP, Kafka, FTP, and so on) can drive it.

Human tasks are routed by role, and the `workflow.management.rest` module exposes a REST API to list and complete them. Activity calls can have retry and approval policies, and prebuilt activities call REST and SOAP APIs and send email.

A durable agent (`workflow:DurableAgent`) runs an AI agent inside a workflow, so its tool calls and approvals also survive restarts.

![A durable agent in the Ballerina VS Code extension](/images/u14/durable-agent.png)

The Ballerina VS Code extension shows a workflow as a diagram, with separate nodes for activities, human tasks, and data waits.

![A workflow in the Ballerina VS Code extension](/images/u14/workflow-diagram.png)

For development, the in-memory mode runs everything inside your program with no server. In production, workflows run on Temporal, either self-hosted or on Temporal Cloud. For more information, see the [workflow examples](https://ballerina.io/learn/by-example/).

## AI library improvements

This release also brings the following improvements to the AI library (`ballerina/ai`).

- **Human approval for tools:** Mark a tool with `requiresApproval`, and the agent pauses before calling it until a person approves or rejects the call. A function can decide per call, for example, only for refunds above a limit. Chat services get a `decision` resource to receive the answer.
- **Parallel tool calls:** Tool calls returned in a single model response now run in parallel by default.
- **Selective tool loading:** With `LLM_FILTER`, the agent sends the model only the schemas of the tools it needs, which helps with large MCP toolkits.
- **Structured input:** Agents accept any `anydata` value as input, not only text.
- **Reusable agents:** Agents can be written as classes and shared as packages.
- **Traces and evaluations:** An agent run can return an `ai:Trace` with every tool call, and conversations can be loaded from evaluation datasets to test agents.
- **Agent identity:** Agents can carry their own credentials, and tools can require scopes.

![An agent tool that needs approval, marked in the Ballerina VS Code extension](/images/u14/ai-agent-tools.png)

## Runtime updates

The Ballerina runtime now runs on JDK 25, the latest long-term support release of Java. The installers include the JRE, so most programs need no change.

## Get started with Swan Lake Update 14

For a complete list of the new features, improvements, and breaking changes in Swan Lake Update 14, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.14.0). Try the workflow library and the AI improvements, and let us know what you think on [GitHub](https://github.com/ballerina-platform/ballerina-library/issues) or [Discord](https://discord.com/invite/ballerinalang).
