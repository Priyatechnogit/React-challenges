import { GlobalStyle } from "../styles";
import { ThemeProvider } from "styled-components";
import theme from "../styles";


export default function App({ Component, pageProps }) {
const isDarkMode = false;

  return (
    <>
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyle />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
