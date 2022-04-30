import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Subscribe from "../components/Subscribe";

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: "#07071C",
    width: "100%",
    zIndex: 1302,
    position: "relative", // need to set it up explicitly for zIndex to work
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContaner: {
    // paddingTop: 117,
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
  footer_title: {
    fontWeight: 700,
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Titillium Web",
    fontStyle: "normal",
  },
  footer_text: {
    fontSize: 16,
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    color: "white",
  },
  divider: {
    background: "#25407B",
    width: "100%",
    height: 1,
    margin: "3em",
  },
  gridItemFooter: {
    marginLeft: "3rem",
    marginRight: "3rem",
    marginBottom: "3rem",
    color: "white",
    fontFamily: "Titillium Web",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContaner}>
        {/* Column 1 */}

        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={3}
          item
          className={classes.gridItem}
          style={{ maxWidth: 500 }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.footer_logo}>
              <img src="/footer_logo.png" width="100%" />
            </Grid>
            <Grid item className={classes.footer_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              tristique placerat eleifend aliquam pellentesque facilisis
              ultrices. Imperdiet mus urna egestas at tellus.
            </Grid>
          </Grid>
        </Grid>
        {/* Column 2 */}
        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={3}
          item
          className={classes.gridItem}
          style={{ maxWidth: 210 }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.footer_title}>
              Get Alerts For
            </Grid>
            <Grid item className={classes.footer_text}>
              NFT pre-sales
            </Grid>
            <Grid item className={classes.footer_text}>
              Altcoin Price Alerts
            </Grid>
            <Grid item className={classes.footer_text}>
              Undervalued Altcoin of the day
            </Grid>
            <Grid item className={classes.footer_text}>
              Altcoin 'need to know' news
            </Grid>
            <Grid item className={classes.footer_text}>
              Rewards payment notices
            </Grid>
          </Grid>
        </Grid>
        {/* Column 3 */}
        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={3}
          item
          className={classes.gridItem}
          style={{ maxWidth: 210 }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.footer_title}>
              Community
            </Grid>
            <Grid item className={classes.footer_text}>
              Terms of Service
            </Grid>
            <Grid item className={classes.footer_text}>
              Vision
            </Grid>
            <Grid item className={classes.footer_text}>
              Earnings disclaimer
            </Grid>
            <Grid item className={classes.footer_text}>
              Privacy Policy
            </Grid>
          </Grid>
        </Grid>
        {/* Column 4 */}
        <Grid
          xs={12}
          sm={6}
          md={6}
          lg={3}
          item
          className={classes.gridItem}
          style={{ maxWidth: 210 }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.footer_title}>
              Social Media
            </Grid>
            <Grid item className={classes.footer_text}>
              Twitter
            </Grid>
            <Grid item className={classes.footer_text}>
              Facebook
            </Grid>
            <Grid item className={classes.footer_text}>
              Discord
            </Grid>
            <Grid item className={classes.footer_text}>
              YouTube
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(4)}
              href="/about"
              className={classes.link}
            >
              Whitepaper
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item className={classes.divider}></Grid>
      </Grid>
      <Grid container justify="space-between" direction="row">
        <Grid item className={classes.gridItemFooter}>
          <Grid container>
            <Grid item>Privacy Policy</Grid>
            <Grid item style={{ marginLeft: 40 }}>
              Terms and Conditions
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItemFooter}>
          Copyright AltcoinStaking
        </Grid>
      </Grid>
    </footer>
  );
}
