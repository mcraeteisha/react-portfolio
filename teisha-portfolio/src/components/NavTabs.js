import React from 'react';
import Styled from 'styled-components';

function NavTabs({ currentPage, handlePageChange }) {
  return (
  <NavStyle>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About<Span>.</Span>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio<Span>.</Span>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact<Span>.</Span>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume<Span>.</Span>
        </a>
      </li>
    </ul>
  </NavStyle>  
  );
}

const NavStyle = Styled.nav
  `
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: flex-end;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  padding-right: 50px;
  a {
      color: #EFEFEF;
      text-decoration: none;
  }
  ul {
      display: flex;
      list-style: none;
      justify-content: right;
      align-items: center;
  }
  li {
      padding-left: 5rem;
  }
  .active {
    color: #31cfff;
  }
  `

const Span = Styled.span
  `
  color: #fc4384;
  `  


export default NavTabs;

  