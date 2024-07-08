import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  let aboutText="About";
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
          setAlert(null);
      },1500)
  }

  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }
  }
  return (
    <>
       <Router>
          <Navbar title="TextUtils" mode= {mode} togglemode={togglemode} aboutText={aboutText}></Navbar>
          <Alert alert={alert}></Alert>
          <div className='container my-3'>
              <Switch>
                <Route exact path="/about">  
                  <About mode={mode} />
                </Route> 
                <Route exact path="/">
                <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
                </Route>
              </Switch>
          </div>   
       </Router>
    </>
  );
}

export default App;

