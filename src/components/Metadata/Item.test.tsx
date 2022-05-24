import React from "react";
import { render, screen } from "@testing-library/react";
import Item from "./Item";

const htmlWithinMetadataItem = {
  label: { none: ["Type"] },
  value: {
    none: [
      `<a href="https://en.wikipedia.org/wiki/Honey"><strong>Honey</strong></a>`,
    ],
  },
};

const htmlWithinLabel = {
  label: {
    none: [
      `<a href="https://en.wikipedia.org/wiki/Type"><strong>Type</strong></a>`,
    ],
  },
  value: {
    none: [`Honey`],
  },
};

describe("metadata primitive (item)", () => {
  /**
   * test rendering of html in metadata value
   */
  it("Test rendering of html in metadata value", async () => {
    const { getByRole } = render(<Item item={htmlWithinMetadataItem} />);
    const el = getByRole("link");
    expect(el.getAttribute("href")).toBe("https://en.wikipedia.org/wiki/Honey");
    expect(el).toContainHTML("<strong>Honey</strong>");
  });

  /**
   * test rendering not rendering HTML markup for label
   */
  it("Test rendering not rendering HTML markup for label", async () => {
    render(<Item item={htmlWithinLabel} />);
    const el = screen.queryByText("Type");
    expect(el).toBeNull;
  });
});
