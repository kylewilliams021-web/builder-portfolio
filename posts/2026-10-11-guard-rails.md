# Draft post — edit into your own voice before posting

I've spent 17 years in cannabis. I'm not a developer. This year I shipped a full dispensary system anyway (online ordering, a register, loyalty, 26 releases)
by building with AI.

The hard part isn't getting AI to write code. It's trusting code you can't read.

So this weekend I built guard rails around my AI:

→ Rules enforced by code, not just instructions (never touch the live database, never deploy without me)
→ A check that runs before it's allowed to say "done"
→ A second AI that reviews the first one's work

On day one, the reviewer caught 15 mistakes in the first AI's work. Every one was fixed, each with a test.

That's the job now, I think: knowing what good looks like, and building the system that holds the AI to
it.

Next: documenting how I build, in public. #AI #ProductManagement #Cannabis
