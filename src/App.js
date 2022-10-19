import { useState } from "react";
import "./styles.css";

export default function App() {
  const obj = { fname: "", lname: "", address: "", contact: "" };
  const [value, setValue] = useState(obj);

  const handleChange = (e) => {
    const val = e.target.value;
    const pro = e.target.name;
    setValue({ ...value, [pro]: val });
  };

  return (
    <div className="App">
      <h1> Multi Input Field Refactoring </h1>
      <input
        type="text"
        className="inputfield"
        onChange={handleChange}
        name="fname"
        placeholder="first Name"
        value={value.fname}
      />
      <br />
      <input
        type="text"
        className="inputfield"
        onChange={handleChange}
        name="lname"
        placeholder="Last Name"
        value={value.lname}
      />
      <br />
      <input
        type="text"
        className="inputfield"
        onChange={handleChange}
        name="address"
        placeholder="address"
        value={value.address}
      />
      <br />
      <input
        type="text"
        className="inputfield"
        onChange={handleChange}
        name="contact"
        placeholder="Contact"
        value={value.contact}
      />
      <br />

      <h2> First Name : {value.fname} </h2>
      <h2> Last Name : {value.lname} </h2>
      <h2> Address : {value.address} </h2>
      <h2> Contact : {value.contact} </h2>
    </div>
  );
}
