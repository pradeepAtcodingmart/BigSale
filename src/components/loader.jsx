import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  progress: {
    margin: '16px',
  },
  root: {
    padding: '80px',
    textAlign: 'center',
  },
});

class CircularLoader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <CircularProgress className={classes.progress} color="secondary" />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CircularLoader);
