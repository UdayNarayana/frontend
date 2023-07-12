import React,{useState} from 'react';
import '../styles/Register.css';

const Register = () => {

    const[name,setName] = useState("");
    const[birthDate,setBirthDate] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[mobileNumber,setMobileNumber] = useState("");
    const[gender,setGender] = useState("");

    const registerSubmitHandler = (e) => {

        e.preventDefault();

        const newUser = {

            name,
            birthDate,
            email,
            password,
            mobileNumber,
            gender

        }

        fetch('http://localhost:8081/store/profile/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })
            .then(() => console.log("User Registered"))
            .catch("Error")

        setName("");
        setBirthDate("");
        setEmail("");
        setPassword("");
        setMobileNumber("");
        setGender("");    

    }

    return(
        <React.Fragment>

            <h2 className="register-text">Register</h2>

            <section className="register-form-container">

                <form className="register-form" onSubmit={e => registerSubmitHandler(e)}>

                    <div className="fullname-label-container label-container">
                        <label for="fullName">Full Name</label>
                    </div>
                    <input 
                        type='text' 
                        id='fullName' 
                        className='fullname-input input' 
                        placeholder='Enter your full name'
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />

                    <div className="birthday-label-container label-container">
                        <label for="birthday">Birth Date</label>
                    </div>
                    <input 
                        type='text' 
                        id='birthday' 
                        className='birthday-input input' 
                        placeholder='DD-MM-YYYY'
                        onChange={e => setBirthDate(e.target.value)}
                        value={birthDate}
                    />

                    <div className="email-label-container label-container">
                        <label for="email">Email</label>
                    </div>
                    <input 
                        type='text' 
                        id='email' 
                        className='email-input input' 
                        placeholder='Enter your email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />

                    <div className="password-label-container label-container">
                        <label for="password">Password</label>
                    </div>
                    <input 
                        type='text' 
                        id='password' 
                        className='password-input input' 
                        placeholder='Enter your password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />

                    <div className="mobileNumber-label-container label-container">
                        <label for="mobileNumber">Mobile Number</label>
                    </div>
                    <input 
                        type='text' 
                        id='mobileNumber' 
                        className='mobileNumber-input input' 
                        placeholder='Enter mobile number'
                        onChange={e => setMobileNumber(e.target.value)}
                        value={mobileNumber}
                    />

                    <div className="gender-label-container label-container">
                        <label for="gender">Gender</label>
                    </div>
                    <select
                        id='gender'
                        className='gender-input input'
                        onChange={e => setGender(e.target.value)}
                        value={gender}
                    >
                        <option value="select">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>

                    <div className="register-btn-container">
                        <button className="register-btn">Register</button>
                    </div>

                </form>

            </section>
        </React.Fragment>
    );

}

export default Register;