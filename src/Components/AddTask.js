
import React from 'react'

class AddTask extends React.Component {
    state={
        name:'',
        desc:'',
    }
    handleName=(e)=>{
        this.setState({name:e.target.value})
    }
    handleDesc=(e)=>{
        this.setState({desc:e.target.value})
    }
    render(){

    
  return (
    <div>
        <form>
            <label>name</label>
            <input name='name' onChange={(e)=>this.handleName(e)} />
            <label>description</label>
            <input name='description' onChange={(e)=>this.handleDesc(e) } />
            <button type="button" onClick={()=>this.this.props.handleAdd({id:Math.random(),name:this.state.name,description:this.state.desc,isDone:false})}>submit task</button>
        </form>
    </div>
  )
 }}

export default AddTask