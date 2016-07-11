---
layout: archive
status: publish
published: true
permalink: //carry/index.html
title: To have and to hold
excerpt: "Carry forth."
date: 2015-04-07
modified: 2015-10-02
image:
  feature: l/libations.jpg
tags: 
  - home
---

# Carry on my wayward son.

<div class="bullets">
	{% for post in site.categories.carry %}
        <div class="bullet three-col-bullet">
                <div class="bullet-icon">
                        <a href="{{ post.url }}"></a>
                </div><!-- /.bullet-icon -->
                <div class="bullet-content">
                        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                        <p>{{ post.excerpt | remove: '<p>' | remove: '</p>'}}</p>
                </div><!-- /.bullet-content -->
        </div><!-- /.bullet -->
        {% endfor %}
</div><!-- /.bullets -->
