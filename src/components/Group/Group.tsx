import React from "react";
import Label from "components/Label/Label";
import Value from "components/Value/Value";
import { NectarGroup } from "types/nectar";

const Group: React.FC<NectarGroup> = ({ item, language }) => {
  const { label, value } = item;
  return (
    <div role="group">
      <Label as="dt" label={label} language={language} />
      <Value as="dd" value={value} language={language} />
    </div>
  );
};

export default Group;
