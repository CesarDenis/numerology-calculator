import { createGlobalStyle } from 'styled-components';

import symbol from '../images/patterns-symbol.png';
import texture from '../images/texture-noise.png';

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/xwz0iog.css");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${props => props.theme.fonts.primary};
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  body, html {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    background-image:
      url(${symbol}),
      url(${texture}),
      ${props => props.theme.gradients.primary};

    background-position: top left, top left, top right;
    background-repeat: repeat, repeat, repeat-y;
    background-size: 60px, 500px, 100% 100%;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
