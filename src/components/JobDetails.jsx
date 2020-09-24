import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import ActiveHead from './ActiveHead';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const JobDetails = ({ jobDetails, onDataChange, onDataErrorChange }) => {
  return (
    <Container fluid className='w-100 p-0'>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <ActiveHead activeHead={jobDetails.head} />
        </Col>
      </Row>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>date of Joining</label>
            <span className='required'>*</span>
          </Form.Label>
          <DatePicker
            name='dateOfJoining'
            className='bg-light form-control'
            selected={jobDetails.data.dateOfJoining}
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
            dateFormat='dd-MM-yyyy'
          />
          <div className='ml-2 text-danger'>
            {jobDetails.dataError.dateOfJoining}
          </div>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Number Series</label>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='numberSeries'
            value={jobDetails.data.numberSeries}
            onChange={(event) => onDataChange(event)}
          >
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Form.Control>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Job Title</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='jobTitle'
            value={jobDetails.data.jobTitle}
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          >
            <option>Select Job Title</option>
            <option>Supervisor</option>
            <option>Clerk</option>
            <option>Peon</option>
          </Form.Control>
          <div className='ml-2 text-danger'>
            {jobDetails.dataError.jobTitle}
          </div>
        </Col>
      </Row>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Employee Number</label>
          </Form.Label>
          <Form.Control
            name='employeeNumber'
            value={jobDetails.data.employeeNumber}
            className='bg-light'
            onChange={(event) => onDataChange(event)}
          />
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Department</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='department'
            value={jobDetails.data.department}
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          >
            <option>Select Department</option>
            <option>Account</option>
            <option>Sales</option>
            <option>Purchase</option>
          </Form.Control>
          <div className='ml-2 text-danger'>
            {jobDetails.dataError.department}
          </div>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>location</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='location'
            value={jobDetails.data.location}
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          >
            <option>Select Location</option>
            <option>Ahmedabad</option>
            <option>Baroda</option>
            <option>Surat</option>
          </Form.Control>
          <div className='ml-2 text-danger'>
            {jobDetails.dataError.location}
          </div>
        </Col>
      </Row>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Reporting Manager</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            name='reportingManager'
            placeholder='start typing employee name'
            value={jobDetails.data.reportingManager}
            className='bg-light'
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          />
          <div className='ml-2 text-danger'>
            {jobDetails.dataError.reportingManager}
          </div>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Worker Type</label>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='workerType'
            value={jobDetails.data.workerType}
            onChange={(event) => onDataChange(event)}
          >
            <option>Permenant</option>
            <option>Full Time</option>
            <option>Part time</option>
            <option>Casual</option>
          </Form.Control>
        </Col>
        <Col className='p-0 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Probation Period</label>
          </Form.Label>
          <InputGroup>
            <Form.Control
              name='probationPeriodNumber'
              value={jobDetails.data.probationPeriodNumber}
              className='bg-light'
              onChange={(event) => onDataChange(event)}
            />
            <Form.Control
              as='select'
              className='bg-light'
              name='probationPeriodUnit'
              value={jobDetails.data.probationPeriodUnit}
              onChange={(event) => onDataChange(event)}
            >
              <option>Month</option>
              <option>Year</option>
            </Form.Control>
          </InputGroup>
        </Col>
      </Row>
      <Row className='m-0 mb-2'>
        <Col sm={4} className='p-0 pr-3 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>User Type</label>
          </Form.Label>
          <Form.Control
            as='select'
            className='bg-light'
            name='userType'
            value={jobDetails.data.userType}
            onChange={(event) => onDataChange(event)}
          >
            <option>Developer</option>
            <option>Employee</option>
          </Form.Control>
          <div className='ml-2 text-danger'>
            {jobDetails.dataError.userType}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
