import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Test1 from './screens/Test1';
import Test2 from './screens/Test2';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path='/test1' element={<Test1/>} />
        <Route path='/test2' element={<Test2 />} /> 
        </Routes>
      </Router>
  );
}

export default App;
