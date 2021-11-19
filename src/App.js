import React from "react";
import Home from "./pages/Home";
import { AppContextProvider } from "./store/app-context";
import Post from "./components/post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
