import { combineReducers } from 'redux'
import CategoryReducer from './categoryReducer'
import PostReducer from './postsReducer'
import PostsCategoryReducer from './postsCategoryReducer'
import SelectedCategoryReducer from './selectedCategoryReducer'
import SelectedPostReducer from './selectedPostReducer'

const rootReducer = combineReducers({
  categories: CategoryReducer,
  selectedCategory: SelectedCategoryReducer,
  posts: PostReducer,
  postsCategory: PostsCategoryReducer,
  selectedPost: SelectedPostReducer
})

export default rootReducer
