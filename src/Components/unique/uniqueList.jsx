import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id: uuidv4(),
        header: "Green Card",
        title: "This is a green card"
    },
    {
        id: uuidv4(),
        header: "Blue Card",
        title: "This is a blue card"
    },
    {
        id: uuidv4(),
        header: "Orange Card",
        title: "This is an orange card"
    },
    {
        id: uuidv4(),
        header: "skyBlue Card",
        title: "This is an skyBlue card"
    }
];

const List = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => {
                const { id, header, title } = todo;
                return (
                    <div key={id}>
                        <h3>{header}</h3>
                        <h3>{title}</h3>
                    </div>  
                );
            })}
        </div> 
    );
}

export default List;
