import { sanitizeHTML } from "services/html-element";

describe("sanitizeHTML method", () => {
  it("allowed http protocols.", () => {
    const allowedHttp = `<a href="http://wikipedia.org/Honey">Honey</a>`;
    const clean = sanitizeHTML(allowedHttp);
    expect(clean).toBe('<a href="http://wikipedia.org/Honey">Honey</a>');
  });

  it("cleans ftp protocols.", () => {
    const disallowedFtp = `<a href="ftp://0.0.0.0/foo">Bar</a>`;
    const clean = sanitizeHTML(disallowedFtp);
    expect(clean).toBe("<a>Bar</a>");
  });
});
