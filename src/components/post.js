import React from "react";
import styled from "styled-components";
import AppContext from "../store/app-context";
import { useNavigate } from "react-router";
import Btn from "./btn";
const H2 = styled.h2`
  color: #444;
  margin: 10px;
  margin-bottom: 30px;
`;

const PostContainer = styled.div`
  border-radius: 10px;
  border: 3px solid #ced4da;
  padding: 10px;
  margin: 10px;
`;

function Post(props) {
  const navigate = useNavigate();
  const appCtx = React.useContext(AppContext);
  return (
    <PostContainer {...props}>
      <H2>{props.children}</H2>

      <Btn onClick={() => alert("This need to redirect to details pages")}>
        Details
      </Btn>
      <Btn onClick={() => navigate(`/post-edit/${props.id}`)}>Edit</Btn>
      <Btn onClick={() => appCtx.removePost(props.id)}>Remove</Btn>

      {/* This delete 1 post based on an id */}

      {/* This redirec to editor page */}
    </PostContainer>
  );
}

export default Post;
