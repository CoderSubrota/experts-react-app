import React from "react";
import { Container, Table } from "react-bootstrap";

const AddToCart = ({ cartData }) => {
  // Calculate total salary
  const totalSalary = cartData.reduce((sum, user) => sum + user.salary, 0);

  return (
    <Container className="mt-5">
      <h3 className="text-center mt-4 text-info">
        Total Items: {cartData.length}
      </h3>
      <h4 className="text-center mt-2 text-success">
        Total Salary: ${totalSalary.toLocaleString()}
      </h4>
      {cartData && cartData.length > 0 ? (
        <>
          <Table striped bordered hover className="mt-4 text-center">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.img}
                      alt={user.name}
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <p className="text-center">Your cart is empty!</p>
      )}
    </Container>
  );
};

export default AddToCart;