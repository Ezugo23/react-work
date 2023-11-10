import {useState, useEffect, useContext} from 'react';
import { baseUrl } from '../shared';
import {useLocation, useNavigate} from 'react-router-dom';
import { LoginContext } from '../App';

export default function Login(){
  const [loggedIn, setLoggedIn] = useContext(LoginContext)
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

   const location = useLocation();
    const navigate = useNavigate();

  function login(e){
    e.preventDefault();
     const url = baseUrl + 'api/token/';
     fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
      }),
     })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('access', data.access)
        localStorage.setItem('refresh', data.refresh);
        setLoggedIn(true);
        navigate(location?.state?.previousUrl ? location.state.previousUrl : '/customers');
      })

  }
  return(
    <form className="w-full max-w-sm" id="customer" onSubmit={login}>
    <p class="m-2 block px-2"></p> 

    <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label for="username">Username</label>
      </div>
      <div className="md:w-2/3">
    <input 
    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    id="username"
        type="text" 
        value={username}
        onChange={(e)=> {
           setUsername(e.target.value);
        }} 
        />
        </div>
        </div>

        <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
         <label for="password">Password</label>
         </div>
         <div className="md:w-2/3">
    <input 
    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    id="password"
          type="password" 
          value={password}
          onChange={(e)=> {
            setPassword(e.target.value);
           }}/>
             </div>
        </div>
        <button 
        type="submit" 
        onClick={login}  
        className="bg-slate-900 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">Login</button>
            </form>
  )
}