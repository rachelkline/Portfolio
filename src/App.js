import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from './resumeData';


function App() {
  return (
    <>
    <Header resumeData={resumeData}/>
    <About resumeData={resumeData} />
    <Resume resumeData={resumeData} />
    <Portfolio resumeData={resumeData} />
    <Footer resumeData={resumeData} />
    </>
  );
}

export default App;
