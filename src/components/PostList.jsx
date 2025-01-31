import axios, { spread } from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

// Connect to the backend's Socket.IO server
const socket = io("http://localhost:5000");

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filterdPosts, setFilteredPosts] = useState("");

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

    socket.on("postUpdate", () => {
      fetch(); // Fetch latest posts when notified
    });

    // Clean up the socket listener when the component is unmounted
    return () => {
      socket.off("postUpdate");
    };
  }, []);

  const filterBlogs = posts.filter((post) =>
    post.title.toLowerCase().includes(filterdPosts.toLowerCase())
  );

  return (
    <>
      <div className="flex mb-3 mt-8 w-full justify-center items-center">
        <form className=" w-[350px]">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-400  rounded-lg  outline-none focus:border-black "
            placeholder="Search blogs by titile ot author..."
            onChange={(e) => setFilteredPosts(e.target.value)}
            required
          />
        </form>
      </div>
      <div className=" grid sm:grid-cols-2   lg:grid-cols-3 gap-1  ">
        {console.log("length is ", filterBlogs)}
        {filterBlogs.length > 0
          ? filterBlogs.map((post) => (
              <div
                key={post._id}
                className=" flex mt-1 lg:mt-5 items-center justify-center "
              >
                {/* <div className=" min-h-[300px] lg:min-h-[350px] md:min-h-[300px] md:w-[350px] rounded-lg w-[350px] lg:w-[400px] flex flex-col  bg-slate-100 hover:shadow-lg items-center "> */}
                <div className="  flex  m-1   hover:shadow-lg shadow-md rounded-lg md:w-[400px] sm:w-[350px] lg:w-[550px] min-w-[300px]  max-w-[400px]   sm:h-[380px]  h-[310px]  md:h-[350px]  lg:h-[400px]">
                  {/* <p>{post.content}</p> */}
                  <Link to={`post/${post._id}`} state={{ post }}>
                    {post.image && (
                      <img
                        src={`http://localhost:5000${post.image}`}
                        alt={post.title}
                        // style={{ width: "400px", height: "200px" }}
                        className="rounded-lg  shadow-sm w-[400px] max:w-[400px]  h-[150px] min:h-[150px] md:h-[200px] lg:h-[250px] lg:w-[500px] sm:h-[200px] "
                      />
                    )}

                    <h2 className="p-5 items-center text-sm   font-bold">
                      {post.title}
                    </h2>
                    <div className="flex justify-items-start items-center ">
                      <img
                        src="/post-Logo.png"
                        alt="logo"
                        className="w-[100px] h-[50px]  m-1 "
                      />
                      <div className="grid grid-rows-2 ml-3 ">
                        <h3>Fzone Solution</h3>
                        <p>date</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          : []}
      </div>
    </>
  );
};

export default PostList;
