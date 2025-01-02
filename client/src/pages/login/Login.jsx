import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Login() {
    const {login} = useContext(AuthContext);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const credentials = {username,password};
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            await login(credentials);
            navigate("/");
        } catch (error) {
            console.log("login failed :" + error);
        }
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    return(
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa alias possimus. Deleniti architecto, quae tempora ipsum quibusdam ratione possimus.</p>
                    <span>Don't you have an account?</span>
                    <NavLink to = "/register" style={{textDecoration : "none"}}>
                    <button>Register</button>
                    </NavLink>
                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form>
                        <input type = "text" placeholder='Username' onChange={handleUsername}/>
                        <input type = "password" placeholder='Password' onChange={handlePassword}/>
                        
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;