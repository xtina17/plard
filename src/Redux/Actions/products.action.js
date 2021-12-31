import {ADD_CATEGORY} from "./categories.action";

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const PRICE = "PRICE"
export const ADD_PRODUCT = "PRODUCT"

export const getProductsAC= ( response) => {
    return {
        type: GET_PRODUCTS,
        payload: response
    }

}

export const priceAC = (price) => {
    return{
        type: PRICE,
        payload: price
    }
}

export const addProductAC = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}