import {useState, useEffect} from 'react';
import {useParams, useNavigate, Link, useLocation} from 'react-router-dom';
import NotFound from '../component/NotFound'
import {v4 as uuidv4} from 'uuid';
import DefinitionSearch from '../component/DefinitionSearch';
import useFetch from '../hooks/UseFetch';

export default function Definition() {
    //const [word, setWord] = useState();
    //const [notFound, setNotFound] = useState(false);
    //const [error, setError] = useState(false)
    let {search} = useParams();


     //const navigate = useNavigate();
     //const location = useLocation();
    const {request, data: [{meanings: word}] = [{}], errorStatus} = useFetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + search
    ); 

      useEffect(() => {
        request();
      }, [])

    if (errorStatus === false){
      return (
          <>
               <NotFound/>
               <Link to="/dictionary">Search another</Link>
         </>
      );
    }

    if (errorStatus){
      return (
          <>
              <p>Something went wrong try again</p>
               <Link to="/dictionary">Search another</Link>
         </>
      );
    }
  
   
    return (
      <>
      {word ? (
       <>
        <h1>Here is the definition:</h1>
        {word.map((meaning) => {
          return(
           <p key={uuidv4()}>
            {meaning.partOfSpeech + ':'}
            {meaning.definitions[0].definition}
            </p>
           );
        })}
        <p>Search again:</p>
        <DefinitionSearch/>
        </>
        ) : null}
      </>
    );
}