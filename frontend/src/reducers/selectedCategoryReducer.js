import { SELECTED_CATEGORY } from '../actions/category_actions'

const STATE_INICIAL = { selectedCategory: '' }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.selectedCategory }
    default:
      return state
  }
}
