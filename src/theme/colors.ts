import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1A62E0",
  primaryBright: "#53DEE9",
  primaryDark: "#1A62E0",
  secondary: "#1A62E0",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#214dd1",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#565A69",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  backgroundAlt2: "rgba(255, 255, 255, 0.7)",
  cardBorder: "transparent",
  contrast: "rgba(0, 0, 0, 0.1)",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#ffffff",
  inputSecondary: "#EDEEF2",
  tertiary: "#F7F8FA",
  text: "#565A69",
  textDisabled: "#BDC2C4",
  textSubtle: "#565A69",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F0F0F0 0%, #F0F0F0 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#1A62E0",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#212429",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "transparent",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "rgba(0, 0, 0, 0.1)",
  input: "#212429",
  inputSecondary: "#262130",
  primaryDark: "#1A62E0",
  tertiary: "#B4B5B7",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#AAAAAA",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #141615 0%, #141615 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #141615 0%, #141615 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};