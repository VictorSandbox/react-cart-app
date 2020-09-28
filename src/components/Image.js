import React, { useState, useContext } from "react";
import PropTypes from 'prop-types'
import { AppContext } from "../appContext";

function Image({ img, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, cartItem, addToCart, removeFromCart  } = useContext(AppContext);

  function toggleHoverState() {
    setIsHovered(!isHovered);
    // console.log(isHovered);
  }

  // const heartIcon = isHovered &&<i onClick = {() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
  // const cartIcon = isHovered &&<i onClick={()=> addToCart(img)} className="ri-add-circle-line cart"></i>
  // anonymous function due to Id parameter.

  function heartIcon() {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite"></i>;
    } else if (isHovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }
     
  function cartIcon() {
       // if the item is already in the cart
    if  (cartItem.filter(e => e.url === img.url).length > 0)
        return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
    if (isHovered) {
      return (
        <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
      );      
  }
}

  return (
    <div
      onMouseEnter={toggleHoverState}
      onMouseLeave={toggleHoverState}
      className={`${className} image-container`}
    >
      <img src={img.url} className="image-grid" alt="Images" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
})
};


export default Image;
