import useStyles from "./Style";
import ChevronBottom from "../../../images/chevron.png";
import React, { useState, useEffect } from "react";

const SelectBox = ({ label, data, setDataTypeId, setValue }) => {
  const classes = useStyles();
  const [hi, setHi] = useState("");

  const typeIdHandler = (event) => {
    if (event.target.value === "Distance Activity") {
      setDataTypeId(4);
    } else if (event.target.value === "Fuel Use") {
      setDataTypeId(5);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <div>
      <label htmlFor="styledSelect1">
        {label}
        <div className={classes.custom_select}>
          {data[0]?.type !== "" ? (
            <select
              id="styledSelect1"
              name="options"
              className={classes.select_options}
              onChange={typeIdHandler}
            >
              <option value="" className={classes.select_option}>
                Seçiniz
              </option>
              {data.map((item, index) => {
                return (
                  <option className={classes.select_option} key={index}>
                    {item.type || item}
                  </option>
                );
              })}
            </select>
          ) : (
            <select
              id="styledSelect1"
              name="options"
              className={classes.select_options}
            >
              {data.map((item, index) => {
                return (
                  <option className={classes.select_option} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          )}

          <img src={ChevronBottom} className={classes.select_icon} />
        </div>
      </label>
    </div>
  );
};

export default SelectBox;
