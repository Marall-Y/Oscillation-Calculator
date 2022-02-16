import useStyles from "./Style";
import ChevronBottom from "../../../images/chevron.png";
import React from "react";

const SelectBox = ({ label }) => {
  const classes = useStyles();

  return (
    <div>
      <label for="styledSelect1" className={classes.hello}>
        {label}
        <div className={classes.custom_select}>
          <select
            id="styledSelect1"
            name="options"
            className={classes.select_options}
          >
            <option value="" className={classes.select_option}>
              Seçiniz
            </option>
            <option value="1" className={classes.select_option}>
              Option 1
            </option>
            <option value="2" className={classes.select_option}>
              Option 2
            </option>
            <option value="3" className={classes.select_option}>
              Option 3
            </option>
            <option value="4" className={classes.select_option}>
              Option 4
            </option>
          </select>
          <img src={ChevronBottom} className={classes.select_icon} />
        </div>
      </label>
    </div>
  );
};

export default SelectBox;
