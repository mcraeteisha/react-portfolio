import React from 'react';
import Styled from 'styled-components';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
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
              <FormInput type="message" name="message" id="message"/>
            </FormGroup>
          </InsideForm>
        </Form>
      </p>
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
`
const InsideForm = Styled.div
    `
    display: block;
    position: relative;
    padding: 2rem 3rem;
    background: #ffffff;
    color: #0A1931;
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
    padding: 2rem 0;
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
    border-radius: 6px;
    transition: 0.4s;
`