import React from "react";
import Label from "../../components/Label/Label";
import Value from "../../components/Value/Value";
import { NectarMetadataItem } from "../../types/nectar";
import CustomValue from "../Value/CustomValue";
import { getLabelAsString } from "../../services/label-helpers";

const MetadataItem: React.FC<NectarMetadataItem> = (props) => {
  const { item, lang, customValueContent } = props;
  const { label, value } = item;

  /**
   * Create value for data-label attribute for use as a selector
   */
  const dataAttribute = getLabelAsString(label)
    ?.replace(" ", "-")
    .toLowerCase();

  return (
    <div role="group" data-label={dataAttribute}>
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
