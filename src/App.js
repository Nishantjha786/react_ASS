import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import "./App.css"
import Todolist from './components/Todolist';

function App() {
  const [listTodo , setlistTodo]=  useState([]);
  let addList =(inputText)=>{
    if(inputText!=="")
    setlistTodo([...listTodo,inputText])
  }
  const deleteListItem =(key)=>{
    let newlist = [...listTodo];
    newlist.splice(key,1)
    setlistTodo([...newlist])
  }
  return (
<div className='main-container'>

<div className='center-container'>
<TodoInput   addList = {addList}/>


<h1>Todo app</h1>
<hr/>
{listTodo.map((listitem,i)=>{
  return (
    <Todolist key={i} item={listitem} index = {i} deleteItem={deleteListItem}/>
  )
})}


</div>

</div>

  )
}
export default App;