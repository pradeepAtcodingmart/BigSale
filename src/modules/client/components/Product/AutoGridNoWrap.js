import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Category from './Category';
import Cart from '../Cart/Cart';

const styles = (theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    // margin: theme.spacing.unit,
    padding: theme.spacing.unit * 3,
    backgroundColor: '#EDEDED',
    boxShadow: 'none',
  },
});

class AutoGridNoWrap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} sm={8} xs={12}>
          <Paper className={classes.paper}>
            <Category
              products={this.props.products}
              cart={this.props.cart}
              setCart={this.props.setCart}
            />
          </Paper>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Paper className={classes.paper}>
            <Cart cart={this.props.cart} setCart={this.props.setCart} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
