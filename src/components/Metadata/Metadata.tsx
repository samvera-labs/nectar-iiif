import { MetadataItem } from "@iiif/presentation-3";
import Pair from "components/Pair/Pair";
import React from "react";

interface MetadataProps {
  metadata: MetadataItem[];
}

const Metadata: React.FC<MetadataProps> = ({ metadata }) => {
  if (!Array.isArray(metadata)) return <></>;

  return (
    <>
      {metadata.length > 0 && (
        <dl>
          {metadata.map((item, index) => {
            return <Pair item={item} key={index} />;
          })}
        </dl>
      )}
    </>
  );
};

export default Metadata;
