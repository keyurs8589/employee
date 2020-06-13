import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ActiveHead from './ActiveHead';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BasicDetails = ({ basicDetails, onDataChange, onDataErrorChange }) => {
  return (
    <Container fluid className='w-100 p-0'>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <ActiveHead activeHead={basicDetails.head} />
        </Col>
      </Row>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>first name</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            name='firstName'
            value={basicDetails.data.firstName}
            className='bg-light'
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          />
          <div className='ml-2 text-danger'>
            {basicDetails.dataError.firstName}
          </div>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>middle name</label>
          </Form.Label>
          <Form.Control
            name='middleName'
            value={basicDetails.data.middleName}
            className='bg-light'
            onChange={(event) => onDataChange(event)}
          />
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>last name</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            name='lastName'
            value={basicDetails.data.lastName}
            className='bg-light'
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          />
          <div className='ml-2 text-danger'>
            {basicDetails.dataError.lastName}
          </div>
        </Col>
      </Row>
      <Row className='m-0 mb-2'>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>gender</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='gender'
            value={basicDetails.data.gender}
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
          <div className='ml-2 text-danger'>
            {basicDetails.dataError.gender}
          </div>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>date of birth</label>
            <span className='required'>*</span>
          </Form.Label>
          <DatePicker
            name='dateOfBirth'
            className='bg-light form-control'
            selected={basicDetails.data.dateOfBirth}
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
            dateFormat='dd-MM-yyyy'
          />
          <div className='ml-2 text-danger'>
            {basicDetails.dataError.dateOfBirth}
          </div>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>email</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            name='email'
            value={basicDetails.data.email}
            className='bg-light'
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          />
          <div className='ml-2 text-danger'>{basicDetails.dataError.email}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default BasicDetails;
