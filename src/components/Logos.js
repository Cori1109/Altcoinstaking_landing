import React from "react";
import Grid from "@material-ui/core/Grid";

const Logos = () => {
  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Grid item sm={6} md={4} lg={2}>
        <img src="/banner/featuredin.png" />
      </Grid>
      <Grid item sm={6} md={4} lg={2}>
        <img src="/banner/cointelegraph.png" />
      </Grid>
      <Grid item sm={6} md={4} lg={2}>
        <img src="/banner/msn.png" />
      </Grid>
      <Grid item sm={6} md={4} lg={2}>
        <img src="/banner/yahoo.png" />
      </Grid>
      <Grid item sm={6} md={4} lg={2}>
        <img src="/banner/cnn.png" />
      </Grid>
      <Grid item sm={6} md={4} lg={2}>
        <img src="/banner/miami.png" />
      </Grid>
    </Grid>
  );
};

export default Logos;
