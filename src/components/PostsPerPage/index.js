import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class PostsPerPage extends Component {
    render() {
        const {items = []} = this.props;
        if(items.length === 0){
            return null;
        }
        let current = [];
        let list = [];
        items.forEach(element => {
            if(element.active){
                current.push(<span className="num_sorting_text">{element.label}</span>);
            }
            list.push(<li className="num_sorting_btn"><Link to={element.link}><span>{element.label}</span></Link></li>);
        }); 
        return (
            <React.Fragment>
                <span>Show</span>
                {current}
                <i className="fa fa-angle-down" />
                <ul className="sorting_num">
                    {list}
                </ul>
            </React.Fragment>
        );
    }
}

PostsPerPage.propTypes = {
    items: PropTypes.array
};

export default PostsPerPage;