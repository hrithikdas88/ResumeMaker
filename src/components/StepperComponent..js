import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";

import Page1 from "../pages/page1/Page1";
import Page2 from "../pages/page2/Page2";
import Page3 from "../pages/page3/Page3";
import "./StepperComponent.scss"; // Import the SCSS file

const StepperComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="stepper-container"> 
      <Stepper
        steps={[
          { title: "Page 1" },
          { title: "Page 2" },
          { title: "Page 3" }
        ]}
        activeStep={currentPage}
      />

      {currentPage === 0 && <Page1 />}
      {currentPage === 1 && <Page2 />}
      {currentPage === 2 && <Page3 />}

      <button disabled={currentPage === 0} onClick={handlePrevious} className="button">
        Previous
      </button>
      <button disabled={currentPage === 2} onClick={handleNext} className="button">
        Next
      </button>
    </div>
  );
};

export default StepperComponent;


