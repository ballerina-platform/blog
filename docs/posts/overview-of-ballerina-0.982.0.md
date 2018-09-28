---
title: Overview of Ballerina 0.982.0
author: Maryam Ziyad Mohamed
date: 28 September 2018
status: Published
abstract: Introduction to New Features and Changes introduced with Ballerina 0.982.0
socialmediaimage: //todo
---

# Improvements and New Features
The Ballerina 0.982.0 release included new features along with improvements and bug fixes.

## Language & Runtime

### Introduction of the `channel` Type

A new constrained type `channel`, that can be defined only as a top level node, has been introduced for communication 
between parallel processes in Ballerina programs. Channels can be used for message correlation by sending and receiving 
messages via different resources to the same channel and can also be used for inter-worker communication and worker 
synchronization.

Defining a channel constrained by the `JSON` type
```ballerinalerina
channel<json> jsonChannel; 
```

Sending a message to the channel
    
```ballerina
# One of the receivers waiting on the key `key` receives the message.
# If there is no receiver, the message is stored and execution continues.
# A receiver can arrive later and fetch the message.
message -> jsonChannel, key; 
```

Receive a message from the channel with the given key
   
```ballerina
# Execution waits here if the message is not available.
json result <- jsonChannel, key;
```

### Introduction of `abstract` Objects

An abstract object is identified by the `abstract` keyword. It describes the type of each field and each method, but 
not the implementation of the methods. An abstract object type must not have an object constructor method and does not 
have an implicit initial value. An abstract object type cannot  be initialized using the object initializer.

```ballerina
public type Foo abstract object {
    public string name;
    public int id;

    function getName() returns string;

    function getID() returns int;
};
```

### Introduction of Record Iteration Support

Records are now an iterable type. With this change, the `foreach` statement and iterable operations can now be used 
with records. When iterating a record, one can iterate either over the fields (i.e., field name and value pair) or only 
over the field values.

```ballerina
type Person record {
    string name;
    int age;
    string address;
};
```

The `foreach` statement can be used on an instance of this record as follows:

```ballerina
    foreach field, value in person {
        io:println(field + " : " + <string>value);
    }
```

Or if iterating only through the field values:
```ballerina
    foreach value in person {
        io:println(value);
    }
```

### Changes to the `main` function

The `main` function now needs to marked `public` and the `main` function could now return an int.
 
Any public function in the entry package could now be invoked via `ballerina run`.
For example, the public function `add` in the `calculator` package could be invoke, with the integer arguments `4` and 
`5`, via `ballerina run` as follows:

```cmd
ballerina run calculator:add 4 5
```
If no function is specified, the name of the function to run is considered `main`.

The function invoked via `ballerina run` (including the `main` function) would be data-binding and could have zero or 
more parameters of any supported type, including any number of required/defaultable parameters and a single rest 
parameter. This function could also return a value.

For example, given the following public function in the package `currency`:
```ballerina
function queryChanges(string host, int port = 8080, string… params) returns float {

}
```
Invoking this function via `ballerina run` as follows:
```cmd
ballerina run --printreturn currency:queryChanges localhost -port=8181 high day
```
would result in the following value assignments
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

Note: With this change the previous documentation syntax is no longer supported. 

### Reorder Documentation in Resources

Earlier, documentation was added after annotation attachments. Now the documentation needs to be added before the 
annotation attachment.

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

A new “Arrow Function Expression” is introduced as a simple alternative to anonymous functions that only have a return 
statement in the body block. Syntax is as follows:
```ballerina
function (int, string) returns string lambdaVar = (param1, param2) => param2.toUpper();
```

### Removal of Implicit Cast from `int` to `float`

We need to explicitly define a `float` with a decimal point now.
```ballerina
float x = 0; // Compile Error
float x = 0.0; // Working Code
```

### Tracking Tainted State Changes of Function Parameters

Tht taint analyzer will keep track of the tainted state of parameters in different execution conditions. This 
information will be used to updated the tainted state of the arguments used in a function invocation, to make sure 
the tainted state of arguments are propagated correctly when the parameter is an out parameter or an in-out parameter.
 
### Option/Param Order Enforcement with the Run Command

Option vs parameter ordering is enforced with the run command, and all options need to be specified before the 
file/package to run. 

Any arguments (even if they match an option recognized by the run command) specified after the file/package are now 
considered program arguments.

A config file could be specified with `run` as follows:
```cmd
ballerina run --config myConfig.conf calculator 4 5
```

Specifying the `--config` argument as follows, after the package `calculator` would not result in it being identified as
 an option:
```cmd
ballerina run calculator --config myConfig.conf 4 5
```

## Standard Library

- Support is now introduced for HTTP 1.1 pipelining

## Build & Package Management

### Mandating Build on ballerina `push` and `install`

By default the sources will be built before pushing the package to Ballerina Central and before installing the package 
to the home repository. The `--no-build` flag could be used to skip building before pushing or installing.

```cmd
ballerina push <package-name> --no-build
```

```cmd
ballerina install <package-name> --no-build
```

### Introduction of the `uninstall` command

Packages that are installed to the home repository which are shared across other projects can be uninstalled or removed.
The uninstall command takes the following options: 
```cmd
ballerina uninstall <org-name>/<package-name>:<version>
```

## IDE Plugins

- Diagram editing support in VSCode
- Language Server Integration support in IDEA plugin: with this change, all the language intellisense support will be 
provided through Language Server
- Variable definition auto generation code action
- Attached function’s implementation snippet
- Object constructor auto generation code action

## Extensions

### Kubernetes

- Support is now introduced for Helm Chart generation

## Bug Fixes 

Please refer the [GitHub milestone](https://github.com/ballerina-platform/ballerina-lang/issues?q=is%3Aissue+milestone%3A0.982.0+is%3Aclosed+label%3AType%2FBug) to view bug fixes.

## Getting Started

You can download the Ballerina distributions, try samples, and read the documentation at https://ballerina.io. 
You can also visit the [Quick Tour] (https://ballerina.io/learn/quick-tour/) to get started. 
We encourage you to report issues, improvements, and suggestions at the [Ballerina Github Repository](https://github.com/ballerina-platform/ballerina-lang).
