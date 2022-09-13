import './App.css';
import { useState } from 'react';
// import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from './Navbar';
import MainContainer from './MainContainer';

function App() {
  // let navigate = useNavigate()
  const [user, setUser] = useState('')


  

  return (
    <div>
      <Navbar user={user} />
      <MainContainer setUser={setUser} />

    </div>
  );
}

export default App;
