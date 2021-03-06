import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="textutils" aboutText="About textutils"/> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
       <TextForm heading="TextUtils - Word Counter, Character Counter,
       Remove extra spaces"  mode={mode}/>
      <About  mode={mode}/>
      </div>
    </>
  );
}

export default App;
