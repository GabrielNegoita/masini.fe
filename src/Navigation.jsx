import {useEffect} from 'react';

function Navigation(props) {

    let cos = JSON.parse(localStorage.getItem('cos')) ? JSON.parse(localStorage.getItem('cos')).length : 0;

    useEffect(() => {
       
    },[]);
   
    function deleteCart(){
        let prod = localStorage.clear('cos');
        window.location.reload();
    }

    return (

        <>

            <div id="header">
                <div className="floatLeft" id="logoContainer">
                    <a href="">
                        <img src="porsche/public/img/logo.png"/>
                    </a>
                </div>
                <div className="floatLeft" id="nav">
                    <a href="">Home</a>
                    <a href="">Intrebari Frecvente</a>
                    <a href="">Contact</a>
                    <br/>
                    <a href="/shoppingcart">Cos de cumparaturi {cos}</a>
                    <br/>
                    <input onClick={deleteCart} type="button" name="sterge_cos" value="Goleste cosul"/>
                </div>
                <div className="clear"></div>
            </div>
        </>


    );
}
export default Navigation;