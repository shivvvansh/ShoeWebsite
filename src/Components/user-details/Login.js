import React, { useContext, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
// import { useHistory } from "react-router-dom";

import both from './both.css'
import ShopContext from '../../context/shop/ShopContext'

function Login() {
     const context = useContext(ShopContext);
     const {userLogin} = context;
     let navigate = useNavigate();
    // const json = await response.json()
    // console.log(json);
    // if (json.success){
    //     // Save the auth token and redirect
    //     localStorage.setItem('token', json.authtoken); 
    //     history.push("/");
    // }

    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    // let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin(credentials.email,credentials.password)
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }








  return (
<>
<div className="div-Signup-container">
       <div className="content">
      <div className="deco">
      <img className='deco-img' src={require('./convoy.jpg')} alt="" />
      </div>
      <div className="chota">
        <div className="textse" style={{textAlign: "center",
    fontSize: "35px",
    color: "#00aeff"}}>
          Login up..
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field" style={{width:"82%",textAlign:"center",margin:"40px"}}>
              <input type="email" required name="email" value={credentials.email} onChange={onChange}  placeholder='enter your email' style={{textAlign:"center"}}/>
            </div>
          <div className="field" style={{width:"82%",textAlign:"center",margin:"40px"}}>
              <input type="password" required name="password" value={credentials.password} onChange={onChange} placeholder='enter your password' style={{textAlign:"center"}}/>
            </div>
          <button className='but-sub' type="submit" onClick={navigate('/')}>Login now..</button>
          <div className="sign-up">
             Did'nt Signup yet.. hurry up Sign in now?
            <Link to="/signup"> Sign up</Link>
          </div>
        </form>
      </div>
    </div>
   </div>
</>
  )
}

export default Login


/**
 * import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
 * 
 * 
 */