---
layout: blog-post
title: Announcing Ballerina Swan Lake Update 13 (2201.13.0)
author: Asma Jabir
published-date: 11 Nov 2025
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2025-11-11-announcing-ballerina-2201.13.0-swan-lake-update-13/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

The Ballerina team is excited to announce the thirteenth update release of Ballerina Swan Lake, Ballerina Swan Lake Update 13 (2201.13.0). This update introduces experimental natural programming capabilities with first-class syntax for working with LLMs, multi-package workspace support for managing complex projects, decoupled CLI tools for faster updates, and intelligent build caching for improved developer productivity.

## Natural expressions

Update 13 introduces natural expressions, an experimental feature introducing first-class syntax for natural language integrations, simplifying [working with Large Language Models (LLMs)](https://ballerina.io/learn/work-with-llms-using-natural-expressions/).

Natural expressions are blocks of natural language instructions executed at runtime with the help of generative AI models. They are dependently typed, allowing the model to identify the required result format based on the expected type and automatically bind the response.

Natural expressions supports multimodal inputs such as images and audio files.

<img alt="Multimodal inputs" src="/images/u13/multimodal-inputs-np.png">

For more information on the wider concept proposed as "Natural Programming", see [Natural Language is Code: A hybrid approach with Natural Programming](https://blog.ballerina.io/posts/2025-04-26-introducing-natural-programming/)

An experimental implementation of compile-time code generation has also been introduced. This allows users to describe the structure of data (e.g., test data) or the implementation of a function in natural language in the source code, and have the corresponding code be generated at compile time with the help of a generative AI model.

<img alt="Compile-time test data generation" src="/images/u13/compile-time-test-data.png">

## Workspaces

Multi-package [workspaces](https://ballerina.io/learn/workspaces/) allow organizing related Ballerina packages in a unified structure, supporting the monorepo architecture. This streamlines the workflow by allowing to manage all related packages together within a single project. 

Previously, packages had to be published to a repository before they could be used as dependencies. With workspace support, packages within a workspace can be referenced without publishing to any repository. This enables faster development cycles and easier testing of changes across packages.

For example, when building an application with separate packages for different services and shared utilities, you can now develop and test them together. Changes to a shared utility package are immediately available to the dependent packages.

![Workspace](/images/u13/workspace-screen-rec.gif)

Service consolidation also becomes simpler with workspaces. In monolithic environments, services are consolidated as a single deployment rather than deploying them separately. When the consolidator package is created within the workspace, the specified services are resolved seamlessly. This eliminates the intermediate step of publishing packages locally before consolidating them, streamlining the path from development to deployment.

## OpenShift support

The Ballerina code-to-cloud plugin now supports generating OpenShift artifacts. The CLI tool generates artifacts for deployment, service, and horizontal pod autoscaler. The generated artifacts can be directly used to [deploy the Ballerina service on an OpenShift cluster](https://ballerina.io/learn/containerized-deployment/#openshift-deployment).

## Tooling enhancements

The CLI now uses build caching to skip redundant compilation when no changes are made to the project. After the first build, subsequent builds within 24 hours will detect unchanged projects and skip compilation, showing them as "UP-TO-DATE". This can significantly reduce the development time. The build cache can be invalidated when a fresh compilation is needed.

For example, a simple HTTP greeting service takes just one second when the project remains unchanged.

<img alt="Caching builds" src="/images/u13/build-cache.png">

Moreover, OpenAPI, GraphQL, gRPC, Persist, and AsyncAPI CLI tools can now be updated independent of the Ballerina distribution. This enables faster delivery of features without waiting for a full distribution release.

## Get started with Swan Lake Update 13

In addition to the features highlighted above, this release includes numerous improvements across the language, runtime, Ballerina library, and developer tools. For a comprehensive overview of all the new features and improvements brought by Swan Lake Update 13, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.13.0).

Fueled by the collective innovation of the Ballerina community, Swan Lake Update 13 advances the language to help developers build connected systems with ease. Get started with Ballerina Swan Lake Update 13 and elevate your integration experience.
