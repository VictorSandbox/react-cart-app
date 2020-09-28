// React Context

import React, { useState, useEffect } from "react";
// useEffect will run as soon as the component renders
const AppContext = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    // get api ans save data
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItem((prevItem) => [...cartItem, newItem]);
    console.log(newItem);
  }

  function removeFromCart(item) {
    // const cartItemArr = Array.from(cartItem);
    // const updatedArr = cartItemArr.filter((ele) => ele !== item);
    // setCartItem(updatedArr);
    setCartItem((prevItem) => prevItem.filter((ele) => ele !== item));
    console.log(cartItem);
  }

  function emptyCart() {
    setCartItem([]);
  }
  // console.log(allPhotos)
  console.log(cartItem);

  return (
    // two curly braces - js mode and object data or {{allPhotos}}
    <AppContext.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItem,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { ContextProvider, AppContext };
