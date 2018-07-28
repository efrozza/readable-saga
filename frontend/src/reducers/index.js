import { combineReducers } from 'redux'
import CategoryReducer from './categoryReducer'
import PostReducer from './postsReducer'
import PostsCategory from './postsCategoryReducer'

const rootReducer = combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
  postsCategory: PostsCategory
})

export default rootReducer
