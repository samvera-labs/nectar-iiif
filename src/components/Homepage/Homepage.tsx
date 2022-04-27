import React from "react";
import { styled } from "stitches";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarHomepage, NectarResource } from "types/nectar";
import sanitizeAttributes from "services/html-element";

const StyledHomepage = styled("a", {});

const Homepage: React.FC<NectarHomepage> = (props) => {
  const { children, homepage } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "children"];
  const attributes = sanitizeAttributes(props, remove);

  return (
    <>
      {homepage &&
        homepage.map((resource) => {
          const label = useGetLabel(resource.label, attributes.lang) as string;
          return (
            <StyledHomepage
              aria-label={children ? label : undefined}
              href={resource.id}
              key={resource.id}
              {...attributes}
            >
              {children ? children : label}
            </StyledHomepage>
          );
        })}
    </>
  );
};

export default Homepage;
