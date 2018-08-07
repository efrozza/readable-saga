import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import postReducer from './postsReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
  categories: categoryReducer,
  posts: postReducer,
  comments: commentsReducer
})

export default rootReducer
