import React from 'react';
export const Balance= ({sendData,state,income,expense})=> {
 const onClick=()=>{
  sendData(!state)
 }
  return (
    <>
    <div className="buttonContainer" style={{'padding': '9px 0px'}}>
        <div className="left">
         <b>  Balance:${income-expense}</b>
        </div>
        <div className="right">
          <button className="warning" onClick={onClick}>{state ?(<small>Cancel</small>):<small>ADD</small>}</button>
        </div>
      </div>
    </>
  )
}
