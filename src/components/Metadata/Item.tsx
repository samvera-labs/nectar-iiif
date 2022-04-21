import React from "react";
import Label from "components/Label/Label";
import Value from "components/Value/Value";
import { NectarMetadataItem } from "types/nectar";

const MetadataItem: React.FC<NectarMetadataItem> = (props) => {
  const { item, language } = props;
  const { label, value } = item;
  return (
    <div role="group">
      <Label as="dt" label={label} language={language} />
      <Value as="dd" value={value} language={language} />
    </div>
  );
};

export default MetadataItem;
