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

const DateTimeTo = () => {
  const classes = useStyles();
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="To"
        type="date"
        defaultValue="2020-10-20"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default DateTimeTo;
