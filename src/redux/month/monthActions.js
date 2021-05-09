import { SAVE_MONTH } from './monthTypes'

export const saveMonth = month => {
    return {
        type: SAVE_MONTH,
        payload: Number(month)
    }
}