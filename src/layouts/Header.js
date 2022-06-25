import React from "react";
import { Flex } from "rebass/styled-components";
import styled from "styled-components";
import logo from "../images/logo.svg";
import bg from "../images/bg.svg";
import CustomButton from "../components/CustomButton";

const Header = () => {
  return (
    <Container>
      <Flex
        sx={{
          width: "100%",
          maxWidth: "1020px",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          height: "100px",
        }}
      >
        <Flex width={1 / 6} alignItems="center" justifyContent="space-between">
          <img src={logo} alt="logo" />
          <a href="/" className="post-link">
            Posts
          </a>
        </Flex>
        <CustomButton
          bgColor="#fffff"
          title="Login"
          textColor="#5E72E4"
          fw={300}
        />
      </Flex>
    </Container>
  );
};

const Container = styled(Flex)`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 45vh;
  width: 100%;
  z-index: -1;
  .post-link {
    text-decoration: none;
  }
`;

export default Header;
