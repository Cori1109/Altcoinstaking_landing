import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  heroTextContainer: {
    minWidth: "21.5em",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  hero_list: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
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
  buyNowButton: {
    borderRadius: 10,
    width: 180,
    height: 61,
    marginRight: 40,
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 18,
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  getStartedButton: {
    background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
    borderRadius: 10,
    width: 180,
    height: 61,
    marginRight: 40,
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 18,
    color: "white",
    marginRight: 30,
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    margin: "10px",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
    display: "flex",
    justifyContent: "center",
  },
  item_text: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20,
    color: "white",
    marginLeft: 30,
  },
  itemBlock: {
    width: "80%",
    height: 100,
    background: "rgba(37, 64, 123,0.2)",
    borderRadius: 10,
    marginBottom: 30,
    "&:hover": {
      background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
    },
    display: "flex",
    alignItems: "center",
  },
}));

const HowItWorks = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" direction="row">
      <Grid sm={12} md={12} lg={6} item className={classes.animation}>
        <img src="/how_it_works.png" width="100%" />
      </Grid>
      <Grid sm={12} md={12} lg={6} item className={classes.heroTextContainer}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item style={{ width: "100%" }}>
            <Typography
              variant="h1"
              align="left"
              className={classes.hero_title}
            >
              How It Works
            </Typography>
          </Grid>
          <Grid item className={classes.itemBlock}>
            <Typography variant="h5" align="left" className={classes.item_text}>
              00% of NFT sales revenue goes to staking pool
            </Typography>
          </Grid>
          <Grid item className={classes.itemBlock}>
            <Typography variant="h5" align="left" className={classes.item_text}>
              Smart contracts determine best coin & pool to stake
            </Typography>
          </Grid>
          <Grid item className={classes.itemBlock}>
            <Typography variant="h5" align="left" className={classes.item_text}>
              90% of staking rewards are paid to NFT holders monthly
            </Typography>
          </Grid>
          <Grid item className={classes.itemBlock}>
            <Typography variant="h5" align="left" className={classes.item_text}>
              10% of staking rewards go to marketing & the team
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowItWorks;
