import DOMPurify from "dompurify";

function createMarkup(html: string) {
  return { __html: sanitizeHTML(html) };
}

function sanitizeAttributes(props: any, remove: string[]) {
  const entries = Object.keys(props).filter((key) =>
    !remove.includes(key) ? key : null
  );

  let attributes: any = new Object();
  entries.forEach((key) => {
    attributes[key] = props[key];
  });

  return attributes as React.HTMLAttributes<HTMLElement>;
}

function sanitizeHTML(html: string) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "a",
      "b",
      "br",
      "em",
      "i",
      "img",
      "p",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
    ],
    ALLOWED_ATTR: ["href", "src", "alt"],
    ALLOW_UNKNOWN_PROTOCOLS: false,
  });
}

export { createMarkup, sanitizeAttributes, sanitizeHTML };
