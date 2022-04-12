# Nectar IIIF
ReactJS UI component library of IIIF Presentation API 3.0 property fluent primitives.

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

Add the Nectar component to your `jsx` or `tsx` code.

```jsx
import {
  Label,
  Metadata,
  RequiredStatement,
  Summary
} from "@samvera/nectar-iiif";
```

```jsx
const manifest = {...};

return (
  <>
    <Label label={manifest.label} as="h1" />
    <Summary summary={manifest.summary} as="p" />
    <Metadata metadata={manifest.metadata} />
    <RequiredStatement requiredStatement={manifest.requiredStatement} />
  </>
);
```

---
