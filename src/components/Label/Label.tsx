import React from "react";
import { styled } from "@stitches/react";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarLabel } from "types/nectar";
import sanitizeAttributes from "services/html-element";

const StyledLabel = styled("span", {});

const Label: React.FC<NectarLabel> = (props) => {
  const { as, label } = props;

  /**
   * r
   */
  const remove = ["as", "label"];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <StyledLabel as={as} {...attributes}>
      {useGetLabel(label, attributes.lang as string)}
    </StyledLabel>
  );
};

export default Label;
