import {
  NectarProvider,
  getRealPropertyValue,
} from "../../context/nectar-context";
import React from "react";
import { styled } from "../../stitches";
import MetadataItem from "../../components/Metadata/Item";
import { NectarRequiredStatement } from "../../types/nectar";
import { sanitizeAttributes } from "../../services/html-element";

const StyledRequiredStatement = styled("dl", {});

const RequiredStatement: React.FC<NectarRequiredStatement> = (props) => {
  const { as, requiredStatement } = props;

  if (!requiredStatement) return <></>;

  const delimiter = getRealPropertyValue(props, "customValueDelimiter");

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "customValueDelimiter", "requiredStatement"];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <NectarProvider
      {...(typeof delimiter === "string"
        ? { initialState: { delimiter: delimiter as string } }
        : undefined)}
    >
      <StyledRequiredStatement as={as} {...attributes}>
        <MetadataItem item={requiredStatement} lang={attributes.lang} />
      </StyledRequiredStatement>
    </NectarProvider>
  );
};

export default RequiredStatement;
