import React from "react";
import { styled } from "stitches";
import { NectarRights } from "types/nectar";
import rdfDereferencer from "rdf-dereference";

const StyledRights = styled("span", {});

const Rights: React.FC<NectarRights> = (props) => {
  const { rights } = props;

  async function getData() {
    const { data } = await rdfDereferencer.dereference(
      "http://rightsstatements.org/vocab/NoC-NC/1.0/",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    data
      .on("data", (quad) => console.log(quad))
      .on("error", (error) => console.error(error))
      .on("end", () => console.log("All done!"));
  }

  getData();

  return <StyledRights>{rights}</StyledRights>;
};

export default Rights;
