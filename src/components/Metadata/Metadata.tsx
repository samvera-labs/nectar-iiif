import { MetadataItem } from "@iiif/presentation-3";
import Pair from "components/Pair/Pair";
import React from "react";

interface MetadataProps {
  metadata: MetadataItem[];
}

const Metadata: React.FC<MetadataProps> = ({ metadata }) => {
  return (
    <dd>
      {metadata.map((item) => {
        return <Pair item={item} />;
      })}
    </dd>
  );
};

export default Metadata;
