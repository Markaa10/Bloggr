import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#0984E3",

  text: "#333333",
  textSeconday: "#727272",

  white: "#ffffff",
  black: "#000000",
};

export const SIZES = {
  h1: 32,
  h2: 24,
  h3: 18,

  body1: 16,
  body2: 14,
  body3: 12,
  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: "Gilroy",
    fontSize: SIZES.h1,
    lineHeight: 32,
  },
  h2: {
    fontFamily: "Gilroy",
    fontSize: SIZES.h2,
    lineHeight: 24,
  },
  h3: {
    fontFamily: "Gilroy",
    fontSize: SIZES.h3,
    lineHeight: 18,
  },

  body1: {
    fontFamily: "Gilroy",
    fontSize: SIZES.body1,
    lineHeight: 16,
  },
  body2: {
    fontFamily: "Gilroy",
    fontSize: SIZES.body2,
    lineHeight: 14,
  },
  body3: {
    fontFamily: "Gilroy",
    fontSize: SIZES.body3,
    lineHeight: 12,
  },
};
