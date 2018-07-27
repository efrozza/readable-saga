import { combineReducers } from 'redux'
import CategoryReducer from './categoryReducer'

const rootReducer = combineReducers({
  categories: CategoryReducer
})

export default rootReducer
