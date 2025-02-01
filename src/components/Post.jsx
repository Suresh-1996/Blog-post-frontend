import React from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const Post = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { post } = location.state;
  const { id } = useParams();
  // const user_token = localStorage.getItem("user_token");
  // console.log(user_token);
  return (
    <div className="flex w-full flex-col  ">
      <div className=" flex lg:mx-40 md:mx-10 mt-10   mb-5 ">
        <h1 className="font-bold text-sm md:text-3xl  p-4">{post.title}</h1>
      </div>

      <div className="flex items-center justify-center md:mx-10 mb-5">
        {post.image && (
          <img
            src={`http://localhost:5000${post.image}`}
            alt={post.title}
            // style={{ width: "300px", height: "150px" }}
            className="md:w-[600px] md:h-[300px] lg:w-[900px] lg:h-[450px] rounded-xl mb-2 shadow-lg w-[300px] h-[150px] "
          />
        )}
      </div>
      <div className=" p-4 lg:mx-40 md:mx-10 md:text-lg text-[10px] text-justify mb-10">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default Post;
