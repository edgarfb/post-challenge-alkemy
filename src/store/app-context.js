import React from "react";

const AppContext = React.createContext(null);

export function AppContextProvider(props) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <AppContext.Provider value={{ posts }}>
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;

// practice with useReducer
// practice with useReducer

// const counter = (state, action) => {
//   if (action.type === "INCREMENT") {
//     return { count: state.count + 1 };
//   }
//   if (action.type === "DECREMENT") {
//     return { count: state.count - 1 };
//   }
//   return state;
// };

// const TestingUseReducer = () => {
//   const initialState = { count: 0 };
//   const [state, dispatch] = React.useReducer(counter, initialState);

//   console.log("state from useReducer", state);
//   return (
//     <React.Fragment>
//       <h1>usereducer State = {state.count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//     </React.Fragment>
//   );
// };
