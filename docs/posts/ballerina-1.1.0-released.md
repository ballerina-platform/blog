---
title: Ballerina 1.1.0 Released!
author: Sameera Jayasoma
date: 20 Dec 2019
status: Published
abstract:  This blog outlines the improvements and feature additions to the Ballerina language introduced in the 1.1.0 release.
socialmediaimage: nihal-demirci-dVtnD1aV2QU-unsplash.jpg
---

# Ballerina 1.1.0 Released!

<p>We’re glad to announce the release of Ballerina 1.1.0 today. You can download it [here](https://ballerina.io/downloads/). There are significant improvements to the developer tooling, standard library modules, compiler, and runtime.</p>

<p>The following are some feature additions and improvements:</p>

<ul>
<li>The Ballerina tool — a command-line utility that manages Ballerina source code — now helps to keep your Ballerina installation up to date with the latest patch and minor releases. With 1.1.0, you can now install, update, and easily switch among Ballerina distributions. Read [how to keep Ballerina up to date](https://ballerina.io/learn/how-to-keep-ballerina-up-to-date/) for more details.</li>
<li>An enhanced IDE experience for decent-sized Ballerina projects. We’ve optimized the Ballerina language server and the compiler front-end by introducing caches at various levels to avoid repeatedly building untouched code. Moreover, these optimizations significantly reduce the response time for language intelligence features such as diagnostics and code completion in both VSCode and IntelliJ plugins.</li>
<li>Code navigation capability is now available in both the VSCode and the IntelliJ plugins. A function, method, constant, or type definition anywhere in your Ballerina project is a jump away. </li>
<li>The gRPC and WebSocket services and clients are now observable by default. This capability was only available in HTTP/HTTPS and SQL connectors in 1.0.0. The NATS connector has also been improved with observability support.</li>
<li>We have improved the runtime performance of Ballerina programs with an optimized runtime type checker and by introducing significant changes to Ballerina values such as maps, arrays, and records. </li>
<li>The Ballerina 1.1.0 release is based on the [2019R3](https://ballerina.io/spec/lang/2019R3/) language spec. We’ve closed many deviations from this spec that were in Ballerina 1.0.0. Some of you may come across errors when compiling your code (written with 1.0.x versions) with Ballerina 1.1.0, but they are minor changes.</li>
</ul>


<p>If you’d like to see a more detailed list of changes, you can check out the [Ballerina 1.1.0 release note](https://ballerina.io/downloads/release-notes/#110notes).</p>

<p>Your contribution helps! If you see any problems or future improvements in the language, don’t hesitate to [file an issue](https://github.com/ballerina-platform/ballerina-lang/issues). We are grateful to all those who contributed, by writing code or documentation, reporting issues, or giving feedback.</p>

<p>Happy coding!</p>
