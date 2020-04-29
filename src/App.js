import React, { Component } from 'react';
import './App.css';
import Root from './Root';
import { BrowserRouter as Router } from 'react-router-dom';
import { foodCategories } from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products === null)
      localStorage.setItem('products', JSON.stringify(foodCategories));
    else {
      this.setState({
        products: products,
      });
    }
  }
  setProducts = (products) => {
    this.setState({ products });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Root products={this.state.products} setProducts={this.setProducts} />
        </Router>
      </div>
    );
  }
}

export default App;
