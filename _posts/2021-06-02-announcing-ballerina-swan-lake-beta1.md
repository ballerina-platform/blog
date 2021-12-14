---
layout: blog-post
title: Announcing Ballerina Swan Lake Beta1
author: Ballerina Team
published-date: 2 June 2021
status: Published
socialmediaimage: SwanLake-04.jpeg
permalink: /posts/announcing-ballerina-swan-lake-beta1/
---

Today, we’re thrilled to announce the release of [Ballerina Swan Lake Beta1](https://ballerina.io/downloads)! This marks the Ballerina language, standard library, and tooling as “feature complete” on the road to the Swan Lake general availability (GA) release and includes several major redesigns. This beta represents a full preview of what Swan Lake will include and builds on the existing work that was done for the alpha releases.

From now on, we expect to put most of our effort into fixing bugs, improving documentation, and making many usability improvements through a few more releases before the final release. We need your feedback to shape Swan Lake to hit the mark and deliver the programming experience it’s meant to provide. We’ll be keeping a close eye on our issue tracker to iron out issues with Beta1, so download it today and let us know how it works!

The Swan Lake release comes with significant improvements in multiple areas.

__Language Improvements__

- We have redesigned Ballerina services to support RESTful services in a first-class way.  Services have become service objects that work uniformly with client objects. Service objects can have both remote methods, which support RPC-style protocols, and resource methods, which support data-oriented protocols such as HTTP and GraphQL.
- Objects work in a more familiar and ergonomic way because we have introduced __class__ definitions. Object type descriptors are now used purely to describe the type of an object, independent of its implementation. We have also introduced object constructor expressions to allow objects to be constructed without defining a class; these provide the semantic foundation for service declarations.
- We have introduced __distinct__ types, which provide functionality similar to nominal types but within the framework of Ballerina's structural type system. Distinct types work with errors and objects.
- We have significantly improved the way we handle errors. We have built on distinct types to rework how error types are defined. We have added __on fail__ clauses, which allow control over the effect of __check__ expressions.
- The __table__ type has been redesigned to be more ergonomic and work consistently with other structural types. Tables are collections of records, in which records are uniquely identified by one of their fields, similar to a primary key in SQL.
- The language-integrated query feature has been fleshed out to support ordering and joins. It now works with tables and XML as well as lists.
- We have added the concept of configurability: module-level variables can be specified to be __configurable__, which allows their initial values to be specified at runtime.
- We now have __enum__ declarations. They provide a more convenient and familiar syntax for working with unions of string constants.
- The __isolated__ qualifier, which enables compile-time concurrency safety, is a new addition. This allows a listener to automatically determine when a service can safely handle incoming requests in parallel. It builds on the existing lock statement. 
- We have added the __readonly__ type, which makes it possible for the type system to provide immutability guarantees. This is part of the foundation for the design behind __isolated__ and is also used for key fields in tables. The readonly type works in conjunction with intersection types, which are also used with distinct types.
- We have added limited support for dependent typing, in which the return type of a function with an external body can depend on the value of a parameter of __typedesc__ type, which can be defaulted from the contextually expected type. This allows libraries that convert from external data into user-defined data types to provide a convenient, type-safe interface, which does not require type casts.
- We have redesigned language support for transactions, which makes interacting with a transaction manager more reliable and convenient. This replaces the previous experimental transactions feature.
- We have also added a new kind of template called a raw template, which allows a library to control how expressions within the template are handled. The SQL module uses this to provide better support for SQL parameters.

__Platform Improvements__

- We have redesigned how you structure your Ballerina code with the introduction of __[packages](https://ballerina.io/learn/user-guide/ballerina-packages/creating-your-first-ballerina-package/)__, which is a collection of logically related Ballerina modules. We have also made the package the unit of code sharing. As a result, Ballerina Central has been improved to work with packages.  
- We have improved Ballerina package builds to be __repeatable by default__, without requiring an explicit lock file. We have redesigned package versioning to ensure that a program that you build today builds with the same set of dependency versions tomorrow. This behavior does not change even if there are newer versions of dependencies available in Ballerina Central. Package versions and their compatibility ranges strictly follow semantic versioning. 
- The [Ballerina Central](https://central.ballerina.io/) UI has been refreshed to support packages and to enhance the user experience. We’ve also improved the module API docs design to overcome limitations in the previous versions.
- We have redesigned Ballerina standard library APIs by leveraging the latest language features. Library modules that support RESTful-style network protocols have been improved with resource methods, and modules that support RPC-style protocols have been improved with remote methods. Other common standard library modules, such as ballerina/file, ballerina/filepath, ballerina/log, and ballerina/time,  have also been redesigned completely. 
- We have further simplified the development and deployment of Ballerina __[code-to-cloud](https://ballerina.io/learn/user-guide/deployment/code-to-cloud/)__. This way, you can focus more on business logic and less on the underlying complexities of cloud-native development to run Ballerina code on diverse cloud platforms.
- We have also introduced an interactive command-line tool, known as __bal shell__, that allows you to rapidly learn and prototype Ballerina code. 
- The [Ballerina VSCode extension](https://ballerina.io/learn/tooling-guide/visual-studio-code-extension/quick-start/) has been revamped for a better editing experience. It now comes with auto-completion, hover information, the ability to jump to definitions, formatting, range formatting, renaming, syntax highlighting, and auto-indentation. 
- Ballerina programs have both a textual syntax and an equivalent graphical form based on __[sequence diagrams](https://ballerina.io/learn/user-guide/why-ballerina/graphical/)__. Beta1 comes with limited support to visualize Ballerina code as a sequence diagram in the VSCode extension. 
- The Ballerina VSCode extension also comes with new and improved __[debugging](https://ballerina.io/learn/tooling-guide/visual-studio-code-extension/debugging/)__ capabilities. It also has limited support for expression evaluation. 
- Values for __configurable__ variables can be specified via a TOML file or command-line arguments to the program.
- We have redesigned the __command-line argument processing__ to be more ergonomic and also to support the standard POSIX [command-line syntax](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02) like [getopt](https://pubs.opengroup.org/onlinepubs/9699919799/functions/getopt.html), plus long option names like C [getopt_long](https://www.gnu.org/software/libc/manual/html_node/Getopt-Long-Options.html). 
- We have also updated the __[bindgen](https://ballerina.io/learn/user-guide/calling-java-code-from-ballerina/)__ tool to leverage new language features such as distinct objects and classes. The bindgen is a CLI tool that generates Ballerina bindings for Java APIs.

__Implementation Improvements__

- We have entirely replaced the ANTLR4-generated lexer and parser with a hand-written lexer and recursive-descent parser. Generated lexer/parsers have limitations, and we have faced most of them. It is hard to get meaningful error messages from the generated ones. The new parser is resilient (generates a valid syntax tree even with syntax errors), provides better syntax errors, and supports incremental parsing (creates the syntax tree with only the updated nodes while reusing unchanged tree nodes).
- We have also redesigned the Ballerina compiler to expose the syntactic and semantic information about the source code as APIs. Additionally, we have refreshed the language server implementation, compiler extension design, build tool, etc., with these APIs. 
- This release also comes with a new compiler extension design that leverages the new compiler APIs.

To see a detailed list of what has changed since Swan Lake Alpha5, please see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta1/).

To recap, the Ballerina project began in 2016 and our goal has been to create a modern programming language that combines the best of programming languages, integration technology, and cloud-native computing into a textual and graphical language optimized for integration. With more than 16,500 downloads in total and over 1,000 [Slack](https://ballerina-platform.slack.com/) users, the Ballerina ecosystem continues to grow. As we move on to bigger and better things, we want to extend our sincerest thanks to every one of you in the Ballerina community for your valuable feedback and support. Swan Lake Beta1 is our best release yet and we couldn't have done it without all of you!

Cheers,<br/>
The Ballerina Team

[^bignote]: To download Ballerina Swan Lake Beta1, go to [Downloads](https://ballerina.io/downloads/). 
 
To report bugs, please create issues in the following GitHub repos:
- Compiler, runtime, or tooling: [ballerina-lang](https://github.com/ballerina-platform/ballerina-lang/issues) repo
- Standard Library: [ballerina-standard-library](https://github.com/ballerina-platform/ballerina-standard-library/issues) repo
- Language specification: [ballerina-spec](https://github.com/ballerina-platform/ballerina-spec/issues) repo
- Website: [ballerina-dev-website](https://github.com/ballerina-platform/ballerina-dev-website/issues) repo
 
[Follow us for updates](https://twitter.com/ballerinalang).
