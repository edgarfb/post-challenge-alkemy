import React from "react";
import styled from "styled-components";
import Btn from "./btn";

const H1 = styled.h1`
  color: #444;
  margin: 10px;
`;

const PostContainer = styled.div`
  border-radius: 10px;
  border: 3px solid palevioletred;
  padding: 10px;
  margin: 10px;
`;
function remove() {
  console.log("delete");
}

function edit() {
  console.log("edit");
}

function Post(props) {
  return (
    <PostContainer {...props}>
      <H1>{props.children}</H1>
      <Btn onClick={remove} name="My name"></Btn>
      <Btn onClick={remove}>Borrar</Btn>
      <Btn onClick={edit}>Editar</Btn>
    </PostContainer>
  );
}

export default Post;
