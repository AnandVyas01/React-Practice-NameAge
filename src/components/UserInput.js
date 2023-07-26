import { useState } from "react";

function UserInput(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.formData(name, age);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input onChange={handleName} type="text" value={name} id="name" />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input onChange={handleAge} type="text" value={age} id="age" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserInput;
