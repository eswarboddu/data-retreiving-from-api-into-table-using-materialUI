import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  root: {
      margin: 70,
      [theme.breakpoints.down('sm')]: {
        margin: 0
      }
      
  },

  heading: {
      color: "green",
      fontSize: 30,
      padding: "0 30px",
      textAlign: "center"

  },
  
}));
