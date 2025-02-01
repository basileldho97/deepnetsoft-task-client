import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const AddMenuItem = ({ onItemAdded }) => {
  const [formData, setFormData] = useState({
    category: "Drinks",
    name: "",
    description: "",
    price: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://deepnetsoft-task-server.onrender.com/api/menu", formData);
      onItemAdded();
      setFormData({ category: "Drinks", name: "", description: "", price: "" });
      handleClose();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <>
      <Button variant="success" className="mb-3" onClick={handleShow}>
        + Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Menu Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" value={formData.category} onChange={handleChange}>
                <option value="Drinks">Drinks</option>
                <option value="Brunch">Brunch</option>
                <option value="Food">Food</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit">Add Item</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMenuItem;
