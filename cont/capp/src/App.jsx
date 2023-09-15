import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rf from './Rf'
import Toys from './Toys'

function App() {
  const [count, setCount] = useState(0)
const countRef=useRef(0);

const but=()=>{
  setCount(count+1);countRef.current=countRef.current+1;
  console.log("Total press" ,countRef.current);
}

  return (
    <>
   <Rf></Rf>
   <Toys></Toys>
      
    </>
  )
}

export default App
