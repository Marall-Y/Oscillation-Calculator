import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: "#E5E5E5",
  },
  content_inner: {
    backgroundColor: "#ffffff",
    borderRadius: "0.3rem",
    width: "100%",
  },
  content_header: {
    backgroundColor: " #0D1840",
    borderRadius: "0.3rem 0.3rem 1.4rem 1.4rem",
    color: "#ffffff",
  },
  content__paragraph: {
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "0.81rem",
    padding: "0.2rem 0.7rem",
  },
  content__heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(-1rem)",
  },
  content__heading1: {
    width: "2.5rem",
    height: "2.5rem",
    transform: "translateY(-0.3rem)",
    marginRight: "0.5rem",
  },
  content__heading2: {
    fontSize: "1rem",
    margin: "0.5rem",
    fontFamily: "Roboto",
    fontWeight: "100",
    textTransform: "uppercase",
    letterSpacing: ".1rem",
  },
  content_calculator: {
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  calculator__heading: {
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: "600",
    marginBottom: "0.5rem",
    borderBottom: " 1px solid #D0D0D0",
    display: "inline-block",
    padding: "0 3rem 0.5rem 0",
  },
  calculator__paragraph: {
    fontSize: "0.75rem",
    fontFamily: "Roboto",
    fontWeight: "300",
  },
  calculator__selectBoxes: {
    marginTop: "3rem",
  },
  calculator__resultBoxes: {
    marginTop: "4rem",
  },
  calculator__buttons: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "1.5rem",
  },
  calculator__button: {
    marginRight: "1rem",
    backgroundColor: " #0D1840",
    boxShadow: "0px 7.21px 16.42px -4.74px rgba(39, 76, 119, 0.16)",
    borderRadius: "0.8125rem",
    width: "7.8rem",
    fontFamily: "Roboto",
    fontSize: "0.8rem",
  },
}));

export default useStyles;
