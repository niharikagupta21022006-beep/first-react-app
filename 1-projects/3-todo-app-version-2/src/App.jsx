import AppName from "./components/AppName";

import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import './App.css';


function App() {

  const todoItems = [
    {
      name:"Buy Milk",
      dueDate:"19/1/26",
    },

    {
      name:"Go to College",
      dueDate:"19/1/26",
    },
  ];
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
    <div className="items-container">
      <TodoItem todoDate="19/1/26" todoName="Buy Milk"></TodoItem>
      <TodoItem todoDate="19/1/26" todoName="Go to College"></TodoItem>

    </div>    
        
      </center>
  )
  
  }

  export default App;
