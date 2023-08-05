import { useEffect, useState } from "react"
import { Title } from "../components/Title"


export const Eventos = () => { 
  const [data,setData]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((datos) => setData(datos));
  },[]);

  return (
    <>
      <Title titulo="Lista de ejemplos disponibles!" />

      <ul>
        {data.map((item:any)=>(
          <li className=" relative mb-16 " key={item.id}>
            <h1 className="text-2xl font-bold uppercase text-slate-600">{item.title}</h1>
            
            <p className="text-lg italic">{item.body}</p>
            <div className=" absolute translate-x-1/2 w-1/2  border-b  border-rose-500 -bottom-10"></div>
            </li>
        ))}
      </ul>
    </>
  )
}