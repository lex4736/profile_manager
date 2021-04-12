import React from 'react';
import "./App.css";
import Content from "./components/content";




function App() {
  return (
    <div className="container02">
    
      <h1> PROFILE MANAGER </h1>
                Below you can view information regarding existing employees. Use the filter option to find a specific employee or click on the "name" column to sort through the employees
                <br></br><br></br>
        <Content />

    </div>
  );
}

export default App;