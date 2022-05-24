import React from "react";
import { styled } from "stitches";
import MetadataItem from "./Item";
import { NectarMetadata } from "types/nectar";
import { sanitizeAttributes } from "services/html-element";

const StyledMetadata = styled("dl", {});

const Metadata: React.FC<NectarMetadata> = (props) => {
  const { as, metadata } = props;

  if (!Array.isArray(metadata)) return <></>;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "metadata"];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <>
      {metadata.length > 0 && (
        <StyledMetadata as={as} {...attributes}>
          {metadata.map((item, index) => {
            return (
              <MetadataItem item={item} key={index} lang={attributes.lang} />
            );
          })}
        </StyledMetadata>
      )}
    </>
  );
};

export default Metadata;
