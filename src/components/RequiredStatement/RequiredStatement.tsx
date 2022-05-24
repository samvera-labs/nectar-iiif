import React from "react";
import { styled } from "stitches";
import MetadataItem from "components/Metadata/Item";
import { NectarRequiredStatement } from "types/nectar";
import { sanitizeAttributes } from "services/html-element";

const StyledRequiredStatement = styled("dl", {});

const RequiredStatement: React.FC<NectarRequiredStatement> = (props) => {
  const { as, requiredStatement } = props;

  if (!requiredStatement) return <></>;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "requiredStatement"];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <StyledRequiredStatement as={as} {...attributes}>
      <MetadataItem item={requiredStatement} lang={attributes.lang} />
    </StyledRequiredStatement>
  );
};

export default RequiredStatement;
