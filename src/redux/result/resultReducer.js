import { SHOW_RESULT, HIDE_RESULT } from './resultTypes'

const initialState = {
    showResult: false
}

const resultReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_RESULT: return {
            ...state,
            showResult: true
        }
        case HIDE_RESULT: return {
            ...state,
            showResult: false
        }
        default: return state
    }
}

export default resultReducer