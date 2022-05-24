import React from "react";
import { styled } from "stitches";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarLabel } from "types/nectar";
import { createMarkup, sanitizeAttributes } from "services/html-element";

const StyledLabel = styled("span", {});

const Label: React.FC<NectarLabel> = (props) => {
  const { as, label } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "label"];
  let attributes = sanitizeAttributes(props, remove);

  const html = createMarkup(
    useGetLabel(label, attributes.lang as string) as string
  );

  return <StyledLabel as={as} {...attributes} dangerouslySetInnerHTML={html} />;
};

export default Label;
