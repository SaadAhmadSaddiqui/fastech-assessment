import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  /* Custom Fonts */
  @font-face {
    font-family: IBMPlexSans;
    font-weight: 700;
    src: url(/fonts/IBMPlexSans-Bold.woff) format("woff");
  }

  @font-face {
    font-family: Sora;
    font-weight: 300;
    src: url(/fonts/Sora-Light.woff) format("woff");
  }

  @font-face {
    font-family: Sora;
    font-weight: 400;
    src: url(/fonts/Sora-Regular.woff) format("woff");
  }

  @font-face {
    font-family: Sora;
    font-weight: 600;
    src: url(/fonts/Sora-SemiBold.woff) format("woff");
  }


  body {
    font-family: Sora, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  .popper {
    z-index: 200;
  }

`

export default GlobalStyles
