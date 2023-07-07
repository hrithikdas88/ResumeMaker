import React from "react";
import { useSelector } from "react-redux";
import "./Page3.scss";

const Page3 = () => {
  const personalInfo = useSelector((state) => state.input.personalInfo);
  const image = useSelector((state) => state.input.image);

  return (
    <div className="main-container">
    <div className="full">
      <div className="left">
        <div className="image">
          {image && (
            <img
              src={image}
              alt="Uploaded Image"
              style={{ width: "100px", height: "100px" }}
            />
          )}
        </div>
        <div className="Contact">
          <h2>Contact</h2>
          <p>
            <b>Email id:</b> {personalInfo.email}
          </p>
          <p>
            <b>Mobile no :</b> {personalInfo.number}
          </p>
        </div>
        <div className="Skills">
          <h2>Skills</h2>
          {personalInfo.skills.map((skill, index) => (
            <ul>
              <li key={index}>{skill.skills}</li>
            </ul>
          ))}
        </div>
        <div className="Language">
          <h2>Language</h2>
          {personalInfo.languages.map((language, index) => (
            <ul>
              <li key={index}>{language.languages}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="name">
          <h1>{personalInfo.name}</h1>
        </div>
        <div className="title">
          <p>Web Developer</p>
        </div>
        <div className="Summary">
          <h2>Summary</h2>
          <p>
            To secure a challenging position in a reputable organization to
            expand my learning knowledge and skill
          </p>
        </div>
        <div className="Experience">
          <h2>Experience</h2>
          {personalInfo.workExperiences.map((workExperience, index) => (
            <div key={index}>
              <h3>Employer Name:{workExperience.Employername}</h3>
              <p>Job Title: : {workExperience.Jobtitle}</p>
              <p>Duration: {workExperience.Duration}</p>
            </div>
          ))}

          <div className="Education">
            <h2>Education</h2>
            {personalInfo.educationalQualifications.map(
              (qualification, index) => (
                <div key={index}>
                  <h3>Institute Name: {qualification.InstituteName}</h3>
                  <p>Qualification: {qualification.Qualification}</p>
                  <p>CGPA: {qualification.Cgpa}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page3;
