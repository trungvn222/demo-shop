import React, { PureComponent } from 'react';
import MainSlider from '../../components/MainSlider';
import { connect } from 'react-redux';

import QuickCategories from '../../components/QuickCategories';
import CategoriesFilter from '../../components/CategoriesFilter';
import ProductList from '../../components/ProductList';
import DealOfWeek from '../../components/DealOfWeek';

import { fetchCategories } from '../../actions/categories';
import { fetchProducts } from '../../actions/products';
import { addItemToCart } from '../../actions/cart';

class Home extends PureComponent {

    state = {
        selectedCategory: 0
    }
    onCategoriesFilter = (cat) => {
        const { dispatch } = this.props;
        dispatch(fetchProducts(cat));
        this.setState({
            selectedCategory: cat
        });
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }

    onAddToCart = (product) => {
        const { dispatch } = this.props;
        dispatch(addItemToCart({
            product,
            quantity: 1
        }));
    }


    render() {
        const {categories, products, productsLoading} = this.props;
        const {selectedCategory} = this.state;
        return (
            <React.Fragment>
                <MainSlider />
                <QuickCategories categories={categories} />
                <div className="new_arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section_title new_arrivals_title">
                                    <h2>New Arrivals</h2>
                                </div>
                            </div>
                        </div>
                        <CategoriesFilter onFilter={this.onCategoriesFilter} categories={categories} selectedCategory={selectedCategory} />
                        <ProductList addItemToCart={this.onAddToCart} products={products} loading={productsLoading}/>
                        
                    </div> 
                </div>
                <DealOfWeek />
                
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.items,
        categoriesLoading: state.categories.loading,
        categoriesError: state.categories.error,
        
        products: state.products.items,
        productsLoading: state.products.loading,
        productsError: state.products.error
    }
}
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Home);