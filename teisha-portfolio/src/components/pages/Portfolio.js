import React from 'react';
import Styled from 'styled-components';
import CodeQuiz from '../../images/CodeQuiz.png';
import EventListener from '../../images/EventListener.png';
import HTMLPortfolio from '../../images/HTMLPortfolio.png';
import NoteTaker from '../../images/NoteTaker.png';
import ProseOrShows from '../../images/ProseOrShows.png';
import WeatherDashboard from '../../images/WeatherDashboard.png';
import Footer from "../../components/Footer";
import Header from "../Header";


export default function Portfolio() {
    return (
        <div>
            <HeaderDiv>
                <Header />
            </HeaderDiv>
            <ContentDiv>
                <ProjectBlock>
                    <ProjectTitle>HTML <Span4>Portfolio</Span4></ProjectTitle>
                    <a href="https://mcraeteisha.github.io/teisha-mcrae-web-app-portfolio/"><ProjectImage src={HTMLPortfolio} alt="HTML-Portfolio"></ProjectImage></a>
                    <ProjectLinks>
                        <div>
                            <StyledLink href="https://mcraeteisha.github.io/teisha-mcrae-web-app-portfolio/">Deployed Application</StyledLink>
                        </div>
                        <div>
                            <StyledLink href="https://github.com/mcraeteisha/teisha-mcrae-web-app-portfolio">GitHub Repo</StyledLink>
                        </div>
                    </ProjectLinks>
                </ProjectBlock>
                <ProjectBlock>
                    <ProjectTitle>EventListener<Span4>()</Span4></ProjectTitle>
                    <a href="https://gpphelps.github.io/Event-Listener/index.html"><ProjectImage src={EventListener} alt="Event-Listener"></ProjectImage></a>
                    <ProjectLinks>
                        <div>
                            <StyledLink href="https://gpphelps.github.io/Event-Listener/index.html">Deployed Application</StyledLink>
                        </div>
                        <div>
                            <StyledLink href="https://github.com/Gpphelps/Event-Listener">GitHub Repo</StyledLink>
                        </div>
                    </ProjectLinks>
                </ProjectBlock>
                <ProjectBlock>
                    <ProjectTitle>Prose <Span4>Or Shows</Span4></ProjectTitle>
                    <a href="https://proseorshows.herokuapp.com/"><ProjectImage src={ProseOrShows} alt="Prose-Or-Shows"></ProjectImage></a>
                    <ProjectLinks>
                        <div>
                            <StyledLink href="https://proseorshows.herokuapp.com/">Deployed Application</StyledLink>
                        </div>
                        <div>
                            <StyledLink href="https://github.com/BarbaraShea/ProseAndShows">GitHub Repo</StyledLink>
                        </div>
                    </ProjectLinks>
                </ProjectBlock>
                <ProjectBlock>
                    <ProjectTitle>Note <Span4>Taker</Span4></ProjectTitle>
                    <a href="https://tjm-express-note-taker.herokuapp.com/"><ProjectImage src={NoteTaker} alt="Note-Taker"></ProjectImage></a>
                    <ProjectLinks>
                        <div>
                            <StyledLink href="https://tjm-express-note-taker.herokuapp.com/">Deployed Application</StyledLink>
                        </div>
                        <div>
                            <StyledLink href="https://github.com/mcraeteisha/express-note-taker">GitHub Repo</StyledLink>
                        </div>
                    </ProjectLinks>
                </ProjectBlock>
                <ProjectBlock>
                    <ProjectTitle>Weather <Span4>Dashboard</Span4></ProjectTitle>
                    <a href="https://mcraeteisha.github.io/weather-dashboard/"><ProjectImage src={WeatherDashboard} alt="Weather-Dashboard"></ProjectImage></a>
                    <ProjectLinks>
                        <div>
                            <StyledLink href="https://mcraeteisha.github.io/weather-dashboard/">Deployed Application</StyledLink>
                        </div>
                        <div>
                            <StyledLink href="https://github.com/mcraeteisha/weather-dashboard">GitHub Repo</StyledLink>
                        </div>
                    </ProjectLinks>
                </ProjectBlock>
                <ProjectBlock>
                    <ProjectTitle>Code <Span4>Quiz</Span4></ProjectTitle>
                    <a href="ttps://mcraeteisha.github.io/code-quiz/"><ProjectImage src={CodeQuiz} alt="Code-Quiz"></ProjectImage></a>
                    <ProjectLinks>
                        <div>
                            <StyledLink href="https://mcraeteisha.github.io/code-quiz/">Deployed Application</StyledLink>
                        </div>
                        <div>
                            <StyledLink href="https://github.com/mcraeteisha/code-quiz">GitHub Repo</StyledLink>
                        </div>
                    </ProjectLinks>
                </ProjectBlock>
            </ContentDiv>
        <Footer />
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

const Span4 = Styled.span
`
  color: #000000;
`

const ProjectBlock = Styled.div
`
    height: 100vh:
    width: 100vh;
    display: inline-block;
    background-color: #ba66ff;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
`

const ProjectTitle = Styled.h3
`
    color: #ffffff;
    padding-bottom: 20px;
    text-align: center;
`

const ProjectImage = Styled.img
`
    display: inline-block;
    height: 25vh;
    width: auto;
    border-radius: 5px;
`

const ProjectLinks = Styled.div
`
    margin-top: 10px;
    text-align: center;
    a:hover {
        color: #31cfff;
    }
`

const StyledLink = Styled.a
`
    color: #ffffff;
    font-size: 1.25rem;
`