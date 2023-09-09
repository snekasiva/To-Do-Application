import React, { useEffect, useRef, useState } from 'react'
import './Todo.css';
import { Toaster, toast } from 'react-hot-toast';

function Todo() {
  const [value, setvalue] = useState('')
  const [list, setlist] = useState([])

  const handlesubmit = (e) => {
    e.preventDefault();

  }
  const addtodo = () => {
    setlist([...list, value])
    console.log(list);
    setvalue('')
  }
  const inputref = useRef('null')

  useEffect(() => {
    inputref.current.focus();
  })
  const handledelete = (i) => {
    list.splice(i, 1)
    setlist([...list])
  }
  return (
    <div className='container-fluid'>
      <div className='todo'>
        <div className=' '>
          <h1>To-Do List</h1>
          <br />
          <form className='form-group' onSubmit={handlesubmit}>
            <div className='input  justify-content-between'>
              <input type='text' className='form mx-2 p-2' value={value}
                ref={inputref}
                placeholder='enter your todo' onChange={(event) => setvalue(event.target.value)} />
              <button onClick={addtodo}>Add</button>
            </div>
            <div className='list'>
              <ul>
                {
                  list.map((lists, i) => (
                    <li><input type='checkbox'className='input mx-2' />{lists}
                      <span>
                        <button className='btn mx-2' onClick={() => handledelete(i)}>Remove</button>
                      </span></li>
                  ))
                }
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Todo
{/* <input type='text'  onChange={(event) =>setvalue(event.target.value)} />
      {
        list.map((list)=>{
          return <div>
          <button onClick={handleadd}>add+</button></div>
        })
      }
      
      <Toaster/> */}