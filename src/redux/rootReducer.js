import { combineReducers } from 'redux'

import resultReducer from './result/resultReducer'
import yearReducer from './year/yearReducer'
import monthReducer from './month/monthReducer'
import dayReducer from './day/dayReducer'
import randomReducer from './random/randomReducer'

const rootReducer = combineReducers({
    result: resultReducer,
    year: yearReducer,
    month: monthReducer,
    day: dayReducer,
    random: randomReducer
})

export default rootReducer