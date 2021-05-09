import { SAVE_DAY } from './dayTypes'

export const saveDay = day => {
    return {
        type: SAVE_DAY,
        payload: Number(day)
    }
}