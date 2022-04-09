import { InternationalString } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import React from "react";

interface LabelProps {
  value: InternationalString;
}
const Value: React.FC<LabelProps> = ({ value }) => <>{useGetLabel(value)}</>;

export default Value;
