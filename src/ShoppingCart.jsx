
import Navigation from "./Navigation";
import Product from "./Product";

function ShoppingCart(){


    let cos = JSON.parse(localStorage.getItem('cos'));
    let content = localStorage.getItem('cos');

    return(
        <>
            <Navigation/>
            {
                cos.length == 0 && 
                <>Cosul este gol</>
            }
            {            
                cos.map(function(p){
                    return <Product product_id = {p}/>
                })
            }


           
        </>
    );

}

export default ShoppingCart;