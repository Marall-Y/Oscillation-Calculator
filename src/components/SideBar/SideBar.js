import React from "react";
import ProfileImage from "../../images/profile.jpeg";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CreateIcon from "@material-ui/icons/Create";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PersonIcon from "@material-ui/icons/Person";
import DesktopAccessDisabledIcon from "@material-ui/icons/DesktopAccessDisabled";
import SecurityIcon from "@material-ui/icons/Security";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PollIcon from "@material-ui/icons/Poll";
import Logo from "../../images/logo.png";
import useStyles from "./Style";

const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.profileBox}>
        <div className={classes.profile}>
          <figure className={classes.profile__shape}>
            <img
              src={ProfileImage}
              alt="profile picture"
              className={classes.profile__image}
            />
          </figure>
          <p className={classes.name}>Murat Turan</p>
          <p className={classes.job}>Tedarik Zinciri Yöneticisi</p>
        </div>
      </div>
      <div className={classes.navigation}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.nested}
            >
              MENÜ
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button>
            <ListItemIcon className={classes.list__item}>
              <CastForEducationIcon />
            </ListItemIcon>
            <ListItemText primary="Eğitimler" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list__item}>
              <PollIcon />
            </ListItemIcon>
            <ListItemText primary="Analiz" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list__item}>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Raporlar" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="TİM’e Yaz" />
          </ListItem>
        </List>

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.nested}
            >
              TERCİHLER
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button>
            <ListItemIcon>
              <DesktopAccessDisabledIcon />
            </ListItemIcon>
            <ListItemText primary="Yetkilendirme" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="Şifremi Değiştir" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText
              primary="Gizlilik Politikası
"
            />
          </ListItem>
        </List>
        <div className={classes.logo__box}>
          <img src={Logo} className={classes.logo} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
