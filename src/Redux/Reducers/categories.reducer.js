import {ADD_CATEGORY, GET_CATEGORIES} from "../Actions/categories.action";
import female1 from "../../images/headersImg/female1.png"
import female2 from "../../images/headersImg/female2.png"
import female3 from "../../images/headersImg/female3.png"
import female4 from "../../images/headersImg/female4.png"
import female5 from "../..//images/headersImg/female5.png"
import female6 from "../../images/headersImg/female6.png"
import female7 from "../../images/headersImg/female7.png"
/**/
import male1 from "../../images/headersImg/male1.png"
import male2 from "../../images/headersImg/male2.png"
import male3 from "../../images/headersImg/male3.png"
import male4 from "../../images/headersImg/male4.jpg"
import male5 from "../../images/headersImg/male5.jfif"
import male6 from "../../images/headersImg/male6.jfif"
import male7 from "../../images/headersImg/male7.jfif"

const initialState = {
    categories: [
        //male
        {id: 1, genderId: 1, img: male1 ,text : "кольцo"},
        {id: 2, genderId: 1, img: male2, text : "колье"},
        {id: 3, genderId: 1, img: male3, text : "серьги"},
        {id: 4, genderId: 1, img: male4, text : "Цепь"},
        {id: 5, genderId: 1, img: male5, text : "Брошь"},
        {id: 6, genderId: 1, img: male6, text : "кулоны"},
        {id: 7, genderId: 1, img: male7, text : "браслеты"},
        //female
        {id: 8, genderId: 2, img: female1 , text : "кольцo"},
        {id: 9, genderId: 2, img: female2 , text : "колье"},
        {id: 10, genderId: 2, img: female3 , text : "серьги"},
        {id: 11, genderId: 2, img: female4 , text : "Цепь"},
        {id: 12, genderId: 2, img: female5 , text : "Брошь"},
        {id: 13, genderId: 2, img: female6 , text : "кулоны"},
        {id: 14, genderId: 2, img: female7 , text : "браслеты"}
    ]
}

const categoriesReducer = ( state = initialState , action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        default :
            return state
    }
}
export default categoriesReducer;