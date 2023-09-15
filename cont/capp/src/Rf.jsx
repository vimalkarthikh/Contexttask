import React, { useRef } from 'react'

function Rf() {
    const ref=useRef(0);
    function han(){
        ref.current++;console.log(ref.current);

    }
  return (
    <>
    <p>REF: {ref.current}</p>
    <button onClick={han}>Add</button>
    </>
  
  )
}

export default Rf