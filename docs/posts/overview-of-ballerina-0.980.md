---
title: Overview of Ballerina 0.980
author: Kishanthan Thangarajah
date: 26 July 2018
status: Published
abstract: Overview of new features and improvements added in ballerina 0.980.0 release
socialmediaimage: ballet-sneaker-dress-ballet-dancer-163379.jpeg
---

# Improvements and New Features
Ballerina 0.980.0 release includes some type system improvements and new features additions. This release also focused on stabilizing the platform with lot of bug fixes and improvements. Following are the new changes and improvements added with the 0.980.0 release.

## Object Syntax Change

Object type descriptor syntax now supports visibility modifiers for both object fields and functions. There are three type of access modifiers as below.


```ballerina(){show=true}
public type Person object {
    public string name;     //visible everywhere
    private int age;        //visible only within object and its member functions
    string email;           //visible only within same package
};
```


## Closed and Open Records

An `open` record can contain extra fields, that is, fields other than those named by individual type descriptors in the record type definition.
By default, records can contain extra fields with `any` value without any changes to record definition.

```ballerina
type Person record {
    string name,
    int age = 10,
};

...
// The "country" is an extra field, which is not defined in the person type descriptor.
Person tom = { name : "tom", age : 20, country : "USA"};

// You can access the "country" field similar to other fields, but the return type will be `any`.
any country = tom.country; // or use tom["country"]
```

Additional fields can be defined by using an optional `RecordRestType...` at end of the record definition. In the above example, the Person record definition is equivalent to the definition with `any...`.

```ballerina(){show=true}
type Person record {
    string name,
    int age = 10,
    any...
};
```
The “rest fields” can also be constrained to other types as below, where it is constrained to `string` type.

```ballerina(){show=true}
type Person record {
    string name,
    int age = 10,
    string… // the rest descriptor
};

...
Person tom = { name : "tom", age : 20, country : "USA"};
string country = tom.country;
```

A closed record can not contain any extra fields other than what is defined. A closed record can be defined with RecordRestType being `!` as below

```ballerina(){show=true}
type Person record {
    string name,
    int age = 10,
    !... // indicates that additional fields are not allowed
};
...

Person tom = { name : "tom", age : 20, country : "USA"}; // This is a compile time error.
```


## Fixed Length Arrays

The length of an array can be fixed by providing the array length with the array type descriptor.

```ballerina(){show=true}
int[5] array1 = [2, 15, 200, 1500, 5000];
int[5] array2; // Creates an integer array of size five, filled with default integer values
```
An array length of `!...` means that the length of the array is to be implied from the context; as shown below:

```ballerina
int[!...] sealedArray = [1, 3, 5]; // Creates a sealed integer array of size 3.
```


## Byte Type

The `byte` type represents the set of 8-bit unsigned integers. The implicit initial value of the `byte` type is `0`. Value space for `byte` is 0-255 both inclusive.

The following is an example of byte definition.

```ballerina(){show=true}
byte c = 23;
```

Along with general byte array type, there is also a special syntax for defining base64 and base16 based array of bytes. With this, `blob` type is removed and replaced by byte array.

```ballerina(){show=true}
byte[] arr1 = [5, 24, 56, 243];
byte[] arr2 = base16 `aeeecdefabcd12345567888822`;
byte[] arr3 = base64 `aGVsbG8gYmFsbGVyaW5hICEhIQ==`;
```

## Bitwise AND (&), OR (|), XOR (^)
Bitwise operations AND (&), OR (|), XOR (^) have been added for `byte` type and `int` type with the following rules.

Both the right-hand-side and left-hand-side of the expression should be of the same type (`byte` or `int`), and the expected type will be also of the same type. If this is not the case, it will result in a compilation error.
An explicit conversion operation should be applied if the type of one side is not the same as the other side.

```ballerina(){show=true}
byte a = 13;
byte b = 45;
byte c = a & b;
byte d = a | b;
byte e = a ^ b;
```

## Table Expression

A table is intended to be similar to the table of relational database table. A table value contains an immutable set of column names and a set of data rows. Syntax for defining a table and adding data rows is as below.

```ballerina(){show=true}
table<Person> t1 = table {
	{ primarykey id, primarykey salary, name, age, married }, [
		 {1, 300.5, "jane",  30, true},
		 {2, 302.5, "anne",  23, false},
		 {3, 320.5, "john",  33, true}
	]
};

// Or we can create the row records seperately and then use it with table definition
Person p1 = { id: 1, age: 30, salary: 300.50, name: "jane", married: true };
Person p2 = { id: 1, age: 30, salary: 300.50, name: "jane", married: true };

table<Person> t1 = table {
	{ primarykey id, salary, name, age, married },
	[p1, p2]
};
```

## Map Access
Values of a map can be accessed using index-based syntax as well as field-access syntax. These two syntax's now behave differently. Getting a value using field-access syntax returns the value if the key exists. Otherwise a runtime error is thrown. Index-based syntax also will return the value if the key exists. However, it will return a null value if the key does not exist.
This would also mean that, for a constrained map, the type of the return value for the index-based syntax is always the `constraint_type|()`.


```ballerina(){show=true}
map<string> m = {"fname" : "John", "lname" : "Doe"}

// Field based access
string firstName = m.fname;
string middleName = m.mname;     // runtime error

// Index based access
string? firstName = m["fname"];
string? middleName = m["mname"];     // returns null
```

## Ballerina Observability
- New API's have been introduced such that developers can define their own trace blocks and metrics.
- Developers can attach the trace information of their code block to the default Ballerina traces, or a new trace as below.

```ballerina(){show=true}
//Create and attach span to the default Ballerina request trace.
int spanId = check observe:startSpan("Child Span");
   // Do Something
_ = observe:finishSpan(spanId);

//Create a completely new trace.
int spanId = observe:startRootSpan("Parent Span");
   //Do Something
int spanId2 = check observe:startSpan("Child Span", parentSpanId = spanId);
   // Do Something
_ = observe:finishSpan(spanId2);
   // Do Something
_ = observe:finishSpan(spanId);
```

- Developers can create a metric (counter or gauge) and have have their own measurements. The created metric can be registered in order to include its measurements to reporters such as Prometheus as below.

```ballerina(){show=true}
//Create counter and register.
map<string> counterTags = { "method": "GET" };
observe:Counter counterWithTags = new ("CounterWithTags", desc = "Some description", tags = counterTags);
counterWithTags.register() but {
   error e => log:printError("Cannot register the counter", err = e)
};

//Create gauge and register.
//Create statistics config to enable statistics calculation.
observe:StatisticConfig[] statsConfigs = [];
observe:StatisticConfig config = {timeWindow:30000, percentiles:[0.33, 0.5, 0.9, 0.99], buckets:3};
statsConfigs[0]=config;

observe:Gauge gaugeWithStats = new ("GaugeWithTags", desc = "Some description",
                                       tags = gaugeTags, statisticConfig = statsConfigs);
```

- All metrics registered can be retrieved and looked up individually as below.

```ballerina(){show=true}
//Get All Metrics
observe:Metric[] metrics = observe:getAllMetrics();
foreach metric in metrics {
   //do something.
}

//Look up a registered metric.
map<string> tags = { "method": "GET" };
observe:Counter|observe:Gauge|() metric = observe:lookupMetric("MetricName", tags = tags);
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
- With the inclusion of byte[], websocket related signatures of resources such as `onBinary`, `onPing`, and `onPong` and functions such as `pushBinary()`, `ping()`, and `pong()` now have `byte[]` in their signature instead of a blob.
- The HTTP transport error handler has been improved so that it recovers execution from inbound/outbound failures such as idle socket timeout and abrupt connection closure.
- The circuit breaker now supports request volume threshold parameter. This parameter sets the minimum number of requests in a `RollingWindow` that will trip the circuit. So the rollingWindow configurations can be specified as below.

```ballerina(){show=true}
rollingWindow : {
          timeWindowMillis: 10000,
          bucketSizeMillis: 2000,
          requestVolumeThreshold: 10
}
```

## Build & Package Management
- The ballerina build command output has been enhanced with more details about the build. Also by default, the test module will now be executed with the build command.
- Ballerina push command now mandate the ballerina build also along with it, which make sure that packages are built before it is pushed to the central.
- Ballerina central now supports to view previous versions of a package. It also now shows ballerina version compatibility section.

## IDEs & Language Server
- Composer is now shipped as a native Electron App.
- Language server now includes source code formatting and also supports finding all symbols in a document and in the workspace.
- IntelliJ IDEA Ballerina Plugin has added improvements for the ballerina source code debugger.
