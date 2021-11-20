import React from "react";
import Home from "./pages/Home";
import { AppContextProvider } from "./store/app-context";
import PostCreate from "./pages/PostCreate";
import NotFound from "./pages/NotFound";
import Post from "./components/post";
import LogIn from "./pages/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const counter = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
  return state;
};

const TestingUseReducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = React.useReducer(counter, initialState);

  console.log("state from useReducer", state);
  return (
    <React.Fragment>
      <h1>usereducer State = {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </React.Fragment>
  );
};

function App() {
  return (
    <AppContextProvider>
      <Router>
        {/* <TestingUseReducer /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="post-create" element={<PostCreate />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
