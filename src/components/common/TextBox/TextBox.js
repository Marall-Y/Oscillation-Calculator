import ChevronBottom from "../../../images/chevron.png";
import useStyles from "./Style";

import React, { useState } from "react";

const TextBox = ({
  label,
  units,
  setAmount,
  setSelectedUnit,
  amount,
  selectedUnit,
}) => {
  const classes = useStyles();

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const unitHandler = (event) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <div>
      <label htmlFor="styledSelect3">
        {label}
        <div className={classes.custom_container}>
          <div className={classes.custom_select}>
            <input
              value={amount}
              id="styledSelect3"
              className={classes.select_options}
              placeholder="Giriniz"
              onChange={(event) => amountHandler(event)}
            />
          </div>
          <div className={classes.custom_select2}>
            <select
              value={selectedUnit}
              label={selectedUnit}
              id="styledSelect1"
              name="options"
              className={classes.select_options2}
              onChange={unitHandler}
            >
              <option value="" className={classes.select_option}>
                units
              </option>
              {units.map((item, index) => {
                return (
                  <option className={classes.select_option} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <img src={ChevronBottom} className={classes.select_icon} />
          </div>
        </div>
      </label>
    </div>
  );
};

export default TextBox;
