---
layout: bbk/base_home.njk
title: Home | Big-Brain-Kotlin
pagination:
  data: collections.bbk
  size: 1
  alias: bigbrainkotlin
---


<ul>
{%- for bbk in bigbrainkotlin reversed -%}
  <li {% if page.url == post.url %} aria-current="page"{% endif %} >
    {{ bbk.data.headline }} : <a href="{{ bbk.url | url}}">here</a>
  </li>
{%- endfor -%}
</ul>
