import React, { useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import ReactDOM from "react-dom";
import { ManifestNormalized } from "@iiif/presentation-3";
import { Homepage, Label, Metadata, RequiredStatement, Summary } from "./index";
import Language from "./dev/Language";

const Wrapper = () => {
  const [manifest, setManifest] = useState<ManifestNormalized>();
  const [language, setLanguage] = useState<String | undefined>();

  const manifestId =
    "https://acw5dcf49d.execute-api.us-east-1.amazonaws.com/dev/items/iiif-image-manifest-1";

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

  const { homepage, label, summary, metadata, requiredStatement } = manifest;

  return (
    <>
      <Language handleLanguage={handleLanguage} />
      <div>
        <Label label={label} language={language} />
        <Summary summary={summary} language={language} />
        <Metadata metadata={metadata} language={language} />
        <RequiredStatement
          requiredStatement={requiredStatement}
          language={language}
        />
        <Homepage
          homepage={[
            {
              id: "https://dc.library.northwestern.edu/items/7298fdce-adc1-4501-9e14-9e8bd985e149",
              type: "Text",
              label: { none: ["Pantalone classico"] },
              format: "text/html",
            },
          ]}
          language={language}
        />
        <Homepage homepage={homepage} language={language}>
          Wrap this garbage
        </Homepage>
      </div>
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
