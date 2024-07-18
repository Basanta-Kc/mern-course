/* eslint-disable react/display-name */
import React, { useState, useCallback } from "react";

const Child = React.memo(({ text, onTextChange }) => {
  console.log("Child rendered");

  return (
    <div>
      <input type="text" value={text} onChange={onTextChange} />
    </div>
  );
});

const AnotherChild = React.memo(({ text }) => {
  console.log("Another Child rendered");

  return <div>{text}</div>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleTextChange = useCallback(
    (e) => {
      setText(e.target.value + count);
    },
    [count]
  );

  return (
    <div>
      <h1>useCallback Example</h1>
      <button onClick={increment}>Count: {count}</button>
      <Child text={text} onTextChange={handleTextChange} />
      <AnotherChild text={text} />
    </div>
  );
};

export default App;
