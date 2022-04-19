import React from "react";
import { styled } from "@stitches/react";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarHomepage, NectarResource } from "types/nectar";

const StyledHomepage = styled("div", {});

const Resource = styled("span", {});

const Homepage: React.FC<NectarHomepage> = ({
  as = "div",
  children,
  homepage,
  language = "none",
}) => {
  let resourceAs: "span" | "li" = "span";
  if (as !== "div") resourceAs = "li";

  return (
    <StyledHomepage as={as}>
      {homepage.map((resource: NectarResource) => {
        const label = useGetLabel(resource.label, language) as string;
        return (
          <Resource as={resourceAs} key={resource.id}>
            <a href={resource.id} aria-label={label}>
              {children ? children : label}
            </a>
          </Resource>
        );
      })}
    </StyledHomepage>
  );
};

export default Homepage;
