import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    const loginSubmitHandler = (e) => {

        e.preventDefault();

        const loggedInUser = {

            email,
            password
        }

        fetch('http://localhost:8081/store/profile/login-customer', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loggedInUser)
        })
            .then(() => console.log("User logged in"))
            .catch("Error")

        setEmail("");
        setPassword("");

        navigate("/",{replace:true});

    }

    return(
        <React.Fragment>
            <h2 className="login-text">Login to Store</h2>
            <section className="form-container">
                <form className="form" onSubmit={e => loginSubmitHandler(e)}>

                    <div className="label-container label-container-email">
                        <label for="email">Email</label>
                    </div>
                    <input 
                        type='text' 
                        id="email" 
                        className="input email-input" 
                        placeholder='enter email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                
                    <div className="label-container label-container-password">
                        <label for="password">Password</label>
                    </div>
                    <input 
                        type='password' 
                        id="password" 
                        className="input email-input" 
                        placeholder='enter password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="login-btn-container">
                        <button className="login-btn">Login</button>
                    </div>
                    <Link className="links" to="/register"><p className="new-user-text">New user?Create account</p></Link>
                </form>
            </section>
        </React.Fragment>
    );

}

export default Login;