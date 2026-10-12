# Loyalty and referrals for Pacific Wellness, connected to Blaze

**In short.** A store-credit loyalty and referral program for Pacific Wellness, a licensed California
dispensary, connected to the store's Blaze point-of-sale. Customers check their balance on a public page.
Staff add members, credit and redeem, log referrals and sync purchases from Blaze. Built August 6 –
September 17, 2026. It was my first product, and the one that started everything: I've mostly set it aside since, but _"it's the
project that sparked the passion."_

## The problem

Pacific Wellness wasn't running a loyalty program, and the owner wanted to explore what was possible
before paying a vendor like Alpine IQ. So I built one.

## What it does

- **Customer balance lookup.** A public page where customers check their Canna Cash balance. It's
  rate-limited and gated, so balances can't be scraped.
- **Staff tools.** Find a member by name or phone. Add a member, add or redeem credit with a reason, log
  a referral by code or referrer name. CSV import and export.
- **Tiered earning.** The percentage earned depends on the customer's purchase history. Tiers and rates
  live in the database, so they change without a new deploy.
- **A budtender speed pass.** A counter flow keyed on the sale total: type the total and the app works out
  the earning.
- **Sync from Blaze.** A staff-only connection to the store's POS (the Blaze Partner API), with keys kept
  server-side.

## Decisions and tradeoffs

- **Rates as data, not code.** The owner can change earning tiers without a developer.
- **Speed at the counter.** The September release rebuilt the balance index. Search went from 2.7 seconds
  per keystroke to 0.03 seconds at 19,500 transactions.
- **Supabase, to learn it.** I chose it for the database partly to learn it, and I'm still learning. Blaze
  because it was the store's POS.

## How it was built

Built with AI on Cloudflare Pages (a small server function) and Supabase (the database), with the Blaze
Partner API for POS data. An "agentic deploy loop" stamped each build, so the AI could deploy and confirm
which version was live. I tested it the way I test everything: staff ran the real workflow.

## What it led to

SouthBay420's loyalty plan deliberately keeps Canna Cash separate. The lesson that shaped everything after it: _"Having it not integrated with the POS was a pain point I
didn't want to build further to overcome."_ So SouthBay420 puts loyalty inside the register.

## Evidence

Public repository: `kylewilliams021-web/pacific-wellness-canna-cash`. Tidy it before linking it (see
[open questions](../open-questions.md)).
