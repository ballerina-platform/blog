---
layout: blog-post
title: Introducing Natural Programming
author: Rania Khalaf, Maryam Ziyad, Sasindu Alahakoon, Sameera Jayasoma, Sanjiva Weerawarana
published-date: 17 Mar 2025
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2025-04-17-introducing-natural-programming/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

Something fundamental is shifting in programming.

In Jan 2023, Andrej Karpathy [tweeted](https://x.com/karpathy/status/1617979122625712128?lang=en) "The hottest new programming language is English". 

Attempts to make interfacing with machines more human are nearly as old as the personal computer. And it's been multi-modal all along: The mouse let us touch them; Siri let us talk to them; GitHub Co-pilot let us code with them; ChatGPT let us dream with them.  With machines able to read, write, and potentially execute natural language as well as code, this is a time for a fundamental rethink of the role that natural language plays in the processes and tools of Software Development.

In 1979, [Dijkstra](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html) wrote lamenting the "foolishness of coding in natural language". In 1984, [Knuth](http://www.literateprogramming.com/knuthweb.pdf) introduced the concept of Literate Programming, realized in the WEB system, and envisioned a day when code could win a Pulitzer. In 2007, [Barton](http://freesoftwaremagazine.com/articles/focus-software_as_art/) wrote that coders are creating an "exciting new literary genre" so enjoyable we may want to "read them in the bathtub."  And most recently in 2024, [Jensen Huang](https://www.youtube.com/watch?v=-k9igtK5D-0) followed Andrej's sentiment saying "the programming language is human".

It suddenly feels like the gap has disappeared. It feels like it but it's not quite right.

We believe that we are now finally able to smoothly blend both formal symbolism along with its determinism and clarity and natural language along with its ambiguity and nuance, making programming incredibly more expressive. 

We call this "Natural Programming" as the combination of "Natural Language" and "Programming Language".  If you prefer symbols to words, we can rephrase the origin idea as:

<img alt="Natural Programming" src="/images/natural-programming/np_derivation.png">

We are acutely aware that natural language is vague and code is succinct, that there is a lot of programming logic that is simply faster and easier to write in code. Hence we do not aim to switch from code to language but instead to meld the two together for the benefit of not only the programmer but also business owners and end users.

Realizing Natural Programming is pinned on the ability of and opportunities in bringing Generative AI into the programming system itself, especially into the runtime of the language. To this end, we are experimenting with extending the open-source [Ballerina programming language](https://ballerina.io/).

Let's look at what happens if we could use natural language to define what a program block should do, the way we use code today.

## Natural Language as Code

Runtime Natural Language as code, what we call **"Natural Expressions"** and **"Natural Functions"** are blocks of natural language instructions that are executed at runtime with the help of a Generative AI model. The instructions may be multimodal and so are not limited to text. Natural functions allow convenient typing of Generative AI interactions, with the return type of the function being used both to specify the format of the response expected from the GenerativeAI model  (e.g., as JSON schema) and to bind the response automatically to the expected type.  

This is not to be confused with using natural language prompts to generate code. 

### Example 1: Finding jokes

Consider the following Natural Expression. At runtime, the value assigned to variable `x` is substituted into the prompt in place of `${x}`, and the returned joke is saved in the string variable `s`.

```ballerina
string|error s = natural { Tell me a joke about ${x} };
```

This approach allows for natural language within the code that is treated as part of the executable logic. This increases the expressivity of the program, allowing developers to decide whether to use code or language depending on what is best for achieving their objective.

### Example 2: Structured responses

In this example we illustrate how we work with structured types.

Here, we seek to find the name, year of birth, and the sport they excelled in of an athlete born in a particular decade and whose name contains a particular name. 

```ballerina
type Person record {|
    string firstName;
    string lastName;
    int yearOfBirth;
    string sport;
|};

string nameSegment = "Simone";
int decadeStart = 1990;

Person|error p = natural {
    Who is a popular athlete born in the decade starting from 
    ${decadeStart} with ${nameSegment} in their name?
};
```

### Example 3: Natural language as the function body

Next, consider an example of a Natural Function that retrieves interesting places to see in a particular country to use as part of planning a trip.  This is much easier to handle via Generative AI than in code. The `getPlacesToSee` function is implemented as a Natural Function. Its body describes the selection criteria and it returns an array of `Place` records that can be used elsewhere in the code.

```ballerina
type Place record {|
    string city;
    string name;
    string highlight;
|};

function getPlacesToSee(string country, string interest, int number = 3) 
                                                      returns Place[]|error => natural {
    Tell me the top ${number} places to visit in ${country} which are 
    good for a tourist who has an interest in ${interest} to visit and 
    include a highlight one-liner about that place
};

Place[] places = check getPlacesToSee("Australia", "adventure");
```

### Comparison to using API calls to LLMs

Note that unlike with using prompts to generate code, in these examples we execute the prompt as code at runtime to ask the LLM to produce a value. Note that the evaluation of a `natural { }` expression binds the response to the desired type and does not just return strings.

This can of course be implemented in any language using API calls to an LLM. However, that takes away the clarity of being able to think about the program in both natural language and code simultaneously as the mechanics of API invocations, error handling and data wrangling obfuscate the intention of defining part of the program's behavior in natural language. Recent work like [Instructor](https://github.com/instructor-ai/instructor) and structured output support in the OpenAI APIs have emerged to handle mapping LLM responses to structured outputs addressing only part of the problem.  Natural programming uplifts the level of abstraction.

## Natural programming in Ballerina

Ballerina is an open-source, general-purpose programming language specifically designed and optimized for writing network-distributed applications and integrations. It features a structural type system and supports union types and open records. This provides flexibility, especially when dealing with data from diverse systems, while still maintaining static typing benefits. In particular, any non-behavioral Ballerina value has a natural JSON serialization. 

To create a seamless developer experience for incorporating natural language into the code, we extend Ballerina's grammar and implementation as shown below.

### Syntax

We introduced a new kind of expression to Ballerina: a natural expression. The syntax is as follows:

```ballerina
natural { Natural language text }
```

A natural expression is a block of natural language text enclosed within `natural { }`. The natural language text can include interpolations to substitute variables into the prompt.

```ballerina
natural { Natural language text with ${interpolations}. }
```

Since Ballerina already had the ability for the body of a function to be a single expression (called expression-bodied functions), this automatically extends to functions whose entire body is a natural language statement as follows:

```ballerina
function f(R r, S s) returns T|error => natural { .. };
```

If there are no interpolations in the natural language text, we inject the arguments specified for the parameters (against the parameter name) into the prompt.

We provide a binding to a default Generative AI service at the system level, while allowing developers to set it if needed by specifying a model (`m`) in the natural expression.

```ballerina
import ballerina/np;
import ballerinax/np.openai;

configurable string model = ?;
configurable string token = ?;

np:Model m = check new openai:Model(
    {connectionConfig: {auth: {token}}},
    model
);

string s = natural (m) { Natural language text with ${interpolations}. }
```

### Implementation

Ballerina supports [dependent-typing](https://ballerina.io/learn/by-example/dependent-types/), allowing the return type of a function to depend on a function parameter. Natural expressions are mapped to such a dependently-typed function, allowing natural expressions to be dependently-typed.

With natural expressions, we use the expected type to infer the structure of the response that is expected from the LLM and incorporate it into the call to the LLM to strictly return values that are of that type. The code generated by the compiler during the de-sugaring phase of the compiler checks that the returned (JSON) value can be converted to the desired type, converts it, and returns that value. 

For the curious, a set of samples of Natural Programming in Ballerina is available [here](https://github.com/ballerina-platform/module-ballerina-np/tree/dev/examples). 

## Relation to AI Agents and Vibe Coding

Natural language as code may, at first look, seem like a way to define agents: it enables a program to interact with LLMs, connect to knowledge bases, refer to memory, and potentially inline calls to tools. However it does not have a reasoning framework built into the code call. Our goal is not to replace or compete with agents but rather to bring the power of writing instructions in natural language and have them execute via the vast "knowledge" of an LLM. Natural Language as code can be used in writing AI Agents but is not at this time aiming to be an agent building framework. Today, users wanting to build agents in Ballerina are directed to the [Ballerina AI Agent Library](https://github.com/ballerina-platform/module-ballerinax-ai.agent).

[Vibe coding](https://x.com/karpathy/status/1886192184808149383) is a recent style of programming that encourages application developers to explore, experiment, and tinker using LLM tools to build desired logic and experiences. In vibe coding, source code is generally viewed as an intermediate representation that is not the focus of development. Vibe coding can also be used to generate natural programs instead of just traditional source code. Thus, we see vibe coding as orthogonal to the goal we have of incorporating natural language and code into a single programming system.

## Where do we go from here

We are still in the early days of Natural Programming. 

Future work in supporting natural language as code includes exploring enhanced multimodal support and the implications on and evolution of testing in a natural programming setup. We are experimenting with a 'compile-time' version that uses an LLM at compile time to inject code, effectively making compile-time prompts first class. 

We see Natural Programming extending across the Software Development Lifecycle (SDLC) to cover the various roles that natural language plays in the different stages of development of a system, illustrated below. 

<img alt="Natural Programming in the SDLC" src="/images/natural-programming/np_sdlc.png">

Going beyond using LLMs at various stages of software design and implementation, we see the ability to process documents as conveniently as code being the driver of a major change in how we develop software. This approach will impact the traditional Software Development Lifecycle and will result in natural language and code working in concert to build more effective systems. We will cover the rest of the stages in future posts. 

While the implementation we have done is in Ballerina, any programming language and system could be extended to support Natural Programming and the entire Natural Development Lifecycle for any language.   

## Ready to try it out or interested to contribute?

The upcoming release of Ballerina Swan Lake Update 13 will include experimental support for natural expressions. If you prefer a visual low code experience, Natural Programming is also underpinning Devant by WSO2, an AI iPaaS. 

Ballerina is open source with a vibrant global community of developers and contributors. Join the community, discuss, or contribute code.
