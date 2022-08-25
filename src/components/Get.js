import React, {useState} from 'react';
import '../assests/Css.css';
import axios from "axios";
const Get=() =>{

    const [user, setUsers] = useState([]);

    const handleOnChange = (e) => setUsers(e.target.value);

    const getData = () => {
        axios.get("http://dev-spis.newssalad.com:8081/stocks/search", {params:'신세계푸드'})
            .then(response =>{
                if(response.data.resultCode === '200'){
                    setUsers(response.data.data)
                    //handleOnChange(user);
                }
                else{
                    setUsers(response.data.data)
                    //handleOnChange(user);
                }
            })
            .catch(error =>{
                console.log(error.message())
            })
    }
    return (
        <div>
                <p className="mainT">
                    axios GET
                </p>
            < div className="get">{JSON.stringify(user)} >{getData()}</div>

        </div>
    );
}

export default Get;