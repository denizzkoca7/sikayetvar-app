import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import { Box } from "rebass/styled-components";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Box sx={{
        marginTop: "-300px",
      }}>
      <Content />
      </Box>
      <Footer />
      
    </>
  );
};

export default App;
