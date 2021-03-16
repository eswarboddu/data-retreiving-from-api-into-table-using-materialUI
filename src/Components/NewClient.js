import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import Box from '@material-ui/core/Box';

const NewClient = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heading} >
      NEW CLIENT
      </div>
      <Box mx={15}>
      <form className={classes.form} justify="center">
        <Grid item xs={12} sm={12} style={{marginLeft: 15}}>
          <TextField
            required
            fullWidth
            size="small"
            id="outlined-required"
            label="Client Name"
            variant="outlined"
          />
        </Grid>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              required
              fullWidth
              size="small"
              id="outlined-required"
              label="Email Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              size="small"
              id="outlined-required"
              label="Work Phone Number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              id="outlined-required"
              fullWidth
              size="small"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-required"
              fullWidth
              size="small"
              label="Personal Phone Number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              id="outlined-required"
              fullWidth
              size="small"
              label="Point of Contact"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-required"
              fullWidth
              size="small"
              label="Fax"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              id="outlined-required"
              fullWidth
              size="small"
              label="Industry"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-required"
              fullWidth
              size="small"
              label="Contract"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end" justify="space-between">
          <Grid item>
            <LanguageIcon />
          </Grid>
          <Grid item xs={9} sm={5}>
            <TextField id="input-with-icon-grid" fullWidth label="Website" />
          </Grid>
          <Grid item>
            <FacebookIcon />
          </Grid>
          <Grid item xs={9} sm={5}>
            <TextField id="input-with-icon-grid" fullWidth label="Facebook" />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="flex-end" justify="space-between">
          <Grid item>
            <InstagramIcon />
          </Grid>
          <Grid item xs={9} sm={5}>
            <TextField id="input-with-icon-grid" fullWidth label="Instagram" />
          </Grid>
          <Grid item>
            <TwitterIcon />
          </Grid>
          <Grid item xs={9} sm={5}>
            <TextField id="input-with-icon-grid" fullWidth label="Twitter" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="outlined" color="primary">
              SUBMIT
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="outlined" color="secondary">
              CANCEL
            </Button>
          </Grid>
        </Grid>
      </form>
      </Box>
    </div>
  );
};

export default NewClient;
