---
title: "The Missing Feedback Loop in AI UI Generation"
author: Aayushman Pratap
pubDatetime: 2026-07-21T00:00:00.000+00:00
slug: the-missing-feedback-loop-in-ai-ui-generation
featured: true
draft: false
tags:
  - AI
  - Frontend Engineering
  - React
  - TypeScript
  - Figma
  - Design Systems
  - Developer Workflow
description: "The problem wasn't generating UI from Figma. It was reviewing the same issues over and over again. This is how I changed my workflow by adding a feedback loop instead of writing longer prompts."
timezone: "Asia/Kolkata"
---

Over the last few months, I've been using AI to implement Figma designs in React and TypeScript.

The results have become surprisingly good.

Give the model a well-designed frame, and it'll usually produce something that looks very close to the original. At first glance, it almost feels like the problem has already been solved.

Until you open the code.

The UI looks right.

The code doesn't.

---

## The review never changed

It didn't matter which model I used.

Sometimes it was Claude.
Sometimes Cursor.
Sometimes another coding agent.

The implementation was visually convincing, but my review process always looked the same.

I'd find spacing values hardcoded into the component.

Typography that matched visually but ignored the project's scale.

Colors copied directly from Figma instead of using existing tokens.

Components that should have been reusable but weren't.

Margins and padding that worked for one screen but didn't belong anywhere in the design system.

None of these issues were particularly difficult to fix.

The problem was that I kept fixing **the same kinds of issues** every single time.

Eventually, I realized I wasn't reviewing code anymore.

I was repeating a quality assurance process.

---

## My first instinct was to improve the prompt

Like most people, I assumed the solution was better prompting.

So I started adding more instructions.

Use design tokens.

Don't hardcode colors.

Respect the typography scale.

Reuse existing components.

Prefer semantic spacing.

Don't introduce arbitrary values.

The output improved.

But not consistently.

Sometimes it followed everything perfectly.

Sometimes it ignored half of it.

Sometimes fixing one issue introduced another.

Longer prompts weren't solving the real problem.

Because the model had no way of knowing whether it had actually succeeded.

---

## The problem wasn't generation

At some point, I stopped thinking about prompts altogether.

The real problem wasn't generating the UI.

It was validating it.

Every implementation needed someone to answer the same questions.

- Does this actually match the design?
- Did it use the existing design system?
- Are these spacing values consistent?
- Could another engineer maintain this component six months from now?
- Is it visually accurate without sacrificing code quality?

Those aren't generation problems.

They're feedback problems.

---

## So I changed the workflow

Instead of trying to generate the perfect implementation in one shot, I built a workflow that could evaluate its own output.

The process became much simpler.

```text
Generate

↓

Capture the rendered section

↓

Compare it against the original Figma frame

↓

Identify concrete visual differences

↓

Apply fixes using the existing design system

↓

Repeat
```

The goal wasn't perfection.

The goal was measurable improvement.

Each iteration reduced the gap instead of hoping the first attempt would be perfect.

---

## The one rule

There was one rule I cared about more than anything else.

> Never introduce arbitrary pixel values just to match the design.

It sounds simple.

In practice, it's the easiest rule to break.

Let's say the comparison suggests something is roughly 30 pixels apart.

The fastest fix would be something like:

```tsx
mt-[29px]
```

Visually?

It works.

From an engineering perspective?

You've just made the codebase worse.

Instead, every change has to come from one of three places.

- Existing spacing tokens
- Existing color and typography tokens
- Existing reusable components

If none of those solve the problem, I don't hardcode the value.

I surface the gap instead.

Maybe the project needs a new design token.

Maybe an asset is missing.

Maybe the design system itself needs to evolve.

But I don't trade maintainability for a higher similarity score.

---

## Visual fidelity isn't the only metric

This was probably the biggest shift in my thinking.

Most AI-generated UI is optimized for one thing.

**Visual similarity.**

That's an important metric.

But it isn't the only one.

As frontend engineers, we're usually balancing several goals at the same time.

The implementation should:

- Match the design.
- Respect the design system.
- Stay maintainable.
- Be easy to extend.
- Fit naturally into the existing codebase.

Those constraints matter just as much as the pixels on the screen.

Sometimes the "closest" implementation isn't actually the best implementation.

---

## Why screenshots became useful

One thing I found interesting is that screenshots changed the conversation.

Instead of telling the model exactly what to change, I could show it the difference between what existed and what I wanted.

That shifted the workflow from instruction-driven to feedback-driven.

The model no longer had to guess whether the implementation was close enough.

It had something concrete to compare against.

The screenshot became a source of feedback rather than just a reference.

---

## It isn't perfect

This workflow still needs iteration.

Sometimes the generated layout takes the wrong direction.

Sometimes the comparison highlights symptoms instead of the underlying issue.

Sometimes there are legitimate gaps that can't be solved without introducing new tokens or updating the design system.

And that's okay.

The goal was never to eliminate human review.

It was to stop reviewing the same problems manually over and over again.

For me, that's been the biggest improvement.

Instead of spending my time fixing repeated spacing mistakes or replacing hardcoded values, I'm reviewing whether the implementation fits the system it belongs to.

That's a much more valuable use of my attention.

---

## Final thoughts

Before building this workflow, I thought the biggest improvements would come from better models or better prompts.

Instead, the biggest improvement came from changing the feedback loop.

AI is already very good at generating interfaces.

What it often lacks is a reliable way to evaluate whether those interfaces fit the engineering standards of a real codebase.

Adding that feedback changed the way I work far more than changing models ever did.

The interesting part isn't that AI can recreate a Figma design.

It's that we can build workflows that help it converge toward maintainable, production-quality implementations without giving up the principles that make a frontend codebase healthy in the first place.

I don't think this is the final answer to AI-assisted frontend development.

But it's the workflow I've found myself returning to over the last few months—and it's made the review process feel much more intentional than simply writing longer prompts and hoping for better results.