import React from "react";
import styled from "styled-components";
import Btn from "../components/btn";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const LogInForm = styled(Form)`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 400px;
  height: 300px;
`;

const LogInTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-top: 0;
`;

const LogInInput = styled(Field)`
  padding: 10px;
  margin: 5px 0;
  border-radius: 3px;
  border: 1px solid #aaa;
  outline: none;
  width: 80%;
  margin: 0 auto;
`;
const Label = styled.label`
  width: 80%;
  margin: 5px auto;
  font-size: 0.9rem;
`;

const LogInBtn = styled(Btn)`
  color: white;
  background-color: #316aff;
  border: 1px solid #aaa;
  margin: 20px auto;
  width: 80%;
  padding: 10px 30px;
  &:hover {
    background-color: #2c5d9e;
  }
`;

function LogIn() {
  return (
    <LogInContainer>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* children content */}

        <LogInForm>
          <LogInTitle>Log in</LogInTitle>
          <Label htmlFor="email">Email address</Label>
          <LogInInput
            type="email"
            name="email"
            placeholder="Enter your e-mail"
          />
          <ErrorMessage name="email" component="div" />
          <Label htmlFor="password">Password</Label>
          <LogInInput
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <LogInBtn>Send</LogInBtn>
        </LogInForm>

        {/* children content */}
      </Formik>
    </LogInContainer>
  );
}

export default LogIn;
