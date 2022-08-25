import React, {useEffect, useState} from 'react';
import '../assests/Css.css';
import axios from "axios";
const Get=() =>{

    const [user, setUsers] = useState([]);

    const handleOnChange = (e) => setUsers(e.target.value);

   user.map(() =>{

   })
    useEffect(() => {
         getData()
    },[]);

    const getData = () => {
        axios.get("http://dev-spis.newssalad.com:8081/news/realtime",
            { params:{
                    "page":1,
                    "size":3,
                    "stockcode":"005930",

                }})
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
            < div className="get">
                {console.log(user, 'user list')}
                {
                    user.map((el) =>
                        <div className="News">
                            <a>{el.subject}</a>
                            <br/>
                            <a href={el.url} target='_blank'>뉴스 링크 url</a>

                        </div>
                    )})

             </div>
        </div>
    );
}
export default Get;