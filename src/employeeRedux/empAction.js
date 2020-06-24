// import * as emplType from './empType';
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

// export const addBasicDetails = (empBasicDetails) => {
//   return {
//     type: emplType.ADD_EMP_BASIC_DETAILS,
//     payload: empBasicDetails,
//   };
// };

export const addBasicDetails = (empBasicDetails) => ({
  type: ADD_EMP_BASIC_DETAILS,
  payload: empBasicDetails,
});

export const updateBasicDetails = (empBasicDetails) => {
  return {
    type: UPDATE_EMP_BASIC_DETAILS,
    payload: empBasicDetails,
  };
};

export const addJobDetails = (empJobDetails) => {
  return {
    type: ADD_JOB_DETAILS,
    payload: empJobDetails,
  };
};

export const updateJobDetails = (empJobDetails) => {
  return {
    type: UPDATE_JOB_DETAILS,
    payload: empJobDetails,
  };
};

export const addJobFilling = (empJobFilling) => {
  return {
    type: ADD_JOB_FILLING,
    payload: empJobFilling,
  };
};

export const updateJobFilling = (empJobFilling) => {
  return {
    type: UPDATE_JOB_FILLING,
    payload: empJobFilling,
  };
};

export const addSalaryDetails = (empSalaryDetails) => {
  return {
    type: ADD_SALARY_DETAILS,
    payload: empSalaryDetails,
  };
};

export const updateSalaryDetails = (empSalaryDetails) => {
  return {
    type: UPDATE_SALARY_DETAILS,
    payload: empSalaryDetails,
  };
};
