import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { styled } from "@stitches/react";
import { useGetImageResource } from "hooks/useGetImageResource";
import { NectarExternalWebResource } from "types/nectar";

const StyledResource = styled("img", {
  width: "100%",
  height: "100%",
  backgroundColor: "#f6f6f6",
  transition: "all 1.25s cubic-bezier(0.16, 1, 0.3, 1)",
  opacity: 0,

  [`&.loaded`]: {
    opacity: 1,
  },
});

const ExternalWebResource: React.FC<NectarExternalWebResource> = ({
  resource,
  objectFit,
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  const { type, id } = resource;
  switch (type) {
    case "Image":
      const src = useGetImageResource(resource);
      return (
        <StyledResource
          src={src}
          ref={imgRef}
          as="img"
          key={id}
          style={{ objectFit: objectFit }}
          onLoad={() => setLoaded(true)}
          className={clsx("source", loaded && "loaded")}
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
