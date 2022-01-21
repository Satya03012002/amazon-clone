import React from 'react';
import "./CheckoutProduct.css"
import {useStateValue} from "../StateProvider/StateProvider"

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id :id
        })
    }
  return(
    <div className='CheckoutProduct'>
    <img className='CheckoutProduct_image' src={image} alt="  not found"/>
    <div className="CheckoutProductt___info">
      <p>{title}</p>
      <p className="CheckoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="CheckoutProduct__rating">
      {Array(rating).fill().map((_, i) => (
            <p key={basket.id}>⭐</p>
          ))}
          
      </div>
      <button onClick={removeFromBasket}> Remove from Basket</button>
    </div>
    
    
    
     </div>
  )
}

export default CheckoutProduct;
