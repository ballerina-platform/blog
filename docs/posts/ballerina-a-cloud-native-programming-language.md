---
title: Ballerina - A cloud native programming language for integration
author: Kasun Indrasiri
date: 5 June 2018
status: Published
abstract:  Ballerina is a cloud-native programming language which aims to fill the gap between integration products and general purpose programming languages by making it easy to write programs that integrate and orchestrate across distributed microservice and endpoints in type-safe and resilient manner. 
socialmediaimage: drone-innovation-technology-57544.jpg
---

# Ballerina - A cloud native programming language for integration
Ballerina is a cloud-native programming language which aims to fill the gap between integration products and general purpose programming languages by making it easy to write programs that integrate and orchestrate across distributed microservice and endpoints in type-safe and resilient manner. 

In this post, we will cover what Ballerina is and some of the key highlights of it. 


## A fully fledged programming language
Ballerina is a fully fledged programming language which is compiled, type-safe, Turing-complete, concurrent and secure by design. Ballerina incorporates fundamental concepts of distributed system integration into the language and offers a type-safe, concurrent environment to implement and integrate microservices with distributed transactions, reliable messaging, stream processing, and workflow.

## Integration with code over config using text or graphic syntaxes
Both Ballerina code and the graphical syntax are inspired from how the independent parties communicate via interactions in a sequence diagram. 

In the graphical syntax, Ballerina represents clients, workers and remote systems as different actors in the sequence diagram. For example, as shown in figure 1, the interaction between the client/caller, service, worker and external endpoint can be represented using a sequence diagram. Each endpoint is represented as an actor in the sequence diagram and actions are represented as interactions between them. 

![Sequence Diagram](./images/seq_diagram_fig1.png) 
*Figure 1*

In code, remote endpoints are interfaced via endpoints, which offer type safe actions and worker’s logic is written as sequential code inside either a resource or a function. You can define a service and bind it to a server endpoint (for example, HTTP server endpoint can listen on a given HTTP port). Each service contains one or more resource which has the sequential code related to a worker and runs by a dedicated worker thread. 

```ballerina
import ballerina/http;
import ballerina/io;

endpoint http:Listener listener {
   port:9090
};

@http:ServiceConfig {
   basePath:"/time"
}
service<http:Service> timeInfo bind listener {

   @http:ResourceConfig {
       methods:["GET"],
       path:"/"
   }
   getTime (endpoint caller, http:Request req) {

       // You can define an endpoint to an external service.
       // This endpoint will instantiate an HTTP connector.
       // 'timeServiceEP' becomes reusable object in the code
       // body.
       endpoint http:Client timeServiceEP {
           url:"http://localhost:9095"
       };

       // Invoke 'get' resource at timeServiceEP endpoint.
       // -> indicates request is sent over the network.
       // 'check' assigns response or if there is an error
       //  then generates a function error.
       http:Response response = check
                    timeServiceEP -> get("/localtime");

       // json and xml are primitive data types!.
       // The '.' syntax is used for invoking local functions.
       json time = check response.getJsonPayload();

       // json objects can be defined inline.
       // json keys and objects do not require escaping.
       // json objects can use variables and functions.
       json payload = {
                          source: "Ballerina",
                          time: time
                      };
       response.setJsonPayload(payload);
       _ = caller -> respond(response);
   }
}

```

Inside the resource code, you can write the interaction with external endpoint by using client endpoints of given protocol (e.g HTTP client) as well as the generic programming logic. 

## Network Aware

Ballerina is a language that is designed for integration of disparate service, systems, and data. Hence Ballerina provides native network aware constructs that provide the abstraction for interaction with endpoints via disparate network protocols. Ballerina offers out of the box support for most of the standard network communication protocols. 

For example, you can use client connectors such as HTTP, MySQL, gRPC Kafka to produce the message to those systems.


```ballerina
endpoint http:Client timeServiceEP {
           url:"http://localhost:9095"
};

// ... 
http:Response response = check
                    timeServiceEP -> get("/localtime");

endpoint mysql:Client testDB {
    host: "localhost",
    port: 3306,
    name: "testdb",
    username: "root",
    password: "root",
    poolOptions: { maximumPoolSize: 5 },
    dbOptions: { useSSL: false }
};
// ... 
var selectRet = testDB->select("SELECT * FROM student", ()); 

// Kafka producer endpoint
endpoint kafka:SimpleProducer kafkaProducer {
    bootstrapServers: "localhost:9092",
    clientID:"basic-producer",
    acks:"all",
    noRetries:3
};

// ... 
 // Produce the message and publish it to the Kafka topic
kafkaProducer->send(serializedMsg, "product-price", partition = 0);

``` 
Similarly, you can leverage server connectors to receive the message via those protocols, and bind them to the service that intends to consume those messages. So, most implementation details of consuming messages via a given protocol are transparent to the developer. 

```ballerina
// Server endpoint configuration.
endpoint grpc:Listener ep {
   host:"localhost",
   port:9090
};

// The gRPC service that binds to the server endpoint.
service SamplegRPCService bind ep {
   // A resource that accepts a string message.
   receiveMessage (endpoint caller, string name) {
       // Print the received message.        foreach record in records {
            blob serializedMsg = record.value;
            // Convert the serialized message to string message
            string msg = serializedMsg.toString("UTF-8");
            log:printInfo("New message received from the product admin");

... 
endpoint jms:SimpleQueueReceiver consumer {
    initialContextFactory:"bmbInitialContextFactory",
    providerUrl:"amqp://admin:admin@carbon/carbon"
                + "?brokerlist='tcp://localhost:5672'",
    acknowledgementMode:"AUTO_ACKNOWLEDGE",
    queueName:"MyQueue"
};

service<jms:Consumer> jmsListener bind consumer {

    onMessage(endpoint consumer, jms:Message message) {
        match (message.getTextMessageContent()) {
            string messageText => log:printInfo("Message : " + messageText);
```

In addition to primitive network protocols, connectors are available for various web APIs such as Twitter, Github etc.

## Resilient by design
The resilient and type-safe integration is built into the language. So when you to invoke an external endpoint which might be unreliable, you can circumvent such interaction with resilience capabilities such as circuit breaker for the specific protocol that you are using.  This is as trivial as passing a few additional parameters to your client endpoint code. 


```ballerina
// circuit breaker example
endpoint http:Client backendClientEP {
    circuitBreaker: {
        rollingWindow: {
            timeWindowMillis:10000,
            bucketSizeMillis:2000
        },
        failureThreshold:0.2,
        resetTimeMillis:10000,
        statusCodes:[400, 404, 500]
    }
    url: "http://localhost:8080",
    timeoutMillis:2000,
};

```

By design Ballerina code you write will not require specific tools for checking for vulnerabilities or best practices. For example, a common issue in building distributed systems is that data coming over the wire cannot be trusted not to include injection attacks. Ballerina assumes that all data coming over the wire is tainted. And compilation time checks prevent code that requires untainted data from accessing tainted data. 


```ballerina
// protection against injection attacks
service<http:Service> tweeter bind {port:9090} {
   postMethod (endpoint caller, http:Request req) {
        // data coming over the wire is
        // automatically assumed to be tainted
        string taintedData = check req.getTextPayload();

        // this line will cause a compiler error
        // as the data is tainted and the secureOperation
        // annotation declares that it requires untainted data
        secureOperation(taintedData);

        string untaintedData =
            sanitizeAndReturnUntainted(taintedData);

        // this line will compile
        secureOperation(untaintedData);
    }
}

// @sensitive indicates that this method
// requires untainted data
function secureOperation (@sensitive string data) {
    io:println(data);
}

// the @untainted annotation indicates that the return
// from this method is no longer tainted
function sanitizeAndReturnUntainted (string input) returns @untainted string {
    string regEx = "[^a-zA-Z]";
    return input.replace(regEx, "");
}

```

Most of the out of the box capabilities that Ballerina offer for resilient integration, drastically reduce the number of boilerplate code and external dependencies that you need to have to achieve resilient interactions and safe code. 

## Type Safe 
Ballerina has a structural type system with primitive, record, object, tuple and union types. This typesafe model incorporates type inference at the assignment and provides numerous compile time integrity checks for connectors, logic and network-bound payloads. 

The code that integrates services and systems often has to deal with sophisticated distributed errors. Ballerina has error handling capabilities based on union types. Union types explicitly capture these semantics without requiring developers to create unnecessary “wrapper” types. When you decide to pass the errors back to the caller, you can use the ‘check’ operator. 

For example, when you have a JSON data received over a message, you can cast it to a type that you have defined as part of your logic. Then you can safely cast the two type by handling the possible error as part of a match clause written against that union type. 



```ballerina
// this is a simple structured object definition in Ballerina
// it can be automatically mapped into JSON and back again
type Payment {
	string name,
	string cardnumber,
	int month,
	int year,
	int cvc;
};

// ... 
json payload = check request.getJsonPayload();
// The next line shows typesafe parsing of JSON into an object
Payment|error p = <Payment>payload;
match p {
    Payment x => {
        io:println(x); 
        res.statusCode = 200; 
        // return the JSON that has been created
        res.setJsonPayload(check <json>x); 
    }
    error e => { 
        res.statusCode = 400 ; 
        // return the error message if the JSON failed to parse
        res.setStringPayload(e.message);
    }
    _ = caller -> respond (res);
}

```

Also, all the endpoints that we use for network interactions are type safe. Which means they have strongly typed parameters and returns, which are enforced with compile-time checking validates the types. 


## Asynchronous and Parallel 

Ballerina’s execution model is composed of parallel execution units known as workers. As we discussed earlier worker represents an execution of a given actor in an interaction between multiple endpoints. By default, a given resource or function comes with an implicit worker and you can add multiple workers as required and define the worker interactions too. 

For example, you can define multiple workers in your code and workers can interact with each other by sending and receiving messages. The message sending(e.g. (i, k) -> w2;
) happens fully asynchronous and even if you expect to receive a message, you need to explicitly do that in your code (e.g. j <- w2;) 


```ballerina
worker w1 {
    int i = 100;
    float k = 2.34;
    io:println("[w1 -> w2] i: ", i, " k: ", k);

    (i, k) -> w2;

    json j;
    j <- w2;
    string jStr = j.toString();
    io:println("[w1 <- w2] j: ", jStr);
}

worker w2 {
    int iw;
    float kw;
    (int, float) vW1;
    vW1 <- w1;
    (iw, kw) = vW1;
    io:println("[w2 <- w1] iw: " + iw + " kw: " + kw);

    json jw = { "name": "Ballerina" };
    io:println("[w2 -> w1] jw: ", jw);
    jw -> w1;
}

```
Ballerina also offers native support for fork-join, which is a special case of worker interaction. In this case, you can fork the logic and offload the execution to multiple workers and conditionally join the result of all workers inside the join clause.


```ballerina
 fork {
    worker w1 {
        int i = 23;
        string s = "Foo";
        io:println("[w1] i: ", i, " s: ", s);

        (i, s) -> fork;
    }

    worker w2 {
        float f = 10.344;
        io:println("[w2] f: ", f);
        f -> fork;
    }

} join (all) (map results) {
    int iW1;
} 

```

Ballerina also supports asynchronous invocation of function or endpoints.  Although most of the synchronous invocations external endpoints are implemented on the fully non-blocking manner in Ballerina, there are certain situations that you have to invoke an endpoint or function asynchronously and later check for the result.  



```ballerina
future<http:Response | error> f1
     = start nasdaqServiceEP
           -> get("/nasdaq/quote/GOOG");
 io:println(" >> Invocation completed!"
     + " Proceed without blocking for a response.");

// ‘await` blocks until the previously started async
// function returns.  
var response = await f1;
```

For such requirements you can invoke a function or action with ‘start’ and later, once you require the result of the invocation, you can you ‘await’. 

## Comprehensive development and deployment lifecycle 
Ballerina is not just a mere programming language, but it also defines a comprehensive development and deployment lifecycle that enables the developer productivity. 

### Tools and IDEs
Ballerina empowers the developers with IDE support with VS Code and IntelliJ. Ballerina composer, the web-based graphical and textual editor, enable the developers to code as well as model the high-level interactions graphically. 

### Build
The code you write using the development tools can go through the build process. The build process can have multiple phases including, building from source, unit and integration testing with Testerina; the test framework of Ballerina, generate deployment artifacts for the deployment platform (Docker or Kubernetes), generate executables (.balx) or libraries (.balo). 

![Development Lifecycle](./images/dev_lc_figure_2.2.png) 
*Figure 2*

Therefore, Ballerina natively supports every aspect of the development lifecycle. The Docker and Kubernetes annotations make the deployment artifacts and docker image generation a brisk. 

### Deploy
The developers can generate the deployment artifacts for the Ballerina code, just by annotating code with the suitable annotations of a deployment method of their choice. For example in the following code snippet, we have annotated code with Kubernetes annotations to generate deployment artifacts. 


```ballerina
import ballerina/http;
import ballerinax/kubernetes;

@kubernetes:Deployment {
    enableLiveness: true,
    singleYAML: true
}
@kubernetes:Ingress {
    hostname: "abc.com"
}
@kubernetes:Service {name: "hello"}
endpoint http:Listener helloEP {
    port: 9090
};


@http:ServiceConfig {
    basePath: "/helloWorld"
}
service<http:Service> helloWorld bind helloEP {
    sayHello(endpoint outboundEP, http:Request request) {
        http:Response response = new;
        response.setTextPayload("Hello, World from service helloWorld ! \n");
        _ = outboundEP->respond(response);
    }
}

```

So, during the build process the docker image and Kubernetes artifacts will be generated. 

![Deployment](./images/figure_2.3.png) 
*Figure 3*

Ballerina deployment choices are so diverse so that you can deploy it in a conventional VM or bare metal servers, Docker, Kubernetes and on a service mesh, f you are using a Service Mesh such as Istio. 


## Ballerina Central - The central registry 
Ballerina fosters reuse and sharing of its packages via the global central repository, Ballerina central. You can share, endpoint connectors, custom annotations, and code functions as shareable packages, by using push and pull versioned packages with Ballerina Central.

## Observable 
Monitoring, logging, and distributed tracing are key methods that reveal the internal state of the Ballerina code to provide the observability.  Ballerina provides out of the box capabilities to work with observability tools such as Prometheus, Grafana, Jaeger and Elastic Stack, with minimal configuration. 

## Conclusion
In this post, we have covered some of the key highlights of Ballerina, the cloud-native programming language for integrating microservices and endpoints. You can learn more about Ballerina at https://ballerina.io/learn/ and stay tuned for more post on Ballerina. 

