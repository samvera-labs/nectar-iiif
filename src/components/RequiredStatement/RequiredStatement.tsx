import React from "react";
import MetadataItem from "components/Metadata/Item";
import { NectarRequiredStatement } from "types/nectar";

const RequiredStatement: React.FC<NectarRequiredStatement> = ({
  language,
  requiredStatement,
}) => {
  if (!requiredStatement) return <></>;

  return (
    <dl>
      <MetadataItem item={requiredStatement} language={language} />
    </dl>
  );
};

export default RequiredStatement;
