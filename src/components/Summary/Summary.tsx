import React from "react";
import Label from "components/Label/Label";
import { NectarSummary } from "types/nectar";

const Summary: React.FC<NectarSummary> = (props) => {
  const { as, summary, language } = props;

  /**
   * @todo create hook/service for tidying HTMLElement attributes
   */
  const attributes = props;

  return <Label as={as} label={summary} language={language} {...attributes} />;
};

export default Summary;
