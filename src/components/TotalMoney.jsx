import React, { useState, useEffect } from 'react'
import "./page.css"
import { useSelector } from 'react-redux';

const TotalMoney = () => {
    const totalmoney = useSelector((state) => state.spend.value);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
      const header = document.querySelector('h1');
      const handleScroll = () => {
        if (header) {
          const headerRect = header.getBoundingClientRect();
          if (headerRect.top <= 0) {
            setIsHeaderFixed(true);
          } else {
            setIsHeaderFixed(false);
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className='totalmoney'>
        <h1>SPEND MONEY APP</h1>
        <span className={isHeaderFixed ? 'fixedHeader' : ''}>${totalmoney}</span>
    </div>
  )
}

export default TotalMoney
