import React from "react";
import { styled } from "../../stitches";
import { getLabelAsString } from "../../services/label-helpers";
import { NectarLabel } from "../../types/nectar";
import { sanitizeAttributes } from "../../services/html-element";

const StyledLabel = styled("span", {});

const Label: React.FC<NectarLabel> = (props) => {
  const { as, label } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "label"];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <StyledLabel as={as} {...attributes}>
      {getLabelAsString(label, attributes.lang as string) as string}
    </StyledLabel>
  );
};

export default Label;
