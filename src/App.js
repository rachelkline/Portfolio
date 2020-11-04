import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import resumeData from './resumeData';

function App() {
  return (
    <Header resumeData={resumeData}/>
  );
}

export default App;
