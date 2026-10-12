# Doesn't look or read like AI — checklist

From a six-agent research project on 2026-10-12: why AI-made design and writing look the same, and how
to make mine not. Every page, post and design in this portfolio is checked against it. Full findings and
sources: `not-ai-research.json`.

## Principles

- Being specific matters more than being different. Avoiding purple is not enough, because coding agents fall back to a second set of defaults (cream with an oversized italic serif, or near-black with neon green). Every color, typeface and layout choice should trace back to something in Kyle's real working life.
- Show evidence instead of decoration: real photos, real screenshots, exact dated numbers, named people and places. A model cannot produce these without making them up, and readers reward them.
- Every visible choice needs a one-sentence reason Kyle can state, and the colophon page writes that reason down. A choice with a reason reads as taste. A default with no reason reads as generated.
- Rank things instead of repeating them. Equal cards, equal padding, a triplet in every list and the same sentence shape everywhere all tell the reader nobody decided what mattered most. Let the most important project and the most important claim take more room.
- Show you belong through fluency with how the business works, not through cannabis imagery. Operator vocabulary, compliance constraints, Metrc and the move from the legacy market to licensing prove you are an insider. Leaves, puns and slang prove you are not.
- Say openly that Claude does the coding, and say exactly what it did. Plain disclosure plus specific detail earns more trust than hidden polish, and suspected AI costs about half of reader trust whether or not it is true.

## Added by Kyle (2026-10-12)

- [ ] No trailing tags: a short phrase hung on the end of a sentence after a comma ("Now I build
      software for it, with Claude.", "No store runs on it yet, on purpose."). Spotted by Kyle as "Claude
      speak 101". Headlines carry no commas at all. The site build warns on both.

## Design checks

- [ ] Headings use a typeface that is not Inter, Roboto, Open Sans, Lato, Geist or the system sans. No page uses Space Grotesk, Instrument Serif, Syne or Fraunces as its default face. Monospace is not used as shorthand for 'technical'. _(Anthropic's own guidance names Inter, Roboto, Open Sans and Lato as what its model converges on, and admits it still drifts to Space Grotesk. Krebs's checker flags the trendy alternatives as the new defaults.)_
- [ ] No indigo or violet (Tailwind indigo-500 or violet family) on buttons, links or backgrounds, and no blue-to-purple gradients anywhere. _(Adam Wathan (creator of Tailwind) publicly apologized for indigo-500 making 'every AI generated UI on earth' indigo. Krebs scores indigo/violet calls to action as a standalone AI pattern.)_
- [ ] The palette is neither of the 'second set' of defaults: not cream (~#FAF7F2) with an oversized italic serif headline and a terracotta accent, and not near-black with a bright green accent (~#22c55e). Any green on the site is a named color sampled from a real object, such as packaging or store signage. _(Practitioners report that agents switch to these two looks as soon as purple is banned. Near-black with neon green is also the stoner cliché, so it is doubly risky for a cannabis person.)_
- [ ] The hero headline is one solid color. It has no gradient-clipped text (bg-clip-text) and no single word swapped into an italic, a second font or an accent color. _(Krebs lists both 'gradient-clipped hero text' and 'hero font mix' as deterministic AI patterns, and component libraries ship them as one-line drop-ins.)_
- [ ] Nothing floats above the H1: no pill badge, eyebrow chip, kicker label or pulsing 'New / Now live' dot. _(Krebs ('Headline badge') and Impeccable's detector ('hero-eyebrow-chip') both flag it. It usually holds empty news.)_
- [ ] The hero and all reading text are left-aligned. At least two different border radii are used by role, or corners are square throughout. Section padding is not identical on every section. _(The anti-slop ban list names 'center alignment for everything', 'identical border radius everywhere' and 'symmetric padding everywhere'. These uniform values are what a utility-class generator produces when no one makes a call.)_
- [ ] No row of three equal cards with an icon in a rounded square over a two-word title. The lead project is shown at a visibly larger size (full width) than the others, and no card sits inside another card. _(Three is the model's pick when nobody gave a number. Impeccable lists identical card grids, icons in rounded squares and nested cards as top tells.)_
- [ ] No card has a colored stripe of 3px or more on one edge, except for a real status (an alert, a failed compliance check). _(Impeccable calls the side-tab accent border 'the single most recognizable tell of AI-generated UI'. Krebs's checker and a React Doctor lint rule both detect it automatically.)_
- [ ] There are no glass panels (backdrop-blur over translucent fills), no colored glow shadows on buttons or cards, and no blurred gradient blobs or 'aurora' orbs behind the hero. _(Krebs flags glassmorphism and colored glow, and Impeccable's CLI detects dark glows. Generated design kits literally prescribe '2-4 blurred color blobs', so these add depth without meaning anything.)_
- [ ] If any page is dark, body text is near-white and passes WCAG AA (4.5:1). There is no grey-on-black paragraph text (the zinc-400 look), and the black is tinted toward the brand color. _(Krebs flags 'Perma dark: dark background with muted grey body text' as a pattern. It is the Linear look copied whether or not it suits the brand, and it is also hard to read.)_
- [ ] Headings, nav, buttons and bullets contain no emoji, and the ✨ sparkle icon is not used to mean AI. Any icons come from one consistent set and always sit next to a text label. _(Krebs's checker flags emoji in nav, and the ban list calls emoji in headings unprofessional. Nielsen Norman Group shows that ✨ says 'AI happens here' and nothing about what actually happens.)_
- [ ] When you scroll the page, sections do not all fade up into place, nothing bounces or uses elastic easing, there are no pulsing dots, and there is no auto-scrolling logo strip. With prefers-reduced-motion on, nothing moves. _(Impeccable and the darthv95 gist list fade-up on every element, bounce easing and constant animation as tells that designers 'can spot in one scroll'. Anthropic recommends at most one well-orchestrated reveal on page load.)_
- [ ] Every image is a real photo or real screenshot with a date-and-place caption. There are zero AI-generated images, zero stock photos, no Corporate Memphis flat people and no glossy 3D isometric renders. _(Generated and stock imagery signals that 'no real photos exist'. The ban list warns that half-real content 'reads worse'. One imperfect real photo beats any render.)_
- [ ] There is no stat banner of round numbers ('10K+', '99%', '24/7', '4.9★'). Every number on the page is exact, carries a date and is placed next to what it explains. _(This is one of Krebs's 14 patterns. Impeccable marks round stats as a BLOCKER because 'suspiciously round stats undermine trust'.)_
- [ ] The site's section order is not a SaaS funnel. There are no 'Features / How it works / Testimonials / FAQ / Ready to get started?' blocks, no FAQ accordion, and no 01/02/03 labels unless the items really are a sequence. _(Krebs scores numbered steps and FAQ accordions as patterns, and the darthv95 gist flags decorative numbered labels. A personal site laid out like a sales funnel looks generated before anyone reads a word.)_
- [ ] Long-form text sits in a column of about 60 to 75 characters per line, with no decorative chrome around it. _(Frank Chimero's 'The Web's Grain' and the plain, narrow measure of Paul Graham's site show that restraint reads as confidence when the writing carries the page.)_
- [ ] The site has exactly one signature device taken from Kyle's working life, for example a receipt- or manifest-style header block with fields like PROJECT / STORE / SHIPPED on every case study. It is the only gimmick on the site. _(Memorable sites (Matuschak's stacked notes, Rauno Freiberg's desktop-style dock) have one interaction idea that expresses how the owner thinks. Stacking several gimmicks becomes its own template.)_
- [ ] Krebs's open-source ai-design-checker, run on the finished homepage, flags 0-1 patterns. Re-run it after every redesign. _(In Krebs's first sample of about 500 Show HN pages, 21% triggered 5 or more patterns. It is the closest thing to a measurable regression test for 'looks AI-made'.)_

## Writing checks

- [ ] Swap test: every paragraph has at least one concrete anchor (a proper noun, a year, a dollar or unit figure, a named tool or regulation). No paragraph would still be true if a competitor pasted it onto their site. _(Claims that would fit anyone are the most durable AI signal across model versions. LinkedIn's editor-in-chief lists 'bland, interchangeable takeaways' first among the things that get a post flagged as slop.)_
- [ ] At most one contrast frame per piece ('it's not X, it's Y', 'isn't just', 'not this, but that', 'rather than'), and only when a named someone actually holds the view being contradicted. _(The Washington Post found 'not just X, but Y' in about 6% of ChatGPT chats. Graphite measured corrective framing at more than 100x the human rate in a recent model. It is the hardest tell for models to shake.)_
- [ ] Zero reveal setups or questions the writer asks and answers: 'Here's the thing', 'Here's what most people miss', 'The result?', 'Why X matters', 'This matters because'. Any question in the text is attributed to a real person who asked it. _(Graphite's October 2026 study found 'this matters' at about 116x and 'why [blank] matters' at about 92x the human rate in Claude Opus 5.5. These were the top phrase tells in that model.)_
- [ ] Posts use paragraphs of 2-4 sentences. No post has three or more one-line paragraphs in a row, no stacks of arrow or emoji bullets (→ 👉 ✅ 🚀), and no closing 'Thoughts?', 'Agree?', 'Follow for more' or '♻️ Repost'. _(LinkedIn's editor-in-chief names broetry and engagement bait as slop signals. Originality.ai found posts likely written by AI got 45% less engagement (detector-based, so indicative only).)_
- [ ] Zero puffery: no 'stands as / serves as a testament', 'plays a pivotal/crucial role', 'journey' or 'rich heritage', and none of the 'magic adverbs' (quietly, deeply, fundamentally, remarkably). Use 'is'. _(Wikipedia's Signs of AI writing guide catalogs 'serves as' replacing 'is' and promotional descriptors. Kriss (NYT Magazine) describes models overusing 'quiet' to sound subtle.)_
- [ ] No invented branded frameworks or Title Case concept labels ('The Operator-Builder Framework', 'the Compliance Flywheel', R.E.A.L.). A method appears only as the real artifact (a screenshot of the actual checklist or spec). _(Invented concept labels sound authoritative but have no source. On a portfolio site they read as a personal brand built from a prompt.)_
- [ ] The final sentence of each piece is something concrete: a number, a next step with a date, or an open problem. No 'the future is bright', 'the best is yet to come', 'In summary', 'Overall', and no quotable one-liner as the closer. _(Wikipedia's guide flags formulaic conclusions and 'despite challenges' optimism. Real writers stop when the point is made, or leave tension unresolved.)_
- [ ] Count the lists and adjective strings in each piece. No more than half have exactly three items, and each list has its true number of items. _(The reflexive rule of three appears in both Kriss's NYT piece and Wikipedia's guide. One triplet is fine. A triplet cadence everywhere is what a pattern-matcher produces.)_
- [ ] No unattributed authority or empty hedges: 'experts say', 'studies show', 'industry reports suggest', 'it's worth noting', 'importantly', 'can help', 'may provide'. Each claim either commits with a number or names its source, and personal uncertainty is stated specifically ('I think, but haven't proven, that...'). _(Graphite found 'may provide' and 'can provide' among a newest model's signature habits. Wikipedia lists vague attribution as a classic tell, because the model borrows authority it cannot cite.)_
- [ ] At most one word per piece from the never list: delve, tapestry, landscape, leverage (verb), seamless, unlock, robust, streamline, harness, foster, pivotal, crucial, underscore, showcase, game-changer, elevate, navigate, ecosystem, dependable. Re-check the list against gptzero.me/ai-vocabulary after each major model release. _(Kobak et al. (Science Advances) measured 'delves' at 28x excess frequency. Lists drift ('dependable' is newly about 23-26x in Opus 5.5). A cluster of three or four such words in one paragraph is strong evidence, while one word alone is weak.)_
- [ ] Headings are in sentence case and state a claim ('I built the till my budtenders use'), never a label ('Why It Matters', 'What We Do Differently'). Each section has at most one bold phrase, bullets appear only for real lists, and there is no 'Key Takeaways' box. _(Wikipedia's guide and the tropes catalog flag title-case headings, heavy bold and bullets that start with bold. A page that reads like a well-formatted chatbot answer reads as a chatbot answer.)_
- [ ] At most one em dash per piece, never as the setup for a reveal ('I built a POS — and it changed everything'). Aim for zero on LinkedIn. _(This is mostly perception now: Graphite measured a roughly 99% drop in the newest Claude models. LinkedIn readers still penalize it, and on LinkedIn the reader's belief is what counts.)_
- [ ] One name per thing: a given object keeps the same name throughout a piece and across the site (e.g. always 'the register screen'). There is no tutor voice ('Let's dive in', 'Let's break this down', 'Think of it as...'). _(Models rotate synonyms to avoid repetition, which confuses product writing. The teaching voice is a chatbot's default register, not an operator telling a story.)_
- [ ] Each piece contains at least one admitted mistake with its consequence, at least one opinion a reasonable insider could disagree with, and at least one date. _(A model cannot invent Kyle's lived detail without fabricating it. Wharton/NYU-led experiments (27,491 people) and a Raptive survey found readers discount writing they suspect is AI because it feels less authentic.)_
- [ ] Every number traces to a record Kyle can point to (POS data, a license, a calendar). No bracketed placeholder ([N], [vendor]) or invented precise-sounding figure ever ships, and figures are cleared for compliance before publishing. _(Invented precision is what a model produces to fill a slot. Real, odd, dated numbers persuade even when they are small.)_
- [ ] The site has a /now page whose visible 'last updated' date is no more than about 31 days old. Every post shows its date and a state tag in Kyle's own words (e.g. 'Field note', 'Working theory', 'Settled'). _(Derek Sivers' /now page and Tom MacWright's monthly 'recently' posts are hard to fake. Maturity labels like Maggie Appleton's show a mind at work instead of uniformly finished copy.)_
- [ ] A colophon page says in plain words who did what ('I describe what the shop needs; Claude writes the code; a reviewer agent checks it; I test it on the counter'). It names the typeface and the reason for it, the host (Cloudflare), and two things that didn't work. _(Steph Ango and Gwern publish how their sites are made, including failed experiments. Showing the process proves a person made the decisions.)_

## Cannabis cues

**Borrow:**

- One everyday form from Kyle's own working life, used as the site's system the way Lowell owns the cigarette flip-top and Kiva owns the chocolate bar: a receipt, jar tag or wholesale manifest, with tabular figures, ruled lines and label fields such as LIC #, BATCH, PKG DATE.
- A palette sampled from real objects, not the plant: kraft or manila from wholesale paperwork, thermal-receipt off-white, the black or white of the state universal symbol, Pacific Wellness's actual signage color.
- Provenance-level specifics, the way wine uses appellations: years, counties, store and vendor counts, SKU counts, the year he first held a license, what the register replaced (his real figures only).
- Compliance as visible design: annotated real artifacts (a label with callouts for each required field, a Metrc sandbox manifest, the POS ID-check screen), each with a note on what the rule forced in the product. Show the universal symbol only as an artifact, unaltered, black or white, at least 0.5 inch.
- The word 'legacy', used plainly. Frame the move from the legacy market to licensing as product insight (operators distrust state systems, so compliance screens have to be forgiving) and keep it non-incriminating.
- Operator vocabulary hiring managers screen for: sell-through, days on hand, basket size, Metrc manifests, package tags, 280E, excise, COAs, distro, budtender. Use at most one or two craft terms per piece (keeper cut, clone-only, the drop), correctly and without defining them.
- Product data talk at the level of chemotype: dominant terpenes, total terpene %, cannabinoid ratios, why THC % inflation distorts shopper choice. Mention indica/sativa only as a legacy field the POS still supports because customers search for it.
- Real back-of-house phone photos, uncorrected, captioned with date and place, with no customers' faces: the label printer, the vault shelf, a stack of manifests, the menu board mid-update, the register's first test print.
- Information design he has actually done: a before-and-after menu board, a tiered price table, the register screen at peak hour, with one sentence on each decision.
- 'Cannabis' as the default professional noun, with occasional first-person 'weed' in voice lines ('the weed was never the hard part; the paperwork was').
- If 4/20 comes up at all, its real history (the Waldos, San Rafael High School, 1971, Marin County), never as a joke.
- Values stated only alongside a specific act (e.g. a feature built for a real customer group), the way Old Pal and B3 tie theirs to concrete commitments.

**Avoid:**

- A leaf anywhere: logo, favicon, bullets, dividers, 404 page. Also kelly or neon 'weed green' as the brand color.
- Pun headlines and titles: 'High hopes', 'Budding PM', 'Joint venture', 'Blunt truth', 'Elevated experience', 'Rolling with it', 'Kush'-anything, 4/20 date jokes. Puns are also what an AI writes when asked to sound 'on brand for cannabis'.
- The 'Apple Store of weed' look (MedMen's template): white space everywhere, thin sans, walnut and glass, spa pastels, a wellness tone that erases the culture. To legacy insiders it reads as a newcomer, and it is also the AI site-builder default.
- Recoloring, stylizing or decorating the California universal symbol, and naming a county (e.g. 'Humboldt') loosely when the law restricts origin claims.
- Romanticizing the black market (trap or plug aesthetic), which raises compliance-risk flags, and also hiding the legacy past, which throws away his rarest credential.
- Budtender-101 language: 'indica for couch-lock, sativa for energy', or THC % as the measure of quality.
- Slang dropped in to sound authentic ('za', 'gas', 'loud', 'fire'), and slang glossaries written for outsiders.
- Stock or generated imagery: smiling models holding joints toward the camera, handshake-over-chart shots, sexualized 'Cannabis 1.0' images, AI-rendered buds with impossible trichomes.
- Cannabis-tech SaaS styling: a hero, three feature cards, a gradient blob, 'Seamless. Compliant. Scalable.' Hiring managers at Dutchie, Headset and Flowhub see thousands of these.
- 'Marijuana' as the default noun (keep it for legal and historical names only), and 'Mary Jane', 'ganja', 'the devil's lettuce', 'pot' in professional copy.
- Showing the SouthBay420 project without a frame. Lead with what it is ('Online ordering and POS for a licensed California dispensary') and put the codename second.
- Decorative mission language ('end the stigma', 'committed to community', 'passion for the plant', 'deep roots in the industry') with no specific act, name, place or year behind it.

## Sources

- https://claude.com/blog/improving-frontend-design-through-skills
- https://github.com/AdrianKrebs/ai-design-checker
- https://github.com/pbakaus/impeccable
- https://raw.githubusercontent.com/wiki/Laith0003/ux-skill/Anti-AI-slop-ban-list.md
- https://gist.github.com/darthv95/aeff3e44287e0fe782a8d482d67ef2cc
- https://x.com/adamwathan/status/1953510802159219096
- https://www.react.doctor/docs/rules/react-doctor/no-side-tab-border
- https://superdesign.dev/blog/fix-generic-ai-landing-page
- https://capitalandcompute.net/blog/fix-ai-slop-design/ (seen via search summary only)
- https://skillselion.com/skills/bergside/awesome-design-md-skills/terracotta
- https://bootcamp.uxdesign.cc/the-rise-of-linear-style-design-origins-trends-and-techniques-4fd96aab7646
- https://anthonyhobday.com/blog/20230119.html
- https://blog.logrocket.com/?p=186781
- https://nngroup.com/articles/ai-sparkles-icon-problem/
- https://dev.to/kenimo49/framer-motion-view-transitions-api-4-ui-motion-patterns-that-stop-looking-ai-generated-25gg
- https://eyeondesign.aiga.org/what-the-think-pieces-about-corporate-memphis-tell-us-about-the-state-of-illustration/
- https://aesthetics.fandom.com/wiki/Corporate_Memphis
- https://morphic.com/ar/resources/images/hero-illustration-images
- https://www.925studios.co/blog/ai-slop-design-tells
- https://dev.to/lyd_lyd_d4869af25d33ce0eb/why-do-ai-generated-websites-all-look-the-same-k2j
- https://hrexecutive.com/what-linkedins-editor-in-chief-says-gets-a-post-flagged-as-ai-slop/
- https://news.bloomberglaw.com/artificial-intelligence/linkedin-is-cracking-down-on-ai-slop-with-new-reporting-tool
- https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/ (Washington Post analysis, syndicated)
- https://gizmodo.com/this-matters-researchers-identify-thousands-of-new-tells-in-ai-writing-2000820447
- https://theaiinsider.tech/2026/10/05/graphite-study-finds-ai-models-still-leave-thousands-of-writing-tells/
- https://cryptobriefing.com/graphite-study-claude-opus-5-5-writing-tells/
- https://aiweekly.co/alerts/atlantic-ais-its-not-x-its-y-tic-proves-hardest-to-shake
- https://tropes.fyi/tropes/negative-parallelism
- https://tropes.fyi/tropes/rhetorical-qa
- https://gist.github.com/ossa-ma/dae6f9571534f3fbd1266a384be00e11
- https://originality.ai/pt/blog/ai-content-published-linkedin
- https://www.teamlewis.com/magazine/5-common-mistakes-to-avoid-in-ai-generated-linkedin-posts/
- https://techcrunch.com/2025/11/20/the-best-guide-to-spotting-ai-writing-comes-from-wikipedia/
- https://the-decoder.com/heres-how-to-spot-ai-writing-according-to-wikipedia-editors/
- https://www.techspot.com/news/109186-subtle-signs-give-away-chatbot-writing-according-wikipedia.html
- https://erkansaka.net/2025/09/27/wikipedia-signs-of-ai-writing-guide/
- https://www.beutlerink.com/blog/how-to-spot-ai-writing
- https://longreads.com/2025/12/04/why-does-a-i-write-like-that
- https://www.pw.org/content/artificial_poetry (summarizing Kriss, NYT Magazine, Dec 2025)
- https://gptzero.me/news/the-rule-of-three/
- https://prorhetoric.com/in-a-veteran-speechwriters-hard-wrought-work-claude-finds-dozens-of-ai-tells/
- https://arxiv.org/html/2406.07016v5
- https://github.com/berenslab/llm-excess-vocab
- https://gptzero.me/ai-vocabulary
- https://amp.knowyourmeme.com/memes/chatgpt-em-dash
- https://salt.agency/blog/in-defence-of-the-em-dash-what-the-ai-writing-debate-gets-wrong/
- https://www.mcgill.ca/oss/article/critical-thinking-student-contributors-technology/why-did-llms-steal-our-em-dashes
- https://opace.agency/tools/ai/content-verification-integrity/research/ai-writing-myths-measured/
- https://dev.to/dalei_gu/what-perplexity-and-burstiness-actually-measure-in-ai-detection-2adp
- https://ppc.land/raptive-study-shows-ai-content-cuts-reader-trust-by-half/
- https://leonfurze.com/2026/07/05/aidr-when-readers-stop-trusting-writers/
- https://www.robinsloan.com/newsletters/all-of-that-ya-got/
- https://craigmod.com/ridgeline/tags/introductions
- https://craigmod.com/ridgeline/054
- https://craigmod.com/ridgeline/133/
- https://craigmod.com/ridgeline/148/
- https://stephango.com/about
- https://gwern.net/design
- https://sive.rs/
- https://institute.uschamber.com/now-a-word-that-represents-attention-focus-and-priority/
- https://macwright.com/2026/05/04/recently
- https://techfeed.io/entries/5d1b7ae6ffec6b880995319b
- https://jvns.ca/blog/2016/08/29/how-i-made-a-zine/
- https://jvns.ca/blog/2017/11/25/linux-comics--zine-edition/
- https://notes.andymatuschak.org/§Note-writing_systems
- https://waylonwalker.com/maggieappleton-digital-gardeners (growth-stage labels; verify on maggieappleton.com)
- https://xd.adobe.com/ideas/perspectives/interviews/lynn-fishers-annual-portfolio-redesign-skills-sharp
- https://lynnandtonic.com/archive/2014
- https://frankchimero.com/blog/2015/the-webs-grain/
- https://brianlovin.com/llms.txt
- https://www.brandknewmag.com/?p=9379
- https://www.packagingdigest.com/packaging-design/package-redesign-shifts-a-coloradan-cannabis-brand-into-the-mainstream
- https://hyperallergic.com/pentagrams-high-end-design-for-snoop-doggs-marijuana-product-line
- https://develop.adweek.com/?p=1043560
- https://www.history.com/articles/the-hazy-history-of-420
- https://www.adweek.com/agencies/an-inside-look-at-medmen-lauded-as-the-apple-store-of-weed/
- https://maekan.com/seeing-green-in-a-new-light-current-cannabis-branding-trends/
- https://www.cannabis.ca.gov/licensees/cannaconnect-compliance-hub/labeling/non-manufactured-final-form
- https://www.cannabis.ca.gov/wp-content/uploads/sites/2/2024/06/labeling-checklist-manufactured-products.pdf
- https://cannabis.ca.gov/licensees/requirements-cannabis-goods
- https://harris-sliwoski.com/ar/cannalawblog/california-cannabis-appellations-proposed-regulations-are-here/
- https://greenstate.com/award/best-product-design-lowell
- https://www.ganjapreneur.com/emerald-triangle-legacy-farmers-discuss-california-cannabis-industry
- https://www.leafly.com/news/cannabis-101/indica-vs-sativa-myth-or-fact
- https://weedmaps.com/learn/cannabis-and-its-evolution/what-is-zaza-smoke
- https://ganjapreneur.com/ophelia-chong-changing-public-perceptions-of-cannabis-with-stock-photography
- https://www.kivaconfections.com/news/kiva-wins-6-clio-awards
- https://www.pentagram.com/work/harmony-extracts/story
- https://design-milk.com/seth-rogens-cannabis-lifestyle-brand-houseplant-embraces-high-design/
- https://rno1.com/work/headset-creating-a-cannabis-data-revolution
- https://www.cjr.org/united_states_project/marijuana-terminology-pot-cannabis.php
- https://mjbizdaily.com/how-old-pal-built-a-cannabis-brand-rooted-in-community/
- Note: the researchers could not open several primary pages directly (the Wikipedia guide, the Washington Post and NYT pieces, and most of the personal sites), so those claims rest on secondary write-ups. Check quotes by eye before reusing them publicly.
