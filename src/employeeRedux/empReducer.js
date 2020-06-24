import {
  ADD_EMP_BASIC_DETAILS,
  UPDATE_EMP_BASIC_DETAILS,
  ADD_JOB_DETAILS,
  UPDATE_JOB_DETAILS,
  ADD_JOB_FILLING,
  UPDATE_JOB_FILLING,
  ADD_SALARY_DETAILS,
  UPDATE_SALARY_DETAILS,
} from './empType';
import { addJobDetails } from './empAction';

const initialState = {
  basicDetails: {
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
  },
  jobDetails: {
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
  },
  jobFilling: {
    head: 'Job Filling',
    data: {
      leavePlan: '',
      shift: '',
      weekOffs: 'Saturday, Sunday Off',
      holidayLists: 'Ahmedabad Holiday',
      attendancePolicy: 'Normal Shift Policy',
      onboardingFlow: '',
    },
  },
  salaryDetails: {
    head: 'Salary Details',
    data: {
      pfEligible: false,
      esiEligible: false,
      annualSalary: '',
    },
    dataError: {
      annualSalary: '',
    },
  },
};

const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMP_BASIC_DETAILS:
    case UPDATE_EMP_BASIC_DETAILS:
      return {
        ...state,
        basicDetails: action.payload,
      };
    case ADD_JOB_DETAILS:
    case UPDATE_JOB_DETAILS:
      return {
        ...state,
        jobDetails: action.payload,
      };
    case ADD_JOB_FILLING:
    case UPDATE_JOB_FILLING:
      return {
        ...state,
        jobFilling: action.payload,
      };
    case ADD_SALARY_DETAILS:
    case UPDATE_SALARY_DETAILS:
      return {
        ...state,
        salaryDetails: action.payload,
      };
  }
};

export default empReducer;
