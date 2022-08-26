import React, {useState} from 'react';
import axios from "axios";
import qs from "qs";
import '../assests/Css.css';
const Post=() => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [msg, setMsg] = useState('');

    const handleOnKeyPress = e => {
        if (e.keyCode === 13) {
            postData(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    const postData=()=> {
        setMsg("회원가입에 성공하였습니다.");
        const ax = {
            userid: id,
            username: name,
            password: password,
        }

        axios.post('http://dev-spis.newssalad.com:8081/user/join',
            qs.stringify(ax),
            setMsg("sending")
        )
            .then(function (response) {
                console.log(response);
                console.log(response.statusText)
                if (response.statusText =="OK"){
                    setMsg("회원가입에 성공하였습니다.")
                }else {
                    setMsg("다시 시도해 주세요");
                }


            })
            .catch(function (error) {
                console.log(error);
                
            });
    }
        return (
            <div>
                <p className="mainT">
                    Axios POST
                </p>
                    <div>
                        </div>
                <div className="LN">ID</div>
                            <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} onKeyUp={handleOnKeyPress} placeholder="아이디를 입력해주세요"
                            />
                        <div>
                            <div className="LN">name</div>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyUp={handleOnKeyPress} placeholder="이름을 입력해주세요"
                            />
                        </div>
                        <div>
                            <div className="LN">PW</div>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={handleOnKeyPress} placeholder="비밀번호를 입력해주세요"
                            />
                        </div>
                        <div>
                            <p>{msg}</p>
                        </div>
                        <div>
                            <button type='submit' onClick={postData} className="button">가입하기</button>
                        </div>

            </div>
        );
}

export default Post;