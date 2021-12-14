---
layout: blog-home
title: Ballerina Blog
description: This is the Ballerina blog which will give regular updates on the programming language releases and other significant announcements.
keywords: ballerina, blog, programming lanaguage, ballerina blog
---
<h1>Ballerina Blog</h1>

> This is the official Ballerina blog. You'll find official release announcements and other important news related to Ballerina here. For blog posts written by the members of our community on various topics around Ballerina, see the community-driven [Tech Blog](https://medium.com/ballerina-techblog).

<ul class="cBlogList">
  {% for post in site.posts %}
    <li>
      <p class="cDate">{{ post.published-date }}</p>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="cAuthor">{{ post.author }}</p>
      <p>{{ post.abstract }}</p>
      <!-- {{ post.excerpt }} -->
    </li>
  {% endfor %}
</ul>
