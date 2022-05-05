import {
  IIIFExternalWebResource,
  InternationalString,
  MetadataItem,
} from "@iiif/presentation-3";
import React, { ReactNode } from "react";

export interface NectarPrimitive extends React.HTMLAttributes<HTMLElement> {}

export interface NectarMetadataItem extends NectarPrimitive {
  item: MetadataItem;
}

export interface NectarExternalWebResource {
  id: string;
  type: "Dataset" | "Image" | "Video" | "Sound" | "Text";
  format?: string;
  label: InternationalString;
  language?: string | string[];
}
export interface NectarHomepage extends NectarPrimitive {
  children?: ReactNode | ReactNode[];
  homepage: NectarExternalWebResource[];
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
}

export interface NectarMetadata extends NectarPrimitive {
  as?: "dl";
  metadata: MetadataItem[];
}

export interface NectarRequiredStatement extends NectarPrimitive {
  as?: "dl";
  requiredStatement: MetadataItem;
}

export interface NectarRights {
  rights: string;
  includeImage?: boolean;
}

export interface NectarThumbnail extends NectarPrimitive {
  altAsLabel?: InternationalString;
  thumbnail: IIIFExternalWebResource[];
}

export interface NectarSummary extends NectarPrimitive {
  as?: "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  summary: InternationalString;
}

export interface NectarValue extends NectarPrimitive {
  as?: "span" | "dd";
  value: InternationalString;
}
