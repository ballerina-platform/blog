---
layout: blog-post
title: Announcing the first preview of Ballerina Swan Lake
author: Sanjiva Weerawarana
published-date: 19 June 2020
status: Published
socialmediaimage: ballerina-358010.jpg
permalink: /posts/announcing-the-first-preview-of-ballerina-swan-lake/
---

#### _Ballerina is getting a makeover!_
<br/>
We started work on Ballerina almost 4 years ago, in August 2016. We released jBallerina 1.0, which implemented the 2019-R3 specification, in September 2019 and since then have released minor version updates every quarter and patch releases every two weeks.

Over the last year or so, we have been working towards incorporating key integration features to the language - features such as transactions, querying, streams, improving table support, improving database integration, improving XML support, and improving JSON support. There are more integration features that we are working on too!

Along the way, we realized that while the 2019R3 specification provided us a great foundation on which to build the integration features, we needed to make a few changes to make the foundation better. We know that making changes is hard on current users, thus we only made changes when we felt the benefits for the long-term potential of the platform outweighed the short-term cost.

__Hello Ballerina Swan Lake!__

Ballerina Swan Lake will be a major new version of Ballerina that we plan to release in January 2021. We will be doing major releases every 6 months from then on. We also plan to use popular ballet names as the codename for each release - so the 2021-07 release will be the Nutcracker release. We will announce details on maintenance of released versions and will also have an LTS release model similar to Ubuntu or Java.

Swan Lake will have some significant improvements in service typing as service creation and consumption are key goals of Ballerina and we are not convinced that we have done all we can for that yet. There are other things that will come too including improvements to the configuration architecture, improved “code to cloud” concepts, and distributed transactions support.

We are releasing Swan Lake Preview 1 as we announce this plan. Some of the core improvements in this preview include introducing nominal typing (called “distinct types”), improving error typing, introducing type intersection and adding readonly types. The transaction feature has been redesigned and significantly improved and a revised table type has been introduced along with a significantly enhanced integrated query language for iterable structures. The [release notes](https://ballerina.io/downloads/swan-lake-release-notes/) document provides full details on what is in preview 1. You can find the download for Ballerina Swan Lake Preview 1 after the stable version on the [download page](https://ballerina.io/downloads/).

We plan to release a preview every 2 weeks until we are feature complete for the full release and then go through the alpha / beta / RC cycle prior to the GA release in January.

With the Swan Lake plan, we are stopping future minor version releases of the 1.x family. Thus, jBallerina 1.2, released in March, will be the last minor release but we will continue to release patch versions as needed. We are currently at 1.2.4 and 1.2.5 is on the way.
