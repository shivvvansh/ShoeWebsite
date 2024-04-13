import React, { useContext } from 'react'
import ShopContext from '../context/shop/ShopContext'
import Mycss from './scss/ProductItemscss.css'
import { Link} from "react-router-dom";

const MenItem = (props) => {
    const context = useContext(ShopContext)
    const {AddCartItem,getProducts,cartfire} = context
    const {title,desc,image,price,id} = props
  return (
    <div>
    
<div>
    <div className="card-frock">
        <img src={require(`../img/${image}`)} className="box" alt="..."/>
        <div className="card-body">
          <Link className="card-title" to="/do" onClick={()=>{cartfire(title,image,price,desc)}}>{title}</Link>
          {/* <p className="card-text">{desc}</p> */}
          {/* <Link to="/datashow" onClick={()=>{getProducts(id)}}>lets go</Link> */}
          <button className="button" style={{margin:"0px"}}>{price} ₹</button>

          <button className="button2" style={{marginLeft:"30px"}} onClick={()=>{AddCartItem(title,desc,image,price,desc)}}>Add to Cart <i className="fas fa-shopping-basket"></i></button>
         </div>
    </div>
 
</div>
    </div>
  )
}

export default MenItem