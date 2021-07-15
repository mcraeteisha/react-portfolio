import React from 'react';
import Styled from 'styled-components';

export default function Resume() {
  return (
    <div>
    <HeaderDiv>
      <h1>Download My Resume</h1>
    </HeaderDiv>  
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

const HeaderDiv = Styled.h1
`
  padding-left: 50px;
`