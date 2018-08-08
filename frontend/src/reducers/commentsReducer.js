import {
  GET_COMMENTS,
  ADD_COMMENT,
  VOTE_COMMENT,
  EDIT_COMMENT
} from '../actions/comment_actions'

const STATE_INICIAL = []

export default function (state = STATE_INICIAL, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments

    case ADD_COMMENT:
      return state.concat(action.comment)

    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          return action.comment
        }
        return comment
      })

    case VOTE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          return action.comment
        }
        return comment
      })
    default:
      return state
  }
}
