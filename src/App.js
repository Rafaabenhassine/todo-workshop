
import React from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TodoList from './Components/TodoList';

class App extends React.Component {
  state={
    Tasks:[
      {id:1,name:"task1",description:"workshop",isDone:false},
      {id:2,name:"task2",description:"checkpoint",isDone:false},
      {id:3,name:"task3",description:"one to one",isDone:false},
      {id:4,name:"task4",description:"practice box",isDone:false},
    ]
  }
  handleDone=(id)=>{
    this.setState(this.state.Tasks.map(e=>(e.id===id?e.isDone=!e.isDone:e)))
  }
  handleDelete=(id)=>{
    this.setState({Tasks:this.state.Tasks.filter(e=>e.id!==id)})
  }
  handleAdd=(Task)=>{
    
    this.setState({Tasks:[...this.state.Tasks,Task]})
    console.log(Task)
  }
  render(){
  return (
    <div>
      <AddTask />
      <TodoList Tasks={this.state.Tasks} handleDone={this.handleDone} handleDelete={this.handleDelete} />
    </div>
    );
  }
}



export default App;
