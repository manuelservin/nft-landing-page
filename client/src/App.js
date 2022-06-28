import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import Home from './screens/HomePage/Home';


function App() {
  return (
    <Router>
      <GlobalStyle/>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
            
       
      </Routes>
      
     
    </Router>
  );
}

export default App;
