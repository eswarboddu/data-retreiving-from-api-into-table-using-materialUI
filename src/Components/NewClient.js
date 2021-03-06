import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";
import Box from "@material-ui/core/Box";
import { toast } from "react-toastify";

const NewClient = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    clientId: null,
    tenantId: null,
    clientName: "",
    clientEmail: "",
    clientWorkPhone: "",
    clientPersonalPhone: "",
    clientPocName: "",
    clientIndustry: "",
    clientFax: "",
    clientWebsite: "",
    clientAddress: "",
    clientContract: "",
    clientAvatarURL: null,
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    addDate: null,
    updateDate: null,
  });

  const [formError, setFormError] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const Validate = () => {
    const error = {};
    const nameReg = formData.clientName.length > 3;
    const emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm.test(formData.clientEmail);
    const phoneReg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.clientWorkPhone);

    if (!nameReg) {
      error.clientName = "Client Name should contain more than three charecters";
    }

    if (!emailReg) {
      error.clientEmail = "Please enter a valid email address";
    }

    if (!phoneReg) {
      error.clientWorkPhone = "Please enter a valid phone number";
    }
    setFormError(error);

    return Object.keys(error).length === 0;
  };

  function postData(event) {
    event.preventDefault();

    if (!Validate()) {
      toast.error("Please fix fields in red");
      return;
    }

    fetch(
      "http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/addclient/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenantId: "reesby",
          clientName: formData.clientName,
          clientEmail: formData.clientEmail,
          clientWorkPhone: formData.clientWorkPhone,
          clientAddress: formData.clientAddress,
          clientPersonalPhone: formData.clientPersonalPhone,
          clientPocName: formData.clientPocName,
          clientFax: formData.clientFax,
          clientIndustry: formData.clientIndustry,
          clientContract: formData.clientContract,
          facebook: formData.facebook,
          instagram: formData.instagram,
          clientWebsite: formData.clientWebsite,
          twitter: formData.twitter,
        }),
      }
    ).catch(() => alert("There was an error, please try again"));
  }

  return (
    <div className={classes.root}>
      <div className={classes.heading}>NEW CLIENT</div>
      <Box mx={15}>
        <form className={classes.form} justify="center" onSubmit={postData}>
          <Grid item xs={12} sm={12} style={{ marginLeft: 15 }}>
            <TextField
              required
              fullWidth
              size="small"
              id="outlined-required"
              label="Client Name"
              name="clientName"
              variant="outlined"
              error={formError.clientName}
              helperText={formError.clientName}
              value={formData.clientName}
              onChange={handleChange}
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
                name="clientEmail"
                error={formError.clientEmail}
                helperText={formError.clientEmail}
                value={formData.clientEmail}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                size="small"
                id="outlined-required"
                label="Work Phone Number"
                name="clientWorkPhone"
                variant="outlined"
                error={formError.clientWorkPhone}
                helperText={formError.clientWorkPhone}
                value={formData.clientWorkPhone}
                onChange={handleChange}
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
                name="clientAddress"
                variant="outlined"
                value={formData.clientAddress}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="outlined-required"
                fullWidth
                size="small"
                label="Personal Phone Number"
                name="clientPersonalPhone"
                variant="outlined"
                value={formData.clientPersonalPhone}
                onChange={handleChange}
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
                name="clientPocName"
                variant="outlined"
                value={formData.clientPocName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="outlined-required"
                fullWidth
                size="small"
                label="Fax"
                name="clientFax"
                value={formData.clientFax}
                variant="outlined"
                onChange={handleChange}
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
                name="clientIndustry"
                variant="outlined"
                value={formData.clientIndustry}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                id="outlined-required"
                fullWidth
                size="small"
                label="Contract"
                name="clientContract"
                value={formData.clientContract}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            justify="space-between"
          >
            <Grid item>
              <LanguageIcon />
            </Grid>
            <Grid item xs={9} sm={5}>
              <TextField
                id="input-with-icon-grid"
                fullWidth
                label="Website"
                name="clientWebsite"
                value={formData.clientWebsite}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FacebookIcon />
            </Grid>
            <Grid item xs={9} sm={5}>
              <TextField
                id="input-with-icon-grid"
                fullWidth
                label="Facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            alignItems="flex-end"
            justify="space-between"
          >
            <Grid item>
              <InstagramIcon />
            </Grid>
            <Grid item xs={9} sm={5}>
              <TextField
                id="input-with-icon-grid"
                fullWidth
                label="Instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <TwitterIcon />
            </Grid>
            <Grid item xs={9} sm={5}>
              <TextField
                id="input-with-icon-grid"
                fullWidth
                label="Twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
              >
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
