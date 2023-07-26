import React, { useState } from "react";
import DisplayUserList from "./components/DisplayUserList";
import Popup from "./components/Popup";
import UserInput from "./components/UserInput";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userValues, setUserValue] = useState([]);
  const handleFormSubmit = (name, age) => {
    if (name.trim() === "" || age.trim() === "") {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
      const value = name + " " + age;
      const updatedValues = [...userValues, value];
      setUserValue(updatedValues);
    }
  };
  return (
    <div>
      <UserInput formData={handleFormSubmit} />
      {isPopupOpen && <Popup />}
      <DisplayUserList userValue={userValues} />
    </div>
  );
}

export default App;
