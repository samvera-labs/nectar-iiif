import React from "react";
import { NectarThumbnail } from "types/nectar";
import sanitizeAttributes from "services/html-element";
import ContentResource from "components/ContentResource/ContentResources";

const Thumbnail: React.FC<NectarThumbnail> = (props) => {
  const { thumbnail } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["thumbnail"];
  const attributes = sanitizeAttributes(props, remove);

  return (
    <>
      {thumbnail &&
        thumbnail.map((contentResource) => (
          <ContentResource contentResource={contentResource} {...attributes} />
        ))}
    </>
  );
};

export default Thumbnail;
