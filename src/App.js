import React from 'react';
import ShoppingCart from './ShoppingCart';


const App = () => {
  const sampleProducts = [
    { id: 1, name: 'Tennis Ball', price: 40 },
    { id: 2, name: 'Cricket Bat', price: 20 },
    { id: 3, name: 'Stumps', price: 30 },
  ];

  return (
    <div className='Section'>
      <ShoppingCart products={sampleProducts} />
      </div>
  );
};

export default App;