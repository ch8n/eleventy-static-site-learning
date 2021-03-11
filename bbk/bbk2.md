---
tags: ['bbk', 'feat']
layout: bbk/detail/index.njk
title: bbk2 | chetangupta
date: 2020-11-16
headline : BBK#2 Find Middle Element
subline : can you make it clean?
banner : https://picsum.photos/id/598/600/400
permalink: /bbk2.html
avatar: ./images/avatar.png
featTabId : 1
---

```kotlin
fun getMiddle(word : String) : String {
	val chars = word.toCharArray()
	val mid = chars.size/2
	return  if(chars.size%2==0){
	    "${chars.get(mid-1)}${chars.get(mid)}"
	}else{
	    "${chars.get(mid)}"
    }
}
```    