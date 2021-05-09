import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* A Modern CSS Reset */
  *,*::before,*::after{box-sizing:border-box}ul[class],ol[class]{padding:0}body,h1,h2,h3,h4,p,ul[class],ol[class],figure,blockquote,dl,dd{margin:0}html{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}ul[class],ol[class]{list-style:none}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}article>*+*{margin-top:1em}input,button,textarea,select{font:inherit}img:not([alt]){filter:blur(10px)}@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}
  body{
    transition: color 0.2s;
    transition: background-color 0.2s;
    font-family: Lato;
    background-color: #181a1b;
    color: #fafafa;
  };
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #fafafa;
  }
`