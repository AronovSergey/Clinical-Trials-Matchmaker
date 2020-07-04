import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const gender = [
  [{label: 'Male'},{label: 'Female'}],
  [{label: 'Female'},{label: 'Male'}]
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function GenderSelecterTextField(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.updateChange(event.target.value)
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="gender"
          select
          label="Gender"
          value={props.gender}
          onChange={handleChange}
          onKeyPress={ event => {
            if (event.key === 'Enter') {
              props.handleNext();
            }
          }}
          SelectProps={{
            native: true,
          }}
        >
          {
            gender[props.gender === "Male" ? 0 : 1].map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
