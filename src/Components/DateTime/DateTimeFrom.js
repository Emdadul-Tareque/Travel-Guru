import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: "30px",
    marginTop: "20px",
    width: 200,
  },
}));

const DateTimeFrom = () => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="From"
        type="date"
        defaultValue="2020-10-17"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default DateTimeFrom
