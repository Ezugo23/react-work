import './App.css';
import Employee from './component/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './component/AddEmployee ';
import EditEmployee from './component/EditEmployee';
function App() {
  const [role, setRole] = useState('intern');
  const [employee, setEmployee] = useState(
    [
      { 
        id: 1,
        name: 'Paschal',
       role: 'engineer',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { 
        id: 2,
        name: 'Leo',
       role: 'manager',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { 
        id: 3,
        name: 'James',
       role: 'Frontend Dev',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { 
        id: 4,
        name: 'John',
       role: 'Backend Dev',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { 
        id: 5,
        name: 'Samuel',
       role: 'Mobile Dev',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { 
        id: 6,
        name: 'Peter',
       role: 'Product Mnager',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },{
        id: 7, 
        name: 'Samson',
      role: 'UI/UX',
       img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
     }
    ]
  );

     function updateEmployee(id, newName, newRole){
      const updatedEmployee = employee.map((employee) => {
        if (id == employee.id) {
          return{...employee, name: newName, role: newRole};
        }
        return employee;
      });
      setEmployee(updatedEmployee);
     }

     function newEmployee(name, role, img){
      const newEmployee = {
        id: uuidv4(),
        name: name,
        role: role,
        img: img,
      }
      setEmployee([...employee, newEmployee])
     }
  
 const work = true;
  return (
    <div className="App">
      {work ? (
         <>
           <input type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
         />
         <div className="flex flex-wrap justify-center">
        {employee.map((employee) => {
          const editEmployee =  <EditEmployee 
          id={employee.id}
          name={employee.name} 
          role={employee.role} 
          updateEmployee={updateEmployee}/>
             return( 
             <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}
              editEmployee={editEmployee}
              />
             
             )
        })}
        </div> 
        <AddEmployee newEmployee={newEmployee}/>
        </>
        ) : (
          <p>not employed</p>
        )}
    </div>
  );
}

export default App;
