import styled, { createGlobalStyle } from "styled-components";
import FlexBox from "./common/styles/components/FlexBox";


export const AppWrapper = styled(FlexBox)`
  flex-direction: column;
  width: 80%; 
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
`;


export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  html, body, #root {
    height: 100%;
  }
`;
