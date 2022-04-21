import React from "react";
import { styled } from "@stitches/react";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarLabel } from "types/nectar";

const StyledLabel = styled("span", {});

const Label: React.FC<NectarLabel> = (props) => {
  const { as, label, language } = props;

  /**
   * @todo create hook/service for tidying HTMLElement attributes
   */
  const attributes = props;

  return (
    <StyledLabel as={as} {...attributes}>
      {useGetLabel(label, language)}
    </StyledLabel>
  );
};

export default Label;
