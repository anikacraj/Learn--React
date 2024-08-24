import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch';




function UseEffect() {
  const {data,loading,error} =UseFetch("https://jsonplaceholder.typicode.com/todos");

const loadingMessage = <p> Todos is loading</p>

const TodosElement = data &&
data.map((todo) => (
  <p key={todo.id}>
    {todo.title}
  </p>
))


  return (
    <div>
      {loading &&
      loadingMessage
      }
{ TodosElement }

{error && <p>{error}</p>}



    </div>
  )
}

export default UseEffect