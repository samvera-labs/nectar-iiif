import { MetadataItem } from "@iiif/presentation-3";
import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(<Wrapper />, document.getElementById("root"));
