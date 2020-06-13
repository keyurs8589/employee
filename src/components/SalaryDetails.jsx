import React from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import ActiveHead from './ActiveHead';

const SalaryDetails = ({ salaryDetails, onDataChange, onDataErrorChange }) => {
  return (
    <Container fluid className='w-100 p-0'>
      <Row className='m-0'>
        <Col className='p-0 mx-2'>
          <ActiveHead activeHead={salaryDetails.head} />
        </Col>
      </Row>
      <Row className='m-0'>
        <Col sm={4} className='p-0 pr-3 mx-2'>
          <InputGroup className='switch-element'>
            <Form.Label className='text-uppercase font-weight-bold mb-0'>
              <label className='mb-0'>Pf Eligible</label>
            </Form.Label>
            <Form.Check
              name='pfEligible'
              type='switch'
              id='pfEligible'
              label=''
              checked={salaryDetails.data.pfEligible ? 'checked' : ``}
              onChange={(event) => onDataChange(event)}
            />
          </InputGroup>
        </Col>
        <Col sm={4} className='p-0 pr-3 mx-2'>
          <InputGroup className='switch-element'>
            <Form.Label className='text-uppercase font-weight-bold mb-0'>
              <label className='mb-0'>esi Eligible</label>
            </Form.Label>
            <Form.Check
              name='esiEligible'
              type='switch'
              id='esiEligible'
              label=''
              checked={salaryDetails.data.esiEligible ? 'checked' : ``}
              onChange={(event) => onDataChange(event)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className='m-0 mb-2'>
        <Col sm={4} className='p-0 pr-3 mx-2'>
          <Form.Label className='text-uppercase font-weight-bold mb-0'>
            <label className='mb-0'>Annual Salary</label>
            <span className='required'>*</span>
          </Form.Label>
          <Form.Control
            name='annualSalary'
            value={salaryDetails.data.annualSalary}
            className='bg-light'
            onChange={(event) => onDataChange(event)}
            onFocus={(event) => onDataErrorChange(event)}
          />
          <div className='ml-2 text-danger'>
            {salaryDetails.dataError.annualSalary}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SalaryDetails;
