import React, { useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import ReactDOM from "react-dom";
import { ManifestNormalized } from "@iiif/presentation-3";
import { Label, Metadata, RequiredStatement, Summary } from "./index";
import Language from "./dev/Language";

const Wrapper = () => {
  const [manifest, setManifest] = useState<ManifestNormalized>();
  const [language, setLanguage] = useState<String | undefined>();

  const manifestId =
    "https://iiif.io/api/cookbook/recipe/0006-text-language/manifest.json";

  useEffect(() => {
    const vault = new Vault();
    if (manifestId)
      vault
        .loadManifest(manifestId)
        .then((data) => setManifest(data))
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
        <Label label={{ none: ["the", "color", "of", "honey"] }} />
        <Label label={label} language={language} />
        <Summary summary={summary} language={language} />
        <Metadata metadata={metadata} language={language} />
        <RequiredStatement
          requiredStatement={requiredStatement}
          language={language}
        />
      </div>
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
