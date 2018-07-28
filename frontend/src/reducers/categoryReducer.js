import { GET_ALL_CATEGORIES, SELECTED_CATEGORY } from '../actions/index'

const STATE_INICIAL = { allCategories: [], selectedCategory: '' }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, allCategories: action.categories }
    case SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.selectedCategory }
    default:
      return state
  }
}
