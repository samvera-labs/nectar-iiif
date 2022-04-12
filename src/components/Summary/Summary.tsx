import { InternationalString } from "@iiif/presentation-3";
import React from "react";
import Label from "components/Label/Label";

interface SummaryProps {
  as?: "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  summary: InternationalString;
}

const Summary: React.FC<SummaryProps> = ({ as = "p", summary }) => (
  <Label label={summary} as={as} />
);

export default Summary;
