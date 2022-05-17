import React from "react";
import { styled } from "stitches";
import { useGetLabel } from "hooks/useGetLabel";
import { NectarSeeAlso } from "types/nectar";
import sanitizeAttributes from "services/html-element";

const StyledSeeAlso = styled("li", {});
const StyledWrapper = styled("ul", {});

const SeeAlso: React.FC<NectarSeeAlso> = (props) => {
  const { as, seeAlso } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "seeAlso"];
  const attributes = sanitizeAttributes(props, remove);

  return (
    <StyledWrapper as={as}>
      {seeAlso &&
        seeAlso.map((resource) => {
          const label = useGetLabel(resource.label, attributes.lang) as string;
          return (
            <StyledSeeAlso key={resource.id}>
              <a href={resource.id} {...attributes}>
                {label ? label : resource.id}
              </a>
            </StyledSeeAlso>
          );
        })}
    </StyledWrapper>
  );
};

export default SeeAlso;
