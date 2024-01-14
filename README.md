# slidev-theme-academic [![npm](https://img.shields.io/npm/v/slidev-theme-academic?color=blue)](https://www.npmjs.com/package/slidev-theme-academic) ![npm](https://img.shields.io/npm/dw/slidev-theme-academic?color=blue) [![https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/)

Simplifies creating academic presentations with [Slidev](https://github.com/slidevjs/slidev) by providing the necessary components and layouts.

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```
---
theme: academic
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

### cover

| **Parameter**              | **Type**      | **Default**                       | **Notes**                                                                         |
| -------------------------- | ------------- | --------------------------------- | --------------------------------------------------------------------------------- |
| `coverAuthor`              | Array, String | `undefined`                       | -                                                                                 |
| `coverAuthorUrl`           | Array, String | `undefined`                       | -                                                                                 |
| `coverBackgroundUrl`       | String        | `undefined`                       | Adapt the text color with the built-in `class` attribute in the same frontmatter. |
| `coverBackgroundSource`    | String        | `undefined`                       | -                                                                                 |
| `coverBackgroundSourceUrl` | String        | `undefined`                       | -                                                                                 |
| `coverDate`                | String        | `new Date().toLocaleDateString()` | -                                                                                 |

![cover](../assets/example-export/01.png)

### table-of-contents

`table-of-contents` puts custom content above the table of contents. If none is given, the content defaults to `<h1>Table of Contents</h1>`.

![table-of-contents](../assets/example-export/02.png)

### index

`index` can be used as a general list for figures, references, tables etc..

`index` puts custom content above the list. If none is given, the content defaults to `<h1>Index</h1>`.

| **Parameter**               | **Type**                                      | **Default** | **Notes**                                                                              |
| --------------------------- | --------------------------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `indexEntries`<sup>\*</sup> | `{ title: string, uri?: number \| string }[]` | `undefined` | Specify `uri` as a page number or optional URL in accordance with `indexRedirectType`. |
| `indexRedirectType`         | `external \| internal`                        | `internal`  | -                                                                                      |

![index](../assets/example-export/08.png)

### figure

| **Parameter**            | **Type** | **Default** | **Notes**                |
| ------------------------ | -------- | ----------- | ------------------------ |
| `figureCaption`          | String   | `undefined` | -                        |
| `figureFootnoteNumber`   | Number   | `undefined` | Align with a `Footnote`. |
| `figureUrl`<sup>\*</sup> | String   | `undefined` | -                        |

![figure](../assets/example-export/04.png)

### figure-side

| **Parameter**            | **Type** | **Values**   | **Default** | **Notes**                |
| ------------------------ | -------- | ------------ | ----------- | ------------------------ |
| `figureCaption`          | String   | -            | `undefined` | -                        |
| `figureFootnoteNumber`   | Number   | -            | `undefined` | Align with a `Footnote`. |
| `figureUrl`<sup>\*</sup> | String   | -            | `undefined` | -                        |
| `figureX`                | String   | `'l'`, `'r'` | `'r'`       | -                        |

![figure-side](../assets/example-export/05.png)

## Components

### Footnotes

`Footnotes` is to be used as parent of `Footnote` children.

| **Parameter** | **Type** | **Values**      | **Default** | **Notes**                                                       |
| ------------- | -------- | --------------- | ----------- | --------------------------------------------------------------- |
| `filled`      | Boolean  | `true`, `false` | `false`     | Overlay subordinate content that may puts itself in background. |
| `separator`   | Boolean  | `true`, `false` | `false`     | -                                                               |
| `x`           | String   | `'l'`, `'r'`    | `'r'`       | -                                                               |

### Footnote

`Footnote` is to be used as children of a `Footnotes` parent.

| **Parameter** | **Type** | **Notes**                                        |
| ------------- | -------- | ------------------------------------------------ |
| `number`      | Number   | Align with an attribution in the pages' content. |

![Footnotes & Footnote](../assets/example-export/06.png)

### Pagination

`Pagination` is rendered globally by default. The global configuration can be defined using [`themeConfig`](#themeconfig).

If certain pages need individual configuration of `Pagination`, exclude them from global rendering of `Pagination` using [`themeConfig`](#themeconfig) and add `Pagination` manually.

| **Parameter** | **Type**      | **Values**   | **Default** | **Notes**                                                                                    |
| ------------- | ------------- | ------------ | ----------- | -------------------------------------------------------------------------------------------- |
| `classNames`  | Array, String | -            | `undefined` | `Pagination` by default uses the color given by the color schema currently active in Slidev. |
| `x`           | String        | `'l'`, `'r'` | `'r'`       | -                                                                                            |
| `y`           | String        | `'b'`, `'t'` | `'t'`       | -                                                                                            |

![Pagination](../assets/example-export/07.png)

## themeConfig

Global parameters of the theme can be set using the `themeConfig` block in the frontmatter of the first page.

Be aware that defining the `themeConfig` block initializes all parameters as `undefined`; hence you may need to set parameters albeit using defaults.

| **Parameter**             | **Type** | **Values**   | **Default** | **Notes**                                                                                                                                          |
| ------------------------- | -------- | ------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paginationPagesDisabled` | Array    | -            | `undefined` | Disable global rendering of `Pagination` for pages having individual `Pagination`.                                                                 |
| `paginationX`             | String   | `'l'`, `'r'` | `'r'`       | To disable global default rending, set both `paginationX` and `paginationY` to `undefined`. `Pagination` can then still be used on selected pages. |
| `paginationY`             | String   | `'b'`, `'t'` | `'t'`       | To disable global default rending, set both `paginationX` and `paginationY` to `undefined`. `Pagination` can then still be used on selected pages. |

## Contributing

- `npm run setup`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
