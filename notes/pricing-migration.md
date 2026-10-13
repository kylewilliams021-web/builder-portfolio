---
title: 465 SKUs repriced overnight. No receipt total moved.
date: [ask]
tag: Field note
status: published
description: Moving a dispensary catalogue from out-the-door to pre-tax shelf prices in one night, and five undocumented POS defects found on the way.
---

# 465 SKUs repriced overnight. No receipt total moved.

Pacific Wellness used to quote prices out the door. The shelf price already included city tax, excise and
sales tax. Menu platforms list that number right next to stores that quote before tax, where the same
eighth looks 38.8% cheaper. We looked expensive because we were being literal.

So I moved the whole catalogue to pre-tax shelf prices in one night. The condition: every customer pays
exactly what they paid the day before, to the dollar. Our eighth now shows $14.41 where a store quoting out
the door shows $20.00. Same jar, same money at the register.

## One division and one flag

California's three taxes compound in a fixed order, and the register rounds the total to the nearest
dollar.

```
city   = 10%   × sticker
excise = 15%   × (sticker + city)
sales  = 9.75% × (sticker + city + excise)
multiplier = 1.10 × 1.15 × 1.0975 = 1.3883375
```

Divide every old price by 1.3883375 and you get a pre-tax sticker that rings the same total. That only
holds if the POS compounds in that order. One setting decides it: "calculate excise tax after city tax".
Switched off, the multiplier drops to 1.371875 and every price in the store is 1.2% wrong. That's small
enough to pass a spot check and big enough to be a year of tax exposure. I checked that flag first and
never touched it again.

## Five defects the POS doesn't document

All five are reproducible. Two of them silently misprice an entire store.

1. **The importer rejects its own exporter's files.** Seventeen product names with ™, é or ñ bounced on
   import, though the platform had just exported them. I transliterated the names and restored them after.
2. **The flag that decides the price can't be imported.** Whether a price includes tax lives on the store
   inventory record, which the 38-column import file can't reach. Load pre-tax prices without changing it
   and the register backs taxes out of $14.41 and charges about 28% under on every SKU, with no error. I
   ran a separate mass update on all 466 inventory records and checked it before loading a single price.
3. **The tax form shows the wrong values for eight seconds.** Open a consumer type and every field reads
   "pre-taxed" until the real values load. Save in that window and you undo your own change. I waited, and
   trusted only the confirmation dialog, which lists exactly what will change.
4. **Saves can fail silently.** One save was lost to a dropped connection while the screen showed success. I
   caught it only because I reloaded between steps. Reloading and reading back from the server became the
   rule after every save.
5. **Rounding hides a tax error on 76% of the catalogue.** With totals rounded to the dollar, 349 of 460
   SKUs ring the same total whether or not sales tax is charged on excise correctly. My first test item
   rang $35.00 both ways. So I stopped checking totals and checked the sales tax line instead: on a $46.82
   item it has to read $5.77, not $5.02.

## How I checked it

Six products across the price range, rung up without completing the sale, plus one discounted item.

| Product                         | Sticker | Must ring |
| ------------------------------- | ------- | --------- |
| Acai Runtz smalls 3.5g          | $14.41  | $20.01    |
| Acai Runtz smalls 7g            | $25.21  | $35.00    |
| Autumn Brands preroll 14-pack   | $44.66  | $62.00    |
| Birdies Classic Hybrid 3-pack   | $10.08  | $13.99    |
| Breez Extra Strength Nighttime  | $46.82  | $65.00    |
| Cizi 1g 510 cart, Blue Dream    | $12.97  | $18.01    |

A total about 28% low means the inventory flag is still set. Totals about 1.2% off mean the ordering flag
got switched.

## Promotions were the second migration

Promotions apply to the pre-tax subtotal, and every dollar figure in ours had been written out the door.
The moment the catalogue converted, each one became 38.8% more generous. The rule I ended up with: if a
promotion names a dollar amount, it's broken. If it names a percentage or a ratio, it's fine. Nine
promotions had to be divided through by hand.

The loyalty basket minimum went from $40.00 to $28.80, not $28.81. Our best-selling all-in-one vape is
exactly $28.81 before tax, and the POS doesn't say whether its check is "more than" or "at least". Rounding
down costs nothing and makes the question irrelevant.

## The rollback I never used

I started at eleven at night with a written rollback, step by step, with a check after each one. It never
ran. It was there so that deciding to go ahead was cheap.

One product was left at dawn: 466 in inventory, 465 in the export. Every converted price lands on an odd
cent, so I sorted for whole-dollar prices and found it. It was a 1.5g preroll I had created twice.

## What I'd change in the POS

- Moving between tax-inclusive and pre-tax prices should be a real migration tool with a dry run and a
  diff, not a checkbox several record types depend on.
- Any field that can put a whole catalogue 28% under should be importable with the prices.
- A form shouldn't show editable values before the real ones load, and "saved" should mean the server
  confirmed it.
- Verification tools should compare tax lines, not totals. Totals hid a defect on 76% of the catalogue.
- Store the price basis next to the amount. That one column would have converted nine promotions
  automatically instead of leaving them for me to find at midnight.
