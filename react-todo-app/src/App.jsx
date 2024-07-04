
import './App.css'
import {useState} from 'react'

// const arr = [1,2]
// const [firstnum, secondnum] = arr;

// function test(){
//   return [1,2]
// }

// const [first, second] = test()

// function useState(todos){
//   return [todos, setTodos]
// }

const arr = []
const arr2 = arr

const num = [1,2,3]
const num2 = [1,2,3]

const nums = [1,2,3,4]
const anotherNums = [...nums, 5,6,5]

[1,2,3,4,5,6,5]



function App() {

  // const todos = [leanrhtm, learn css, learn php]
  const [todos, setTodos] = useState(['learn html', 'learn css', 'learn php']) // [['learn html', 'learn css', 'learn php'], () => {}]

  const handleAddTodo = (e) => {
    e.preventDefault()
    const newTodo = e.target.elements[0].value
    setTodos([...todos, newTodo])
    e.target.reset()
  }

  const handleDelete = () => {
    alert('delete clicked')
  }

  return <>

     <h1>Todo app</h1> 
     <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder='new todo' />
        <input type="submit" value="add" />
     </form>
     <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo} <button onClick={handleDelete}>delete</button></li>
      })}
     </ul>
  </>
}

export default App


// todo App

// learn html
// learn ccaa