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

    //const [car, setCar] = useState();

    const n = useRef();
    const p = useRef();
    const j = useRef();
    const o = useRef();
    const adress = useRef();

    let t;

    let cars_id = [];
    let quantity = [];


    useEffect(() => {
        let orderCars = [];
        for(let i=0; i<=cart.length; i++){

            if(cart[i] > 0){

                axios.get("http://localhost:8000/api/getCar/"+i).then((response) => {
                    orderCars.push(response.data);
                    //totalSum += response.data.pret * cart[i];
                })

            }
        }
        setCars(orderCars);
    },[]);


    function totalPay(){
        if(cars.length > 0){
            let totalSum = 0;
            
            for(let i=0; i<=cars.length; i++ ){
                if(cars[i]){
                    totalSum += cars[i].pret * cart[cars[i].id];
                    quantity.push(cart[cars[i].id]);
                    cars_id.push(cars[i].id);
                    console.log(cars_id);
                    console.log(quantity);
                }
            }
            return totalSum;
        }
    }



    useEffect(()=> {
        axios.get('http://localhost:8000/api/getCounties').then((response)=>{
            setCounties(response.data);
        })
    },[]);

    useEffect(()=> {
        //console.log(counties);
    },[counties]);


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
                plata: t.value
            }
            ).then((response) => {
            console.log(response);
        })
        function sendRel(){
            axios.post('http://localhost:8000/api/sendRelationTable', 
                {
                    cars_id: cars_id,
                    quantity: quantity
                }
                ).then((response) => {
                console.log(response);
            })
        }
        //setCart([]);
        //window.location.replace("http://localhost:5173/masini");
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
                        if(q>0){
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
                    
                    <label>Total plata:{t= totalPay()}</label>
                    
                </div>

                
                <br/>
                <br/>
                <input onClick={sendOrder} type="button" name="trimite" value="Plasare Comanda"/>
            </form>

        
        </div>
    )

}

export default Order;