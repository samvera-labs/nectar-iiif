import React from "react";
import Label from "../../components/Label/Label";
import Value from "../../components/Value/Value";
import { NectarMetadataItem } from "../../types/nectar";
import CustomValue from "../Value/CustomValue";

const MetadataItem: React.FC<NectarMetadataItem> = (props) => {
  const { item, lang, customValueContent } = props;
  const { label, value } = item;

  return (
    <div role="group">
      <Label as="dt" label={label} lang={lang} />
      {customValueContent ? (
        <CustomValue
          as="dd"
          customValueContent={customValueContent}
          value={value}
          lang={lang}
        />
      ) : (
        <Value as="dd" value={value} lang={lang} />
      )}
    </div>
  );
};

export default MetadataItem;
