import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    fontFamily: "Roboto",
    fontSize: "0.9375rem",
  },
  custom_select: {
    position: "relative",
    display: "block",
    maxWidth: "18rem",
    minWidth: "5rem",
    margin: "0.6rem 0",
    border: "1px solid #0D1840",
    borderRadius: "0.5rem 0.5rem 2.18rem 0.5rem",
    backgroundColor: "#FFFFFF",
    zIndex: "10",
    position: "relative",
  },
  select_options: {
    border: "none",
    outline: "none",
    background: "transparent",
    appearance: "none",
    borderRadius: 0,
    margin: 0,
    display: "block",
    width: "100%",
    padding: "7px 50px 10px 10px",
    color: "#7E7E7E",
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "0.75rem",
  },

  select_option: {
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "0.8rem",
    padding: "0.7rem",
    color: "#0D1840",
  },
  select_icon: {
    position: "absolute",
    top: "0.2rem",
    right: "0.2rem",
    width: "1rem",
    height: "1rem",
    pointer: "cursor",
  },
}));

export default useStyles;
