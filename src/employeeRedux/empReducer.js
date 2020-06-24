import {
  ADD_EMP_BASIC_DETAILS,
  ADD_JOB_DETAILS,
  ADD_JOB_FILLING,
  ADD_SALARY_DETAILS,
} from './empType';

const initialState = {
  basicDetails: {
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
      console.log({ ...state, basicDetails: action.payload });
      return {
        ...state,
        basicDet: action.payload,
      };
    case ADD_JOB_DETAILS:
      return {
        ...state,
        jobDetails: action.payload,
      };
    case ADD_JOB_FILLING:
      return {
        ...state,
        jobFilling: action.payload,
      };
    case ADD_SALARY_DETAILS:
      return {
        ...state,
        salaryDetails: action.payload,
      };
    default:
      return state;
  }
};

export default empReducer;
