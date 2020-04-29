import React, { Component } from 'react';
import CardHeader from '../components/Card/CardHeader';
import CustomizedTable from '../components/Table/CustomizedTable';
import Login from './auth/login';

export default class Home extends Component {
  render() {
    const isLoggedIn = JSON.parse(localStorage.getItem('ili'));

    return (
      <div>
        {isLoggedIn ? (
          <React.Fragment>
            <CardHeader setProducts={this.props.setProducts} />
            <br />
            <CustomizedTable
              products={this.props.products}
              setProducts={this.props.setProducts}
            />
          </React.Fragment>
        ) : (
          <Login />
        )}
      </div>
    );
  }
}
