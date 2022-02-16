import React from "react";
import Apple from "../../images/apple.png";
import SelectBox from "../common/SelectBox/SelectBox";
import ResultBox from "../common/ResultBox/ResultBox";
import Button from "@material-ui/core/Button";
import useStyles from "./Style";

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.content_inner}>
        <div className={classes.content_header}>
          <p className={classes.content__paragraph}>Scope 1</p>
          <div className={classes.content__heading}>
            <img src={Apple} className={classes.content__heading1} />
            <h2 className={classes.content__heading2}>Mobile Combustion</h2>
          </div>
        </div>
        <div className={classes.content_calculator}>
          <div className={classes.content_inputs}>
            <h3 className={classes.calculator__heading}>GİRDİ ALANI</h3>
            <p className={classes.calculator__paragraph}>
              Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
              doldurun:
            </p>
            <div className={classes.calculator__selectBoxes}>
              <SelectBox label="Facility ID" />
              <SelectBox label="Year" />
              <SelectBox label="Activity Type" />
              <SelectBox label="Foul Source" />
              <SelectBox label="Vehicle Type" />
              <SelectBox label="Amount of Activity" />
            </div>
          </div>
          <div className={classes.calculator__results}>
            <h3 className={classes.calculator__heading}>SONUÇ ALANI</h3>
            <p className={classes.calculator__paragraph}>
              Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları
              aşağıdaki gibidir:
            </p>
            <div className={classes.calculator__resultBoxes}>
              <ResultBox label="CO" sub="2" />
              <ResultBox label="CH" sub="4" />
              <ResultBox label="N" sub="2" second_label="2" />
              <ResultBox label="CO" sub="2" />
            </div>
            <div className={classes.calculator__buttons}>
              <Button
                variant="contained"
                color="primary"
                className={classes.calculator__button}
              >
                Sıfırla
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.calculator__button}
              >
                Kaydet
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.content_results}></div>
      </div>
    </div>
  );
};

export default Content;
