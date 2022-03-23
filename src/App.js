import './App.css';
import Header from './my components/Header';
import { Todos } from './my components/Todos';
import { AddTodo } from './my components/AddTodo';
import { Footer } from './my components/Footer';
import React, { useState } from 'react';



function App() {
  const onDelete = (todo) =>{
    console.log("I am ondelete of todo", todo);
   // let index = todos.indexOf(todo);
   // todos.splice(index,1);
   setTodos(todos.filter((e)=>{
     return e!==todo;
   }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

const [todos, setTodos] = useState ([
  {
    sno: 1,
    title: "Go to the market",
    desc: "You need to go the market to get this job done"
  },
  {
    sno: 2,
    title: "Go to the bazar",
    desc: "You need to go the market to get this job done2"
  },
  {
    sno: 3,
    title: "Go to the mall",
    desc: "You need to go the market to get this job done3"
  },
]);

  return (
   <>
   <Header title="My Todos List"/>
  <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   
   </>
  );
}

export default App;


