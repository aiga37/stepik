---
name: commit-message
description: >-
  Proposes a short Git commit message from the current change set. Use when the
  user asks for a commit message, commit text, conventional commit wording, or
  shorthand triggers like "cm" in a Git context. Prefer Modified / Untracked /
  Deleted paths from Source Control or chat context; use diff only when already
  supplied or obtained without forcing a shell approval step.
---

# Commit message (English, short by default)

## When this applies

Respond when the user clearly wants commit wording, including:

- **"commit message"**, **"suggest a commit"**, **"git commit message"**, **"conventional commit"**
- **"cm"** — short trigger; treat as commit message if the thread is about Git/commits; if ambiguous (e.g. units), ask one clarifying question

## What to do

1. **Infer the change set without requiring a terminal**
   - Use what is already in context: Source Control summary, **Modified / Untracked / Deleted** lists, attachments, recently touched files, or an explicit list from the user.
   - **Do not** require shell approval just to answer. Use `git diff` / `git status` output only when the environment already ran it, or the user pasted it.

2. **Summarize the intent** from paths and statuses (additions, removals, folders). If a diff snippet appears in the thread, tighten the wording to match it.

3. **Produce ONE short commit command**:
   - **Subject only by default**, in imperative mood, ~50 chars, max ~72.
   - No trailing period on the subject line.
   - Use a single `-m` flag. Do **not** add a body unless the user asks.
   - Optionally prefix with **Conventional Commits**: `type(scope): subject` (feat, fix, docs, chore, refactor, test, …).

4. **Body only on request.** If the user asks for a description / details / "with body", add one — using the shell-appropriate form (see below).

## Accuracy

- Do not invent files that are not reflected in context.
- If only paths are known, the message may stay slightly general; note in one sentence that the user should tweak after reviewing the diff.

## Output shape

1. **First block (mandatory):** ONE ready-to-run, single-line commit command.

   ```
   git commit -m "type(scope): short subject"
   ```

2. **Then (optional):** plain message text for Git UI copy/paste, and a one-line explanation.

3. **Body only when explicitly requested.** Match the user's shell:
   - **PowerShell** (Windows): use a backtick-n newline inside a double-quoted string, e.g.
     `git commit -m "subject`n`nbody line"`
   - **bash / zsh**: use a heredoc form, e.g.
     `git commit -m "$(cat <<'EOF' ... EOF` `)"`

## Don'ts

- Don't emit two `-m` flags by default.
- Don't produce long, multi-sentence subjects — split into subject + (requested) body instead.
- Don't add a body unprompted.
