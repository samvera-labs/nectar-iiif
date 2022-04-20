import {
  IIIFExternalWebResource,
  InternationalString,
  MetadataItem,
} from "@iiif/presentation-3";
import { ReactNode } from "react";

export interface NectarExternalWebResource {
  resource: IIIFExternalWebResource;
  objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export interface NectarGroup {
  item: MetadataItem;
  language?: string;
}

export interface NectarHomepage {
  as?: "div" | "ol" | "ul";
  children?: ReactNode | ReactNode[];
  homepage: Array<NectarResource>;
  language?: string;
}

export interface NectarResource {
  as?: "span" | "li";
  format?: string;
  id: string;
  label: InternationalString;
  language?: string[];
  type: string;
}

export interface NectarLabel {
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

export interface NectarMetadata {
  language?: string;
  metadata: MetadataItem[];
  title?: string;
}

export interface NectarRequiredStatement {
  language?: string;
  requiredStatement: MetadataItem;
}

export interface NectarThumbnail {
  thumbnail: IIIFExternalWebResource[];
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export interface NectarSummary {
  as?: "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  language?: string;
  summary: InternationalString;
}

export interface NectarValue {
  as?: "span" | "dd";
  language?: string;
  value: InternationalString;
}
