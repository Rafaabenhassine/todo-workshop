import React from 'react'

const Todo = ({Task,handleDone,handleDelete}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",border:"3px"}}>
        <p>name:{Task.name}</p>
        <p>description:{Task.description}</p>
        <p>{Task.isDone?<span>Done</span>:<span>unDone</span>}</p>
        <button style={Task.isDone?{color:"green"}:{color:"red"}} onClick={()=>handleDone(Task.id)}>{Task.isDone?<span>make it unDone</span>:<span>make it Done</span>}</button>
        <button onClick={()=>handleDone(Task.id)}>{Task.isDone?<span style={{backgroundColor:"green"}} >make it unDone</span>:<span style={{backgroundColor:"red"}}>make it Done</span>}</button>
        <button onClick={()=>handleDelete(Task.id)}>delete</button>
    </div>
  )
}

export default Todo
