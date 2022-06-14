import React from "react";
import Label from "../../components/Label/Label";
import Value from "../../components/Value/Value";
import { NectarMetadataItem } from "../../types/nectar";

const MetadataItem: React.FC<NectarMetadataItem> = (props) => {
  const { item, lang } = props;
  const { label, value } = item;
  return (
    <div role="group">
      <Label as="dt" label={label} lang={lang} />
      <Value as="dd" value={value} lang={lang} />
    </div>
  );
};

export default MetadataItem;
