import {useEffect} from 'react';

function Navigation(props) {



    useEffect(() => {
       
    },[]);
   

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
                    <a href="">Cos de cumparaturi</a>
                </div>
                <div className="clear"></div>
            </div>
        </>


    );
}
export default Navigation;