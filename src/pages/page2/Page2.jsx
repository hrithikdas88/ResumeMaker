import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setSubmittedName,
  setPersonalInfo,
  addLanguage,
  addSkill,
  addWorkExperience,
  addEducationalQualification,
} from "../../store/cvSlice";
import "./Page2.scss";

const Page2 = () => {
  const submittedName = useSelector((state) => state.input.submittedName);
  const personalInfo = useSelector((state) => state.input.personalInfo);
  const additionalInfo = useSelector((state) => state.input.additionalInfo);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(setSubmittedName(event.target.value));
  };

  const handleAgeChange = (event) => {
    dispatch(
      setPersonalInfo({
        age: event.target.value,
      })
    );
  };

  const handleEmailChange = (event) => {
    dispatch(
      setPersonalInfo({
        email: event.target.value,
      })
    );
  };

  const handleNumberChange = (event) => {
    dispatch(
      setPersonalInfo({
        number: event.target.value,
      })
    );
  };

  const handleLanguageChange = (event, index) => {
    const languages = [...personalInfo.languages];
    languages[index] = event.target.value;
    dispatch(
      setPersonalInfo({
        languages,
      })
    );
  };

  const handleSkillChange = (event) => {
    dispatch(addSkill(event.target.value));
  };

  const handleWorkExperienceChange = (event) => {
    dispatch(addWorkExperience(event.target.value));
  };

  const handleEducationalQualificationChange = (event) => {
    dispatch(addEducationalQualification(event.target.value));
  };

  const handleAddLanguage = () => {
    const languages = [...personalInfo.languages, ""];
    dispatch(
      setPersonalInfo({
        languages,
      })
    );
  };
   const handleAddSkill = ()=>{
    const skills =[...personalInfo.skills,""];
    dispatch(setPersonalInfo({
      skills,
    }))
   }

  const renderLanguageInputs = () => {
    return personalInfo.languages.map((language, index) => (
      <div key={index}>
        <input
          type="text"
          value={language}
          onChange={(event) => handleLanguageChange(event, index)}
        />
      </div>
    ));
  };

  return (
    <div className="card">
      <h1>Welcome: {submittedName}</h1>

      <div className="content">
        <div className="left-side">
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={submittedName}
              onChange={handleNameChange}
              readOnly
            />

            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={personalInfo.age}
              onChange={handleAgeChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={personalInfo.email}
              onChange={handleEmailChange}
            />

            <label htmlFor="number">Number:</label>
            <input
              type="number"
              id="number"
              name="number"
              value={personalInfo.number}
              onChange={handleNumberChange}
            />

            <label htmlFor="language">Languages:</label>
            {renderLanguageInputs()}
            <button type="button" onClick={handleAddLanguage}>
              Add Language
            </button>
          </form>
        </div>

        <div className="right-side">
          <form>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" accept="image/*" />

            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              id="skills"
              name="skills"
              onChange={handleSkillChange}
            />
            <button type="button" onClick={handleAddSkill}>Add Skill</button>

            <label htmlFor="workExperience">Work Experience:</label>
            <textarea
              id="workExperience"
              name="workExperience"
              onChange={handleWorkExperienceChange}
            ></textarea>
            <button type="button">Add Work Experience</button>

            <label htmlFor="educationalQualification">
              Educational Qualification:
            </label>
            <textarea
              id="educationalQualification"
              name="educationalQualification"
              onChange={handleEducationalQualificationChange}
            ></textarea>
            <button type="button">Add Educational Qualification</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page2;
