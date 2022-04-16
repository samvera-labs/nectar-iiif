import { MetadataItem } from "@iiif/presentation-3";
import Label from "components/Label/Label";
import Value from "components/Value/Value";
import React from "react";

interface GroupProps {
  item: MetadataItem;
  language?: string;
}

const Group: React.FC<GroupProps> = ({ item, language }) => {
  const { label, value } = item;
  return (
    <div role="group">
      <Label as="dt" label={label} language={language} />
      <Value as="dd" value={value} language={language} />
    </div>
  );
};

export default Group;
