import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Character from "../../images/character.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import useStyles from "./Style";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__icon}>
          <NotificationsNoneIcon fontSize="small" />
        </div>
        <div className={classes.header__character}>
          <img src={Character} className={classes.header__image} />
          <p className={classes.header__caption}>Dijital Mentor</p>
          <KeyboardArrowDownIcon
            style={{ margin: "4.5rem 0 0 0.5rem" }}
            fontSize="small"
          />
        </div>
        <div className={classes.header__message}>
          <p>
            <span className={classes.message__title}>Merhaba Murat Bey</span>
            <br />
            <span className={classes.message__content}>
              Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu
              alana tıklayarak rapora erişim sağlayabiliriniz.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
