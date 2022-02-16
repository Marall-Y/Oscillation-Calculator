import React from "react";
import useStyles from "./Style";

const ResultBox = ({ label, sub, second_label, third_label }) => {
  const classes = useStyles();

  return (
    <div className={classes.row}>
      <span className={classes.span}>
        <input className={classes.basic_slide} id="name" type="text" disabled />
        <label htmlFor="name" className={classes.label}>
          {label}
          <sub>{sub}</sub>
          <sup>{third_label !== "" ? third_label : ""}</sup>
          {second_label !== "" ? second_label : ""}
        </label>
      </span>
    </div>
  );
};

export default ResultBox;
