# Canna Cash — loyalty and referrals for Pacific Wellness

**In short.** A store-credit loyalty and referral program for Pacific Wellness, a licensed California
dispensary, connected to the store's Blaze point-of-sale. Customers check their balance on a public page.
Staff add members, credit and redeem, log referrals and sync purchases from Blaze. Built August 6 –
September 17, 2026; It was my first product, and the one that started everything: I've mostly set it aside since, but _"it's the
project that sparked the passion."_

## The problem

**[ask]** What made you build it, and what did the store use before?

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
  per keystroke to 0.03 seconds at 19,500 transactions **[OK?]**.
- **[ask]** Why Supabase and Blaze? What did you decide not to build?

## How it was built

Built with AI on Cloudflare Pages (a small server function) and Supabase (the database), with the Blaze
Partner API for POS data. An "agentic deploy loop" stamped each build, so the AI could deploy and confirm
which version was live. **[ask]** How did you test it with staff?

## What it led to

SouthBay420's loyalty plan deliberately keeps Canna Cash separate. **[ask]** What did Canna Cash teach you
that changed how you built SouthBay420?

## Evidence

Public repository: `kylewilliams021-web/pacific-wellness-canna-cash`. Tidy it before linking it (see
[open questions](../open-questions.md)).
