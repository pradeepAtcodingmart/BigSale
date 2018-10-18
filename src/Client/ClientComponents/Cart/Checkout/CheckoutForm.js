import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SimpleCard from '../../../../components/Card/SimpleCard';
import MenuItem from '@material-ui/core/MenuItem';
import TimePickers from './TimePickers';

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  contain:{
    width:500,
    margin:'auto',
  },
  button:{
    float:'left',
    marginRight:5,
  }
});
const state = [
  {
    value: 'tamilnadu',
    label: 'TamilNadu',
  },
  {
    value: 'karnataka',
    label: 'Karnataka',
  },
  {
    value: 'andra',
    label: 'Andra',
  },
];
const andra = [
  {
    value: 'visakhapatnam',
    label: 'Visakhapatnam',
  },
  {
    value: 'guntur',
    label: 'Guntur',
  },
  {
    value: 'chittoor',
    label: 'Chittoor',
  },
];
const tamilnadu = [
  {
    value: 'erode',
    label: 'Erode',
  },
  {
    value: 'chennai',
    label: 'Chennai',
  },
  {
    value: 'kovai',
    label: 'Kovai',
  },
];
const karnataka = [
  {
    value: 'kolar',
    label: 'Kolar',
  },
  {
    value: 'bangalour',
    label: 'Bangalour',
  },
  {
    value: 'mysore',
    label: 'Mysore',
  },
];
class TextFields extends React.Component {
  constructor(){
    super();
    this.state = {
      customerDetails:{
        name:"",
        emailId:"",
        phoneNumber:"",
        state:"tamilnadu",
        district:"",
        city:"",
        street:"",
        payment:"",
        totalPrice:0,
        ccv:"",
        username:"",
        password:""
      },
      district:tamilnadu,
      radioCheck:true,
      isCod:false,
      iscard:false,
      isNetBank:false,
  }
  }
  componentWillMount(){

  }
  handleChange = field => event => {
    let customerDetails = this.state.customerDetails
    if(field==="state")
    {
      customerDetails[field] = event.target.value
      var district= event.target.value==="karnataka"?karnataka:(event.target.value==="tamilnadu"?tamilnadu:andra)
       this.setState({district:district});
    }
    else      
    customerDetails[field] = event.target.value
    if(field==="payment")
    {
      this.setState({radioCheck:true,isCod:false,iscard:false,isNetBank:false})
      if(event.target.value==="cod")
      this.setState({isCod:true})
      if(event.target.value==="card")
      this.setState({iscard:true})
      if(event.target.value==="netbanking")
      this.setState({isNetBank:true})
    }

    this.setState({customerDetails})
  };
  
  handleSubmit = ()=>{
    if(this.state.customerDetails.payment.length===0)
    {
      this.setState({radioCheck:false});
    }
    else{
      this.props.getCustomerDetails(this.state.customerDetails);
      const products=JSON.parse(localStorage.getItem("products"));
     
      for(var i in this.state.cart)
      {
  
          this.state.cart[i].forEach(element => {
              console.table(products[i][element.index])
              console.table(element)
              products[i][element.index].quantity-=element.quantity;
          });
       
      }
      localStorage.setItem("products",JSON.stringify(products));
     window.location.pathname="/client/Checkout/Bill";
    }
 }

  render() {
    const { classes } = this.props;

    return (
      <SimpleCard>
        <h2>Customer Details</h2>
      <div className={classes.contain}>
         <ValidatorForm
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
         >
        <form  noValidate autoComplete="off">
        <TextValidator
            required
            id="standard-required"
            label="Name"
            placeholder="Name"
            onChange={this.handleChange('name')}
            name="name"
            value={this.state.customerDetails.name}
            className={classes.textField}
            margin="normal"
            errorMessages={['Your name is required']}
            validators={['required','matchRegexp:^[a-zA-Z]+']}
          />
          <TextValidator
            required
            id="standard-required"
            label="Email Id"
            type="email"
            placeholder="EmailId"
            name="emailId"
            className={classes.textField}
            margin="normal"
            value={this.state.customerDetails.emailId}
            onChange={this.handleChange('emailId')}
            errorMessages={['The email Id is required']}
            validators={['required','isEmail']}
        />
          <TextValidator
            required
            id="standard-required"
            label="Phone Number"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            className={classes.textField}
            margin="normal"
            value={this.state.customerDetails.phoneNumber}
            onChange={this.handleChange('phoneNumber')}
            errorMessages={['The Phone Number is required','The Phone Number is not valid']}
            validators={['required','matchRegexp:^[6-9][0-9]{9}$']}
        />
         <TextValidator
            fullWidth={true}  
            select
            name="state"
            style={{ margin: 8 }}
            label="State"
            className={classes.textField}
            value={this.state.customerDetails.state}
            onChange={this.handleChange('state')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            errorMessages={['the product category is required']}
            validators={['required']}
          >
            {state.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextValidator>
          <TextValidator
            fullWidth={true}  
            select
            name="district"
            style={{ margin: 8 }}
            label="District"
            className={classes.textField}
            value={this.state.customerDetails.district}
            onChange={this.handleChange('district')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            errorMessages={['the District is required']}
            validators={['required']}
          >
            {this.state.district.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextValidator>
          <TextValidator
            required
            id="standard-required"
            label="City"
            type="text"
            placeholder="City"
            name="city"
            className={classes.textField}
            margin="normal"
            value={this.state.customerDetails.city}
            onChange={this.handleChange('city')}
            errorMessages={['The City is required']}
            validators={['required']}
        />
          <FormControl>
          <FormLabel>Payment</FormLabel>
          {this.state.radioCheck?null:<p style={{color:"red"}}>Choose Payment Type</p>}
          <RadioGroup
            aria-label="Payment"
            name="payment"
            className={classes.group}
            value={this.state.customerDetails.payment}
            onChange={this.handleChange('payment')}
            errorMessages={['The City is required']}
            validators={['required']}
            
          >
            <FormControlLabel value="cod" control={<Radio />} label="Cash On Delivery" />
            {this.state.isCod?
        <span>
          <TimePickers clock="From Time"/>
          <TimePickers clock="To Time"/>
       </span>
          :null}
            <FormControlLabel value="card" control={<Radio />} label="Cridit/Debit Card" />
            {this.state.iscard?
        <span>
        <TextValidator
            name="ccv"
            style={{ margin: 8 }}
            label="CCV"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange('ccv')}
            value={this.state.customerDetails.ccv}
            errorMessages={['the CCV is required']}
            validators={[`${this.state.iscard?"required":null}`]}
          /></span>
          :null}
            <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
            {this.state.isNetBank?
        <span>
        <TextValidator
            name="username"
            style={{ margin: 8 }}
            label="User Name"
            className={classes.textField}
            margin="normal"
            onChange={this.handleChange('username')}
            value={this.state.customerDetails.username}
            errorMessages={['the User Name is required']}
            validators={[`${this.state.isNetBank?"required":null}`]}
          />
            <TextValidator
            type="password"
            name="password"
            style={{ margin: 8 }}
            label="Password"
            onChange={this.handleChange('password')}
            value={this.state.customerDetails.password  }
            className={classes.textField}
            margin="normal"

            errorMessages={['the Password is required']}
            validators={[`${this.state.isNetBank?"required":null}`]}
          />
          {this.state.password}
          </span>
          :null}
          </RadioGroup>
        </FormControl>
          <br/><br/>
        <Link to='/client/all' >
            <Button color="secondary" variant="raised" className={classes.button}>
            Cancel
          </Button>
          </Link>
        <Button color="primary" variant="raised"  className={classes.button} type="submit" >
            Click to Shop
          </Button>

        </form>
        </ValidatorForm>
     <br/>
      </div></SimpleCard>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

