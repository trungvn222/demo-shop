import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import qs from 'query-string';
import PropTypes from 'prop-types';

import './style.scss';
/* 
    prev: {
        link: '/',
        active: false|true
    },
    next: {
        link: '/',
        active: false|true
    },
    items: [
        {
            link: '/',
            label: '1',
            active: false,
            value: 1
        }
    ]
*/
class Pagination extends Component {

    pagination = {
        next: {
            active: false,
            link : '/'
        },
        prev: {
            active: false,
            link: '/'
        },
        items: [],
        totalPage: 0
    }

    updatePagination = () => {
        const {location, limit = 0, totalItems = 0, selectedPage = 0} =  this.props;
        const query = qs.parse(location.search);
        const totalPage = Math.ceil(totalItems/limit); 

        const nextPage = selectedPage < totalPage ? (selectedPage + 1) : selectedPage;
        const prevPage = selectedPage > 1 ? selectedPage - 1 : selectedPage;
        
        this.pagination.items = [];

        this.pagination.next = {
            active: selectedPage < totalPage,
            link: `${location.pathname}?${ qs.stringify({...query, page: nextPage}) }`,
        }
        this.pagination.prev = {
            active: selectedPage > 1,
            link: `${location.pathname}?${ qs.stringify({...query, page: prevPage}) }`,
        }

        this.pagination.totalPage = totalPage;

        for (let i = 1; i <= totalPage; i++) {
            let q = {...query, page: i }
            this.pagination.items.push({
                value: i,
                label: i,
                active : i === selectedPage,
                link : `${location.pathname}?${ qs.stringify(q) }`
            });
        }
    }

    render() {
        const { totalItems = 0 } = this.props;

        if(totalItems === 0){
            return null;
        }

        this.updatePagination();
        
        const {items, next, prev, totalPage} = this.pagination;

        let current =  [];
        let list = [];
        items.forEach((element, index) => {
            if(element.active){
                current.push(<span>{element.label}</span>)
            }
            list.push(<li key={index}><Link to={element.link}>{element.label}</Link></li>)
        });
        return (
            <div className="pages d-flex flex-row align-items-center">
                <div id="prev_page" className="page_prev"><Link to={prev.link}><i className="fa fa-long-arrow-left" aria-hidden="true" /></Link></div>
                <div className="page_current">
                    {current}
                    <ul className="page_selection">
                        {list}
                    </ul>
                </div>
                <div className="page_total"><span>of</span> {totalPage}</div>
                <div id="next_page" className="page_next"><Link to={next.link}><i className="fa fa-long-arrow-right" aria-hidden="true" /></Link></div>
            </div>
        );
    }
}

Pagination.propTypes = {
    litmit: PropTypes.number,
    selectedPage: PropTypes.number,
    totalItems: PropTypes.number
};

export default withRouter(Pagination);