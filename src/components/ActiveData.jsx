import React from 'react';
import BasicDetails from './BasicDetails';
import JobDetails from './JobDetails';
import JobFilling from './JobFilling';
import SalaryDetails from './SalaryDetails';

function ActiveData({
  activeIndex,
  basicDetails,
  jobDetails,
  jobFilling,
  salaryDetails,
  onDataChange,
  onDataErrorChange,
}) {
  if (activeIndex === 1) {
    return (
      <BasicDetails
        basicDetails={basicDetails}
        onDataChange={onDataChange}
        onDataErrorChange={onDataErrorChange}
      />
    );
  } else if (activeIndex === 2) {
    return (
      <JobDetails
        jobDetails={jobDetails}
        onDataChange={onDataChange}
        onDataErrorChange={onDataErrorChange}
      />
    );
  } else if (activeIndex === 3) {
    return <JobFilling jobFilling={jobFilling} onDataChange={onDataChange} />;
  } else if (activeIndex === 4) {
    return (
      <SalaryDetails
        salaryDetails={salaryDetails}
        onDataChange={onDataChange}
        onDataErrorChange={onDataErrorChange}
      />
    );
  } else return <div>Something Went wrong</div>;
}

export default ActiveData;
