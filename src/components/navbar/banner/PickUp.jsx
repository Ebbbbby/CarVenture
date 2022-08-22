import React from 'react'
import DatePicker from "react-date-picker";
import { useState } from "react";

const defaultPickValue = "Select Date";


const PickUp = () => {
    const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div>
        <label htmlFor="">{defaultPickValue}</label>
        <br />
        <input type="date" name="" id="" />
      </div>
    </>
  );
}

export default PickUp