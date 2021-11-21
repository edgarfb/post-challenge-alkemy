import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
// context
import LogInContext from "./store/login-context";
import NavBar from "./components/NavBar";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import NotFound from "./pages/NotFound";
import Post from "./components/post";
import LogIn from "./pages/LogIn";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

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

  console.log("is logged in", loginCtx);
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Routes>
          {isLoggedIn && <Route path="/" element={<Home />} exact></Route>}

          {isLoggedIn && <Route path="/post-create" element={<PostCreate />} />}
          {isLoggedIn && <Route path="/post-edit" element={<PostEdit />} />}
          {!isLoggedIn && <Route path="/login" element={<LogIn />} />}
          {/* {isLoggedIn && <Route path="/login" element={<LogIn />} />} */}
          {/* {!isLoggedIn && (
          <Route path="*" element={<Navigate replace to="login" />} />
        )} */}
          {/* {isLoggedIn && <Route path="*" element={<NotFound />} />} */}
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
