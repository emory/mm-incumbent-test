---
layout: archive
status: publish
published: true
permalink: /pages/index.html
title: Resources and Pages
excerpt: "Papers, business papers."
date: '2013-05-13 15:25:00'
modified: '2015-09-06'
feature:
  visible: true
  headline: "Non-article pages, guides, and lists."
  category: resources
image:
  feature: utilitybox.png
  credit: Emory Lundberg
tags: 
  - pages
  - resources
---

Pages upon pages. These are more like *documents*, structured lists[^un], or scribbles into a notepad more often than what I would consider a post or an article. They can and often do get updates as events warrant.

[^un]: Or completely un-structured lists. Six of one, and all.

{% for post in site.categories.pages %}
  {% include archive-single.html %}
{% endfor %}

