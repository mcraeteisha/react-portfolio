import React from 'react';
import Styled from 'styled-components';
import Header from "../Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div>
      <HeaderDiv>
      <Header />
      </HeaderDiv>
      <p>
        <Form>
          <InsideForm>
            <FormGroup>
            <FormHeader>Let's Chat ☕</FormHeader>
              <FormLabel>Email:</FormLabel>
              <FormInput type="email" name="email" id="email"/>
            </FormGroup>
            <FormGroup>
            <FormLabel>Name:</FormLabel>
              <FormInput type="name" name="name" id="name"/>
            </FormGroup>
            <FormGroup>
            <FormLabel>Message:</FormLabel>
              <MessageTextArea/>
            </FormGroup>
            <button>Submit</button>
          </InsideForm>
        </Form>
      </p>
      <Footer />
    </div>
  );
}

const Form = Styled.form
    `
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding-bottom: 20px;
`

const InsideForm = Styled.div
    `
    display: block;
    position: relative;
    padding: 1rem 3rem;
    background: #ffffff;
    color: #0A1931;
`

const HeaderDiv = Styled.h1
`
  padding-left: 50px;
  padding-bottom: 50px;
`

const FormGroup = Styled.div
    `
    display: block;
    width: 300px;
    margin-bottom: 15px;
    margin: 1rem 0;
`

const FormHeader = Styled.h2
    `
    padding: .5rem 0;
`

const FormLabel = Styled.label
    `
    display: block;
    margin-bottom: 5px;
`

const FormInput = Styled.input
    `
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color: #EFEFEF;
    border-radius: 3px;
    border: none;
    transition: 0.4s;
`

const MessageTextArea = Styled.textarea
    `
    height: 100px;
    width: 100%;
    background-color: #EFEFEF;
    border-radius: 3px;
    border: none;
    transition: 0.4s;
    `