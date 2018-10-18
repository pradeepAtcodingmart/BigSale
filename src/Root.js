import React, { Component } from "react";
import {  Route,Switch} from "react-router-dom";
import Home from './Home/Home';
import Form from './components/Form/TextFields';
import Client from "./Client/Client";
import Checkout from "./Client/ClientComponents/Cart/Checkout/Checkout";
import Bill from './Client/ClientComponents/Cart/Checkout/Bill/Bill';
export default class Root extends Component {
  render(){
    return(
    <Switch>
            <Route exact path="/form/:category/:id"  render={(props) => <Form setProducts={this.props.setProducts} {...props} isEdit={true}    />} />
            <Route exact path="/form"  render={(props) => <Form setProducts={this.props.setProducts} isEdit={false}   />} />
            <Route exact path="/" render={(props) => <Home {...this.props}  />}/>
            <Route exact path="/client/all"  render={(props) => <Client {...this.props}     />} />\
            <Route exact path="/client/Checkout" render={(props) => <Checkout  {...this.props}/>} />
            <Route exact path="/client/Checkout/Bill" render={(props) =><Bill {...this.props} />} />
</Switch>
    );
    }

}
