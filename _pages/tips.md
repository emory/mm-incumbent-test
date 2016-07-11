---
layout: archive
status: publish
permalink: //tips/index.html
published: true
title: Just the Tip
excerpt: "The max of min/max"
date: 2015-04-07
modified: 201504071108
image:
  feature: l/libations.jpg
tags: 
  - index
toc: true
---

# Pro Tip:

<div class="bullets">
{% for post in site.categories.tips %}
  {% include archive-single.html %}
{% endfor %}
</div><!-- /.bullets -->
