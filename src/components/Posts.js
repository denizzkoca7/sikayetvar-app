import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts,removePost,setPosts }) => {
  return (
        <>
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              removePost={removePost}
              setPosts={setPosts}
              posts={posts}
            />
          ))}
        </>
  );
};

export default Posts;
