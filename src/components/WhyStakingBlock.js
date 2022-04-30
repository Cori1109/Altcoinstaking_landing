import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    width: 330,
    height: 300,
    borderRadius: 10,
    "&:hover": {
      background: "rgba(37, 64, 123, 0.1)",
      border: "3px solid rgba(0, 110, 195, 1)",
    },
  },
  blockTitle: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 22,
    color: "white",
  },
  itemTitle: {},
  blockContent: {
    fontFamily: "Titillium Web",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    color: "white",
  },
  itemContent: {
    marginBottom: 30,
  },
  itemImage: {
    position: "absolute",
    zIndex: 10,
  },
  itemBody: {
    marginTop: 178,
    height: "100%",
  },
}));

const WhyStakingBlock = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.blockContainer}
      direction="column"
      alignItems="center"
    >
      <Grid item className={classes.itemImage}>
        <img src={props.path} />
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
              {props.title}
            </Typography>
          </Grid>
          <Grid item className={classes.itemContent}>
            <Typography
              variant="h5"
              align="center"
              className={classes.blockContent}
            >
              {props.content}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

WhyStakingBlock.propTypes = {
  path: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default WhyStakingBlock;
