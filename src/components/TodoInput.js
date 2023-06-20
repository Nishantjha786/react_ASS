import React ,{useState} from 'react';



export default function TodoInput(props) {

    const [inputText, setInputText] = useState('');
    const handleEnter=(e)=>{
      if(e.keyCodue==="13")
      {
      props.addList(inputText)
      setInputText("")
      }
    }
  return (
  <div className="input-container">
    <input type='text' className='input-box-todo' placeholder='Enter your todo' value={inputText}
    onChange={e=>
    {
        setInputText(e.target.value)
    }}></input>
    <button className='add-btn' onClick={()=>{
      props.addList(inputText)
      setInputText("")
    }}>+ </button>
    <div></div>



  </div>
  )
}
