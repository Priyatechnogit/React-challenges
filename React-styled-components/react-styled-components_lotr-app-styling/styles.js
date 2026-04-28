import { createGlobalStyle } from "styled-components";
import {Lora} from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const theme = {
  light: {
    background: "#fff",
    text: "#222",
    cardBackground: "#f8f8f8",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  },
  dark: {
    background: "#121212",
    text: "#fff",
    cardBackground: "#202020",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },
};
export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

   :root {
    --font-family: ${lora.style.fontFamily}, serif;
  }

  body {
    //font-family: system-ui;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    margin: 0;
    padding: 0;
    transition: background 0.3s ease;
  }
`;

export default theme;
