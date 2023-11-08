import { useState } from "react";
import Input from "./Input";
import  "./Contact.css";

function ContactPage() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" id="name" value="demo name" title="name" handleInputChange />
        <Input type="email" id="email" value="demo name" title="email" handleInputChange />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={state.message}
          onChange={handleInputChange}
          rows="6"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
