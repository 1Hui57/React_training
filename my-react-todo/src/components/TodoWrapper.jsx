import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  //要儲存todo的值，以便顯示在下方，所以初始值會是一個陣列
  // 回傳的兩個值第一個是state的內容，第二個值是更改state的函數
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: Math.random(),
        isCompleted:false, isEditing:false},
    { content: "寫作業", id: Math.random(), 
        isCompleted:false, isEditing:false },
  ]);

  function addTodo(content) {
    console.log("parent", content);
    const currentTodo = [...todos];
    //當屬性名跟值是同樣的時候，可以省略，只寫屬性
    // currentTodo.push({ content, id: Math.random() });
    currentTodo.push({ content: content, id: Math.random(), isCompleted:false, isEditing:false});
    setTodos(currentTodo)

    // setTodos([...todos, { content: content, id: Math.random() }]);
  }
  // 想要寫一個功能，先在父組件建立函式，子組件接下來就可以引用
  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const changeCompleted = (id) => {
    setTodos(todos.map((todo)=>{
        if (todo.id===id){
            return {...todo, isCompleted:!todo.isCompleted}
        }
        else{
            return todo
        }
    }))
  }

  const toggleIsEditing = (id) =>{
    setTodos(todos.map((todo)=>{
        if (todo.id===id){
            return {...todo, isEditing:!todo.isEditing}
        }
        else{
            return todo
        }
    }))
  }

  const editTodo = (id,newContent) => {
    setTodos(todos.map((todo)=>{
        return todo.id===id 
        ? {...todo, content:newContent, isEditing:false}
        :todo
    }))
  }

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id}  
        deleteTodo={deleteTodo} changeCompleted={changeCompleted} toggleIsEditing={toggleIsEditing} editTodo={editTodo}/>;
      })}
    </div>
  );
}

export default TodoWrapper;
