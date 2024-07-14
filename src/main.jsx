import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const h = " Welcome our Page ";
const p= "Thank You ";
const date =new Date();
const getDate=date.getDate();
const style ={
    color : "red",
    fontSize :"5rem"
}
ReactDOM.createRoot(document.getElementById('root')).render(
<div>
<h1 style={style}>Hello</h1>
<h3 style={{ color : "blue",
    fontSize :"5rem"}}>Hi</h3>
<h2 className='header'>{h + p}</h2>
</div>
 
)
