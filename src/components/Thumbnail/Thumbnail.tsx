import React from "react";
import { styled } from "@stitches/react";
import { NectarThumbnail } from "types/nectar";
import { IIIFExternalWebResource } from "@iiif/presentation-3";
import ExternalWebResource from "components/ExternalWebResource/ExternalWebResource";

const StyledThumbnail = styled("div", {
  backgroundColor: "#f6f6f6",
});

const Thumbnail: React.FC<NectarThumbnail> = ({ thumbnail }) => (
  <>
    {thumbnail.map((resource: IIIFExternalWebResource) => (
      <StyledThumbnail>
        <ExternalWebResource resource={resource} />
      </StyledThumbnail>
    ))}
  </>
);

export default Thumbnail;
