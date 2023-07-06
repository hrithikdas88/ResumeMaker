import React from "react";
import { useSelector } from "react-redux";
import "./Page3.scss"


const Page3 = () => {
  const personalInfo = useSelector((state) => state.input.personalInfo);

  return (
    <div className="cv-container">
    <div className="header">
      <img src="your-image.jpg" alt="Your Name" />
      <h1 className="name">Your Name</h1>
      <h2 className="title">Your Title/Position</h2>
    </div>
    <div className="content">
      <div className="left-section">
        <h3>Personal Details</h3>
        <div className="details-row">
          <span className="label">Age:</span>
          <span className="value">30</span>
        </div>
        <div className="details-row">
          <span className="label">Email:</span>
          <span className="value">example@example.com</span>
        </div>
        <div className="details-row">
          <span className="label">Phone:</span>
          <span className="value">123-456-7890</span>
        </div>
        <div className="details-row">
          <span className="label">Languages:</span>
          <span className="value">English, Spanish</span>
        </div>
        <div className="skills">
          <h4>Skills:</h4>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>
        </div>
      </div>
      <div className="right-section">
        <h3>Educational Qualification</h3>
        <div className="qualification">
          <h4>Degree 1</h4>
          <p>University/Institution</p>
          <p>Year</p>
        </div>
        <div className="qualification">
          <h4>Degree 2</h4>
          <p>University/Institution</p>
          <p>Year</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Page3;

