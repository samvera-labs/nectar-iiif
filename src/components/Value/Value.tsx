import React from "react";
import Label from "components/Label/Label";
import { NectarValue } from "types/nectar";

const Value: React.FC<NectarValue> = ({ as = "dd", language, value }) => (
  <Label label={value} as={as} language={language} />
);

export default Value;
