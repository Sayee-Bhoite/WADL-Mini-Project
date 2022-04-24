import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import ToDo from "./components/ToDo/ToDo";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes> 
        <Route  path='/' element={<Home />} />
        <Route path='/todo' element={<ToDo />} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;