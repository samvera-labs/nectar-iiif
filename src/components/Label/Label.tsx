import { styled } from "@stitches/react";
import { InternationalString } from "@iiif/presentation-3";
import { useGetLabel } from "hooks/useGetLabel";
import React from "react";

interface LabelProps {
  as?:
    | "span"
    | "p"
    | "label"
    | "dt"
    | "dd"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  label: InternationalString;
}

const StyledLabel = styled("span", {});

const Label: React.FC<LabelProps> = ({ as = "span", label }) => (
  <StyledLabel as={as}>{useGetLabel(label)}</StyledLabel>
);

export default Label;
