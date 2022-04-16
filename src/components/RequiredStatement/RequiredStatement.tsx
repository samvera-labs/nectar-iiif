import React from "react";
import Group from "components/Group/Group";
import { NectarRequiredStatement } from "types/nectar";

const RequiredStatement: React.FC<NectarRequiredStatement> = ({
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
