import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = (theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
  },
  button: {
    backgroundColor: 'orange',
  },
});

class Products extends Component {
  constructor() {
    super();
    this.state = {
      restaruntName: '',
      products: [],
      quantity: [],
      cartProduct: {
        category: '',
        index: '',
        name: '',
        quantity: 0,
        price: 0,
        totalPrice: 0,
      },
    };
  }
  componentWillMount() {
    const restaruntName = window.location.pathname.slice(8);
    this.setState({ restaruntName });
  }
  handleChange = (index) => (event) => {
    const quantity = this.state.quantity;
    quantity[index] = event.target.value;
    this.setState({ quantity: quantity });
  };
  handleSubmit = (key, index) => {
    const products = JSON.parse(localStorage.getItem('products'));
    try {
      if (this.state.quantity[index] > 0) {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const cartProduct = this.state.cartProduct;
        debugger;
        cartProduct.category = products[key][index].category;
        cartProduct.index = index;
        cartProduct.name = products[key][index].name;
        cartProduct.quantity = this.state.quantity[index];
        cartProduct.price = products[key][index].price;
        const totalPrice = cartProduct.quantity * cartProduct.price;
        cartProduct.totalPrice = totalPrice;
        let flag = true;
        for (var i in cart[cartProduct.category]) {
          let p = cart[cartProduct.category][i];
          console.log(p.index);
          if (p.index === index) {
            cart[cartProduct.category][i] = cartProduct;
            flag = false;
          }
        }
        if (flag && cart[cartProduct.category])
          cart[cartProduct.category].push(cartProduct);
        else {
          cart[cartProduct.category] = [];
          cart[cartProduct.category].push(cartProduct);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        this.props.setCart(cart);
      }
    } catch (err) {
      console.log('handleSubmit', err);
    }
  };
  render() {
    const { classes } = this.props;
    const products = JSON.parse(localStorage.getItem('products'));
    const { restaruntName } = this.state;

    return (
      <Grid container spacing={24}>
        {Object.keys(products).map((key) =>
          products[key].map(
            (product, index) =>
              product.restaruntName &&
              product.restaruntName
                .toLowerCase()
                .split(' ')
                .join('-') === restaruntName ? (
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={6}
                  xs={12}
                  key={index}
                  container=" true"
                >
                  <Paper className={classes.paper}>
                    <div>
                      <p>{product.name}</p>
                      <Divider />
                      <br />
                      Price:&#8377;
                      {product.price} <br />
                      Quantity:
                      {product.quantity} <br />
                      Description:
                      {product.description} <br />
                      <ValidatorForm
                        onSubmit={() => this.handleSubmit(key, index)}
                        onError={(errors) => console.log(errors)}
                      >
                        <form noValidate>
                          <TextValidator
                            required
                            id="standard-required"
                            label="Quantity"
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.quantity[index]}
                            onChange={this.handleChange(index)}
                            errorMessages={[
                              'The quantity Should be positive value',
                              'The minimum quantity is one',
                              `The maximum quantity is ${product.quantity}`,
                            ]}
                            validators={[
                              'isPositive',
                              'minNumber:1',
                              `maxNumber:${product.quantity}`,
                            ]}
                          />
                          <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}
                          >
                            <Icon className={classes.icon}>
                              add_shopping_cart
                            </Icon>
                            Add
                          </Button>
                        </form>
                      </ValidatorForm>
                    </div>
                  </Paper>
                </Grid>
              ) : null
          )
        )}

        <div />
      </Grid>
    );
  }
}
Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
