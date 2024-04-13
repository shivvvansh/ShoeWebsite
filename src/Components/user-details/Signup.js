import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import both from './both.css'
import ShopContext from '../../context/shop/ShopContext'

// import Gif from './Flickr.webp'

function Signup() {


  const context = useContext(ShopContext);
  const {userSignup} = context;
 // const json = await response.json()
 // console.log(json);
 // if (json.success){
 //     // Save the auth token and redirect
 //     localStorage.setItem('token', json.authtoken); 
 //     history.push("/");
 // }

 const [credentials, setCredentials] = useState({name: "",email: "", password: "",contact:""}) 
 // let history = useHistory();

 const handleSubmit = async (e) => {
     e.preventDefault();
     userSignup(credentials.name,credentials.email,credentials.password,credentials.contact,credentials.address)
 }

 const onChange = (e)=>{
     setCredentials({...credentials, [e.target.name]: e.target.value})
 }
  return (
   <>
   <div className="div-Signup-container">
       {/* <h1>this is a signup page</h1> */}
       <div className="content">
      <div className="deco">
        <img className='deco-img' src={require('./convoy.jpg')} alt="" />
        {/* <img className='doca-img' style={{width:"350px",height:"350px",filter:"blur(1px) brightness(100%)",borderRadius:"12px"}} src={require('./convoy.jpg')} alt="" /> */}
      </div>
      <div className="chota">
        <div className="textse" style={{textAlign: "center",
    fontSize: "25px",
    color: "#00aeff"}}>
          Sign up
        </div>
        <form onSubmit={handleSubmit}>
          {/* <div className="name"> */}
          <div className="name">
          <div className="field">
              <input type="text" required name="name" onChange={onChange}/>
              <label>enter your Name</label>
            </div>
          <div className="field">
              <input type="text" required name="email" onChange={onChange} placeholder='enter your email' style={{textAlign:"center"}}/>
            </div>

          </div>
         <div className="name">
         <div className="field">
              <input type="text" required name="password" onChange={onChange}/>
              <label>Enter Password</label>
          </div>
          <div className="field">
              <input type="text" required name="contact" onChange={onChange}/>
              <label>Enter Contact number</label>
          </div>
         </div>
         {/* <div className="fields">
           <textarea name="address"  cols="10" id='text-editor' rows="40" onChange={onChange}></textarea>
          </div> */}
          <button className='but-sub' type="submit" >Create account..</button>
          <div className="sign-up">
            Already a member?
            <Link to="/login"> Login</Link>
          </div>
        </form>
      </div>
    </div>
   </div>
   </>
  )
}

export default Signup