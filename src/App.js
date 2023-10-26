import './App.css';
import Employee from './component/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
  const [role, setRole] = useState('intern');
  const [employee, setEmployee] = useState(
    [
      { name: 'Paschal',
       role: 'engineer',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { name: 'Leo',
       role: 'manager',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { name: 'James',
       role: 'Frontend Dev',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { name: 'John',
       role: 'Backend Dev',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { name: 'Samuel',
       role: 'Mobile Dev',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },
      { name: 'Peter',
       role: 'Product Mnager',
        img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
      },{ name: 'Samson',
      role: 'UI/UX',
       img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg" 
     }
    ]
  )
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
             return( <Employee 
              key={uuidv4()}
              name={employee.name} 
              role={employee.role} 
              img={employee.img}/>
             );
        })}
        </div> 
        </>
        ) : (
          <p>not employed</p>
        )}
    </div>
  );
}

export default App;
