export const BASE_URI = 'http://api.demo.nordiccoder.com/api';
export const CATEGORY = {
    get : (cat = '') => `${BASE_URI}/categories${ cat !== '' ? `/${cat}` : '' }`,
    products: (cat, filter) => `${BASE_URI}/categories/${cat}/products${ filter !== '' ? `?filter=${JSON.stringify(filter)}` : '' }`,
}

export const PRODUCTS = {
    get: (filter) => `${BASE_URI}/products${ filter !== '' ? `?filter=${JSON.stringify(filter)}` : '' }`,
}

export const PRODUCT = {
    get: (id) => `${BASE_URI}/products/${id}`,
}