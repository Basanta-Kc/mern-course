import "./App.css";
import { useState } from "react";

function Button({ color = "blue", text = "button" }) {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
} //Button() => <Button color="gree" text="login"/> => Button({color, text})

function AdminPanel() {
  return <h2>Admin Panel</h2>;
}

function UserPanel() {
  return <h2>User Panel</h2>;
}
// const h1Style = {
//   color: "blue",
// };

const user = {
  name: "basnata",
  age: 10,
  imgUrl: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97",
  roles: ["user", "admin"],
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

function MyCounter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      click {count}
    </button>
  );
}

function App() {
  let content;
  if (user.roles.includes("user") && user.roles.includes("admin")) {
    content = (
      <>
        <AdminPanel />
        <UserPanel />
      </>
    );
  } else if (user.roles[0] === "user") {
    content = <UserPanel />;
  } else {
    content = <AdminPanel />;
  }
  return (
    <>
      <h1 style={{ color: "red" }} className="main-heading">
        Hello {`${user.name} ${user.age}`}
      </h1>

      <img src={user.imgUrl} width="100px" />
      {/* {user.isAdmin ? <AdminPanel /> : <UserPanel />} */}
      {content}
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
      <MyCounter />
      <Button color="red" text="delete" />
      <Button />
    </>
  );
}

export default App;

// function greet({ name }) { // const {name} = user;
//   console.log(name);
// }

// const user = { name: "basanta", age: 20 };

// greet(user);

// add(a,b){ // a= 2 , b =3

// }

// add(2,3)
