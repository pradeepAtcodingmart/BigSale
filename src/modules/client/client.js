import React, { Component } from 'react';
import NavBar from '../../components/NavBar/ButtonAppBar';
import AutoGridNoWrap from './components/Product/AutoGridNoWrap';
import { foodCategories } from '../../config';

export default class Client extends Component {
  constructor() {
    super();
    this.state = {
      cart: {},
    };
  }
  componentWillMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null)
      localStorage.setItem('cart', JSON.stringify(foodCategories));
    else {
      this.setState({
        cart: cart,
      });
    }
  }
  setCart = (cart) => {
    this.setState({ cart: cart });
  };

  render() {
    return (
      <div>
        <NavBar />
        <AutoGridNoWrap
          products={this.props.products}
          cart={this.state.cart}
          setCart={this.setCart}
        />
      </div>
    );
  }
}
