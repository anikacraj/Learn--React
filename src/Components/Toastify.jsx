import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function () {

    const handleAdd =()=>{
   toast('new todo is here')
    }
    const handledelete =()=>{
        toast('delete todo is here')
    }
  return (
    <div>
        
        <h2>display notifications using react-toastify</h2>
        <button onClick={handleAdd}>Add new Todo</button>
        <button onClick={handledelete}>delete new Todo</button>
        <ToastContainer />
    </div>
  )
}
