import React from 'react'
import './Banner2'
import './scss/banner.css'
function Banner() {
  return (
  <>
   <div className="banners">
     <div className="nike-img">
       <div className="coloring">
       </div>
       <img src={require(`../img/shoe.png`)} alt="" />
       </div>
       <div className="texts">
         <h2>Shopify the unlimitate collection</h2>
         <p>Shoes transform your body language and attitude. They lift you physically and emotionally.. Never underestimate the power of a shoe....  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat voluptatibus, ipsam enim odit quaerat dolorum, dolor explicabo non temporibus iure impedit? </p></div>
     </div>
  </>
  )
}
export default Banner