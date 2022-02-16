import ChevronBottom from "../../../images/chevron.png";
import useStyles from "./Style";

import React from "react";

const TextBox = ({ label }) => {
  const classes = useStyles();

  return (
    <div>
      <label for="styledSelect1">
        {label}
        <div className={classes.custom_container}>
          <div className={classes.custom_select}>
            <input
              id="styledSelect1"
              className={classes.select_options}
              placeholder="Giriniz"
            />
          </div>
          <div className={classes.custom_select2}>
            <select
              id="styledSelect1"
              name="options"
              className={classes.select_options2}
            >
              <option value="" className={classes.select_option}>
                units
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
        </div>
      </label>
    </div>
  );
};

export default TextBox;
