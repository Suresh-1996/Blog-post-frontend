import { useState } from "react";

import PostList from "./components/PostList";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
      <PostList />
    </div>
  );
}

export default App;
