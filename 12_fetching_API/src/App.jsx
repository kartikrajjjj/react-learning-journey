import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { getPosts } from './api/script';

function App() {

  const [data,setData]=useState(null);
  
  useEffect(() =>{
    getPosts().then((posts) => setData(posts));
  },[]);

  return (
    <div>{data ? data.map((e) =><li>{e.title}</li>) : <p>No Data</p>}</div>
  )
}

export default App
