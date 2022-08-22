import React from "react";
import { useState } from "react";

const defaultPickValue = "Select Date";

const ReturnDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDate =(e) =>{
   
  }

  return (
    <>
      <div className="">
        <label htmlFor="">{defaultPickValue}</label>
        <br />
      <input type="date" name="" id="" onChange={(e)=>handleDate(e)} />
      </div>

      <div className="banner__btn">
        <label htmlFor="submit"></label>
        <br />
      <button type="submit">Search</button>
      </div>
    </>
  );
};

export default ReturnDate;
