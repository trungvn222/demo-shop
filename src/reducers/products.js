import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/action-type';
import { mapProducts } from '../helpers/mapping';
const initialState = {
    items: [],
    loading: false,
    error: null,
    totalItem: 0,
}

const productReducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_PRODUCTS_SUCCESS:
            const items = mapProducts(action.payload.items);
            const totalPage = action.payload.pagination.total || 0;
            const limit = action.payload.pagination.limit || 0;
            return {
                ...state,
                loading: false,
                items,
                totalItem: totalPage 
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default productReducer;