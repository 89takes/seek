import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types'
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from 'react-router-dom';


function App() {
  const [darkMode, setdarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleDarkMode = () =>{
    console.log("Dark mode toggled.")
    if(darkMode){
      setdarkMode(false)
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode disabled!", "danger")
    } else {
      setdarkMode(true)
      document.body.style.backgroundColor = '#818a94'
      showAlert("Dark mode enabled!", "success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<TextForm title="Enter text here: " darkMode={darkMode}/>  } />
    </Routes>
    </div>
    </Router>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default App;
