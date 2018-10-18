import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';




const styles = {
  card: {
    marginRight:60,
    textAlign:'right'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  a:{
    textDecoration:"none"
  },
  icon:{
    color:"#3793F9"
  }
};
function CardHeader(props) {
  const { classes} = props;
  const button=(<Button  variant="extendedFab"  className={classes.button}>
                   <Icon className={classes.icon} style={{ fontSize: 40 }}>
                   add_circle
                    </Icon>
                Add
                 </Button>);

  return (
    <div className={classes.card}>
      <br/>
        <Link to='/form' className={classes.a}>{button}</Link>
        
        </div>
  );
}

CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardHeader);
