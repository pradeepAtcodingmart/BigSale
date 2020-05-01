import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardList from './CartList';
import SimpleCard from '../../../../components/Card/SimpleCard';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = (theme) => ({});
class Cart extends Component {
  handleChange = (event) => {
    const customerDetail = { ...this.state.customerDetail };
    customerDetail.userId = event.target.value;
    this.setState({ customerDetail });
  };
  handleSubmit = () => {
    const cart = this.props.cart;
    cart.customerDetail = this.state.customerDetail;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.props.setCart(cart);
  };

  render() {
    let check = Object.keys(this.props.cart).some(
      (key) => this.props.cart[key].length > 0
    );
    const { classes } = this.props;

    return (
      <div>
        <SimpleCard>
          <h3 style={{ color: 'green' }}>CART</h3>
          <hr />
          {Object.keys(this.props.cart).map(
            (key) =>
              this.props.cart[key].length !== 0 ? (
                <span>
                  <CardList
                    product={this.props.cart[key]}
                    setCart={this.props.setCart}
                    category={key}
                  />
                  <hr />
                </span>
              ) : null
          )}
          <p />
          {check ? (
            <Link to="/client/Checkout">
              {' '}
              <Button
                variant="contained"
                style={{ backgroundColor: 'orange' }}
                className={classes.button}
              >
                <Icon className={classes.icon}>shopping_cart</Icon>
                Check Out
              </Button>
            </Link>
          ) : (
            'No Items Selected'
          )}
        </SimpleCard>
      </div>
    );
  }
}
Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);
