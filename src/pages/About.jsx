import React from "react";
import { Link, Outlet } from "react-router-dom";
function About() {
  return (
    <div>
      <h1>ABOUT</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        veniam placeat laboriosam fuga eum dolores deserunt earum deleniti
        minima soluta, dicta harum, animi aliquam a velit magnam vitae, possimus
        temporibus.
      </p>
      <Link to='programmer'>programmer</Link>
      <br />
      <Link to='developer'>developer</Link>
      <Outlet/> 
    </div>
  );
}

export default About;
