import React from "react";
import Styled from 'styled-components';


function Footer() {
  return (
    <>
    <Div>
      <StyledFooter>
      <body>
      <p>
      Made with 💕and React
      </p>
      <ul>
        <li><a href="https://github.com/mcraeteisha">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/teishamcrae/">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/teem_cee/">Instagram</a></li>
      </ul>
      </body>
      </StyledFooter>
    </Div>
    </>
  );
}

const StyledFooter = Styled.footer
  `
  a {
      color: #000000;
  }
  a:hover {
      color: #ffffff;
  }
  ul {
      background-color: #31cfff;
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;
  }
  li {
    padding-left: 5rem;
}
  p {
    padding-top: 5px;
    background-color: #31cfff;
    color: #ffffff;
    padding-left: 5rem;
    display: flex;
    justify-content: center;
  }
  `

const Div = Styled.div
  `
  padding-top: 20px;
  padding-bottom: 0px;
  `  

export default Footer;
