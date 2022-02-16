import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  row: {
    maxWidth: "50rem",
    position: "relative",
    zIndex: 1,
    padding: "0 0 0.4rem 1rem",
    borderLeft: "1px solid #D0D0D0",
  },

  "&:before": {
    position: "absolute",
    content: "",
    display: "block",
    top: 0,
    left: "-312.5rem",
    height: "100%",
    width: "312.5rem",
    zIndex: "-1",
    background: "inherit",
  },
  span: {
    position: "relative",
    display: "inline-block",
  },
  basic_slide: {
    display: "inline-block",
    width: "13.43rem",
    padding: "0.625rem 0 0.625rem 0.9375rem",
    fontFamily: "Open Sans",
    fontWeight: "400",
    color: " #377D6A",
    background: "#ffffff",
    border: "1px solid #0D1840",
    boxShadow: "0 7.21px 16.42px -4.74px rgba(39, 76, 119, 0.16)",
    borderRadius: "1.375rem ",
    outline: 0,
    textIndent: "4.375rem",
    margin: "0.6rem 0",
  },
  label: {
    display: "inline - block",
    position: "absolute",
    top: 0,
    left: 0,
    padding: "0.54rem",
    textShadow: "0 1px 0 rgba(19, 74, 70, 0.4)",
    background: " #0D1840",
    borderTopLeftRadius: "1.375rem",
    borderBottomLeftRadius: "1.375rem",
    color: "#ffffff",
    fontFamily: "Roboto",
    fontWeight: 300,
    fontSize: "0.81rem",
    margin: "0.6rem 0",
  },
}));

export default useStyles;
