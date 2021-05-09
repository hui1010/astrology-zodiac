import {SAVE_YEAR} from './yearTypes'

export const saveYear = year => {
    return {
        type: SAVE_YEAR,
        payload: Number(year)
    }
}