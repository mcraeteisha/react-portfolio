import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Styled from 'styled-components';

export default function About() {
  return (
    <div>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <br/>
      <LeadIn>Hi there, I'm Teisha.👋🏽</LeadIn>
      <LeadIn>Software Developer, QA Lead, Student.👩🏽‍💻</LeadIn>
      <br/>
      <body>
      <BodyCopy>
      I'm passionate about building beautiful websites with sleek, responsive designs.
      I'm a curious, detail-oriented, and thoughtful tinkerer with a knack for software bug discovery and root cause analysis. I thrive on using coding skills to add creative enhancements to marketing emails and webpages and I'm excited to take my skills further!
      I'm a UNC-Chapel Hill Full Stack Coding Bootcamp student building full-stack applications with HTML, CSS, JavaScript, React, and more. Graduation: July 2021
      </BodyCopy>
      </body>
      <Footer />
    </div>
  );
}

const HeaderDiv = Styled.h1
`
  padding-left: 50px;
`

const LeadIn = Styled.h2
`
  padding-left: 50px;
`
const BodyCopy = Styled.h4
`
  padding-left: 50px;
  color: #ffffff;
`