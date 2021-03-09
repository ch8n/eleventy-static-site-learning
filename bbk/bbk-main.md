---
layout: bbk/home/index.njk
title: Home | Big-Brain-Kotlin
permalink: /
pagination:
  data: collections.bbk
  size: 10
  alias: bigbrainkotlin
---


<!-- article card -->
{%- for bbk in bigbrainkotlin reversed -%}

<!-- one card container -->
<div class="transform hover:-translate-y-6 hover:shadow-xl rounded-xl shadow-md border-2 overflow-hidden m-4">
    <div onclick="window.open('{{bbk.data.permalink}}')">
    <div class="bg-yellow-500 h-52 overflow-hidden">
        <img class="object-cover w-full h-full" src="{{bbk.data.banner}}" alt="">
    </div>
    <div class="px-4 py-2">
        <p class="text-sm mt-2">{{bbk.data.tags[0]}}</p>
        <p class="text-xl mt-1">{{ bbk.data.headline }}</p>
        <p class="text-base mt-1 truncate">{{ bbk.data.subline }}</p>
    </div>
    </div>
</div>
       
{%- endfor -%}

