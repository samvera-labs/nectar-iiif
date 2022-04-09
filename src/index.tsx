import { MetadataItem } from "@iiif/presentation-3";
import Metadata from "components/Metadata/Metadata";
import React from "react";

interface Props {
  metadata: MetadataItem[];
}

const App: React.FC<Props> = ({ metadata }) => <Metadata metadata={metadata} />;

export default App;
