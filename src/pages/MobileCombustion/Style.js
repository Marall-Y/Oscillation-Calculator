import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
  },
  rightside: {
    flex: 5,
    padding: "0 0.5rem 0.5rem 0.5rem",
    display: "flex",
    flexDirection: "column",
  },
}));

export default useStyles;
