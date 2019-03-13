---
title: Ballerina now includes support for AWS Lambda
author: Anjana Fernando
date: 13 March 2019
status: Published
abstract: 
socialmediaimage: aws-blog.jpg
---

# Ballerina now includes support for AWS Lambda

Starting with Ballerina [0.990.3](https://ballerina.io/downloads/), we have included support for AWS Lambda, an event-driven, serverless computing platform provided by Amazon. By including this new support, users can quickly deploy Ballerina functions as AWS Lambda functions. This has been implemented as a Ballerina compiler extension, which processes a special annotation that is attached to a Ballerina function. The following video presents a brief walkthrough of the new integration. 

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gUl91P-FApk" allowfullscreen></iframe>
</div>

AWS Lambda is a compute service that lets you run code without provisioning or managing servers. It executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume; there is no charge when your code is not running. 

To learn more about a complete scenario that utilises Ballerina and AWS Lambda functions, refer to this [Ballerina by Guide](https://ballerina.io/learn/by-guide/ballerina-awslambda-deployment/) (BBG). The guide discusses how to build a Ballerina-based AWS Lambda function, which picks up events for uploading new images to an S3 bucket, and integrate specific cloud services for further processing. In addition, refer to the new [Ballerina by Example](https://ballerina.io/learn/by-example/awslambda-deployment.html) (BBE), which includes commented examples that cover every nuance of the syntax, as well our [documentation](https://ballerina.io/learn/api-docs/ballerinax/awslambda.html).

As the language is still being improved, feedback on [Stack Overflow](https://stackoverflow.com/tags/ballerina/info), [Slack](https://ballerina.io/open-source/slack/), the mailing list, or [GitHub](https://github.com/ballerina-platform/ballerina-lang) is most welcome. To learn more about the language and growing Ballerina community, visit [Learn](https://ballerina.io/learn/) and [exercism.io](https://exercism.io/tracks/ballerina). 

