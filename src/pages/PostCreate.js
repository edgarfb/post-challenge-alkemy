import React from "react";
import styled from "styled-components";
import FormCustom from "../components/FormCustom";

function PostCreate() {
  return (
    <div>
      <h2>New Post</h2>
      <FormCustom httpMethod="post" />
    </div>
  );
}

export default PostCreate;
