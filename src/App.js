import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import styled from "styled-components";
// Componets routes
import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import PostDetails from "./pages/PostDetails";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
// components
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
// context
import LogInContext from "./store/login-context";
import AppContext from "./store/app-context";

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

function App() {
  const loginCtx = React.useContext(LogInContext);
  const isLoggedIn = loginCtx.isLoggedIn;
  const appCtx = React.useContext(AppContext);

  console.log("is logged in", loginCtx);
  return (
    <AppContainer>
      <Router>
        <NavBar />
        {appCtx.showModal && <Modal message={appCtx.modalMessage} />}
        <Routes>
          {isLoggedIn && <Route path="/" element={<Home />} exact></Route>}
          {isLoggedIn && (
            <Route
              path="/post-details/:postID"
              element={<PostDetails />}
            ></Route>
          )}
          {isLoggedIn && <Route path="/post-create" element={<PostCreate />} />}
          {isLoggedIn && <Route path="/post-edit" element={<PostEdit />} />}
          {isLoggedIn && (
            <Route path="/post-edit/:postID" element={<PostEdit />} />
          )}
          {/* This is an option to send to Not found page */}
          {/* {isLoggedIn && <Route path="/not-found" element={<NotFound />} />} */}
          {isLoggedIn && (
            <Route path="*" element={<Navigate replace to="/" />} />
          )}
          {!isLoggedIn && <Route path="/login" element={<LogIn />} />}
          {!isLoggedIn && (
            <Route path="*" element={<Navigate replace to="/login" />} />
          )}
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
