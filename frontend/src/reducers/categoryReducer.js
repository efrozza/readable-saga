import { GET_ALL_CATEGORIES } from '../actions/index'

const STATE_INICIAL = { allCategories: [], selectedCategory = false }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, allCategories: action.categories }
    default:
      return state
  }
}
