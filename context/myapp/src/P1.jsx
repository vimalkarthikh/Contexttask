import React ,{useContext}from 'react'
import { PriceCont } from './Prod'

function P1() {
  
  const {p1}=useContext(PriceCont);
    return (
        <><div className='nod' >
          
              <div key="1" >
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" className='pic'></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">iPhone 9</h3>
                      <p className="card-text">An apple mobile which is nothing like apple</p>
                      <p className="card-title">Brand: Apple&nbsp;&nbsp; Catergory: smartphones</p>
                      <hr></hr>
                      <p className="card-text">Rating: 4.69 &nbsp;&nbsp; Stock: 94 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;
                      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong> Price: ${p1} </strong></p>
                      
                     </div>
                  </div>
                  <hr></hr>
                </div>
              </div>
              </div>
            </div>
          
        </>)
}

export default P1