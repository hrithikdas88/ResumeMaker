import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  addWorkExperience,
  setPersonalInfo,
  addEducationalQualification,
} from "../../store/cvSlice";

const useFormHandlers = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.input.personalInfo);

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
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

  const handleSkillChange = (event, index) => {
    const skills = [...personalInfo.skills];
    skills[index] = event.target.value;
    dispatch(
      setPersonalInfo({
        skills,
      })
    );
  };

  const handleWorkExperienceChange = (event, index, field) => {
    const workExperiences = [...personalInfo.workExperiences];
    const updatedExperience = { ...workExperiences[index] };
    updatedExperience[field] = event.target.value;
    workExperiences[index] = updatedExperience;

    dispatch(
      setPersonalInfo({
        workExperiences,
      })
    );
  };

  const handleEducationalQualificationChange = (event, index, field) => {
    const educationalQualifications = [
      ...personalInfo.educationalQualifications,
    ];
    const updatedEducation = { ...educationalQualifications[index] };
    updatedEducation[field] = event.target.value;
    educationalQualifications[index] = updatedEducation;

    dispatch(
      setPersonalInfo({
        educationalQualifications,
      })
    );
  };

  const handleAddLanguage = () => {
    const languages = [...personalInfo.languages, ""];
    dispatch(
      setPersonalInfo({
        languages,
      })
    );
  };

  const handleAddSkill = () => {
    const skills = [...personalInfo.skills, ""];
    dispatch(
      setPersonalInfo({
        skills,
      })
    );
  };

  const handleAddWorkExperience = () => {
    dispatch(addWorkExperience());
  };

  const handleAddEducationalQualification = () => {
    dispatch(addEducationalQualification());
  };
  

  return {
    personalInfo,
    handleNameChange,
    handleAgeChange,
    handleEmailChange,
    handleNumberChange,
    handleLanguageChange,
    handleSkillChange,
    handleWorkExperienceChange,
    handleEducationalQualificationChange,
    handleAddLanguage,
    handleAddSkill,
    handleAddWorkExperience,
    handleAddEducationalQualification,
  };
};

export default useFormHandlers;
