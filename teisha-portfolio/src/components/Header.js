import React from "react";
import Styled from 'styled-components';

function Header() {
  return (
    <>
    <div>
    <h1><Span1>&lt;</Span1>TeishaMcRae<Span2>/</Span2><Span1>&gt;</Span1></h1>
    </div>
    </>
  );
}

const Span1 = Styled.span
`
  color: #31cfff;
`
const Span2 = Styled.span
`
  color: #ffffff;
`

export default Header;