import React from 'react';
import { useRef, useState } from 'react'
export function Addtransition({expenseList,transitionCallBack}) {  
  const ref=useRef(null);
  const refamount=useRef(null);
  const current = new Date();
  const [formData, handleData] = useState({
    amount: "",
    description: "",
    type: "",
    date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    });
  const addData = (e) => {
    e.preventDefault();
    // console.log(formData);
    transitionCallBack([...expenseList, formData]);
    e.target.reset();
  }
  const changeValue = (e) => {
    const { name, value } = e.target;
    handleData((prev) => { return { ...prev, [name]: value } }
    )
  }
  return (
    <>
    {/* {JSON.stringify(formData)} */}
      <form onSubmit={addData} className="addExpenseForm">
        <div className="row">
          <div className="col">
            <input type="number" className="form-control" refamount={refamount} placeholder="Amount" name="amount" onChange={changeValue} required/>
          </div>
          {/* <input type="hidden" value={date} name="date" onChange={changeValue}/> */}
          <div className="col">
            <input type="text" className="form-control" ref={ref} placeholder="Description" name="description" onChange={changeValue} required/>
          </div>
        </div>
       <div className="div">
       <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="type" id="inlineRadio1" value="expense" onChange={changeValue} required/>
          <label className="form-check-label" >Expences</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="type" id="inlineRadio2" value="income" onChange={changeValue} required/>
          <label className="form-check-label" >Income</label>
        </div>
        <small> <button className='warning' >Add Transition</button></small>
       </div>
      </form>





    </>
  )
}
