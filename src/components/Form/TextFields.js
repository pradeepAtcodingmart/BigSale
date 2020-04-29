import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SimpleCard from '../Card/SimpleCard';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import NavBar from '../NavBar/ButtonAppBar';
import { restarunts, foodcategoriesArray } from '../../config';

const styles = (theme) => ({
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
  contain: {
    width: 500,
    margin: 'auto',
  },
  button: {
    float: 'left',
    margin: '18px',
    width: '106px',
  },
  formContainer: {
    width: '800px',
    margin: 'auto',
  },
});

class TextFields extends React.Component {
  state = {
    products: {},
    product: {
      restaruntName: '',
      category: '',
      name: '',
      quantity: '',
      price: '',
      description: '',
    },
  };
  componentWillMount() {
    if (this.props.isEdit) {
      const index = this.props.match.params.id;
      const category = this.props.match.params.category;
      const products = { ...JSON.parse(localStorage.getItem('products')) };
      this.setState({ product: products[category][index], products });
    }
  }

  handleChange = (field) => (event) => {
    let product = this.state.product;
    product[field] = event.target.value;
    this.setState({ product });
  };

  handleSubmit = () => {
    const products = { ...JSON.parse(localStorage.getItem('products')) };
    const category = this.state.product.category;
    if (this.props.isEdit) {
      products[category][this.props.match.params.id] = this.state.product;
    } else {
      products[category].push(this.state.product);
    }
    debugger;
    localStorage.setItem('products', JSON.stringify(products));
    window.location.pathname = '/';
    this.props.setProducts(products);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar />
        <br />
        <div className={classes.formContainer}>
          <SimpleCard>
            <ValidatorForm
              onSubmit={this.handleSubmit}
              onError={(errors) => console.log(errors)}
            >
              <div className={classes.contain}>
                <form noValidate autoComplete="off">
                  <h2>{this.props.isEdit ? 'Edit Product' : 'Add Product'}</h2>
                  <TextValidator
                    fullWidth={true}
                    select
                    name="restaruntName"
                    style={{ margin: 8 }}
                    label="Restarunt Name"
                    className={classes.textField}
                    value={this.state.product.restaruntName}
                    onChange={this.handleChange('restaruntName')}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                    errorMessages={['Restarunt Name is required']}
                    validators={['required']}
                  >
                    {restarunts.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextValidator>
                  <TextValidator
                    fullWidth={true}
                    select
                    name="category"
                    style={{ margin: 8 }}
                    label="Category"
                    className={classes.textField}
                    value={this.state.product.category}
                    onChange={this.handleChange('category')}
                    SelectProps={{
                      MenuProps: {
                        className: classes.menu,
                      },
                    }}
                    margin="normal"
                    errorMessages={['the product category is required']}
                    validators={['required']}
                  >
                    {foodcategoriesArray.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextValidator>
                  <TextValidator
                    required
                    id="standard-required"
                    label="Name"
                    placeholder="Name"
                    onChange={this.handleChange('name')}
                    name="name"
                    value={this.state.product.name}
                    className={classes.textField}
                    margin="normal"
                    errorMessages={['the product name is required']}
                    validators={['required']}
                  />
                  <TextValidator
                    required
                    id="standard-required"
                    label="Quantity"
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    value={this.state.product.quantity}
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange('quantity')}
                    errorMessages={[
                      'the product quantity is required',
                      'The quantity Should be positive value',
                      'The minimum quantity is one',
                    ]}
                    validators={['required', 'isPositive', 'minNumber:1']}
                  />
                  <TextValidator
                    required
                    id="standard-required"
                    type="number"
                    label="Price"
                    placeholder="Price"
                    name="price"
                    value={this.state.product.price}
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange('price')}
                    errorMessages={[
                      'the product price is required',
                      'The price Should be positive value',
                      'The minimum quantity is one',
                    ]}
                    validators={['required', 'isPositive', 'minNumber:1']}
                  />
                  <TextValidator
                    required
                    id="sstandard-multiline-static"
                    label="Description"
                    multiline
                    name="description "
                    value={this.state.product.description}
                    placeholder="Description"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange('description')}
                    fullWidth={true}
                    errorMessages={['the product description is required']}
                    validators={['required']}
                  />
                  <Link to="/">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="submit"
                  >
                    Save
                  </Button>
                </form>
              </div>
            </ValidatorForm>
            <br />
          </SimpleCard>
        </div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
