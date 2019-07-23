import { FETCH_PRODUCT_BEGIN, FETCH_PRODUCT_SUCESS, FETCH_PRODUCT_FAILURE } from '../actions/action-type';

const initialState = {
    item: null,
    loading: false,
    error: null,
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCT_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCT_SUCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.item
            }
        case FETCH_PRODUCT_FAILURE:
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
