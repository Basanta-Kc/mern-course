import "./App.css";
import { useReducer } from "react";
import Weather from "./Weather";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Weather />
      {state.count}
      <br></br>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      {/* <button onClick={() => setCount(initialState)}>Reset</button> */}
    </>
  );
}

export default App;

// 1. using local storage in todos app
// 2. useEffect (api call revise)
// 3. pokenmon app, different varaible for managing state
// 4. use state object.
