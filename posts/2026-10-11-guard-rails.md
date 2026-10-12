---
status: draft
title: Guard rails for an AI whose code I can't read
date: 11 Oct 2026
tag: Field note
---

# Guard rails for an AI whose code I can't read

I've spent 15 years in California cannabis, first founding a medical delivery service, then a decade as a
wholesale broker, and now as managing partner of Pacific Wellness, a licensed dispensary in Sherman Oaks.
I'm not a developer. I build software anyway, and Claude writes the code.

My biggest build is SouthBay420: online ordering, a staff console and an in-store register for a licensed
California dispensary. It started as a pizza-ordering template on September 5. It has had 26 releases, it
has 168 automated tests, and Metrc validated it as a third-party integrator.

I can't read the code Claude writes, so I needed a way to trust it without reading it. On October 11 I
built guard rails around Claude. Some rules are now enforced by code: it can't run commands against the live
database, and it can't deploy without me. A check has to pass before Claude is allowed to say it's done, and then a
second AI, the reviewer, goes over the work.

The guard rails had a bug of their own before the reviewer ever ran: the check that is supposed to catch
unfinished work could miss an edit if it kept the file the same size within the same second. A test caught
it, failing 6 runs out of 8. Then the reviewer earned its place on day one. It found 9 problems, then 6
more that the fixes had opened. Every one was fixed with a test that fails on the broken version.

I think the job now, for someone like me, is knowing what good looks like and building the system that
holds the AI to it. I don't think that's proven yet, and I'm writing down how I build as I go.

No store runs on SouthBay420 yet. My bar for going live is months in the Metrc
sandbox with no errors I can't fix, and every feature at least as good as what's on the market.
