import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.linkedin.com/in/rewant-raj/">
          linkedin
        </a>{" "}
        || Developed by Rewant{" "} ||
         
        
        
      </div>
    </React.Fragment>
  );
}

export default App;
