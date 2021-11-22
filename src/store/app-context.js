import axios from "axios";
import React from "react";

const AppContext = React.createContext(null);

export function AppContextProvider(props) {
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState("");

  function removePost(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        fireModal("Post deleted successfully!");
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        alert("Something went wrong: ", err);
      });
  }

  function fireModal(message) {
    setShowModal(true);
    setModalMessage(message);
  }

  function closeModal() {
    setShowModal(false);
  }

  function getPost(postID) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => {
        setPost(res.data);
        return post;
        console.log("post from axios with async/await", post);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <AppContext.Provider
      value={{
        posts,
        removePost,
        getPost,
        fireModal,
        closeModal,
        showModal,
        modalMessage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
