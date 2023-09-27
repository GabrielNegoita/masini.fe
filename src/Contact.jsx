import {useState, useEffect, useRef} from "react";
import axios from 'axios';

function Contact(){
    const [nume, setNume]=useState();
    const [mesaj, setMesaj]=useState();

    const n= useRef();
    const m=useRef();


    function sendMessage(){
        axios.post('http://localhost:8000/api/sendContact', 
            {
                nume: n.current.value,
                mesaj: m.current.value
            }
        ).then((response) => {
         //setCars(JSON.parse(response.data));
         console.log(response);
       })
       n.current.value='';
       m.current.value='';
       alert('Mesaj trimis!');
    }

    return(
        <div id="contactBody">
            <div className="contact" id="nume">
                <label>Nume:</label>
                <br/>
                <input ref={n} type="text" name="nume"/>
            </div>

            <div className="contact" id="mesaj">
                <label>Mesaj:</label>
                <br/>
                <textarea ref={m} name="mesaj"></textarea>
            </div>

            <div id="send">
                <input onClick={sendMessage} type="button" value="Trimite"/>
            </div>
        </div>


    )

}

export default Contact;