---
layout: blog-post
title: Ballerina Swan Lake is on the Horizon
author: Ballerina Team
published-date: 14 December 2021
status: Published
socialmediaimage: SwanLake-04.jpeg
permalink: /posts/announcing-ballerina-swan-lake-beta6/
---

Two years ago, we started incorporating key integration features on top of the[2019-R3](https://ballerina.io/spec/lang/2019R3/) language specification. As Sanjiva pointed out in this [blog](https://blog.ballerina.io/posts/announcing-the-first-preview-of-ballerina-swan-lake/), the 2019-R3 specification provided a solid foundation but new integration features triggered us to introduce a few changes to make the foundation better.

We announced the first preview of this major new version—Ballerina Swan Lake—in June 2020, the [first beta](https://blog.ballerina.io/posts/announcing-ballerina-swan-lake-beta1/) in June 2021, and then five more beta releases. The continuous feedback we received from the community helped us to uncover bugs and identify usability issues to shape Swan Lake into what it should be.

Phew, it’s been a long journey!

Now, we’re excited to announce that Swan Lake is nearly done, and we’ll be releasing the GA in January 2022. We’ll take the rest of the year to smooth out the remaining rough edges. 

## Introducing the New Ballerina Version-String Scheme

Swan Lake is the code name of this major release, and we plan to use the name of a popular ballet as the code name for each major release, such as Nutcracker, Giselle, and so on—you get the idea. 

Along with the code name, we’ll adopt a new time-based versioning scheme to precisely communicate version-specific information such as the release time, compatibility, and significance,  of a given release. This new versioning scheme will take the format below.

>`$YYMM.$UPDATE.$PATCH ($CODE_NAME)`

- `$YYMM` - The release year and month. 
- `$UPDATE` - A number starting from 0 and incremented with each compatible update release of a major release. Such releases can have minor features, bug fixes, etc. 
- `$PATCH` - A number starting from 0 and incremented with each emergency release (to fix critical issues) of an update release.
- `$CODE_NAME` - The name of a famous ballet. Neither the update releases nor the patch releases affect the code name. 

The below are some examples.

The Swan Lake GA release, which is scheduled to be released in January 2022 will be versioned as:
`2201.0.0 (Swan Lake)`

The first patch release of Swan Lake GA: 
`2201.0.1 (Swan Lake)`

The first update release of Swan Lake GA: 
`2201.1.0 (Swan Lake Update 1) `

The second update release of Swan Lake GA: 
`2201.2.0 (Swan Lake Update 2) `

The first patch release of the second update release of Swan Lake GA:
`2201.2.1 (Swan Lake Update 2)` 

When we release the Nutcracker GA release in January 2023, it will be versioned as:
`2301.0.0 (Nutcracker)`

Nutcracker’s first update release:
`2301.1.0 (Nutcracker Update 1)`

Giselle GA, if released in February 2024: 
`2402.0.0 (Giselle)`

The future looks promising, don’t you think?

2021 has been a fruitful year thanks to the hard work of our team and the encouragement from our supporters. Our heartfelt thanks go out to every member of our community, and we look forward to your continued support in the coming year as well. 2022 will be exciting with a brand new major release and other notable developments for Ballerina. So, stay tuned! 

Happy holidays from all of us! 
  