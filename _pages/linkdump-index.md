---
layout: archive
title: Ye Olde Linkdump
category: pages
date: 2016-07-01
modified: 2016-07-01
permalink: /linkdump/index.html
---

## Noteable and related off-site resource locators

I collect a lot of links on [pinboard](https://pinboard.in/u:emory), but I'd like to roll some of them up into collections here for readers of this site.

{% assign sorted = (site.linkdump | sort: 'date') | reverse %}
{% for link in sorted %}
<a href="{{ link.url }}" class="archive__item-meta float-right">{{ link.date | date: '%B %d, %Y' }}</a>
<a href="{{ link.link }}" class="archive__item-title">{{ link.description }} <small>🔗</small></a>
<blockquote>{{ link.content }}</blockquote>
{% endfor %}
