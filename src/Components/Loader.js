import React, { useContext } from 'react'
import ShopContext from '../context/shop/ShopContext';
import './scss/loader.css'

function Loader(props) {
  const context = useContext(ShopContext)
  const {sontrol} = context
  console.log("loader call");
  return (
    <>
    <div className="loader-div">
      <h1>hello {sontrol.display}</h1>
        <img src={require('../img/runningCat.gif')} alt="" />
        <h1>Loading.... {sontrol.color}.</h1>
    </div>
    </>
  )
}

export default Loader