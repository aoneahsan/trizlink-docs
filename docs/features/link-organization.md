---
title: Link Organization
description: Organize TrizLink links with custom labels and tags, filter and search across every link, and bulk-import many links at once from a CSV file.
sidebar_position: 6
keywords: [link organization, link labels, link tags, bulk import links, csv link import, search links, filter links, link management]
---

Link organization in TrizLink is the set of tools for labeling, searching, and bulk-importing your short links so you can find any link quickly. Instead of scrolling through a long, undifferentiated list, you attach custom labels (tags) to each link, filter the Links list by those labels, search across all your links, and load many links at once from a CSV file. Everything lives in your dashboard, and TrizLink is free to use with Google sign-in.

## What you can do

You can tag every link with one or more custom labels, then filter the Links list at `/dashboard/links` by label to see only the links that matter for a given project, client, or channel. You can search across all your links to jump straight to one, and you can bulk-import a large batch of links from a CSV file at `/dashboard/links/bulk-import` instead of creating each one by hand.

## Use cases

- **Group links by campaign or client.** Label every link for a launch (for example `summer-launch`) so you can filter to that set in seconds and review them together.
- **Separate channels.** Tag links by where they live — `newsletter`, `instagram`, `print` — and filter by channel when you need to check or update just that group.
- **Migrate from another tool.** Export your existing links to CSV and import them all at once, keeping the target URL, custom code, title, description, and tags in one pass.
- **Find a single link fast.** Use search when you remember part of a title, code, or destination but don't want to scroll.
- **Tidy up an old account.** Re-label legacy links so an unstructured pile becomes a filterable, searchable library.

## How it works

1. Open the Links list at `/dashboard/links`, where all of your links appear with search and filter controls.
2. Add one or more labels (tags) to a link when you create or edit it; labels are free text you define yourself.
3. Use the label filter to narrow the list to links carrying a specific label.
4. Use search to match links across your whole account when you only remember part of a link's details.
5. To add many links at once, go to `/dashboard/links/bulk-import` and prepare a CSV with the columns: target URL, custom code, title, description, and tags.
6. Upload the CSV; each valid row becomes a link with its title, description, and tags applied, ready to filter and search like any other link.

## Tips

- Decide on a small, consistent set of label names before you start tagging — `client-acme` and `acme-client` will split the same group into two filters.
- Keep tags short and lowercase so they stay easy to type and scan.
- A link can carry several labels at once, so combine a channel tag with a campaign tag for finer filtering.
- When preparing a CSV, match the expected columns exactly (target URL, custom code, title, description, tags) so each row imports cleanly.
- Use the description field during bulk import to record context you'll want later, since it is searchable alongside titles.
- Re-label in small batches rather than all at once, so you can confirm your tagging scheme works before applying it everywhere.

## FAQ

### Can I organize links into folders?

No. TrizLink organizes links with labels (tags) plus search and filtering, not a folder hierarchy. You group links by attaching shared labels and then filtering by them, which lets a single link belong to several groups at once.

### How do labels differ from search?

Labels are tags you assign deliberately so you can filter the Links list down to a defined set. Search matches across your links on demand. Use labels for stable groupings and search for one-off lookups.

### Can a link have more than one label?

Yes. Label operations are per-link, and you can attach multiple labels to the same link, so it can appear under several filters — for example both a campaign label and a channel label.

### What columns does the CSV bulk import expect?

The bulk-import file at `/dashboard/links/bulk-import` uses these fields per row: target URL, custom code, title, description, and tags. Providing all of them lets each imported link arrive already titled, described, and tagged.

### Is there a limit to how many links I can import at once?

Bulk import is designed to load many links from a single CSV in one operation. Keep your file well-formed and matching the expected columns so every row is processed; very large files are best split into a few smaller uploads to make any row-level issues easier to spot.

### Do labels affect how my short links work?

No. Labels are an internal organization layer for your dashboard. They change how you find and filter links — not the destination, custom code, or behavior of the links themselves.

### Does organizing links cost anything?

No. TrizLink is free to use; sign in with Google and you get the Links list, labels, search, filtering, and CSV bulk import as part of the platform.

## Related

- [Short links](/features/short-links)
- [Analytics](/features/analytics)
- [Tracking and UTM](/features/tracking-and-utm)
- [Custom domains](/features/custom-domains)
