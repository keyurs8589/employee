import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ActiveData from './ActiveData';
import HeadRadio from './HeadRadio';

const EmpRecruit = ({ onSubmit }) => {
  const [basicDetails, setBasicDetails] = useState({
    head: 'Basic Details',
    data: {
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      email: '',
    },
    dataError: {
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      email: '',
    },
  });
  const [jobDetails, setJobDetails] = useState({
    head: 'Job Details',
    data: {
      dateOfJoining: '',
      numberSeries: '',
      jobTitle: '',
      employeeNumber: '',
      department: '',
      location: '',
      reportingManager: '',
      workerType: 'Permenant',
      probationPeriodNumber: '',
      probationPeriodUnit: 'Month',
      userType: 'Developer',
    },
    dataError: {
      dateOfJoining: '',
      jobTitle: '',
      department: '',
      location: '',
      reportingManager: '',
    },
  });
  const [jobFilling, setJobFilling] = useState({
    head: 'Job Filling',
    data: {
      leavePlan: '',
      shift: '',
      weekOffs: 'Saturday, Sunday Off',
      holidayLists: 'Ahmedabad Holiday',
      attendancePolicy: 'Normal Shift Policy',
      onboardingFlow: '',
    },
  });
  const [salaryDetails, setSalaryDetails] = useState({
    head: 'Salary Details',
    data: {
      pfEligible: false,
      esiEligible: false,
      annualSalary: '',
    },
    dataError: {
      annualSalary: '',
    },
  });
  const [activeIndex, setActiveIndex] = useState(1);

  const checkValidationBasicDetails = () => {
    let tempObj = Object.assign({}, basicDetails.dataError);
    let errorFlag = false;
    if (!basicDetails.data.firstName.trim()) {
      tempObj.firstName = 'First Name is require.';
      errorFlag = true;
    }
    if (!basicDetails.data.lastName.trim()) {
      tempObj.lastName = 'Last Name is require.';
      errorFlag = true;
    }
    if (
      !basicDetails.data.gender ||
      basicDetails.data.gender === 'Select Gender'
    ) {
      tempObj.gender = 'Gender should be selected.';
      errorFlag = true;
    }
    if (!basicDetails.data.dateOfBirth) {
      tempObj.dateOfBirth = 'Select Date Of Birth.';
      errorFlag = true;
    }
    if (
      !basicDetails.data.email
        .trim()
        .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ) {
      tempObj.email = 'Enter Valid Email Id.';
      errorFlag = true;
    }
    setBasicDetails({ ...basicDetails, dataError: tempObj });
    return errorFlag;
  };

  const checkValidationJobDetails = () => {
    let tempObj = Object.assign({}, jobDetails.dataError);
    let errorFlag = false;
    if (!jobDetails.data.dateOfJoining) {
      tempObj.dateOfJoining = 'Date of Joining is require.';
      errorFlag = true;
    }
    if (
      !jobDetails.data.jobTitle ||
      jobDetails.data.jobTitle === 'Select Job Title'
    ) {
      tempObj.jobTitle = 'Job Title should be selected.';
      errorFlag = true;
    }
    if (
      !jobDetails.data.department ||
      jobDetails.data.department === 'Select Department'
    ) {
      tempObj.department = 'Department should be selected.';
      errorFlag = true;
    }
    if (
      !jobDetails.data.location ||
      jobDetails.data.location === 'Select Location'
    ) {
      tempObj.location = 'Location should be selected.';
      errorFlag = true;
    }
    if (!jobDetails.data.reportingManager.trim()) {
      tempObj.reportingManager = 'Reporting Manager should be allocated.';
      errorFlag = true;
    }
    setJobDetails({ ...jobDetails, dataError: tempObj });
    return errorFlag;
  };

  const checkValidationJobFilling = () => {
    // let tempObj = Object.assign({}, jobFilling.dataError);
    let errorFlag = false;
    return errorFlag;
  };

  const checkValidationSalaryDetails = () => {
    let tempObj = Object.assign({}, salaryDetails.dataError);
    let errorFlag = false;
    if (!salaryDetails.data.annualSalary.trim()) {
      tempObj.annualSalary = 'Annual Salary is must.';
      errorFlag = true;
    }
    setSalaryDetails({ ...salaryDetails, dataError: tempObj });
    return errorFlag;
  };
  const submitHandler = () => {
    let errorFlag = false;
    if (activeIndex === 1) {
      errorFlag = checkValidationBasicDetails();
    } else if (activeIndex === 2) {
      errorFlag = checkValidationJobDetails();
    } else if (activeIndex === 3) {
      errorFlag = checkValidationJobFilling();
    } else if (activeIndex === 4) {
      errorFlag = checkValidationSalaryDetails();
    }
    if (!errorFlag && activeIndex >= 1 && activeIndex <= 3) {
      setActiveIndex(activeIndex + 1);
    }
    if (!errorFlag && activeIndex === 4) {
      let finalData = {
        ...basicDetails.data,
        ...jobDetails.data,
        ...jobFilling.data,
        ...salaryDetails.data,
      };
      onSubmit(finalData);
    }
  };

  const backHandler = () => {
    if (activeIndex >= 2 && activeIndex <= 4) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const cancelHandler = () => {
    if (activeIndex === 1) {
      setBasicDetails({
        ...basicDetails,
        data: {
          firstName: '',
          middleName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          email: '',
        },
        dataError: {
          firstName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          email: '',
        },
      });
    } else if (activeIndex === 2) {
      setJobDetails({
        ...setJobDetails,
        data: {
          dateOfJoining: '',
          numberSeries: '',
          jobTitle: '',
          employeeNumber: '',
          department: '',
          location: '',
          reportingManager: '',
          workerType: 'Permenant',
          probationPeriodNumber: '',
          probationPeriodUnit: 'Month',
          userType: 'Developer',
        },
        dataError: {
          dateOfJoining: '',
          jobTitle: '',
          department: '',
          location: '',
          reportingManager: '',
        },
      });
    } else if (activeIndex === 3) {
      setJobFilling({
        ...jobFilling,
        data: {
          leavePlan: '',
          shift: '',
          weekOffs: 'Saturday, Sunday Off',
          holidayLists: 'Ahmedabad Holiday',
          attendancePolicy: 'Normal Shift Policy',
          onboardingFlow: '',
        },
      });
    } else if (activeIndex === 4) {
      setSalaryDetails({
        ...salaryDetails,
        data: {
          pfEligible: false,
          esiEligible: false,
          annualSalary: '',
        },
        dataError: {
          annualSalary: '',
        },
      });
    }
  };

  const onDataChange = (event) => {
    if (activeIndex === 1) {
      if (!event.target) {
        setBasicDetails({
          ...basicDetails,
          data: { ...basicDetails.data, dateOfBirth: event },
        });
      } else {
        setBasicDetails({
          ...basicDetails,
          data: {
            ...basicDetails.data,
            [event.target.name]: event.target.value,
          },
        });
      }
    } else if (activeIndex === 2) {
      if (!event.target) {
        setJobDetails({
          ...jobDetails,
          data: { ...jobDetails.data, dateOfJoining: event },
        });
      } else {
        setJobDetails({
          ...jobDetails,
          data: {
            ...jobDetails.data,
            [event.target.name]: event.target.value,
          },
        });
      }
    } else if (activeIndex === 3) {
      setJobFilling({
        ...jobFilling,
        data: {
          ...jobFilling.data,
          [event.target.name]: event.target.value,
        },
      });
    } else if (activeIndex === 4) {
      if (event.target.name === 'annualSalary') {
        setSalaryDetails({
          ...salaryDetails,
          data: {
            ...salaryDetails.data,
            [event.target.name]: event.target.value,
          },
        });
      } else {
        setSalaryDetails({
          ...salaryDetails,
          data: {
            ...salaryDetails.data,
            [event.target.name]: event.target.checked,
          },
        });
      }
    }
  };

  const onDataErrorChange = (event) => {
    if (activeIndex === 1) {
      setBasicDetails({
        ...basicDetails,
        dataError: { ...basicDetails.dataError, [event.target.name]: '' },
      });
    } else if (activeIndex === 2) {
      setJobDetails({
        ...jobDetails,
        dataError: { ...jobDetails.dataError, [event.target.name]: '' },
      });
    } else if (activeIndex === 3) {
    } else if (activeIndex === 4) {
      setSalaryDetails({
        ...salaryDetails,
        dataError: { ...salaryDetails.dataError, [event.target.name]: '' },
      });
    }
  };
  return (
    <Container className='border rounded my-2 p-0'>
      <Row className='mb-3'>
        <Col className='p-0'>
          <Container className='border-bottom p-0'>
            <Row className='m-1 text-center'>
              <Col className='mb-0 h4'>
                <HeadRadio
                  labelHead='Basic Details'
                  activeHead={activeIndex === 1 ? 'checked' : ''}
                ></HeadRadio>
              </Col>
              <Col className='mb-0 h4'>
                <HeadRadio
                  labelHead='Job Details'
                  activeHead={activeIndex === 2 ? 'checked' : ''}
                ></HeadRadio>
              </Col>
              <Col className='mb-0 h4'>
                <HeadRadio
                  labelHead='Job Filling'
                  activeHead={activeIndex === 3 ? 'checked' : ''}
                ></HeadRadio>
              </Col>
              <Col className='mb-0 h4'>
                <HeadRadio
                  labelHead='Salary Details'
                  activeHead={activeIndex === 4 ? 'checked' : ''}
                ></HeadRadio>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className='p-0'>
          <Container className='p-0'>
            <Row className='m-0'>
              <Col className='w-100 p-0'>
                <ActiveData
                  activeIndex={activeIndex}
                  basicDetails={basicDetails}
                  jobDetails={jobDetails}
                  jobFilling={jobFilling}
                  salaryDetails={salaryDetails}
                  onDataChange={onDataChange}
                  onDataErrorChange={onDataErrorChange}
                />
              </Col>
            </Row>
            <Row className='m-1 text-center px-5'>
              <Col>
                <Button
                  variant='primary'
                  className='round-button'
                  onClick={cancelHandler}
                >
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button
                  variant='danger'
                  className='round-button'
                  onClick={backHandler}
                >
                  Back
                </Button>
              </Col>
              <Col>
                <Button
                  variant='success'
                  className='round-button'
                  onClick={submitHandler}
                >
                  {activeIndex === 4 ? `Submit` : `Next`}
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default EmpRecruit;
