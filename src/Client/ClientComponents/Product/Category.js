import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Products from './Products';
import SimpleCard from '../../../components/Card/SimpleCard';
import Button from '@material-ui/core/Button';
import { restarunts } from '../../../config';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <div className="category">
            <SimpleCard>
              {restarunts.map((restarunt) => (
                <NavLink
                  to={`/client/${restarunt.value
                    .toLowerCase()
                    .split(' ')
                    .join('-')}`}
                  activeStyle={{ color: 'green' }}
                  style={{ textDecoration: 'none' }}
                >
                  <Button color="inherit" variant="outlined">
                    {restarunt.value}
                  </Button>
                </NavLink>
              ))}
            </SimpleCard>
          </div>
          {restarunts.map((restarunt) => (
            <Route
              exact
              path={`/client/${restarunt.value
                .toLowerCase()
                .split(' ')
                .join('-')}`}
              render={(props) => (
                <Products
                  {...props}
                  cart={this.props.cart}
                  setCart={this.props.setCart}
                />
              )}
            />
          ))}
          <Route
            exact
            path="/client/all"
            render={(props) => (
              <Products
                {...props}
                cart={this.props.cart}
                setCart={this.props.setCart}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
