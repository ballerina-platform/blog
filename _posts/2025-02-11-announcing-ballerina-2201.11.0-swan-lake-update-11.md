---
layout: blog-post
title: Announcing Ballerina Swan Lake Update 11 (2201.11.0)
author: Waruna Jayaweera
published-date: 11 Feb 2025
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2025-02-11-announcing-ballerina-2201.11.0-swan-lake-update-11/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

The Ballerina team is excited to announce the eleventh update release of Ballerina Swan Lake, Ballerina Swan Lake Update 11 (2201.11.0). This update adds support for Java 21, along with performance improvements and new features for the Ballerina library and developer tools.
## Runtime
### Java 21 Support
The Ballerina runtime now supports Java 21, the latest long-term support (LTS) release of the Java platform. Ballerina's existing concurrency model has been implemented with Project Loom virtual threads and the newest concurrency features in Java 21.

Ballerina models concurrency using the concept of "Strand". A new strand is created via a named worker, the 'start' action, or any entry point execution, such as the main function or a resource method. During execution, a strand can yield—for example, while waiting for a worker result or a network call—allowing the underlying platform thread to be shared with other strands.

Java threads were mapped to platform threads, making it costly to create a Java thread for each strand. Therefore, strands could not be directly mapped to Java threads. Initially, Project Loom was in its early stages as well. So, Ballerina's own scheduler was implemented to manage strands, similar to Java 21 virtual threads. The Ballerina scheduler assigns a strand to an available Java thread from the Ballerina thread pool and manages yield points to prevent Java threads from being blocked.

Additionally, the Ballerina scheduler maintains the state of strands to model their asynchronous behavior with yield points. Java switch cases are generated for each Ballerina function to manage these yield states, enabling execution to resume once the yield operation is complete.

However, generating switch cases for each function causes significant performance degradation, especially in loops. Moreover, the complexity of handling asynchronous operations has made native runtime APIs more complicated. This complexity in the concurrency model also impacts other Ballerina concurrency features, such as worker integration and locks.

With the official support for Java virtual threads in Java 21 LTS, transitioning to a virtual threads-based concurrency model will eliminate the need for switch case-based code generation to support asynchronous execution. Now, strand is mapped directly to virtual thread and Ballerina own scheduler has been no longer required. This change has enhanced the performance of the identified scenarios and provided a clearer set of APIs for native code developers.

### Performance Improvements
By implementing the Ballerina concurrency model with Java Virtual Threads in Update 11, there have been substantial performance improvements. We have conducted performance tests and observed significant reductions in CPU-bound operations, memory usage, GraalVM execution time, and the size of the generated executables.

#### CPU Bound Operations
Recent improvements, especially in array access and loop optimizations, have led to a substantial performance boost. For example, the following benchmark code segment runs over 20 times faster than in Ballerina Swan Lake Update 10.

```ballerina
public function main(string... args) returns error? {
   int u = check int:fromString(args[0]);
   int r = check random:createIntInRange(1, 10000);
   int[10000] a = [];
   foreach int i in 0..<10000 {
       foreach int j in 0..<100000 {
           a[i] = a[i] + j % u;
       }
       a[i] += r;
   }
}
```

<img alt="Loops U10 Vs U11" src="/images/u11/loops-performance-u10-vs-u11.png">

The following code computes the Fibonacci sequence for 𝑛 = 52. With the optimizations in Swan Lake Update 11, performance has doubled compared to Ballerina Swan Lake Update 10.

```ballerina
function fibonacci(int n) returns int {
   if (n <= 1) {
       return n;
   }
   return fibonacci(n - 1) + fibonacci(n - 2);
}


public function main() {
   int n = 52; // Adjust this number to increase the load
   int result = fibonacci(n);
}
```

<img alt="Loops U10 Vs U11" src="/images/u11/fibonacci-u10-vs-u11.png">

Performance tests on query expressions involving loops have demonstrated up to a 2x improvement.

<img alt="Loops U10 Vs U11" src="/images/u11/query-expressions-with-loops-u10-vs-u11.png">

#### File Size

Since generated executable codes have been reduced with Update 11, there is a notable reduction in module build files and final executable sizes.

<img alt="Loops U10 Vs U11" src="/images/u11/file-size-u10-vs-u11.png">

#### GraalVM Build Time

The latest improvements have shown a 25% reduction in GraalVM build time as well.

<img alt="Loops U10 Vs U11" src="/images/u11/graalvm-build-time-u10-vs-u11.png">

#### Memory

Performance tests were conducted to evaluate the heap memory usage of Ballerina Update 10 and Update 11. Since garbage collection causes fluctuations in memory usage during execution, this analysis focuses on the peak heap memory recorded for each test, demonstrating a significant reduction in memory consumption.

<img alt="Loops U10 Vs U11" src="/images/u11/peak-heap-memory-u10-vs-u11.png">

### Strand Dump Tool

The strand dump tool has been enhanced to support virtual threads. The report now includes the total strand count, identifies strands running in parallel and sequentially, and provides their corresponding stack traces.

In the updated concurrency model, every strand is directly mapped to a Java virtual thread, and the tool extracts strand-related details from the virtual thread dump. However, since the thread dump does not include virtual thread states, the current version of the strand dump report does not display strand states.

## Ballerina Library Features

### New data.csv module

The data.csv module has been introduced with constraint validation support, enabling output validation against constraints defined in the target type. Additionally, the module supports parsing CSV data with union types as expected types, enhancing data flexibility and accuracy.

### The data.xmldata module

The data.xmldata module has been enhanced with support for XML Schema Definition (XSD) Sequence and Choice. It now also includes union-type support for XML operations, along with the ability to handle singleton types, unions of singletons, and enums, improving XML data processing flexibility.  
Please refer to the release note for further information on the data.xml module.

### The Crypto package

The Crypto package has been enhanced with support for PGP encryption and decryption with streams, Bcrypt, Argon2, and Keccak-256 hashing and verification.

### The HTTP package

HTTP package has added lax binding support for service and client data binding, allowing greater flexibility. This enables nil values to be bound to optional fields and absent values to be assigned to nilable fields.

### The LDAP package

The LDAP package now supports secure LDAP (LDAPS) connections using SSL/TLS, enabling applications to authenticate and interact with LDAP directories over encrypted connections.

## Developer tools

The OpenAPI tool has been enhanced with new features. New WSDL and XSD tools have been introduced.

### OpenAPI tool

The OpenAPI tool has introduced the following new features.

* Introduced the `flatten` sub-command, which flattens the OpenAPI contract file by moving all the inline schemas to the components section. The output is a modified OpenAPI contract.

```
$ bal openapi flatten <openapi.yaml>
```

* Introduced the `align` sub-command, which aligns the OpenAPI contract file according to Ballerina's naming practices. The Ballerina name extensions are added to the schemas, which can not be modified directly. The output is a modified OpenAPI contract.

```
$ bal openpai align <openapi.yaml>
```

* Code generation support has been added with the new Ballerina name extensions, which are mapped as relevant annotations in the generated types, parameters, and record fields. This support is available for client, service implementation, and service type code generation. Additionally, relaxed data binding for client-side payloads has been introduced, allowing nil values to be considered optional and treating absent fields as nilable types.

### WSDL tool

A new tool is introduced to generate Ballerina clients and record types from a given WSDL file. This simplifies the integration with SOAP-based web services by automatically generating necessary types and client functions.

```
 $ bal wsdl <wsdl-file-path> [--operations <operation-uris>] [--module <output-module-name>] [--port <port-name>]
```

### XSD tool

A new tool is introduced to generate Ballerina record types from an XSD file, simplifying integration with XML-based operations in Ballerina.

```
  $ bal xsd <xsd-file-path> --module <output-module-name>
```

Furthermore, this release brings a range of notable additions and improvements to the language, runtime, Ballerina library, and developer tools. For a comprehensive overview of all the new features and improvements brought by Swan Lake Update 11, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.11.0).

We encourage our community to explore these features and provide feedback. Your input is invaluable in shaping the future of Ballerina and ensuring it meets your needs.

Cheers to the Ballerina community and the bright future of it!
