import {
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  VOTE_POST,
  GET_POST_DETAIL
} from '../actions/post_actions'

export default function (state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts

    case GET_POST_DETAIL:
      return [action.post]

    case ADD_POST:
      return state.concat(action.post)

    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }
        return post
      })

    case VOTE_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }
        return post
      })

    default:
      return state
  }
}
