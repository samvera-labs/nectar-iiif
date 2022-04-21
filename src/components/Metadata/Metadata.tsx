import React from "react";
import MetadataItem from "./Item";
import { NectarMetadata } from "types/nectar";

const Metadata: React.FC<NectarMetadata> = ({ language, metadata, title }) => {
  if (!Array.isArray(metadata)) return <></>;

  return (
    <>
      {metadata.length > 0 && (
        <dl title={title}>
          {metadata.map((item, index) => {
            return <MetadataItem item={item} key={index} language={language} />;
          })}
        </dl>
      )}
    </>
  );
};

export default Metadata;
