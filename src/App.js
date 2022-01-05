import './App.css';
import { createContext, useReducer } from 'react';
import Counter from './Counter';

// Instantiate a context instance
export const kntxt = createContext();

// Initial state to use with useReducer hook
const initState = { count: 0 };

// Reducer logic
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

function App() {
  const [store, dispatch] = useReducer(reducer, initState);

  return (
    // Context Provider to thread state down to children
    <kntxt.Provider value={{ store, dispatch }}>
      <div className="App">
        <Counter />
      </div>
    </kntxt.Provider>
  );
}

export default App;
