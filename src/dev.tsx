import React, { useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import ReactDOM from "react-dom";
import { ManifestNormalized } from "@iiif/presentation-3";
import {
  Homepage,
  Label,
  Metadata,
  RequiredStatement,
  Summary,
  Thumbnail,
} from "./index";
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

  const { label, summary, metadata, requiredStatement, thumbnail } = manifest;

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
        <Thumbnail
          thumbnail={[
            {
              id: "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/180682c9-dfaf-4881-b7b6-1f2f21092d4f/full/200,/0/default.jpg",
              type: "Image",
              format: "image/jpeg",
              service: [
                {
                  id: "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/180682c9-dfaf-4881-b7b6-1f2f21092d4f",
                  profile: "http://iiif.io/api/image/2/level2.json",
                  type: "ImageService2",
                },
              ],
              width: 100,
              height: 100,
            },
          ]}
        />
      </div>
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
