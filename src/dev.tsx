import React from "react";
import ReactDOM from "react-dom";
import { InternationalString, MetadataItem } from "@iiif/presentation-3";
import { Label, Metadata } from "./index";

const Wrapper = () => {
  const label: InternationalString = { none: ["Alternate Title"] };

  const metadata: MetadataItem[] = [
    {
      label: { none: ["Pantalone Classico"] },
      value: { none: ["Fava"] },
    },
    {
      label: { none: ["Creator"] },
      value: { none: ["Fava, Antonio, 1949-"] },
    },
    {
      label: { none: ["Date"] },
      value: { none: ["2012"] },
    },
    {
      label: { none: ["Department"] },
      value: {
        none: ["Charles Deering McCormick Library of Special Collections"],
      },
    },
    {
      label: { none: ["Dimensions"] },
      value: { none: ["18 x 15 x 16 cm"] },
    },
    {
      label: { none: ["Genre"] },
      value: { none: ["comic masks"] },
    },
    {
      label: { none: ["Location"] },
      value: { none: ["Reggio Emilia"] },
    },
    {
      label: { none: ["Materials"] },
      value: { none: ["1 mask : grey leather, elastic, fiber"] },
    },
    {
      label: { none: ["Subject"] },
      value: {
        none: [
          "Masks",
          "Commedia dell'arte",
          "Italian drama (Comedy)",
          "Pantaloon (Fictitious character)",
        ],
      },
    },
    {
      label: { none: ["Work Type"] },
      value: { none: ["Image"] },
    },
  ];

  return (
    <>
      <Label label={label} as="h1" />
      <Metadata metadata={metadata} />
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
