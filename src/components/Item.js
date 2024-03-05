import React, { useState } from "react";   
 
function Item({ name, category }) { 
  const [inCart, setCart] = useState(false); 
 
  const addItemToCart = () => { 
    setCart(!inCart);  
  }; 
 
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={addItemToCart}
        className={inCart ? "remove" : "add"}
      >
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
