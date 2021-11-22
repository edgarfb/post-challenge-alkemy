import React from "react";
import styled from "styled-components";
import AppContext from "../store/app-context";
import Post from "../components/post";

function Home() {
  const app = React.useContext(AppContext);
  const posts = app.posts;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id.toString()} id={post.id}>
          {post.title}
        </Post>
      ))}
    </div>
  );
}

export default Home;
