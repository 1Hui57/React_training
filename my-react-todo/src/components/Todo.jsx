import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, changeCompleted, toggleIsEditing, editTodo}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo}/>
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          changeCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          style={{ cursor: "pointer" }}
          onClick={() => {
            toggleIsEditing(todo.id);
          }}
        />
        <MdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}
export default Todo;
