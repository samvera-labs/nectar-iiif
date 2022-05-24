import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";

const internationalizedLabel = {
  none: ["the color of honey"],
  en: ["the colour of honey"],
  fr: ["la couleur du miel"],
};

const multipleValueLabel = {
  none: ["the", "color", "of", "honey"],
};

const htmlWithinLabel = {
  none: [
    `<a href="https://en.wikipedia.org/wiki/Honey"><strong>&mdash;Honey&mdash;</strong></a>`,
  ],
};

const disallowedHtmlWithinLabel = {
  none: [`<div style="color: gold;">the color of honey</a>`],
};

describe("label primitive", () => {
  /**
   * test internationalization and element assignment
   */
  it("Renders 3.0 label as an h1", async () => {
    const { getByRole } = render(
      <Label label={internationalizedLabel} as="h1" />
    );
    const el = getByRole("heading", { level: 1 });
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("the color of honey");
  });
  it("Renders 3.0 label as French value", async () => {
    const { getByText } = render(
      <Label label={internationalizedLabel} as="h1" lang="fr" />
    );
    const el = getByText("la couleur du miel");
    expect(el).toBeInTheDocument();
  });
  it("Renders 3.0 label as English value", async () => {
    const { getByText } = render(
      <Label label={internationalizedLabel} lang="en" />
    );
    const el = getByText("the colour of honey");
    expect(el).toBeInTheDocument();
  });

  /**
   * test multiple value join
   */
  it("Renders 3.0 label as comma separated string", async () => {
    const { getByRole } = render(<Label label={multipleValueLabel} as="h3" />);
    const el = getByRole("heading", { level: 3 });
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("the, color, of, honey");
  });

  /**
   * test multiple value join
   */
  it("Renders 3.0 label if set lang code does not exist", async () => {
    const { getByRole } = render(
      <Label label={multipleValueLabel} as="h5" lang="ja" />
    );
    const el = getByRole("heading", { level: 5 });
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("the, color, of, honey");
  });

  /**
   * test rendering of html
   */
  it("Renders 3.0 HTML within a label", async () => {
    const { getByRole } = render(<Label label={htmlWithinLabel} />);
    const el = getByRole("link");
    expect(el.getAttribute("href")).toBe("https://en.wikipedia.org/wiki/Honey");
    expect(el).toContainHTML("<strong>—Honey—</strong>");
  });

  /**
   * test sanitization of html
   */
  it("Renders 3.0 HTML within a label", async () => {
    const { getByText } = render(<Label label={disallowedHtmlWithinLabel} />);
    const el = getByText("the color of honey");
    expect(el).toContainHTML("the color of honey");
  });
});
