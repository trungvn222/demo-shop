import { FETCH_CATEGORIES_BEGIN, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE,FETCH_CATEGORY_SUCCESS  } from './action-type';
import { CATEGORY } from './api';
import axios from 'axios';

export const fetchCategoriesBegin = () => ({
    type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = items => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {items}
});
export const fetchCategorySuccess = item => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: {item}
});

export const fetchCategoriesFailure = error => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: {
        error
    }
});

export const fetchCategories = (id = '') => {
    return dispatch => {
        dispatch(fetchCategoriesBegin());
        return axios.get(CATEGORY.get(id))
                    .then(res => {
                        return res.data;
                    })
                    .then( res => {
                        
                        if(id !== ''){
                            dispatch(fetchCategorySuccess(res.body));
                        }else {
                            dispatch(fetchCategoriesSuccess(res.body));
                        }
                        
                        return res;
                    } )
                    .catch(error => {
                        dispatch(fetchCategoriesFailure(error));
                    })
    }
}


