import {
  NectarProvider,
  getRealPropertyValue,
} from "../../context/nectar-context";
import React from "react";
import { NectarSummary } from "../../types/nectar";
import { sanitizeAttributes } from "../../services/html-element";
import Markup from "../../components/Markup/Markup";

const Summary: React.FC<NectarSummary> = (props) => {
  const { as, summary } = props;

  const delimiter = getRealPropertyValue(props, "customValueDelimiter");

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "customValueDelimiter", "summary"];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <NectarProvider
      {...(typeof delimiter === "string"
        ? { initialState: { delimiter: delimiter as string } }
        : undefined)}
    >
      <Markup as={as} markup={summary} {...attributes} />
    </NectarProvider>
  );
};

export default Summary;
