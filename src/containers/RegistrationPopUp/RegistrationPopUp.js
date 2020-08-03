import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';


const RegistrationPopUp = (props) => {
    const [step, setStep] = useState(0);
    const [mail, setMail] = useState('');

    const state = useSelector(state => state)

    const handleChange = (event) => {
      setMail(event.target.value);
    };

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        if(step === 1 && !re.test(email)){ return true; }
        return false;
    };

    function getTitle(stepIndex) {
      switch (stepIndex) {
        case 0:
          return "Want to sign up for this trail?";
        case 1:
          return "Subscribe";
        default:
          return 'Unknown stepIndex';
      }
    }

    function getContent(stepIndex, ID) {
      switch (stepIndex) {
        case 0:
          return `We saw that you were interested in trail ${ID}.
                    Let Clinical Trials Matchmaker help you through the registration process for this trail.`;
        case 1:
          return `In order to subscribe to this trail, please enter your email address. We will make sure to send updates occasionally.`;
        default:
          return 'Unknown stepIndex';
      }
    }

    function handleSubmit() {
      const stateInstance = {
                              name: state.name,
                              age: state.age,
                              gender: state.age,
                              searchExpression: state.searchExpression,
                              selectedNCTId: props.ID,
                              mail: mail
                            }
      const instance = axios.create({baseURL: 'https://final-project-322b9.firebaseio.com/'});
      instance.post('/trails.json', stateInstance)
          .catch(error => console.log(error));
      props.handleClose()    
    }

    return (
    	<div>
    		<Dialog
        		open={props.open}
        		onClose={props.handleClose}
        		aria-labelledby="alert-dialog-title"
        		aria-describedby="alert-dialog-description"
    		>
        		<DialogTitle id="alert-dialog-title">
        			{getTitle(step)}
        		</DialogTitle>
        		<DialogContent>
        		  <DialogContentText id="alert-dialog-description">
        		    {getContent(step, props.ID)} 
        		  </DialogContentText>
                  <div>
                    {step?
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={handleChange}>
                        {mail}
                      </TextField>
                      :
                      <div></div>
                    } 
                  </div>
        		</DialogContent>
        		<DialogActions>
        		  <Button 
                  variant="outlined" 
                  onClick={props.handleClose} 
                  color="primary">
                  {step === 0 ? 'Disagree' : 'Cancel'}
        		  </Button>
        		  <Button 
                    variant="outlined" 
                    color="primary"
                    disabled={validateEmail(mail)}
                    onClick={() => step === 0 ? setStep(step + 1) : handleSubmit()}>
        		    {step === 0 ? 'Agree' : 'Subscribe'}
        		  </Button>
        		</DialogActions>
    		</Dialog>
    	</div>
    );
};

export default RegistrationPopUp;