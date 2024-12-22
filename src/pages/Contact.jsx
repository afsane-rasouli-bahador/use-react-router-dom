import React from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); 
  const name = queryParams.get('name');

  return (
    <div>
      <h1>Hello, {name || "Guest"}!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente
        ducimus sint porro error impedit laborum dolore a natus? Sed quisquam
        voluptatibus aliquam, voluptas in hic omnis adipisci nulla! Natus.
      </p>
    </div>
  );
}

export default Contact;
