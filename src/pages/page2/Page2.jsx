import React from "react";
import { useSelector } from "react-redux";
import './Page2.scss'

const Page2 = () => {
  const submittedName = useSelector((state) => state.input.submittedName);

  return (
    <div className="card">
 <h1>Welcome: {submittedName}</h1>

  <div className="content">
    <div className="left-side">
      <form>
        
        <label htmlFor="name">Name:</label>
        <input type="text" value={submittedName} readOnly />

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" />

        <label htmlFor="qualification">Educational Qualification:</label>
        <input type="text" id="qualification" name="qualification" />
        <textarea id="EducationalQualification" name="EducationalQualification"></textarea>
    
      </form>
    </div>

    <div className="right-side">
      <form>
        
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" />
        <label htmlFor="skills">Skills:</label>
        <input type="text" id="skills" name="skills" />
        <label htmlFor="workExperience">Work Experience:</label>
        <textarea id="workExperience" name="workExperience"></textarea>
      </form>
    </div>
  </div>
</div>
  
  );
};

export default Page2;
