import {combineReducers} from "redux";
import genderReducer from "../gender.reducer";
import categoriesReducer from "../categories.reducer";
import subCategoriesReducer from "../subCategory․reducer";
import productsReducer from "../products.reducer";

const rootReducer = combineReducers({
    categoriesReducer,
    genderReducer,
    subCategoriesReducer,
    productsReducer

})
export default rootReducer;