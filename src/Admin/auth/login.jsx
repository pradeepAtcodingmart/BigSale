//  Depricated
//  Login auth is handled by UCMS

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CircularLoader from '../../components/loader';
import { authConfig } from '../../config';

const styles = (theme) => ({
  root: {
    fontFamily: 'Roboto',
    fontWeight: 'normel',
  },
  body: {
    marginTop: '8px',
    marginBottom: '14px',
    marginLeft: '14px',
    marginRight: '14px',
  },
  paper: {
    padding: '20px',
    width: '400px',
    height: '270px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    // box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
  },
  logo: {
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '7px',
  },
  form: {
    margin: 'auto',
    position: 'absolute',
  },
  field: {
    marginTop: '24px',
    marginBottom: '14px',
    marginLeft: '24px',
    width: 300,
    display: 'flex',
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '33px auto',
    width: '100px',
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      loader: true,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) === JSON.stringify(this.props);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loader: false }), 1000);
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    this.setState({ loader: true });
    if (username === authConfig.userName && password === authConfig.password) {
      setTimeout(() => this.setState({ loader: false }), 3000);
      localStorage.setItem('ili', true);
      window.location.reload();
    } else setTimeout(() => this.setState({ loader: false }), 1000);
  };

  render() {
    const { classes } = this.props;
    const { username, password, loader } = this.state;

    return (
      <div className={classes.root}>
        {loader ? (
          <div className={classes.paper}>
            <CircularLoader />
          </div>
        ) : (
          <Paper className={classes.paper} elevation={10}>
            <div className={classes.form}>
              <ValidatorForm
                onSubmit={this.handleLogin}
                autoComplete="off"
                noValidate
              >
                <TextValidator
                  id="username"
                  label="Username"
                  placeholder="Username"
                  className={classes.field}
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={['required']}
                  errorMessages={['User Name is required']}
                />
                <TextValidator
                  id="password"
                  label="Password"
                  placeholder="Password"
                  className={classes.field}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  validators={['required']}
                  errorMessages={['Password  is required']}
                />

                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  className={classes.loginButton}
                  // onClick={this.handleLogin}
                >
                  Login
                </Button>
              </ValidatorForm>
            </div>
          </Paper>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Login);
