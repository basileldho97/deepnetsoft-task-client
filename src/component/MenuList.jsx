import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";

const MenuList = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`https://deepnetsoft-task-server.onrender.com/api/menu/${category}`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, [category]);

  return (
    <Container>
      <Row>
        {items.length > 0 ? (
          items.map((item) => (
            <Col md={4} className="mb-3" key={item._id}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <h5 className="text-success">${item.price}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No items available in this category.</p>
        )}
      </Row>
    </Container>
  );
};

export default MenuList;
