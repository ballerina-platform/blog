---
layout: blog-post
title: Announcing Ballerina 2201.2.0 (Swan Lake Update 2)
author: Ballerina Team
published-date: 10 September 2022
status: Published
socialmediaimage: Ballerina-Swan-Lake-GA-Release-banner-02-with-button.png
permalink: /posts/2022-08-10-announcing-ballerina-2201.2.0-swan-lake-update-2/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

We are happy to announce a new release, [Ballerina 2201.2.0 (Swan Lake Update 2)](https://ballerina.io/downloads/), the second update release of Ballerina Swan Lake.

## Additions to the language

- The language now comes with support for resource methods in client objects. These resource methods can only be accessed by client resource access actions. With this feature, resource methods are also allowed in object-type descriptors.
- You can also create maps with query expressions; a query expression that constructs a map must start with the map keyword. The type of the select expression must be a tuple `[string, T]`. Then, the query expression will create a value of type `map<T>`. Duplicate keys will be handled similarly to a query expression constructing a table.
- Now, Ballerina comes with support for running new strands safely on separate threads. The isolated feature has been extended to identify cases where strands created by a start action or a named worker can be run safely on separate threads. The strand created by a named worker can run on a separate thread from the default worker if the body of the worker satisfies the requirements for an isolated function.

## Improvements to the language

- The contextually-expected type for interpolations in XML template expressions has been changed to `xml`. This ensures that a query expression as an interpolation works as expected. However, it is not an error for the static type to not be a subtype of the contextually-expected type.
- Query expressions are now allowed with `readonly` contextually-expected types. Such query expressions create immutable structural values.
- Previously, a variable needed to be declared in the on-fail clause (e.g., `on fail error err`). It has now been made optional.
- The grammar now allows an action such as a remote method call to occur inside a query.
- The `lang.function:call()` langlib function has been introduced to call a function dynamically passing a function value and optional argument(s). If the arguments do not match the parameters expected by the function, the function call results in a panic.

More precise explanations are provided in the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.2.0).

This update release comes with multiple new features and improvements in the runtime.

- You can now get the status of strands and strand groups during the execution of a Ballerina program, which can be used to troubleshoot runtime errors. The Ballerina runtime will emit the strand dump to the standard output stream in the text format if it receives a `SIGTRAP` signal (`SIGTRAP` is not available on Windows).
- You can also register a function that will be called during a graceful shutdown. A call to `onGracefulStop` will result in one call to the handler function that was passed as an argument; the handler functions will be called after calling `gracefulStop` on all registered listeners in the reverse order of the corresponding calls to `onGracefulStop` (e.g., the function foo can be called during the graceful shutdown by registering it as follows: `runtime:onGracefulStop(foo);`).
- In terms of improvements, when a type is defined referring to another type, it will now be passed to the runtime as a `BTypeReferenceType` instance. A few existing runtime APIs have been modified to return the `BTypeReferenceType` instances.

## Improvements to the standard library

The following standard library and extended library modules now come with new features and improvements: 

## `io`

- Added support for data mapping between Ballerina Records and CSV in CSV read/write APIs

## `constraint`

- Introduced the `constraint` standard library package, which provides features to validate the values that have been assigned to Ballerina types

## `http`

- Added the initial support for HATEOAS
- Added support for client resource methods in the HTTP client
- Added proxy support for the HTTP2 client
- Added constraint validation to HTTP payload binding
- Made HTTP2 the default transport for the `http` module
- Updated the default response status as `HTTP 201` for POST resources
- Implemented the `immediateStop()` function for the HTTP listener

## `websocket`

- Added constraint validation to WebSocket payload binding

## `graphql`

- Added the support for deprecation of fields and enum values
- Added the support for GraphQL interceptors

## `serdes`

- Introduced the `serdes` standard library module for serializing and deserializing Ballerina `anydata` subtypes
- Proto3 is the initial serialization/deserialization format supported by this module

## `os`

- Introduced the `exec()` function to support OS command execution in Ballerina

## `xmldata`

- Introduced new APIs such as `fromXml` and `toXml` to perform conversions between XML and `map<anydata>`. The `toRecord` API is being deprecated by introducing this `fromXml` API
- Introduced a new config named `rootTag` in the `JsonOptions` to configure the name of the XML root element tag

 ## `random`

- Updated the `createDecimal()` function to be cryptographically secure

## `sql`

- Added schema client abstraction to support metadata retrieval from SQL databases. The implementation for the connectors will be added soon

## `grpc`

- Introduced a message-level annotation for the proto descriptor instead of a centralized proto descriptor
- Introduced a new service-level annotation (`grpc:Descriptor`) as a replacement for the existing (`grpc:ServiceDescriptor`) annotation. Both annotations are supported now to maintain backward compatibility. The `grpc:ServiceDescriptor` will be removed in the future. (Please update the service annotation if stub files are regenerated for the existing gRPC services)

## `kafka`

- Added constraint validation support for payload binding

## `rabbitmq` 

- Added constraint validation support for payload binding

## `nats`

- Added constraint validation support for payload binding

## Improvements to the developer tools

Here are the major new features and improvements you can find in the developer tools:  

- The `bal graph` CLI command, which resolves the dependencies of the current package and prints the dependency graph in the console has been introduced. This produces the textual representation of the dependency graph using the DOT graph description language.
- The experimental `bal semver` CLI command has been introduced to validate the [Semantic Versioning](https://semver.org/) compatibility of the local package changes against any previously published version(s) in Ballerina Central. The tool is currently capable of listing source code differences (along with its compatibility impact) between the local and any published version and suggesting the new package version based on the compatibility impact of the source code changes.
- The language server now supports API docs reference support on hover. Code actions also went through many improvements and transformations: code actions to extract anonymous records into records and to generate undefined record types, source actions to generate getters and setters for class-level variables, a new code action to make annotation declarations with the `source` attach point(s) constant, etc.  
- The OpenAPI Tool comes with added support for generating client resource methods in the client generation command. There is also added support for OpenAPI schema constraint properties in client/service generation. With this improvement, the OpenAPI constraints will be applied as `ballerina/constraint` standard library package annotations when generating Ballerina clients and services from the OpenAPI definition. 
- The JSON value to Ballerina record conversion logic has been improved to enhance the conversion experience of the `Paste JSON as record` feature in the Ballerina VSCode extension.

With respect to Code to Cloud features, a notable change is that the base image was updated to `ballerina/jvm-runtime:1.0` based on Alpine 3.15 with the necessary libraries.

We made numerous other changes in this release including many bug fixes to the compiler, runtime, standard library, and developer tools. See the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.2.0) for all the details of this release. 

We want to extend our sincerest thanks to the Ballerina community for your valuable feedback and support in making Ballerina what it is today. We hope you enjoy this release.

Happy coding! 

Cheers, 
The Ballerina Team