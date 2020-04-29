import React, { Component } from 'react';
import NavBar from '../../../../../components/NavBar/ButtonAppBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { foodCategories } from '../../../../../config';
const styles = (theme) => ({
  container: {
    margin: 'auto',
    width: 700,
    padding: 10,
    border: '1px dotted black',
  },
  button: {
    backgroundColor: 'green',
    textAlign: 'center',
    color: 'white',
  },
});

class Bill extends Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      customer: {},
    };
  }
  componentWillMount() {
    this.setState({
      cart: JSON.parse(localStorage.getItem('cart')),
      customer: JSON.parse(localStorage.getItem('customer')),
    });
  }
  handlePrint = () => {
    const cart = foodCategories;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('customer', JSON.stringify());
    window.location.pathname = '/client/all';
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <br />
        <div className={classes.container}>
          <h1 style={{ color: '#5425F4' }}>BigSale.com</h1>
          <hr />
          <h4>Customer Details</h4>
          Name: {this.state.customer.customerDetails.name}
          <br />
          MailId: {this.state.customer.customerDetails.emailId}
          <br />
          Phone Number: {this.state.customer.customerDetails.phoneNumber}
          <br />
          Payment Type: {this.state.customer.customerDetails.payment}
          <h4>Shipping Address</h4>
          {this.state.customer.customerDetails.city},
          {this.state.customer.customerDetails.district},
          {this.state.customer.customerDetails.state}
          <br />
          <hr />
          <h4>Product Details</h4>
          <table cellSpacing="10">
            <tr>
              <th>Product Name</th>
              <th>Total Price</th>
            </tr>
            {Object.keys(this.state.cart).map((key) =>
              this.state.cart[key].map((data, index) => (
                <tr>
                  <td>
                    {data.name}({data.quantity})
                  </td>
                  <td>
                    &#8377;
                    {data.totalPrice}
                  </td>
                </tr>
              ))
            )}
            <tr>
              <td />
              <td>
                Sub total:&#8377;
                {this.state.customer.totalPrice.allTotal}
              </td>
            </tr>
            <tr>
              <td />
              <td>
                Total:&#8377;
                {this.state.customer.totalPrice.allTotal}
              </td>
            </tr>
          </table>
          <Button className={classes.button} onClick={this.handlePrint}>
            Print
          </Button>
        </div>
      </div>
    );
  }
}

Bill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bill);
