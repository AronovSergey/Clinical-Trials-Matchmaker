import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 1024,
  },
  backButton: {
    marginRight: theme.spacing(22),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(5),
    },
  },
  instructions: {
    marginTop: theme.spacing(5),
  },
  child: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

function getSteps() {
  return ['User Name', 'User Age', 'User Gender', 'Trails Search Bar'];
}

function getStepContent(stepIndex, name) {
  switch (stepIndex) {
    case 0:
      return 'Please enter your name:';
    case 1:
      return name + ', enter your age:';
    case 2:
      return name + ', select your gender:';
    case 3:
      return name + ', search for the illness symptom or for the condition:';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalStepper(props) {
  const classes = useStyles();
  const steps = getSteps();

  return (
    <div className={classes.root} >
      <Stepper activeStep={props.step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Typography 
          variant="h5"
          className={classes.instructions} 
          align="center"
          >{getStepContent(props.step, props.name)}
        </Typography>
        <Grid 
          className={classes.child} 
          align="center"
          >
          {props.children}
        </Grid>
        <Grid
          align="center">
          <Button
            variant="outlined"
            disabled={props.step === 0}
            onClick={props.handleBack}
            className={classes.backButton}>
            Back
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={props.step === steps.length - 1 ? props.handleFinish : props.handleNext }>
               {props.step === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Grid>
      </div>
    </div>
  );
}
