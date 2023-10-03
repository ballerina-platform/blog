---
layout: blog-post
title: Announcing Ballerina 2201.6.0 (Swan Lake Update 6)
author: Ballerina Team
published-date: 6 June 2023
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2023-06-06-announcing-ballerina-2201.6.0-swan-lake-update-6/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

We are excited to announce the [Ballerina 2201.6.0 (Swan Lake Update 6)](https://ballerina.io/downloads/) release. This latest update brings a host of features and improvements to the Ballerina programming language. 

**`bal persist`**

One of the significant highlights of Ballerina Swan Lake Update 6 is the introduction of the `bal persist` feature. It offers a set of abstractions to make you productive when working with databases. Use `bal persist` to define your data model using the familiar Ballerina syntax and generate a type-safe client API just for your data model and the data store of your choice. `bal persist` supports three data stores with this release: in-memory, MySQL, and Google Sheets (experimental).  

`bal persist` comprises three primary components:

- **Data model:** Describe your entities and the relationships using familiar Ballerina types. This data model works as the single source of truth for the database schema and the application data model. 

    Below is a sample data model with two entities.

    ```ballerina
    import ballerina/persist as _;

    type Department record {|
        readonly string deptNo;
        string deptName;
        Employee[] employees;
    |};

    type Employee record {|
        readonly string empNo;
        string firstName;
        string lastName;
        Department department;
    |};
    ``` 

- **CLI tool:** Primary way to interact with `bal perist`. Use this tool to initialize your Ballerina package for persistence, generate custom client API for your data model, generate migrations, etc.  

- **Type-safe client API:** Provides a type-safe interface to work with the data store.

The example code below demonstrates how CRUD operations can be performed on the above model via the client API.       

```ballerina
    import rainier.db;
    import ballerina/io;
    import ballerina/persist;

    public function main() returns error? {
        // Create a new persist client for the database.
        db:Client rainierDb = check new ();

        // Insert two new departments. 
        db:DepartmentInsert newDept1 = {
            deptNo: "DEP00123",
            deptName: "Engineering"
        };
        db:DepartmentInsert newDept2 = {
            deptNo: "DEP00124",
            deptName: "Sales"
        };
        _ = check rainierDb->/departments.post([newDept1, newDept2]);

        // Insert a new employee.
        db:EmployeeInsert newEmp = {
            empNo: "EMP00123",
            firstName: "John",
            lastName: "Doe",
            departmentDeptNo: newDept1.deptNo
        };
        _ = check rainierDb->/employees.post([newEmp]);

        // Retrieve the employee with the empNo EMP00123.
        db:Employee employee = check rainierDb->/employees/EMP00123;
        io:println(employee);

        // Retrieve all the employees.
        stream<db:Employee, persist:Error?> empStream = rainierDb->/employees;
        db:Employee[] employees = check from var e in empStream
            select e;
        io:println(employees);

        // Update the employee's department.
        db:Employee updatedEmp = check rainierDb->/employees/EMP00123.put({departmentDeptNo: newDept2.deptNo});
        io:println(string `Updated employee: ${updatedEmp.toString()}`);

        // Delete the employee with the empNo EMP00123.
        db:Employee deletedEmp = check rainierDb->/employees/EMP00123.delete();
        io:println(string `Deleted employee: ${deletedEmp.toString()}`);
    }
```

In addition to the `bal persist` feature, Swan Lake Update 6 brings a range of notable additions and improvements as described below.

- **Electronic Data Interchange (EDI) support:** Swan Lake Update 6 introduces EDI message processing support in Ballerina. This capability allows the conversion of EDI messages to Ballerina records and vice versa, leveraging a specified EDI schema. 
    
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

- **GraphQL field interceptors and interceptor configurations:** Now, you can utilize GraphQL field interceptors to apply an interceptor specifically to a particular resolver (resource/remote) method. Also, the newly introduced interceptor configurations allow you to change the behavior of a GraphQL service interceptor.

For a comprehensive overview of all the changes and improvements brought by Swan Lake Update 6, see the [release note](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-2201.6.0).

We thank the Ballerina community for your invaluable support and feedback in shaping it into what it is today. We are excited to present this release and hope you enjoy it.

Cheers to the Ballerina community and the bright future of it!
