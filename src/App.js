import './App.css';
import Employee from './component/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './component/AddEmployee ';
import EditEmployee from './component/EditEmployee';
import Header from './component/Header';
import Employees from './pages/Employees';
function App() {
  return (
       <Header>
          <Employees/>
        </Header>
  );
}

export default App;
