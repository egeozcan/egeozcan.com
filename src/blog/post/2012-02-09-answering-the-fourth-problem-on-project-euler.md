﻿---
layout: "_layouts._post.html"
category : code
modified: 2013-05-31
tags : [javascript, code, project euler]
---

Yet another Project Euler problem, solved with rather brute force. I simply
became too business process oriented to develop clever solutions to mathematical
problems, maybe? =)

## The Problem

Finding the largest palindrome made from the product of two 3-digit numbers.

## The Solution

<script src="https://gist.github.com/1788749.js"> </script>
    
Sorry for the lack of elegance. <del>The most interesting thing to learn while coding
this was finding out that <code>parseInt([x,y,z,z,y,x].join(""))</code> was much
faster than <code>(x*100001) + (y*10010) + (z*1100)</code> in JavaScript. Hmm.</del>

<p><strong>Edit:</strong> It probaby was a weird issue that I had. `parseInt` trick doesn't work anymore.</p>