---
layout: blog-post
title: Announcing Ballerina 2201.6.0 (Swan Lake Update 6)
author: Ballerina Team
published-date: 31 May 2023
status: Published
socialmediaimage: Ballerina-Swan-Lake-GA-Release-banner-02-with-button.png
permalink: /posts/2023-05-31-announcing-ballerina-2201.6.0-swan-lake-update-6/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

We are excited to announce the [Ballerina 2201.6.0 (Swan Lake Update 6)](https://ballerina.io/downloads/) release. This latest update brings a host of exciting features and improvements that further enhance the Ballerina programming language. 

Out of those, the `Bal persist` feature revolutionizes data storage and retrieval, while other improvements, such as the inlay hint support, enhanced OpenAPI compatibility, and newly introduced standard library packages, further enrich the Ballerina development experience.

**`Bal persist` feature**

One of the major highlights of Ballerina Swan Lake Update 6 is the introduction of the Bal persist feature. With this feature, you can now easily store and retrieve data from various data stores, including in-memory tables, MySQL databases, and Google Sheets. The Bal persist feature comprises three primary components:

- **Persist model:** This allows you to define your data model by providing a structured representation of your data.

- **Persist CLI:** This generates a client API for your defined data model. 

- **Persist client API:** This provides a convenient interface to access and manipulate the data stored in your chosen data store. Whether you need to fetch data, update records, or perform other data-related operations, the persist client API simplifies the process.

In addition to the `Bal persist` feature, Swan Lake Update 6 brings a range of notable additions and improvements as described below.

- **Electronic Data Interchange (EDI) support:** Swan Lake Update 6 introduces EDI message processing support in Ballerina. This capability allows seamless conversion of EDI messages to Ballerina records and vice versa, leveraging a specified EDI schema. Furthermore, it enables the generation of Ballerina records for EDI schemas, enhancing flexibility and efficiency in EDI data handling.

- **OpenAPI enum support:** Ballerina Open API tool now supports OpenAPI enums in both Ballerina client and service generation. The tool will generate Ballerina union types to represent the counterpart OpenAPI enum types.

- **GraphQL field interceptors and interceptor configurations:** Starting from this release, you can utilize GraphQL field interceptors to apply an interceptor specifically to a particular resolver (resource/remote) method. Also, the newly introduced interceptor configurations allow you to change the behavior of a GraphQL service interceptor.

- **Inlay hint support in the Language Server:** The language server now offers inlay hint support providing information about the parameter names required by a function or method call. This enhancement improves the overall code readability and provides more context when passing arguments to function/method calls.

- **The `yaml` and `toml` standard libraries:** Swan Lake Update 6 introduces new standard libraries for YAML and TOML. Now, you can easily convert YAML configuration files to JSON and vice versa, facilitating seamless integration with various systems. Additionally, the new TOML standard library allows smooth conversion of TOML configuration files to `map<json>` and vice versa.

For a comprehensive overview of all the changes and improvements brought by Swan Lake Update 6, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.6.0).

We extend our sincere gratitude to the vibrant Ballerina community for their invaluable feedback and continuous support. It is through the community involvement that Ballerina continues to evolve and thrive. We invite you to explore Swan Lake Update 6, leverage the new features, and actively contribute to shaping the future of the Ballerina language.

Cheers to the Ballerina community and the bright future of it!
