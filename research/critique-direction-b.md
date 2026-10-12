# Critique of direction B and the first post (2026-10-12)

**Site:** 6/18. Direction B passes on no indigo, left alignment with radii that vary by role, a full-width lead project, readable dark text, no emoji and no animation. Its scale, weight and confidence are worth keeping. What still reads as generated is the look underneath: near-black with lime, Inter Tight with "techy" mono, a lime second line in the headline, a kicker label, a stat banner, 01/02/03 labels, a three-column "How I build" with lime top bars, and a "Let's build." closer. That is the stock "dark SaaS" template, and in cannabis the lime-on-black also reads as the stoner cliché.

- **must** — The palette is #0d0e0b near-black with #c8f560 lime. This is one of the two looks agents fall back to once purple is banned (check 3), and neon green on black is the stoner cliché for a cannabis person. The lime is not taken from anything in Kyle's life.
  - Change: Keep the dark ground and the high contrast, but replace the lime with one color sampled from a phone photo of a real object, such as Pacific Wellness's signage, its bag or packaging, or a kraft wholesale envelope. Give it a real name in the CSS (for example --pw-sign) and write on the colophon page where it came from. If no real object has a strong color, flip the page instead: thermal-receipt off-white or manila paper with black ink, and black or one sampled color as the only accent.
- **must** — The headline "17 years in cannabis. / Now I ship software." puts its second line in the lime accent (h1 .hl). The footer does the same with "Let's / build.". Krebs's checker flags this as the 'hero font mix' (check 4).
  - Change: Set the whole H1 in one color and keep the huge size, the 800 weight and the tight tracking, which give B its energy. Do the same for the footer heading. Let size and position create the emphasis, not color.
- **must** — Headings use Inter Tight, a member of the Inter family that the model converges on. JetBrains Mono is used as shorthand for 'technical' in the kicker, the labels and the hero aside (check 1). The '//' comment-syntax prefix plays at being a developer, which Kyle says plainly he is not.
  - Change: For headings, use a heavy face Kyle can give a reason for. Barlow Condensed (800/900) on Google Fonts is one option: its designer describes it as drawn from California's public signage (highway signs, license plates). Verify that description on the font's own page before quoting it on the colophon. Use regular Barlow, or a readable serif, for body text. Allow monospace only inside the receipt/manifest block, where it copies a real thermal printer, and drop the '//' everywhere.
- **must** — The kicker "// OPERATOR TURNED PRODUCT BUILDER" sits above the H1 (check 5), and the logo dot has a lime glow (box-shadow 0 0 14px), a colored glow (check 9).
  - Change: Delete the kicker. The H1 already says it. Remove the glow from the dot, or remove the dot and let the name stand alone.
- **must** — Four stats sit in a banner (17y / 26 / 168 / 3), cut off from what they explain and without dates (check 14). '3 products built with AI' counts the TV app, which has no content yet. The figure 26 appears twice (stats and chips).
  - Change: Remove the banner. Put the numbers in the SouthBay420 manifest block (next item) with a date. Drop '3 products'. Keep '17 years in California cannabis' in the H1 and the bio, where it reads as a fact rather than a metric.
- **must** — The site has no signature device from Kyle's working life (check 17). The rounded panels and pills could belong to any SaaS template.
  - Change: Make one manifest- or receipt-style header block the site's only device, used at the top of every case study and in short form on the homepage card. Set it with square corners, ruled lines, tabular figures and label:value fields. For SouthBay420, use only documented facts: PRODUCT Online ordering + register / STORE licensed California dispensary / STATUS In development, no store runs on it yet / RELEASES 26 (latest 1.21-1.23, Oct 1-7 2026) / TESTS 168 automated / DB CHANGES 26 migrations / HOST shop's own Cloudflare, upgrades by one ZIP / GO-LIVE BAR months in Metrc sandbox with no errors I can't fix. Add nothing else decorative.
- **must** — The register screenshot is tilted (rotate -1.2deg) and has a heavy drop shadow, the Dribbble mockup trope. It has no caption, and the screen holds demo data that a reader could take for real sales (check 13).
  - Change: Show it flat and full width at real size, with a caption: 'The register, demo shop with sample data. October 2026.' Later, add one or two real, uncorrected phone photos from the back of the house with date and place captions and no customer faces, for example the register's first test print or the label printer.
- **must** — The lead project's heading is the codename 'SouthBay420'. With 'Now I ship software' and '26 releases shipped', a reader may think it runs a store. The project doc says it doesn't, and that Pacific Wellness is moving to Dutchie.
  - Change: Lead with what it is: 'Online ordering and a register for a licensed California dispensary'. Put 'SouthBay420' second, as a small label, and put the 'in development, no store runs on it yet' status in the manifest. Saying this openly earns more trust than leaving readers to assume it.
- **must** — The Canna Cash figure '2.7 s → 0.03 s search' is still marked [OK?] in README.md, meaning it is not yet approved for publishing. Shown without its context, it is just a decorative number.
  - Change: Keep it off the page until Kyle approves it. Once approved, place it with its context: 'Balance search: 2.7 s → 0.03 s per keystroke, at 19,500 transactions.'
- **must** — The TV screen app card says 'Something new for the store floor' and 'Coming soon'. It is an empty slot, and it creates a two-card row whose second card holds nothing.
  - Change: Remove the card. Mention the TV app on a /now page once Kyle can say one real sentence about it. Canna Cash then stands alone under the lead project, at a smaller size, which also makes the ranking clearer.
- **should** — The section order follows a SaaS funnel (check 15): numbered labels 01 / 02 / 03 on items that are not a sequence, a three-column 'How I build' block that plays the 'How it works' role, and a 'Let's build.' call to action at the end.
  - Change: Remove the numbers ('01 / FLAGSHIP', '02', '03 / IN PROGRESS'). Replace the three columns with one section whose heading makes a claim (see copy changes), followed by two or three plain sentences about the guard rails and the 15-mistakes fact. End with a plain contact line instead of a slogan.
- **should** — Each 'How I build' column has a 3px lime border on its top edge (.how div border-top). This is the accent-stripe tell (check 8), and it is not marking a real status.
  - Change: Remove the stripes. If the section needs separation, use the same 1px rule as the rest of the page.
- **should** — The post teaser has max-width 40em at 17px, roughly 85-90 characters per line, which is too wide (check 16). The card shows 'OCT 2026 · BUILD LOG' with no exact date and no state tag.
  - Change: Set reading text to about 65ch on the homepage and on post pages, with no surrounding panel. Label the post '11 Oct 2026 · Field note' (or whatever tag Kyle chooses in his own words).
- **should** — There is no /now page and no colophon page (writing checks 16 and 17), even though 'who did what' is the core of Kyle's story.
  - Change: Add a /now page with a visible 'last updated' date (Loyalty ladder in progress, TV app, Metrc sandbox). Add a colophon in plain words: Kyle decides and tests, Claude writes the code, a reviewer agent checks it, it is hosted on Cloudflare, plus the typeface and the color source with their reasons, and two things that didn't work (Kyle supplies these). Link both from the footer.
- **could** — Every section has the same 96px top padding, and the lead project gets about the same visual weight as the cards below it.
  - Change: Give the SouthBay420 case more room (manifest block plus a full-width flat screenshot) and tighten the minor sections. Uneven spacing shows someone decided what matters most.
- **could** — Nothing yet measures the AI-look objectively (check 18). I estimate the current page would trigger about six of Krebs's patterns: accent word in the hero, headline badge, stat banner, numbered labels, colored glow and side border. I did not run the checker.
  - Change: After making the changes above, run github.com/AdrianKrebs/ai-design-checker on the homepage, aim for 0-1 flags, and re-run it after every redesign.

## Copy changes

- "// OPERATOR TURNED PRODUCT BUILDER" → "(delete)" _(It is a kicker label above the H1, it repeats what the H1 says, and the '//' plays at being a developer.)_
- "17 years in cannabis. / Now I ship software. (second line in lime)" → "17 years in California cannabis. Now I build its software, with Claude. (one color)" _(Adding 'California' makes it specific to Kyle. 'With Claude' discloses how the work gets done right in the headline, and one color removes the hero font-mix tell.)_
- "Not a developer by training. / In the AI era, I don't have to be one to ship. (in mono)" → "I'm not a developer by training. I make the product calls and test every workflow myself; Claude writes the code inside guard rails I designed." _(The original is Kyle's own line, but set as a quotable one-liner in mono it reads like a slogan. Merged into the bio it reads as a plain statement of who does what.)_
- "17y / 26 releases shipped / 168 automated tests / 3 products built with AI" → "(remove the banner; put 26 releases, 168 tests and 26 migrations in the SouthBay420 manifest with 'latest 1.21-1.23, Oct 1-7 2026')" _(A stat banner is a tell. These numbers belong next to the project they describe, with a date, and '3 products' counts an unfinished one.)_
- "01 / FLAGSHIP · SouthBay420" → "Online ordering and a register for a licensed California dispensary · SouthBay420, in development, no store runs on it yet" _(Lead with what it is and put the codename second. Stating the status keeps the claims honest.)_
- "chips: 26 releases · Purchase limits · ID checks · Security-hardened" → "Daily purchase limits with a meter that locks Charge · ID checks · Edible potency caps · Outside security review, fixed in 1.19" _('Security-hardened' is puffery. The replacements are specific California rules and a dated fix that anyone can check.)_
- "Online ordering, delivery tracking, loyalty, a staff console and an in-store register for a California dispensary, with state compliance built in." → "Online ordering, delivery tracking, loyalty, a staff console and an in-store register for a licensed California dispensary. It started as a pizza-ordering template. It runs on the shop's own Cloudflare account and upgrades by uploading one ZIP." _('State compliance built in' fails the swap test. The pizza-template origin and the one-ZIP upgrade are odd, true details that only this project has.)_
- "Store credit and referrals for Pacific Wellness, connected to the store's point-of-sale. My first product. · 2.7 s → 0.03 s search" → "Loyalty and referrals for Pacific Wellness, connected to Blaze. My first product, built in six weeks. (Add 'Balance search: 2.7 s → 0.03 s per keystroke, at 19,500 transactions' only after Kyle approves it.)" _(This uses the same name for the thing as README.md, names the real POS and gives a real build time. The speed figure is still awaiting approval.)_
- "03 / IN PROGRESS · TV screen app · Something new for the store floor. · Coming soon" → "(remove; mention on /now once there is one real sentence)" _(An empty placeholder card is exactly what a template produces.)_
- "How I build · Problem first / Frameworks out loud / Guard rails on the AI" → "Heading: 'Claude writes the code. I built the checks it has to pass.' Body: 'Hooks refuse dangerous actions, a check runs before Claude may say it's done, and a second AI reviews its work. On the reviewer's first day it found 15 problems; each was fixed with a test.'" _(This replaces label headings and a triplet with one claim, and the claim comes with a number. 'Every product started from something I saw at my own store' fails the swap test until Kyle gives a real example, which README.md still marks [ask].)_
- "Building in public · OCT 2026 · BUILD LOG" → "Writing · 11 Oct 2026 · Field note" _(Gives an exact date and a state tag in Kyle's own words. 'Building in public' is a stock label.)_
- "The hard part isn't getting AI to write code. It's trusting code you can't read. On day one, the reviewer AI caught 15 mistakes in the first one's work." → "I can't read the code Claude writes, so I built guard rails around it. On its first day, the reviewer caught 15 mistakes." _(Removes an 'isn't X, it's Y' contrast frame, the most persistent AI writing tell, and uses one name per thing (Claude, the reviewer).)_
- "Let's / build. · Let's talk (nav)" → "Footer heading: 'Email me.' Nav button: 'Email'. Optional line under it, if Kyle wants it public: 'I'm open to product roles in cannabis tech.'" _('Let's build' and 'Let's talk' are stock SaaS closers. Whether to say publicly that he is looking for a role is Kyle's decision, given he runs Pacific Wellness.)_

**Post:** 8/15 applicable checks (the /now and colophon checks are site-level). Passes: no reveal setups, no puffery, no invented frameworks, list lengths OK, no empty hedges, no never-list words, claim-style title, no em dashes. Fails: two contrast frames ('isn't X. It's Y', 'by code, not just instructions'), arrow bullets plus hashtags, a quotable closer and a vague 'Next:' line, rotating names (my AI / the first AI / a second AI / the reviewer), one generic paragraph, no admitted mistake by Kyle, and an overclaim ('This year I shipped a full dispensary system', when no store runs on it).

## Post rewrite

Guard rails for an AI whose code I can't read

I've spent 17 years in California cannabis, first in wholesale brokering and now as managing partner of Pacific Wellness, a licensed dispensary. I'm not a developer. I build software anyway, and Claude writes the code.

My biggest build is SouthBay420: online ordering, delivery tracking, loyalty, a staff console and an in-store register for a licensed California dispensary. It started as a pizza-ordering template. It's had 26 releases and has 168 automated tests.

I can't read the code Claude writes, so I needed a way to trust it without reading it. This weekend I built guard rails around Claude. Some rules are now enforced by code: it can't delete or reset the live database, and it can't deploy without me.

A check has to pass before Claude is allowed to say it's done. Then a second AI, the reviewer, goes over Claude's work. On its first day the reviewer caught 15 mistakes, and every one got fixed with a test.

I think the job now, for someone like me, is knowing what good looks like and building the system that holds the AI to it. I'm going to write up how I build, in public, as I go.

No store runs on SouthBay420 yet, and that's on purpose. It goes live after months in the Metrc sandbox with no errors, or only errors I can fix, and once every feature is at least as good as what's on the market.

## Notes

- Removed: both contrast frames, the three arrow bullets, the hashtags, and the quotable closer. The post now ends on the go-live bar, which is a concrete open problem in Kyle's own words from the interview. The coding AI is called 'Claude' and the second one 'the reviewer' throughout, so no names rotate.
- Accuracy fix: the draft said 'This year I shipped a full dispensary system'. The project doc says no store runs on it, and the dates of releases 1.1.1-1.13 are still [ask], so 'this year' can't be backed up. The rewrite drops both and adds 'no store runs on it yet', which is stated in projects/southbay420.md.
- Accuracy fix: 'never touch the live database' became 'can't delete or reset the live database'. That matches the actual rule in the repo's CLAUDE.md; the hooks block destructive actions, not all access.
- The 15 mistakes: docs/build-log/2026-10.md shows they came from two review rounds on 11 Oct 2026: 9 problems in the first round, then 6 gaps that the fixes themselves had opened. They were found in the harness work itself. If Kyle wants a more specific line, 'it found 9 problems, then 6 more that the fixes had opened' is accurate and more credible. The same entry records a finish-line check that missed edits in 6 of 8 runs. That was the AI's mistake, not Kyle's.
- Still missing per the checklist, and only Kyle can supply it: one mistake of his own with its consequence (for example a call he got wrong while building the harness). I did not invent one. Add it as one short paragraph before the 'I think the job now' line.
- Date: 'this weekend' is Sat-Sun 10-11 Oct 2026 (the harness commits are dated 11 Oct). If the post goes up after this week, change it to 'On October 11'. On the site, show the post date as 11 Oct 2026 with a state tag such as 'Field note'.
- Kyle's call: he told us his background is 'mostly wholesale brokering in the legacy market'. Saying 'legacy market' plainly is the strongest insider credential he has, but whether to put it in public is his decision. Likewise his line 'I'm addicted to building' fits his voice and could open or close the post if he wants it.
- LinkedIn format: no em dashes, no one-line paragraph stacks, no bullets, and no 'Thoughts?' at the end. If he wants a hashtag, use one at most.

## Measured (2026-10-12)

Scored with Adrian Krebs's open-source checker (github.com/AdrianKrebs/ai-design-checker; 14 deterministic
"AI design" patterns; lower is better), run locally on the same machine:

| Page                              | Score | Patterns flagged                                                  |
| --------------------------------- | ----- | ----------------------------------------------------------------- |
| Direction C (operator)            | 36    | Templated font, hero font mix, accent stripe, stat banner, badge  |
| Direction B (bold), first version | 21    | Hero font mix, accent stripe, perma dark                          |
| Direction A (editorial)           | 7     | Hero font mix                                                     |
| New site, dark theme, home        | 0     | none                                                              |
| New site, paper theme, home       | 0     | none                                                              |
| New site, dark theme, case study  | 7     | Perma dark (a dark site with no light option)                     |
