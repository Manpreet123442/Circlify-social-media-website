import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './register.css';
import axios from 'axios';

function Register() {
    
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [err,setErr] = useState(null);

    async function handleClick(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/register", {
                username : username,
                email : email,
                password : password,
                name : name
            })
            console.log(response.data);
            setUsername("");
            setEmail("");
            setPassword("");
            setName("");
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "An unexpected error occurred.";
            console.log(errorMessage);
        }
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleName(e) {
        setName(e.target.value);
    }

    
    return(
        <div className='register'>
            <div className='reg-card'>
                <div className='reg-left'>
                    <h1>Register</h1>
                    <form>
                        <input type = "text" placeholder='Username' onChange={handleUsername}/>
                        <input type = "email" placeholder='Email' onChange={handleEmail}/>
                        <input type = "password" placeholder='Password' onChange={handlePassword}/>
                        <input type = "text" placeholder='Name' onChange={handleName}/>
                       
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
                <div className='reg-right'>
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro impedit aperiam asperiores nam fuga tempore praesentium autem, hic consectetur cumque!</p>
                    <span>Do you have an account?</span>
                    <NavLink to = "/login" style={{textDecoration : "none"}}>
                    <button>Login</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Register;