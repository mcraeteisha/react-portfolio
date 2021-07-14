import React from "react";
import Styled from 'styled-components';


function Footer() {
  return (
    <>
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
    </>
  );
}

const StyledFooter = Styled.footer
  `
  padding-top: 15px;
  height: 50px;
  margin-top: auto;


  a {
      color: #000000;
      text-decoration: none;
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
      padding-bottom: 5px;
  }
  li {
    padding-left: 5rem;
}
  p {
    padding-top: 5px;
    background-color: #31cfff;
    color: #000000;
    padding-left: 5rem;
    display: flex;
    justify-content: center;
  }
  `

export default Footer;
