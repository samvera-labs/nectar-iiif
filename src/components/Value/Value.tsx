import React from "react";
import { NectarValue } from "../../types/nectar";
import Markup from "../../components/Markup/Markup";

const Value: React.FC<NectarValue> = ({ as = "dd", lang, value }) => (
  <Markup markup={value} as={as} lang={lang} />
);

export default Value;
