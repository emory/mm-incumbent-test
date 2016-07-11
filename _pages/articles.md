---
layout: archive
permalink: /articles/index.html
title: "Articles"
date: 2014-06-02T12:26:34-04:00
modified: 2016-06-28
excerpt: "The finer things."
share: true
ads: false
feature:
  visible: true
  headline: "Featured Articles"
  category: articles
---

## Articles and Essays

{% for post in site.categories.articles %}
  {% include archive-single.html %}
{% endfor %}

## Thinking Out Loud

{% for post in site.tags.post %}
<article itemscope itemtype="http://schema.org/CreativeWork">
  <a class="archive__item" href="{{ site.url }}{{ post.url }}">
  <div class="archive__item-body">
  <h1 class="archive__item-title" itemprop="headline">{{ post.title | markdownify | remove: '<p>' | remove: '</p>' }}</h1>
    <div class="archive__item-meta">
     <span class="date published" itemprop="datePublished"><time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%B %d, %Y" }}</time></span>
{% assign readtime = post.content | strip_html | number_of_words | divided_by:site.words_per_minute %}
   <span class="archive__item-time"><svg class="icon"><use xlink:href="#icon-stopwatch"></use></svg> {% if readtime <= 1 %}1{% else %}{{ readtime }}{% endif %} min read</span>
    </div>
    <p class="archive__item-excerpt" itemprop="text">{{ post.excerpt markdownify | strip_html | strip_newlines | escape_once }}</p>
  </div>
  </a>
</article>
{% endfor %}

