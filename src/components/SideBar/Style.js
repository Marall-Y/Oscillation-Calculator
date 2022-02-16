import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    flex: 1,
  },
  profileBox: {
    backgroundColor: "#0D1840",
    padding: "0.5rem",
    height: "15rem",
    position: "relative",
    textAlign: "center",
  },
  profile: {
    position: "absolute",
    color: "#ffffff",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  profile__shape: {
    width: "5.5rem",
    height: "5rem",
  },
  profile__image: {
    clipPath: "circle(50% at 50% 50%)",
    marginBottom: "1rem",
    height: "100%",
    width: "100%",
  },
  name: {
    fontSize: "0.81rem",
    margin: "0 0 0.5rem 0",
    fontFamily: "Montserrat",
    fontWeight: "700",
  },
  job: {
    fontSize: "0.5rem",
    fontWeight: "400",
    marginBottom: "0 0 0.5rem 0",
    letterSpacing: "0.1rem",
  },
  navigation: {
    backgroundColor: "#ffffff",
    padding: "0.5rem",
  },
  root: {
    width: "100%",
    maxWidth: "360",

    "&:not:lastChild": {
      marginBottom: "0.5rem",
    },

    "& .MuiSvgIcon-root": {
      fontSize: "0.68rem ",
    },

    "& .MuiTypography-body1": {
      fontSize: "0.68rem ",
      fontFamily: "Robot",
      fontWeight: "600",
    },
    "& .MuiListSubheader-sticky": {
      position: "unset",
    },

    "& .MuiListItemIcon-root": {
      minWidth: "1.56rem",
    },
  },
  nested: {
    fontSize: "0.87rem",
  },
  logo: {
    width: "5.81rem",
  },
  logo__box: {
    textAlign: "center",
    marginTop: "1.5rem",
  },
}));

export default useStyles;
