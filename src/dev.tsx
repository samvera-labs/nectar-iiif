import React, { useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import ReactDOM from "react-dom";
import { ManifestNormalized } from "@iiif/presentation-3";
import { Label, Metadata, RequiredStatement, Summary } from "./index";

const Wrapper = () => {
  const [manifest, setManifest] = useState<ManifestNormalized>();
  const [language, setLanguage] = useState<String | undefined>();

  const manifestId =
    "http://127.0.0.1:8080/fixtures/manifest/internationalization.json";

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

  const handleLanguage = (e) => {
    const { value } = e.target;
    setLanguage(value !== "--" ? value : undefined);
  };

  if (!manifest) return <>Loading...</>;

  const { label, summary, metadata, requiredStatement } = manifest;

  return (
    <>
      <label htmlFor="language-code">Language Code</label>
      <select id="language-code" name="language-code" onChange={handleLanguage}>
        <option>--</option>
        <option value="none">none</option>
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <div>
        <Label label={label} as="h1" language={language} />
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
