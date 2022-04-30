import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
    // width: 932.34,
    // height: 356.48,
    padding: 50,
    borderRadius: 10,
    background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
  },
  blockTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 22,
    color: "white",
  },
  blockContent: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 22,
    color: "white",
  },
  blockFooter: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    color: "white",
  },
  itemTitle: {
    // width: 727,
  },
  itemFooter: {
    marginBottom: 33,
  },
  itemContent: {
    marginBottom: 11,
  },
  itemImage: {
    position: "absolute",
    zIndex: 10,
    marginTop: -100,
  },
  itemCardBack: {
    zIndex: 5,
    position: "absolute",
    width: "100%",
    // width: 932.34,
    opacity: 0.2,
  },
  itemBody: {
    marginTop: 100,
    height: "100%",
    zIndex: 20,
  },
  btnSlider: {
    width: 64,
    height: 64,
    borderRadius: 10,
    "&:hover": {
      background: "linear-gradient(95.31deg, #006EC3 0%, #0016B2 100%)",
    },
    background: "#384F71",
    color: 'white'
  },
  itemButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    zIndex: 20,
    marginTop: 50,
    marginBottom: 50
  },
}));

const CustomerSays = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item className={classes.itemHodlrTitle}>
        What Our Customer says
      </Grid>
      <Grid item style={{ width: "100%" }}>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid item xs={2} sm={2} md={2} className={classes.itemButton}>
            <Button className={classes.btnSlider}>
              <ArrowBackIcon color="white"/>
            </Button>
          </Grid>
          <Grid xs={8} sm={8} md={8} item >
            <Grid
              container
              className={classes.blockContainer}
              direction="column"
              alignItems="center"
            >
              <Grid item className={classes.itemImage}>
                <img src="/customer/customer_avatar.png" />
              </Grid>
              <Grid item className={classes.itemCardBack}>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    <img src="/customer/customer_back1.png" />
                  </Grid>
                  <Grid item>
                    <img src="/customer/customer_back2.png" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.itemBody}>
                <Grid
                  container
                  direction="column"
                  style={{ height: "100%" }}
                  justify="space-between"
                >
                  <Grid item className={classes.itemTitle}>
                    <Typography
                      variant="h4"
                      align="center"
                      className={classes.blockTitle}
                    >
                      Tanahair is the friendliest and most efficient company I
                      have ever used. The whole thing takes time to introduce
                      the product and as a result puts forward only the best
                      opportunities that really suit you. they help from start
                      to finish to create a great product identity for your
                      company
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
                          Shalima Hayden
                        </Typography>
                      </Grid>
                      <Grid item className={classes.itemFooter}>
                        <Typography
                          variant="h5"
                          align="center"
                          className={classes.blockFooter}
                        >
                          Product Designer
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={2} sm={2} md={2} item className={classes.itemButton}>
            <Button className={classes.btnSlider} >
              <ArrowForwardIcon/>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomerSays;
