import React, { Component } from "react";
import CardHeader from "../components/Card/CardHeader";
import CustomizedTable from "../components/Table/CustomizedTable";


export default class Home extends Component {
 
  render(){


      return(
        <div>
            <CardHeader setProducts={this.props.setProducts}/>
            <br/>
            <CustomizedTable products={this.props.products} setProducts={this.props.setProducts}/>

        </div>
      );
  }

}