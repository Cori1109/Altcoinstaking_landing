import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import WhyStakingBlock from "./WhyStakingBlock";

const useStyles = makeStyles((theme) => ({
  itemTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "54px",
    color: "white",
  },
  itemText: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    color: "white",
  },
}));

const WhyStaking = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" align="left" className={classes.itemTitle}>
              Why Staking with us is better
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" align="left" className={classes.itemText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              odio tincidunt auctor tortor suscipit neque, sagittis. Feugiat
              eget lorem integer fermentum. Ornare enim aliquet orci placerat
              vivamus. Quis risus non pellentesque.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ width: "100%", marginTop: 50 }}>
        <Grid container alignItems="center" justify="center">
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <WhyStakingBlock
              path="/whystaking/risk.png"
              title="Safe passive income"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <WhyStakingBlock
              path="/whystaking/compounding.png"
              title="Fully sustainable from day 1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <WhyStakingBlock
              path="/whystaking/increase_yield.png"
              title="Built in compound reward systems"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            lg={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <WhyStakingBlock
              path="/whystaking/diversification.png"
              title="Ever increasing underlying treasury value"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id metus enim neque."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhyStaking;
