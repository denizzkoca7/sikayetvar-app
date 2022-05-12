import React from "react";
import PostItem from "./PostItem";

const Posts = ({handleClick,posts}) => {
  return (
    {posts.map((post) => (
        <PostItem key={post.id} handleClick={handleClick} post={post} />
    ))}
    
  );
};

export default Posts;
