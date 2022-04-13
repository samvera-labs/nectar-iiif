import { MetadataItem } from "@iiif/presentation-3";
import Label from "components/Label/Label";
import Value from "components/Value/Value";
import React from "react";

interface GroupProps {
  item: MetadataItem;
}

const Group: React.FC<GroupProps> = ({ item }) => {
  const { label, value } = item;
  return (
    <div role="group">
      <Label label={label} as="dt" />
      <Value value={value} as="dd" />
    </div>
  );
};

export default Group;
