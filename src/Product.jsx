import axios from "axios";
import { useState, useEffect } from "react";


function Product(props){

    const [product, setCar] = useState();
    const {product_id} = props;


    useEffect(()=> {

        axios.get('http://localhost:8000/api/getCar/'+product_id).then((response)=> {
            setCar(response.data);
        })

    },[]);

    function deleteElement(){
        
        let cos = JSON.parse(localStorage.getItem('cos'));

        
        //let element = cos.find()
        //cos = localStorage.removeItem('cos', JSON.stringify(product.id));



        let newCos = cos.filter((a) => a != product.id );
        localStorage.setItem('cos',JSON.stringify(newCos));
        window.location.reload();

    }

    if(!product) {
        return <h1>Loading....</h1>
    }

    return(
        <>

            


            <div id="produs">
                <div id="photoProdus" className="floatLeft">
                    <img src={'http://localhost:8000/uploads/'+product.imagine}  width="100"/>
                </div>
                <div id="infoProdus" className="floatLeft">
                    <h3><a href={'/masina/'+product.id}> {product.nume}{product.car_model.nume}{product.echipare}</a><br/><br/>{product.pret} EUR</h3>
                    <br/>
                    <input onClick={deleteElement} type="button" name="delete_prod" value="Sterge din cos"/>
                </div>
                <div id="cantProdus" className="floatLeft">
                    <h3>Cantitate: 
                        
                <br/>
                <a className="actionButton" href="">+</a>
                <input type="button" name="qty-" value="-"/>
                </h3>
                </div>
                <div className="clear"></div>
            </div>
        </>
    );

}

export default Product;