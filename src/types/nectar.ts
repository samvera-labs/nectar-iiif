import {
  IIIFExternalWebResource,
  InternationalString,
  MetadataItem,
} from "@iiif/presentation-3";
import React, { ReactElement, ReactNode } from "react";

export interface NectarPrimitive extends React.HTMLAttributes<HTMLElement> {}

export interface NectarCustomValueContent {
  matchingLabel: InternationalString;
  Content: ReactElement;
}

export interface NectarMetadataItem extends NectarPrimitive {
  item: MetadataItem;
  customValueContent?: ReactElement;
  customValueDelimiter?: string;
}

export interface NectarContentResource extends NectarPrimitive {
  altAsLabel?: InternationalString;
  contentResource: NectarExternalWebResource;
  region?: string;
}

export interface NectarExternalWebResource {
  id: string;
  type: "Dataset" | "Image" | "Video" | "Sound" | "Text";
  format?: string;
  label: InternationalString;
  language?: string | string[];
  duration?: number;
  width?: number;
  height?: number;
  profle?: string;
}

export interface NectarIIIFResource {
  id: string;
  type: "Collection" | "Manifest";
  label?: InternationalString | undefined;
}

export interface NectarHomepage extends NectarPrimitive {
  children?: ReactNode | ReactNode[];
  homepage: NectarExternalWebResource[];
}

export interface NectarLabel extends NectarPrimitive {
  as?:
    | "dd"
    | "dt"
    | "figcaption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "p"
    | "span";
  label: InternationalString;
}

export interface NectarMarkup extends NectarPrimitive {
  as?: "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "dd";
  markup?: InternationalString;
}

export interface NectarMetadata extends NectarPrimitive {
  as?: "dl";
  customValueContent?: NectarCustomValueContent[];
  customValueDelimiter?: string;
  metadata: MetadataItem[];
}

export interface NectarPartOf extends NectarPrimitive {
  as?: "ol" | "ul";
  partOf: NectarIIIFResource[];
}

export interface NectarRequiredStatement extends NectarPrimitive {
  as?: "dl";
  customValueDelimiter?: string;
  requiredStatement: MetadataItem;
}

export interface NectarSeeAlso extends NectarPrimitive {
  as?: "ol" | "ul";
  seeAlso: NectarExternalWebResource[];
}

export interface NectarSummary extends NectarPrimitive {
  as?: "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  customValueDelimiter?: string;
  summary: InternationalString;
}

export interface NectarThumbnail extends NectarPrimitive {
  altAsLabel?: InternationalString;
  region?: string;
  thumbnail: IIIFExternalWebResource[];
}

export interface NectarValue extends NectarPrimitive {
  as?: "span" | "dd";
  value: InternationalString;
}

export interface NectarCustomValue extends NectarValue {
  customValueContent: ReactElement;
}
