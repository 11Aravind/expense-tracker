import React from 'react'

export  function Transitiondetails({expenseList}) {
  return (
    <>
    <div className="transition" >
      
       {expenseList.map((expenseList,index)=>{
      return <div key={index}  className={expenseList.type=="expense"?("oneTransaction red"):("oneTransaction green")}>
        <div className="description">{expenseList.description}</div> 
      <div className="amount">{expenseList.amount}</div>
      </div>
      
    })}
    </div>

   
  {/* <ul className="list-group list-group-flush"> */}
    {/* {expenseList.map((expenseList,index)=>{
      return <li key={index} className="list-group-item item">{expenseList.description}</li>
    })} */}
  
  {/* </ul> */}


    </>
  )
}
