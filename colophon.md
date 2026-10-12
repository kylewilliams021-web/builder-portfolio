---
title: Colophon
---

# Colophon

How this site and the products on it get made.

## Who does what

I describe what the shop needs, make the product calls and test every workflow myself. Claude
(Anthropic's AI) writes the code. A second Claude agent, the reviewer, checks the work against the
project's rules before it's committed. Hooks I set up refuse the actions that must never happen, such as
running commands against the live database or deploying without me, and the tests run automatically before Claude is
allowed to say it's done.

## Type and color

Headings are set in Barlow. Its designer, Jeremy Tribby, describes it as drawing "from the visual style
of the California public," sharing qualities with "the state's car plates, highway signs, busses, and
trains". I've lived and worked in California my
whole career, so it fits. The pale accent is the off-white of thermal receipt paper, the paper register
receipts print on. The receipt-style blocks on the case studies use a monospace face because
register printers do.

## Built and hosted

The site is plain HTML and CSS generated from the Markdown pages in my portfolio repository, with no
framework and no tracking. It's hosted on Cloudflare Pages and updated by uploading one ZIP, the same
way I ship SouthBay420. A build check refuses to publish any page that still has an unanswered question
or an unapproved number in it.

## Two things that didn't work

1. **The finish-line check that missed edits.** The first version of the check that runs before Claude
   may say it's done compared files in a way that could miss a same-size edit made within the same second.
   Its own test caught it, failing 6 of 8 runs. It now compares from scratch every time.
2. **The first design of this site.** I picked a dark page with a lime green accent because it looked the
   least like AI. Research I commissioned showed that near-black with neon green is AI's second default
   once you ban the purple one, and a cannabis cliché besides. The colors you see now come from real things
   instead.
