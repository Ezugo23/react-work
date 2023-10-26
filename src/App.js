import './App.css';
import Employee from './component/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './component/AddEmployee ';
import EditEmployee from './component/EditEmployee';
import Header from './component/Header';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
            <BrowserRouter>
     <Header>
            <Routes>
                <Route path='/employees' element={<Employees/>} />
            </Routes>
      </Header>
            </BrowserRouter>
        
  );
}

export default App;
