import React, { useState } from 'react';
import "./page.css"
import { useSelector, useDispatch } from 'react-redux';
import { incrementInputValue, decrementInputValue } from '../redux/productSlice';

const Page = () => {
  const productItems = useSelector(state => state.spend.items);
  const dispatch = useDispatch();
  const totalMoney = useSelector(state => state.spend.value);

  const handleBuyClick = (itemId) => {
    // eğer zarara girecekse satiş yapamasin
    if(productItems.find(item => item.id === itemId).price <= totalMoney){
      dispatch(incrementInputValue({ itemId }));
    }
  };
  const handleSellClick = (itemId) => {
    //eğer input değeri 0'dan büyükse azalt.
    if (productItems.find(item => item.id === itemId).inputValue > 0) {
      dispatch(decrementInputValue({ itemId }));
    }
  }

  return (
    <div className='allpage'>
      <div className="products">
      {productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
          <img src={productItem.image} alt="alt" className='cardimg'/>
          <h1>{productItem.ad}</h1>
          <h3>${productItem.price}</h3>
          <div className="buttons">
            <button onClick={() => handleSellClick(productItem.id)} style={{ background: productItem.inputValue > 0 ? 'linear-gradient(to right, #ff0000, #e33f37)' : '#F3E5F5', color: productItem.inputValue > 0 ? 'white' : 'black' }}>Sell</button>
            <input type="text" value={productItem.inputValue} readOnly  onChange={(e) => e.target.value} />
            <button className='buybutton' onClick={() => handleBuyClick(productItem.id)} style={{background: totalMoney < productItem.price ? '#F3E5F5' : 'linear-gradient(to right, #f4c4f3, #fc67fa)'}}>Buy</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Page;
