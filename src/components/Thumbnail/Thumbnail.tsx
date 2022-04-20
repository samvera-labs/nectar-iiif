import React from "react";
import { styled } from "@stitches/react";
import { NectarThumbnail } from "types/nectar";
import { IIIFExternalWebResource } from "@iiif/presentation-3";
import ExternalWebResource from "components/ExternalWebResource/ExternalWebResource";
import { useGetLabel } from "hooks/useGetLabel";
import { Label } from "@samvera/nectar-iiif";

const StyledThumbnail = styled("div", {});

const Thumbnail: React.FC<NectarThumbnail> = ({
  altAsLabel,
  language,
  objectFit = "cover",
  thumbnail,
}) => {
  const alt = useGetLabel(altAsLabel, language);
  return (
    <>
      {thumbnail.map((resource: IIIFExternalWebResource) => {
        const { width = "200", height } = resource;
        return (
          <StyledThumbnail
            key={resource.id}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: "#c1c8cd",
            }}
          >
            <ExternalWebResource
              alt={alt as string | undefined}
              resource={resource}
              objectFit={objectFit}
            />
          </StyledThumbnail>
        );
      })}
    </>
  );
};

export default Thumbnail;
