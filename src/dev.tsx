import React, { StrictMode, useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import { createRoot } from "react-dom/client";
import { ManifestNormalized } from "@iiif/presentation-3";
import {
  Homepage,
  Label,
  Metadata,
  PartOf,
  RequiredStatement,
  SeeAlso,
  Summary,
  Thumbnail,
} from "./index";
import DynamicUrl from "./dev/DynamicUrl";
import { manifests } from "./dev/manifests";
import {
  NectarCustomValueContent,
  NectarExternalWebResource,
  NectarIIIFResource,
} from "./types/nectar";

const Wrapper = () => {
  const defaultUrl: string = manifests[0].url;
  const [partOf, setPartOf] = useState<NectarIIIFResource[]>();
  const [seeAlso, setSeeAlso] = useState<NectarExternalWebResource[]>();
  const [thumbnail, setThumbnail] = useState();
  const [homepage, setHomepage] = useState<NectarExternalWebResource[]>();
  const [manifest, setManifest] = useState<ManifestNormalized>();
  const [lang, setLanguage] = useState<string | undefined>();
  const [url, setUrl] = useState(defaultUrl);

  useEffect(() => {
    const vault = new Vault();
    if (url)
      vault
        .loadManifest(url)
        .then((data) => {
          setManifest(data);
          setThumbnail(vault.get(data.thumbnail));
          setHomepage(vault.get(data.homepage));
          setPartOf(vault.get(data.partOf));
          setSeeAlso(vault.get(data.seeAlso));
        })
        .catch((error) => {
          console.error(`Manifest ${url} failed to load: ${error}`);
        });
  }, [url]);

  if (!manifest) return <>Loading...</>;

  const handleLanguage = (e) =>
    setLanguage(e.target.value !== "--" ? e.target.value : undefined);

  const { label, metadata, requiredStatement, summary } = manifest;

  const CustomValueDepartment = (props) => (
    <a href={encodeURI(`https://example.org/department/${props.value}`)}>
      <strong>{props.value}</strong>
    </a>
  );

  const CustomValueSubject = (props) => (
    <a href={encodeURI(`https://example.org/?subject=${props.value}`)}>
      {props.value}
    </a>
  );

  const customValueContent: NectarCustomValueContent[] = [
    {
      matchingLabel: { en: ["Subject"] },
      Content: <CustomValueSubject />,
    },
  ];

  return (
    <>
      <div>
        {label && <Label as="h3" label={label} lang={lang} />}
        {homepage && <Homepage homepage={homepage}>More Details</Homepage>}
        {summary && <Summary as="p" summary={summary} lang={lang} />}
        {metadata && (
          <Metadata
            metadata={metadata}
            customValueContent={customValueContent}
            customValueDelimiter="* "
            lang={lang}
          />
        )}
        {requiredStatement && (
          <RequiredStatement
            requiredStatement={requiredStatement}
            lang={lang}
            customValueDelimiter="##"
          />
        )}
        {thumbnail && <Thumbnail thumbnail={thumbnail} />}
        {partOf && <PartOf partOf={partOf} />}
        {seeAlso && <SeeAlso seeAlso={seeAlso} />}
      </div>
      <DynamicUrl url={url} setUrl={setUrl} handleLanguage={handleLanguage} />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>
);
