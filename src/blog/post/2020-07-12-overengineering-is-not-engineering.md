---
layout: "_layouts._post.html"
title: "Over-engineering is not engineering, it's worshipping"
description: "Few words about pragmatic software development."
---

I passionately hate over-engineering and trying to make things "future-proof". Future is your enemy: First of all, at some point in the future, you will be dead. And more seriously, it's impossible to know what's in it. I think my outburst (!) will sound very natural ...or you'll want to stab me after a few sentences because I have the impression that dogmatism has taken over our profession, especially when it comes to software design. When people are dogmatic, they go "WTF" on many pragmatic things that contradict their beliefs, follow a guideline immaculately, and also become more ferocious (which I exaggerate to murderous for the dramatic effect).

This (not the will to stab people, I mean being dogmatic) usually happens, when you reach a point in your experience and think that you've seen it all, and have the tendency to become an [expert-beginner](https://daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner/). You've seen a pattern, be it dependency injection through service containers, or connected components in the wonderful world of the Flux architecture, or leaning on the borrow-checking in Rust, or that the go statement being harmful, or that you should always have 100% coverage, or that all static methods need to die, or how important it is to normalize relational data, or how bad it is to use the NoSQL-de-jour, and decided it solves or summarizes all the problems in its context and all people should do as you do or they need to be stabbed? Well, you just started cargo-culting even when you seem to know what you are doing.

Over-engineering lives and breathes the dogmas, you refactor and refactor and read an article about how you did it all wrong (cough cough) and refactor again. Until it all becomes "immaculate" and "future-proof" and whatever.

I have a guideline to escape the tentacles of over-engineering:

1. Unless "reasons", avoid developing libraries in isolation. Libraries should be born out of complicated-problem-solving code. Do not extract code from complexity, especially if it's self-imposed.
   - [Why don't software libraries solve all our problems?](https://softwareengineering.stackexchange.com/questions/136309/why-dont-software-libraries-solve-all-our-problems)
   - [What makes a good software library?](https://www.thereformedprogrammer.net/what-makes-a-good-software-library/)

2. Do not try to add options for being future proof. Add exactly the flexibility that is needed NOW. Know that code can be rewritten. Make stuff abstract, but don't flex the implementations.
   - [You Aren't Gonna Need It (a.k.a. YAGNI)](https://www.martinfowler.com/bliki/Yagni.html)
   - [Stop future proofing software](https://blog.cerebralab.com/Stop_future_proofing_software)

3. Do not try to be DRY for no reason. Repeat yourself sometimes, and have some fun.
   - [Goodbye, Clean Code](https://overreacted.io/goodbye-clean-code/)
   - [Why do so many developers get DRY wrong?](https://changelog.com/posts/why-do-so-many-developers-get-dry-wrong)
   - [Too DRY - The Grep Test](http://jamie-wong.com/2013/07/12/grep-test/)
   - [When DRY Doesn't Work, Go WET](https://medium.com/better-programming/when-dry-doesnt-work-go-wet-6befda0444bf)

4. Try not to answer a technical question with answers like "Because that's how it needs to be done", or "Otherwise it wouldn't be clean".
   - [Goto and the folly of dogma](https://manybutfinite.com/post/goto-and-the-folly-of-dogma/)
   - [Software Development Dogma that needs to Die](https://thinkfaster.co/2015/11/software-development-dogma-that-needs-to-die/)
   - [What to do about dogma in a company culture?](https://news.ycombinator.com/item?id=17639685)
   - [Agile as a full-featured religious dogma](https://www.linkedin.com/pulse/agile-full-featured-religious-dogma-darius-blasband/)

In short: Trying to write code that you will never need to re-write is a fools errand.
