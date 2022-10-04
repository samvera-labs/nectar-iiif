import React from "react";
import { styled } from "../../stitches";
import { useGetLabel } from "../../hooks/useGetLabel";
import { NectarPartOf } from "../../types/nectar";
import { sanitizeAttributes } from "../../services/html-element";

const StyledPartOf = styled("li", {});
const StyledWrapper = styled("ul", {});

const PartOf: React.FC<NectarPartOf> = (props) => {
  const { as, partOf } = props;

  /**
   * Create attributes and remove React props
   */
  const remove = ["as", "partOf"];
  const attributes = sanitizeAttributes(props, remove);

  return (
    <StyledWrapper as={as}>
      {partOf &&
        partOf.map((resource) => {
          const label = resource.label
            ? (useGetLabel(resource.label, attributes.lang) as string)
            : undefined;
          return (
            <StyledPartOf key={resource.id}>
              <a href={resource.id} {...attributes}>
                {label ? label : resource.id}
              </a>
            </StyledPartOf>
          );
        })}
    </StyledWrapper>
  );
};

export default PartOf;
