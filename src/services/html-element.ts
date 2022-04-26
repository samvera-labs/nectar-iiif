function sanitizeAttributes(props: any, remove: string[]) {
  const entries = Object.keys(props).filter((key) =>
    !remove.includes(key) ? key : null
  );

  let attributes: React.HTMLAttributes<HTMLElement> = new Object();
  entries.forEach((key) => {
    attributes[key] = props[key];
  });

  return attributes;
}

export default sanitizeAttributes;
