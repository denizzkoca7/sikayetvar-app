import React from "react";
import { Flex, Box } from "rebass/styled-components";
import CustomButton from "../components/CustomButton";

const PostItem = ({handleClick}) => {
  return (
    <Flex flexDirection="column" height="100px" alignItems="center" justifyContent="center">
      <Flex flexDirection="row" justifyContent="space-between" width={1}>
        <Box >
          <p>
            <span>1.</span>
            sunt aut facere repellat provident occaecati excepturi optio
            reprehenderit
          </p>
        </Box>
        <Flex  justifyContent="space-between" sx={{gap:"15px"}}>
          <CustomButton bgColor="#5E72E4" title="DETAY" textColor="#fffff" onClick={() => handleClick()}/>
          <CustomButton bgColor="#2DCE89" title="DÜZENLE" textColor="#fffff" />
          <CustomButton bgColor="#FB6340" title="SİL" textColor="#fffff" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostItem;
