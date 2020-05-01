import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { restarunts } from '../../config';
import { isLoggedIn } from '../../services/utils';

const styles = {
  grow: {
    align: 'right',
  },
  mybutton: {
    float: 'right',
    color: 'white',
  },
  color: {
    backgroundColor: '#5300ad',
  },
  logout: {
    marginLeft: '1200px',
  },
};

function ButtonAppBar(props) {
  const { classes } = props;

  function handleLogout() {
    localStorage.setItem('ili', false);
    window.location.reload();
  }

  return (
    <div>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            BigSale
          </Typography>
          <Typography color="inherit">
            <Link to="/">
              <Button className={classes.mybutton}>Admin</Button>
            </Link>
            <Link to="/client/all">
              <Button className={classes.mybutton}>Client</Button>
            </Link>
          </Typography>
          {window.location.pathname === '/' && isLoggedIn ? (
            <Button
              edge="end"
              className={classes.logout}
              color="inherit"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
