---
layout: blog-post
title: Announcing Ballerina 2201.4.0 (Swan Lake Update 4)
author: Sameera Jayasoma
published-date: 28 February 2023
status: Published
socialmediaimage: Ballerina-Swan-Lake-GA-Release-banner-02-with-button.png
permalink: /posts/2023-02-28-announcing-ballerina-2201.4.0-swan-lake-update-4/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

We are happy to announce a new release, [Ballerina 2201.4.0 (Swan Lake Update 4)](https://ballerina.io/downloads/), the fourth update release of Ballerina Swan Lake. This release includes significant improvements to the language, standard library, runtime, and tooling, with a strong focus on standard library and tooling enhancements. While less flashy, these improvements make this release a significant step forward.

Tuple members can now be annotated with annotations defined for the field attachment point. However, such annotations are not allowed on the tuple rest descriptor. 

```ballerina
type RGB [
    @display {label: "R"} int:Unsigned8,     
    @display {label: "G"} int:Unsigned8,     
    @display {label: "B"} int:Unsigned8 
];
```

With this nice addition to the language, you can now write an Azure function with multiple output bindings in Ballerina. 

```ballerina
import ballerina/http;
import ballerinax/azure_functions as af;


type Album record {|
    string id;
    string title;
    string artist;
    decimal price;
|};


service / on new af:HttpListener() {
    resource function post queue(@http:Payload Album album) returns [@af:HttpOutput http:Created, @af:QueueOutput {queueName: "albums"} string] {
        http:Created httpRes = {
            body: album.id + " Added to the queue!"
        };
        return [httpRes, album.id];
    }
}
```

This release comes with several bug fixes that address specification deviations present in previous versions. You may experience code breakage due to these fixes. Despite the potential for temporary disruption, it's critical to address these deviations to ensure the long-term stability and health of the language. 

In previous versions, the compiler incorrectly identified the type of the following query action as `error?`.

```ballerina
public function main() {
    error? e = from int i in 1 ... 10
        do {
            io:println(i);
        };
}
```

You can write the above code as follows with Update 4. 

```ballerina
public function main() {
    from int i in 1 ... 3
    do {
        io:println(i);
    };
}
```

Here is another bug fix. Note the usage of the `check` keyword before the `from` keyword. In previous versions, the compiler includes the `error` type in the query action type when errors return from the `do` clause. 

```ballerina
function appendPRs(sheets:Client gsheets, PR[] pullRequests) returns error? {
    error? e = from var {url, title, state, created_at, updated_at} in pullRequests
        do {
            check gsheets->appendRowToSheet(spreadSheetId, sheetName,
                [url, title, state, created_at, updated_at]);
        };
    return e;
}
```

You can write the above code as follows with Update 4. 

```ballerina
function appendPRs(sheets:Client gsheets, PR[] pullRequests) returns error? {
    from var {url, title, state, created_at, updated_at} in pullRequests
    do {
        check gsheets->appendRowToSheet(spreadSheetId, sheetName,
                [url, title, state, created_at, updated_at]);
    };
}
```

We added several new features to the standard library, including an experimental new feature that simplifies data persistence in Ballerina.  We believe this feature can potentially enhance your overall development experience. The concept is to declare the domain data model using Ballerina record types that serves as the definitive source of truth. This record type definition generates a client API to access and modify the data stored in MySQL, the currently supported data store. We will publish more information about this feature in a future blog post. See the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.4.0#standard-library-updates) for more details of other standard library features. 

We also introduced several new features and improvements to the developer tools in the platform.

- Now, you can execute tests using the GraalVM native image. Just add the `--native` option to the `bal test` command.  Please note that the GraalVM native image support in Ballerina is still an experimental feature. 
- We enhanced the Ballerina VSCode extension experience with several new code actions and improved the sorting of module-level completion items.
- Improved the `bal format` command to format modules and source files individually. 

For a detailed list of what's new in Swan Lake Update 4, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.4.0).

We thank the Ballerina community for your invaluable support and feedback in shaping it into what it is today. We are excited to present this release and hope you enjoy it.
