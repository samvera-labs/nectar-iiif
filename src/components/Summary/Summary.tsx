import React from "react";
import Label from "components/Label/Label";
import { NectarSummary } from "types/nectar";

const Summary: React.FC<NectarSummary> = (props) => {
  const { as, summary } = props;

  /**
   * @todo create hook/service for tidying HTMLElement attributes
   */
  const attributes = props;

  return <Label as={as} label={summary} {...attributes} />;
};

export default Summary;
