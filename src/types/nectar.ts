import { InternationalString, MetadataItem } from "@iiif/presentation-3";

export interface NectarGroup {
  item: MetadataItem;
  language?: string;
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
