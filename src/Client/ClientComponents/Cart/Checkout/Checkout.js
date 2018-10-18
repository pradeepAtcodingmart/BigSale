import React, { Component } from "react";
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckoutForm from './CheckoutForm';
import Bucket from './Bucket';
import NavBar from '../../../../components/NavBar/ButtonAppBar';
const styles = theme => ({
  container:{
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    boxShadow:'none',
    backgroundColor:'#EDEDED',

  },
});

class Checkout extends Component {
  constructor(){
    super();
    this.state={
    total:{}
    }
  }
  componentDidMount(){
    const cart = JSON.parse(localStorage.getItem("cart"));
    this.setState({cart:cart});
    let total={
      cloth:0,
      watchs:0,
      shoes:0,
      allTotal:0
    }
   for(let category in cart)
    {
       let sum=0;
      cart[category].forEach(element => {
        sum=sum+(element.totalPrice);
      });
      total[category]=sum;
      total.allTotal+=sum;
    }
    this.setState({total:total});
  }
  getCustomerDetails=(details)=>{

    let customer={}
     customer.customerDetails=details;
     customer.totalPrice=this.state.total;
    localStorage.setItem("customer",JSON.stringify(customer));
  
  }
  render(){
    const { classes } = this.props;
    return(
        <div>
         <NavBar/>
        <Grid container spacing={22}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
            <Paper className={classes.paper}>
            <CheckoutForm getCustomerDetails={this.getCustomerDetails}/>
            </Paper>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
            <Paper className={classes.paper}>
            <Bucket total={this.state.total}/>
            </Paper>
            </Grid>
       </Grid>
       </div>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
