import {
  IIIFExternalWebResource,
  InternationalString,
  MetadataItem,
} from "@iiif/presentation-3";
import React, { ReactNode } from "react";

export interface NectarPrimitive extends React.HTMLAttributes<HTMLElement> {}

export interface NectarExternalWebResource {
  alt: string | undefined;
  resource: IIIFExternalWebResource;
  objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export interface NectarMetadataItem extends NectarPrimitive {
  item: MetadataItem;
  language?: string;
}

export interface NectarHomepage extends NectarPrimitive {
  as?: "div" | "ol" | "ul";
  children?: ReactNode | ReactNode[];
  homepage: Array<NectarResource>;
  language?: string;
}

export interface NectarResource extends NectarPrimitive {
  as?: "span" | "li";
  format?: string;
  id: string;
  label: InternationalString;
  language?: string[];
  type: string;
}

export interface NectarLabel extends NectarPrimitive {
  as?:
    | "span"
    | "p"
    | "label"
    | "dt"
    | "dd"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  label: InternationalString;
  language?: string;
}

export interface NectarMetadata extends NectarPrimitive {
  as?: "dl";
  language?: string;
  metadata: MetadataItem[];
}

export interface NectarRequiredStatement extends NectarPrimitive {
  as?: "dl";
  language?: string;
  requiredStatement: MetadataItem;
}

export interface NectarThumbnail extends NectarPrimitive {
  altAsLabel: InternationalString;
  language: string;
  thumbnail: IIIFExternalWebResource[];
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export interface NectarSummary extends NectarPrimitive {
  as?: "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  language?: string;
  summary: InternationalString;
}

export interface NectarValue extends NectarPrimitive {
  as?: "span" | "dd";
  language?: string;
  value: InternationalString;
}
