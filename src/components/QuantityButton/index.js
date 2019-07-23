import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class QuantityButton extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            quantity: props.initQuantity || 1
        }
    }

    minus = (e) => {
        e.preventDefault();
        let {quantity} = this.state;
        const {afterChange} = this.props;
        quantity = --quantity || 1;
        if(typeof afterChange == "function"){
            afterChange(quantity)
        }
        this.setState({
            quantity
        });

        
    }
    plus = (e) => {
        e.preventDefault();
        let {quantity} = this.state;
        const {afterChange} = this.props;
        quantity++;
        if(typeof afterChange == "function"){
            afterChange(quantity)
        }
        this.setState({
            quantity
        });
    }
    
    render() {
        const { quantity } = this.state;
        return (
            <div className="quantity_selector">
                <span onClick={ e => this.minus(e) } className="minus"><i className="fa fa-minus" aria-hidden="true" /></span>
                <span id="quantity_value">{quantity}</span>
                <span onClick={ e => this.plus(e) } className="plus"><i className="fa fa-plus" aria-hidden="true" /></span>
            </div>
        );
    }
}

QuantityButton.propTypes = {
    afterChange: PropTypes.func
};

export default QuantityButton;