import React, { PureComponent } from 'react';
import classnames from 'classnames';
import style from './style.scss';

class AddToCartButton extends PureComponent {
    onClick = (e) => {
        e.preventDefault();
        this.props.addToCart();
    }
    render() {
        const {show = false} = this.props;
        let classes = {
            hidden: !show,
            red_button: true
        }
        return (
            <div className={`${classnames(classes)} ${style.add_to_cart_button}`}><a onClick={ (e) => this.onClick(e) } href="#">add to cart</a></div>
        );
    }
}

export default AddToCartButton;