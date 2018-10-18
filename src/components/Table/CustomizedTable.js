import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';


const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: "#03a9f4",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const styles = theme => ({
	root: {
		width: '90%',
		margin:'auto',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	cell :{
        textAlign:'left'
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

class CustomizedTable extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			products:{}
		}
	}
	 handlDelete =(index,category)=>{
		const products = {...JSON.parse(localStorage.getItem("products"))};
    products[category].splice(index,1);
		localStorage.setItem("products",JSON.stringify(products));
		this.props.setProducts(products);
	 }
	render() {
		let { classes,products} = this.props;
		const button=(<Icon className={classes.icon}>edit</Icon>);
		return (
			<div className={classes.root}>
				<Paper >
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<CustomTableCell>Name</CustomTableCell>
								<CustomTableCell >Category</CustomTableCell>
								<CustomTableCell numeric>QTY</CustomTableCell>
								<CustomTableCell numeric>PRICE</CustomTableCell>
								<CustomTableCell >Description</CustomTableCell>
								<CustomTableCell >Edit</CustomTableCell>
								<CustomTableCell >Delete</CustomTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{products.cloth.map((product,index) => {
								return (
									<TableRow className={classes.product} key={index}>
										<CustomTableCell component="th" scope="row">
											{product.name}
										</CustomTableCell>
										<CustomTableCell className={classes.cell} numeric>{product.category}</CustomTableCell>
										<CustomTableCell numeric>{product.quantity}</CustomTableCell>
										<CustomTableCell  numeric>&#8377;{product.price	}</CustomTableCell>
										<CustomTableCell className={classes.cell} >{product.description}</CustomTableCell>
										<CustomTableCell className={classes.cell} >  <Link to={`/form/${product.category}/${index}`}>{button}</Link></CustomTableCell>
										<CustomTableCell className={classes.cell} ><Icon className={classes.icon} onClick={()=>this.handlDelete(index,product.category)}>delete</Icon></CustomTableCell>
									</TableRow>
								);
							})}
							{products.shoes.map((product,index) => {
								return (
									<TableRow className={classes.product} key={index}>
										<CustomTableCell component="th" scope="row">
											{product.name}
										</CustomTableCell>
										<CustomTableCell className={classes.cell} numeric>{product.category}</CustomTableCell>
										<CustomTableCell numeric>{product.quantity}</CustomTableCell>
										<CustomTableCell  numeric>&#8377;{product.price	}</CustomTableCell>
										<CustomTableCell className={classes.cell} >{product.description}</CustomTableCell>
										<CustomTableCell className={classes.cell} >  <Link to={`/form/${product.category}/${index}`}>{button}</Link></CustomTableCell>
										<CustomTableCell className={classes.cell} ><Icon className={classes.icon} onClick={()=>this.handlDelete(index,product.category)}>delete</Icon></CustomTableCell>
									</TableRow>
								);
							})}
							{products.watchs.map((product,index) => {
								return (
									<TableRow className={classes.product} key={index}>
										<CustomTableCell component="th" scope="row">
											{product.name}
										</CustomTableCell>
										<CustomTableCell className={classes.cell} numeric>{product.category}</CustomTableCell>
										<CustomTableCell numeric>{product.quantity}</CustomTableCell>
										<CustomTableCell  numeric>&#8377;{product.price	}</CustomTableCell>
										<CustomTableCell className={classes.cell} >{product.description}</CustomTableCell>
										<CustomTableCell className={classes.cell} >  <Link to={`/form/${product.category}/${index}`}>{button}</Link></CustomTableCell>
										<CustomTableCell className={classes.cell} ><Icon className={classes.icon} onClick={()=>this.handlDelete(index,product.category)}>delete</Icon></CustomTableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
				</div>
		);
	}
}

CustomizedTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
