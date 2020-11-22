import { createGlobalStyle } from 'styled-components'

/* -------------------------------------------------------------------------- */

// 컬러 스킴(scheme, 계획)
export const colorScheme = {
  black: '#141517',
  white: '#fcfcff',
  accent: '#F82F62',
  accentHover: '#c7254d',
}

// 레이아웃 구성(configure)
export const layoutConfig = {
  container: {
    maxWidth: '120rem',
    padding: '2rem 1.5rem',
  },
}

/* -------------------------------------------------------------------------- */

const { black, white, accent } = colorScheme
const { container } = layoutConfig

export default createGlobalStyle`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  html{line-height:1.15;-webkit-text-size-adjust:100%}
  body{margin:0}
  main{display:block}
  h1{font-size:2em;margin:.67em 0}
  hr{box-sizing:content-box;height:0;overflow:visible}
  pre{font-family:monospace,monospace;font-size:1em}
  a{background-color:transparent}
  abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
  b,strong{font-weight:bolder}
  code,kbd,samp{font-family:monospace,monospace;font-size:1em}
  small{font-size:80%}
  sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
  sub{bottom:-.25em}
  sup{top:-.5em}
  img{border-style:none}
  button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}
  button,input{overflow:visible}
  button,select{text-transform:none}
  [type=button],[type=reset],[type=submit],button{-webkit-appearance:button}
  [type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}
  [type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}
  fieldset{padding:.35em .75em .625em}
  legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}
  progress{vertical-align:baseline}
  textarea{overflow:auto}
  [type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
  [type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
  [type=search]{-webkit-appearance:textfield;outline-offset:-2px}
  [type=search]::-webkit-search-decoration{-webkit-appearance:none}
  ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
  details{display:block}
  summary{display:list-item}
  template{display:none}
  [hidden]{display:none}

  /* selection */
  ::selection {
    background: ${accent};
    color: ${white};
    img&,
    button& {
      background: transparent;
    }
  }

  /* focus visible */
  :focus {
    outline: none;
    box-shadow: 0 0 0 4px ${accent};
  }
  :focus:not(:focus-visible) {
    box-shadow: none;
  }
  :focus-visible {
    box-shadow: 0 0 0 4px ${accent};
  }

  /* base */
  .resetA {
    user-select: none;
    text-decoration: none;
    color: inherit;
  }

  .resetButton {
    user-select: none;
    cursor: pointer;
    background: transparent;
    border: 0;
    padding: 0;
  }

  .resetImg {
    vertical-align: middle;
  }

  .responsive {
    max-width: 100%;
    height: auto;
  }

  .resetDl {
    margin: 0;
    dt, dd {
      margin: inherit;
    }
  }

  .resetList {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  .resetAddress {
    font-style: normal;
  }

  /* theme */
  body {
    background: ${black};
    color: ${white};
    * {
      color: inherit;
    }
  }

  /* typography */
  html {
    font-size: 10px;
  }

  body {
    font: 1.6rem/1.5 SpoqaHanSans, "Helvetica Neue", Verdana, Sans-Serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-bottom: 0;
  }

  /* layout */
  body {
    box-sizing: border-box;
    &::before,
    &::after,
    & *,
    & *::before,
    & *::after {
      box-sizing: inherit;
    }
  }

  .container {
    max-width: ${container.maxWidth};
    margin: 0 auto;
    padding: ${container.padding};
  }

`
