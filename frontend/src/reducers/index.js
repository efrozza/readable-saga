import { combineReducers } from 'redux'
import CategoryReducer from './categoryReducer'
import PostReducer from './postsReducer'
import PostsCategoryReducer from './postsCategoryReducer'
import SelectedCategoryReducer from './selectedCategoryReducer'
import SelectedPostReducer from './selectedPostReducer'
import VotePostReducer from './votePostReducer'

const rootReducer = combineReducers({
  categories: CategoryReducer,
  selectedCategory: SelectedCategoryReducer,
  posts: PostReducer,
  postsCategory: PostsCategoryReducer,
  selectedPost: SelectedPostReducer,
  voteScore: VotePostReducer
})

export default rootReducer
