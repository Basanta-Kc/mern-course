import "./App.css";
import { useState } from "react";

// const arr = [1,2]
// const [firstnum, secondnum] = arr;

// function test(){
//   return [1,2]
// }

// const [first, second] = test()

// function useState(todos){
//   return [todos, setTodos]
// }

// const arr = []
// const arr2 = arr

// const num = [1,2,3]
// const num2 = [1,2,3]

// const nums = [1,2,3,4]
// const num2 = [...nums] // 1,2,34
// const anotherNums = [...nums, 5,6,5] //
// const isEditing = false;

// isEditing = true;
// [1,2,3,4,5,6,5]

function Todo() {
  // const todos = [leanrhtm, learn css, learn php]
  const [todos, setTodos] = useState(["learn html", "learn css", "learn php"]); // [['learn html', 'learn css', 'learn php'], () => {}]
  const [todo, setTodo] = useState("");
  // Try to use only one state
  const [isEditing, setIsEditing] = useState(false);
  const [indexToBeEditied, setIndexToBeEdited] = useState(null);

  const handleDelete = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <>
      <h1>Todo app</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isEditing) {
            todos[indexToBeEditied] = todo;
            setTodos([...todos]);
          } else {
            setTodos([...todos, todo]);
          }

          setTodo("");
          setIsEditing(false);
          setIndexToBeEdited(null);
        }}
      >
        <input
          type="text"
          name="todo"
          placeholder="new todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <input type="submit" value={isEditing ? "Update" : "Add"} />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}{" "}
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  setIndexToBeEdited(index);
                  setIsEditing(true);
                  setTodo(todos[index]);
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;

// todo App

// learn html
// learn ccaa

const todos = ["learn html", "learn css", "learn php"];
todos.splice(1, 1);
