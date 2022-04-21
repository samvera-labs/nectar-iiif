import React from "react";
import { styled } from "@stitches/react";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarLabel } from "types/nectar";

const StyledLabel = styled("span", {});

const Label: React.FC<NectarLabel> = (props) => {
  const { as, label } = props;

  /**
   * @todo create hook/service for tidying HTMLElement attributes
   * @todo if lang "none", reset as undefined before passing to rendered element
   */
  const attributes = props;

  return (
    <StyledLabel as={as} {...attributes}>
      {useGetLabel(label, attributes.lang)}
    </StyledLabel>
  );
};

export default Label;
