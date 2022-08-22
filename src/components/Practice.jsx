import React from 'react'
import { useState } from 'react'
import List from './List';

const Practice = () => {
const [logged, setIsLogged]=useState(false)

const info=[
    {
    id : 1,
    Firstname:"Ebele",
    Lastname:"Ozoani",
},
{
   id : 2,
    Firstname:"Nwachukwu",
    Lastname:"Ugochi",
}

]
  return (
    <>
      <h1>My name is Ebele</h1>
      <button onClick={() => setIsLogged(!logged)}>
        {logged ? "login" : "log out"}
      </button>

      {logged ? <h2>welcome to my app</h2> : <h2>You can go now</h2>}

       {info.map((infomation)=>(
        <List key={infomation.id} {...infomation}/>
       ))}
    </>
  );
}

export default Practice