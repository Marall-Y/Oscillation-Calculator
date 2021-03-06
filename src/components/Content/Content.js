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
    "distanceActivity",
    "fuelUse",
  ]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [fuelSource, setFuelSource] = useState([]);
  const [vehicleType, setVehicleType] = useState([]);
  const [unitBox, setUnitBox] = useState([]);
  const [units, setUnits] = useState([]);
  const [dataTypeId, setDataTypeId] = useState("");
  const [finalResponse, setFinalResponse] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const [editInput, setEditInput] = useState({});
  const [selectedActivityType, setSelectedActivityType] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [amount, setAmount] = useState("");
  const [resetOption, setResetOption] = useState("");

  const classes = useStyles();

  useEffect(() => {
    setVehicleType([]);
    if (dataTypeId !== "") {
      fetch(
        ` ${process.env.REACT_APP_API}dijital-mentorluk-backend/public/api/fuel-type?data_type_id=${dataTypeId} `,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        response.json().then((data) => {
          setFuelTypes(data.data);
        });
      });
    }
    if (dataTypeId === 4) {
      setSelectedActivityType("distanceActivity");
    } else if (dataTypeId === 5) {
      setSelectedActivityType("fuelUse");
    }
  }, [dataTypeId, editInput]);

  useEffect(() => {
    setUnits([]);
    if (dataTypeId !== "") {
      fetch(
        ` ${process.env.REACT_APP_API}dijital-mentorluk-backend/public/api/unit?data_type_id=${dataTypeId} `,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
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
    if (unitBox.length > 0) {
      unitBox.map((item) => units.push(item.name));
    }
  }, [unitBox]);

  const submitHandler = (e) => {
    fetch(
      ` ${process.env.REACT_APP_API}dijital-mentorluk-backend/public/api/greenhouse-gas/mobile-combustion?activity_type=${selectedActivityType}&fuel_name=${selectedFuel}&amount=${amount}&unit=${selectedUnit}&vehicle_type=${selectedVehicle} `,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
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
      const id = editInput.id ? editInput.id : uuidv4();
      const preSubmmitedData = {
        id: id,
        ID: selectedId,
        dataTypeId: dataTypeId,
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

      if (submittedData.length > 0) {
        const toBeEdited = submittedData.find(
          (item) => item.id === preSubmmitedData.id
        );
        if (toBeEdited) {
          let foundIndex = submittedData.findIndex(
            (x) => x.id == toBeEdited.id
          );
          submittedData[foundIndex] = preSubmmitedData;
          const newData = [...submittedData];
          setSubmittedData(newData);
        } else {
          const newData = [...submittedData, preSubmmitedData];
          setSubmittedData(newData);
        }
      } else {
        const newData = [...submittedData, preSubmmitedData];
        setSubmittedData(newData);
      }
    }
  }, [finalResponse]);

  console.log("submittedData", submittedData);

  const ResetHandler = () => {
    setResetOption("");
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
  };

  useEffect(() => {
    if (Object.keys(editInput).length > 0) {
      setDataTypeId(editInput.dataTypeId);
      setSelectedId(editInput.ID);
      setSelectedYear(editInput.Year);
      setSelectedFuel(editInput.Fuel);
      setSelectedVehicle(editInput.vehicle);
      setSelectedActivityType(editInput.activity);
      setAmount(editInput.Amount);
      setSelectedUnit(editInput.unit);
    }
  }, [editInput]);

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
            <h3 className={classes.calculator__heading}>G??RD?? ALANI</h3>
            <p className={classes.calculator__paragraph}>
              L??tfen sal??n??m de??erlerini hesaplamak i??in a??a????daki alanlar??
              doldurun:
            </p>
            <div className={classes.calculator__selectBoxes}>
              <SelectBox
                label="Facility ID"
                data={facilityIDs}
                setValue={setSelectedId}
                selectedId={selectedId}
                resetOption={resetOption}
              />
              <SelectBox
                label="Year"
                data={years}
                setValue={setSelectedYear}
                selectedYear={selectedYear}
                resetOption={resetOption}
              />
              <SelectBox
                label="Activity Type"
                data={activityTypes}
                setDataTypeId={setDataTypeId}
                selectedActivityType={selectedActivityType}
                resetOption={resetOption}
              />
              <SelectBox
                label="Fule Source"
                data={fuelSource}
                setValue={setSelectedFuel}
                selectedFuel={selectedFuel}
                resetOption={resetOption}
              />
              <SelectBox
                label="Vehicle Type"
                data={vehicleType}
                setValue={setSelectedVehicle}
                selectedVehicle={selectedVehicle}
                resetOption={resetOption}
              />
              <TextBox
                label="Amount of Activity"
                units={units}
                setAmount={setAmount}
                amount={amount}
                setSelectedUnit={setSelectedUnit}
                selectedUnit={selectedUnit}
                resetOption={resetOption}
              />
            </div>
          </div>
          <div className={classes.calculator__results}>
            <h3 className={classes.calculator__heading}>SONU?? ALANI</h3>
            <p className={classes.calculator__paragraph}>
              Girdi Alan??'nda girdi??iniz de??erlere g??re sal??nan gaz miktarlar??
              a??a????daki gibidir:
            </p>
            <div className={classes.calculator__resultBoxes}>
              <ResultBox
                label="CO"
                sub="2"
                finalData={finalResponse.CO2}
                CO2={editInput.CO2}
              />
              <ResultBox
                label="CH"
                sub="4"
                finalData={finalResponse.CH4}
                CH4={editInput.CH4}
              />
              <ResultBox
                label="N"
                sub="2"
                second_label="O"
                finalData={finalResponse.N2O}
                CH4={editInput.N2O}
              />
              <ResultBox
                label="CO"
                sub="2"
                third_label="e"
                finalData={finalResponse.CO2e}
                CH4={editInput.CO2e}
              />
            </div>
            <div className={classes.calculator__buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.calculator__button}
                onClick={ResetHandler}
              >
                S??f??rla
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
