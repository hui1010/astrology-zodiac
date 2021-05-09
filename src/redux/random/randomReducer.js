import { RANDOM, PERSONAL_CODE} from './randomTypes'

const initialState = {
    random: false
}

const randomReducer = (state= initialState, action) => {
    switch(action.type) {
        case RANDOM: return {
            ...state,
            random: true
        }
        case PERSONAL_CODE: return {
            ...state,
            random: false
        }
        default: return state
    }
}

export default randomReducer