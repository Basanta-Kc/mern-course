import { createContext, useContext, useState } from "react";
const UserContext = createContext(null);

const Child = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>{user.name}</h1>
      <button onClick={() => setUser({ name: "dinesh", age: 20 })}>
        change name
      </button>
    </>
  );
};

const Parent = () => {
  return <Child />;
};

const GrandParent = () => {
  return (
    <>
      <Parent />
    </>
  );
};

const App = () => {
  const [user, setUser] = useState({ name: "basnata", age: 10 });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GrandParent />
    </UserContext.Provider>
  );
};

export default App;
