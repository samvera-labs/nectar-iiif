import React from "react";
import ReactDOM from "react-dom";
import { InternationalString, MetadataItem } from "@iiif/presentation-3";
import { Label, Metadata, RequiredStatement } from "./index";

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

  const requiredStatement: MetadataItem = {
    label: {
      none: ["Attribution"],
    },
    value: {
      none: [
        "Courtesy of Northwestern University Libraries",
        "These images are from material in the collections of the Charles Deering McCormick Library of Special Collections of Northwestern University Libraries, and are provided for use by its students, faculty and staff, and by other researchers visiting this site, for research consultation and scholarly purposes only. Further distribution and/or any commercial use of the images from this site is not permitted.",
      ],
    },
  };

  return (
    <>
      <Label label={label} as="h1" />
      <Metadata metadata={metadata} />
      <RequiredStatement requiredStatement={requiredStatement} />
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
