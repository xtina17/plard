export const GET_SUBCATEGORY = 'GET_SUBCATEGORY'
export const ADD_SUBCATEGORY = 'GET_SUBCATEGORY'


export const getSubCategoryAC = (response) => {
    return {
        type: GET_SUBCATEGORY,
        payload: response
    }
}

export const addSubCategoryAC = (sub) => {
    return {
        type: ADD_SUBCATEGORY,
        payload: sub
    }
}


