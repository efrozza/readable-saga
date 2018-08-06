import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import postReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import { reducer as reduxForm } from 'redux-form'

const rootReducer = combineReducers({
  categories: categoryReducer,
  posts: postReducer,
  form: reduxForm,
  comments: commentsReducer
})

export default rootReducer
