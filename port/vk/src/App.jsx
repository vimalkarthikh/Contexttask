import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='cd'>
    <div className="nav-bar">
      <h3 className='hn'>Vimal   Karthik</h3>
    </div>
    <div className='pn'>
      <p><h1>Hi' <br></br>I am Vimal Karthik</h1><br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
      &ensp;&ensp;&ensp;&ensp;&ensp;Mern Stack Developer</p>
      &ensp;
      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
    <img src="./img/vkwog1.jpg" class="rounded float-right pp" alt="..."/>

    </div>


   </div>
  )
}

export default App
