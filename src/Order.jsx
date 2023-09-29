import {useState,useRef, useEffect, useContext} from "react";
import Navigation from "./Navigation";
import axios from "axios";
import CarSingle from "./CarSingle";
import { CartContext } from "./Application";


function Order(){

    const [cart, setCart] = useContext(CartContext);
    const [counties, setCounties]=useState();
    const [cities, setCities]=useState();
    const [cars, setCars] = useState([]);

    const [car, setCar] = useState();

    const n = useRef();
    const p = useRef();
    const j = useRef();
    const o = useRef();
    const adress = useRef();

    let sum = 0;

    useEffect(() => {
        for(let i=0; i<=cart.length; i++){

            if(cart[i]>0){

                axios.get("http://localhost:8000/api/getCar/"+i).then((response) => {
                    setCars((current)=>
                        [...current, response.data] 
                    );
                })
            }
        }
    },[]);

    useEffect(() => {
        console.log(cars);
    },[cars]);



    useEffect(()=> {
        axios.get('http://localhost:8000/api/getCounties').then((response)=>{
            setCounties(response.data);
        })
    },[]);

    useEffect(()=> {
        console.log(counties);
    },[counties]);

    function getPrice(id){
        axios.get("http://localhost:8000/api/getCar/"+id).then((response) => {
            setCar(response.data)
        })
    }



    function sumElements(){
        cars.map(function(b, t){
            console.log(sum);
            return sum += t.pret*b
        });
        return sum
    }

    function showCity(){
        const county_id = j.current.value;


        axios.get('http://localhost:8000/api/getCities/'+county_id).then((response)=>{
            setCities(response.data)
        })
    }

    function sendOrder(){
        axios.post('http://localhost:8000/api/sendOrder', 
            {
                nume: n.current.value,
                prenume: p.current.value,
                county: j.current.value,
                city: o.current.value,
                adresa: adress.current.value,
                car_id: id
            }
            ).then((response) => {
            console.log(response);
        })
        n.current.value='';
        p.current.value='';
        j.current.value='';
        adress.current.value='';

        setCart([]);
        window.location.replace("http://localhost:5173/masini");
    }


    if(!counties){
        return (<>Loading</>)
    }

    

    return (
        <div id="order">
            <form method="POST">
                <div id="clientInfo">
                    <label>Nume:</label>
                    <input ref={n} type="text" name="nume" placeholder="Nume"/>
                    <br/>
                    <label>Prenume:</label>
                    <input ref={p} type="text" name="prenume" placeholder="Prenume"/>
                    <br/>
                    <label>Judet:</label>
                    <select onChange={showCity} ref={j} name="county">
                        {
                            counties.map(function(i) {
                                return <option value={i.id}>{i.nume}</option>
                            })
                        }
                    </select>

                    <label>Oras:</label>
                    <select ref={o} name="city">
                        {
                            
                            cities && cities.map(function(o){
                                return <option value={o.id}>{o.nume}</option>
                            })
                        }
                    </select>

                    <label>Adresa:</label>
                    <input ref={adress} type="text" name="adresa" placeholder="Adresa"/>
                    <br/>


                   

                    


                    {
                    
                    cart.map(function(q, m){
                        if(m){
                            return(
                                <>
                                    <label>ID Masina:{m}</label>
                                    <label>Cantitate:{q}</label>
                                    <br/>
                                </>
                            );
                        }
                    })
                    }
                    <br/>
                    <label>Total plata:{sumElements()}</label>
                    
                </div>

                
                <br/>
                <br/>
                <input onClick={sendOrder} type="button" name="trimite" value="Plasare Comanda"/>
            </form>

        
        </div>
    )

}

export default Order;