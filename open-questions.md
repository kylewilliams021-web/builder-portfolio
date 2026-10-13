# Open questions

Gaps only I can fill, answered in short interviews. When one is answered, the answer goes into the page
that asked, and the question is deleted from here. The website build refuses to run while any published
page still has an unanswered [ask] or an unapproved [OK?].

## Redesign (2026-10-13): these block the build

- [ ] **Canna Cash, the facts disagree.** The old live site says the program is 500 printed cards with
      "no customer database". The app at cash.pacificwellness.uk looks customers up by name or phone. The
      portfolio page says the store "wasn't running a loyalty program" and dates it Aug 6 to Sep 17; the
      build records have it live by July 29. What's the true story: were the card program and the app the
      same thing, one after the other, or two different programs? (The `[ask]` on the home page.)
- [ ] **Field note dates.** When was the overnight repricing, and what 90-day window is the promotions
      analysis from?
- [ ] **Store numbers in the promotions note** (gross profit per day, $8,000 a year, the vendor credit
      totals, free goods' share of gross profit). They were on the old live site. Still OK to publish?
- [ ] **The loyalty design story** from the old site (Kohl's Cash structure, 88,179 phantom points, $28.80
      threshold): bring it back as a field note once the Canna Cash story is straight?
- [ ] **A real photo of the TVs in the store** for the TV case study (no customer faces).
- [ ] Headline: "man of the AI era" or "person of the AI era"? (AI's take: keep "man", it's how you said it.)

## Small checks

- [x] The TV-menu service the store paid $250 a month: GetSeed (the site says "a screen service").
- [ ] Customer job, in my words: "a site that knows me and recommends products well, but that's easy to
      explore fully if I want to." Right?
- [ ] My LinkedIn URL for the site.
- [ ] Where the TV screen app lives today (folder, tool), so it can get its own repository.

## Showcase

- [ ] Record the 2–3 minute walkthrough (`showcase/walkthrough-script.md`).
- [ ] Demo site with sample data: a separate copy (its own Cloudflare project and database) filled by the
      demo script, which I upload. Decide the address (e.g. demo.southbay420.com).

## Before going public

- [ ] Delete `private/`.
- [ ] Canna Cash's public repository: it needs a real README (it's one line today); the temporary
      diagnostic endpoint marked "remove after verifying" should go; and its history is mostly "Add files
      via upload". A hiring manager will click it first.
- [ ] Re-read every page for internal IDs, customer data and unapproved numbers.
