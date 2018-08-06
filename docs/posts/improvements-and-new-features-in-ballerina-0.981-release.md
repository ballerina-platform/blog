---
title: Improvements and New Features in Ballerina 0.981 Release
author: Kishanthan Thangarajah
date: 26 July 2018
status: Published
abstract: Improvements and New Features in Ballerina 0.981 Release
socialmediaimage: ballet-sneaker-dress-ballet-dancer-163379.jpeg
---

# Improvements and New Features in Ballerina 0.981 Release
Ballerina 0.980.0 release included some type system improvements and new features. This release also focused on stabilizing the platform with lot of bug fixes and improvements.

## Object Syntax Change

Object type descriptor syntax now supports visibility modifiers for both object fields and functions. There are three types of access modifiers (public, private, no-modifier) as explained below.

```ballerina

public type Person object {
    // public - visible everywhere
    public string name;

    // private - visible only within object and its member functions
    private int age;

    // no-modifier - visible only within same package
    string email;
};
```


## Closed and Open Records

An `open` record can contain extra fields, that is, fields other than those named by individual type descriptors in the record type definition. By default, records can contain extra fields with `any` value without any changes to record definition as explained below.

```ballerina

type Person record {
    string name,
    int age = 10,
};

...
// The "country" is an extra field, which is not defined in the person
// type descriptor.
Person tom = { name : "tom", age : 20, country : "USA"};

// You can access the "country" field similar to other fields, but the
// return type will be `any`.
any country = tom.country;

```

Additional fields can be defined by using an optional `RecordRestType...` at the end of the record definition. In the above example, the Person record definition is equivalent to the definition with `any...`.

```ballerina

type Person record {
    string name,
    int age = 10,
    any...
};

```

The “rest fields” can also be constrained to other types. Below example shows how it is constrained to `string` type.

```ballerina

type Person record {
    string name,
    int age = 10,
    string…
};

...

Person tom = { name : "tom", age : 20, country : "USA"};
string country = tom.country;

```

A `closed` record cannot contain any extra fields other than what is defined. A closed record can be defined with `RecordRestType` being `!` as below.

```ballerina

type Person record {
    string name,
    int age = 10,
    !...
};


// Following will result in a compile time error.
Person tom = { name : "tom", age : 20, country : "USA"};

```


## Fixed Length Arrays

The length of an array can be fixed by providing the array length with the array type descriptor.

```ballerina

int[5] array1 = [2, 15, 200, 1500, 5000];

// Following creates an integer array of size five, filled with
// default integer values
int[5] array2;

```

An array length of `!...` means that the length of the array is to be implied from the context; as shown below:

```ballerina

// Following creates a sealed integer array of size 3.
int[!...] sealedArray = [1, 3, 5];

```


## Byte Type

The `byte` type represents the set of 8-bit unsigned integers. The implicit initial value of the `byte` type is `0`. Value space for `byte` is 0-255 both inclusive.

The following is an example of byte definition.

```ballerina

byte c = 23;

```

Along with general byte array type, there is also a special syntax for defining base64 and base16 based array of bytes. With this, `blob` type is removed and replaced by byte array.

```ballerina

byte[] arr1 = [5, 24, 56, 243];
byte[] arr2 = base16 `aeeecdefabcd12345567888822`;
byte[] arr3 = base64 `aGVsbG8gYmFsbGVyaW5hICEhIQ==`;

```

## Bitwise AND (&), OR (|), XOR (^)
Bitwise operations AND (&), OR (|), XOR (^) have been added for `byte` type and `int` type with the following rules.

Both the right-hand-side and left-hand-side of the expression should be of the same type (`byte` or `int`), and the expected type will be also of the same type. If this is not the case, it will result in a compilation error.
An explicit conversion operation should be applied if the type of one side is not the same as the other side.

```ballerina

byte a = 13;
byte b = 45;
byte c = a & b;
byte d = a | b;
byte e = a ^ b;

```

## Table Expression

A table is intended to be similar to a relational database table. A table value contains an immutable set of column names and a set of data rows. Syntax for defining a table and adding data rows is as below.

```ballerina

table<Person> t1 = table {
	{ primarykey id, primarykey salary, name, age, married }, [
		 {1, 300.5, "jane",  30, true},
		 {2, 302.5, "anne",  23, false},
		 {3, 320.5, "john",  33, true}
	]
};

// We can also create the row records seperately and then use it with
// table definition
Person p1 = { id: 1, age: 30, salary: 300.50, name: "jane", married: true };
Person p2 = { id: 1, age: 30, salary: 300.50, name: "jane", married: true };

table<Person> t1 = table {
	{ primarykey id, salary, name, age, married },
	[p1, p2]
};

```

## Map Access
Values of a map can be accessed using index-based syntax as well as field-access syntax. Accessing a value using field-based syntax returns the value if the key exists. Otherwise a runtime error is thrown. Index-based syntax also will return the value if the key exists. However, it will return a null value if the key does not exist. This would also mean that, for a constrained map, the type of the return value for the index-based syntax is always the `constraint_type|()` as explained below.


```ballerina

map<string> m = {"fname" : "John", "lname" : "Doe"}

// Field based access
string firstName = m.fname;

// Following will result in a runtime error
string middleName = m.mname;

// Index based access
string? firstName = m["fname"];

// Following will return null
string? middleName = m["mname"];

```

## Ballerina Observability
- New API's have been introduced with ballerina observability functionality, such that developers can define their own trace blocks and metrics as explained below.
- Developers can attach the trace information of their code block to the default Ballerina traces, or a new trace as below.

```ballerina

// Create and attach span to the default Ballerina request trace.
int spanId = check observe:startSpan("Child Span");
    // Do Something
_ = observe:finishSpan(spanId);

// Create a completely new trace.
int spanId = observe:startRootSpan("Parent Span");
    //Do Something
int spanId2 = check observe:startSpan("Child Span", parentSpanId = spanId);
    // Do Something
_ = observe:finishSpan(spanId2);
    // Do Something
_ = observe:finishSpan(spanId);

```

- Developers can create a metric (counter or gauge) and have have their own measurements. The created metric can be registered in order to include its measurements to reporters such as Prometheus as below.

```ballerina

// Create counter and register.
map<string> counterTags = { "method": "GET" };
observe:Counter counterWithTags = new ("CounterWithTags",
    desc = "Some description", tags = counterTags);
counterWithTags.register() but {
   error e => log:printError("Cannot register the counter", err = e)
};

// Create statistics config to enable statistics calculation.
observe:StatisticConfig[] statsConfigs = [];
observe:StatisticConfig config =
    {timeWindow:30000, percentiles:[0.33, 0.5, 0.9, 0.99], buckets:3};
statsConfigs[0]=config;

// Create gauge and register.
observe:Gauge gaugeWithStats = new ("GaugeWithTags",
    desc = "Some description", tags = gaugeTags,
    statisticConfig = statsConfigs);

```

- All metrics registered can be retrieved and looked up individually as below.

```ballerina

// Get All Metrics
observe:Metric[] metrics = observe:getAllMetrics();
foreach metric in metrics {
    // Do something.
}

// Look up a registered metric.
map<string> tags = { "method": "GET" };
observe:Counter|observe:Gauge|() metric =
    observe:lookupMetric("MetricName", tags = tags);
match metric {
    observe:Counter counter => {
            counter.increment(amount=10);
    }
    observe:Gauge gauge => {
            gauge.increment(amount = 10.0);
    }
    () => {
           io:println("No Metric Found!");
    }
}

```

## Standard Library Improvements

- With the inclusion of byte[], WebSocket related signatures of resources such as `onBinary`, `onPing`, and `onPong` and functions such as `pushBinary()`, `ping()`, and `pong()` now have `byte[]` in their signature instead of a blob.
- The HTTP transport error handler has been improved so that it recovers execution from inbound/outbound failures such as idle socket timeout and abrupt connection closure.
- The circuit breaker now supports request volume threshold parameter. This parameter sets the minimum number of requests in a `RollingWindow` that will trip the circuit. So the rollingWindow configurations can be specified as below.

```ballerina

rollingWindow : {
      timeWindowMillis: 10000,
      bucketSizeMillis: 2000,
      requestVolumeThreshold: 10
}

```

## Build & Package Management

- The Ballerina `build` command output has been enhanced with more details about the build. Also by default, the test module will now be executed with the `build` command.
- Ballerina `push` command now mandates the Ballerina `build` also along with it, which make sure that packages are built before it is pushed to the Central.
- Ballerina Central now supports to view previous versions of a package. It also now shows Ballerina version compatibility section.

## IDEs & Language Server

- Composer is now shipped as a native Electron App.
- Language server now includes source code formatting and also supports finding all symbols in a document and in the workspace.
- IntelliJ IDEA Ballerina Plugin has added improvements for the Ballerina source code debugger.
