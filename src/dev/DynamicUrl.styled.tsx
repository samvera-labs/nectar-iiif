import { styled } from "../stitches";

const DynamicUrlStyled = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
});

const ManualForm = styled("form", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "61.8%",

  label: {
    display: "block",
    marginBottom: "1rem",
    fontSize: "1.25rem",
    color: "#1a1d1e",
    fontWeight: "400",
    fontFamily: "$display",
  },

  "> div": {
    display: "flex",
    backgroundColor: "#e6e8eb",
    position: "relative",
    width: "100%",
    borderRadius: "3px",

    select: {
      padding: "0.382rem 0 0.382rem 0.618rem",
      cursor: "pointer",
      marginRight: "0.382rem",
      alignSelf: "center",
      background: "#FFFFFF",
      border: "none",
      fontSize: "0.7222rem",
      fontFamily: "$sans",
      fontWeight: "400",
      borderRadius: "3px",
      backgroundColor: "#FFFFFF",
      color: "#1a1d1e",
    },

    input: {
      padding: "0.618rem 1rem",
      background: "transparent",
      color: "#1a1d1e",
      border: "none",
      fontFamily: "$sans",
      width: "100%",
    },

    button: {
      padding: "0.382rem 0.618rem",
      cursor: "pointer",
      marginRight: "0.382rem",
      alignSelf: "center",
      background: "#FFFFFF",
      border: "none",
      fontSize: "0.7222rem",
      fontFamily: "$sans",
      fontWeight: "700",
      borderRadius: "3px",
      backgroundColor: "#FFFFFF",
      color: "#1a1d1e",
    },
  },
});

const Curated = styled("div", {
  padding: "2rem",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

const ButtonForm = styled("form", {
  button: {
    backgroundColor: "transparent",
    border: "none",
    outline: "1px solid #e6e8eb",
    color: "#1a1d1e",
    fontFamily: "$sans",
    fontSize: "0.8333rem",
    height: "2rem",
    padding: "0 1rem",
    borderRadius: "1rem",
    cursor: "pointer",
    margin: "0.5rem",
  },

  "&[data-active='true']": {
    button: {
      color: "#FFFFFF",
      fontWeight: "700",
      backgroundColor: "#006adc",
      outline: "1px solid #006adc",
    },
  },
});

export { DynamicUrlStyled, Curated, ManualForm, ButtonForm };
