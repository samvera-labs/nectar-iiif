import React from "react";
import { styled } from "@stitches/react";
import MetadataItem from "./Item";
import { NectarMetadata } from "types/nectar";

const StyledMetadata = styled("dl", {});

const Metadata: React.FC<NectarMetadata> = (props) => {
  const { as, metadata, language } = props;

  if (!Array.isArray(metadata)) return <></>;

  /**
   * @todo create hook/service for tidying HTMLElement attributes
   */
  const attributes = props;

  return (
    <>
      {metadata.length > 0 && (
        <StyledMetadata as={as} {...attributes}>
          {metadata.map((item, index) => {
            return <MetadataItem item={item} key={index} language={language} />;
          })}
        </StyledMetadata>
      )}
    </>
  );
};

export default Metadata;
