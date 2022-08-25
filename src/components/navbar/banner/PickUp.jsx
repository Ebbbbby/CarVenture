import React from 'react'
import DatePicker from "react-date-picker";
import { useState } from "react";

const defaultPickValue = "Pickup Date";


const PickUp = () => {
    const [selectedDate, setSelectedDate] = useState(defaultPickValue);

  return (
    <>
      <div className="input-value">
        <label htmlFor="pickUp">{defaultPickValue}</label>
        <br />
        <input
        placeholder='pick up'
          type="date"
          name="pickUp"
          id="PickUp"
          data-date-inline-picker="true"
        />
      </div>
    </>
  );
}

export default PickUp