import React, { useState, useEffect } from "react";
import Apple from "../../images/apple.png";
import SelectBox from "../common/SelectBox/SelectBox";
import ResultBox from "../common/ResultBox/ResultBox";
import TableBox from "../common/Table/Table";
import TextBox from "../common/TextBox/TextBox";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
import useStyles from "./Style";

const Content = () => {
  const [facilityIDs, setFacilityIds] = useState([1, 2, 3, 4]);
  const [years, setYears] = useState([1994, 1998, 2002, 2009, 2016, 2022]);
  const [activityTypes, setActivityTypes] = useState([
    { id: 4, type: "Distance Activity" },
    { id: 5, type: "Fuel Use" },
  ]);
  const [selectedActivityType, setSelectedActivityType] = useState("");
  const [fuelTypes, setFuelTypes] = useState([]);
  const [fuelSource, setFuelSource] = useState([]);
  const [vehicleType, setVehicleType] = useState([]);
  const [unitBox, setUnitBox] = useState([]);
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState("");
  const [dataTypeId, setDataTypeId] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [finalResponse, setFinalResponse] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const [editInput, setEditInput] = useState({});
  const [select, setSelect] = useState(undefined);

  const classes = useStyles();

  useEffect(() => {
    setVehicleType([]);
    if (dataTypeId !== "") {
      fetch(
        ` http://3.86.79.133/dijital-mentorluk-backend/public/api/fuel-type?data_type_id=${dataTypeId} `
      ).then((response) => {
        response.json().then((data) => {
          setFuelTypes(data.data);
        });
      });
    }
    if (dataTypeId === 4) {
      setSelectedActivityType("distanceActivity ");
    } else if (dataTypeId === 5) {
      setSelectedActivityType("fuelUse");
    }
  }, [dataTypeId]);

  useEffect(() => {
    setFuelSource([]);
    if (fuelTypes.length !== 0) {
      const pushedData = [];
      fuelTypes.map((item) => pushedData.push(item.name));
      setFuelSource([...new Set(pushedData)]);
    }
  }, [fuelTypes]);

  useEffect(() => {
    setVehicleType([]);

    if (fuelTypes.length !== 0) {
      const filteredData = fuelTypes.filter(
        (item) => item.name === selectedFuel
      );
      const sentData = [];
      filteredData.map((item) => sentData.push(item.vehicle_type));
      setVehicleType(sentData);
    }
  }, [selectedFuel]);

  useEffect(() => {
    setUnits([]);
    if (dataTypeId !== "") {
      fetch(
        ` http://3.86.79.133/dijital-mentorluk-backend/public/api/unit?data_type_id=${dataTypeId} `
      )
        .then((response) => {
          response.json().then((data) => {
            setUnitBox(data.data);
          });
        })
        .catch((error) => console.log(error));
    }
  }, [dataTypeId]);

  useEffect(() => {
    if (unitBox.length > 0) {
      unitBox.map((item) => units.push(item.name));
    }
  }, [unitBox]);

  const submitHandler = (e) => {
    fetch(
      ` http://3.86.79.133/dijital-mentorluk-backend/public/api/greenhouse-gas/mobile-combustion?activity_type=${selectedActivityType}&fuel_name=${selectedFuel}&amount=${amount}&unit=${selectedUnit}&vehicle_type=${selectedVehicle} `
    )
      .then((response) => {
        response.json().then((data) => {
          setFinalResponse(data.data);
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (finalResponse.length !== 0) {
      const preSubmmitedData = {
        id: uuidv4(),
        ID: selectedId,
        Year: selectedYear,
        Fuel: selectedFuel,
        Amount: amount,
        unit: selectedUnit,
        vehicle: selectedVehicle,
        activity: selectedActivityType,
        CO2: finalResponse.CO2,
        CH4: finalResponse.CH4,
        N2O: finalResponse.N2O,
        CO2e: finalResponse.CO2e,
      };
      const newData = [...submittedData, preSubmmitedData];
      setSubmittedData(newData);
    }
  }, [finalResponse]);

  const ResetHandler = () => {
    setSelect("");
    setSelectedId("");
    setSelectedYear("");
    setSelectedActivityType("");
    setSelectedFuel("");
    setSelectedVehicle("");
    setSelectedUnit("");
    setDataTypeId("");
    setAmount("");
    document.getElementById("styledSelect3").value = "";
    setFinalResponse([]);

    setTimeout(() => {
      setSelect(undefined);
    }, 1000);
  };

  return (
    <div className={classes.content}>
      <div className={classes.content_inner}>
        <div className={classes.content_header}>
          <p className={classes.content__paragraph}>Scope 1</p>
          <div className={classes.content__heading}>
            <img src={Apple} className={classes.content__heading1} />
            <h2 className={classes.content__heading2}>Mobile Combustion</h2>
          </div>
        </div>
        <div className={classes.content_calculator}>
          <div className={classes.content_inputs}>
            <h3 className={classes.calculator__heading}>GİRDİ ALANI</h3>
            <p className={classes.calculator__paragraph}>
              Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
              doldurun:
            </p>
            <div className={classes.calculator__selectBoxes}>
              <SelectBox
                label="Facility ID"
                data={facilityIDs}
                setValue={setSelectedId}
                select={select}
              />
              <SelectBox
                label="Year"
                data={years}
                setValue={setSelectedYear}
                select={select}
              />
              <SelectBox
                label="Activity Type"
                data={activityTypes}
                setDataTypeId={setDataTypeId}
                select={select}
              />
              <SelectBox
                label="Fule Source"
                data={fuelSource}
                setValue={setSelectedFuel}
                select={select}
              />
              <SelectBox
                label="Vehicle Type"
                data={vehicleType}
                setValue={setSelectedVehicle}
                select={select}
              />
              <TextBox
                label="Amount of Activity"
                units={units}
                setAmount={setAmount}
                setSelectedUnit={setSelectedUnit}
              />
            </div>
          </div>
          <div className={classes.calculator__results}>
            <h3 className={classes.calculator__heading}>SONUÇ ALANI</h3>
            <p className={classes.calculator__paragraph}>
              Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları
              aşağıdaki gibidir:
            </p>
            <div className={classes.calculator__resultBoxes}>
              <ResultBox label="CO" sub="2" finalData={finalResponse.CO2} />
              <ResultBox label="CH" sub="4" finalData={finalResponse.CH4} />
              <ResultBox
                label="N"
                sub="2"
                second_label="O"
                finalData={finalResponse.N2O}
              />
              <ResultBox
                label="CO"
                sub="2"
                third_label="e"
                finalData={finalResponse.CO2e}
              />
            </div>
            <div className={classes.calculator__buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.calculator__button}
                onClick={ResetHandler}
              >
                Sıfırla
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.calculator__button}
                onClick={submitHandler}
              >
                Kaydet
              </Button>
            </div>
          </div>
        </div>
        {submittedData.length > 0 && (
          <div className={classes.content_results}>
            <h3 className={classes.content__heading3}>Hesaplamalar</h3>
            <div>
              <TableBox
                submittedData={submittedData}
                setSubmittedData={setSubmittedData}
                setEditInput={setEditInput}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
