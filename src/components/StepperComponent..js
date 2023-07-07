import React, { useState } from "react";
import Stepper from "react-stepper-horizontal";
import { useSelector } from "react-redux";
import Page1 from "../pages/page1/Page1";
import Page2 from "../pages/page2/Page2";
import Page3 from "../pages/page3/Page3";
import "./StepperComponent.scss";
import { selectAge, selectEmail, selectNumber } from "../store/cvSlice";

const StepperComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const age = useSelector(selectAge);
  const email = useSelector(selectEmail);
  const number = useSelector(selectNumber);

  const handleNext = () => {
    if (currentPage === 1 && (age === "" || email === "" || number === "")) {
      const alertContainer = document.createElement("div");
      alertContainer.className = "alert-container";

      const alertMessage = document.createElement("p");
      alertMessage.className = "alert-message";
      alertMessage.textContent = "Please fill in all the required fields.";

      const alertButton = document.createElement("button");
      alertButton.className = "alert-button";
      alertButton.textContent = "OK";
      alertButton.onclick = () => {
        document.body.removeChild(alertContainer);
      };

      alertContainer.appendChild(alertMessage);
      alertContainer.appendChild(alertButton);
      document.body.appendChild(alertContainer);
      return;
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="stepper-container">
      <Stepper
        steps={[
          { title: "Enter Your Name" },
          { title: "Enter Your Details" },
          { title: "Your Resume is Ready" },
        ]}
        activeStep={currentPage}
      />
      <div className="page-container">
        {currentPage === 0 && <Page1 handleNext={handleNext} />}
        {currentPage === 1 && <Page2 />}
        {currentPage === 2 && <Page3 />}
      </div>
      {currentPage > 0 && (
        <button
          disabled={currentPage === 0}
          onClick={handlePrevious}
          className="button"
        >
          Previous
        </button>
      )}
      {currentPage === 0 && (
        <button
          disabled={currentPage === 0}
          className="button"
          style={{ display: "none" }}
        >
          Next
        </button>
      )}
      {currentPage < 2 && currentPage !== 0 && (
        <button
          disabled={currentPage === 2}
          onClick={handleNext}
          className="button"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default StepperComponent;
