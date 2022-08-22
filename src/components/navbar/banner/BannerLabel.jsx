import React from "react";
import { useState, useEffect } from "react";

const defaultSelectValue = "Select a fruit";
const BannerLabel = () => {
  const [selected, setSelected] = useState(defaultSelectValue);


  return (
    <div className="">
      <label htmlFor="fruits">Fruits</label> <br />
      <select
        id="fruits"
        name="fruits"
        defaultValue={selected}
        style={{ color: selected === defaultSelectValue ? "gray" : "black" }}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option>{defaultSelectValue}</option>
        <option>Banana</option>
        <option>Apple</option>
        <option>Orange</option>
      </select>
    </div>
  );
};

export default BannerLabel;


