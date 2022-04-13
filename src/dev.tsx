import React, { useEffect, useState } from "react";
import { Vault } from "@iiif/vault";
import ReactDOM from "react-dom";
import { ManifestNormalized } from "@iiif/presentation-3";
import { Label, Metadata, RequiredStatement, Summary } from "./index";

const Wrapper = () => {
  const [manifest, setManifest] = useState<ManifestNormalized>();

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

  const { label, summary, metadata, requiredStatement } = manifest;

  return (
    <>
      <Label label={label} as="h1" />
      <Summary summary={summary} />
      <Metadata metadata={metadata} />
      <RequiredStatement requiredStatement={requiredStatement} />
    </>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById("root"));
