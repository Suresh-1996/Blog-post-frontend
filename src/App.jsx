import { useState, useEffect } from "react";

import PostList from "./components/PostList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import UserLogin from "./components/UserLogin";
import Post from "./components/Post";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
  // Scroll to top on page load or refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <Footer />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="home/post/:id"
          element={
            <ProtectedRoutes>
              <Navbar />
              <Post />
              <Footer />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoutes>
              <Contact />
              <Footer />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
