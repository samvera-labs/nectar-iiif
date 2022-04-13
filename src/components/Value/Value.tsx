import { InternationalString } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import Label from "components/Label/Label";
import React from "react";

interface LabelProps {
  value: InternationalString;
}
const Value: React.FC<LabelProps> = ({ value }) => (
  <Label label={value} as="span" />
);

export default Value;
