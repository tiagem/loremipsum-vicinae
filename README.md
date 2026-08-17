# Lorem Ipsum for Vicinae

Generate placeholder text from the launcher. Built for [Vicinae](https://docs.vicinae.com/extensions/introduction), inspired by the [Raycast Lorem Ipsum extension](https://github.com/raycast/extensions/tree/186d955eda64f9e956b25a3fdf5566b1d38f57f2/extensions/lorem-ipsum/).

## Why this one

- **No extra runtime deps.** Generation is a tight loop over a preloaded Latin word list — no `lorem-ipsum` package, no AI round-trip.
- **Preview before you commit.** The main command shows a live detail pane with character, word, and line counts.
- **Fast no-view commands** for paragraphs, sentences, words, and lists when you already know what you want.
- **Unix newlines**, a classic Cicero opening, and extra formats (titles, HTML, bullet lists).

## Commands

| Command | Mode | What it does |
| --- | --- | --- |
| Generate Lorem Ipsum | View | Preview presets, type a count (`3`, `5p`, `20w`, `8l`), copy or paste |
| Generate Paragraphs | No-view | Optional count argument, then copy/paste immediately |
| Generate Sentences | No-view | Same, for sentences |
| Generate Words | No-view | Same, for words |
| Generate List | No-view | Bullet list (defaults to 5 items) |

In the preview, type a number in the search bar. Suffixes switch type: `p` paragraphs, `s` sentences, `w` words, `t` titles, `l` list, `h` HTML.

## Preferences

- **Default Action** — paste into the frontmost app (default), copy, or both
- **Classic Opening** — start with *Lorem ipsum dolor sit amet…*

## Develop

```bash
npm install
npm run dev
```

Vicinae must be running. `npm run build` produces the bundled extension.
