import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/Content/Content";
import useStyles from "./Style";

const MobileCombustion = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <SideBar />
      <div className={classes.rightside}>
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default MobileCombustion;
