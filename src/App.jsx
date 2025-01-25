import { useState } from "react";

import PostList from "./components/PostList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import UserLogin from "./components/UserLogin";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Routes>
        //public route
        <Route path="/" element={<UserLogin />} />
        //protected routes
        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Home />
                <PostList />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="home/post/:id"
          element={
            <ProtectedRoutes>
              <Post />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
