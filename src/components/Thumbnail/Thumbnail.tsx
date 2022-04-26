import React from "react";
import { styled } from "stitches";
import { useGetImageResource } from "hooks/useGetImageResource";
import { NectarThumbnail } from "types/nectar";
import sanitizeAttributes from "services/html-element";
import { useGetLabel } from "hooks/useGetLabel";

const StyledResource = styled("img", {});

const Thumbnail: React.FC<NectarThumbnail> = (props) => {
  const { thumbnail, altAsLabel } = props;

  let alt: string | undefined;
  if (altAsLabel) alt = useGetLabel(altAsLabel) as string;

  /**
   * Create attributes and remove React props
   */
  const remove = ["thumbnail", "altAsLabel"];
  const attributes = sanitizeAttributes(props, remove);

  return (
    <>
      {thumbnail &&
        thumbnail.map((resource) => {
          const { type, id, width = 200, height } = resource;
          switch (type) {
            case "Image":
              const src = useGetImageResource(resource);
              return (
                <StyledResource
                  as="img"
                  alt={alt}
                  src={src}
                  key={id}
                  css={{ width: width, height: height }}
                  {...attributes}
                />
              );

            case "Sound":
              return <StyledResource as="video" key={id} src={id} />;

            case "Video":
              return <StyledResource as="video" key={id} src={id} />;

            default:
              console.warn(
                `Resource type: ${type} is not valid or not yet supported in Nectar.`
              );
              return <></>;
          }
        })}
    </>
  );
};

export default Thumbnail;
