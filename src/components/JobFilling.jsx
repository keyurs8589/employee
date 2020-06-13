import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ActiveHead from './ActiveHead';

const JobFilling = ({ jobFilling, onDataChange }) => {
  return (
    <Container fluid className='w-100 p-0'>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <ActiveHead activeHead={jobFilling.head} />
        </Col>
      </Row>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Leave Plan</label>
          </Form.Label>
          {/* <Form.Control
              name='firstName'
              value={basicDetails.data.firstName}
              className='bg-light'
              onChange={(event) => onDataChange(event)}
              onFocus={(event) => onDataErrorChange(event)}
            /> */}
          <Form.File id='custom-file' label='Custom file input' custom />
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>shift</label>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='shift'
            value={jobFilling.data.shift}
            onChange={(event) => onDataChange(event)}
          >
            <option>Shift</option>
            <option>Morning</option>
            <option>Noon</option>
            <option>Night</option>
          </Form.Control>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>weekOffs</label>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='weekOffs'
            value={jobFilling.data.weekOffs}
            onChange={(event) => onDataChange(event)}
          >
            <option>Saturday, Sunday Off</option>
            <option>Monay</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </Form.Control>
        </Col>
      </Row>
      <Row className='m-0 mb-2'>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>holiday Lists</label>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='holidayLists'
            value={jobFilling.data.holidayLists}
            onChange={(event) => onDataChange(event)}
          >
            <option>Ahmedabad Holiday</option>
            <option>Gujarat Holiday</option>
            <option>India Holiday</option>
          </Form.Control>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>attendance Policy</label>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='attendancePolicy'
            value={jobFilling.data.attendancePolicy}
            onChange={(event) => onDataChange(event)}
          >
            <option>Normal Shift Policy</option>
            <option>Night Shift Policy</option>
            <option>Special Policy</option>
          </Form.Control>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>onboarding Flow</label>
          </Form.Label>
          {/* <Form.Control
              name='firstName'
              value={basicDetails.data.firstName}
              className='bg-light'
              onChange={(event) => onDataChange(event)}
              onFocus={(event) => onDataErrorChange(event)}
            /> */}
          <Form.File id='custom-file' label='Custom file input' custom />
        </Col>
      </Row>
    </Container>
  );
};

export default JobFilling;
