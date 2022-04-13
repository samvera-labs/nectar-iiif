import { MetadataItem } from "@iiif/presentation-3";
import Group from "components/Group/Group";
import React from "react";

interface RequiredStatementProps {
  requiredStatement: MetadataItem;
}

const RequiredStatement: React.FC<RequiredStatementProps> = ({
  requiredStatement,
}) => {
  if (!requiredStatement) return <></>;

  return (
    <dl>
      <Group item={requiredStatement} />
    </dl>
  );
};

export default RequiredStatement;
