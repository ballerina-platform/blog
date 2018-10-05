---
title: Overview of Ballerina 0.982.0
author: Maryam Ziyad Mohamed
date: 01 October 2018
status: Published
abstract: Introduction to New Features and Changes Introduced with Ballerina 0.982.0
socialmediaimage: pexels-photo-206274.jpeg
---

# Improvements and New Features
The Ballerina 0.982.0 release includes new features, improvements and bug fixes including introduction of the new `channel` type, changes to the `main` function, improvements to records and objects, and support for HTTP 1.1 piplelining.

An initial version of the Ballerina Native feature that allows simple Ballerina programs with the `main` function to be compiled into native executables, is also introduced with this release.

## Language & Runtime

### Introduction of the Channel Type

The `channel` constrained type is introduced for communication between parallel processes in Ballerina programs. 
A `channel` can be defined only as a top level node. Channels can be used for message correlation by sending and receiving messages via different resources to the same channel. 
Channels can also be used for inter-worker communication and worker synchronization.

**Defining a channel constrained by the `json` type**

```ballerina
channel<json> jsonChannel; 
```

**Sending a message to the channel**

```ballerina
# One of the receivers waiting on `key` receives the message.
# If there is no receiver, the message is stored and execution continues.
# A receiver can arrive later and fetch the message.
message -> jsonChannel, key; 
```

**Receiving a message from the channel with the given key** 

```ballerina
# Execution waits here if the message is not available.
json result <- jsonChannel, key;
```

### Introduction of Abstract Objects

An abstract object is identified by the `abstract` keyword. Abstract objects only describe the type of each field and method, they do not describe the implementation of methods. 
An abstract object type should not have an object constructor method and cannot be initialized using the object initializer. Abstract objects do not have an implicit initial value. 

```ballerina
public type Foo abstract object {
    public string name;
    public int id;

    function getName() returns string;

    function getID() returns int;
};
```

### Introduction of Record Iteration Support

Records are now iterable, and the `foreach` statement and iterable operations can now be used with records. 
When iterating a record, one can either iterate over the fields (i.e., field name and value) or iterate only over the field values.

```ballerina
type Person record {
    string name;
    int age;
    string address;
};
```

The `foreach` statement can be used with an instance of this record as follows:

```ballerina
foreach field, value in person {
    io:println(field + " : " + <string>value);
}
```

The `foreach` statement can be used to iterate only over the field values as follows:

```ballerina
foreach value in person {
    io:println(value);
}
```

### Changes to the "main" Function

Based on the latest changes, the `main` function has to be marked `public` and can return an int.

Now it is also possible to execute ballerina `run` to invoke any `public` function in the entry package.
For example, if you want to invoke the public function `add` in the `calculator` package, you can execute ballerina `run` and specify the integer arguments `4` and `5` as follows:

```cmd
ballerina run calculator:add 4 5
```

If a function is not specified, `main` is considered as the function to run.

The function invoked via `ballerina run` (including the `main` function) will be data-binding and can have zero or more parameters of any supported type, including any number of required/defaultable parameters and a single rest parameter. 
This function can also return a value.

For example, consider the following public function in the package `currency`:

```ballerina
public function queryChanges(string host, int port = 8080, string… params) returns float {

}
```
Invoke the function using Ballerina `run` as follows:
```cmd
ballerina run --printreturn currency:queryChanges localhost -port=8181 high day
```
The function invocation results in a value assignment as follows:
- `host` ← `"localhost"`
- `port` ← `8181`
- `params` ← `["high", "day"]`

When the `--printreturn` flag is set, the return value is printed to the standard out stream.

### New Documentation Syntax

Old syntax:

```ballerina
documentation {
    Adds parameter `x` and parameter `y`.
    P{{x}} one thing to be added
    P{{y}} another thing to be added
    R{{}} the sum of them
}
function add(int x, int y) returns int { return x + y; }
```

New syntax:

```ballerina
# Adds parameter `x` and parameter `y`.
# + x - one thing to be added
# + y - another thing to be added
# + return - the sum of them
function add(int x, int y) returns int { return x + y; }
```

### Reorder Documentation in Resources

In previous versions, documentation was added after annotation attachments of resources. Now documentation should be added before the annotation attachment.

Old syntax:

```ballerina
service<http:Service> update_token bind { port: 9295 } {

    @http:ResourceConfig {
        methods:["GET"]
    }
    # Updates the access token.
    #
    # + caller - Endpoint
    one_px_image(endpoint caller) {

    }
}
```

New syntax:

```ballerina
service<http:Service> update_token bind { port: 9295 } {

    # Updates the access token.
    #
    # + caller - Endpoint
    @http:ResourceConfig {
        methods:["GET"]
    }
    one_px_image(endpoint caller) {

    }
}
```

### Changes to Record/Object Field Syntax

Old syntax:

```ballerina
type foo record {
    string a,
    string b,
};

type bar object {
    string a,
    string b,
};
```

New syntax:

```ballerina
type foo record {
    string a;
    string b;
};

type bar object {
    string a;
    string b;
};
```

### New Anonymous Functions Syntax

The syntax of anonymous functions has been changed to resemble normal function definitions.

Old syntax:

```ballerina
var lambda = (int b) => (int) {
    int x = b * b;
    return x;
};
```

New syntax:

```ballerina
var lambda = function (int b) returns int {
    int x = b * b;
    return x;
};
```

A new "Arrow Function Expression" is introduced as a simple alternative to anonymous functions that only have a return statement as the body:

```ballerina
function (int, string) returns string lambdaVar = (param1, param2) => param2.toUpper();
```

### Removal of Implicit Cast from int to float

Now it is necessary to explicitly define a float with a decimal point.

```ballerina
float x = 0; // Compile Error
float x = 0.0; // Working Code
```

### Tracking Tainted State Changes of Function Parameters

The taint analyzer keeps track of the tainted state of parameters in different execution conditions. 
This information is used to update the tainted state of the arguments used in a function invocation, and to make sure that the tainted state is propagated correctly when the parameter is an out parameter or an in-out parameter.
 
### Option/Param Order Enforcement with the Run Command

Option vs parameter ordering has been enforced with the Ballerina `run` command. All options now need to be specified before the file or package to run.

Any and all arguments specified after the file or package are now considered program arguments.

A config file can be specified with the `run` command as follows:
```cmd
ballerina run --config myConfig.conf calculator 4 5
```

Specifying the `--config` argument as follows, after the package `calculator` would not result in it being identified as an option:
```cmd
ballerina run calculator --config myConfig.conf 4 5
```

### Ballerina Native

The Ballerina Native feature is the introduction of an LLVM-based backend for the Ballerina compiler. It allows Ballerina programs to be compiled into native executables.

#### Prerequisites
- Unix based (Linux/MacOS) operating system to run the initial version. Other operating systems will be supported in future versions.
- GCC compiler (it is possible to use `clang` or `ld`. However, the current recommended option is `gcc`)

#### Supported language constructs
- `main` function (arguments are ignored)
- `int` and `boolean` types
- `if` condition
- `while` loop
- Function calls and return values
- Partial support for `println` for `int` values

#### How to run
- Build a Ballerina program with the native option
`ballerina build --native -o myballerinamain  myballerinamain.bal`

- Run the created executable
`./myballerinamain`

#### Command line flags
The following additional options are valid when the `--native` option is provided:
`--dump-bir` prints the Ballerina intermediate representation
`--dump-llvm-ir` prints the LLVM intermediate representation assembly code

## Standard Library

- Support for HTTP 1.1 pipelining
- Enhanced support for compression/decompression
- Change of status code and reason to be optional parameters for the `close` action of the WebSocket endpoint
- Support to directly configure SSL certificates and keys without keystores
- Support to define enum type in gRPC request/response messages

## Build & Package Management

### Mandating Build on Ballerina Push and Install

By default, the sources are built before pushing the package to Ballerina Central and before installing the package in the home repository. 

The `--no-build` flag could be used to skip building before pushing or installing.
```cmd
ballerina push <package-name> --no-build
```

```cmd
ballerina install <package-name> --no-build
```

### Introduction of the Uninstall Command

Packages that are installed in the home repository can now be uninstalled or removed using the `uninstall` command.
```cmd
ballerina uninstall <org-name>/<package-name>:<version>
```

## IDE Plugins

- Diagram editing support in VSCode
- Language Server integration support in IDEA plugin: this results in providing all language intellisense support 
through the Language Server
- Variable definition auto generation code action
- Attached function’s implementation snippet
- Object constructor auto generation code action

## Extensions

### Kubernetes
- Support is now introduced for Helm Chart generation

## Performance Results
From Ballerina 0.982.0 onward, [a performance test result summary](https://github.com/ballerina-platform/ballerina-lang/blob/v0.982.0/performance/benchmarks/summary.md) would also be made available with each release. 

## Bug Fixes 

Please refer the [GitHub milestone](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+milestone%3A0.982.0+is%3Aclosed+label%3AType%2FBug) to view bug fixes.

## Getting Started

You can download the Ballerina distributions, try samples, and read the documentation at https://ballerina.io. 
You can also visit the [Quick Tour] (https://ballerina.io/learn/quick-tour/) to get started. 
We encourage you to report issues, improvements, and suggestions at the [Ballerina Github Repository](https://github.com/ballerina-platform/ballerina-lang).
