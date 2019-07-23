import { PRODUCT } from './api';
import axios from 'axios';
import { FETCH_PRODUCT_BEGIN, FETCH_PRODUCT_SUCESS, FETCH_PRODUCT_FAILURE } from './action-type';

export const fetchProduct = (id) => {
    return dispatch => {
        dispatch(fetchProductBegin());
        return axios.get( PRODUCT.get(id) )
                .then(res => res.data )
                .then(res => dispatch(fetchProductSucess(res.body)) )
                .catch(error => dispatch(fetchProductFailure(error)))
    }
}

export const fetchProductBegin = () => ({
    type: FETCH_PRODUCT_BEGIN
});

export const fetchProductSucess = (item) => ({
    type: FETCH_PRODUCT_SUCESS,
    payload: {
        item
    }
});

export const fetchProductFailure = (error) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: {
        error
    }
})