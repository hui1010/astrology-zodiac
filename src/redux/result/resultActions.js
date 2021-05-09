import { SHOW_RESULT, HIDE_RESULT } from './resultTypes'

export const showResult = () => {
    return {
        type: SHOW_RESULT
    }
}

export const hideResult = () => {
    return {
        type: HIDE_RESULT
    }
}