import { GET_ALL_POSTS } from '../actions/post_actions'

const STATE_INICIAL = { allPosts: [], selectedPost: false }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, allPosts: action.posts }
    default:
      return state
  }
}
