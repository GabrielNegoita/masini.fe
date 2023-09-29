import {useEffect, useState} from 'react';

import axios from 'axios';



import Car from './Car.jsx'
import Navigation from './Navigation.jsx'


function Cars() {

    const [count, setCount] = useState(1);
    const [cars, setCars] = useState([]);

    useEffect(()=> {


       axios.get('http://localhost:8000/api/getCars').then((response) => {
         //setCars(JSON.parse(response.data));
         setCars(response.data);
       })
    },[]);


    useEffect(() => {
        console.log(cars);
    },[cars]);

    
    if(!cars){
        return (<>Loading</>)
    }
    return (
      <>

      {
        cars.map(function(i) {
            return <Car carData = {i} />
        })
        
      }
      </>
    );
}
export default Cars;