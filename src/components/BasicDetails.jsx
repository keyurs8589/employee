import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

const BasicDetails = () => {
  const [basicDetails, setBasicDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "Select Gender",
    dateOfBirth: "",
    email: "",
  });

  const basicDetailsChange = (e) => {
    setBasicDetails({ ...basicDetails, [e.target.name]: e.target.value });
  };

  const displayDetails = () => {
    basicDetails.firstName.trim() === "" ||
    basicDetails.lastName.trim() === "" ||
    basicDetails.gender === "Select Gender" ||
    basicDetails.dateOfBirth.trim() === "" ||
    basicDetails.email.trim() === ""
      ? console.log("Please fill all the required field.")
      : console.log(basicDetails);
  };

  return (
    <div className="border rounded-lg h6 mx-4 my-3">
      <Container className="px-0">
        <Row className="border-bottom font-weight-bold py-2 mb-4 h4">
          <Col className="p-0">Basic Details</Col>
        </Row>
        <Row className="mb-4">
          <Col className="p-0">
            <div className="text-uppercase font-weight-bold">
              <label>first name</label>
              <span className="required">*</span>
            </div>
            <FormControl
              name="firstName"
              value={basicDetails.firstName}
              className="bg-light"
              onChange={basicDetailsChange}
            />
          </Col>
          <Col className="px-3">
            <div className="text-uppercase font-weight-bold">
              <label>middle name</label>
            </div>
            <FormControl
              name="middleName"
              value={basicDetails.middleName}
              className="bg-light"
              onChange={basicDetailsChange}
            />
          </Col>
          <Col className="p-0">
            <div className="text-uppercase font-weight-bold">
              <label>last name</label>
              <span className="required">*</span>
            </div>
            <FormControl
              name="lastName"
              value={basicDetails.lastName}
              className="bg-light"
              onChange={basicDetailsChange}
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="p-0">
            <div className="text-uppercase font-weight-bold">
              <label>gender</label>
              <span className="required">*</span>
            </div>
            <Form.Control
              as="select"
              className="bg-light"
              name="gender"
              value={basicDetails.gender}
              onChange={basicDetailsChange}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
          <Col className="px-3">
            <div className="text-uppercase font-weight-bold">
              <label>date of birth</label>
              <span className="required">*</span>
            </div>
            <FormControl
              name="dateOfBirth"
              value={basicDetails.dateOfBirth}
              className="bg-light"
              onChange={basicDetailsChange}
            ></FormControl>
          </Col>
          <Col className="p-0">
            <div className="text-uppercase font-weight-bold">
              <label>email</label>
              <span className="required">*</span>
            </div>
            <FormControl
              name="email"
              value={basicDetails.email}
              className="bg-light"
              onChange={basicDetailsChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="p-0 text-center">
            <Button
              variant="success"
              className="round-button"
              onClick={displayDetails}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasicDetails;
