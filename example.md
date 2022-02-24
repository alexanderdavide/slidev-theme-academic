---
theme: ./
hideInToc: true
---

# slidev-theme-academic

Slidev theme with features for academic presentations

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

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
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

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

<Footnotes footnotesX="l">
  <Footnote :number=1><a href="https://sli.dev/guide/navigation.html" rel="noreferrer" target="_blank">Slidev</a></Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
