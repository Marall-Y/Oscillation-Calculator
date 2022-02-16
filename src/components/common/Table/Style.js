import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    borderRadius: "1.25rem",
    "& .MuiTableCell-root": {
      border: "1px solid #0D1840",
      padding: "0.7prem",
    },
    "& .MuiTableCell-head": {
      color: "#FFFFFF",
    },
    "& .MuiButton-root": {
      backgroundColor: "#0D1840",
      borderRadius: "0.375rem",
      width: "5.3rem",
      height: "1.25rem",
      fontFamily: "Roboto",
      fontSize: "0.68rem",
      marginBottom: "0.2rem",
      color: "#fff",
    },
  },
  table__header: {
    backgroundColor: " #0D1840",
    borderRadius: "1.25rem",
  },
  calculator__button: {
    backgroundColor: "#0D1840",
    borderRadius: "0.375rem",
    width: "5.3rem",
    height: "1.25rem",
    fontFamily: "Roboto",
    fontSize: "0.68rem",
    marginBottom: "0.2rem",
  },
}));

export default useStyles;
