---
layout: blog-home
title: Blog
---
<h1>Ballerina Blog</h1>

> This is the Ballerina corporate blog, which brings you announcements and information on Ballerina releases. You can find more blogs on Ballerina in our [community-driven Tech Blog](https://medium.com/ballerina-techblog).

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