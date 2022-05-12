import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Detail from "../components/Detail";
import Posts from "../components/Posts";

const Content = ({ variant, handleClick }) => {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
      
  


  return (
    <Container>
      {variant === "homePage" && (
        <>
          <Posts handleClick={handleClick} posts={posts} />
        </>
      )}
      {variant === "DetailPage" && (
        <>
          <Detail />
        </>
      )}
    </Container>
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
