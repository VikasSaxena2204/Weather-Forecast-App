import React from "react";
import CurrentLocation from "./Location";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/VikasSaxena2204">
          Vikas_Saxena_2204
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
