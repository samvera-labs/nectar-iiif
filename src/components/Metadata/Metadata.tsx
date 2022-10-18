import React from "react";
import { styled } from "../../stitches";
import MetadataItem from "./Item";
import { NectarMetadata } from "../../types/nectar";
import { parseCustomContent } from "../../services/custom";
import { sanitizeAttributes } from "../../services/html-element";

const StyledMetadata = styled("dl", {});

const Metadata: React.FC<NectarMetadata> = (props) => {
  const { as, customValueContent, metadata } = props;

  if (!Array.isArray(metadata)) return <></>;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "customValueContent", "metadata"];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <>
      {metadata.length > 0 && (
        <StyledMetadata as={as} {...attributes}>
          {metadata.map((item, index) => {
            const customValue = customValueContent
              ? parseCustomContent(item.label, customValueContent)
              : undefined;

            return (
              <MetadataItem
                customValueContent={customValue}
                item={item}
                key={index}
                lang={attributes?.lang}
              />
            );
          })}
        </StyledMetadata>
      )}
    </>
  );
};

export default Metadata;
