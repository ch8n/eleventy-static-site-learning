---
tags: ['bbk', 'feat']
layout: bbk/detail/index.njk
title: bbk1 | chetangupta
date: 2020-11-16
headline : BBK#1 Find Middle Element
subline : can you make it clean?
banner : https://picsum.photos/id/1081/600/400
permalink: /bbk3.html
avatar: ./images/avatar.png
featTabId : 2
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