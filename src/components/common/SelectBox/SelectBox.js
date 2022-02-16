import useStyles from "./Style";
import ChevronBottom from "../../../images/chevron.png";
import React, { useState, useEffect } from "react";

const SelectBox = ({ label, data }) => {
  const [dataTypeId, setDataTypeId] = useState("");
  const [fuelTypes, setFuelTypes] = useState([]);
  const [fuelSource, setFuelSource] = useState([]);
  const classes = useStyles();

  const typeIdHandler = (event) => {
    if (event.target.value === "Distance Activity") {
      setDataTypeId(4);
    } else {
      setDataTypeId(5);
    }
  };

  useEffect(() => {
    if (dataTypeId !== "") {
      fetch(
        ` http://3.86.79.133/dijital-mentorluk-backend/public/api/fuel-type?data_type_id=${dataTypeId} `
      ).then((response) => {
        response.json().then((data) => {
          setFuelTypes(data.data);
        });
      });
    }
  }, [dataTypeId]);

  useEffect(() => {
    if (fuelTypes.length !== 0) {
      fuelTypes.map((item) => fuelSource.push(item.name));
      setFuelSource([...new Set(fuelSource)]);
    }
  }, [fuelTypes]);

  console.log("fuelSourc", fuelSource);

  return (
    <div>
      <label htmlFor="styledSelect1">
        {label}
        <div className={classes.custom_select}>
          {data[0].type !== "" ? (
            <select
              id="styledSelect1"
              name="options"
              className={classes.select_options}
              onChange={typeIdHandler}
            >
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
