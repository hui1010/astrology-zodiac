import {SAVE_YEAR} from './yearTypes'

const initialState = {
    year: 0
}

const yearReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_YEAR: return {
            ...state,
            year: action.payload
        }
        default: return state
    }
}

export default yearReducer