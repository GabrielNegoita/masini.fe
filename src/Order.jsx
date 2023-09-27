import {useState,useRef, useEffect} from "react";
import Navigation from "./Navigation";
import axios from "axios";
import CarSingle from "./CarSingle";
import { useParams } from "react-router-dom";


function Order(){

    let {id} = useParams();
    const [counties, setCounties]=useState();
    const [cities, setCities]=useState();

    const n = useRef();
    const p = useRef();
    const j = useRef();
    const o = useRef();
    const adress = useRef();

    useEffect(()=> {
        axios.get('http://localhost:8000/api/getCounties').then((response)=>{
            setCounties(response.data);
        })
    },[]);

    useEffect(()=> {
        console.log(counties);
    },[counties]);

    function showCity(){
        const county_id = j.current.value;


        axios.get('http://localhost:8000/api/getCities/'+county_id).then((response)=>{
            setCities(response.data)
        })
    }

    function sendOrder(){
        axios.post('http://localhost:8000/api/sendContact', 
            {
                nume: n.current.value,
                prenume: p.current.value,
                county: j.current.value,
                city: o.current.value,
                adresa: adress.current.value,
                car_id: {id}
            }
            ).then((response) => {
            console.log(response);
        })
        n.current.value='';
        p.current.value='';
        j.current.value='';
        adress.current.value='';
        window.location.replace("http://localhost:5173/masini");
    }


    if(!counties){
        return (<>Loading</>)
    }

    

    return (
        <div id="order">
            <Navigation/>
            <form action="" method="POST">
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
                    <label>ID Masina:{id}</label>
                    
                </div>

                
                <br/>
                <br/>
                <input onClick={sendOrder} type="submit" name="trimite" value="Plasare Comanda"/>
            </form>

        
        </div>
    )

}

export default Order;