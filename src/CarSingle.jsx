import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import Navigation from './Navigation';

function CarSingle() {

    let{id} = useParams();

    const [car, setCar] = useState();

    useEffect(()=> {


        axios.get('http://localhost:8000/api/getCar/'+id).then((response) => {
          //setCars(JSON.parse(response.data));
          setCar(response.data);
        })
 
     },[]);


     useEffect(()=> {
        console.log(car);
 
     },[car]);
    if(!car){
        return (<>Loading...</>)
    }

    return (

        <>
           <Navigation/>

            <div id="contentProduct">
                <div id="productPresentation">
                    <div id="productPhoto" class="floatLeft">
                        <img src={'http://localhost:8000/uploads/'+car.imagine}  width="100"/>
                    </div>
                    <div id="productDescription" className="floatLeft">
                    <h3>{car.producer.nume} {car.car_model.nume} {car.echipare}</h3>
                        <div className="promo">
                            <h2>Promo</h2>
                        </div>
                        <div className="productCodes">
                            <h4>COD PRODUS: {car.id}</h4>
                        </div>
                        <a href="home2.php">Descarca oferta</a><br/>
                        <a href="home2.php">Descarca informatii asigurare (PID)</a>
                        <br/>
                        <h2> {car.pret} Euro </h2>
                        <h4>Toate costurile incluse</h4>
                    </div>
                    <div className="clear"></div>    
                    <div id="nextButton">
                        <a className="actionButton" href={'./order/'+car.id}>Catre Comanda</a>
                    </div>
                </div>

                <div id="payInfo">
                    <div className="infoBlock floatLeft">
                    <h1>Fara Avans</h1>
                        <p>Pentru a accesa abonamentul auto nu este necesare plata unui avans. Achiti taxa de garantie in valoare de 800 euro online, care ti se returneaza la final daca nu ai costuri suplimentare.</p> 
                    </div>
                    <div className="infoBlock floatLeft">
                    <h1>Livrare acasa</h1>
                        <p>Iti putem livra masina in orice localitate din tara, in cazul in care nu doresti sa o ridici personal de la sediul nostru. Te informam transparent cu privire la costurile suplimentare aferente, decizia o iei tu.</p> 
                    </div>
                    <div className="clear"></div> 
                </div>

        
                    <div className="pageTitle ">
                        <div className="floatLeft">
                            <h1>Date vehicul</h1>
                        </div>
                        <div className="floatLeft" id="descDotari">
                        <a href="cars.php">Descarca lista dotarilor</a>
                        </div>
                        <div className="clear"></div>
                    </div>
                    
                
                <div id="dateTehnice">
                    <table>
                        <tr>
                            <td>ID</td>
                            <td>Marca</td>
                            <td>Model</td>
                            <td>Echipare</td>
                            <td>Pret</td>
                            <td>Putere</td>
                            <td>Nr km:</td>
                            <td>Capacitate cilindrica</td>
                            <td>Serie sasiu</td>
                            <td>Combustibil</td>
                            <td>Transmisie</td>
                            <td>Tractiune</td>
                            <td>Culoare</td>  
                        </tr>            
                        <tr>
                            <td>    {car.id}   </td>
                            <td>    {car.producer.nume}   </td>
                            <td>    {car.car_model.nume}    </td>
                            <td>    {car.echipare}  </td>
                            <td>    {car.pret}    </td>
                            <td>    {car.putere} CP </td>
                            <td>    {car.nr_km} KM       </td>
                            <td>    {car.capacitate_cilindrica} cm3    </td>
                            <td>    {car.serie_sasiu}    </td>
                            <td>    {car.fuel.nume}  </td>
                            <td>     {car.traction.nume}</td>
                            <td>     {car.transmision.nume}</td>
                            <td>     {car.color.nume}</td>
                            <td>     {car.location.nume}</td>                
                            <td>     {car.location.city.nume}</td>
                            <td>     {car.location.county.nume}</td>
                        </tr>
                    </table>
                </div>
            </div>

        </>


    );
}
export default CarSingle;