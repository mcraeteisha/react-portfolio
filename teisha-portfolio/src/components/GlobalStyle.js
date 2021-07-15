import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root {
    // Black
    --primary-color: #000000; 
    //Pink
    --second-color: #fc4384;
    //Purple
    --emphasis-color: #ba66ff;
    //Blue
    --accent-color: #31cfff;
  }

* {
    margin: 0;
    padding 0;
    box-sizing: border-box
}

body {
    background: var(--primary-color);
    color: var(--accent-color);
    max-width: 80%
    display: flex;
    width: 100%;
    height: 100%;
    font-family: 'Cabin', sans-serif;
}

footer {
    flex-shrink: 0;
}

h1 {
    font-size: 4rem;
    color: var(--second-color);
    font-family: 'Playfair Display', serif;
}

h2 {
    font-size: 3rem;
    color: var(--emphasis-color);
    font-family: 'Playfair Display', serif;
}

h3 {
    font-size: 2rem;
    font-family: 'Playfair Display', serif;
}

h4 {
    font-size: 2rem;
}

span {
    color: var(--emphasis-color);
}

button {
padding: 1rem 2rem;
margin: 2rem 0;
background:var(--emphasis-color);
color: var(--second-color);
border: none;
font-size: 1rem;
font-weight: bold;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
transition: all 0.5s ease;
&:hover{
    background-color: var(--accent-color);
    color: var(--primary-color);
}

`;
export default GlobalStyle;