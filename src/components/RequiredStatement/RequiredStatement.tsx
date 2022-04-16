import { MetadataItem } from "@iiif/presentation-3";
import Group from "components/Group/Group";
import React from "react";

interface RequiredStatementProps {
  language?: string;
  requiredStatement: MetadataItem;
}

const RequiredStatement: React.FC<RequiredStatementProps> = ({
  language,
  requiredStatement,
}) => {
  if (!requiredStatement) return <></>;

  return (
    <dl>
      <Group item={requiredStatement} language={language} />
    </dl>
  );
};

export default RequiredStatement;
