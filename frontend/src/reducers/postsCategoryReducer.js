import { GET_POSTS_CATEGORY } from '../actions/post_actions'

const STATE_INICIAL = { postsCategory: [] }

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_POSTS_CATEGORY:
      return {
        ...state,
        postsCategory: action.posts.map(post => post.id)
      }
    default:
      return state
  }
}
