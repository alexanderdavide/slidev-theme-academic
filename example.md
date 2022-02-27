---
theme: ./
layout: cover
author: alexanderdavide
authorUrl: https://alex-eble.de
backgroundUrl: /presentation.jpg
backgroundSource: unsplash
backgroundSourceUrl: https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
class: text-white
hideInToc: true
---

# slidev-theme-academic

## Slidev theme with features for academic presentations

---
layout: table-of-contents
---

---
# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features.<sup>1</sup>

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<Footnotes separator>
  <Footnote :number=1><a href="https://sli.dev/guide/why.html" rel="noreferrer" target="_blank">Slidev</a></Footnote>
</Footnotes>

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts<sup>1</sup>

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

<Footnotes separator>
  <Footnote :number=1><a href="https://sli.dev/guide/navigation.html" rel="noreferrer" target="_blank">Slidev</a></Footnote>
</Footnotes>

---
layout: figure-side
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 2
figureUrl: https://source.unsplash.com/collection/94734566/1920x1080
---

# Code

Use code snippets and get the highlighting directly!<sup>1</sup>

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = {...user, ...update}
  saveUser(id, newUser)
}
```

<Footnotes separator>
  <Footnote :number=1><a href="https://sli.dev/guide/syntax.html#code-blocks" rel="noreferrer" target="_blank">Slidev</a></Footnote>
  <Footnote :number=2><a href="https://unsplash.com/collections/94734566/slidev" rel="noreferrer" target="_blank">Anthony Fu</a></Footnote>
</Footnotes>

---
layout: figure
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 1
figureUrl: https://source.unsplash.com/collection/94734566/100x100
---

# Figure

<Footnotes separator>
  <Footnote :number=1><a href="https://unsplash.com/collections/94734566/slidev" rel="noreferrer" target="_blank">Anthony Fu</a></Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
