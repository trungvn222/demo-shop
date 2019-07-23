import { FETCH_CATEGORIES_BEGIN, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORY_SUCCESS } from '../actions/action-type';
import { mapCategories } from '../helpers/mapping';
const initialState = {
    items: [],
    item: null,
    loading: false,
    error: null
}

const categoryReducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_CATEGORIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload.item
            }
        case FETCH_CATEGORIES_SUCCESS:
            let items = mapCategories(action.payload.items);
            return {
                ...state,
                loading: false,
                items
            }
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default:
            return state;
    }
}

export default categoryReducer;
