import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const { post } = location.state;
  const { id } = useParams();
  return (
    <div className="flex w-full flex-col ">
      <div className="mx-40 mt-10 font-bold text-[60px] mb-5">
        <h1> {post.title}</h1>
      </div>

      <div className="flex items-center justify-center mx-40 mb-5">
        {post.image && (
          <img
            src={`http://localhost:5000${post.image}`}
            alt={post.title}
            style={{ width: "1200px", height: "600px" }}
            className="rounded-xl mb-2 shadow-lg "
          />
        )}
      </div>
      <div className="mx-40  text-lg text-justify mb-10">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
};

export default Post;
