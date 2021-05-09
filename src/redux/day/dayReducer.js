import { SAVE_DAY } from './dayTypes'

const initialState = {
    day: 1
}

const dayReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_DAY: return {
            ...state,
            day: action.payload
        }
        default: return state
    }
}

export default dayReducer