import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseUrl } from '../shared';

export default function Customer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [tempCustomer, setTempCustomer] = useState();
  const [notFound, setNotFound] = useState();
  const [changed, setChanged] =useState()

  useEffect(() => {
    //console.log('customer', customer);
    //console.log('temp customer', tempCustomer);
    //console.log(changed)
  })

  useEffect(() => {

    const url = baseUrl + 'api/customers/' + id;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer)
      })
      .catch((error) => {
        // Handle any fetch errors here
        console.error('Fetch error:', error);
      });
  }, [id]);

  function updateCustomer(){
    const url = baseUrl + 'api/customers/' + id;
    fetch(url, {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      }, 
      body: JSON.stringify(tempCustomer)
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setCustomer(data.customer)
      setChanged(false)
      console.log(data)
    })
    .catch()
  }

return( 
  <>
  {notFound ? <p>The customer with the id {id} was not found</p> : null}

      {customer ? (  
        <div>
        <p class="m-2 block px-2">{tempCustomer.id}</p> 

        <input 
            class="m-2 block px-2" 
            type="text" 
            value={tempCustomer.name}
            onChange={(e)=> {
              setChanged(true);
            setTempCustomer({...tempCustomer, name: e.target.value})}} />

        <input 
              class="m-2 block px-2" 
              type="text" 
              value={tempCustomer.industry}
              onChange={(e)=> {
                setChanged(true);
                setTempCustomer({...tempCustomer, industry: e.target.value})}}/>
                {changed ? 
                <>
               <button onClick={(e) => {
                setTempCustomer({...customer})
                setChanged(false);
               }}>Cancel</button>
               
                 <button onClick={updateCustomer}>Save</button>
                </> 
              : null}
      </div> 
      ) : null} 
       <button ton onClick={() => {
              const url = baseUrl + 'api/customers/' + id;
               fetch(url, {method: 'DELETE', 
               headers: {
                'Content-Type': 'application/json',
               },
              })
               .then((response) => {
                if(!response.ok){
                  throw new Error('something went wrong');
                }
                navigate('/customers');
               })
               .catch((e) => {
                console.log(e)
              })
            }}>Delete</button>
            <br/>
      <Link to='/customers'>Go back</Link>
  </>
)
}