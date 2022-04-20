import { IIIFExternalWebResource } from "@iiif/presentation-3";

export const useGetImageResource = (
  resource: IIIFExternalWebResource,
  size: string = "200,",
  region: string = "full"
) => {
  if (Array.isArray(resource)) resource = resource[0];

  if (!resource.service) return resource.id;

  if (!Array.isArray(resource.service)) {
    if (resource.service["@id"])
      return `${resource.service["@id"]}/${region}/${size}/0/default.jpg`;

    if (resource.service.id)
      return `${resource.service.id}/${region}/${size}/0/default.jpg`;
  }

  if (resource.service[0]["@id"])
    return `${resource.service[0]["@id"]}/${region}/${size}/0/default.jpg`;

  return `${resource.service[0].id}/${region}/${size}/0/default.jpg`;
};
