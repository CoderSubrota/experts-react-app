import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { FaShoppingCart, FaUser, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa"; // Importing icons
import AddToCart from "../AddToCart/AddToCart";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch data from dummy API
  useEffect(() => {
    fetch("https://experts-react-app.vercel.app/data/experts.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // Handle Add to Cart
  const addToCart = (person) => {
    if (cart.length >= 5) {
      alert("You can't add more than 5 expertises!");
      return;
    }

    if (!cart.some((item) => item.id === person.id)) {
      setCart([...cart, person]);
    }
  };

  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <div className="py-5 text-center bg-primary text-white rounded" style={{ width: "90%", margin: "auto" }}>
            <h1>Cybersecurity Team Budget</h1>
            <p className="lead mt-3">
              Empowering organizations with the right cybersecurity experts while balancing financial planning.
            </p>
          </div>
        </Row>

        <Row>
          <Col md={8}>
            <h1 className="text-center my-5 text-dark">
              Total <span className="text-info">{data?.length}</span> experts found for Cybersecurity
            </h1>
            <Row className="justify-content-center">
              {data.map((person) => (
                <Col xs={12} md={6} lg={4} key={person.id}>
                  <Card className="mb-4">
                    <Card.Img
                      style={{ height: "255px" }}
                      variant="top"
                      src={person.img}
                      alt={person.name}
                    />
                    <Card.Body>
                      <Card.Title>
                        <FaUser className="me-2 text-primary" />
                        {person.name}
                      </Card.Title>
                      <Card.Text>
                        <strong><FaUser className="me-2 text-info" />Age:</strong> {person.age}
                        <br />
                        <strong><FaUser className="me-2" />Designation:</strong> {person.designation}
                        <br />
                        <strong>
                          <FaMapMarkerAlt className="me-2 text-danger" />
                          Address:
                        </strong>{" "}
                        {person.address}
                        <br />
                        <strong>
                          <FaMoneyBillWave className="me-2 text-success" />
                          Salary:
                        </strong>{" "}
                        ${person.salary.toLocaleString()}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => addToCart(person)}
                        disabled={cart.some((item) => item.id === person.id)}
                      >
                        <FaShoppingCart className="me-2" />
                        {cart.some((item) => item.id === person.id) ? "Added to Cart" : "Add to Cart"}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col
            md={4}
            className="position-sticky"
            style={{
              top: "0",
              height: "100vh",
              overflowY: "auto",
              backgroundColor: "#f8f9fa",
            }}
          >
            <AddToCart cartData={cart} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;