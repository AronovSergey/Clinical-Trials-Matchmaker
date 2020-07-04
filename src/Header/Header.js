import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
}));

const header = () => {
	const classes = useStyles();
	const history = useHistory()
	
	return (
    	<div className={classes.root}>
        	<AppBar position="static">
        		<Toolbar>
        			<Typography variant="h5" className={classes.title}>
        		  		Clinical Trials Matchmaker
        			</Typography>
        			<Button 
        				color="inherit" 
        				onClick={() => {history.push({pathname: '/search'})}}>
        					Search Page
        			</Button>
          			<Button 
        				color="inherit" 
        				onClick={() => {history.push({pathname: '/about-us'})}}>
        					About Us
        			</Button>
        		</Toolbar>
      		</AppBar>
      	</div>  
	);
}

export default header;