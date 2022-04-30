import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CallToAction from "../src/ui/CallToAction";

import animationData from "../src/animations/landinganimation/data";

import Hodlr from "../src/components/Hodlr";
import Logos from "../src/components/Logos";
import Hero from "../src/components/Hero";
import WhyStaking from "../src/components/WhyStaking";
import HowItWorks from "../src/components/HowItWorks";
import SalesCome from "../src/components/SalesCome";
import CustomerSays from "../src/components/CustomerSays";
import HowToBuy from "../src/components/HowToBuy";
import OurRoadmap from "../src/components/OurRoadmap";
import Subscribe from "../src/components/Subscribe";
import Footer from "../src/ui/Footer";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9em",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    backgroundImage: "url(/background.png)",
    backgroundColor: "#07071c",
    backgroundSize: "contain",
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 50,
      paddingRight: 50,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 10,
      paddingRight: 10,
    },

    // paddingLeft: "13rem",
    // paddingRight: "13rem",
    // paddingTop: "5rem",
    // paddingBottom: "5rem",
  },

  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  mainMargin: {
    // paddingLeft: "auto",
    // paddingRight: "auto",
    // paddingTop: "5rem",
    // paddingBottom: "5rem",
    marginTop: 50,
    marginBottom: 50,
    width: "100%",
  },
  customerStar: {
    zIndex: 3,
    position: "absolute",
    marginTop: -15,
    marginLeft: -120,
  },
  hero: {
    // maxHeight: 808,
    // paddingLeft: "13rem",
    // paddingRight: "13rem",
    // paddingTop: "5rem",
    // paddingBottom: "5rem",
    position: "relative",
    content: "' '",
    display: "block",
    left: 0,
    top: 0,
    width: "100%",
    height: "150%",
    backgroundImage: "url(/hero_background.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  //   Copied this from github docs
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Software Design and Development - mobile - websites | Demo
        </title>
        <meta
          name="description"
          key="description"
          content="Top notch custom software design and development with a free estimate. Optimize your business and scale your project anytime"
        />
        <meta
          property="og:title"
          content="Bringin West Coast Technology to the Midwest | Demo Arc Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="/" />
        <link rel="canonical" key="canonical" href="/" />
      </Head>
      <Grid item className={classes.mainMargin}>
        {/*-----Hero Block-----*/}
        <Hero />
      </Grid>
      <Grid item className={classes.mainMargin}>
        {/** ---------Banner Block---------- */}
        <Logos />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <Hodlr />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <WhyStaking />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <HowItWorks />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <SalesCome />
      </Grid>
      <Grid item className={classes.mainMargin}>
        {/* <CustomerSays /> */}
      </Grid>
      <Grid item className={classes.mainMargin}>
        <OurRoadmap />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <HowToBuy />
      </Grid>
      <Grid item className={classes.mainMargin}>
        <Subscribe />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
