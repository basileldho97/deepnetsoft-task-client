import React, { useState } from "react";
import MenuList from "../component/MenuList";
import AddMenuItem from "../component/AddMenuItem";
import { Container, Button, Row, Col } from "react-bootstrap";

const Menu = () => {
  const [menuType, setMenuType] = useState("Drinks");
  const [refresh, setRefresh] = useState(false);

  return (
    <Container className="text-center mt-4">
      <h1 className="mb-4">Our Menu</h1>
      <Row className="mb-3">
        <Col>
          <Button variant={menuType === "Drinks" ? "primary" : "outline-primary"} onClick={() => setMenuType("Drinks")}>
            Drinks
          </Button>
        </Col>
        <Col>
          <Button variant={menuType === "Brunch" ? "primary" : "outline-primary"} onClick={() => setMenuType("Brunch")}>
            Brunch
          </Button>
        </Col>
        <Col>
          <Button variant={menuType === "Food" ? "primary" : "outline-primary"} onClick={() => setMenuType("Food")}>
            Food
          </Button>
        </Col>
      </Row>

      {/* Add Item Form */}
      <AddMenuItem onItemAdded={() => setRefresh(!refresh)} />

      {/* Menu List */}
      <MenuList category={menuType} key={refresh} />
    </Container>
  );
};

export default Menu;
