import React from "react";
import { render } from "@testing-library/react";
import Summary from "./Summary";

const htmlWithinLabel = {
  none: [
    `<a href="https://en.wikipedia.org/wiki/Honey"><strong>&mdash;Honey&mdash;</strong></a>`,
  ],
};

const disallowedHtmlWithinLabel = {
  none: [`<div style="color: gold;">the color of honey</a>`],
};

describe("summary primitive", () => {
  /**
   * test rendering of html in summary
   */
  it("Renders 3.0 HTML within a label", async () => {
    const { getByRole } = render(<Summary summary={htmlWithinLabel} />);
    const el = getByRole("link");
    expect(el.getAttribute("href")).toBe("https://en.wikipedia.org/wiki/Honey");
    expect(el).toContainHTML("<strong>—Honey—</strong>");
  });

  /**
   * test sanitization of html in summary
   */
  it("Renders 3.0 HTML within markup", async () => {
    const { getByText } = render(
      <Summary summary={disallowedHtmlWithinLabel} />
    );
    const el = getByText("the color of honey");
    expect(el).toContainHTML("the color of honey");
  });
});
