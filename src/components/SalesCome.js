import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  heroTextContainer: {
    minWidth: "21.5em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  hero_list: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    color: "white",
    marginBottom: 40,
  },
  hero_title: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "54px",
    color: "white",
    marginBottom: 30,
  },
  hero_apy: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    color: "white",
    marginBottom: 30,
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: "30em",
    // },
  },
}));

const SalesCome = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="row" spacing={3}>
      <Grid sm={12} md={12} lg={6} item className={classes.heroTextContainer}>
        <Typography variant="h1" align="left" className={classes.hero_title}>
          As sales come in on different days, the protocols you have exposure to
          increases. This further diversifies the fund and lowers risk.
        </Typography>
        <Grid item>
          <Typography variant="h1" align="left" className={classes.hero_list}>
            Every secondary NFT sale incurs a 10% royalty, which is added to the
            staking pool. This means your rewards compound with every 3rd party
            NFT sale in the future.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1" align="left" className={classes.hero_apy}>
            ⦿ <span style={{ textDecoration: "underline" }}>Current APY</span>:
            42.03%
          </Typography>
        </Grid>
      </Grid>
      <Grid sm={12} md={12} lg={6} item className={classes.animation}>
        <img src="/sales_come.png" width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default SalesCome;
