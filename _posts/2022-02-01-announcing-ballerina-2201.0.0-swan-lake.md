---
layout: blog-post
title: Announcing Ballerina 2201.0.0 (Swan Lake)
author: Ballerina Team
published-date: 01 February 2022
status: Published
socialmediaimage: SwanLake-04.jpeg
permalink: /posts/2022-02-01-announcing-ballerina-2201.0.0-swan-lake/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

Today we are thrilled to announce the much-anticipated General Availability (GA) of [Ballerina 2201.0.0 (Swan Lake)](https://ballerina.io/downloads/)!

With a focus on enterprise integration, Ballerina has been designed to easily create network services, and real-world, cloud native applications. Swan Lake adds a new set of substantial language features and platform tools to produce programs that handle network interactions, data, and concurrency straightforwardly, and are easy to maintain. 

A lot has changed since we released Ballerina 1.0 in 2019, especially over the past year. Right after 1.0, we started incorporating key integration features such as transactions, querying, streams, table support, database integration, and XML and JSON support into the language. And while this was going well, we realized that we needed to make some fundamental changes to the foundation of the language to improve it for production. We wanted to make Ballerina a great fit for the needs of the cloud. We knew that making those changes affected our existing users, but also that it was a worthy aim to pursue because the long-term benefits of the potential platform for Ballerina users far outweighed the short-term costs. 

So, Ballerina went through a major overhaul. The end result is Swan Lake, the first version of Ballerina that is ready for prime time! Fundamentally, Swan Lake is a commitment to stability—Ballerina has matured, and core aspects of the language will be steady for a long time.

Since Beta1, we have closely engaged with our community, gathering valuable feedback from various channels to help us add and enrich various capabilities towards GA. Over the past few months post Beta1, we released several beta versions of Swan Lake, the most recent being [Beta6](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta6/). Most of our recent efforts focused on fixing bugs, making many usability improvements, and improving documentation. Likewise, the GA release also contains more improvements that are expected to improve how Ballerina feels in practice.



__Changes and Additions__

We talked about [all the important features and improvements brought to you by Ballerina Swan Lake](https://blog.ballerina.io/posts/announcing-ballerina-swan-lake-beta1/) when we announced Beta1 in June. 

To recap, in terms of significant language improvements (among many others), we explained how Ballerina services were redesigned to support data-oriented protocols, such as HTTP and GraphQL, and RPC-style protocols, such as gRPC, in a first-class way. Services became service objects that work uniformly with client objects. Service objects can now have both remote methods, which support RPC-style protocols, and resource methods, which support data-oriented protocols such as HTTP and GraphQL. Now objects work more familiarly and ergonomically due to the introduction of class definitions. A revised table type was introduced along with a significantly enhanced integrated query language for iterable structures. We also significantly improved the way we handle errors and redesigned language support for transactions.

The [Ballerina Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=WSO2.ballerina) was revamped for a better editing experience. Swan Lake now brings you a new low-code editing experience with our new VS Code plugin, which will allow users to edit Ballerina programs graphically and textually. The Ballerina VS Code extension also comes with new and improved debugging capabilities and support for expression evaluation. 

Moreover, we introduced [packages](https://ballerina.io/learn/getting-started-with-ballerina/) and improved Ballerina package builds. The [Ballerina Central](https://central.ballerina.io/) UI was refreshed to support packages and to enhance user experience. We redesigned the Ballerina standard library APIs by leveraging the latest language features. Library modules that support RESTful-style network protocols were improved with resource methods, and modules that support RPC-style protocols were improved with remote methods. 

We further simplified the development and deployment of Ballerina code in the cloud with [code-to-cloud](https://ballerina.io/learn/running-ballerina-programs-in-the-cloud/code-to-cloud-deployment/) features. We also introduced [`bal shell`](https://ballerina.io/learn/ballerina-shell/), an interactive command-line tool that allows you to rapidly learn and prototype Ballerina code. We made improvements to dependency management by making some changes to build commands and packaging.

With Swan Lake GA, we have revamped our website too. Our [learn](https://ballerina.io/learn/) tab contains brand new content, including comprehensive guides to the language. The section now has an optimized structure for an easier learning and reference experience, with pages being categorized under headings such as getting started, guides, and reference material. 

Our [community page](https://ballerina.io/community) got a makeover to make it easier to find information easily, particularly on events and contributed content. Additionally, we have simplified ways to allow community members to submit content, report issues, seek help, subscribe to our newsletter, and help us grow. 


 
__What's Next__

Ballerina won’t stop evolving. We’ll continue to update and patch Swan Lake on a regular, frequent basis. Its stability will remain our priority, which means that we’ll ensure upgrading Ballerina is painless for you. 

Furthermore, we will work on implementing nBallerina, which will be Ballerina's compiler written in Ballerina and will enable cross-compilation to native binaries via LLVM. More on this in a future blog post. 



__We are Grateful to Our Community__

As we celebrate this monumental milestone, we want to thank everyone in the community for your support in making Ballerina what it is today. We look forward to your continued contribution to get closer to our goal in making Ballerina the #1 programming language for microservices and integrations. 

Happy coding!
 
Cheers,
The Ballerina Team



To see all changes included in Swan Lake, please see the following release notes: [Beta1](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta1/), [Beta2](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta2/), [Beta3](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta3/), [Beta4](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta4/), [Beta5](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta5/), [Beta6](https://ballerina.io/downloads/swan-lake-release-notes/swan-lake-beta6/), and [GA](https://ballerina.io/downloads/swan-lake-release-notes/2201-0-0-swan-lake/). 



[Follow us on Twitter for the latest updates.](https://twitter.com/ballerinalang)
  
