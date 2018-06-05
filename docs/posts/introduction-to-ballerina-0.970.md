---
title: Introduction to Ballerina 0.970 release 
author: Sameera Jayasoma
date: 4 June 2018
status: Published
abstract: Release highlights of Ballerina 0.970 release. 
socialmediaimage: apple-black-and-white-brick-wall-169573.jpg
---

# Introduction
We proudly announce General Availability of Ballerina 0.970.0. Ballerina 0.970.0 is an exciting new release of the programming language. 

Key highlights of Ballerina capabilities included into this release are:

- **Concurrent**: Worker support for defining parallel execution units with fork/join semantics, and asynchronous function invocations, which contains improved BVM scheduler functionality.
- **Transactional**: First class support for transaction semantics, including distributed transactions.
- **Textual and graphical syntaxes**: Sequence diagrams focused on showing worker and endpoint interactions. Endpoints represent network services. Each worker is sequential code, that can zoom in graphically yet represents really textual code. The design is meant to make it easier to understand complex distributed interactions
- **Integration specialization**: Brings fundamental concepts, ideas, and tools of distributed system integration into the programming language and offers a type safe, concurrent environment to implement such applications. These include distributed transactions, reliable messaging, stream processing, workflows, and container management platforms.

In this post, we will provide a high level overview of the features of Ballerina 0.970.0 release.  

## Language
### Values and Types
Ballerina programs operate on a universe of values, and each value belongs to only one basic type such as int, boolean, map, record, function, etc. There are three kinds of values corresponding to three kinds of basic types. They are simple values (e.g., int, string, boolean), structured values (e.g., record, map, array), and behavioral values (e.g., function, object). 


### Simple Basic Types
The types int, float, string, boolean, blob, and nil are called simple basic types because they are basic types with only simple values. Simple values are always immutable.

### Structured Basic Types
Structured basic values create structures from other values. A structured value belongs to exactly one of the these basic types: Tuple, Array, Map, Record, Table, XML. 


### Behavioural Basic Types
Ballerina defines these behavioral basic types: Function, Future, Object, Stream. 

### Other Types
Other Types includes: Union Type, Optional, Any, JSON. 


##Expressions 
### Field access
Field access is the syntax of accessing child elements inside structural typed values, such as objects, records, JSON, XML, etc. Fields can be accessed using two operators; Dot operator - Name of the field precedes by a dot, e.g., foo.bar, Index operator - Name of the field comes within two brackets. 

### Array Access
Array elements can be accessed by the index using the index operator. The index always has to be an integer valued expression. Similar to accessing fields, accessing arrays also performs the nil-lifting default

### Match Expression
Match expression is a way of checking the type of an expression and executing some other expression based on the type of the first expression. It is a form of a type switch. Match expression contains patterns inside, with a type associated to it. Type of each pattern should be matched to at-least one of the types of the expression that is being tested.


### Elvis Operator
Elvis operator is a conditional operator that can be used to handle null values. It evaluates an expression and if the value is null, executes the second expression. The elvis operator takes two operands and uses the ‘?:’ symbol to form it.


## Control Flow Statements

### If/Else Statement
An if/else statement provides a way to perform conditional execution. It contains three sections: an if block, followed by multiple else if blocks, and finally a single else block. All the else if blocks and the else blocks are optional. Any number of statements can be defined inside each of these blocks.

### Match Statement
A match statement is a type switching construct that allows selective code execution based on the type of the expression that is being tested. The match statement can have one or more patterns with a type associated to it. Each pattern have statements that will get executed if that type is matched.

### While
The while looping construct will iterate and execute the code block within the while block continuously, until the condition for while loop is true.

### Foreach
The foreach looping construct will traverse through the items of a collection of data such as arrays, maps, JSON, and XML and execute the given code block.

With the above two looping constructs, statements such as break and next can also be used, where the break statement would end the loop and next statement would go to the next iteration in the loop.

### Iterable Operations
Iterable operations can be used with types such as array, map, json, table, and xml. 

## Transaction
A Ballerina transaction is a series of data manipulation statements that must either fully complete or fully fail, and thereby leave the system in a consistent state. The transaction block is used handle Ballerina transactions. Any transaction aware operations performed within the transaction block are automatically committed or rolled back at the end of the block. Within transaction block, abort or retry statements can be used to explicitly force to abort the transaction or retry the transaction. 
Ballerina supports Local Transactions, XA Transactions, Distributed Transactions. 


## Error Handling
The Ballerina approach of error handling is to introduce a first-class error concept that can both be returned as yet another return value (and thereby processed by the caller as it deems fit) or be thrown.

The try-catch-finally blocks are basically used for catching and handling exceptions thrown during execution. The error lifting operator allows to walk down a set of fields of an object or tuple, without worrying whether there will be a error or null along the way. 
check is a unary expression that is used to handle errors. The check expression removes the error type from the result of the sub expression and handle error case separately. 


## Concurrency Constructs
The concurrency model is based on workers, which are the fundamental execution units defined in Ballerina. The worker model is designed to be very light-weight constructs, which follows a fully non-blocking approach in its executions, which in-turn makes sure it has optimal utilization of the CPU.

### Workers
In Ballerina, every callable unit, that is, a function, action or a resource is made up of one or more workers. A worker is a concurrent execution unit, which is independently run when a function call is made. 


### Asynchronous Functions
Any function or action can be invoked in an asynchronous mode by prefixing the call with the start keyword and the result is accessible via a future. 

### Fork/Join
The fork/join construct in Ballerina is used in order to split (fork) the current function execution to multiple workers, do some processing in parallel, and join together the results of the workers to a single execution again.

### Lock
Ballerina locks are used for concurrency management, encapsulating a block of statements will acquire the locks for each global or service level variable reference used within those block of statements.


## Functions
Ballerina functions operate the same way as any other language. It is a mechanism to create a reusable unit of functionality within a program.  
A function pointer is a Ballerina type that allows you to use functions as variables, arguments to functions, and function return values. 
Lambdas are a syntactic shortcut for defining inline functions. In comparison to a normal function definition, the only missing part is the name. 


# Syntax

Ballerina’s underlying language semantics were designed by modeling how independent parties communicate via structured interactions. Subsequently, every Ballerina program can be displayed as a sequence diagram of its flow with endpoints, including synchronous and asynchronous calls. Ballerina’s syntax has both textual and graphical representation designed around sequence diagrams,therefore, the way a developer thinks when writing Ballerina code encourages strong interaction best practices.

## Textual Syntax
Ballerina’s textual syntax is largely inspired by C, Java, and Go languages. The key language constructs in Ballerina are Function, Worker and Service. 

## Graphical Syntax
Ballerina’s graphical syntax resembles a sequence diagram. The control flow within a worker is represented with flow diagram based elements. Graphical representation of a service is represented with network interactions.

Ballerina platform comes with the Composer IDE, which allows you to edit and view Ballerina programs graphically and textually. VS Code plugin can be also used to view Ballerina programs graphically.

# Integration Specialization 
Ballerina has first class support for services and endpoints. HTTP/HTTP2, WebSockets, WebSub, gRPC, and JMS are some of the available service types. These services are exposed via listener endpoints, which can be secured and monitored. Client endpoints connect to different types of external endpoints and they are inherently resilient. Additionally, commonly used integration message formats, such as XML and JSON, are built-in to the type system of the language. 

In the context of integration specialization, the following are the released features.

## HTTP 1.x/2 
Ballerina includes HTTP 1 and 2 support with server and client endpoints. 

## WebSockets
WebSocket client/server endpoints. 

## Resiliency
Support for network resiliency with Circuit breaker, retry, timeout, load balancing and failover. 

## MIME
Ballerina provides built-in implementation of the MIME specification.  

## gRPC
Ballerina based gRPC server/client supports interacting with server and client written either in Ballerina or any other supported languages. 

## Database client endpoints
Ballerina Database client endpoints allow you to connect to SQL-based relational database systems and perform data definition, data access, and data manipulation operations on the database. These database client endpoints are supported: JDBC for any JDBC supported database, MySQL, H2. 

## Messaging endpoints
Messaging connectors enable the services and programs written in Ballerina to communicate with messaging backends like Ballerina Message Broker and ActiveMQ. The messaging connector API provides features like transactions, message headers, properties, and different acknowledgement mode support to address the common requirements of a modern integration engineer when integrating with a messaging system.

## WebSub
Implementation of the WebSub recommendation that facilitates push-based content delivery/notification mechanism between publishers and subscribers.

# Standard Library 
The Ballerina standard library provides a set of commonly used functionalities. The following packages are available as a part of the standard library:

## ballerina/auth
Provides an interface for looking up user data for authentication and authorization purposes. Also it contains a sample implementation that uses a Ballerina configuration file as user registry.

## ballerina/cache
Provides a configurable in-memory caching solution that supports both time-based eviction and size-based eviction.

## ballerina/config
Provides a configuration lookup and resolve mechanism, with the option for securing configurations, and an API for reading these configurations.

## ballerina/crypto
Provides a set of functions for some of the commonly used hashing algorithms.

## ballerina/file
Provides a directory listener that can be used to listen to directory events.

## ballerina/io
Provides an asynchronous I/O framework to source/sink that reads/writes as bytes, characters, and records.

## ballerina/log
Provides an API for logging.

## ballerina/sql
Provides the common types and constants used across all the database client endpoints.


## ballerina/math
Provides a set of functions for performing commonly used mathematical calculations and operations.

## ballerina/reflect
Provides utility functions for reading annotations and deep equality checks.

## ballerina/runtime
Provides utility functions and records related to the runtime.

## ballerina/system
Provides a set of functions for retrieving details related to the system.

## ballerina/task
Provides an API for managing task timers and task appointments.

## ballerina/time
Provides a set of functions for handling, parsing and formatting date and time.


# IDEs and Language Server 

## Language Server 
Ballerina Language Server provides the code intelligence for Ballerina programming. Ballerina Language Server can be integrated with any Language Server Protocol (LSP) supported development tool to provide consistent code intelligence throughout. 

## VSCode Plugin
The Ballerina VSCode plugin includes the following features: - Syntax highlighting - Intellisense for Ballerina language via Ballerina Language Server - Diagramming (view Ballerina programs graphically) - Debugging

## IntelliJ IDEA
The Ballerina IDEA plugin includes the following features: - Syntax highlighting - Code completion and suggestions - Code formatting - Go to definitions - Find usages - Code diagnostics - Ballerina program running and debugging

## Composer
Composer is an IDE included with the Ballerina platform that allows you to design and write Ballerina programs textually as well as graphically. It also comes with a set of features targeted for integration development; graphical interaction flow designing, textual editing support for Ballerina, intelligent code completion via Ballerina Language Server, run and Debug support for Ballerina programs, design-first API development with Open API Specification, try-it client, dev time service tracing. 


# Observability 
Ballerina observability enables developers to understand the execution and performance impact introduced by the Ballerina program. For example, by enabling the metrics monitoring and distributed tracing, developers can identify slow services and can drill down from the services to the actual request hop that is causing the delay in the overall request flow. Similarly, by log monitoring and analysis, the additional debug information regarding any unfavorable situations can be revealed to pinpoint the root cause.

Developers can enable a Ballerina program to collect the data to observe by simply using the --observe flag (with default configurations) or passing specific Ballerina configurations when running the Ballerina program. The external systems, such as Prometheus and Jaeger, need to be used to analyze and graphically represent the collected data from a Ballerina program.

# Try it out! 
You can download the Ballerina distributions, try samples, and read the documentation at [ballerina.io](https://ballerina.io). You can also visit the [Quick Tour](https://ballerina.io/learn/quick-tour/) to get started. We encourage you to report issues, improvements, and suggestions at the [Ballerina Github Repository](https://github.com/ballerina-platform/ballerina-lang).

