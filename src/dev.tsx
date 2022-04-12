import React from "react";
import ReactDOM from "react-dom";
import { InternationalString, MetadataItem } from "@iiif/presentation-3";
import { Label, Metadata, RequiredStatement, Summary } from "./index";

const Wrapper = () => {
  const label: InternationalString = { none: ["Alternate Title"] };

  const summary: InternationalString = {
    none: [
      '"Magnifico" - that is, great, grand, generous - means the exact opposite in this character, since the Commedia dell\'Arte Magnifico is decidedly avaricious. But besides this extremely human defect, the Magnifico represents the highest authority in the family. He is the one who is in charge of not only the economy and finances, but also the destiny of the household and all who live there. He decides whether or not...',
    ],
  };

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
      <Summary summary={summary} />
      <Metadata metadata={metadata} />
      <RequiredStatement requiredStatement={requiredStatement} />
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
