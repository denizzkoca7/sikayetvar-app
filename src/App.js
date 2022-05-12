import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import { Box } from "rebass/styled-components";
import Footer from "./layouts/Footer";

const App = () => {
  const [variant, setVariant] = React.useState("homePage");

  const handleClick = () => {
    setVariant("DetailPage");
  }
  
  console.log(variant);
  return (
    <>
      <Header />
      <Box sx={{
        marginTop: "-300px",
      }}>
      <Content variant={variant} handleClick={handleClick} />
      </Box>
      <Footer />
      
    </>
  );
};

export default App;
