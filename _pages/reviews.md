---
layout: archive
permalink: reviews/index.html
status: publish
published: true
title: Reviews
excerpt: "Finding things I like."
date: 2015-04-07
modified: 2016-06-06
image:
  feature: l/libations.jpg
tags: 
  - home
---

# Reviews and product commentary.

<div class="bullets">
{% for post in site.categories.review %}
  {% include archive-single.html %}
{% endfor %}
</div><!-- /.bullets -->
