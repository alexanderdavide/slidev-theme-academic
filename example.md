---
theme: ./
layout: cover
class: text-white
coverAuthor: [alexanderdavide, contributors]
coverAuthorUrl: [https://www.alexeble.de, https://github.com/alexanderdavide/slidev-theme-academic/graphs/contributors]
coverBackgroundUrl: /presentation.jpg
coverBackgroundSource: unsplash
coverBackgroundSourceUrl: https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
fonts:
  local: Montserrat, Roboto Mono, Roboto Slab # local fonts are used for legal reasons for deployment to https://slidev-theme-academic.alexeble.de and only set up for the example project, remove this line for your project to automatically have fonts imported from Google
themeConfig:
  paginationX: r
  paginationY: t
  paginationPagesDisabled: [1]
title: slidev-theme-academic
info: |
  # slidev-theme-academic

  Created and maintained by [Alexander Eble](https://www.alexeble.de).

  - [GitHub](https://github.com/alexanderdavide/slidev-theme-academic)
  - [npm](https://www.npmjs.com/package/slidev-theme-academic)

  slidev-theme-academic is licensed under [MIT](https://github.com/alexanderdavide/slidev-theme-academic/blob/master/LICENSE).

  <ul>
    <li>
      <a href="https://www.alexeble.de/impressum/" target="_blank">Legal information of this website</a>
    </li>
    <li>
      <a href="https://www.alexeble.de/datenschutz/" target="_blank">Privacy policy of this website</a>
    </li>
  </ul>
---

# cover

## slidev-theme-academic

<Pagination classNames="text-gray-300" />

---
layout: table-of-contents
hideInToc: false
---

# table-of-contents

---
layout: index
indexEntries:
  - { title: "Curated cover image for Slidev", uri: 4 }
  - { title: "Curated cover image for Slidev", uri: 5 }
---

# index

`index` used as list of figures

---
layout: figure
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 1
figureUrl: https://source.unsplash.com/collection/94734566/1920x1080
---

# figure

<Footnotes separator>
  <Footnote :number=1><a href="https://unsplash.com/collections/94734566/slidev" rel="noreferrer" target="_blank">Anthony Fu</a></Footnote>
</Footnotes>

---
layout: figure-side
figureCaption: Curated cover image for Slidev
figureFootnoteNumber: 1
figureUrl: https://source.unsplash.com/collection/94734566/1024x768
---

# figure-side

- Ensures figures are displayed nicely out of the box
- Allows placing the figure on the left or right
- Features an optional figure caption

<Footnotes separator>
  <Footnote :number=1><a href="https://unsplash.com/collections/94734566/slidev" rel="noreferrer" target="_blank">Anthony Fu</a></Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Footnotes & Footnote

<span class="font-extralight">
  <q>Give credit where credit is due</q>
  <sup>1</sup>
</span>

<Footnotes separator>
  <Footnote :number=1>Smart person</Footnote>
</Footnotes>

---
layout: center
class: "text-center"
---

# Pagination

<span class="font-extralight">Enabled by default</span>

<img
  class="absolute transform rotate-z-180 -top-0.9 -right-21.5 w-36"
  src="/box.svg"
/>

<p class="absolute font-extralight right-14 transform rotate-8 top-4">Here!</p>

---
layout: index
indexEntries:
  - { title: "GitHub", uri: "https://github.com/alexanderdavide/slidev-theme-academic" }
  - { title: "npm", uri: "https://www.npmjs.com/package/slidev-theme-academic" }
  - { title: "Slidev", uri: "https://sli.dev" }
indexRedirectType: external
---

# index

`index` used as a list of references
