import React from "react";
import { Flex, Box } from "rebass/styled-components";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import EditModal from "./EditModal";

const PostItem = ({ post, removePost }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Flex
        flexDirection="column"
        height="100px"
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection="row" justifyContent="space-between" width={1}>
          <Box>
            <p>
              <span>{post.id}</span>
              {post.title}
            </p>
          </Box>
          <Flex justifyContent="space-between" sx={{ gap: "15px" }}>
            <Link to="/profile-details">
              <CustomButton
                bgColor="#5E72E4"
                title="DETAY"
                textColor="#fffff"
              />
            </Link>
            <CustomButton
              bgColor="#2DCE89"
              title="DÜZENLE"
              textColor="#fffff"
              onClick={() => toggleModal()}
            />
            <CustomButton
              bgColor="#FB6340"
              title="SİL"
              textColor="#fffff"
              onClick={() => removePost(post.id)}
            />
          </Flex>
        </Flex>
      </Flex>
      <EditModal post={post} toggleModal={toggleModal} isOpen={isOpen} />
    </>
  );
};

export default PostItem;
