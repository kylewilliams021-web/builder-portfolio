---
title: Every brand test said the promotions worked. The store still lost money.
date: [ask]
tag: Field note
status: published
description: A break-even model for vendor-funded discounts, the brand-level test that passed, and the store-level test that overturned it.
---

# Every brand test said the promotions worked. The store still lost money.

Every brand I buy from offers the same trade. They send free units on the purchase order (frontload), and
in return the store runs a deep discount on their products. The discount is real money off the top line.
The free units are real product at zero cost. Nobody had ever shown me whether the second covers the
first, so I worked it out.

## The break-even

Buy N units at cost C, get F × N free, sell everything at price P with discount d. Keep gross profit equal
to selling N units at full price:

```
N(1 + F) · P(1 − d) − NC = N(P − C)
(1 + F)(1 − d) = 1
F = d / (1 − d)
```

Cost drops out. The frontload a discount needs doesn't depend on the product's margin, so "we can afford it
on the high-margin stuff" is wrong.

| Discount | Frontload needed to break even |
| -------- | ------------------------------ |
| 15%      | 17.6%                          |
| 20%      | 25.0%                          |
| 25%      | 33.3%                          |
| 30%      | 42.9%                          |
| 40%      | 66.7%                          |

A 20% frontload is a good deal by purchase-order standards. It supports a 16.7% discount. Brands usually
ask for 30%.

## The brand test said keep three of four

I compared each brand's sales lines per 100 tickets on promotion days and other days, over 90 days, so a
busy week couldn't pass for lift. Each brand's hurdle is its own break-even at its actual discount.

| Brand   | Lift  | Hurdle | Result |
| ------- | ----- | ------ | ------ |
| Brand A | 1.70× | 2.34×  | misses |
| Brand B | 1.86× | 1.81×  | clears |
| Brand C | 3.85× | 3.44×  | clears |
| Brand D | 2.37× | 2.30×  | clears |

Three of four cleared, two of them by less than a tenth. I nearly sent that to the vendors as a scorecard.

## The store-level test overturned it

"Did this brand's units move?" and "did the store make more money?" are different questions, and only the
second one pays anybody. So I lined the promotion calendar up against gross profit per day.

| Day       | Tickets a day | Gross profit a day | Promotions running        |
| --------- | ------------- | ------------------ | ------------------------- |
| Monday    | 35.8          | $548 [OK?]         | one BOGO                  |
| Tuesday   | 35.5          | $473 [OK?]         | Brand A at 30% off        |
| Wednesday | 36.0          | $530 [OK?]         | none                      |
| Thursday  | 35.5          | $543 [OK?]         | two                       |
| Friday    | 36.6          | $518 [OK?]         | two, one at 40%           |
| Saturday  | 33.2          | $444 [OK?]         | three stacked, plus a daily 30% |

Traffic barely moves: 33.2 to 36.6 tickets a day, whatever the promotional load, and the most-discounted
day is the quietest. The customers the discounts were meant to bring in don't show up. What drops is
profit per ticket, which is what happens when the discounts go to people who were coming anyway.
Wednesday runs nothing and beats Saturday by $86 a day [OK?]. Against Wednesday, the three heaviest days
give up about $8,000 a year [OK?].

This is observational. Promotions aren't randomly assigned to days and Saturday has its own traffic. But
if discounts drove traffic, the most-discounted day shouldn't be the quietest one.

## "Vendor-funded" mostly isn't

Vendors reimburse 15% to 30% of the discount, depending on the contract. I built a claim system to collect
it. Over 60 days, seven brands' discounts came to $8,141 and $1,581 came back [OK?]: 19.4%. The store pays
about 80 cents of every promotional dollar.

## The value was in the free goods

Chasing the credits led somewhere better. Free units have produced 24.8% of the store's gross profit since
April [OK?], from 13.3% of sales lines, about four times what the cash credits return. Across eight
purchase orders the frontload averaged 18.4%, which supports a 15.5% discount. We were running 30% and
40%. The conversation to have with a brand isn't "what's your promo support". It's "send more units".

Then I found the free units leaking: of 144 received on two orders, 18 rang at a penny under an unrelated
promotion and the rest left with no record of why. Nothing was stolen. The POS treats a free unit and a
paid unit as the same thing, so any discount can reach a unit that was already free.

## What I'd change in the POS

- Promotions should carry who funds them and at what rate, so reports show the discount net of vendor
  credit.
- Free goods should be their own thing at receiving, kept apart from purchased stock, and a percentage
  discount shouldn't apply to a unit that's already free.
- Promotion reports should normalize for traffic by default.
- Put the break-even in the promotion builder: enter a discount, see the frontload it needs.
- Show gross profit per day with promotions laid over it. That one chart overturned four brand-level
  analyses, and every store already has the data.

**Limits.** One store, 90 days, one market. Line-based, because the export doesn't fill in unit quantity.
The house brand is recorded at zero cost on 71 lines, so I left it out.
