import axios from "axios";
import { useState, useEffect, useContext } from "react";
import addCart from "./CarSingle";
import takeCart from "./CarSingle";
import { CartContext } from "./Application";


function Product(props){

    const [product, setCar] = useState();
    const {product_id, quantity} = props;
    const [cart, setCart] = useContext(CartContext);


    useEffect(()=> {

        axios.get('http://localhost:8000/api/getCar/'+product_id).then((response)=> {
            setCar(response.data);
        })

    },[]);

    function addQuantity(){

        setCart((current) => {

            let oldCart = [...current];
            if(oldCart[product.id]){
                oldCart[product.id] += 1;
            } 
            else {
                oldCart[car.id] = 1;
            }
            console.log(oldCart);
            return oldCart;


        });
    }

    function takeQuantity(){
        setCart((current) => {

            let oldCart = [...current];
            if(oldCart[product.id]){
                oldCart[product.id] -= 1;
                if(oldCart[product.id]==0){
                    deleteElement();
                }
            } 
            console.log(oldCart);
            return oldCart;


        });

        
    }

    function deleteElement(){
        setCart((cart) =>
            cart.filter(c =>
            c !== cart[product.id])
        )
        console.log(cart);
        
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
                    <h3>Cantitate: {quantity}
                        
                    <br/>
                    <input onClick={addQuantity} type="button" name="qty-" value="+"/>
                    <input onClick={takeQuantity} type="button" name="qty-" value="-"/>
                    </h3>
                </div>
                <div className="clear"></div>
            </div>
        </>
    );

}

export default Product;