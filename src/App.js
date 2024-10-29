import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const studentInfo = {
    name: "Melina Behzadi Nejad",
    studentId: "101447858",
    college: "George Brown College, Toronto"
  };

  return (
      <div className="App">
        <div className="App-content">
          <img src={logo} alt="React Logo" className="App-logo" />
          <h1>Welcome to Fullstack Development - I</h1>
          <h2>React JS Programming Week09 Lab Exercise</h2>
          <h3>{studentInfo.studentId}</h3>
          <h3>{studentInfo.name}</h3>
          <p>{studentInfo.college}</p>
        </div>
      </div>
  );
}

export default App;
