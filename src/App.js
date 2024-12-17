import "./App.css";
import { Provider } from "@/components/ui/provider";
import HomePage from "./HomePage";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Todo from "./Todo";

function App({ Component, pageProps }) {
  return (
    <Router>
      <div className="all">
        <Routes>
          <Route path="/hello-world" element={<HomePage />} />
          <Route path='/new' element={<Todo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
