import React, { Component } from "react";
import { BrowserRouter as Router, Route,NavLink } from "react-router-dom";
import Products from './Products';
import SimpleCard from "../../../components/Card/SimpleCard";
import Button from "@material-ui/core/Button";

export default class Category extends Component {

    constructor() {
        super();
        this.state = {
            categories: ['cloth', 'watchs', 'shoes']
        }

    }
    render() {
        return (

            <Router>
                <div>
                    <div className="category">
                        <SimpleCard>
                            <NavLink to="/client/all" activeStyle={{ color: 'green' }} style={{textDecoration:'none' }}><Button color="inherit" variant="outlined" >All</Button></NavLink>
                            <NavLink to="/client/cloth" activeStyle={{ color: 'green'}}  style={{textDecoration:'none' }}><Button color="inherit" variant="outlined" >Cloths</Button></NavLink>
                            <NavLink to="/client/watchs" activeStyle={{ color: 'green' }}  style={{textDecoration:'none' }}><Button color="inherit" variant="outlined" >Watches</Button></NavLink>
                            <NavLink to="/client/shoes" activeStyle={{ color: 'green' }}  style={{textDecoration:'none' }}><Button color="inherit" variant="outlined">Shoes</Button></NavLink>
                        </SimpleCard>
                    </div>
                    <Route exact path="/client/all" render={(props) => <Products {...props} cart={this.props.cart} setCart={this.props.setCart} />} />
                    <Route exact path="/client/cloth" render={(props) => <Products {...props} cart={this.props.cart} setCart={this.props.setCart} />} />
                    <Route path="/client/watchs" render={(props) => <Products {...props} cart={this.props.cart} setCart={this.props.setCart} />} />
                    <Route path="/client/shoes" render={(props) => <Products {...props} cart={this.props.cart} setCart={this.props.setCart} />} />
                </div>
            </Router>
        );
    }
}