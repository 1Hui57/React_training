import{useState} from "react";

function EditForm({todo, editTodo}){

    const [content, setContent]= useState(todo.content);
        
    
    // const handleClick = ()=>{
    //     addTodo(content)
    //     setContent('')
    // }
    
        
    return (
    <form className="create-form" >
        <input type="text" placeholder={todo.content} value={content} 
        onChange={(e)=>{setContent(e.target.value)}}/> 
        <button type="button" onClick={()=>{editTodo(todo.id, content)}}>完成</button>
    </form>
    );

}

export default EditForm