import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  itemRoadmapTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "54px",
    color: "white",
    marginBottom: "8rem",
  },
}));

const OurRoadmap = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.itemRoadmapTitle}>
        Our Roadmap
      </Grid>
      <Grid item >
        <img src="/our_roadmap.png" width={'100%'}/>
      </Grid>
    </Grid>
  );
};

export default OurRoadmap;
