import React from "react";
import { styled } from "@stitches/react";
import { useGetImageResource } from "hooks/useGetImageResource";
import { NectarExternalWebResource } from "types/nectar";

const StyledResource = styled("img", {});

const ExternalWebResource: React.FC<NectarExternalWebResource> = ({
  resource,
}) => {
  const { type, id, width, height } = resource;
  switch (type) {
    case "Image":
      const src = useGetImageResource(resource);
      return (
        <StyledResource
          src={src}
          as="img"
          key={id}
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      );
    case "Sound":
      return <StyledResource src={id} as="video" key={id} />;
    default:
      console.warn(
        `Resource type: ${type} is not valid or not yet supported in Nectar.`
      );
      return <></>;
  }
};

export default ExternalWebResource;
