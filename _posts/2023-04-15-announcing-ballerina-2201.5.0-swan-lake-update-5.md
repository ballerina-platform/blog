---
layout: blog-post
title: Announcing Ballerina 2201.5.0 (Swan Lake Update 5)
author: Ballerina Team
published-date: 15 April 2023
status: Published
socialmediaimage: Ballerina-Swan-Lake-GA-Release-banner-02-with-button.png
permalink: /posts/2023-04-15-announcing-ballerina-2201.5.0-swan-lake-update-5/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

We are excited to announce that Ballerina Swan Lake has just released its fifth update release, [Ballerina 2201.5.0 (Swan Lake Update 5)](https://ballerina.io/downloads/). In addition to the existing macOS installer, this release includes a [new installer](https://dist.ballerina.io/downloads/2201.5.0/ballerina-2201.5.0-swan-lake-macos-arm-x64.pkg) specifically designed for installing Ballerina on your macOS-ARM platforms.

As the key highlight of this release, now, you can use regular expressions in Ballerina code via the new `lang.regexp` library as shown in the example below.

```ballerina
import ballerina/lang.regexp;
import ballerina/io;

public function main() {
    string:RegExp emailRegex = re `[A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,}`;
    boolean validEmail = emailRegex.isFullMatch("bob@example.com");
    io:println(validEmail); // True.

    regexp:RegExp commaSeparator = re `,`;
    string[] names = commaSeparator.split("Bob,Frank,Will,Jack");
    io:println(names); // ["Bob","Frank","Will","Jack"]

    int patternCount = re `[bB].tt[a-z]*`.findAll("Butter was bought by Betty but the butter was bitter.").length();
    io:println(patternCount); // Prints “4”.

    string result = regexp:replaceAll(re `0+`, "10010011", "*");
    io:println(result); // Prints “1*1*11”.
}
```

Also, a new `range` function has been introduced in the `lang.int` lang library, which can be used to iterate over a range of integers with a specified `step` as the difference between two successive integers.

```ballerina
import ballerina/io;

public function main() {
    // Prints all even numbers from zero (inclusive) to 6(exclusive)
    // `start` is 0, `end` is 6, and `step` is 2.
    foreach int i in int:range(0, 6, 2) {
        io:println(i);
    }
}
```

Furthermore, now, you can mark a specific version of a package as deprecated in Ballerina Central with the new `bal deprecate` command.

```bash
$ bal deprecate ballerina/io:1.1.1 –message=”This package is deprecated due to a security vulnerability.”
```

Similarly, you can undeprecate a version of a package with the `--undo` option.

```bash
$ bal deprecate ballerina/io:1.1.1 –undo
```

The BindGen tool is also enhanced to support handling Java null values via providing command options to the `bal bindgen` command.

Beyond these highlights, the release includes numerous other notable additions and improvements to the language, runtime, standard library, and tooling. Further details about these enhancements are provided below.

- The `main` function of a Ballerina program now accepts function parameters of built-in subtypes, which can be passed as command-line arguments.
- Configurable variables of union types now accept structural values with ambiguous inherent types.
- The `http` standard library now supports specifying a tuple type as the return type and having basic types as client resource path parameters.
- The `@http:Payload` annotation is now made optional for the basic structured anydata types in HTTP resource functions. 
    ```ballerina
    import ballerina/http;

    type Album readonly & record {|
        string title;
        string artist;
    |};

    table<Album> key(title) albums = table [];

    service / on new http:Listener(9090) {

        // No need to have the payload annotation here.
        resource function post albums(Album album) returns Album {
            albums.add(album);
            return album;
        }
    }
    ```
- The `graphql` library is now enriched with a new feature to enable having GraphQL services as subgraphs in a GraphQL federation supergraph. 

To learn more about the specific changes and improvements included in Swan Lake Update 5, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.5.0).

We would like to thank the Ballerina community for their invaluable feedback and support in shaping it into what it is today. We look forward to your continued involvement in our efforts to improve the Ballerina language.

Cheers, 
The Ballerina Team

