import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="textutils" aboutText="About textutils"/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
       <TextForm heading="Enter the text to analyze below"  mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
