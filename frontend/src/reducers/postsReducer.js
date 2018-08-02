import { GET_POSTS, VOTE_POST } from '../actions/post_actions'

const STATE_INICIAL = []

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts

    case VOTE_POST:
      return state.map(post => {
        if (post.id == action.post.id) {
          return action.post
        }
        return post
      })

    default:
      return state
  }
}
