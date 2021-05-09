import { SAVE_MONTH } from './monthTypes'

const initialState = {
    month: 1
}

const monthReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_MONTH: return {
            ...state,
            month: action.payload
        }
        default: return state
    }
}

export default monthReducer