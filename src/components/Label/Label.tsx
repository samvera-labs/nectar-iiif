import React from "react";
import { styled } from "@stitches/react";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarLabel } from "types/nectar";

const StyledLabel = styled("span", {});

const Label: React.FC<NectarLabel> = ({
  as = "span",
  label,
  language = "none",
}) => <StyledLabel as={as}>{useGetLabel(label, language)}</StyledLabel>;

export default Label;
