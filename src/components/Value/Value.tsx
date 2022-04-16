import { InternationalString } from "@iiif/presentation-3";
import Label from "components/Label/Label";
import React from "react";

interface LabelProps {
  as?: "span" | "dd";
  language?: string;
  value: InternationalString;
}
const Value: React.FC<LabelProps> = ({ as = "dd", language, value }) => (
  <Label label={value} as={as} language={language} />
);

export default Value;
