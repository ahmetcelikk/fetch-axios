import React,{useEffect, useState} from "react";
import axios from 'axios';

 function App() {

  const [countries,setCountries] = useState([]);

  // useEffect(()=>{
  //   fetch("https://restcountries.com/v2/all")
  //   .then(response => response.json())
  //   .then(response => setCountries(response));
   
  // },[]);

  useEffect(()=>{
    axios.get("https://restcountries.com/v2/all")
    .then(response => setCountries(response.data))
  },[])

  return (
    <div align="center">
      <h1>Fetch</h1>
      {countries.map(country => {
        return (
        <div key={country.name}>
                <h2>{country.name}</h2>
                <h2>{country.capital}</h2>
                <p>
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{width:"100px"}}
                  />
                </p>
                <div>---------------------------------------</div>
               </div>
        );
      })}
    </div>
  );
}

export default App;
