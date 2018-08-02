import { GET_ALL_CATEGORIES } from '../actions/category_actions'

const STATE_INICIAL = []

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
