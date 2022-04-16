import { MetadataItem } from "@iiif/presentation-3";
import Group from "components/Group/Group";
import React from "react";

interface MetadataProps {
  language?: string;
  metadata: MetadataItem[];
  title?: string;
}

const Metadata: React.FC<MetadataProps> = ({ language, metadata, title }) => {
  if (!Array.isArray(metadata)) return <></>;

  return (
    <>
      {metadata.length > 0 && (
        <dl title={title}>
          {metadata.map((item, index) => {
            return <Group item={item} key={index} language={language} />;
          })}
        </dl>
      )}
    </>
  );
};

export default Metadata;
