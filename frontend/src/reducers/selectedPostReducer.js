import { SELECTED_POST } from '../actions/post_actions'

const STATE_INICIAL = { selectedPost: '' }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case SELECTED_POST:
      return { ...state, selectedPost: action.selectedPost }
    default:
      return state
  }
}
