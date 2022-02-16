import React from "react";
import useStyles from "./Style";

const ResultBox = ({ label, sub, second_label }) => {
  const classes = useStyles();

  return (
    <div class={classes.row}>
      <span className={classes.span}>
        <input class={classes.basic_slide} id="name" type="text" disabled />
        <label for="name" className={classes.label}>
          {label}
          <sub>{sub}</sub>
        </label>
      </span>
    </div>
  );
};

export default ResultBox;
