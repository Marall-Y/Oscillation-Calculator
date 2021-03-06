import useStyles from "./Style";
import ChevronBottom from "../../../images/chevron.png";
import React, { useState, useEffect } from "react";

const SelectBox = ({
  label,
  data,
  setDataTypeId,
  setValue,
  selectedId,
  selectedYear,
  selectedActivityType,
  selectedFuel,
  selectedVehicle,
  resetOption,
}) => {
  const classes = useStyles();

  const typeIdHandler = (event) => {
    if (event.target.value === "distanceActivity") {
      setDataTypeId(4);
    } else if (event.target.value === "fuelUse") {
      setDataTypeId(5);
    } else {
      setValue(event.target.value);
    }
  };

  console.log("id", selectedId);
  console.log("year", selectedYear);
  console.log("avtivity", selectedActivityType);
  console.log("fuel", selectedFuel);
  console.log("vehicle", selectedVehicle);

  return (
    <div>
      <label htmlFor="styledSelect1">
        {label}
        <div className={classes.custom_select}>
          <select
            value={
              selectedId ||
              selectedYear ||
              selectedVehicle ||
              selectedActivityType ||
              selectedFuel ||
              resetOption
            }
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
                  {item}
                </option>
              );
            })}
          </select>

          <img src={ChevronBottom} className={classes.select_icon} />
        </div>
      </label>
    </div>
  );
};

export default SelectBox;
