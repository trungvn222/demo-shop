import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import qs from 'query-string';

import Breadcrumbs from '../../components/Breadcrumbs';
import Widget from '../../components/Widget';
import CategoriesSidebar from '../../components/CategoriesSidebar';
import Products from '../../components/ProductList';
import ProductSort from '../../components/ProductSort';
import PostsPerPage from '../../components/PostsPerPage';
import Pagination from '../../components/Pagination';
import ShowResults from '../../components/ShowResults';
import FilterByPrice from '../../components/FilterByPrice';

import { HOME_URI, CATEGORY_URI } from '../../const/route';
import { findCategoryByID } from '../../helpers/categories';
import './style.scss';

import { fetchCategories } from '../../actions/categories';
import { fetchProducts } from '../../actions/products';
import {addItemToCart} from '../../actions/cart';
const delimiter = <i className="fa fa-angle-right" aria-hidden="true"></i>;
class Categories extends PureComponent {
    crumbs = [{
        label: 'Home',
        active: false,
        url: HOME_URI
    }];

    sort = [
        { id : 'original-order', label: 'Default Sorting', active: true, link: '/' },
        { id : 'price', label: 'Price', active: false, link: '/' },
        { id : 'name', label: 'Product Name', active: false, link: '/' }
    ];

    postsPerPage = [
        { label: 5, link: '/', active: true, value: 5 },
        { label: 10, link: '/', active: false, value: 10 },
        { label: 15, link: '/', active: false, value: 15 },
        { label: 25, link: '/', active: false, value: 25 }
    ];
    
    filterPrices = [
        {
            id: 'all',
            label: 'All',
            link: '/'
        },
        {
            id: '0-200',
            label: '$0 - $200',
            link: '/',
            from: 0,
            to: 200,
        },
        {
            id: '201-500',
            label: '$201 - $500',
            link: '/',
            from : 201,
            to: 500
        },
        {
            id: '501-700',
            label: '$501 - $700',
            link: '/',
            from: 501,
            to: 700
        },
        {
            id: '701-900',
            label: '$701 - $900',
            link: '/',
            from: 701,
            to: 900
        },
    ]

    defaultValue = {
        limit: 5,
        page: 1,
        order: 'original-order',
        price: 'all',
        selectedCategory: 0,
    }

    getQueryString(){
        const { location } = this.props;
        let query = qs.parse(location.search);
        return query;
    }

    onAddToCart = (p) => {
        const {dispatch} = this.props;
        dispatch(addItemToCart({
            product: p,
            quantity: 1
        }));
    }

    // build again link and check sort is actived
    updateSort = () => {
        const query = this.getQueryString();
        const {location} =  this.props;
        const selectedOrder = query.order || this.defaultValue.order;
        let q = {...query};

        //delete page when sort changed
        delete q.page;

        this.sort.forEach( (value, index) => {
            
            if(value.id === selectedOrder){
                this.sort[index].active = true;
            }else {
                this.sort[index].active = false;
            }

            q.order = value.id;
            this.sort[index].link = `${location.pathname}?${ qs.stringify(q) }`;
            
        });
        
    }

    // build again link and check active postsPerpage
    updatePostsPerPage = () => {
        const query = this.getQueryString();
        const {location} =  this.props;
        const selectedLimit = parseInt(query.limit) || this.defaultValue.limit;
        let q = {...query};
        // delete page when posts-per-page changed
        delete q.page;

        this.postsPerPage.forEach( (value, index) => {
            if(selectedLimit === value.value){
                this.postsPerPage[index].active = true;
            }else{
                this.postsPerPage[index].active = false;
            }
            
            q.limit = value.value;

            this.postsPerPage[index].link = `${location.pathname}?${ qs.stringify(q) }`
        });
    }

    //build again link and check active price
    updateFilterPrice = () => {
        const query = this.getQueryString();
        const {location} = this.props;
        let q = {...query};
        // remove page when price change
        delete q.page;

        this.filterPrices.forEach( (value, index) => {
            let selectedPrice = query.price || this.defaultValue.price;
            if(value.id !== 'all'){
                q.price = value.id;
            }else{
                delete q.price;
            }

            

            if(selectedPrice === value.id){
                this.filterPrices[index].active = true;
            }else{
                this.filterPrices[index].active = false;
            }
            this.filterPrices[index].link = `${location.pathname}?${qs.stringify(q)}`
        })
    }

    filter = () => {
        const query = this.getQueryString();
        const {order = '', limit = this.defaultValue.limit, page = this.defaultValue.page, price = this.defaultValue.price} = query;

        let orderArgs = [];
        let selectedPrice = this.filterPrices.find( p => p.id !== 'all' && p.id === price );
        let where = {};

        switch(order){
            case 'price':
                orderArgs.push('salePrice ASC');
                break;
            case 'name':
                orderArgs.push('name ASC');
                break;
            default:
                break;
        }
        if(selectedPrice !== undefined){
            where = {
                "and" : [{"salePrice": { 'gt' : parseInt(selectedPrice.from) }}, {"salePrice": { 'lte' : parseInt(selectedPrice.to) }}] 
            };
        }

        const filter = { limit, skip : (page - 1) * limit, order: orderArgs, where };

        return filter;
    }
    breadCrumbs = function(cat = 0){
        const { categories } = this.props;
        if(categories.length != 0){
           
            if(cat !== 0) {
                let c = findCategoryByID(categories, cat);
                
                const category = {
                    label: c.name,
                    url: `${CATEGORY_URI}/${c.id}`,
                    active: true
                }

                if(this.crumbs[1] === 'undefined'){
                    this.crumbs.push(category);
                }else {
                    this.crumbs[1] = category;
                }
            }
            
        }
    }

    componentDidMount(){
        const {dispatch, match} = this.props;
        const cat = match.params.id || 0;
        const filter = this.filter();

        //update information for sort, posts per page, pagination, filter by price
        this.updateSort();
        this.updatePostsPerPage();
        this.updateFilterPrice();

        dispatch(fetchCategories());
        dispatch(fetchProducts(cat, filter));
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const { match : oldMatch, location: oldLocation } = prevProps;
        const { match, dispatch, location } = this.props;

        const oldCat = oldMatch.params.id || this.defaultValue.selectedCategory;
        const cat = match.params.id || this.defaultValue.selectedCategory;

        const query =  qs.parse(location.search);
        const oldQuery = qs.parse(oldLocation.search);

        if(
            query.order !== oldQuery.order
            || query.limit !== oldQuery.limit
            || query.page  !== oldQuery.page
            || query.price !== oldQuery.price
        ){
            // build a query when a field change
            const filter = this.filter();

            // update infomration for sort, posts per page when a filed change
            this.updateSort();
            this.updatePostsPerPage();
            this.updateFilterPrice();

            // fetch product when a field change
            dispatch(fetchProducts(cat, filter));
        }
       
        if(oldCat !== cat){
            dispatch(fetchProducts(cat));
        }
    }
    render() {
        const { categories, products, productsTotalItems } = this.props;
        const {match} = this.props;
        const selectedCategory = match.params.id || this.defaultValue.selectedCategory;
        const query = this.getQueryString();
        const limit = parseInt(query.limit) || this.defaultValue.limit;
        const selectedPage = parseInt(query.page) || this.defaultValue.page;

        this.breadCrumbs(selectedCategory);
        

        return (
            <div className="container product_section_container">
                <div className="row">
                    <div className="col product_section clearfix">
                        <Breadcrumbs items={this.crumbs} delimiter={delimiter}/>
                        <div className="sidebar">
                            <Widget label='Product Category'>
                                <CategoriesSidebar categories={categories} selectedCategory={selectedCategory} />
                            </Widget>
                            <Widget label='Filter by Price'>
                                <FilterByPrice items={this.filterPrices} />
                            </Widget>
                        </div>
                        <div className="main_content">
                            <div className="products_iso">
                                <div className="row">
                                    <div className="col">
                                        <div className="product_sorting_container product_sorting_container_top">
                                            <ul class="product_sorting">
                                                <li><ProductSort items={this.sort} /></li>
                                                <li><PostsPerPage items={this.postsPerPage} /></li>
                                            </ul>
                                            <Pagination limit={limit} totalItems={productsTotalItems} selectedPage={selectedPage} />
                                        </div>
                                        <Products products={products} addItemToCart={this.onAddToCart} />
                                        <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                            <ul className="product_sorting">
                                                <li><PostsPerPage items={this.postsPerPage} /></li>
                                            </ul>
                                            <ShowResults limit={limit} selectedPage={selectedPage} totalItems={productsTotalItems} />
                                            <Pagination limit={limit} totalItems={productsTotalItems} selectedPage={selectedPage} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.items,
    products: state.products.items,
    productsTotalItems: state.products.totalItem
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Categories);