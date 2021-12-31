import {createStore} from "redux";
import rootReducer from "./Reducers/rootReducer/root.reducer";

const store = createStore(rootReducer)

export default store;