import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormCustom from "../components/FormCustom";
import { useParams } from "react-router-dom";
import AppContext from "../store/app-context";
import axios from "axios";
function PostEdit() {
  const { postID } = useParams();
  console.log(postID);
  const [post, setPost] = React.useState({});

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

  console.log("post from axios with async/await", post);
  return (
    <div>
      <h2>Post edit page</h2>
      {/* Formik need to check out the props exist */}
      {post.title && (
        <FormCustom
          id={postID}
          httpMethod="put"
          title={post.title}
          body={post.body}
        />
      )}

      {/* <button onClick={() => appCtx.getPost(2)}>get post</button> */}
    </div>
  );
}

export default PostEdit;
