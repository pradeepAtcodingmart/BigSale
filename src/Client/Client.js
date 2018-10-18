import React, { Component } from "react";
import NavBar from '../components/NavBar/ButtonAppBar';
import AutoGridNoWrap from "./ClientComponents/Product/AutoGridNoWrap";



export default class Client extends Component {
    constructor(){
        super();
        this.state ={
           cart:{
                cloth:[],
                shoes:[],
                watchs:[]
            }
        }
    }
    componentWillMount()
    {
        const cart=JSON.parse(localStorage.getItem("cart"));
        if(cart===null)
        localStorage.setItem("cart",JSON.stringify(this.state.cart));
        else
           {
             this.setState({
                cart:cart
             });
           }    
    }
    setCart = (cart)=>{
      this.setState(
          {cart:cart}
      );
    }

    render(){
      return(
            <div>
            <NavBar/>
             <AutoGridNoWrap products={this.props.products} cart={this.state.cart} setCart={this.setCart}/>
             </div>
          
             
      );
    }  
}