import React, { useContext } from 'react'
import ShopContext from '../context/shop/ShopContext'
import Mycss from './scss/ProductItemscss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
function ProductItem(props) {
    const context = useContext(ShopContext)
  const {AddCartItem,getOneProduct,cartfire} = context;
    const {title, desc, price,image,id} = props;
  return (
      <>
      <div className="card-frock">
        <img src={require(`../img/${image}`)} className="box" alt="..."/>
        <div className="card-body">
        <Link className="card-title" to="/do" onClick={()=>{cartfire(title,image,price,desc)}}>{title}</Link>
          {/* <p className="card-text">{desc}</p> */}
          {/* <Link to="/datashow" onClick={()=>{getProducts(id)}}>lets go</Link> */}
          <button className="button">{price} <i className="fas fa-rupee-sign"></i></button>
           
          <button className="button2" onClick={()=>{AddCartItem(title,desc,image,price)}}>Add to Cart <i className="fas fa-shopping-basket"></i></button>
         </div>
    </div>
      </>
  )
}

export default ProductItem