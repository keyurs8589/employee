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

const initialState = {
  basicDet: {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
  },
  jobDetails: {
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
  jobFilling: {
    leavePlan: '',
    shift: '',
    weekOffs: 'Saturday, Sunday Off',
    holidayLists: 'Ahmedabad Holiday',
    attendancePolicy: 'Normal Shift Policy',
    onboardingFlow: '',
  },
  salaryDetails: {
    pfEligible: false,
    esiEligible: false,
    annualSalary: '',
  },
};

const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMP_BASIC_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        basicDetails: action.payload.basicDetails,
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
    default:
      return state;
  }
};

export default empReducer;
