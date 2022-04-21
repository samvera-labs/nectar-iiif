import React, { useEffect, useState } from "react";
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
import Language from "./dev/Language";

const Wrapper = () => {
  const [thumbnail, setThumbnail] = useState();
  const [manifest, setManifest] = useState<ManifestNormalized>();
  const [lang, setLanguage] = useState<String | undefined>();

  const manifestId =
    "https://iiif.io/api/cookbook/recipe/0006-text-language/manifest.json";

  useEffect(() => {
    const vault = new Vault();
    if (manifestId)
      vault
        .loadManifest(manifestId)
        .then((data) => {
          setManifest(data);
          setThumbnail(vault.get(data.thumbnail));
        })
        .catch((error) => {
          console.error(`Manifest ${manifestId} failed to load: ${error}`);
        });
  }, [manifestId]);

  if (!manifest) return <>Loading...</>;

  const handleLanguage = (e) =>
    setLanguage(e.target.value !== "--" ? e.target.value : undefined);

  const { label, summary, metadata, requiredStatement } = manifest;

  return (
    <>
      <Language handleLanguage={handleLanguage} />
      <div>
        <Label
          as="h1"
          label={label}
          lang={lang}
          className="custom-class-1"
          css={{ color: "red" }}
        />
        <Summary
          as="p"
          summary={summary}
          lang={lang}
          className="custom-class-2"
          style={{ color: "blue" }}
        />
        <Metadata
          metadata={metadata}
          lang={lang}
          className="custom-class-3"
          style={{ backgroundColor: "gray" }}
        />
        <RequiredStatement
          requiredStatement={requiredStatement}
          lang={lang}
          className="custom-class-4"
          style={{ backgroundColor: "purple" }}
        />
        {thumbnail && (
          <Thumbnail altAsLabel={label} lang={lang} thumbnail={thumbnail} />
        )}
      </div>
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
