---
layout: blog-post
title: Announcing Ballerina 2201.3.0 (Swan Lake Update 3)
author: Ballerina Team
published-date: 06 December 2022
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2022-12-05-announcing-ballerina-2201.3.0-swan-lake-update-3/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

We are happy to announce a new release, [Ballerina 2201.3.0 (Swan Lake Update 3)](https://ballerina.io/downloads/), the third update release of Ballerina Swan Lake.

The main highlight of this release is the support for generating native executables with GraalVM. This introduces a new `--native` option to the `bal build` CLI command (i.e., `bal build --native`) to generate the GraalVM native executable. Also, the `--native` and `--cloud=docker` or `--cloud=k8s` can be combined to build a Docker image with the native executable. See [Build a native executable](https://ballerina.io/learn/build-a-native-executable/).

The rest of the significant additions and improvements are described below.

## Compiler updates

- The Swan Lake Update 3 release allows you to use any expression as the default value of a function type parameter.
- There were also a few improvements to working with optional fields.
- An optional terminating semicolon is allowed now for module-level declarations.

## Runtime updates

- The configuration of nil, JSON, and array of table values are now supported by configurable variables through the TOML syntax. It is also improved to add filler values when configuring array values.
- The `fromJsonWithType` and `cloneWithType` functions of the `ballerina/lang.value` module are improved to return the value with the first matching type of the union members when cloning with a union type if multiple matching types are found. Previously, those were panicked with ambiguous errors.

## Standard library updates

- Disabling introspection queries support and GraphQL interfaces support are added to the `graphql` module. Also, the `graphql` module is improved with the support for the service-level interceptor execution.
- Additions were done to the `http` module for having a grace period for the graceful stop of the listener. The application will exit when a resource function panics. 
- Now, the HTTP resource functions support defaultable query parameters.
- Server reflection support was added for gRPC services in the `grpc` module and the Protocol Buffers version was updated to 3.21.7.

## Developer tools updates

- The `Run-In-Terminal` feature was introduced to the debugger to accommodate Ballerina programs that take user inputs during the launch mode.
- The GraphQL tool was improved by introducing single client generation for single schema definitions and, enabling the GraphQL client config generation to support runtime configurability.
- Changed the default behavior of the OpenAPI client generation to generate resource methods instead of remote methods.

For a detailed list of what’s new in Swan Lake Update 3, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.3.0).

We extend our sincerest thanks to the Ballerina community for your valuable feedback and support in making Ballerina what it is today. We hope you enjoy this release.

Cheers,
The Ballerina Team
