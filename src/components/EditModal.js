import React from "react";
import {
  Form,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalTitle,
  ModalFooter,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import "bootstrap/dist/css/bootstrap.min.css";

const EditModal = ({ post, isOpen, toggleModal }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    toggleModal();
  };

  return (
    <Modal show={isOpen} closeButton>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title-vcenter">Düzenle</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <FormLabel className="navy-text">Title</FormLabel>
          <FormControl className="mb-3" type="text" name="title" placeholder={post.title} />
          <FormLabel className="navy-text">Body</FormLabel>
          <FormControl className="mb-3" as="textarea" rows="5" name="body" placeholder={post.body} />
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
