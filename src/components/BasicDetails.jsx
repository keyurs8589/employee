import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BasicDetails = () => {
  const [basicDetails, setBasicDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "Select Gender",
    dateOfBirth: new Date(),
    email: "",
  });

  const [basicDetailsValidation, setBasicDetailsValidation] = useState({
    firstNameError: false,
    lastNameError: false,
    genderError: false,
    dateOfBirthError: false,
    emailError: false,
  });

  const handleDateChange = (date) => {
    date > new Date()
      ? setBasicDetailsValidation({
          ...basicDetailsValidation,
          dateOfBirthError: true,
        })
      : setBasicDetailsValidation({
          ...basicDetailsValidation,
          dateOfBirthError: false,
        });
    setBasicDetails({ ...basicDetails, dateOfBirth: date });
  };

  const basicDetailsChange = (e) => {
    setBasicDetails({
      ...basicDetails,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const setErrorTrueFalse = (name, flag) => {
    setBasicDetailsValidation({
      ...basicDetailsValidation,
      [`${name}Error`]: flag,
    });
  };

  const basicDetailsValidationError = (e) => {
    if (e.target.name === "firstName") {
      e.target.value.trim().length < 5
        ? setErrorTrueFalse(e.target.name, true)
        : setErrorTrueFalse(e.target.name, false);
    } else if (e.target.name === "lastName") {
      e.target.value.trim().length < 5
        ? setErrorTrueFalse(e.target.name, true)
        : setErrorTrueFalse(e.target.name, false);
    } else if (e.target.name === "gender") {
      e.target.value === "Select Gender"
        ? setErrorTrueFalse(e.target.name, true)
        : setErrorTrueFalse(e.target.name, false);
    } else if (e.target.name === "dateOfBirth") {
      e.target.value.trim() === ""
        ? setErrorTrueFalse(e.target.name, true)
        : setErrorTrueFalse(e.target.name, false);
    } else if (e.target.name === "email") {
      e.target.value
        .trim()
        .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) === null
        ? setErrorTrueFalse(e.target.name, true)
        : setErrorTrueFalse(e.target.name, false);
    }
  };

  const validateFullForm = () => {
    let validateFlag = true;

    basicDetails.firstName.trim().length < 5
      ? setErrorTrueFalse("firstName", true)
      : setErrorTrueFalse("firstName", false);
    basicDetails.lastName.trim().length < 5
      ? setErrorTrueFalse("lastName", true)
      : setErrorTrueFalse("lastName", false);
    basicDetails.gender === "Select Gender"
      ? setErrorTrueFalse("gender", true)
      : setErrorTrueFalse("gender", false);
    basicDetails.email
      .trim()
      .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) === null
      ? setErrorTrueFalse("email", true)
      : setErrorTrueFalse("email", false);

    if (
      basicDetailsValidation.firstNameError ||
      basicDetailsValidation.genderError ||
      basicDetailsValidation.lastNameError ||
      basicDetailsValidation.dateOfBirthError ||
      basicDetailsValidation.emailError
    )
      validateFlag = false;

    return validateFlag;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFullForm() && console.log(basicDetails);
    console.log(basicDetailsValidation);
  };

  return (
    <div className="border rounded-lg h6 mx-4 my-3">
      <Container className="px-0">
        <Row className="border-bottom font-weight-bold py-2 mb-4 h4">
          <Col className="p-0">Basic Details</Col>
        </Row>

        <Form onSubmit={handleSubmit} className="p-0">
          <Row className="mb-4">
            <Col className="p-0">
              <Form.Label className="text-uppercase font-weight-bold">
                <label>first name</label>
                <span className="required">*</span>
              </Form.Label>
              <Form.Control
                name="firstName"
                value={basicDetails.firstName}
                className="bg-light"
                onChange={basicDetailsChange}
                onBlur={basicDetailsValidationError}
              />
              <div
                className={
                  basicDetailsValidation.firstNameError
                    ? "ml-2 text-danger"
                    : "d-none"
                }
              >
                First Name should be atleat 5 character.
              </div>
            </Col>
            <Col className="px-3">
              <Form.Label className="text-uppercase font-weight-bold">
                <label>middle name</label>
              </Form.Label>
              <Form.Control
                name="middleName"
                value={basicDetails.middleName}
                className="bg-light"
                onChange={basicDetailsChange}
              />
            </Col>
            <Col className="p-0">
              <Form.Label className="text-uppercase font-weight-bold">
                <label>last name</label>
                <span className="required">*</span>
              </Form.Label>
              <Form.Control
                name="lastName"
                value={basicDetails.lastName}
                className="bg-light"
                onChange={basicDetailsChange}
                onBlur={basicDetailsValidationError}
              />
              <div
                className={
                  basicDetailsValidation.lastNameError
                    ? "ml-2 text-danger"
                    : "d-none"
                }
              >
                Last Name should be atleat 5 character.
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="p-0">
              <Form.Label className="text-uppercase font-weight-bold">
                <label>gender</label>
                <span className="required">*</span>
              </Form.Label>
              <Form.Control
                as="select"
                className="bg-light"
                name="gender"
                value={basicDetails.gender}
                onChange={basicDetailsChange}
                onBlur={basicDetailsValidationError}
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
              <div
                className={
                  basicDetailsValidation.genderError
                    ? "ml-2 text-danger"
                    : "d-none"
                }
              >
                Gender should Male or Female.
              </div>
            </Col>
            <Col className="px-3">
              <Form.Label className="text-uppercase font-weight-bold">
                <label>date of birth</label>
                <span className="required">*</span>
              </Form.Label>
              <DatePicker
                name="dateOfBirth"
                className="bg-light form-control"
                selected={basicDetails.dateOfBirth}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                onBlur={basicDetailsValidationError}
              />
              <div
                className={
                  basicDetailsValidation.dateOfBirthError
                    ? "ml-2 text-danger"
                    : "d-none"
                }
              >
                Date of Birth should not be future date / null.
              </div>
            </Col>
            <Col className="p-0">
              <Form.Label className="text-uppercase font-weight-bold">
                <label>email</label>
                <span className="required">*</span>
              </Form.Label>
              <FormControl
                name="email"
                value={basicDetails.email}
                className="bg-light"
                onChange={basicDetailsChange}
                onBlur={basicDetailsValidationError}
              />
              <div
                className={
                  basicDetailsValidation.emailError
                    ? "ml-2 text-danger"
                    : "d-none"
                }
              >
                Please enter valid Email Id.
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="p-0 text-center">
              <Button variant="success" className="round-button" type="submit">
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default BasicDetails;
