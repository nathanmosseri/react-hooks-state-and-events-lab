import React, { useState } from "react";

function Item({ name, category }) {

  const [isAdded, setIsAdded] = useState(false)

  const cartStatus = isAdded ? 'Remove From Cart' : 'Add to Cart'

  const handleCart = () => {
    setIsAdded(!isAdded)
  }

  return (
    <li className={isAdded ? 'in-cart' : 'add'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAdded ? 'remove' : 'add'} onClick={handleCart}>{cartStatus}</button>
    </li>
  );
}

export default Item;
