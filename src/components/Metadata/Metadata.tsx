import React from "react";
import Group from "components/Group/Group";
import { NectarMetadata } from "types/nectar";

const Metadata: React.FC<NectarMetadata> = ({ language, metadata, title }) => {
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
