import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./Style";
import { Button } from "@material-ui/core";

const TableBox = ({ submittedData, setSubmittedData, setEditInput }) => {
  const classes = useStyles();

  const deleteHandler = (id) => {
    const newSubmitted = submittedData.filter((option) => option.id !== id);
    setSubmittedData(newSubmitted);
  };

  const editHandler = (item) => {
    setEditInput(item);
  };

  console.log("submitted", submittedData);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.table__header}>
            <TableRow className={classes.table__headerRow}>
              <TableCell align="center">Facilty ID</TableCell>
              <TableCell align="center">Year</TableCell>
              <TableCell align="center">Fuel</TableCell>
              <TableCell align="center">Amount of Fuel</TableCell>
              <TableCell align="center">Units</TableCell>
              <TableCell align="center">
                CO<sub>2</sub>
              </TableCell>
              <TableCell align="center">
                CH<sub>4</sub>
              </TableCell>
              <TableCell align="center">
                N<sub>2</sub>O
              </TableCell>
              <TableCell align="center">
                CO<sub>2</sub>e
              </TableCell>

              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {submittedData.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.ID}
                  </TableCell>
                  <TableCell align="center">{item.Year}</TableCell>
                  <TableCell align="center">{item.Fuel}</TableCell>
                  <TableCell align="center">{item.Amount}</TableCell>
                  <TableCell align="center">{item.unit}</TableCell>
                  <TableCell align="center">{item.CO2}</TableCell>
                  <TableCell align="center">{item.CH4}</TableCell>
                  <TableCell align="center">{item.N2O}</TableCell>
                  <TableCell align="center">{item.CO2e}</TableCell>
                  <TableCell align="center">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Button
                        variant="contained"
                        className={classes.calculator__button}
                        onClick={() => deleteHandler(item.id)}
                      >
                        Sil
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.calculator__button}
                        onClick={() => editHandler(item)}
                      >
                        D??zenle
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableBox;
