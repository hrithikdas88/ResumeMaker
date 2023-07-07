import { useSelector } from "react-redux";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setImage } from "../../store/cvSlice";

import "./Page2.scss";
import useFormHandlers from "../../components/CustomHooks/UseFormChangeHandlers";
import { setPersonalInfo } from "../../store/cvSlice";
const Page2 = () => {
  const submittedName = useSelector((state) => state.input.submittedName);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const {
    personalInfo,
    handleNameChange,
    handleAgeChange,
    handleEmailChange,
    handleNumberChange,

    handleWorkExperienceChange,
    handleEducationalQualificationChange,
    handleAddLanguage,
    handleAddSkill,
    handleAddWorkExperience,
    handleAddEducationalQualification,
  } = useFormHandlers();

  const handleImageUpload = () => {
    const file = fileInputRef.current.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      dispatch(setImage(reader.result));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const renderLanguageInputs = () => {
    return personalInfo.languages.map((language, index) => {
      const handleLanguageChange = (event) => {
        const updatedLanguages = [...personalInfo.languages];
        updatedLanguages[index] = {
          ...updatedLanguages[index],
          languages: event.target.value,
        };
        dispatch(setPersonalInfo({ languages: updatedLanguages }));
      };

      return (
        <div key={index}>
          <input
            type="text"
            value={language.languages}
            onChange={handleLanguageChange}
          />
        </div>
      );
    });
  };

  const renderSkillInputs = () => {
    return personalInfo.skills.map((skill, index) => {
      const handleSkillChange = (event) => {
        const updatedSkills = [...personalInfo.skills];
        updatedSkills[index] = {
          ...updatedSkills[index],
          skills: event.target.value,
        };
        dispatch(setPersonalInfo({ skills: updatedSkills }));
      };

      return (
        <div key={index}>
          <input
            style={{ width: "250px" }}
            type="text"
            value={skill.skills}
            onChange={handleSkillChange}
          />
        </div>
      );
    });
  };

  const renderworkExperiences = () => {
    return personalInfo.workExperiences.map((workExperience, index) => (
      <>
        <div key={index}>
          <input
            style={{ width: "250px" }}
            type="text"
            value={workExperience.Employername}
            placeholder="Employername"
            onChange={(event) =>
              handleWorkExperienceChange(event, index, "Employername")
            }
          />
        </div>

        <div key={index}>
          <input
            style={{ width: "250px" }}
            type="text"
            value={workExperience.Jobtitle}
            placeholder="Jobtitle"
            onChange={(event) =>
              handleWorkExperienceChange(event, index, "Jobtitle")
            }
          />
        </div>

        <div key={index}>
          <input
            style={{ width: "250px" }}
            type="text"
            value={workExperience.Duration}
            placeholder="Duration"
            onChange={(event) =>
              handleWorkExperienceChange(event, index, "Duration")
            }
          />
        </div>
      </>
    ));
  };

  const renderEducationalQualification = () => {
    return personalInfo.educationalQualifications.map(
      (educationalQualification, index) => (
        <>
          <div key={index}>
            <input
              style={{ width: "250px" }}
              type="text"
              value={educationalQualification.InstituteName}
              placeholder="InstituteName"
              onChange={(event) =>
                handleEducationalQualificationChange(
                  event,
                  index,
                  "InstituteName"
                )
              }
            />
          </div>

          <div key={index}>
            <input
              style={{ width: "250px" }}
              type="text"
              value={educationalQualification.Qualification}
              placeholder="Qualification"
              onChange={(event) =>
                handleEducationalQualificationChange(
                  event,
                  index,
                  "Qualification"
                )
              }
            />
          </div>

          <div key={index}>
            <input
              style={{ width: "250px" }}
              type="text"
              value={educationalQualification.Cgpa}
              placeholder="Cgpa"
              onChange={(event) =>
                handleEducationalQualificationChange(event, index, "Cgpa")
              }
            />
          </div>
        </>
      )
    );
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
              value={personalInfo.name}
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
            <button
              className="button"
              type="button"
              onClick={handleAddLanguage}
            >
              Add Language
            </button>
          </form>
        </div>

        <div className="right-side">
          <form>
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              ref={fileInputRef}
            />
            <button type="button" onClick={handleImageUpload}>
              Upload Image
            </button>
            <label htmlFor="skills">Skills:</label>
            {renderSkillInputs()}
            <button className="button" type="button" onClick={handleAddSkill}>
              Add Skill
            </button>

            <label htmlFor="workExperience">Work Experience:</label>

            {renderworkExperiences()}

            <button
              type="button"
              className="button"
              onClick={handleAddWorkExperience}
            >
              Add Work Experience
            </button>

            <label htmlFor="educationalQualification">
              Educational Qualification:
            </label>
            {renderEducationalQualification()}
            <button
              type="button"
              className="button"
              onClick={handleAddEducationalQualification}
            >
              Add Educational Qualification
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page2;
