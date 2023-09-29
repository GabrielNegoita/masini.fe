import {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Car(props) {

    const {carData} = props;



    useEffect(() => {
       
    },[]);
   

    return (

        <>

            

            <div className="car floatLeft">
                <div className="promo">
                    <h2>Promo</h2>
                </div>
                <img src={'http://localhost:8000/uploads/'+carData.imagine}  width="100"/>
                <div className="description">
                <h3>{carData.producer.nume} {carData.car_model.nume} {carData.echipare}</h3>
                    <h4>Toate costurile incluse</h4>
                    <div className="productCodes">
                        <h4>COD PRODUS: {carData.id}</h4>
                    </div>
                </div>
                <Link to={'/masina/'+carData.id}> Vezi masina </Link>
            </div>

            
        </>


    );
}
export default Car;