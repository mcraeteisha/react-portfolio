import React from 'react';
import Styled from 'styled-components';


export default function Portfolio() {
  return (
    <div>
    <HeaderDiv>
      <h1>What I've Been Working On<Span1>.</Span1><Span2>.</Span2><Span3>.</Span3></h1>
    </HeaderDiv>  
      <ContentDiv>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </ContentDiv>
    </div>
  );
}

const HeaderDiv = Styled.h1
`
  padding-left: 50px;
`
const ContentDiv = Styled.div
`
  padding: 0 50px 0px 50px;
`
const Span1 = Styled.span
`
  color: #ba66ff;
`
const Span2 = Styled.span
`
  color: #ffffff;
`
const Span3 = Styled.span
`
  color: #31cfff;
`