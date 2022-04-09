import { MetadataItem } from "@iiif/presentation-3";
import Label from "components/Label/Label";
import Value from "components/Value/Value";
import React from "react";

interface PairProps {
  item: MetadataItem;
}

const Pair: React.FC<PairProps> = ({ item }) => {
  const { label, value } = item;
  return (
    <>
      <dt>
        <Label label={label} />
      </dt>
      <dd>
        <Value value={value} />
      </dd>
    </>
  );
};

export default Pair;
