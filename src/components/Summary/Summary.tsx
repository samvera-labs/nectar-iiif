import React from "react";
import Label from "components/Label/Label";
import { NectarSummary } from "types/nectar";
import { sanitizeAttributes } from "services/html-element";

const Summary: React.FC<NectarSummary> = (props) => {
  const { as, summary } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "summary"];
  let attributes = sanitizeAttributes(props, remove);

  return <Label as={as} label={summary} {...attributes} />;
};

export default Summary;
