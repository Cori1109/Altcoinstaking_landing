import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  heroTextContainer: {
    minWidth: "21.5em",
    marginRight: 30,
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
    fontSize: "44px",
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
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  hero_back: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
    },
  },
}));

const Hero = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container>
          <Grid item>
            <img
              alt="company logo"
              src="/header_logo.png"
              style={{ width: "90vw", maxWidth: "350px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="row"
          spacing={3}
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography
              variant="h1"
              align="left"
              className={classes.hero_title}
            >
              Get a 'Stake in pool' NFT & Own Part of a Cross- Chain Staking
              Pool
            </Typography>
            <Grid item>
              <Typography
                variant="h1"
                align="left"
                className={classes.hero_list}
              >
                ⦿ Receive 4 ‘Ethereum killers’ monthly
                <br />
                ⦿ Earn interest in SOL, AVAX, FTM, MATIC & USDC
                <br />
                ⦿ Automatic Compounding
                <br />
                ⦿ Current APY: 42.03%
                <br />
              </Typography>
            </Grid>
            <Grid container className={classes.buttonContainer} spacing={2}>
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  className={classes.getStartedButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}
                >
                  Get Started
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  className={classes.buyNowButton}
                  onClick={() => props.setValue(2)}
                >
                  Buy Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <img className={classes.hero_back} src="/hero_back.png" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
