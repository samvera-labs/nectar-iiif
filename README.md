# Nectar IIIF

ReactJS UI component library of IIIF Presentation API 3.0 property fluent primitives.

[**Demo**](https://samvera-labs.github.io/nectar-iiif)

---

## Documentation

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Primitives](#primitives)
  - [Label](#label)
  - [Summary](#summary)
  - [Required Statement](#required-statement)
  - [Metadata](#metadata)
  - [SeeAlso](#seealso)

---

<h2 id="installation">Installation</h2>

Install the component from your command line using `npm install`,

```shell
npm install @samvera/nectar-iiif
```

**OR** if you prefer Yarn, use `yarn add`.

```shell
yarn add @samvera/nectar-iiif
```

---

<h2 id="basic-usage">Basic Usage</h2>

Add the Nectar component(s) to your `jsx` or `tsx` code.

```jsx
import { Label, Summary } from "@samvera/nectar-iiif";
```

```jsx
/**
 * Some logic may be required to fetch the IIIF Manifest.
 */
const manifest = {...};

return (
  <>
    <Label label={manifest.label} as="h1" />
    <Summary summary={manifest.summary} as="p" />
  </>
);
```

---

## Primitives

All primitives accept HTMLElement attributes.

| Prop        | Type                          | Default     |
| ----------- | ----------------------------- | ----------- |
| `className` | `string`, `undefined`         | `undefined` |
| `style`     | `CSSProperties`, `undefined`  | `undefined` |
| `lang`      | `string`, `undefined`         | `undefined` |
| `title`     | `string`, `undefined`         | `undefined` |
| `data-*`    | `string`, `undefined`         | `undefined` |
| `aria-*`    | `AriaAttributes`, `undefined` | `undefined` |

The value of `lang` will couple with [InternationalString](https://github.com/IIIF-Commons/presentation-3-types/blob/main/iiif/descriptive.d.ts#L6-L8) props to output the denoted `label`, `value`, `summary` entries. If lang is undefined, entries will default to the first entry in the array index.

### Label

#### Reference

| Prop    | Type                                                                  | Default | Required           |
| ------- | --------------------------------------------------------------------- | ------- | ------------------ |
| `as`    | ` span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `label`, `dt`, `dd` | `span`  | --                 |
| `label` | [See IIIF](https://iiif.io/api/presentation/3.0/#label)               | --      | :white_check_mark: |

#### Usage

```jsx
import { Label } from "@samvera/nectar-iiif";
```

```jsx
return <Label label={manifest.label} as="h1" lang="en" />;
```

### Summary

#### Reference

| Prop      | Type                                                      | Default | Required           |
| --------- | --------------------------------------------------------- | ------- | ------------------ |
| `as`      | ` span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`          | `span`  | --                 |
| `summary` | [See IIIF](https://iiif.io/api/presentation/3.0/#summary) | --      | :white_check_mark: |

#### Usage

```jsx
import { Summary } from "@samvera/nectar-iiif";
```

```jsx
return <Summary summary={manifest.summary} as="p" />;
```

### Metadata

```jsx
import { Metadata } from "@samvera/nectar-iiif";
```

```jsx
return <Metadata metadata={manifest.metadata} />;
```

### Required Statement

```jsx
import { RequiredStatement } from "@samvera/nectar-iiif";
```

```jsx
return <RequiredStatement requiredStatement={manifest.requiredStatement} />;
```

### Homepage

```jsx
import { Homepage } from "@samvera/nectar-iiif";
```

Wrap resource label with homepage id.

```jsx
return <Homepage homepage={manifest.homepage} />;
```

Wrap React children with homepage id.

```jsx
return (
  <Homepage homepage={manifest.homepage}>
    <figure>...</figure>
  </Homepage>
);
```

### SeeAlso

#### Reference

| Prop      | Type                                                      | Default | Required           |
| --------- | --------------------------------------------------------- | ------- | ------------------ |
| `as`      | ` ol`, `ul`                                               | `ul`    | --                 |

| `seeAlso` | [See IIIF](https://iiif.io/api/presentation/3.0/#seealso) | --      | :white_check_mark: |

```jsx
import { SeeAlso } from "@samvera/nectar-iiif";
```

```jsx
return <SeeAlso seeAlso={manifest.seeAlso} as="li" />;
```
