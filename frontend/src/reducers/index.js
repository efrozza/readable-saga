import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import postReducer from './postsReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  posts: postReducer
})

export default rootReducer
