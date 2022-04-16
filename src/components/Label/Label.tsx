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
  language?: string;
}

const StyledLabel = styled("span", {});

const Label: React.FC<LabelProps> = ({
  as = "span",
  label,
  language = "none",
}) => <StyledLabel as={as}>{useGetLabel(label, language)}</StyledLabel>;

export default Label;
