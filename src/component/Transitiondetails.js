import React from 'react'

export function Transitiondetails({ expenseList, filteredData }) {

  return (
    <>

      <div className="transition" >
        {(expenseList.length == 0) ? <div className='notFoundDiv '><img src="./notfound.webp" alt="pic" /></div> : (expenseList.map((expenseList, index) => {
          return <div key={index} className={expenseList.type == "expense" ? ("oneTransaction red") : ("oneTransaction green")}>
            <div className="amount">{expenseList.amount}</div>
            <div className="date">{expenseList.date}</div>
            <div className="description">{expenseList.description}</div>
          </div>

        }))}


      </div>
    </>
  )
}
