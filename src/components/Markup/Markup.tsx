import React from "react";
import { styled } from "../../stitches";
import { getLabelAsString } from "../../services/label-helpers";
import { NectarMarkup } from "../../types/nectar";
import { createMarkup, sanitizeAttributes } from "../../services/html-element";

const StyledMarkup = styled("span", {});

const Markup: React.FC<NectarMarkup> = (props) => {
  const { as, markup } = props;

  if (!markup) return <></>;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "markup"];
  let attributes = sanitizeAttributes(props, remove);

  const html = createMarkup(
    getLabelAsString(markup, attributes.lang as string) as string
  );

  return (
    <StyledMarkup as={as} {...attributes} dangerouslySetInnerHTML={html} />
  );
};

export default Markup;
