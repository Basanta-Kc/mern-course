import { useState, useMemo } from "react";

const App = () => {
  console.log("Rendered");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const factorial = useMemo(() => {
    const calculateFactorial = (n) => {
      console.log("calculated");
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };

    return calculateFactorial(count);
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <button onClick={increment}>Count: {count}</button>
      <p>
        Factorial of {count} is {factorial}
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default App;
