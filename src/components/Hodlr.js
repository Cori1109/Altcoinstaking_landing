import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import HodlrBlock from "./hodlrBlock";
const useStyles = makeStyles((theme) => ({
  itemHodlrTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "54px",
    color: "white",
    marginBottom: "8rem",
    textAlign: "center",
  },
}));

const Hodlr = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.itemHodlrTitle}>
        Some reasons hodlr’s love us
      </Grid>
      <Grid item>
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "90px 5px 5px",
            }}
          >
            <HodlrBlock
              path="/hodlr/flat.png"
              title="Safe passive income"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "90px 5px 5px",
            }}
          >
            <HodlrBlock
              path="/hodlr/calender.png"
              title="Fully sustainable from day 1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "90px 5px 5px",
            }}
          >
            <HodlrBlock
              path="/hodlr/medal.png"
              title="Built in compound reward systems"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "90px 5px 5px",
            }}
          >
            <HodlrBlock
              path="/hodlr/arrow.png"
              title="Ever increasing underlying treasury value"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hodlr;
