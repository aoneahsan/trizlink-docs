---
title: Link organisation
description: Folders, labels and collections are three different structures in Trizlink, not three names for one. Plus CSV import of up to 5,000 rows, parsed in your browser.
sidebar_position: 6
keywords: [link folders, link labels, link collections, csv import, bulk import links, export links csv, filter links]
---

Trizlink gives you three ways to keep a workspace's links findable, and they are deliberately different from
each other rather than three words for the same idea. On top of them sit search, filtering, a CSV importer
and a CSV export.

## On this page

- [Three structures, three jobs](#structures)
- [Search and filtering](#search)
- [Importing a CSV](#import)
- [Exporting a CSV](#export)
- [Who can organise](#permissions)
- [Limits](#limits)
- [FAQ](#faq)

## Three structures, three jobs {#structures}

| | What it is | How many per link |
|---|---|---|
| **Folder** | Exclusive. Where a link lives | Exactly one, or none |
| **Label** | A cross-cut. What a link *is* | One, or none |
| **Collection** | A shortlist. A set you assembled | As many as you like |

- A **folder** is exclusive: a link lives in exactly one. Use it for the structure that genuinely partitions
  your work — a client, a campaign, a year.
- A **label** cuts across folders. Everything that is true of links in several folders is a label. Labels
  carry one of four tones (accent, success, warning, neutral) so the chips read at a glance, and the database
  refuses any other value rather than letting one row render unstyled.
- A **collection** is a shortlist. **Nothing moves to join one**, and a link can be in as many as you like.
  Deleting a collection deletes nothing but the shortlist.

Removing a folder or a label does **not** remove the links filed under them; they simply become unfiled. That
is stated in the delete dialogue too, because it is the question everybody has at that moment.

Names are capped — 48 characters for a folder or collection, 32 for a label — with an optional note up to 160
characters on labels and collections.

Manage all three at `/dashboard/labels`.

## Search and filtering {#search}

The Links list filters by status, folder and label, and searches across your links. All four live in the URL,
so a filtered view can be bookmarked or sent to a colleague and lands exactly where you left it.

Lists are paginated rather than loaded whole: 20 rows by default, 50 at most. That is a deliberate ceiling —
fetching an entire workspace to filter it in the browser is how a product becomes slow for the people who use
it most.

## Importing a CSV {#import}

`/dashboard/links/bulk-import` is a five-step wizard, and **only the last step writes**. Every step before it
is reversible by pressing Back, which is what makes it safe to explore with a real file.

**The file is parsed in your browser and never uploaded.** There is nothing for a server to hold: the rows
become links through the ordinary create path, under the same permissions and the same plan limit as a link
you make by hand. An upload endpoint would be a second write path with its own authorisation to get wrong.

Eight columns are recognised, and they are the previous version's own column names so that a file exported
from the old product still imports:

| Column | Required |
|---|---|
| `target_url` | **Yes** |
| `custom_code` | No |
| `title` | No |
| `description` | No |
| `folder_id` | No |
| `label_ids` | No |
| `expires_at` | No |
| `password` | No |

Ceilings: **2 MB** and **5,000 rows** per file.

**A refused row is never silently repaired.** The check step names every problem with its line number in the
file and the value it read, because an importer that guesses produces links nobody asked for, which then have
to be found and deleted. A bad import of 400 links is not fun to undo, and the preview step exists so that it
does not happen.

## Exporting a CSV {#export}

The Links list exports whatever your **current filters** match. The file is built on the server, walking the
same list with the same four filters the table is showing, in pages — so what is on screen and what is in the
file cannot disagree, and your browser never fetches a whole table to build it.

The columns are the importer's own, in the importer's order, so a file goes back in as it came out.

## Who can organise {#permissions}

Creating and renaming folders, labels and collections rides `canEditLinks`; removing them rides
`canDeleteLinks`. Organising is editing the links, not administering the workspace — putting it behind the
settings permission would leave a contributor unable to make a folder for their own work.

See [Workspaces and teams](./workspaces-and-teams.md).

## Limits {#limits}

- **One label per link.** Labels are a cross-cut, not a tag cloud; if you need several dimensions, use a
  folder for one of them and a collection for another.
- **No nested folders.** One level.
- Import ceilings are 2 MB and 5,000 rows. Split a larger file.
- Imported links count against your plan's short-link allowance exactly like any other.
- There is no bulk edit of destinations from the list. Change them one at a time, or through
  the [API](./api-access.md).

## FAQ {#faq}

### What is the difference between a folder and a label?

A folder is where a link lives, and a link has one. A label is what a link is, cutting across folders. If you
find yourself wanting two folders for one link, you want a label or a collection.

### Can a link have several labels?

No. One label per link. A collection is the structure for "belongs to many sets".

### If I delete a folder, do I lose its links?

No. They become unfiled. The same is true of a label, and of a collection — deleting a collection deletes the
shortlist, not the links in it.

### Is my CSV uploaded anywhere?

No. It is parsed in your browser, and the rows are created through the ordinary link path. The file itself
never leaves the machine.

### What happens to a row my file gets wrong?

It is refused and named, with the line number and the value that failed. Nothing is guessed and nothing is
half-imported.

### Can I import a file exported from the old version of Trizlink?

The columns are the same eight, deliberately, so a file in that shape imports. The links themselves were not
carried across in the rebuild, so re-importing an export is exactly the intended way back.

### How big a file can I import?

2 MB and 5,000 rows.

## Related

- [Short links](./short-links.md)
- [Workspaces and teams](./workspaces-and-teams.md)
- [Analytics](./analytics.md)
- [Public API](./api-access.md)
