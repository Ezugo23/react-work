import './App.css';
import Header from './component/Header';
import Employees from './pages/Employees';
import Dictionary from './pages/Dictinary';
import Definition from './pages/Definition';
import Customers from './pages/Customers'
import NotFound from './component/NotFound';
import Customer from './pages/Customer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
            <BrowserRouter>
     <Header>
            <Routes>
                <Route path='/employees' element={<Employees/>} />
                <Route path="/dictionary" element={<Dictionary/>}/>
                <Route path="/dictionary/:search" element={<Definition/>}/>
                <Route path="/customers" element={<Customers/>}/>
                <Route path="/customers/:id" element={<Customer/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
      </Header>
            </BrowserRouter>
        
  );
}

export default App;
