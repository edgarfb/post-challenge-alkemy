import React from "react";
import styled from "styled-components";
import Btn from "../components/btn";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import LogInContext from "../store/login-context";
import { useNavigate } from "react-router-dom";

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
  height: auto;
  padding: 20px 0;
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

const Error = styled(ErrorMessage)`
  color: red;
  font-size: 0.9rem;

  width: 80%;
  margin: 5px auto;
`;

function LogIn() {
  const loginCtx = React.useContext(LogInContext);
  const navigate = useNavigate();
  return (
    <LogInContainer>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "This field is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "This field is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            axios
              .post("https://node-api-proxy-alkemy.herokuapp.com/", {
                email: values.email,
                password: values.password,
              })
              .then((res) => {
                if (res.status === 200) {
                  localStorage.setItem("userPostToken", res.data.token);
                  loginCtx.setTokenInLocalStorage(
                    localStorage.getItem("userPostToken")
                  );
                  // this works ---- I need to redirect to the home page and save the token in a state to share it with the other pages
                  console.log("Logged in successfully");
                  navigate("/");
                }
              })
              .catch((err) => {
                console.error(err);
              });
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
            autoFocus
          />
          <Error name="email" component="div" />
          <Label htmlFor="password">Password</Label>
          <LogInInput
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <Error name="password" component="div" />
          <LogInBtn>Send</LogInBtn>
        </LogInForm>

        {/* children content */}
      </Formik>
    </LogInContainer>
  );
}

export default LogIn;
