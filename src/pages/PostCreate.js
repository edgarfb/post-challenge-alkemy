import React from "react";
import styled from "styled-components";

const Form = styled.form``;

const Input = styled.input``;

const Label = styled.label``;

function PostCreate() {
  return (
    <Form>
      <Label htmlFor="title">Title</Label>
      <Input placeholder="title"></Input>
    </Form>
  );
}

export default PostCreate;
