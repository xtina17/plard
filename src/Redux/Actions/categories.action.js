export const GET_CATEGORIES= 'GET_POST'
export const ADD_CATEGORY = 'ADD_CATEGORY'


export const getCategoriesAC= ( response) => {
    return {
        type: GET_CATEGORIES,
        payload: response
    }

}

export const addCategoryAC = (category) => {
    return {
        type: ADD_CATEGORY,
        payload: category
    }
}