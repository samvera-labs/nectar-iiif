import React, { StrictMode, useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import { createRoot } from "react-dom/client";
import { ManifestNormalized } from "@iiif/presentation-3";
import {
  Homepage,
  Label,
  Metadata,
  RequiredStatement,
  SeeAlso,
  Summary,
  Thumbnail,
} from "./index";
import DynamicUrl from "./dev/DynamicUrl";
import { manifests } from "./dev/manifests";

const Wrapper = () => {
  const defaultUrl: string = manifests[0].url;
  const [seeAlso, setSeeAlso] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [homepage, setHomepage] = useState();
  const [manifest, setManifest] = useState<ManifestNormalized>();
  const [lang, setLanguage] = useState<String | undefined>();
  const [url, setUrl] = React.useState(defaultUrl);

  useEffect(() => {
    const vault = new Vault();
    if (url)
      vault
        .loadManifest(url)
        .then((data) => {
          setManifest(data);
          setThumbnail(vault.get(data.thumbnail));
          setHomepage(vault.get(data.homepage));
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

  return (
    <>
      <div>
        <Label as="h3" label={label} lang={lang} />
        <Homepage homepage={homepage}>More Details</Homepage>
        <Summary as="p" summary={summary} lang={lang} />
        <Metadata metadata={metadata} lang={lang} />
        <RequiredStatement requiredStatement={requiredStatement} lang={lang} />
        {thumbnail && <Thumbnail thumbnail={thumbnail} alt="random" />}
        <SeeAlso seeAlso={seeAlso} />
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
