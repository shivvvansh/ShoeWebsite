import React from 'react'
import'./scss/bsnner2.css'
const Banner2 = () => {
  return (
    <>
   <div className="banner">
  <h1>Our Trusted Partners📢</h1>
  <div className="boxers">
    <div className="box4">
      <img src={require("../img/logo1.png")} alt="" />
      </div>
    <div className="box5">
    <img src={require("../img/logo2.png")} alt="" />
      </div>
    <div className="box6">
    <img src={require("../img/logo3.png")} alt="" />
      </div>
    <div className="box7">
    <img src={require("../img/logo4.jpg")} alt="" />
      </div>
    <div className="box6"></div>
    </div>
   </div>
  </>
  )
}

export default Banner2