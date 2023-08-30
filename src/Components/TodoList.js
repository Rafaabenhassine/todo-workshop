import React from 'react'
import Todo from './Todo'

const TodoList = ({Tasks,handleDone,handleDelete}) => {
  return (
    <div>
        {Tasks.map(Task=><Todo Task={Task} handleDone={handleDone} key={Task.id} handleDelete={handleDelete}/>)}
    </div>
  )
}

export default TodoList