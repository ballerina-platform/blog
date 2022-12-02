---
layout: blog-post
title: Announcing Ballerina 2201.3.0 (Swan Lake Update 3)
author: Ballerina Team
published-date: 05 December 2022
status: Published
socialmediaimage: Ballerina-Swan-Lake-GA-Release-banner-02-with-button.png
permalink: /posts/2022-12-05-announcing-ballerina-2201.3.0-swan-lake-update-3/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

We are happy to announce a new release, [Ballerina 2201.3.0 (Swan Lake Update 3)](https://ballerina.io/downloads/), the third update release of Ballerina Swan Lake.

The main highlight of this release is the support for generating native executables with GraalVM. This introduces a new `bal build --native` CLI command to generate the GraalVM native executable and the  `bal build --native --cloud=docker` CLI command for the native executable Docker image creation for cloud-enabled projects. For more information, see [Build a native executable](https://ballerina.io/learn/build-a-native-executable/).

The other significant new additions and improvements belonging to multiple areas that are done in this release include the below.

## Compiler updates

- The Swan Lake Update 3 release allows you to use any expression as the default value of a function type parameter.
- There were also a few improvements to working with optional fields.
- An optional terminating semicolon is allowed now for module-level declarations.


## Runtime updates

- Configuration of `nil`, `json`, and array of table values are now supported by configurable variables through the TOML syntax. It is also improved to add filler values when configuring array values.
- The `fromJsonWithType` and `cloneWithType` functions of the `lang.value` module are improved to return the value with the first matching type of the union members when cloning with a union type if multiple matching types are found. Previously those were panicked with ambiguous errors.

 ## Standard Library updates

- Support was added in the `graphql` module for disabling introspection queries, and also for GraphQL interfaces including interfaces implementing interfaces. 
- The `graphql` module is improved with added support for the service-level interceptor execution.
- Additions were done to the `http` module for having a grace period for the graceful stop of the listener. The application will exit when a resource function panics. 
- Now, the HTTP resource functions support defaultable query parameters.
- Server reflection support was added for gRPC services in the `grpc` module and the Protocol Buffers version was updated to 3.21.7.

## Developer tools updates

- The `Run-In-Terminal` feature was introduced to the debugger to accommodate Ballerina programs that take user inputs during the launch mode.
- The GraphQL tool was improved by introducing single client generation for single schema definitions and, enabling the GraphQL client config generation to support runtime configurability.
- Changed the default behavior of the OpenAPI client generation to generate resource methods instead of remote methods.

For a detailed list of what’s new in Swan Lake Update 3, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.3.0).

We want to extend our sincerest thanks to the Ballerina community for your valuable feedback and support in making Ballerina what it is today. We hope you enjoy this release.

Cheers,
The Ballerina Team
