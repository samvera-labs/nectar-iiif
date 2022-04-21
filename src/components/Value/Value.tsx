import React from "react";
import Label from "components/Label/Label";
import { NectarValue } from "types/nectar";

const Value: React.FC<NectarValue> = ({ as = "dd", lang, value }) => (
  <Label label={value} as={as} lang={lang} />
);

export default Value;
