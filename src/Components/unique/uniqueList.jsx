import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const todos = [
  
    {
        id: uuidv4(),
        header: "Blue Card",
        title: "This is a blue card",
        phones : [
            {home : "017293028"},
            {office : "874932720"}
        ]
    },
    {
        id: uuidv4(),
        header: "Orange Card",
        title: "This is an orange card",
        phones : [
            {home : "017293028"},
            {office : "874932720"}
        ]
    },
    {
        id: uuidv4(),
        header: "skyBlue Card",
        title: "This is an skyBlue card",
        phones : [
            {home : "017293028"},
            {office : "874932720"}
        ]
    }
];



function UniqueList() {
  
  return (
    <div>
     {todos.map((todo)=>{
        const {id, header, title,phones} =todo;
        return <div key ={todo.id}>
            <h3>{id}</h3>
            <h3>header:{header}</h3>
            <h3>{title}</h3>
         {
            phones.map((phone)=>{
                const {home,office}=phone;
                return <div>
                    <h5>{home}</h5>
                    <h5>{office}</h5>
                </div>
            })
         }
        </div>
     })}
    </div>
  )
}

export default UniqueList