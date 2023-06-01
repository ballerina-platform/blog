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

We are excited to announce the [Ballerina 2201.6.0 (Swan Lake Update 6)](https://ballerina.io/downloads/) release. This latest update brings a host of features and improvements to the Ballerina programming language. 

**`Bal persist` feature**

One of the major highlights of Ballerina Swan Lake Update 6 is the introduction of the `Bal persist` feature. With this feature, you can now store and retrieve data from various data stores, including in-memory tables, MySQL databases, and Google Sheets. The `Bal persist` feature comprises three primary components:

- **Persist model:** This allows you to define your data model by providing a structured representation of your data.

    For example, consider the example model below.

    ```ballerina
    import ballerina/persist as _;
    import ballerina/time;

    type Employee record {|
        readonly string id;
        string firstName;
        string lastName;
        time:Date birthDate;
        string gender;
        time:Date hireDate;
    |};
    ``` 

- **Persist CLI:** This generates a client API for your defined data model. 

- **Persist client API:** This provides an interface to access and manipulate the data stored in your chosen data store. Whether you need to fetch data, update records, or perform other data-related operations, the persist client API simplifies the process.

    The example code below demonstrates how CRUD operations can be performed on the persist model via the client API.       

    ```ballerina
    import ballerina/io;
    import ballerina/persist;
    import rainier.store;

    store:Client sClient = check new ();

    public function main() returns error? {
        store:EmployeeInsert employee1 = {
            id: "EMP001",
            firstName: "John",
            lastName: "Doe",
            gender: "Male",
            birthDate: {year: 1987, month: 7, day: 23},
            hireDate: {year: 2020, month: 10, day: 10}
        };

        // Create a new employee record.
        string[] employeeIds = check sClient->/employees.post([employee1]);
        io:println(string `Inserted employee ids: ${employeeIds.toString()}`);


        // Get the employee record with the ID: EMP001.
        Employee|error employee = sClient->/employee/EMP001;

        // Update the employee record with the ID: EMP001.
        store:Employee employee = check sClient->/employees/[empId].put(
            {hireDate: {year: 2014, month: 5, day: 1}
        });

        // Delete the employee record with the ID: EMP001.
        store:Employee|error deleted = sClient->/employee/EMP001.delete();

        // Get all the employee records.
        stream<store:Employee, error?> employee = sClient->/employee;
    }
    ```

In addition to the `Bal persist` feature, Swan Lake Update 6 brings a range of notable additions and improvements as described below.

- **Electronic Data Interchange (EDI) support:** Swan Lake Update 6 introduces EDI message processing support in Ballerina. This capability allows the conversion of EDI messages to Ballerina records and vice versa, leveraging a specified EDI schema. Furthermore, it enables the generation of Ballerina records for EDI schemas in handling EDI data.
    
    The example code below demonstrates how a simple EDI schema for sales order data can be converted to Ballerina records.

    ```ballerina
    import ballerina/io;
    import edi_to_record.sorder;

    public function main() returns error? {
        string ediText = check io:fileReadString("resources/order.edi");
        sorder:SimpleOrder simpleOrder = check sorder:fromEdiString(ediText);
        io:println("Order Id: ", simpleOrder.header.orderId);

        foreach sorder:Items_Type item in simpleOrder.items {
            io:println("Item: ", item.item, ", Quantity: ", item.quantity);
        }
    }
    ```

- **OpenAPI enum support:** Ballerina Open API tool now supports OpenAPI enums in both Ballerina client and service generation. The tool will generate Ballerina union types to represent the counterpart OpenAPI enum types.

- **GraphQL field interceptors and interceptor configurations:** Starting from this release, you can utilize GraphQL field interceptors to apply an interceptor specifically to a particular resolver (resource/remote) method. Also, the newly introduced interceptor configurations allow you to change the behavior of a GraphQL service interceptor.

For a comprehensive overview of all the changes and improvements brought by Swan Lake Update 6, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.6.0).

We extend our sincere gratitude to the Ballerina community for their invaluable feedback and continuous support. It is through the community involvement that Ballerina continues to evolve and thrive. We invite you to explore Swan Lake Update 6, explore the new features, and actively contribute to shaping the future of the Ballerina language.

Cheers to the Ballerina community and the bright future of it!
