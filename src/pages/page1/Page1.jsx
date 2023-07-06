import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNameAsync, setSubmittedName } from "../../store/cvSlice";
import './Page1.scss'

const Page1 = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
 
  const handleInputChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setNameAsync(name)).then(() => {
      dispatch(setSubmittedName(name));
    });
  };

  return (
    <div className="container">
      <h1>Enter Your Name</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={name} onChange={handleInputChange}  />
        <button className="button1" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page1;
