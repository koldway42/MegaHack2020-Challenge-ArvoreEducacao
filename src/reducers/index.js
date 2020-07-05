import { combineReducers } from 'redux'

import userReducer from "./user"

const appReducers = combineReducers({
    user: userReducer
})

export default appReducers;