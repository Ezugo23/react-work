import './App.css';
import Employee from './component/Employee';
import { useState } from 'react';
function App() {
  const [role, setRole] = useState('intern');
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
        <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
         <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
             <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
             <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
             <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
             <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
             <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
            <Employee
         name = "paschal"
          role={role}
           img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
           />
        </div> 
        </>
        ) : (
          <p>not employed</p>
        )}
    </div>
  );
}

export default App;
