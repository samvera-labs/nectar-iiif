import React from "react";
import { styled } from "@stitches/react";
import MetadataItem from "components/Metadata/Item";
import { NectarRequiredStatement } from "types/nectar";

const StyledRequiredStatement = styled("dl", {});

const RequiredStatement: React.FC<NectarRequiredStatement> = (props) => {
  const { as, language, requiredStatement } = props;

  if (!requiredStatement) return <></>;

  /**
   * @todo create hook/service for tidying HTMLElement attributes
   */
  const attributes = props;

  return (
    <StyledRequiredStatement as={as} {...attributes}>
      <MetadataItem item={requiredStatement} language={language} />
    </StyledRequiredStatement>
  );
};

export default RequiredStatement;
