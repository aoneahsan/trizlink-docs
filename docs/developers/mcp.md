---
title: "Connect Claude, ChatGPT, Claude Code or Cursor to Trizlink"
description: "Connect an AI assistant to a Trizlink workspace through MCP: the address, the steps per assistant, what the approval page asks, and how deletes wait for you."
slug: /developers/assistants
sidebar_position: 4
keywords: [trizlink api, trizlink mcp, trizlink webhooks, access key]
---

# Connect an AI assistant (MCP)

**Ask Claude to shorten twenty links, or ChatGPT which bio page got the most views this week.** An assistant
sends you to Trizlink first, where you choose the workspace and what it may do.

```text
https://xmzckrjqhjnydhgrtqgd.supabase.co/functions/v1/mcp
```

The address is also under **Settings → Other apps**, with a copy button. You never paste a key into an assistant.

- **Claude:** Settings → Connectors → Add custom connector, name it Trizlink, paste the address, Connect, approve.
- **ChatGPT:** Settings → Apps and connectors, developer mode on under Advanced, Create, paste the address, approve.
- **Claude Code:** `claude mcp add --transport http trizlink https://xmzckrjqhjnydhgrtqgd.supabase.co/functions/v1/mcp`, then `/mcp`.
- **Cursor:** add `{ "mcpServers": { "trizlink": { "url": "https://xmzckrjqhjnydhgrtqgd.supabase.co/functions/v1/mcp" } } }` to `~/.cursor/mcp.json`.

## What the approval page asks

The app, the address it returns to (shown large), the workspace, and what it may do, in the same groups as an
[access key](./authentication.md#scopes). Members can only approve *Read*.

## Deletes wait for you

An assistant never deletes in one step. It gets a link to a Trizlink page showing exactly what would go; you remove
it there, or leave it and the request runs out on its own after ten minutes.

## Disconnect

**Remove** under Connected assistants cuts it off at once.
