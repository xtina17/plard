import male1 from "../../images/headersImg/male1.png";
import {ADD_SUBCATEGORY, GET_SUBCATEGORY} from "../Actions/subcategory.action";

const initialState = {
    subCategories:[
        {id: 1, subCategory: "wwww",categoryId : 1},
        {id: 2, subCategory: "кwww",categoryId : 1},

        {id: 3, subCategory: "обручальные",categoryId : 2},
        {id: 4, subCategory: "кольца кастеты",categoryId : 2},

        {id: 5, subCategory: "обручальные",categoryId : 3},
        {id: 6, subCategory: "кольца кастеты",categoryId : 3},

        {id: 7, subCategory: "обручальные",categoryId : 4},
        {id: 8, subCategory: "кольца кастеты",categoryId : 4},

        {id: 9, subCategory: "обручальные",categoryId : 5},
        {id: 10, subCategory: "кольца кастеты",categoryId : 5},

        {id: 11, subCategory: "обручальные",categoryId : 6},
        {id: 12, subCategory: "кольца кастеты",categoryId : 6},

        //
        {id: 13, subCategory: "обручальные",categoryId : 7},
        {id: 14, subCategory: "кольца кастеты",categoryId : 7},

        {id: 15, subCategory: "обручальные",categoryId : 8},
        {id: 16, subCategory: "кольца кастеты",categoryId : 8},

        {id: 17, subCategory: "обручальные",categoryId : 9},
        {id: 18, subCategory: "кольца кастеты",categoryId : 9},

        {id: 19, subCategory: "обручальные",categoryId : 10},
        {id: 20, subCategory: "кольца кастеты",categoryId : 10},

        {id: 21, subCategory: "обручальные",categoryId : 11},
        {id: 22, subCategory: "кольца кастеты",categoryId : 11},

        {id: 23, subCategory: "обручальные",categoryId : 12},
        {id: 24, subCategory: "кольца кастеты",categoryId : 12},

        {id: 25, subCategory: "ggggeg",categoryId : 13},
        {id: 26, subCategory: "ggggeg",categoryId : 13},

        {id: 27, subCategory: "ggggeg",categoryId : 14},
        {id: 28, subCategory: "ggggeg",categoryId : 14},
    ]
}
const subCategoriesReducer = ( state = initialState , action) => {
    switch (action.type) {
        case GET_SUBCATEGORY:
            return {
                ...state,
                subCategories: [...state.subCategories, action.payload]
            }
        case ADD_SUBCATEGORY:
            return {
                ...state,
                subcategories: [...state.subCategories, action.payload]
            }
        default :
            return state
    }
}
export default subCategoriesReducer;