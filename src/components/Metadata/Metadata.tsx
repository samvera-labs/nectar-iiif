import React from "react";
import { styled } from "../../stitches";
import MetadataItem from "./Item";
import { NectarMetadata } from "../../types/nectar";
import {
  NectarProvider,
  getRealPropertyValue,
} from "../../context/nectar-context";
import { parseCustomContent } from "../../services/custom";
import { sanitizeAttributes } from "../../services/html-element";

const StyledMetadata = styled("dl", {});

const Metadata: React.FC<NectarMetadata> = (props) => {
  const { as, customValueContent, metadata } = props;

  if (!Array.isArray(metadata)) return <></>;

  const delimiter = getRealPropertyValue(props, "customValueDelimiter");

  /**
   * Create attributes and remove React props
   */
  const remove = [
    "as",
    "customValueContent",
    "customValueDelimiter",
    "metadata",
  ];
  let attributes = sanitizeAttributes(props, remove);

  return (
    <NectarProvider
      {...(typeof delimiter === "string"
        ? { initialState: { delimiter: delimiter as string } }
        : undefined)}
    >
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
    </NectarProvider>
  );
};

export default Metadata;
