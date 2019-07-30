import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/xwz0iog.css");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  body, html {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    background-image:
      url("/static/patterns-symbol.png"),
      url("/static/texture-noise.png"),
      ${({ theme }) => theme.gradients.primary};

    background-position: top left, top left, top right;
    background-repeat: repeat, repeat, repeat-y;
    background-size: 60px, 500px, 100% 100%;
  }
`;

export default GlobalStyle;
