import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    img: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "1em",
      marginTop: "0.5em",
      width: theme.spacing(30),
      height: 280,
    },
    root: {
        display: 'flex',
        float: "left",
        marginBottom: theme.spacing(5),
    },
  }));

export default function TeamMember(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
            className={classes.img}
            component="img"
            image={props.img}
            title="Contemplative Reptile"
        />
        <div>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a
                    href={props.linkedinURL} >
                    <h3>
                        LinkedIn
                    </h3>
                </a>  
                <a
                    href={props.emailURL} >
                    <h3>
                        Email
                    </h3>
                </a>  
            </CardActions>
        </div>
    </Card>
  );
}
