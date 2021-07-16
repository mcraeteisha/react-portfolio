import React from 'react';
import Styled from 'styled-components';
import TeishaResume from '../../assets/Teisha_McRae_Resume.pdf';
import Footer from "../../components/Footer";

export default function Resume() {
    return (
        <div>
            <HeaderDiv>
                <h1>Skills</h1>
            </HeaderDiv>
            <SkillName>HTML</SkillName>
            <Container>
                <HTMLSkills>95%</HTMLSkills>
            </Container>

            <SkillName>CSS</SkillName>
            <Container>
                <CSSSkills>80%</CSSSkills>
            </Container>

            <SkillName>JavaScript</SkillName>
            <Container>
                <JavascriptSkills>70%</JavascriptSkills>
            </Container>

            <SkillName>React</SkillName>
            <Container>
                <ReactSkills>60%</ReactSkills>
            </Container>

            <SkillName>NodeJS</SkillName>
            <Container>
                <NodeSkills>60%</NodeSkills>
            </Container>

            <SkillName>MySQL</SkillName>
            <Container>
                <SQLSkills>60%</SQLSkills>
            </Container>

            <SkillName>Express</SkillName>
            <Container>
                <ExpressSkills>50%</ExpressSkills>
            </Container>

            <HeaderDiv>
                <h1><Span>Resume</Span></h1>
            </HeaderDiv>
            <ResumeLinkDiv>
                <ResumeLink href={TeishaResume} download>Download My Resume!</ResumeLink>
            </ResumeLinkDiv>
            <Footer />
        </div>
    );
}

const HeaderDiv = Styled.div
    `
  padding-left: 50px;
  padding-bottom: 20px;
`

const ResumeLink = Styled.a
    `
  padding-left: 50px;
  color: #ffffff;
  font-size: 2rem;
  a:hover {
    color: #31cfff;
  }
  
`

const Span = Styled.span
    `
  color: #31cfff;
`

const Container = Styled.div
    `
    width: 90%;
    background-color: #ffffff;
    margin-left: 50px;
    margin-right: 50px;
    `

const HTMLSkills = Styled.div
    `
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    width: 90%;
    background-color: #fc4384;
    `

const CSSSkills = Styled.div
    `
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    width: 80%;
    background-color: #fc4384;
    `    

const JavascriptSkills = Styled.div
    `
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    width: 70%;
    background-color: #fc4384;
    `    

const ReactSkills = Styled.div
    `
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    width: 60%;
    background-color: #fc4384;
    `     
    
const NodeSkills = Styled.div
    `
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    width: 60%;
    background-color: #fc4384;
    `       

const SQLSkills = Styled.div
    `
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    width: 60%;
    background-color: #fc4384;
    `   
    
const ExpressSkills = Styled.div
    `
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    width: 50%;
    background-color: #fc4384;
    `     

const SkillName = Styled.p
    `
    padding-top: 20px;
    padding-left: 50px;
    `    

const ResumeLinkDiv = Styled.div
    `
    padding-bottom: 50px;
    `       