import React from "react";
import { NectarSummary } from "../../types/nectar";
import { sanitizeAttributes } from "../../services/html-element";
import Markup from "../../components/Markup/Markup";

const Summary: React.FC<NectarSummary> = (props) => {
  const { as, summary } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "summary"];
  let attributes = sanitizeAttributes(props, remove);

  return <Markup as={as} markup={summary} {...attributes} />;
};

export default Summary;
