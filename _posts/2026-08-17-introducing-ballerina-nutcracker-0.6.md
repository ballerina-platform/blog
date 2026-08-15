---
layout: blog-post
title: "Introducing Ballerina Nutcracker: Native, Lightweight Ballerina"
author: Waruna Jayaweera
published-date: 17 Aug 2026
status: Published
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2026-08-17-introducing-ballerina-nutcracker-0.6/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

Ballerina has always been about making the network feel native to the language - services, listeners, structured data, and concurrency constructs are woven into its grammar. Today, we are extending where that experience can live.

Meet **Ballerina Nutcracker**: a new native implementation of the Ballerina platform that starts in milliseconds, runs in a few dozen megabytes of memory, and fits comfortably into edge, serverless, and other resource-constrained environments - including right inside your browser.

## Why Nutcracker?

Ballerina already provides a powerful programming model for building cloud-native integration applications. Its language constructs, type system, and standard library are designed around network-distributed systems, making it an excellent choice for APIs, services, and integration workloads.

We wanted to extend that experience to environments where every millisecond of startup time and every megabyte of memory counts: web browsers, cloud IDEs, edge platforms, serverless functions, command-line tools, and other resource-constrained settings.

Unlike the Swan Lake runtime, which runs on the JVM, the **_native implementation_** allows Ballerina programs to run directly on the underlying platform, either through a lightweight interpreter or as a compiled native binary. This approach reduces the runtime overhead of starting and maintaining the execution environment, enabling faster startup, lower memory consumption, and a smaller overall footprint, while preserving the Ballerina programming experience developers already know.

The result is Ballerina Nutcracker: a native implementation of the Ballerina language - compiler, runtime, and standard library - written from the ground up with a new design and architecture. Nutcracker ships as a self-contained native distribution, with nothing else to install. It also compiles to WebAssembly, which is what powers the new Ballerina Playground.

Cloud development environments can provide a full Ballerina development and compilation experience directly in the browser, while supported Ballerina programs can also be executed there through WebAssembly. This reduces infrastructure cost and complexity while making the developer experience feel instant. On the other end of the spectrum, the same fast-startup, low-memory characteristics allow Nutcracker to fit serverless platforms, edge computing, and short-lived cloud-native workloads within a much smaller resource budget.

Nutcracker complements Swan Lake; it does not replace it. Both target the same [Ballerina language specification](https://ballerina.io/spec/lang/2024R1/), making source compatibility a core design goal as Nutcracker progressively expands its language and library coverage. Swan Lake remains the fully featured, production-proven distribution, while Nutcracker explores a much smaller native execution footprint.

## Ballerina Nutcracker 0.6

Today, we're thrilled to announce Ballerina Nutcracker 0.6, our new native Ballerina compiler, runtime, and standard library. We have been building Nutcracker through a series of milestone releases, and 0.6, adding HTTP service support, is the first one we're opening up for everyone to try.

There are three easy ways to get started:

- Run it in your browser. The new [Ballerina Playground](https://play.ballerina.io/) compiles and runs Ballerina programs entirely in the browser using WebAssembly - no server-side compilation, no installation, no waiting.
- [Download](https://ballerina.io/nutcracker/#latest-release) it. Grab the 0.6 distribution for Windows (x64), Linux (x64/ARM64), or macOS (x64/ARM64) from the Ballerina downloads page. It is a single self-contained archive - download it, unzip it, and run it. There is nothing to install, and it will not interfere with an existing Ballerina Swan Lake installation on your machine.
- Explore the source. Visit the [Ballerina Nutcracker GitHub](https://github.com/ballerina-nutcracker/ballerina) repository to browse the code, follow the milestones, join the [design discussions](https://github.com/ballerina-nutcracker/ballerina/discussions) — and don't forget to **star** the repo.

![The Ballerina Playground](/images/nutcracker-0.6/playground.gif)

*The Ballerina Playground — write, run, and invoke a Ballerina HTTP service entirely in the browser at play.ballerina.io*

## Under the Hood

Here's how a .bal file moves from your editor to a running program - from the CLI, through compile and run, and out to a host OS or the browser.

<img alt="How a Ballerina .bal file becomes a running program: write, compile, run, then host OS or browser Playground" src="/images/nutcracker-0.6/architecture.jpg">

*Write, compile, and run the same .bal program on a host OS or in the browser Playground*

Ballerina source compiles to BIR, Ballerina's intermediate representation, and Nutcracker's interpreter runs that BIR directly. The Ballerina compiler emits BIR either way; bal build packages that BIR with the Nutcracker runtime into one standalone binary that can be deployed in server mode.

Everything that binary touches outside itself goes through the PAL, a thin Platform Abstraction Layer, which is also what lets the same code run unmodified as WebAssembly right inside a browser tab. The Library, covering the language and standard modules, is resolved at compile time; pure Ballerina modules are linked directly, while modules that need native code are wired in through extern calls at runtime. Ballerina Central is the remote registry the toolchain reaches out to only when fetching dependencies. For a closer look at how all these pieces fit together, see the full [architecture guide](https://github.com/ballerina-nutcracker/ballerina/blob/main/doc/guides/ARCHITECTURE.md).

## Running Your Program: Interpret or Build

Nutcracker gives you two ways to execute Ballerina programs, both from the familiar bal command line:

- **Interpreter mode**. `bal run` compiles your source to Ballerina's intermediate representation (BIR) and interprets it in the same step. This is ideal for development, scripting, and the Playground - you get instant edit-run feedback with no separate build stage.
- **Executable mode**. `bal build` packages your program's BIR together with the Nutcracker runtime into a single, self-contained binary for your target platform. The result is a single binary you can ship and run directly - no separate runtime, no external dependencies, nothing else to install on the target system.

For example, take a small HTTP service:

```ballerina
import ballerina/http;

service / on new http:Listener(8080) {
    resource function get greeting/[string name]() returns http:Response {
        http:Response resp = new;
        resp.setTextPayload(string `Hello, ${name}! Running on Nutcracker.`);
        return resp;
    }
}
```

Run it either way from the same source:

```shell
bal run      # interpret and run immediately
bal build    # produce a native executable
```

The resulting executable drops straight into a minimal container image or onto an edge device.

## What Nutcracker Supports

The 0.6 release already covers a substantial subset of the Ballerina platform, including HTTP service support, an extensive type system, and multi-module project support, across the language, runtime, packaging, tooling, and standard library. Please find the [release notes](https://github.com/ballerina-nutcracker/ballerina/releases) from v0.1.0 to 0.6 for the full list of supported features.

## What's Next

The 0.6 release is a beginning, not a destination. Nutcracker is developed through a [milestone-driven](https://github.com/ballerina-nutcracker/ballerina/milestones) approach: rather than implementing the whole language at once, each release implements a well-defined subset of the Ballerina language specification. That lets us ship something usable and verifiable at every step while steadily working toward full language coverage.

Milestones continue regularly, bringing broader language coverage, a richer standard library, deeper tooling support, and continued performance improvements.

All of this is tracked in the open on the GitHub milestones page, where you can see what each release will contain, how it is progressing, and where your feedback can influence what gets prioritized next.

## Try It and Let Us Know

The fastest way to experience Nutcracker is the Ballerina Playground - write a Ballerina program and run it right in your browser. When you're ready for more, download 0.6 and take it for a spin on your own machine.

Nutcracker is being built in the open, and your feedback will directly shape where it goes next. [Report issues on GitHub](https://github.com/ballerina-nutcracker/ballerina/issues) or chat with the team on the [Ballerina Discord](https://discord.com/invite/ballerinalang). We can't wait to see what you build - and where you run it.
