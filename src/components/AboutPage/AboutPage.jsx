import {  useRef } from "react";

const AboutPage = () => {
  
  const descriptionRef = useRef(null);

  

  return (
    <div className="container">
      <h1>About Us</h1>
      <p>Here, you can provide information about your shop:</p>
      <textarea
        ref={descriptionRef}
        value=""
        rows="6"
        cols="50"
        placeholder="Enter a description about your shop..."
      />
    </div>
  );
};

export default AboutPage;
