import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function PostDetails() {
  const [post, setPost] = React.useState({});
  const { postID } = useParams();
  console.log(postID);
  console.log("post from axios with async/await", post);
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => {
        setPost(res.data);
        console.log("ejecutado");
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [postID]);
  return (
    <React.Fragment>
      {post.title && (
        <div class="card">
          <div class="card-header">Post# {post.id}</div>
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body}</p>
            <Link to="/" class="btn btn-primary">
              Go back to home
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default PostDetails;
