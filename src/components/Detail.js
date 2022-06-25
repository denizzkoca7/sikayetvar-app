import React from "react";
import { Flex, Box, Text } from "rebass/styled-components";
import map from "../images/map.svg";

const Detail = ({ user }) => {
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
            <Text as="h1">{user.name}</Text>
            <span style={{color:"#32325D", marginTop:"8px"}}> {user.address ? user.address.city : ""} </span>
          </Box>
          <Flex className="user-list" mt={30}>
            <ul className="description">
              <li>Username</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Website</li>
              <li>Company</li>
            </ul>
            <ul>
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
              <li><span style={{color:"#4A90E2"}}>{user.website}</span> </li>
              <li>{user.company && user.company.name}</li>
            </ul>
          </Flex>
        </Flex>
        <Box>
          <img src={map} alt="map" />
        </Box>
      </Flex>
      <Box padding="45px 100px" textAlign="center" color="#525F7F">
        <Text as="p" lineHeight={2} fontSize={16}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea
          nostrum numquam officiis quas commodi dolores nobis eaque veniam quos
          impedit sit, eligendi architecto cum vitae minima suscipit cupiditate
          iure ratione asperiores rerum atque aperiam deserunt est.
        </Text>
        <p style={{ textAlign: "center", color: "#4A90E2", display: "block", marginTop:"20px" }}>
          Show More
        </p>
      </Box>
    </Flex>
  );
};

export default Detail;
