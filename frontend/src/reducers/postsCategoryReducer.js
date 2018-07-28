import { GET_POSTS_CATEGORY } from '../actions/index'

const STATE_INICIAL = { postsCategory: [], selectedPost: false }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_POSTS_CATEGORY:
      return { ...state, allpostsCategoryPosts: action.posts }
    default:
      return state
  }
}
