import { combineReducers } from 'redux'
import CategoryReducer from './categoryReducer'
import PostReducer from './postsReducer'
import PostsCategory from './postsCategoryReducer'
import SelectedCategoryReducer from './selectedCategoryReducer'

const rootReducer = combineReducers({
  categories: CategoryReducer,
  selectedCategory: SelectedCategoryReducer,
  posts: PostReducer,
  postsCategory: PostsCategory
})

export default rootReducer
