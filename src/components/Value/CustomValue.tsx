import React, { cloneElement, Fragment } from "react";
import { NectarCustomValue } from "../../types/nectar";
import { styled } from "../../stitches";
import { getLabelEntries } from "../../services/label-helpers";

const StyledCustomValue = styled("span", {});

const CustomValue: React.FC<NectarCustomValue> = ({
  as = "dd",
  customValueContent,
  lang,
  value,
}) => {
  const entries = getLabelEntries(value, lang)?.map((entry) => {
    return cloneElement(customValueContent, {
      value: entry,
    });
  });

  return (
    <StyledCustomValue as={as} lang={lang}>
      {entries?.map((entry, index) => [
        index > 0 && ", ",
        <Fragment key={index}>{entry}</Fragment>,
      ])}
    </StyledCustomValue>
  );
};

export default CustomValue;
