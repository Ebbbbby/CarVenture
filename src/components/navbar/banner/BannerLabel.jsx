import React from "react";
import { useState, useEffect } from "react";

const defaultSelectValue = "Select location";
const BannerLabel = () => {
  const [selected, setSelected] = useState(defaultSelectValue);


  return (
    <div className="input-value">
      <label htmlFor="fruits">Pick up Location</label> <br />
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


