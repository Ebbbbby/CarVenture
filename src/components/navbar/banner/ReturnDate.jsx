import React from "react";
import { useState } from "react";

const defaultReturnValue = "Return Date";

const ReturnDate = () => {
  const [selectedDate, setSelectedDate] = useState(defaultReturnValue);


  return (
    <>
      <div className="input-value">
        <label htmlFor="return">{defaultReturnValue}</label>
        <br />
      <input type="date" name="return" id="return" />
      </div>

      <div className="banner__btn">
        <label htmlFor="submit"></label>
        <br />
      <button type="submit">Search for Cars</button>
      </div>
    </>
  );
};

export default ReturnDate;
