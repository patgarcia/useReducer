# useReducer hook sample

Steps overview:

- Create [context object](https://github.com/patgarcia/useReducer/blob/31801c3050910bf93e9e03796450585c510dfdaa/src/App.js#L6)
- Declare an [initial state](https://github.com/patgarcia/useReducer/blob/31801c3050910bf93e9e03796450585c510dfdaa/src/App.js#L9) to be provided to `useReducer` hook
- Consider the different action types to be handled by the reducer, like `"INCREMENT"` [in this case](https://github.com/patgarcia/useReducer/blob/31801c3050910bf93e9e03796450585c510dfdaa/src/App.js#L14)
- The `useReducer` hook [returns](https://github.com/patgarcia/useReducer/blob/31801c3050910bf93e9e03796450585c510dfdaa/src/App.js#L24) a state object and an action dispatcher
- Feed the state and dispatch objects to the children components using a [context Provider](https://github.com/patgarcia/useReducer/blob/31801c3050910bf93e9e03796450585c510dfdaa/src/App.js#L28) component

### Inside your child component

- Use the `useContext` hook [to connect](https://github.com/patgarcia/useReducer/blob/9a40dea94cfef1f95f69ac507cd77591fe0dd2d8/src/Counter.jsx#L5) to the store and dispatch objects
- Access any key in your store, like [in this case](https://github.com/patgarcia/useReducer/blob/31801c3050910bf93e9e03796450585c510dfdaa/src/Counter.jsx#L8) with `{store.count}`
- When [dispatching](https://github.com/patgarcia/useReducer/blob/31801c3050910bf93e9e03796450585c510dfdaa/src/Counter.jsx#L9) action objects, the only key you need is `type`
