import React from "react";
import { styled } from "../../stitches";
import { getLabelAsString } from "../../services/label-helpers";
import { NectarMarkup } from "../../types/nectar";
import { createMarkup, sanitizeAttributes } from "../../services/html-element";
import {
  NectarContext,
  NectarProvider,
  useNectarContext,
} from "../../context/nectar-context";

const StyledMarkup = styled("span", {});

const Markup: React.FC<NectarMarkup> = (props) => {
  const { as, markup } = props;
  const { delimiter } = useNectarContext();

  if (!markup) return <></>;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "markup"];
  let attributes = sanitizeAttributes(props, remove);

  const html = createMarkup(
    getLabelAsString(markup, attributes.lang as string, delimiter) as string
  );

  return (
    <StyledMarkup as={as} {...attributes} dangerouslySetInnerHTML={html} />
  );
};

const MarkupWrapper: React.FC<NectarMarkup> = (props) => {
  const context = React.useContext(NectarContext);

  return context ? (
    <Markup {...props} />
  ) : (
    <NectarProvider>
      <Markup {...props} />
    </NectarProvider>
  );
};

export default MarkupWrapper;
