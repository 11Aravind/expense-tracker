import React from 'react';
import { Addtransition } from './Addtransition'

import {Transitionheadding} from './Transitionheadding'
import Card from './Card'
import { Balance } from './Balance'
import { useState,useEffect } from 'react'

export const Expensetracker = () => {

  const [isShow, haldleShow] = useState(false);
  const [expenseList, handleList] = useState([]);

  const [income,setIncome]=useState(0);
  const [expense,setExpense]=useState(0);


  const sendData = (isShow) => {
    haldleShow(isShow)
  }
  const transitionCallBack = (data) => {
    handleList(data);
    haldleShow(!isShow);
  }

  useEffect(()=>calculateExpense(),[expenseList]);
  const calculateExpense=()=>{
    let inc=0;
    let exp=0;
    // console.log(expenseList);
    expenseList.map((singleValue)=>singleValue.type==="income"?inc=inc+Number(singleValue.amount):exp=exp+Number(singleValue.amount))
    setIncome(inc);
    setExpense(exp);
    // filtering();
  }


 
  return (
    <>
      <Balance income={income} expense={expense} sendData={sendData} state={isShow} />
      {isShow && <Addtransition expenseList={expenseList} transitionCallBack={transitionCallBack} />}
      <div className="cardContainer">
        <div className="left"><Card headding="Income" type={income} color="#058633" /></div>
        <div className="right">
          <Card headding="Expences" type={expense}color="red" />
        </div>
      </div>
      <Transitionheadding  expenseList={expenseList}/>
    
      {/* // </div> */}
    </>
  )
}
