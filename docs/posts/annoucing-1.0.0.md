# Announcing Ballerina 1.0

Ballerina is an open source programming language and platform for cloud-era application programmers to easily write software that <em>just works</em>.

After more than 3 years of hard work by an incredible team, I am thrilled to announce the general availability of Ballerina 1.0! 

You can read more about the language at https://ballerina.io/, download the release from https://ballerina.io/download and read the Release Notes for 1.0 [here](https://v1-0.ballerina.io/downloads/release-notes/#100notes).


## A bit of History

We in WSO2 started down a journey of “let’s make the ESB better” about 10 years ago. After many false starts, finally in 2016 we decided that the only real way to make integration programming dramatically better was to invent a full programming language. We figured, oh, it should take maybe 6-8 months and we’d be done.

We did [preview Ballerina at WSO2Con US in February 2017][1] - 6 months after the project started. We had promising stuff, working code and a cool story. We knew we’d be done in another 3-6 months.

[1]: https://wso2.com/library/conference/2017/2/wso2con-usa-2017-introducing-ballerina/

LOL!

Here we are about two and a half years later finally getting to release a GA 1.0 version of Ballerina! And boy, has it taken an effort. And time.

## What exactly is “Ballerina 1.0”?

That is an excellent question because it has a slightly complicated answer! 

The name “Ballerina” actually refers to a collection of things that collectively define what we refer to as the “Ballerina platform.” The key components and their respective version numbers are as follows:

- The Ballerina Language (2019R3 revision). This is the centerpiece of everything and is what ends middleware as we knew it. While the language had its origin with the limited vision of “let’s make integration programming better”, it has evolved into a unique, powerful, flexible, beautiful programming language that has the potential to be far far more than that. We have a long way to go to get there, but the seeds are awesome and the little plant looks damned good!
- The “language library” (or langlib for short) which is the core built-in library of functionality defined by the language specification itself.
- The jBallerina implementation (1.0.0 version) which provides a compiler that produces Java bytecodes as well as an implementation of the language library and the standard library.
- The “Batteries-included” Standard library that gives Ballerina programmers a flying start in writing network applications by giving them connectors to most widely used protocols, APIs and data formats. Each module has its own version number (!) - we will explain more about the versioning strategy in a future blog.
- Ballerina Central, the web service for publishing and sharing Ballerina modules over the Internet. This release is effectively version 2.0 of Ballerina Central.
- Fantastic plugins for VSCode and IntelliJ IDEA that allow developers to write Ballerina code in normal textual syntax and/or graphically as sequence diagrams. Both are hitting  version 1.0.0.
- A collection of tools to help developers organize and manage source code, to work with OpenAPI and gRPC and more. All of these will be part of the SDK which is version 1.0.0.

So in other words, “Ballerina 1.0” is a flock of components that are all being released together to become the first production quality release of the Ballerina platform!

## What a team!

We started on the focused Ballerina journey in 2016. Since then, the internal WSO2 team dedicated to Ballerina has easily <em>averaged</em> more than 50 people in engineering and other parts of the company who have rallied together to make Ballerina 1.0 a reality. There have been times when we “cloud bursted” the team to hundreds of people. There have been many many (really, FAR too many) times when the core team had to burn the midnight oil (and the weekend oil) to see this release to fruition.

Then there are all the WSO2 product teams who put their brains, heart and soul into contributing their knowledge to Ballerina. That obviously starts with the Enterprise Integrator team as that is where this baby was flirted with, dated and then conceived; the Stream Processor team and of course the Identity Server & Platform Security Teams who taught us that being secure means feeling insecure!

Ballerina was not just an effort from WSO2 engineering. The marketing team did amazing hard work to create an awesome website, create great branding and help promote the language all over the world even while it was still being developed. 

All parts of WSO2 contributed to make Ballerina happen.

There are no words to express the respect, the gratitude, the appreciation and the love I have for this incredible group of people who made this happen. 

WSO2 has always had crazy goals - and Ballerina is nothing less than our craziest effort. You guys make the impossible, possible.

Thank you guys: YOU made Ballerina happen.

## And to our early adopter users ..

Complex technology cannot become real until it gets battle tested. Ballerina has been lucky and incredibly blessed to have had an amazing group of people who came early to it and dove right in. Some of these (in particular those who are mentioned in the press release) went way beyond “taking it for a spin” and wrote real enterprise applications with it.

And then there’s one special group of people inside WSO2 who have been just fabulous: our own API Manager team. They willingly committed to rewriting our production API gateway in Ballerina in 2017 and took it to market in 2018! Thus Ballerina has been in production with many customers (often unbeknownst to them!) because of our fantastic API manager team that wrote it, rewrote it, and rewrote it as we kept changing the language on them!

And recently the Cellery team too has become a key early adopter and has pushed us to make things better in so many ways.

Thank you guys: YOU made Ballerina possible.

## Only the beginning ..

This is <em>just</em> 1.0. We set out with grand plans to bring pretty much all enterprise middleware into a programming language and we’re not there yet - so far we’ve pretty much wrestled down just the ESB. It is all coming though- so if you are in that space, be scared. It’s coming.

This also gives me the opportunity to comment on my own personal journey while working with Ballerina. I started it while I was the founding CEO of WSO2. Later I relinquished my CEO job and took on the role of Chief Architect (and Chairman) mostly so I could focus on Ballerina. Along the way James Clark, WSO2’s angel investor, creator of XML, XPath, XSLT, RelaxNG and various other things, joined the Ballerina effort and is now leading the design of the language. Earlier this year I stepped down from being the chairman and recently also from the WSO2 Board. I write this blog as a consultant to WSO2 as the Product Manager of Ballerina. 

Ballerina is big. It is going to be huge. Not just for WSO2 but for the industry. It will take time. We have a fantastic multi-generation team working on it and committed to seeing it through to fruition over the next several decades. This is <em>only</em> the beginning.

I could not be more proud of being in a position to lead this team in the first phase of Ballerina and to have the honor to write this blog.

In the coming months and years, we will all blog a lot more about various technical aspects of Ballerina and also various non-technical things that made it, and make it possible. Stay tuned for more!

Sanjiva Weerawarana, Ph.D.<br/>
Product Manager, Ballerina<br/>
Consultant to WSO2<br/>
Founder of WSO2 and formerly CEO, Chairman, Chief Architect, Board Member.
