
import { useRef, useState } from 'react'
export function Addtransition({expenseList,transitionCallBack}) {  
  const ref=useRef(null);
  const refamount=useRef(null);
  const [formData, handleData] = useState({
    amount: "",
    description: "",
    type: ""
    });
    // const clear=()=>{
    //   ref.current.value = "";
    //   refamount.current.value = "";
    // }
  const addData = (e) => {
    e.preventDefault();
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
      <form onSubmit={addData} className="addExpenseForm">
        {/* {JSON.stringify(formData)} */}
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" refamount={refamount} placeholder="Amount" name="amount" onChange={changeValue} />
          </div>
          <div className="col">
            <input type="text" className="form-control" ref={ref} placeholder="Description" name="description" onChange={changeValue} />
          </div>
        </div>
       <div className="div">
       <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="type" id="inlineRadio1" value="expense" onChange={changeValue} />
          <label className="form-check-label" >Expences</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="type" id="inlineRadio2" value="income" onChange={changeValue} />
          <label className="form-check-label" >Income</label>
        </div>
        <small> <button className='warning' >Add Transition</button></small>
       </div>
      </form>





    </>
  )
}
