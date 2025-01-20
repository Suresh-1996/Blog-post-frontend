import axios, { spread } from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Connect to the backend's Socket.IO server
const socket = io("http://localhost:5000");

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts`);
      setPosts(response.data);
      console.log("Successfully retive posts");
    } catch (error) {
      console.log("Error retive posts");
      console.error(error);
    }
  };

  useEffect(() => {
    fetch();

    socket.on("newPost", () => {
      fetch(); // Fetch latest posts when notified
    });

    // Clean up the socket listener when the component is unmounted
    return () => {
      socket.off("newPost");
    };
  }, []);

  return (
    <div>
      <h2>This is post list</h2>

      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.image && (
            <img
              src={`http://localhost:5000${post.image}`}
              alt={post.title}
              style={{ width: "200px" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
