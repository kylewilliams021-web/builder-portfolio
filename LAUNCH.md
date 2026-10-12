# Launching kylewilliams.co

Decided 2026-10-12: launch after the back-of-house photos are in (3 to 5, no customer faces). The
guard-rails post is held for now; the site says "First post coming soon."

## Before launch

1. Photos added to the case studies with a date-and-place caption each.
2. `npm run build` passes (it refuses while any [ask] or unapproved [OK?] is left) and makes
   `kylewilliams-co.zip`.
3. Delete `private/` if this repository is about to go public (the site never publishes it either way).

## Upload (the same way kylewilliams.co is updated today)

1. dash.cloudflare.com → **Workers & Pages** → the kylewilliams.co project.
2. **Create deployment** → **Production** → drop in `kylewilliams-co.zip` (the ZIP itself, not unzipped).
3. **Save and deploy**, then open kylewilliams.co and check: the front page, a case study, the
   Light/Dark switch in the header, and the email link.

If something looks wrong, Cloudflare keeps every earlier deployment: **Deployments** → the previous one →
**Rollback**.
