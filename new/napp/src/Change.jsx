import { useState } from 'react'
import Data from './Data.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='nod' >
      {
        Data.map((i)=>(
          <>
          <div key={i.id} >
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={i.thumbnail} className='pic'></img>
              </div>
              <div className="col-md-8">
                <div className="card-body"><br></br>
                  <h3 className="card-title">{i.title}</h3>
                  <p className="card-text">{i.description}</p>
                  <p className="card-title">Brand:{i.brand}&nbsp;&nbsp; Catergory: {i.category}</p>
                  <hr></hr>
                  <p className="card-text">Rating: {i.rating} &nbsp;&nbsp; Stock: {i.stock} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong> Price: ${i.price}</strong></p>
                  
                 </div>
              </div>
              <hr></hr>
            </div>
          </div>
          </div></>
        ))
       
      }
      </div>
    </>
  )
}

export default App
