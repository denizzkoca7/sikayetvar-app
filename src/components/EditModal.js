import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalTitle,
  ModalFooter,
} from "react-bootstrap";
import { Button } from "rebass/styled-components";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "bootstrap/dist/css/bootstrap.min.css";

const EditModal = ({ post, isOpen, toggleModal, setPosts, posts }) => {
  const [updatedPost, setUpdatedPost] = useState({});

  useEffect(() => {
    setUpdatedPost(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postListItemTemp = [];

    posts.map((item) => {
      if (item.id === updatedPost.id) {
        item = { ...item, title: updatedPost.title, body: updatedPost.body };
        postListItemTemp.push(item);
      } else {
        postListItemTemp.push(item);
      }
    });

    setPosts(postListItemTemp);
    toggleModal();
  };

  const handleChange = (e) => {
    setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={isOpen}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <ModalHeader>
          <ModalTitle id="contained-modal-title-vcenter">Düzenle</ModalTitle>
          <Button sx={{ backgroundColor: "black", padding: "5px 10px" }}>
            X
          </Button>
        </ModalHeader>
        <ModalBody>
          <FormLabel className="navy-text">Title</FormLabel>
          <FormControl
            className="mb-3"
            type="text"
            name="title"
            placeholder={post.title}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel className="navy-text">Body</FormLabel>
          <FormControl
            className="mb-3"
            as="textarea"
            rows="5"
            name="body"
            placeholder={post.body}
          />
        </ModalBody>
        <ModalFooter>
          <button type="submit" className="btn btn-primary">
            Güncelle
          </button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default EditModal;
