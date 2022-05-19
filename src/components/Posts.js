import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts,removePost }) => {
  return (
        <>
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              removePost={removePost}
            />
          ))}
        </>
  );
};

export default Posts;
