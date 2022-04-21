# Nectar IIIF

ReactJS UI component library of IIIF Presentation API 3.0 property fluent primitives.

[**Demo**](https://codesandbox.io/s/nectar-vault-4dzc7l?file=/src/App.js)

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

All primitives accept HTMLElement attributes in a JSX flavor.

| Prop        | Type                         | Default     |
| ----------- | ---------------------------- | ----------- |
| `className` | `string`, `undefined`        | `undefined` |
| `style`     | `CSSProperties`, `undefined` | `undefined` |
| `lang`      | `string`, `undefined`        | `undefined` |
| `data-*`    | `string`, `undefined`        | --          |
| `aria-*`    | `AriaAttributes`             | --          |

The value of `lang` will couple with [InternationalString](https://github.com/IIIF-Commons/presentation-3-types/blob/main/iiif/descriptive.d.ts#L6-L8) props to output the denoted `label`, `value`, `summary` entries. If lang is undefined, entries will default to the first entry in the array index.

### Label

#### Reference

| Prop    | Type                                                                  | Default | Required           |
| ------- | --------------------------------------------------------------------- | ------- | ------------------ |
| `as`    | ` span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `label`, `dt`, `dd` | `span`  | --                 |
| `label` | `InternationalString`                                                 | --      | :white_check_mark: |

#### Usage

```jsx
import { Label } from "@samvera/nectar-iiif";
```

```jsx
return <Label label={manifest.label} as="h1" language="en" />;
```

### Summary

#### Reference

| Prop      | Type                                             | Default | Required           |
| --------- | ------------------------------------------------ | ------- | ------------------ |
| `as`      | ` span`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p` | `span`  | --                 |
| `summary` | `InternationalString                             | --      | :white_check_mark: |

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
