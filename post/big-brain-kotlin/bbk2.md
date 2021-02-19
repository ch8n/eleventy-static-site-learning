---
tags: bbk
layout: bbk/base_detail.njk
title: bbk2 | chetangupta
date: 2020-11-18
headline : BBK#2 Find Max and Min
subline : can you minimize the complexity?
---

```kotlin
fun highAndLow(numbers: String): String {
    val numbs = numbers.split(" ")
    var max  = numbs.get(0).toIntOrNull() ?: -1
    var min  = numbs.get(0).toIntOrNull() ?: -1
    numbs.forEach { num ->
        val currNumb = num.toIntOrNull() ?: -1
        if(currNumb > max){
            max = currNumb
        } 
        
        if (currNumb < min){
            min = currNumb
        }
    }
    return "${max} ${min}"
}
```    