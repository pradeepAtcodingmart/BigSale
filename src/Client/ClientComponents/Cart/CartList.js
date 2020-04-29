import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const styles = (theme) => ({
  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    backgroundColor: '#EDEFF0',
    padding: 16,
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class CartList extends Component {
  handlDelete = (index, category) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[category].splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.props.setCart(cart);
  };
  handleIncrese = (index, category, price) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[category][index].totalPrice += parseInt(price);
    cart[category][index].quantity =
      parseInt(cart[category][index].quantity) + 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    this.props.setCart(cart);
  };
  handleDecrese = (index, category, price) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[category][index].quantity > 1) {
      cart[category][index].quantity -= 1;
      cart[category][index].totalPrice -= parseInt(price);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.props.setCart(cart);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <table cellSpacing="10">
          <tr>
            <th>Brand</th>
            <th>Price</th>
            <th>TotalPrice</th>
            <th>Remove</th>
          </tr>
          {this.props.product.map((data, index) => {
            return (
              <tr>
                <td>
                  <button
                    onClick={() =>
                      this.handleDecrese(index, data.category, data.price)
                    }
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      this.handleIncrese(index, data.category, data.price)
                    }
                  >
                    +
                  </button>
                  <br />
                  {data.name}({data.quantity})
                </td>
                <td>
                  &#8377;
                  {data.price}
                </td>
                <td>
                  &#8377;
                  {data.totalPrice}
                </td>
                <td>
                  <Icon
                    className={classes.icon}
                    onClick={() => this.handlDelete(index, data.category)}
                  >
                    remove_shopping_cart
                  </Icon>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
CartList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartList);
