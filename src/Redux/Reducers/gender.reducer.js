import {GET_GENDER} from "../Actions/gender.action";
import male from "../../Components/gender/male.svg"
import activeMale from "../../Components/gender/active-male.svg"
import female from "../../Components/gender/female.svg"
import activeFemale from "../../Components/gender/active-female.svg"

const initialState = {
    genders: [
        {id: 1 , gender: male , active: activeMale, genderP : "женский"},
        {id: 2, gender: female, active: activeFemale, genderP : "мужской"}
    ]
}
const genderReducer = ( state = initialState , action) => {
    switch (action.type) {
        case GET_GENDER:
            return {
                ...state,
                genders: [...state.genders , action.payload]
            }
        default :
            return state
    }
}
export default genderReducer;