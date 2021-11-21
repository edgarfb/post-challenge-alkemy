import React from "react";
import styled from "styled-components";
import Btn from "./btn";
import AppContext from "../store/app-context";
import { Navigate, useNavigate } from "react-router";

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
  const navigate = useNavigate();
  const appCtx = React.useContext(AppContext);
  return (
    <PostContainer {...props}>
      <H1>{props.children}</H1>
      <Btn onClick={remove} name="My name"></Btn>
      {/* This delete 1 post based on an id */}
      <Btn onClick={() => appCtx.removePost(props.id)}>Remove</Btn>
      {/* This redirec to editor page */}
      <Btn onClick={() => navigate(`/edit-post/${props.id}`)}>Edit</Btn>
    </PostContainer>
  );
}

export default Post;
