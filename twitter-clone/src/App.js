import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Post from "./components/Post";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Feed />

      <Widgets />

      <Post />
    </div>
  );
}

export default App;
