import React from 'react';
import { useSelector } from 'react-redux';
import "./page.css"; 

const Receipt = () => {
  const productItems = useSelector(state => state.spend.items);

  // Alışveriş yapılan ürünler
  const cartItems = productItems.filter(item => item.inputValue > 0);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.inputValue;
  }, 0);

  if(totalPrice == 5000000){
    alert("You are a big spender!!!");
  }

  return (
    <div className="receipt">
    <h1>Your Receipt</h1>
    <table className="urunler">
      <tbody>
        {cartItems.map((cartItem) => (
          <tr className="urun" key={cartItem.id}>
            <td style={{width:'55%'}}>{cartItem.ad}</td>
            <td style={{width:'15%'}}>x{cartItem.inputValue}</td>
            <td style={{width:'30%'}}>${cartItem.price * cartItem.inputValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="price">
      <h2>Total</h2>
      <h3>${totalPrice}</h3>
    </div>
  </div>
  );
}

export default Receipt;
