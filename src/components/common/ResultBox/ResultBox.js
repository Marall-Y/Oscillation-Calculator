import React from "react";
import useStyles from "./Style";

const ResultBox = ({
  label,
  sub,
  second_label,
  third_label,
  finalData,
  CO2,
  CH4,
  N2O,
  CO2E,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.row}>
      <span className={classes.span}>
        <input
          className={classes.basic_slide}
          value={CO2 || CH4 || N2O || CO2E}
          id="name"
          type="text"
          disabled
          placeholder={finalData}
        />
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
