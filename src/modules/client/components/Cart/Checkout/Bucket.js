import React, { Component } from 'react';
import SimpleCard from '../../../../../components/Card/SimpleCard';

class Bucket extends Component {
  render() {
    return (
      <div>
        <SimpleCard>
          <h2>Price Details</h2>
          <hr />
          <div style={{ textAlign: 'right' }}>
            <br />
            {this.props.total.cloth !== 0 ? (
              <div>
                Cloth Price:&#8377;
                {this.props.total.cloth}
                <br />
              </div>
            ) : null}
            {this.props.total.watchs !== 0 ? (
              <div>
                Watches Price:&#8377;
                {this.props.total.watchs}
                <br />
              </div>
            ) : null}
            {this.props.total.shoes !== 0 ? (
              <div>
                Shoes Price:&#8377;
                {this.props.total.shoes} <br />
              </div>
            ) : null}
            Delivery Charges:Free
            <br />
          </div>
          <hr />
          {this.props.total.allTotal !== 0 ? (
            <div style={{ color: 'green' }}>
              Amount Payable :&#8377;
              {this.props.total.allTotal}
            </div>
          ) : null}
          <br />
        </SimpleCard>
      </div>
    );
  }
}
export default Bucket;
