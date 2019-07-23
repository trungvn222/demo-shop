import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import PropTypes from 'prop-types';
import './style.scss';
/* 
    {
        id: default-sort,
        label: Default Sort,
        active: true,
        link: xxxx
    }
*/
class ProductSort extends Component {
    onClick = (id) => {
        this.props.onSortFilter(id);
    }
    render() {
        const {items = []} = this.props;
        
        if(items.length === 0){
            return null;
        }

        let defaultSort = [];
        let list = [];

        
        items.map((value, index) => {
            
            if(value.active){
                defaultSort.push(<span className="type_sorting_text">{value.label}</span>)
            }
            list.push( <li className="type_sorting_btn"><Link to={value.link}>{value.label}</Link></li> );
        });
        return (
            <React.Fragment>
                { defaultSort }
                <i className="fa fa-angle-down" />
                <ul className="sorting_type">
                    {list}
                </ul>
            </React.Fragment>
        );
    }
}

ProductSort.propTypes = {
    items: PropTypes.array
};

export default ProductSort;