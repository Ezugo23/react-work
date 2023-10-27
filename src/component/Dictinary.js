import {useState, useEffect} from 'react';

export default function Dictinary() {
      const [word, setWord] = useState('');
      const [word2, setWord2] = useState('');

      useEffect(() => {
        console.log('state update', word);
      }, [word]);

      useEffect(() => {
        console.log('state update', word2);
      }, [word2]);

      return (
        <>
         <input type="text" onChange={(e) => {
          setWord(e.target.value);
         }} 
         />
        <h1>The Test{word }</h1>
        <input type="text" onChange={(e) => {
          setWord2(e.target.value);
         }} 
         />
        <h2>The Name{word2}</h2>
        </>
      );
}
