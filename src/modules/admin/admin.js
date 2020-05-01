import React, { Component } from 'react';
import CardHeader from '../../components/Card/CardHeader';
import CustomizedTable from '../../components/Table/CustomizedTable';
import Login from '../auth/login';
import { isLoggedIn } from '../../services/utils';

export default class Home extends Component {
  render() {
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
