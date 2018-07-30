import { GET_ALL_CATEGORIES } from '../actions/category_actions'

const STATE_INICIAL = { categories: [] }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, categories: action.categories }
    default:
      return state
  }
}
