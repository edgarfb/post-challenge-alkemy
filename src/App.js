import React from "react";
import Home from "./pages/Home";
// context
import LogInContext from "./store/login-context";

import PostCreate from "./pages/PostCreate";
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

function App() {
  const loginCtx = React.useContext(LogInContext);
  const isLoggedIn = loginCtx.isLoggedIn;

  console.log("is logged in", loginCtx);
  return (
    <Router>
      <Routes>
        {isLoggedIn && <Route path="/" element={<Home />}></Route>}

        {isLoggedIn && <Route path="/post-create" element={<PostCreate />} />}
        {!isLoggedIn && <Route path="/login" element={<LogIn />} />}
        {!isLoggedIn && (
          <Route path="*" element={<Navigate replace to="login" />} />
        )}
        {isLoggedIn && <Route path="*" element={<NotFound />} />}
      </Routes>
    </Router>
  );
}

export default App;
