---
layout: "_layouts._post.html"
category : code
modified: 2013-05-31
tags : [javascript, code, project euler]
---

## The Problem

I hate clichés but there we go:

What is the 10 001st prime number?

## The Solution

Let's try a one-liner this time:

    var a=[],b;for(b=2;10001>a.length;b++)a.some(function(c){return 0==b%c})||a.push(b);console.log(a.pop());
	
yay.