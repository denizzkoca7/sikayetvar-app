import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Detail from "../components/Detail";
import Posts from "../components/Posts";

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [currentPost, setCurrentPost] = useState({});

  const fetchPosts = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=26"
    );
    const data = await response.json();
    setPosts(data);
  }, []);

  const fetchUser = useCallback(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/1`
    );
    const data = await response.json();
    setUser(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const removePost = (id) => {
    const delet = posts.filter((post) => id !== post.id);
    setPosts(delet);
  };

  
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Posts posts={posts} removePost={removePost} />}
          />
          <Route path="/profile-details" element={<Detail user={user} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  width: 1014px;
  height: 600px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  z-index: 100;
  box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.1),
    0px 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
`;

export default Content;
