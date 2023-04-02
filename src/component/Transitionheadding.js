import React, { useEffect, useState } from 'react'
import { Transitiondetails } from './Transitiondetails'
export function Transitionheadding({ expenseList }) {
  const [filteredData, handleFilter] = useState("all");

  //  let List=expenseList;

  const changeFilter = (e) => {
    //  List=expenseList;
    handleFilter(e.target.value);

    //  console.log(List);
  }

  const [tempList, setTempList] = useState([]);
  useEffect(() => {
    if (filteredData == "all")
      setTempList(expenseList);
    else {
      let fil = expenseList.filter(payload => payload.type == filteredData);
      setTempList(fil);
    }
    // console.log(List);
  }, [filteredData, expenseList])

  const [searchBox, handleSearch] = useState("");
  const search = (e) => {
    const searchElement = e.target.value;
    // console.log(searchElement);
    let filterSearch = [];
    let temp = expenseList.filter(payLoad => payLoad.description.toLowerCase().includes(searchElement)
      || payLoad.amount.toLowerCase().includes(searchElement)
      || payLoad.date.toLowerCase().includes(searchElement));
    setTempList(temp);
  }
  return (
    <>
      <div className='transcationHeadding'>
        <div><h4>History</h4></div>
        <div className="selectDiv">
          <select id="inputState" name="filter" onChange={changeFilter} className="inputState">
            <option value="all">--Select--</option>
            <option value="income">Income</option>
            <option value="expense">Expence</option>
          </select>
        </div>
        <div><i className={searchBox ? "fa fa-times-circle icon" : "fa fa-search icon"} onClick={() => handleSearch(!searchBox)} aria-hidden="true"></i></div>
      </div>
      {searchBox && (<input type="text" placeholder='Search...' onChange={search} className='searchBox' />)}
      <Transitiondetails expenseList={tempList} filteredData={filteredData} />
    </>
  )
}
