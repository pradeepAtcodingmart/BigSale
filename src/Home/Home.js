import React, { Component } from "react";
import Admin from '../Admin/Admin';
import NavBar from '../components/NavBar/ButtonAppBar';

export default class Home extends Component {
 
  render(){
     return(
        <div>
          <NavBar/>
          <Admin products={this.props.products} setProducts={this.props.setProducts}/>
        </div>
      );
  }

}  