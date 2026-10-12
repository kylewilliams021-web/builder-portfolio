# How I build

## Whose hands the AI is in

There are three AI-era roles. An AI PM builds AI into a product, and engineers write the code. A
forward-deployed engineer wires AI into one customer's workflow. A product builder puts the AI in their
own hands, from idea to launch. I'm the third.

The split is explicit, because it's the honest answer to "did you build this?":

| I do                                                                      | The AI does                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Pick the problem, decide what to build and what to leave out              | Research: competitors, regulations, the existing code         |
| Make every product call; set defaults and tradeoffs                       | Propose options with tradeoffs; write the code and the tests  |
| Test every workflow by hand, as staff and as a customer, and send it back | Review its own work through a second, independent AI reviewer |
| Set the quality bar and the rules that must never break                   | Work inside hooks that enforce those rules                    |
| Ship: I upload each release myself                                        | Prepare the release, notes and checks; never deploys          |

## My loop

1. **Notice a problem** at the counter or in the numbers. Most of mine come from real pain points running Pacific Wellness.
2. **Frame it.** Who has it, what job they're trying to get done, what it costs today.
3. **Research.** How competitors solve it, and what California law allows.
4. **Decide.** Options with tradeoffs; I make the call and record why
   ([decision records](projects/southbay420.md#decisions)).
5. **Define done.** What a shop owner will notice, in plain words (the release notes), and what must not
   change for anyone already using it.
6. **Build with AI, inside the harness.** Then test the workflow myself.
7. **Ship and log.** Release, upload, and a build-log entry: what I decided, why, and what I learned.

## The frameworks I use and where I used them

Most of these I learned in CareerFoundry's product management certificate (2023). These are my calls,
described in framework terms. Since October 2026 I name the framework at the moment I
use it, and the build logs record it.

| Framework                                  | Where I used it                                                                                                                                                                                                                                  |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Customer definition / discovery**        | Loyalty: _the stores_ are the customers, not just Pacific Wellness. So every loyalty rule became a store setting, and our own program ships as a demo preset (SouthBay420 P001)                                                                  |
| **Jobs to be done**                        | Each product's users and what they're trying to get done. My owner job for SouthBay420: "I want one integrated thing"; the budtender's: "The POS needs to just work"                                                                             |
| **Prioritization: impact vs effort, risk** | Compliance: hard refusals only where a rule is clear-cut and cheap to check, warnings where judgment is needed, structure first (P003). Metrc isolated on its own branch so slow, risky work can't block fast work (P004)                        |
| **Constraints as design input**            | No online card payments (card networks restrict cannabis), so pay at pickup or on delivery. The ladder is "Stairway to _Savings_", because California bans advertising free cannabis (P002)                                                      |
| **Metrics**                                | Go-live criteria before launch (SouthBay420: months in the Metrc sandbox without errors I can't fix, every feature at least as good as the market's) and a North Star after it (stores running it). In the product, every register sale is timed |
| **Working backwards / specs**              | Release notes written for shop owners; the loyalty plan as a settings spec with defaults, approved before any code                                                                                                                               |
| **Build vs buy**                           | I build to learn and explore; as an operator I buy the best. SouthBay420 keeps growing, and my store is moving to Dutchie: "Building it is different from ready to go live. I need the best now for the store"                                   |

## How I check work I can't read

- **Automated tests** on every change: SouthBay420 has 168, including real-browser journeys.
- **Every shipped release is a test.** Each new version must upgrade a database created by the one before
  it, and keep every API response the old app relied on.
- **A harness around the AI.** Hooks refuse a list of dangerous actions: editing database changes live
  shops already ran, renaming login cookies, writing keys into code, deploying, touching the live
  database. A finish-line check runs before the AI may report work done. A separate reviewer AI checks
  every feature. On its first day, the reviewer found 15 problems in the AI's own work, and every one
  was fixed with a test that fails on the broken version.
- **Outside review.** An outside developer reviewed a SouthBay420 release; each security finding was fixed
  in the next release (1.19).

## Documented as I go

Every product repository has a product doc (problem, users, constraints, principles), a build log (each
session: goal, my calls, frameworks, who did what, what I learned) and product decision records. This
portfolio is curated from them.
