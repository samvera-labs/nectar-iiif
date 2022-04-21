import { InternationalString } from "@iiif/presentation-3";

export const useGetLabel = (
  label: InternationalString,
  lang: string = "none"
) => {
  /*
   * If no label exists, return an empty string.
   */
  if (!label) return null;

  /*
   * If label is not a IIIF Presentation API 3.0 shape, return the string
   */
  if (typeof label === "string") return [label];

  /*
   * If InternationalString code does not exist on label, then
   * return what may be there, ex: label.none[0] OR label.fr[0]
   */
  if (!label[lang]) {
    const codes: Array<string> = Object.getOwnPropertyNames(label);
    if (codes.length > 0) return label[codes[0]]?.join(", ");
  }

  /*
   * Return label value for InternationalString code `en`
   */
  if (!label[lang]) return null;
  if (!Array.isArray(label[lang])) return null;

  const entries = label[lang] as string[];

  return entries.join(", ");
};
