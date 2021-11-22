import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Btn from "./btn";
import axios from "axios";
import AppContext from "../store/app-context";
import { useNavigate } from "react-router-dom";

function FormCustom(props) {
  const appCtx = React.useContext(AppContext);
  const navigate = useNavigate();
  console.log("appCtx", appCtx);
  return (
    <Formik
      initialValues={{ title: props.title || "", body: props.body || "" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "This field is required";
        } else if (values.title.length < 5) {
          errors.title = "Title must be at least 5 characters long";
        }
        if (!values.body) {
          errors.body = "This field is required";
        } else if (values.body.length < 5) {
          errors.body = "Body must be at least 5 characters long";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        {
          props.httpMethod === "post" &&
            axios
              .post("https://jsonplaceholder.typicode.com/posts", {
                values,
              })
              .then((res) => {
                appCtx.fireModal("Post was created successfully!");
                navigate("/");
              })
              .catch((err) => {
                console.log("Something went wrong: ", err);
              });
        }
        {
          props.httpMethod === "put" &&
            axios
              .put(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
                values,
              })
              .then((res) => {
                appCtx.fireModal("Post was edited successfully!");
                navigate("/");
              })
              .catch((err) => {
                appCtx.fireModal(`Something went wrong: ${err.message}`);
              });
        }
        resetForm();
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, isSubmitting }) => {
        console.log("values", values);
        return (
          <Form>
            <div class="mb-3">
              <label htmlFor="title" class="form-label">
                Post Title
              </label>
              <Field
                type="text"
                class="form-control"
                id="title"
                name="title"
                placeholder="Enter your title"
                value={values.title}
              />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div class="mb-3">
              <label for="body" class="form-label">
                Content
              </label>
              <Field
                as="textarea"
                class="form-control"
                name="body"
                class="form-control"
                id="body"
                rows="5"
                placeholder="Enter your content"
              />
              <ErrorMessage name="body" component="div" className="error" />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormCustom;
