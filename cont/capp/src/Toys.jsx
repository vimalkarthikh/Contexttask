import React, { useReducer } from 'react'
const ini={ tot:0, sold : 0};
function tstore(state,action){
    switch(action.type){
        case 'Buy':{return{...state,tot:state.tot+1}}break;
        case 'Sell':{return{...state,tot:state.tot-1,sold:state.sold+1}}break;
        default: return state;
    }
}


function Toys() {
    const[storeStatus,dispatch]=useReducer(tstore,ini );
    function b(){
        dispatch({type:'Buy'});

    }
    function s(){
        dispatch({type:'Sell'})
    }
  return (
    <div><h1>TOYS</h1>
    <p>STORE: {storeStatus.tot}  Sold:{storeStatus.sold}</p>
    <button onClick={b}>BUY</button><button onClick={s}>SELL</button>
        
    </div>
  )
}

export default Toys