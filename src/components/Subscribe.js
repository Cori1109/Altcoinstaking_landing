import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  itemHodlrTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "54px",
    color: "white",
    marginBottom: "8rem",
  },
  blockContainer: {
    // width: '80%',
    // height: 456,
    borderRadius: 10,
    background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
    paddingBottom: 50,
  },
  blockTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 54,
    color: "white",
  },
  itemTitle: {
    // marginLeft: 128,
    // marginRight: 128,
    marginTop: 80,
    zIndex: 10,
  },
  itemContent: {
    marginTop: 24,
    // marginLeft: 252,
    // marginRight: 252,
    fontSize: 16,
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    color: "white",
  },
  itemStar1: {
    zIndex: 5,
    position: "absolute",
    // width: '80%',
    marginLeft: "-80%",
    marginTop: -85,
  },
  itemStar2: {
    zIndex: 6,
    position: "absolute",
    // width: '80%',
    marginLeft: "-75%",
    marginTop: 55,
  },
  itemStar3: {
    zIndex: 7,
    position: "absolute",
    // width: 1320,
    marginLeft: "-85%",
    marginTop: 80,
  },
  itemBody: {
    height: "100%",
    width: "100%",
    zIndex: 20,
  },
  subscribeBtn: {
    background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
    borderRadius: 10,
    width: 180,
    height: 61,
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 18,
    color: "white",
    marginLeft: 30,
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  itemFooter: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    // "& .MuiOutlinedInput-root": {
    //   borderRadius: 8,
    // },
    "& .MuiInputBase-input": {
      color: "white",
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transpared'
    }
  },
  suscribeField: {
    background: "#01204C",
    borderRadius: 8,
  },
}));

const Subscribe = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        style={{
          marginLeft: 50,
          marginRight: 50,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid
          container
          className={classes.blockContainer}
          direction="column"
          alignItems="center"
        >
          <Grid item className={classes.itemStar1}>
            <img src="/yellow_star.png" />
          </Grid>
          <Grid item className={classes.itemStar2}>
            <img src="/black_star1.png" />
          </Grid>
          <Grid item className={classes.itemStar3}>
            <img src="/black_star2.png" />
          </Grid>
          <Grid item className={classes.itemBody}>
            <Grid
              container
              direction="column"
              style={{ height: "100%" }}
              alignItems="center"
            >
              <Grid item className={classes.itemTitle}>
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.blockTitle}
                >
                  'Get yours today before this NFT collection is entirely sold
                  out. Max 10,000 mint'
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item className={classes.itemContent}>
                    <Typography
                      variant="h5"
                      align="center"
                      className={classes.blockContent}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor
                    </Typography>
                  </Grid>
                  <Grid item className={classes.itemFooter}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      className={classes.suscribeField}
                    />
                    <Button
                      className={classes.subscribeBtn}
                      variant="contained"
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
