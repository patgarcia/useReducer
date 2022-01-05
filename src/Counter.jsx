import React, { useContext } from 'react';
import { kntxt } from './App';

const Counter = () => {
  const { store, dispatch } = useContext(kntxt);
  return (
    <div>
      <h1>{store.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

export default Counter;
