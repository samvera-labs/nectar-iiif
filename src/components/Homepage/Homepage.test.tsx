import React from "react";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

const homepageResource = [
  {
    id: "https://en.wikipedia.org/wiki/Western_honey_bee",
    type: "Text",
    label: { none: ["Apis mellifera"], en: ["Western honey bee"] },
    format: "text/html",
  },
];

describe("homepage primitive", () => {
  it("Renders 3.0 homepage as div wrapping resources", async () => {
    const { getByTestId } = render(<Homepage homepage={homepageResource} />);
    const el = getByTestId("nectar-homepage");
    expect(el.tagName).toBe("DIV");
    expect(el).toHaveTextContent("Apis mellifera");
    expect(el).toBeInTheDocument();
  });
  it("Renders 3.0 homepage as unordered list wrapping resources", async () => {
    const { getByTestId } = render(
      <Homepage homepage={homepageResource} as="ul" lang="en" />
    );
    const el = getByTestId("nectar-homepage");
    expect(el.tagName).toBe("UL");
    expect(el).toHaveTextContent("Western honey bee");
    expect(el).toBeInTheDocument();
  });
  it("Renders 3.0 homepage with aria label on anchor", async () => {
    const { getByTestId } = render(<Homepage homepage={homepageResource} />);
    const el = getByTestId("nectar-homepage");
    expect(el.querySelectorAll("a")[0]).toHaveAttribute("aria-label");
    expect(el.querySelectorAll("a")[0].getAttribute("aria-label")).toBe(
      "Apis mellifera"
    );
  });
  it("Renders 3.0 homepage anchor(s) to wrap children", async () => {
    const { getByTestId } = render(
      <Homepage homepage={homepageResource}>sweet child o' mine</Homepage>
    );
    const el = getByTestId("nectar-homepage");
    expect(el).toHaveTextContent("sweet child o' mine");
    expect(el).toBeInTheDocument();
  });
});
