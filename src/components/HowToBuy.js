import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  heroTextContainer: {
    // minWidth: "21.5em",
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
    lineHeight: 2.5,
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
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  whiteStar: {
    position: "absolute",
    zIndex: 10,
    marginRight: -100,
  },
}));

const HowToBuy = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="row"
      spacing={3}
    >
      <Grid sm={12} md={4} item className={classes.heroTextContainer}>
        <Grid container justify="center">
          <Grid item>
            <Typography
              variant="h1"
              align="left"
              className={classes.hero_title}
            >
              How To Buy
            </Typography>
            <Grid item>
              <Typography
                variant="h1"
                align="left"
                className={classes.hero_list}
              >
                ⦿ Download MetaMask
                <br />
                ⦿ Connect MetaMask
                <br />
                ⦿ Buy MATIC
                <br />
                ⦿ Mint NFT
                <br />
                ⦿ Claim Rewards
                <br />
              </Typography>
            </Grid>
            <Grid container className={classes.buttonContainer}>
              <Grid item>
                <Button
                  href="/estimate"
                  className={classes.getStartedButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}
                >
                  Buy Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid sm={12} md={8} item className={classes.animation}>
        <Grid container direction="column" justify="flex-end">
          <Grid item className={classes.backImage}>
            <img src="/how_to_buy_back.png" width={"100%"} />
          </Grid>
          <Grid item className={classes.whiteStar}>
            <img src="/white_star.png" width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowToBuy;
