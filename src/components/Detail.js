import React from "react";
import { Flex, Box, Text } from "rebass/styled-components";
import map from "../images/map.svg";

const Detail = () => {
  return (
    <Flex flexDirection="column" padding={30}>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        width={1}
        pb={50}
        sx={{ borderBottom: "1px solid" }}
      >
        <Flex flexDirection="column">
          <Box>
            <Text as="h1">Leanne Graham </Text>
            <span>Gwenborough</span>
          </Box>
          <Flex className="user-list" mt={30}>
            <ul>
              <li>Username</li>
              <li>Username</li>
              <li>Username</li>
              <li>Username</li>
              <li>Username</li>
            </ul>
            <ul>
              <li>Bret</li>
              <li>Bret</li>
              <li>Bret</li>
              <li>Bret</li>
              <li>Bret</li>
            </ul>
          </Flex>
        </Flex>
        <Box>
          <img src={map} alt="map" />
        </Box>
      </Flex>
      <Box padding="60px 100px" textAlign="center">
        <Text as="p"   lineHeight={2} fontSize={16}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea
          nostrum numquam officiis quas commodi dolores nobis eaque veniam quos
          impedit sit, eligendi architecto cum vitae minima suscipit cupiditate
          iure ratione asperiores rerum atque aperiam deserunt est.
        </Text>
        <p style={{textAlign:"center", color:"#4A90E2", display:"block"}}>Show More</p>
      </Box>
    </Flex>
  );
};

export default Detail;
