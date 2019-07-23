import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowResults extends Component {
    
    render() {
        const { totalItems = 0, limit = 5, selectedPage = 1 } = this.props;
        let from = (selectedPage - 1)*limit + 1;
        let to = selectedPage * limit;

        if( to > totalItems ){
            to = totalItems;
        }

        return (
            <span className="showing_results">Showing {from}–{to} of {totalItems} results</span>
        );
    }
}

ShowResults.propTypes = {
    totalItems: PropTypes.number,
    limit: PropTypes.number,
    selectedPage: PropTypes.number,
};

export default ShowResults;