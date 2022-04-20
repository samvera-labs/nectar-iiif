import React from "react";
import { styled } from "@stitches/react";
import { NectarThumbnail } from "types/nectar";
import { IIIFExternalWebResource } from "@iiif/presentation-3";
import ExternalWebResource from "components/ExternalWebResource/ExternalWebResource";

const StyledThumbnail = styled("div", {});

const Thumbnail: React.FC<NectarThumbnail> = ({
  objectFit = "cover",
  thumbnail,
}) => (
  <>
    {thumbnail.map((resource: IIIFExternalWebResource) => (
      <StyledThumbnail
        style={{
          width: `${resource?.width}px`,
          height: `${resource?.height}px`,
        }}
      >
        <ExternalWebResource resource={resource} objectFit={objectFit} />
      </StyledThumbnail>
    ))}
  </>
);

export default Thumbnail;
