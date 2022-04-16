import React from "react";
import Label from "components/Label/Label";
import { NectarSummary } from "types/nectar";

const Summary: React.FC<NectarSummary> = ({ as = "p", language, summary }) => (
  <Label as={as} label={summary} language={language} />
);

export default Summary;
