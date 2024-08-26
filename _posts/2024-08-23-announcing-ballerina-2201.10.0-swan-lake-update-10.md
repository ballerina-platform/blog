---
layout: blog-post
title: Announcing Ballerina Swan Lake Update 10 (2201.10.0)
author: Shafreen Anfar
published-date: 23 Aug 2024
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2024-08-22-announcing-ballerina-2201.10.0-swan-lake-update-10/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

The Ballerina team is excited to announce the tenth update release of Ballerina Swan Lake, Ballerina Swan Lake Update 10 (2201.10.0). This update brings enhancements across various areas, with key highlights including a revamped OpenAPI tool, a series of new connectors, and innovative AI features.

## OpenAPI Tool

A major highlight of Ballerina Swan Lake Update 10 is the introduction of extensive enhancements to the OpenAPI tool.

Another important feature is the support for example annotations on Ballerina types, resource parameters, and record fields, which are now directly rendered into the OpenAPI example schema. This provides developers with clear, contextually relevant examples, making APIs easier to understand and implement. For more information, check [Export with examples](https://ballerina.io/learn/openapi-tool/#export-with-given-examples-information).

<img alt="Swagger UI" src="/images/swagger_ui.png">

To further streamline development, this update introduces support for mock client generation using examples from the OpenAPI specification. Picture a developer tasked with integrating a new API: you can now effortlessly generate mock clients with examples that you documented in the OAS, test and validate integrations, and then seamlessly replace the mock client with the actual one when ready for production. For more information, see the section on [generating mock clients using OpenAPI examples](https://ballerina.io/learn/openapi-tool/#generate-mock-client-using-included-example-in-oas).

The OpenAPI package allows developers to automatically generate and embed the OpenAPI specification for a Ballerina service via a resource. This has been improved by exposing another resource to view the HTML-rendered version of the OAS. This feature allows you to introspect the service through a more intuitive and readable format. For more information, see the section on [OAS resources](https://ballerina.io/spec/http/#236-openapi-specification-resources)

<img alt="Service contract type" src="/images/service_contract_type.png">

## New Connectors

In this release, we've made substantial improvements to the functionality and usability of some connectors. Here are the key highlights:

- As part of the connector revamp initiative, several connectors have been updated significantly. The newly released `dayforce` and `discord` connectors support interaction with their latest REST API versions. Additionally, the `asb`, `slack`, `stripe`, and `twitter` (X) connectors have undergone major updates, featuring significant API and functionality changes, along with enhanced documentation, making it easier to develop complex applications.

- For SAP integrations, the [`sap`](https://central.ballerina.io/ballerinax/sap/latest) connector has been upgraded to support the invocation of any OData endpoint in S/4HANA and now offers automatic CSRF token authentication, enhancing both security and usability. Similarly, the [`sap.jco`](https://central.ballerina.io/ballerinax/sap.jco/latest) connector now supports the invocation of RFC modules with better type binding and allows the transmission and reception of iDocs. Additionally, the [`sap.s4hana.sales`](https://central.ballerina.io/search?q=sap.s4hana.sales&sort=relevance%2CDESC&page=1&m=packages) connectors provides a high-level interface for Sales and Distribution (SD) APIs in S/4HANA, enabling streamlined sales order management, delivery processing, and billing operations.

- The [`salesforce`](https://central.ballerina.io/ballerinax/salesforce/latest) connector now includes a listener with streaming API support for real-time data synchronization and event-driven workflows. Additionally, the introduction of the `salesforce.types` submodule enables the use of base types, and the reorganization of Salesforce clients enhances usability.

## AI features 

Ballerina Swan Lake Update 10 contains an experimental test generator for Ballerina Copilot and significant improvements to the existing AI data mapper as well. These experimental features will greatly enhance developer productivity and streamline the integration development lifecycle.
- Test Generator
<br>
Automatically generates unit tests based on your code, reducing the time and effort required to ensure robust test coverage. You can focus on building your application without worrying about breaking other features.
- Improved AI Data Mapper
<br>
Simplifies complex data transformation tasks by using AI to understand the relationships between different data models. This update improves type conversions, hierarchical mappings, and general data mapping accuracy.

<img alt="AI data mapping" src="/images/ai_data_mapping.jpg">


Cheers to the Ballerina community and the bright future of it!
