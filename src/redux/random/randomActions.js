import { RANDOM, PERSONAL_CODE} from './randomTypes'

export const random = () => {
    return {
        type: RANDOM
    }
}

export const personalCode = () => {
    return {
        type: PERSONAL_CODE
    }
}