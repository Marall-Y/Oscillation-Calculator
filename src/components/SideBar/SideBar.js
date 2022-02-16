import React from "react";
import ProfileImage from "../../images/profile.jpeg";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
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
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Eğitimler" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list__item}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Analiz" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.list__item}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Raporlar" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
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
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Yetkilendirme" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Şifremi Değiştir" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Gizlilik Politikası
"
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default SideBar;
