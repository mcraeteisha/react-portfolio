import React from 'react';
import Header from "../Header";
import Styled from 'styled-components';
import Teisha from '../../images/Teisha.png';
import Footer from "../../components/Footer";


export default function About() {
  return (
    <div>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <HeadshotDiv>
      <Image src={Teisha} alt="Teisha-Headshot" style={{height: "35vh", display: "inline-block"}}></Image>
      </HeadshotDiv>
      <br/>
      <LeadIn>Hi there<Span2>,</Span2> I'm Teisha<Span2>.</Span2>👋🏽</LeadIn>
      <LeadIn>Software Developer <Span2>&</Span2> QA Lead<Span2>.</Span2> 👩🏽‍💻</LeadIn>
      <br/>
      {/* <HeadshotDiv>
      <Image src={Teisha} alt="Barbara-Profile-pic" style={{height: "23vh", borderRadius: "50%", display: "inline-block", margin: "4% 4%"}}></Image>
      </HeadshotDiv> */}
      <body>
      <BodyCopy>
      I'm a <Span>UNC-Chapel Hill Full Stack Coding Bootcamp</Span> student building <Span>full-stack applications</Span> with <Span>HTML, CSS, JavaScript, React,</Span> and more.<br/><br/>
      I'm passionate about <Span>building beautiful websites</Span> with <Span>sleek, responsive designs</Span>.
      I'm a <Span>curious, detail-oriented, and thoughtful tinkerer</Span> with a knack for <Span>software bug discovery</Span> and <Span>root cause analysis</Span>. Currently, I thrive on using my <Span>coding skills</Span> to add creative enhancements to <Span>marketing emails and webpages</Span> and I'm excited to take my skills further!
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
  padding: 0 50px 0px 50px;
  color: #ffffff;
`

const Span = Styled.span
`
  color: #31cfff;
  text-decoration: underline;
  text-decoration-color: #fc4384;
`

const Span2 = Styled.span
`
  color: #31cfff;
`

const HeadshotDiv = Styled.div
`
  float: right;
  padding-right: 50px;
`

const Image = Styled.img
`
  border: 10px solid #fc4384;
`