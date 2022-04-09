import { InternationalString } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import React from "react";

interface LabelProps {
  label: InternationalString;
}
const Label: React.FC<LabelProps> = ({ label }) => {
  return <>{useGetLabel(label)}</>;
};

export default Label;
