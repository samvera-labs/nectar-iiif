import React from "react";
import { createRoot } from "react-dom/client";
import { MetadataItem } from "@iiif/presentation-3";
import App from "./index";

const Wrapper = () => {
  const metadata: MetadataItem[] = [
    {
      label: { en: ["Creator"] },
      value: { en: ["Anne Artist (1776-1824)"] },
    },
  ];

  return (
    <>
      <App metadata={metadata} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Wrapper />);
