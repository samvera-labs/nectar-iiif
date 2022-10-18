import React from "react";
import { NectarCustomValueContent } from "src/types/nectar";

interface CustomValueWrapperProps {
  value?: string;
}

const CustomValueDate: React.FC<CustomValueWrapperProps> = (props) => (
  <a href={encodeURI(`https://example.org/?date=${props.value}`)}>
    {props.value}
  </a>
);

const CustomValueSubject: React.FC<CustomValueWrapperProps> = (props) => (
  <a href={encodeURI(`https://example.org/?subject=${props.value}`)}>
    {props.value}
  </a>
);

const customValueContent: NectarCustomValueContent[] = [
  {
    matchingLabel: { none: ["Date"] },
    Content: <CustomValueDate />,
  },
  {
    matchingLabel: { none: ["Subject"] },
    Content: <CustomValueSubject />,
  },
];

export { CustomValueSubject, customValueContent };
