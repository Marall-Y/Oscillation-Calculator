import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#E5E5E5",
    marginBottom: "0.6rem",
  },
  header__content: {
    backgroundColor: "#ffffff",
    borderRadius: "0.3rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-even",
  },
  header__icon: {
    fontSize: "0.78rem",
    padding: "0.5rem",
  },
  header__character: {
    padding: "0.5rem",
    display: "flex",
  },
  header__image: {
    width: "4.6rem",
  },
  header__caption: {
    padding: "4.5rem 0 0 0.5rem",
    margin: 0,
    fontSize: "0.81rem",
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  header__message: {
    padding: "0.5rem 1rem",
    flex: "2",
  },
  message__title: {
    fontWeight: "Robot",
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: "0.9rem",
  },
  message__content: {
    fontWeight: "Robot",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: "0.8rem",
  },
}));

export default useStyles;
