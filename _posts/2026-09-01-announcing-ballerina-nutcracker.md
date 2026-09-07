---
layout: blog-post
title: Announcing Ballerina Nutcracker
author: Waruna Jayaweera, Sameera Jayasoma
published-date: 01 Sep 2026
status: Published
abstract: A native, lightweight platform for the Ballerina language.
socialmediaimage: ballerina-generic-social-media-image-2023.png
permalink: /posts/2026-09-01-announcing-ballerina-nutcracker/
---

<style>.cBlogContent p{white-space: break-spaces !important;}</style>

*A native, lightweight platform for the Ballerina language*

Ballerina platforms are named after ballets. The first one is called Swan Lake. The second one, which we are introducing in this post, is called Nutcracker. So before anyone gets the wrong idea, this post contains no information about the Tchaikovsky ballet, and none about the thing in your kitchen drawer.

The aim here is to introduce Ballerina Nutcracker, explain why we built it, and be precise about how it relates to the Swan Lake platform you are already using. That last part is the one most likely to be misunderstood, so it is where we will spend the most time.

## Meet Ballerina Nutcracker

Nutcracker is a native implementation of the Ballerina platform. It is a new compiler, a new runtime, and a new standard library, written from the ground up in Go with a new architecture.

It starts in milliseconds. It runs in a few dozen megabytes of memory. It ships as a single self-contained binary, with no separate runtime to install. And it compiles to WebAssembly, which means Ballerina programs can now be compiled and executed inside a browser tab.

Today we are releasing Nutcracker 0.6, the first version we are opening up to everyone.

## Why we built a native platform

We have wanted a native Ballerina compiler for a very long time. It even had a name, nBallerina, years before it had any working code. It kept getting postponed for other priorities, as these things tend to. Nutcracker is us finally getting there, and the name is a small joke about exactly that. We cracked nBallerina.

Swan Lake is our production-ready platform — [previewed in 2020](https://blog.ballerina.io/posts/2020-06-19-announcing-the-first-preview-of-ballerina-swan-lake/) and [generally available since early 2022](https://blog.ballerina.io/posts/2022-02-01-announcing-ballerina-2201.0.0-swan-lake/) — and it is JVM-based all the way down. The compiler targets the JVM. Many of the standard library modules use Java interoperability underneath. Ballerina itself is not a JVM language, but the Swan Lake implementation targets the JVM.

It does, however, set a floor. A JVM has to initialize before your program can run, and it needs memory to do its work. If your program is a service that runs for weeks, that cost amortizes to almost nothing, and you will never think about it again. If your program is not that kind of program, you will think about it constantly.

And "not that kind of program" now describes a much longer list than it used to. A serverless function that runs for two hundred milliseconds and gets billed for its cold start. An edge device with a memory budget measured in tens of megabytes. A command-line tool that has to feel instant. A cloud IDE. A browser tab.

Nutcracker exists for those programs. Its compiler and its runtime are both native binaries, so your program starts when you start it, with no virtual machine to bring up first. That is what brings startup time, memory footprint, and distribution size down together.

## Two platforms, one language

The relationship is straightforward once you have the vocabulary. Ballerina is a [language specification](https://ballerina.io/spec/lang/2024R1/). Swan Lake is a platform that implements that specification on the JVM. Nutcracker is a platform that implements the same specification natively. Two platforms, one language.

In practice, this means your code can move between them. A program written for Swan Lake will run on Nutcracker, and a program written for Nutcracker will run on Swan Lake, as long as it stays within the language and the standard library. Source compatibility is a design goal we hold ourselves to, not something we intend to address later.

One genuine exception exists: interoperability. If your program binds to a Java library through Swan Lake's JVM interop, that code will not move to Nutcracker. If your program binds to Go or C through Nutcracker, that code will not move to Swan Lake. Interoperability is the place where the platform underneath necessarily shows through.

## Choosing between the two

Both platforms are here to stay, so the useful question is not which one wins. It is which one fits the program you are about to write.

Swan Lake will be the right answer for most of what you build today, and its biggest advantage is the JVM ecosystem. Decades of libraries, drivers, connectors, and tooling are all reachable from Ballerina through Java interoperability. If you are building a long-running integration service, and a JVM is perfectly acceptable wherever you are deploying it, then Swan Lake is the answer, and it will stay the answer. It is production-proven, and it is not going anywhere.

Nutcracker is for the cases where a JVM, or any additional runtime, is simply not an option. You need to deploy a single binary onto an edge device. You need a container image measured in megabytes, not hundreds of them. You are paying for cold starts. You want to put a Ballerina compiler inside a browser tab.

Choose by deployment target. The language you write is the same either way.

## Ballerina and WebAssembly

The WebAssembly support deserves its own section, because it is not a side effect of the design. It is one of the reasons the design looks the way it does.

It is what powers the new [Ballerina Playground](https://play.ballerina.io/). It compiles and runs Ballerina programs entirely in the browser. No server-side compilation, no per-user infrastructure to provision, and nothing to install before you start. Cloud development environments can offer the same full Ballerina editing and compilation experience and execute supported programs there as well.

## Ballerina Nutcracker 0.6

We have been building Nutcracker through a series of milestone releases. Version 0.6 adds HTTP service support, and that felt like the right moment to open the platform up.

There are three ways to try it.

**Run it in your browser.** Open the [Ballerina Playground](https://play.ballerina.io/), write a program, and run it. No installation and no waiting.

![Ballerina Playground running a program in the browser](/images/nutcracker-0.6/playground.gif)

**Download it.** The 0.6 distribution is available for Windows (x64), Linux (x64/ARM64), and macOS (x64/ARM64), from the [Ballerina Nutcracker downloads page](https://ballerina.io/nutcracker/#latest-release). Download it, unzip it, and run it. Nothing needs to be installed, and it will not interfere with an existing [Swan Lake](https://ballerina.io/downloads/) installation on the same machine.

**Read the source.** The [Ballerina Nutcracker GitHub repository](https://github.com/ballerina-nutcracker/ballerina) includes the code, the [milestones](https://github.com/ballerina-nutcracker/ballerina/milestones), and the [design discussions](https://github.com/ballerina-nutcracker/ballerina/discussions). Stars are appreciated.

## Under the hood

Here is how a `.bal` file moves from your editor to a running program — from the CLI, through the compiler and the runtime, and out to the host OS.

![How a .bal file becomes a running program](/images/nutcracker-0.6/architecture.png)

The entire toolchain is written in Go. The compiler, runtime, standard library implementations, and `bal` command itself are all Go code. Go compiles to a single statically linked binary with no runtime to install beside it; it cross-compiles cleanly to every platform we ship; it starts effectively instantly, and it targets WebAssembly.

The front end does what you would expect. It lexes and parses your source, resolves modules, and type-checks the result against the language specification. It emits BIR, Ballerina's intermediate representation. BIR is a typed, structured representation of your program, and the compiler produces it regardless of how you intend to run the program afterward.

Here is the part worth being plain about, because it is easy to describe imprecisely. Nutcracker's runtime is an interpreter, but it interprets BIR, not source code. By the time execution begins, the program has already been parsed and fully type-checked. In other words, Nutcracker is a BIR interpreter, not a source-code interpreter.

We do not generate machine code from your Ballerina program, and no JIT compiler warms up behind the scenes. When we call Nutcracker a native platform, we mean the compiler and runtime are native binaries, so there is no virtual machine to install or start. We do not mean that your Ballerina code is compiled ahead of time into machine instructions.

That distinction has a practical consequence worth stating honestly. For a long-running service under sustained load, Swan Lake on the JVM will generally give you better steady-state throughput, because a JIT compiler has time to do its work and an interpreter does not. What Nutcracker gives you instead is a program that is running before the JVM would have finished starting, in a fraction of the memory, from a single file. Which of those two things you want is exactly the choice described earlier in this post.

Everything the runtime touches outside itself goes through the PAL, a thin Platform Abstraction Layer covering IO, the filesystem, the OS, time, HTTP, and signals. The PAL is also what lets the same code run unmodified as WebAssembly inside a browser tab. The library, covering both the language modules and the standard modules, is resolved at compile time and wired in through extern calls whose implementations live in Go.

That is the architecture as it stands in Nutcracker 0.6, and it will keep evolving as new features and improvements land. The [architecture guide](https://github.com/ballerina-nutcracker/ballerina/blob/main/doc/guides/ARCHITECTURE.md) in the repository is where that design work happens in the open, and the best place to follow where it goes next.

## Interpret or build

Nutcracker gives you two ways to execute a program, both from the `bal` command line you already know.

**Interpreter mode.** `bal run` compiles your source to BIR and interprets it in the same step. This suits development, scripting, and the Playground, because you get edit-and-run feedback without a separate build stage.

**Executable mode.** `bal build` packages your program's BIR together with the Nutcracker runtime into a single binary for your target platform. The result is one file. No separate runtime, no external dependency, and nothing to install on the target system.

Take a simple HTTP service:

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

You can run it either way from the same source:

```
bal run     # interpret and run immediately
bal build   # produce a self-contained executable
```

The resulting executable drops straight into a minimal container image, or onto an edge device.

## What 0.6 supports

Version 0.6 already covers a substantial subset of the platform, including HTTP service support, an extensive type system, and multi-module project support, spread across the language, the runtime, packaging, tooling, and the standard library.

The [release notes](https://github.com/ballerina-nutcracker/ballerina/releases) from v0.1.0 through v0.6 have the full list.

## What is next

Nutcracker milestones will continue at a regular cadence, bringing broader language coverage, a richer standard library, deeper tooling support, and continued performance work.

All of this is tracked in the open on the [GitHub milestones page](https://github.com/ballerina-nutcracker/ballerina/milestones), where you can see what each release will contain, how it is progressing, and where your feedback can change what gets prioritized next.

## Try it and let us know

The fastest way to get a feel for Nutcracker is the [Playground](https://play.ballerina.io/). Write a program, run it in your browser, and notice how quickly it comes back. When you want more than that, [download 0.6](https://ballerina.io/nutcracker/#latest-release) and run it on your own machine.

We are building this in the open, and your feedback genuinely shapes where it goes next. [Report issues on GitHub](https://github.com/ballerina-nutcracker/ballerina/issues), or come and talk to the team on the [Ballerina Discord](https://discord.com/invite/ballerinalang).

We are curious about what you build. We are more curious about where you run it.
