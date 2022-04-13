import { InternationalString } from "@iiif/presentation-3";
import Label from "components/Label/Label";
import React from "react";

interface LabelProps {
  as?: "span" | "dd";
  value: InternationalString;
}
const Value: React.FC<LabelProps> = ({ value, as = "dd" }) => (
  <Label label={value} as={as} />
);

export default Value;
