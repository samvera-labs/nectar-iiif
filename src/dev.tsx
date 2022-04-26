import React, { StrictMode, useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import ReactDOM from "react-dom";
import { ManifestNormalized } from "@iiif/presentation-3";
import {
  Label,
  Metadata,
  RequiredStatement,
  Summary,
  Thumbnail,
} from "./index";
import DynamicUrl from "./dev/DynamicUrl";
import { manifests } from "./dev/manifests";

const Wrapper = () => {
  const defaultUrl: string = manifests[0].url;
  const [thumbnail, setThumbnail] = useState();
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
        })
        .catch((error) => {
          console.error(`Manifest ${url} failed to load: ${error}`);
        });
  }, [url]);

  if (!manifest) return <>Loading...</>;

  const handleLanguage = (e) =>
    setLanguage(e.target.value !== "--" ? e.target.value : undefined);

  const { label, summary, metadata, requiredStatement } = manifest;

  return (
    <>
      <div>
        <Label as="h1" label={label} lang={lang} />
        <Summary as="p" summary={summary} lang={lang} />
        <Metadata metadata={metadata} lang={lang} />
        <RequiredStatement requiredStatement={requiredStatement} lang={lang} />
        {thumbnail && <Thumbnail thumbnail={thumbnail} altAsLabel={label} />}
      </div>
      <DynamicUrl url={url} setUrl={setUrl} handleLanguage={handleLanguage} />
    </>
  );
};

ReactDOM.render(
  <StrictMode>
    <Wrapper />
  </StrictMode>,
  document.getElementById("root")
);
