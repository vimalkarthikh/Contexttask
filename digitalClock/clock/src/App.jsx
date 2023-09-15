import { useState } from 'react'

import './App.css'

function App() {
  let time=new Date().toLocaleTimeString();
  let d=new Date().toDateString();
  const [count, setCount] = useState(time);
  const [dt,setDt]=useState(d)
  function timer(){
    time=new Date().toLocaleTimeString();
    d=new Date().toDateString();
    setCount(time);setDt(d);
  }
  setInterval(timer,1000);  

  return (
  <>
   <p> DIGITAL CLOCK </p>

  <div className='boo'>
   
  <h1>{count}</h1><br />
  <h6><i>{dt}</i></h6>

  </div>
  
  </>
  )
}

export default App
