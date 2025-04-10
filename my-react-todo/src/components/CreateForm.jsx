import{useState} from "react";

function CreateForm({addTodo}) {

    const [content, setContent]= useState('');
    

    const handleClick = ()=>{
      addTodo(content)
      setContent('')
    }

    
  return (
    <form className="create-form" >
      <input type="text" placeholder="輸入代辦事項" value={content} 
      onChange={(e)=>{setContent(e.target.value)}}/> 
      <button type="button" onClick={handleClick}>加入</button>
    </form>
  );
}

export default CreateForm
