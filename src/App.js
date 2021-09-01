import logo from './logo.svg';
import './App.css';
import react, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
const localStorageKey = 'todoApp.todos'
const generateRandomId = () =>{
  var arr = [];
  var Id = Math.floor(Math.random()*10000);
  while (arr.includes(Id)){
    var Id = Math.floor(Math.random()*10000);
  }
  return Id;
}
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
 
  useEffect(()=>{
  const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  },[todos])
  const toggleTodo = id =>{
    const newTodos = [...todos] 
    const todo = newTodos.find(todo => todo.id == id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  function handleClear() {
    const newList  = todos.filter(todo => !todo.complete)
    setTodos(newList)
  }
  function handleAddToDo(e){
    const name = todoNameRef.current.value;
    if(name == '') return false;
    setTodos(pretoDos =>{
      console.log(pretoDos)
      return [...pretoDos, {id: generateRandomId() , name:name, complete: false}]
    })
    todoNameRef.current.value = null;
  }
  return (
    <>
    <TodoList todos = {todos} toggleTodo={toggleTodo} />
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddToDo}>Add to do</button>
    <button onClick={handleClear}>Clear complete</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
  </>
  )

}

export default App;
